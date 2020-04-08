"use strict";

const body = document.querySelector("body");

const elems = `
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> `;

body.insertAdjacentHTML("beforeend", elems);

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handleInputChange);

function handleInputChange(evt) {
  span.textContent = evt.target.value;
  if (span.textContent === "") {
    span.textContent = "незнакомец";
  }
}
