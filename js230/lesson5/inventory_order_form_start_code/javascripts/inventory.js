var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector("#order_date").textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      var iTmpl = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(iTmpl.innerHTML);
      iTmpl.remove();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
        }
      });

      return found_item;
    },
    update: function(item) { // changed
      var id = this.findID(item);
      let updatedItem = this.get(id);

      updatedItem.name = item.querySelector("[name^=item_name]").value;
      updatedItem.stock_number = item.querySelector("[name^=item_stock_number]").value;
      updatedItem.quantity = item.querySelector("[name^=item_quantity]").value;
    },
    newItem: function(e) { // changed
      e.preventDefault();
      var item = this.add();
      document.querySelector('#inventory')
              .insertAdjacentHTML('beforeend', this.template({ id: item.id }));
    },
    findParent: function(e) { // changed
      return e.target.closest("tr");
    },
    findID: function(item) { // changed
      return +item.querySelector("input[type=hidden]").value;
    },
    deleteItem: function(e) {
      // e.preventDefault();
      // var item = this.findParent(e);
      // this.remove(this.findID(item));
      // item.remove();

      e.preventDefault();
      if (e.target.classList.contains('delete')) {
        let item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
    },
    updateItem: function(e) { // changed
      // var item = this.findParent(e);
      // this.update(item);
      if (e.target.tagName == 'INPUT') {
        let item = this.findParent(e);

        this.update(item);
      }
    },
    bindEvents: function() {
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", this.deleteItem.bind(this));
      document.querySelector("#inventory").addEventListener("focusout", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  inventory.init.bind(inventory)();
});
// $($.proxy(inventory.init, inventory)); // change to DOMContentLoaded event

