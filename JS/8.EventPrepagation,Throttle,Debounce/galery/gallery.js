"use strict";
import galleryItems from "./galleryItems.js";

const gallery = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const modalExitBtn = document.querySelector("[data-action=close-lightbox]");

galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    `beforeend`,
    `<li class="gallery__item">
    <a
    class="gallery__link"
    href=${item.original}
    >
    <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt=${item.description}
    />
    </a>
    </li>
    `
  );
});

gallery.addEventListener("click", handleModalOpening);
modalExitBtn.addEventListener("click", closeModal);

function handleModalOpening(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  modalImg.setAttribute("src", e.target.dataset.source);
  modalWindow.classList.add("is-open");
}

function closeModal(e) {
  modalImg.setAttribute("src", "");
  modalWindow.classList.remove("is-open");
}
