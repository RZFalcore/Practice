"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var shortid = require("shortid");

console.log(shortid.generate());

var add = function add(a, b) {
  a + b;
};

console.log(add(5, 10));

var Val = /*#__PURE__*/function () {
  function Val() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, Val);

    this.value = value;
  }

  _createClass(Val, [{
    key: "showValue",
    value: function showValue() {
      console.log(this.value);
    }
  }]);

  return Val;
}();

var bigVal = new Val(99999);
bigVal.showValue;