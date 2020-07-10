(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/get-iterator", "babel-runtime/core-js/set"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/set"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getIterator, global.set);
    global.Set = mod.exports;
  }
})(this, function (_getIterator2, _set) {
  "use strict";

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  var _set2 = _interopRequireDefault(_set);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var s = new _set2.default();

  [2, 3, 5, 4, 5, 2, 2].forEach(function (x) {
    return s.add(x);
  });

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(s), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      console.log("set\u4E2D\u7684\u5143\u7D20\u81EA\u52A8\u53BB\u91CD: " + i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  console.log("set\u53D6\u503C\uFF1A" + s.values().next().value);
});

//# sourceMappingURL=Set.js.map