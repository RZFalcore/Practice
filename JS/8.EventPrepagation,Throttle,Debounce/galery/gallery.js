"use strict";
import galleryItems from "./galleryItems.js";

const gallery = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const modalContent = document.querySelector(".lightbox__content");
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

function handleModalOpening(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  modalImg.setAttribute("src", e.target.dataset.source);
  modalWindow.classList.add("is-open");

  modalWindow.addEventListener("click", closeModal);
  document.addEventListener("keydown", handleModal);
}

function closeModal(e) {
  if (e.target !== modalExitBtn && e.target !== modalContent) {
    return;
  }

  modalImg.setAttribute("src", "");
  modalWindow.classList.remove("is-open");

  modalWindow.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", handleModal);
}

function handleModal(e) {
  if (e.key === "Escape") {
    closeModal();
  }
  const imgs = Array.from(gallery.querySelectorAll("img")).map(
    (img) => img.dataset.source
  );

  let index = imgs.indexOf(modalImg.src);

  if (e.key === "ArrowRight") {
    if (index < imgs.length - 1) {
      modalImg.setAttribute("src", imgs[index + 1]);
      return;
    }
  }

  if (e.key === "ArrowLeft") {
    if (index > 0) {
      modalImg.setAttribute("src", imgs[index - 1]);
      return;
    }
  }
}
