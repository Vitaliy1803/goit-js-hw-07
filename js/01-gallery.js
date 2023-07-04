import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const itemsGallery = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');


galleryContainer.insertAdjacentHTML('beforeend', itemsGallery);

galleryContainer.addEventListener('click', onImgClick);


function onImgClick (event) {
    event.preventDefault();
    console.log(event.target.nodeName);

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src = ${event.target.dataset.source} width="800" height="600">
`);

  instance.show();
  
};
