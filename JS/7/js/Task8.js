"use strict";

const body = document.querySelector("body");
body.insertAdjacentHTML(
  "beforebegin",
  `
  <div id="controls">
<input type="number" min="0" max="100" step="1" />
<button type="button" data-action="render">Создать</button>
<button type="button" data-action="destroy">Очистить</button>
</div>
<div id="boxes"></div>
`
);

const controls = document.querySelector("#controls");
const input = document.querySelector("#controls > input");
const render = document.querySelector("[data-action=render]");
const destroy = document.querySelector("[data-action=destroy]");
const boxes = document.querySelector("#boxes");

boxes.setAttribute("style", "display: flex; justify-content: center");
controls.addEventListener("click", handleControlsChange);

function handleControlsChange(event) {
  event.target.dataset.action === "render" && handleCreateBoxes(input.value);
  event.target.dataset.action === "destroy" && handleDestroyBoxex();
}

function handleCreateBoxes(amount) {
  let boxSide = 30;
  const boxWrapper = document.createDocumentFragment();
  console.log(amount);
  function colorRandomizer() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  }

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      `width: ${boxSide}px; height: ${boxSide}px; background-color: ${colorRandomizer()};`
    );
    boxSide += 10;
    boxWrapper.appendChild(div);
  }
  boxes.appendChild(boxWrapper);
}

function handleDestroyBoxex() {
  boxes.innerHTML = "";
}
