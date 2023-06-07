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

//zdarzenie - kliknięcie w IMG
galleryElement.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.tagName === "IMG") {
    const instance = basicLightbox.create(`
      <img id="modal-image" src="" alt="Modal Image" />
  `);
    const originalImageSrc = target.parentNode.getAttribute("href");
    const modalImage = instance.element().querySelector("#modal-image");
    modalImage.src = originalImageSrc;

    instance.show();

    //zamknięcie przy ESC
    const closeOnEscape = (event) => {
      console.log("Słucham klawiatury!!!");
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeOnEscape);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
  }
});
