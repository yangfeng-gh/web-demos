(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/object/define-property', 'babel-runtime/helpers/defineProperty', 'babel-runtime/core-js/symbol'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/object/define-property'), require('babel-runtime/helpers/defineProperty'), require('babel-runtime/core-js/symbol'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.defineProperty, global.defineProperty, global.symbol);
    global.Symbol = mod.exports;
  }
})(this, function (_defineProperty2, _defineProperty4, _symbol) {
  'use strict';

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _defineProperty5 = _interopRequireDefault(_defineProperty4);

  var _symbol2 = _interopRequireDefault(_symbol);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Symbol值作为对象属性名时，不能用点运算符;
   * 在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中;
   * Symbol值作为属性名时，该属性还是公开属性，不是私有属性。
   */
  var mySymbol = (0, _symbol2.default)();

  // 第一种写法
  var a = {};
  a[mySymbol] = 'Hello!';

  // 第二种写法
  var a = (0, _defineProperty5.default)({}, mySymbol, 'Hello!');

  // 第三种写法
  var a = {};
  (0, _defineProperty3.default)(a, mySymbol, {
    value: 'Hello!'
  });

  // 以上写法都得到同样结果

  /**
   * Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
   */
  var COLOR_RED = (0, _symbol2.default)();
  var COLOR_GREEN = (0, _symbol2.default)();

  function getComplement(color) {
    switch (color) {
      case COLOR_RED:
        return COLOR_GREEN;
      case COLOR_GREEN:
        return COLOR_RED;
      default:
        throw new Error('Undefined color');
    }
  }
});

//# sourceMappingURL=作为属性的Symbol.js.map