"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const body = document.querySelector("body");
const list = document.createElement("ul");
list.setAttribute("id", "#ingredients");

function addListItems(listItems) {
  listItems.map((item) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    li.appendChild(p);
    p.textContent = item;
    list.appendChild(li);
  });
}

addListItems(ingredients);

body.appendChild(list);
