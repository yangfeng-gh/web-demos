(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/object/get-own-property-descriptor'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/object/get-own-property-descriptor'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getOwnPropertyDescriptor);
    global.getOwnPropertyDescriptor = mod.exports;
  }
})(this, function (_getOwnPropertyDescriptor) {
  'use strict';

  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  {
    var obj = { foo: 123 };
    var foo = (0, _getOwnPropertyDescriptor2.default)(obj, 'foo');
    console.log(foo);
  }

  {
    var enumerable = (0, _getOwnPropertyDescriptor2.default)(Object.prototype, 'toString').enumerable;
    console.log(enumerable);
  }

  {
    var _enumerable = (0, _getOwnPropertyDescriptor2.default)([], 'length').enumerable;
    console.log(_enumerable);
  }
});

//# sourceMappingURL=getOwnPropertyDescriptor.js.map