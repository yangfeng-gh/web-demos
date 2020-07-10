(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/helpers/slicedToArray'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/helpers/slicedToArray'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.slicedToArray);
    global._ = mod.exports;
  }
})(this, function (_slicedToArray2) {
  'use strict';

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _hello = 'hello',
      _hello2 = (0, _slicedToArray3.default)(_hello, 5),
      a = _hello2[0],
      b = _hello2[1],
      c = _hello2[2],
      d = _hello2[3],
      e = _hello2[4];

  console.log(b);

  // 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
  var _hello3 = 'hello',
      len = _hello3.length;

  console.log(len);
});

//# sourceMappingURL=字符串的解构赋值.js.map