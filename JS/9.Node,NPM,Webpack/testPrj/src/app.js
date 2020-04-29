const shortid = require("shortid");
const { message } = require("./message");

const add = (a, b) => {
  return a + b;
};

class Val {
  constructor(value = 1) {
    this.value = value;
  }
  showValue() {
    console.log(this.value);
  }
}

const bigVal = new Val(99999);

bigVal.showValue;

console.log(shortid.generate());
console.log(add(5, 10));

// console.log(message.message());
console.log(message());
