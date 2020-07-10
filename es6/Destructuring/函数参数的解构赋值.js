(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/helpers/slicedToArray"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/helpers/slicedToArray"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.slicedToArray);
    global._ = mod.exports;
  }
})(this, function (_slicedToArray2) {
  "use strict";

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Created by yvan on 2016-06-30.
   */
  function add(_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return x + y;
  }

  var z = add([1, 2]); // 3
  console.log(z);

  var arr = [[1, 2], [3, 4]];
  var arr2 = arr.map(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
        a = _ref4[0],
        b = _ref4[1];

    return a + b;
  });
  console.log(arr2);
});

//# sourceMappingURL=函数参数的解构赋值.js.map