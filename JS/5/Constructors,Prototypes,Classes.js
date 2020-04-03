// const Manager = function(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sales = 0;

//   this.greteengs = function() {
//     return `Hello ${this.name}. You have ${this.sales} sales.`;
//   };
// };

// const Ruby = new Manager("Ruby", 22);

// console.log(Ruby);
// console.log(Ruby.greteengs());

// const Henry = new Manager("Henry", 30);

// console.log(Henry.age);
// console.log(Henry.name);

// //----------------------------------------------------

// const animal = { eat: true, sleep: true };

// const cat = Object.create(animal);
// cat.maow = true;

// console.log(cat);

// for (let key in cat) {
//   if (!cat.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// // !!!
// const catProp = Object.keys(cat);
// console.log(catProp);
// // !!!

// //---------------------------------------------------

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.getGuestInfo = function() {
//   return console.log(`Guest: ${this.name}, room : ${this.room}`);
// };

// const jake = new Guest("Jake", 1);
// const jane = new Guest("Jane", 2);

// jake.getGuestInfo();
// jane.getGuestInfo();

// //-------------------------------------------------------

// const Hero = function(name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };

// const Healer = function(name, xp, spell) {
//   Hero.call(this, name, xp);
//   this.spell = spell;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Healer.prototype = Object.create(Hero.prototype);

// Hero.prototype.greetengs = function() {
//   console.log(`${this.name} saluts you!`);
// };

// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}!`);
// };
// Healer.prototype.heal = function() {
//   console.log(`${this.name} casts ${this.spell}!`);
// };

// const hero_1 = new Warrior("Endy", 100, "Mace");
// const hero_2 = new Healer("Henry", 200, "Ray o light");

// console.log(hero_1.weapon);
// hero_2.heal();
// hero_1.greetengs();

// // ---------------------------------------------------------------

// class Guest {
//   constructor(name, room) {
//     this._name = name;
//     this._room = room;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(text) {
//     this._name = text;
//   }

//   getInfo() {
//     console.log(`
//     Guest name: ${this.name}.
//     Guest room: ${this.room}.
//     `);
//   }
// }

// const Henry = new Guest("Henry", 101);

// Henry.getInfo();
// console.log(Henry.name);
// Henry.name = "Henry II";
// console.log(Henry.name);

// // ------------------------------------------------

// class Calc {
//   constructor() {}

//   static get Pi() {
//     return 3.14;
//   }

//   static add(...args) {
//     return args.reduce((acc, i) => acc + i, 0);
//   }

//   static mult(...args) {
//     return args.reduce((acc, i) => acc * i, 1);
//   }
// }

// console.log(Calc.Pi);
// console.log(Calc.add(1, 2, 3, 4));
// console.log(Calc.mult(2, 4, 6));

// // -----------------------------------------------------

// class Animal {
//   constructor(name, color) {
//     this._name = name;
//     this._color = color;
//   }
//   move() {
//     return `${this._name} is moving...`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, color, says) {
//     super(name, color);
//     this._says = says;
//   }

//   get color() {
//     return this._color;
//   }

//   get says() {
//     return `${this._name} says ${this._says}!`;
//   }

//   info() {
//     return `${this._name} have ${this._color} color. ${this.says}!`;
//   }
// }

// const doggy = new Dog("Rex", "brown", "Whoof! Whoof!");

// console.log(doggy.move());
// console.log(doggy.color);
// console.log(doggy.says);
// console.log(doggy.info());

// --------------------------------------------------------------

// 1
console.log(
  "-----------------------------------------------------------------------"
);

const Account = function({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}. Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof"
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com"
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// 2
console.log(
  "-----------------------------------------------------------------------"
);

class User {
  constructor({ name, age, followers }) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }

  getInfo() {
    console.log(`User ${this._name} is ${this._age} and have ${this._followers} followers.
        `);
  }
}

const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17
});

poly2.getInfo(); // User Poly is 3 years old and has 17 followers

// 3
console.log(
  "-----------------------------------------------------------------------"
);

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);

    // console.log(this._items);

    return this.items;
  }
  removeItem(item) {
    return items.pop(item);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// 4
console.log(
  "-----------------------------------------------------------------------"
);

class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  append(string) {
    this._value += string;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

// 5
console.log(
  "-----------------------------------------------------------------------"
);

class Car {
  constructor({ speed = 0, maxSpeed, price, isOn, distance = 0 }) {
    this._speed = speed;
    this._maxSpeed = maxSpeed;
    this._price = price;
    this._isOn = isOn;
    this._distance = distance;
  }

  static getSpecs(car) {
    console.log(
      `Max speed: ${car._maxSpeed}, speed : ${car._speed}, is on: ${car._isOn}, distance: ${car._distance}, price ${car.price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(num) {
    return (this._price = num);
  }
  turnOn() {
    this._isOn = true;
    return this._isOn;
  }
  turnOff() {
    this._isOn = false;
    return this._isOn;
  }

  accelerate(val) {
    if (this._speed < this._maxSpeed) {
      this._speed += val;
    } else if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed;
    }
  }
  decelerate(val) {
    if (this._speed > 0) {
      this._speed = this._speed - val;
      console.log(this._speed);
    } else if (this._speed <= 0) {
      this._speed = 0;
    }
  }
  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
    return this._distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 400
