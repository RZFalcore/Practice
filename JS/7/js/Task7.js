"use strict";

const body = document.querySelector("body");

body.insertAdjacentHTML(
  "beforeend",
  `
  <div class="sizeControl">
<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
</div>
`
);

const sizeControlInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControlInput.setAttribute(
  "value",
  window.getComputedStyle(text).getPropertyValue("font-size").slice(0, 2)
);

sizeControlInput.addEventListener("input", handleSize);

function handleSize(e) {
  text.style.fontSize = `${e.target.value}px`;
}
