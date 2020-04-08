"use strict";

document.body.insertAdjacentHTML(
  "beforeend",
  `
  <input
type="text"
id="validation-input"
data-length="6"
placeholder="Введи 6 символов"
/>
`
);

const input = document
  .querySelector("#validation-input")
  .addEventListener("change", handleChange);

function handleChange(evt) {
  console.log(evt.target.dataset.length, evt.target.value.length);
  if (evt.target.value.length === +evt.target.dataset.length) {
    evt.target.classList.replace("invalid", "valid");
    evt.target.classList.remove("invalid");
  } else {
    evt.target.classList.add("invalid");
    evt.target.classList.remove("valid");
  }
}
