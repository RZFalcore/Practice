"use strict";

// 1

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(key, user[key]);
}

// 2

const countProps = function(obj) {
  let count = 0;
  for (let key in obj) {
    count += 1;
  }
  return count;
};

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// 3

const findBestEmployee = function(employees) {
  let maxHours = 0;
  let bestEmployee = "";
  for (let key in employees) {
    if (employees[key] > maxHours) {
      maxHours = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

// 4

const countTotalSalary = function(employees) {
  let total = 0;
  for (let employee in employees) {
    total += employees[employee];
  }
  return total;
};

console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400

// 5

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const getAllPropValues = function(arr, prop) {
  const props = [];
  for (let obj of arr) {
    for (let key in obj) {
      if (key === prop) {
        props.push(obj[key]);
      }
    }
  }
  return props;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []
console.log("------------------------");

// 6

const products2 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let totalCost = 0;
  for (let obj of allProdcuts) {
    if (obj.name === productName) {
      totalCost = obj.price * obj.quantity;
    }
  }
  return totalCost;
};

console.log(calculateTotalPrice(products2, "Радар")); // 5200
console.log(calculateTotalPrice(products2, "Дроид")); // 2800

// 7

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const id = Math.round(Math.random() * (1000 - 1) + 1);
    return { amount, type, id };
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Cнятие такой суммы не возможно, недостаточно средств.");
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let result;
    for (let transaction of this.transactions) {
      for (let key in transaction) {
        if (transaction[key] === id) {
          result = transaction;
        }
      }
    }
    return result;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  }
};
