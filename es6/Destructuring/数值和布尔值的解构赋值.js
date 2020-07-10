(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global._ = mod.exports;
  }
})(this, function () {
  "use strict";

  var _ = 123,
      s = _.toString;

  console.log(s === Number.prototype.toString); // true

  var _true = true,
      s2 = _true.toString;

  console.log(s2 === Boolean.prototype.toString); // true

  // 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。
  // 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
  var x = undefined.prop;
  var _ref = null,
      y = _ref.prop;
});

//# sourceMappingURL=数值和布尔值的解构赋值.js.map