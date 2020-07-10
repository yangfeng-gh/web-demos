(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/core-js/object/get-own-property-descriptor'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/core-js/object/get-own-property-descriptor'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.classCallCheck, global.createClass, global.getOwnPropertyDescriptor);
    global._enum = mod.exports;
  }
})(this, function (_classCallCheck2, _createClass2, _getOwnPropertyDescriptor) {
  'use strict';

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 属性的可枚举性
   */

  var obj = { foo: 123 };
  var desc = (0, _getOwnPropertyDescriptor2.default)(obj, 'foo');
  console.log(desc);

  var isEnumerable = (0, _getOwnPropertyDescriptor2.default)(Object.prototype, 'toString').enumerable;
  console.log(isEnumerable);

  var toString = (0, _getOwnPropertyDescriptor2.default)(Object.prototype, 'toString').enumerable;
  console.log(toString);
  // false

  var len = (0, _getOwnPropertyDescriptor2.default)([], 'length').enumerable;
  console.log(len);
  // false

  // 另外，ES6规定，所有Class的原型的方法都是不可枚举的。
  var classPrototype = (0, _getOwnPropertyDescriptor2.default)(function () {
    function _class() {
      (0, _classCallCheck3.default)(this, _class);
    }

    (0, _createClass3.default)(_class, [{
      key: 'foo',
      value: function foo() {}
    }]);
    return _class;
  }().prototype, 'foo').enumerable;
  console.log(classPrototype);
  // false
});

//# sourceMappingURL=enum.js.map