import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const createMarkup = galleryItems.map((item) => {
  return `
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
     src="${item.preview}"
     data-source="${item.original}"
     alt="${item.description}"
     </a>`;
});

// console.log(createMarkup);

gallery.insertAdjacentHTML("beforeend", createMarkup.join(""));

const onImageClick = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const modal = basicLightbox.create(`
  <img src="${event.target.dataset.source}">`);
  modal.show();
};

gallery.addEventListener("click", onImageClick);

// function keyPress(event) {
//   if (event.keyCode === 27) {
//     const modal = basicLightbox.create(`
//   <img src="${event.target.dataset.source}">`);
//     modal.close();
//   }
// }

// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "Escape") {
//     const modal = basicLightbox.create(`
//   <img src="${evt.target.dataset.source}">`);
//     modal.close();
//   }
// });
