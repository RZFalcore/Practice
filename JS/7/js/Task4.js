"use strict";

let counter = 0;

const body = document.querySelector("body");

const div = `
  <div id="#counter" class="counter">
    <button type="button" data-action="increment">
      +
    </button>
    <span id="value">${counter}</span>
    <button type="button" data-action="decrement">
      -
    </button>
  </div>`;

body.insertAdjacentHTML("beforeend", div);

const buttonPlus = document.querySelector("[data-action=increment]");
const buttonMinus = document.querySelector("[data-action=decrement]");
const value = document.querySelector("#value");

buttonPlus.addEventListener("click", handlePlusBtn);
buttonMinus.addEventListener("click", handleMinusBtn);

function handlePlusBtn() {
  console.log("+");
  counter += 1;
  value.textContent = counter;
}
function handleMinusBtn() {
  console.log("-");
  counter -= 1;
  value.textContent = counter;
}
