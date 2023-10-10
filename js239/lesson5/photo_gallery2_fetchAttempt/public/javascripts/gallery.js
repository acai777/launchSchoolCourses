document.addEventListener('DOMContentLoaded', event => {
  const templates = {};
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
  });

  document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
  });

  //////////////////////////
  // Previous/Next Anchors
  //////////////////////////
  let photoId;
  let prevAnchor = document.querySelector('.prev');
  let nextAnchor = document.querySelector('.next');

  prevAnchor.addEventListener('click', anchorHandler);
  nextAnchor.addEventListener('click', anchorHandler);
  //////////////////////////

  //////////////////////////
  // Like and Favorite
  //////////////////////////
  document.querySelector("section > header").addEventListener("click", e => {
    e.preventDefault();
    let button = e.target;
    let buttonType = button.getAttribute("data-property");
    if (buttonType) {
      let href = button.getAttribute("href");
      // let dataId = button.getAttribute("data-id"); // don't use it, you have photoId which is same
      let text = button.textContent;

      fetch(href, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8', 
        },
        body: 'photo_id=' + photoId,
      })
        .then(response => response.json())
        .then(json => {
          button.textContent = text.replace(/\d+/, json.total);
  
          // Redefine the `photos` variable, which contains the array of objects containing data on each photo.
          fetch("/photos")
          .then(response => response.json())
          .then(json => photos = json);
        });
    }
  });
  
  //////////////////////////

  //////////////////////////
  // Form Submission
  //////////////////////////
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let url = e.currentTarget.getAttribute('action');
    let method = e.currentTarget.getAttribute('method');

    let formData = new FormData(e.currentTarget);
    formData.set('photo_id', photoId); // do I NEED to do this? A: YES. Check out the form. Has the hidden input of type hidden where the name is photo_id. The default value is 1. Always want to reset to current photo!
    let queryString = new URLSearchParams(formData).toString();

    fetch(url, {
      method: method, 
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: queryString,
    })
      .then(response => response.json())
      .then(json => {
        let commentsList = document.querySelector('#comments ul');
        commentsList.insertAdjacentHTML('beforeend', templates.comment(json));
        e.target.reset();
      });

  });
  
  //////////////////////////
  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      photoId = photos[0].id
      renderPhotoInformation(photoId);
      getCommentsFor(photoId);
  });

  function renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    let photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
    let header = document.querySelector("section > header");
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }

  function getCommentsFor(idx) {
    fetch("/comments?photo_id=" + idx)
      .then(response => response.json())
      .then(comment_json => {
        let comment_list = document.querySelector("#comments ul");
        comment_list.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment_json }));
    });
  }

  function removePhotoInformation() {
    let header = document.querySelector("section > header");
    while (header.childNodes.length !== 0) {
      header.childNodes[0].remove();
    }
    //header.childNodes.forEach(photoDetail => photoDetail.parentNode.removeChild(photoDetail));
  }

  function removeComments() {
    let comment_list = document.querySelector("#comments ul");
    while (comment_list.childNodes.length !== 0) {
      comment_list.childNodes[0].remove();
    }
  }

  function anchorHandler(e) {
    e.preventDefault(); 
    let anchor = e.target;
    let prevId = photoId; 

    if (anchor.classList.contains('prev')) {
      if (photoId === 1) {
        photoId = photos.length;
      } else {
        photoId -= 1;
      }
    } else if (anchor.classList.contains('next')){
      if (photoId === photos.length) {
        photoId = 1;
      } else {
        photoId += 1;
      }
    }

    // Hide previous photo, show the prev/next photo
    let prevPhoto = document.querySelector(`[data-id="${prevId}"]`)

    prevPhoto.classList.remove('show');
    prevPhoto.classList.add('hide');

    let currPhoto = document.querySelector(`[data-id="${photoId}"]`)

    currPhoto.classList.remove('hide');
    currPhoto.classList.add('show');

    // Remove previous photo details and comments
    removePhotoInformation();
    removeComments();

    // Add new photo details and comments
    renderPhotoInformation(photoId);
    getCommentsFor(photoId);
  }

  
});