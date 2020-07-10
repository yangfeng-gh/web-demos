(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-runtime/core-js/object/assign"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-runtime/core-js/object/assign"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.assign);
    global.merge = mod.exports;
  }
})(this, function (_assign) {
  "use strict";

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 合并多个对象
   */

  var merge = function merge(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    return _assign2.default.apply(Object, [target].concat(sources));
  };

  // 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。
  var merge2 = function merge2() {
    for (var _len2 = arguments.length, sources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }

    return _assign2.default.apply(Object, [{}].concat(sources));
  };

  {
    var obj = merge2({ a: 1 }, { b: 2 });
    console.log(obj);
  }
});

//# sourceMappingURL=merge.js.map