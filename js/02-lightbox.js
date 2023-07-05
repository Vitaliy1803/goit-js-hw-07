import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const itemsGallery = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
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
}

var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 });
