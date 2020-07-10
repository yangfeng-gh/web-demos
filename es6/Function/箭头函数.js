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

  /**
   * ES6允许使用“箭头”（=>）定义函数。
   */

  // 箭头函数的一个用处是简化回调函数。

  // 正常函数写法
  [1, 2, 3].map(function (x) {
    return x * x;
  });

  // 箭头函数写法
  [1, 2, 3].map(function (x) {
    return x * x;
  });
});

//# sourceMappingURL=箭头函数.js.map