(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/helpers/toConsumableArray'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/helpers/toConsumableArray'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.toConsumableArray);
    global._ = mod.exports;
  }
})(this, function (_toConsumableArray2) {
  'use strict';

  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 扩展运算符还可以将字符串转为真正的数组。
   */

  // 上面代码的第一种写法，JavaScript会将32位Unicode字符，识别为2个字符，采用扩展运算符就没有这个问题。
  // 因此，正确返回字符串长度的函数，可以像下面这样写。
  function length(str) {
    return [].concat((0, _toConsumableArray3.default)(str)).length;
  }

  length('x\uD83D\uDE80y'); // 3

  // 凡是涉及到操作32位Unicode字符的函数，都有这个问题。因此，最好都用扩展运算符改写。
});

//# sourceMappingURL=将字符串转为数组.js.map