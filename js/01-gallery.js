import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItems(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src= "${preview}";
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}
const items = createGalleryItems(galleryItems);
gallery.innerHTML = items;

gallery.addEventListener("click", onHandleClick);

function onHandleClick(evt) {
  evt.preventDefault();

  basicLightbox
    .create(
      `
     <img src = ${evt.target.dataset.source}
	> `
    )
    .show();
}
