(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/json/stringify', 'babel-runtime/core-js/object/entries'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/json/stringify'), require('babel-runtime/core-js/object/entries'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.stringify, global.entries);
    global.entries = mod.exports;
  }
})(this, function (_stringify, _entries) {
  'use strict';

  var _stringify2 = _interopRequireDefault(_stringify);

  var _entries2 = _interopRequireDefault(_entries);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
   * 1.如果原对象的属性名是一个 Symbol 值，该属性会被忽略
   * 
   */
  var obj = { foo: 'bar', baz: 42 };
  var r = (0, _entries2.default)(obj);
  console.log('Object.entries\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4: ' + (0, _stringify2.default)(r));
});

//# sourceMappingURL=entries.js.map