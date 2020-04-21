import message from "./message";

console.log(message);

const body = document.querySelector("body");
body.insertAdjacentHTML("beforeend", `<h1>${message}</h1>`);
