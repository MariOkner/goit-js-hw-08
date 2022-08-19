import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryImages);

galleryEl.addEventListener('click', onGalleryClick)

function createGallery() {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__list">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                    title="${description}"
                />
            </a>
        </li>
        `; 
    }).join('');  
}

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'tittle',
    captionPosition: 'bottom',
    captionDelay: 250,
    className: 'lightbox',
    enableKeyboard: true,   
});
    // lightbox.next();