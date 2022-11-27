// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryСontainer = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(item => {
  return `
      <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
    })
    .join('');

galleryСontainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
