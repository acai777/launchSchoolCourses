document.addEventListener('DOMContentLoaded', async () => {
  let photosTemplate = Handlebars.compile(document.querySelector('#photos').innerHTML);
  let photoInfoTemplate = Handlebars.compile(document.querySelector('#photo_information').innerHTML);
  let photoContainer = document.querySelector('#slides'); // to contain the photo
  let infoContainer = document.querySelector('section > header'); // to contain the photo info

  let data = await fetch('/photos')
    .then(data => data.json());
    let firstPhotoId = data[0].id; 

  // Add photo to the web page! 
  photoContainer.insertAdjacentHTML("afterbegin", photosTemplate({photos: data}));

  // Add photo info to the webpage. Delete previous info, if any
  while (infoContainer.childNodes.length !== 0) {
    infoContainer.childNodes[0].remove();
  }
  infoContainer.insertAdjacentHTML("afterbegin", photoInfoTemplate(data.filter(obj => obj.id === firstPhotoId)[0]));

});