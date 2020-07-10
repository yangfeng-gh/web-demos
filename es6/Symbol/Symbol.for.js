(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/symbol', 'babel-runtime/core-js/symbol/key-for', 'babel-runtime/core-js/symbol/for'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/symbol'), require('babel-runtime/core-js/symbol/key-for'), require('babel-runtime/core-js/symbol/for'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.symbol, global.keyFor, global._for);
    global.SymbolFor = mod.exports;
  }
})(this, function (_symbol, _keyFor, _for) {
  'use strict';

  var _symbol2 = _interopRequireDefault(_symbol);

  var _keyFor2 = _interopRequireDefault(_keyFor);

  var _for2 = _interopRequireDefault(_for);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点
   * 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
   * 如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
   * 
   * Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
   * 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
   */

  var s1 = (0, _for2.default)('foo');
  var s2 = (0, _for2.default)('foo');

  s1 === s2; // true

  /**
   * Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key。
   */
  var s1 = (0, _for2.default)("foo");
  (0, _keyFor2.default)(s1); // "foo"

  var s2 = (0, _symbol2.default)("foo");
  (0, _keyFor2.default)(s2); // undefined
});

//# sourceMappingURL=Symbol.for.js.map