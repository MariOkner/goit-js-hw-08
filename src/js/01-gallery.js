// import SimpleLightbox from "simplelightbox";
const SimpleLightbox = require('simpleLightbox');
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

document.addEventListener('keydown', onKeyDown);
const lightbox = basicLightbox.create('');

const galleryEl = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryImages);

galleryEl.addEventListener('click', onGalleryClick);

function createGallery() {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__list">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>    
        </li>
        `; 
    }).join('');  
}

function onGalleryClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
    
    lightbox.element().innerHTML = 
    `<img class="active"
        src="${event.target.dataset.source}" width="800" height="600"
    />`;
    lightbox.show();
}

function onKeyDown(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        lightbox.close();
    }
}

