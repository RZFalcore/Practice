"use strict";

// 1
console.log("1");
const name = "ГЗП";
let price = 1000;
console.log(`Выбран ${name}, цена за шт. ${price}.`);
price = 2000;
console.log(`Выбран ${name}, цена за шт. ${price}.`);

//2
console.log("2");
const total = 100;
let ordered = 50;

if (ordered < total) {
  console.log("Заказ принят");
} else {
  console.log("Недостаточно товаров");
}

//3;
console.log("3");

const ADMIN_PASSWORD = "qwerty";
const password = prompt("Password");
let message;

if (password === null) {
  message = "Отменено пользователем";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
} else {
  message = "Доступ запрещен";
}

console.log(message);

// 4
console.log("4");

let credits = 23580;
const pricePerDroid = 3000;

const query = prompt("Сколько дроидов?");

if (!query) {
  console.log("Отменено пользователем");
} else {
  const totalPrice = query * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств!");
  } else {
    credits = credits - query * pricePerDroid;
    console.log(
      `Вы купили ${query} дроидов. На счету осталось ${credits} кредитов.`
    );
  }
}

//5
console.log("5");

const country = prompt("Введите страну: ");

switch (country.toLowerCase()) {
  case "китай":
    console.log(`Доставка в ${country} будет стоить 100 кредитов`);
    break;
  case "чили":
    console.log(`Доставка в ${country} будет стоить 250 кредитов`);
    break;
  case "австралия":
    console.log(`Доставка в ${country} будет стоить 170 кредитов`);
    break;
  case "индия":
    console.log(`Доставка в ${country} будет стоить 80 кредитов`);
    break;
  case "ямайка":
    console.log(`Доставка в ${country} будет стоить 120 кредитов`);
    break;

  default:
    console.log("В вашей стране достака не доступна");
    break;
}

//6
console.log("6");

let input;
let sum = 0;

do {
  input = prompt("Введите число.");
  if (typeof input === !Number) {
    console.log("Вводить только числа!");
  } else {
    sum += Number(input);
  }
} while (input !== null);

console.log(sum);
