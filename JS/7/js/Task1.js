"use strict";
// 1
const ul = document.querySelector("#categories");
const headers = document.querySelectorAll("h2");
const lists = document.querySelectorAll(".item > ul");

console.log(`В списке ${ul.children.length} категории.`);

for (let i = 0; i < headers.length; i += 1) {
  console.log(`Категория: ${headers[i].textContent}.`);
  console.log(`Количество елементов: ${lists[i].children.length}.`);
}
