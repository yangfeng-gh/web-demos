(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/core-js/promise'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/core-js/promise'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.promise);
    global.PormiseReject = mod.exports;
  }
})(this, function (_promise) {
  'use strict';

  var _promise2 = _interopRequireDefault(_promise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * 返回一个新的Promise实例，该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致。
   */
  var p = _promise2.default.reject('出错了');
  // 等同于
  var p = new _promise2.default(function (resolve, reject) {
    return reject('出错了');
  });

  p.then(null, function (s) {
    console.log(s);
  });
  // 出错了
  // 上面代码生成一个Promise对象的实例p，状态为rejected，回调函数会立即
  // 执行。
});

//# sourceMappingURL=Pormise.reject.js.map