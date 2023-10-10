document.addEventListener('DOMContentLoaded', () => {
  ////////////////////////////
  // SETUP 
  ////////////////////////////
  // div to add the photos to.
  let slidesContainer = document.querySelector('#slides');
  let photosTemplate = Handlebars.compile(document.querySelector('#photos').innerHTML)

  // header to contain photo info.
  let photoInfoContainer = document.querySelector('section > header')
  let photoInfoTemplate = Handlebars.compile(document.querySelector('#photo_information').innerHTML)

  // header to contain photo comments 
  let photoCommentsContainer = document.querySelector('#comments > ul');
  let commentsTemplate = Handlebars.compile(document.querySelector('#photo_comments').innerHTML);
  Handlebars.registerPartial('comment', document.querySelector('#photo_comment').innerHTML);

  // slide show indicators 
  let prev = document.querySelector('a.prev');
  let next = document.querySelector('a.next');
  
  // like and favorite anchors. Can't set these yet until initial AJAX request to get photo info.
  let likesBtn;
  let favoritesBtn;

  // Comment form 
  //let form = document.querySelector('form');

  ////////////////////////////
  // RENDER 
  ////////////////////////////
  let xhr = new XMLHttpRequest(); 
  xhr.open('GET', '/photos');
  xhr.responseType = 'json';
  xhr.send(); 

  xhr.addEventListener('load', e => {
    // Photo
    slidesContainer.innerHTML = photosTemplate({ photos: xhr.response});

    // Photo Info
    let photoId = xhr.response[0]["id"];
    let photo = xhr.response.filter(item => item.id === photoId)[0];
    photoInfoContainer.innerHTML = photoInfoTemplate(photo);

    // Can now set the like and favorite buttons. 
    likesBtn = document.querySelector('.button.like');
    favoritesBtn = document.querySelector('.button.favorite');

    // Comments 
    let commentsRequest = new XMLHttpRequest(); 
    commentsRequest.open('GET', `/comments?photo_id=${photoId}`);
    commentsRequest.responseType = 'json';
    commentsRequest.send(); 

    commentsRequest.addEventListener('load', e => {
      photoCommentsContainer.innerHTML = commentsTemplate({comments: commentsRequest.response});
    });

    // Anchor event listeners
    // slides containing all figures. To allow for switching between panels later 
    let slides = document.querySelectorAll('figure');
    let currentSlide = slides[0];

    // PREV
    prev.addEventListener('click', e => {
      e.preventDefault(); 
      let prevSlide = currentSlide.previousElementSibling; 
      if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
      }
      currentSlide.classList.add('hide');
      currentSlide.classList.remove('show');

      prevSlide.classList.remove('hide');
      prevSlide.classList.add('show');

      currentSlide = prevSlide; 

      // render photo content (photo info, and comments)
      photo = xhr.response.filter(item => item.id === Number(currentSlide.getAttribute('data-id')))[0];
      photoInfoContainer.innerHTML = photoInfoTemplate(photo);

      // Comments 
      commentsRequest = new XMLHttpRequest(); 
      commentsRequest.open('GET', `/comments?photo_id=${currentSlide.getAttribute('data-id')}`);
      commentsRequest.responseType = 'json';
      commentsRequest.send(); 

      commentsRequest.addEventListener('load', e => {
        photoCommentsContainer.innerHTML = commentsTemplate({comments: commentsRequest.response});
      });
    });

    //NEXT 
    next.addEventListener('click', e => {
      e.preventDefault(); 
      let nextSlide = currentSlide.nextElementSibling; 
      if (!nextSlide) {
        nextSlide = slides[0];
      }
      currentSlide.classList.add('hide');
      currentSlide.classList.remove('show');

      nextSlide.classList.remove('hide');
      nextSlide.classList.add('show');

      currentSlide = nextSlide; 

      // render photo content (photo info, and comments)
      photo = xhr.response.filter(item => item.id === Number(currentSlide.getAttribute('data-id')))[0];
      photoInfoContainer.innerHTML = photoInfoTemplate(photo);

      // Comments 
      commentsRequest = new XMLHttpRequest(); 
      commentsRequest.open('GET', `/comments?photo_id=${currentSlide.getAttribute('data-id')}`);
      commentsRequest.responseType = 'json';
      commentsRequest.send(); 

      commentsRequest.addEventListener('load', e => {
        photoCommentsContainer.innerHTML = commentsTemplate({comments: commentsRequest.response});
      });
    });

    /////
    likesBtn.addEventListener('click', e => {
      e.preventDefault(); 

      let request = new XMLHttpRequest(); 
      request.open('POST', "/photos/like");
      // request.setRequestHeader(`Content-Type`, 'application/json')
      // request.send(JSON.stringify({photo_id: currentSlide.getAttribute('data-id')}));

      request.setRequestHeader(`Content-Type`, 'application/x-www-form-urlencoded; charset=UTF-8')
      request.send('photo_id=' + currentSlide.getAttribute('data-id')); // to send data, still need in this format of photo_id=6, AND to set the content type header...... or else internal 500 error occurs. Tested it out yourself... Need to review how to send data in POST requests. should always sent content-type header, and also need in the right format. Cannot literally send the photo ID by itself e.g., request.send(1). No. 

      request.addEventListener('load', e => {
        // let data = request.response;
        //console.log(data);
        let data = JSON.parse(request.responseText)
        ///console.log(JSON.parse(request.responseText))
        likesBtn.textContent = likesBtn.textContent.replace(/\d+/, data.total);
      });
    });

    favoritesBtn.addEventListener('click', e => {
      e.preventDefault(); 

      let request = new XMLHttpRequest(); 
      request.open('POST', "/photos/favorite");
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.send('photo_id=' + currentSlide.getAttribute('data-id'));

      request.addEventListener('load', e => {
        let data = JSON.parse(request.responseText); 
        favoritesBtn.textContent = favoritesBtn.textContent.replace(/\d+/, data.total);
      });
    });

    // // Form submission event listener
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      let form = e.target; 
      
      let formData = new FormData(form);
      formData.set('photo_id', currentSlide.getAttribute('data-id')); // do I NEED to do this?
      let queryString = new URLSearchParams(formData).toString();

      let request = new XMLHttpRequest(); 
      request.open('POST', '/comments/new');
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.send(queryString);

      request.addEventListener('load', e => {

        let jsonData = JSON.parse(request.responseText);

        let newComment = commentsTemplate(jsonData);
        // console.log(newComment);
        // console.log('hi')
        let photoCommentsContainer = document.querySelector('#comments ul');
        photoCommentsContainer.insertAdjacentHTML("beforeend", newComment); 
      });

      form.reset();
    });

    
    /*
    // Suggested solution implementation
    document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      let form = e.target;
      let href = form.getAttribute("action");
      let method = form.getAttribute("method");
      let data = new FormData(form);
      let currentSlideId = currentSlide.getAttribute('data-id');
      data.set('photo_id', currentSlideId);
    
      fetch(href, {
        method: method,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: new URLSearchParams([...data])
      })
      .then(response => response.json())
      .then(json => {
        let commentsList = document.querySelector('#comments ul');
        commentsList.insertAdjacentHTML('beforeend', commentsTemplate(json));
        form.reset();
      });
    });

    */


  });
});