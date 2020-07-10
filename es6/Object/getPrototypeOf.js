(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/object/set-prototype-of", "babel-runtime/core-js/object/get-prototype-of"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/object/set-prototype-of"), require("babel-runtime/core-js/object/get-prototype-of"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.setPrototypeOf, global.getPrototypeOf);
    global.getPrototypeOf = mod.exports;
  }
})(this, function (_setPrototypeOf, _getPrototypeOf) {
  "use strict";

  var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 该方法与setPrototypeOf方法配套，用于读取一个对象的prototype对象。
   * Object.getPrototypeOf(obj);
   */

  function Rectangle() {}

  var rec = new Rectangle();

  (0, _getPrototypeOf2.default)(rec) === Rectangle.prototype;
  // true

  (0, _setPrototypeOf2.default)(rec, Object.prototype);
  (0, _getPrototypeOf2.default)(rec) === Rectangle.prototype;
  // false
});

//# sourceMappingURL=getPrototypeOf.js.map