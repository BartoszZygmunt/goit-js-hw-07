import { galleryItems } from "./gallery-items.js";
//import * as basicLightbox from "basiclightbox";

const galleryElement = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems.map((item) => {
  return `
    <li class="gallery__item">
      <a href="${item.original}" class="gallery__link">
        <img src="${item.preview}" class="gallery__image" alt="${item.description}" />
      </a>
    </li>
  `;
});

galleryElement.innerHTML = galleryItemsMarkup.join("");

const instance = basicLightbox.create(`
  <div class="modal">
    <img id="modal-image" src="" alt="Modal Image" />
  </div>
`);

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.tagName === "IMG") {
    const originalImageSrc = target.parentNode.getAttribute("href");
    instance.show();
  }
});
