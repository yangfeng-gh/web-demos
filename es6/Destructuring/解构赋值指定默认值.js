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
  'use strict';

  var _ref = [],
      _ref$ = _ref[0],
      foo = _ref$ === undefined ? true : _ref$;

  foo; // true

  // 注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
  var _undefined = undefined,
      x = _undefined === undefined ? 1 : _undefined;

  // x // 1
  console.log(x);
  var _ref2 = null,
      y = _ref2 === undefined ? 1 : _ref2;

  console.log(y);
  // x // null

  // 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
  function f() {
    console.log('aaa');
  }

  var _ = 1,
      z = _ === undefined ? f() : _;

  console.log(z);
});

//# sourceMappingURL=解构赋值指定默认值.js.map