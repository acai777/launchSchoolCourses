document.addEventListener('DOMContentLoaded', () => {
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
  };

  let post2 = {
    title: 'My title: Blah Blah',
    published: 'September 3, 2023',
    body: '<p>HAHAHAHAHAHAHAHAHAHA</p>',
  }

  let postsArray = [
    post, 
    post2,

  ]
  
  let $body = $('body');
  Handlebars.registerPartial('tag', $('#tag').html());
  let postTemplate = Handlebars.compile($('#post').html());


  $body.append(postsArray.map(post => postTemplate(post)).join(''));

}); 
  


