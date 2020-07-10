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
    global.Iterator = mod.exports;
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
   * 任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
   */

  var nodeList = document.querySelectorAll('div');
  var array = [].concat((0, _toConsumableArray3.default)(nodeList));

  // 对于那些没有部署Iterator接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。
});

//# sourceMappingURL=将Iterator接口对象转为数组.js.map