import { galleryItems } from "./gallery-items.js";

const galleryElement = document.querySelector(".gallery");

//tworzę znaczniki html
const galleryItemsMarkup = galleryItems.map((item) => {
  return `
    <li class="gallery__item">
      <a href="${item.original}" class="gallery__link">
        <img src="${item.preview}" class="gallery__image" alt="${item.description}" />
      </a>
    </li>
  `;
});

//dodaję do DOM
galleryElement.innerHTML = galleryItemsMarkup.join("");

galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.tagName === "IMG") {
    const instance = basicLightbox.create(`
  <div class="modal">
    <img id="modal-image" src="" alt="Modal Image" />
  </div>
`);
    const originalImageSrc = target.parentNode.getAttribute("href");
    const modalImage = instance.element().querySelector("#modal-image");
    modalImage.src = originalImageSrc;
    instance.show();
  }
});
