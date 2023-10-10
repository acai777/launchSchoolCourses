$(function () {

  $('form').on('submit', function(e) {
    e.preventDefault();
    var character = $(e.target).val(); 
  
    $(document).off('keypress').on('keypress', function(e) {
      if (e.key !== character) {
        return;
      }
      $('a').trigger('click');
    });
    
    $('a').on('click', function(e) {
      e.preventDefault();
      $('#accordion').slideToggle();
    });
  });

});



