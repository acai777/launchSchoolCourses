const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first returns the first todo item in the list', () => {
    expect(list.first()).toBe(todo1);
  });

  test('last returns the last todo item in the list', () => {
    expect(list.last()).toBe(todo3);
  });

  test('shift removes and returns the first item in list', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('pop removes and returns the last item in list', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns true when all items in the list are done, false otherwise', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test('throw a TypeError if attempt to add an item that isn\'t a Todo object to the list', () => {
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add(new TodoList())).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
    expect(() => list.add('hi')).toThrow(TypeError);
  });

  test('itemAt correctly returns the item if the index exists, \n otherwises throw an error', () => {
    expect(() => list.itemAt(-1)).toThrow(ReferenceError);
    expect(list.itemAt(0)).toBe(todo1);
  });

  test('markDoneAt marks a todo item done at given index', () => {
    list.markDoneAt(0)
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markDoneAt(-1)).toThrow(ReferenceError);
  });

  test('markUndoneAt marks a todo at given item undone', () => {
    list.markUndoneAt(1); 

    expect(todo2.isDone()).toBe(false);
    expect(() => list.markUndoneAt(-1)).toThrow(ReferenceError);
  });

  test('markAllDone marks all todos in list done', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone(); 
    expect(list.isDone()).toBe(true);
  });

  test('removeAt removes the item at specified index', () => {
    expect(() => list.removeAt(-1)).toThrow(ReferenceError);

    expect(list.removeAt(0)).toEqual([todo1]);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = 
`---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for done todo', () => {
    list.markDoneAt(1);
    let string = 
`---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });
  
  test('toString returns different string for when all todos are done', () => {
    list.markAllDone();
    let string = 
`---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('forEach correctly iterates over the elements in the todolist object', () => {
    let result = [];
    list.forEach(todo => result.push(todo));
    expect(result).toEqual([todo1, todo2, todo3]);
  });
  
  test('filter correctly filters and returns new TodoList object', () => {
    let newList = list.filter(todo => todo.getTitle() === 'Buy milk');
    expect(newList.toArray()).toEqual([todo1]);
  });

  // Additional tests after running code coverage
  test('findByTitle correctly returns the title', () => {
    let currentObj = list.findByTitle('Buy milk');
    expect(currentObj).toBe(todo1);

    let noTitleResult = list.findByTitle('-------');
    expect(noTitleResult).toBe(undefined);
  });

  test('allDone returns new list of only the todos that are done', () => {
    list.markDoneAt(0); 
    let newList = list.allDone(); 
    expect(newList.toArray()).toEqual([todo1]);
  });

  test('allNotDone returns a new list of only the todos that are not done', () => {
    list.markDoneAt(0); 
    let newList = list.allNotDone(); 
    expect(newList.toArray()).toEqual([todo2, todo3]);
  });

  test('markDone correctly marks done by only taking in the title of the task', () => {
    list.markDone('Go to the gym');
    expect(todo3.done).toBe(true);

    list.markDone('---------');
    expect(todo3.done).toBe(true);
    expect(todo2.done).toBe(false);
    expect(todo1.done).toBe(false);
  });

  test('markAllUndone correctly marks all task not done', () => {
    list.markAllDone(); 
    expect(list.isDone()).toBe(true); 

    list.markAllUndone(); 
    expect(list.isDone()).toBe(false); 

  });
});