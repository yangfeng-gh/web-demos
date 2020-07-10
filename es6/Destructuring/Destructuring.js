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
    global.Destructuring = mod.exports;
  }
})(this, function () {
  "use strict";

  var foo = 1,
      bar = 2,
      baz = 3;
  var _ref = ["foo", "bar", "baz"],
      third = _ref[2];
  var _ref2 = [1, 2, 3],
      x = _ref2[0],
      y = _ref2[2];
  var head = 1,
      tail = [2, 3, 4];

  var _ref3 = ['a'],
      a = _ref3[0],
      b = _ref3[1],
      c = _ref3.slice(2);

  var _ref4 = [],
      foo2 = _ref4[0];
  var _ref5 = [1],
      bar2 = _ref5[0],
      foo2 = _ref5[1];

  console.log(foo2);

  // 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。
  // 这种情况下，解构依然可以成功。
  var _ref6 = [1, 2, 3],
      x2 = _ref6[0],
      y2 = _ref6[1];
  var a2 = 1,
      _ref7 = [2, 3],
      b2 = _ref7[0],
      d2 = 4;
});

//# sourceMappingURL=Destructuring.js.map