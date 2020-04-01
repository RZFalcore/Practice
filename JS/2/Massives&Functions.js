"use strict";

// 1

const logItems = function(array) {
  for (let i in array) {
    console.log(`${Number(i) + 1} - ${array[i]}`);
  }
};

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 2

const calculatingEngravingPrice = function(message, pricePerWord) {
  const splitMessage = message.split(" ");
  console.log(splitMessage.length * pricePerWord);
};

calculatingEngravingPrice("qwett qesad fasf", 10);

// 3

const findLongestWord = function(string) {
  const splitString = string.split(" ");
  let longestWord = "";
  for (const word in splitString) {
    if (splitString[word].length >= longestWord.length) {
      longestWord = splitString[word];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

// 4

const formatString = function(string) {
  if (string.length <= 40) {
    return string;
  }

  if (string.length > 40) {
    return string.slice(0, 39) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

// 5

const checkForSpam = function(string) {
  const result =
    string.toLowerCase().includes("spam") ||
    string.toLowerCase().includes("sale");
  return result;
};

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// 6

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введите число");
//   if (isNaN(input)) {
//     alert("Не число!");
//     continue;
//   } else {
//     numbers.push(Number(input));
//   }
// } while (input !== null);

// for (const number of numbers) {
//   total += number;
// }

// console.log(`Общая сумма чисел равна ${total}`);

// 7
console.log("7-----------------------");
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(logins, login) {
  return !logins.includes(login);
};

const addLogin = function(logins, login) {
  if (isLoginValid(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (isLoginUnique(logins, login) === false) {
    console.log("Такой логин уже используется!");
  } else {
    logins.push(login);
    console.log("Логин успешно добавлен!");
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
