"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const body = document.querySelector("body");
const galery = document.createElement("ul");
galery.setAttribute("id", "galery");
galery.classList.add("galery");

body.appendChild(galery);

const list = images
  .map((img) => {
    return `<li><img src=${img.url} alt=${img.alt} /></li>`;
  })
  .join("");

galery.insertAdjacentHTML("afterbegin", list);
