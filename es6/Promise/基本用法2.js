(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/promise"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/promise"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.promise);
        global._ = mod.exports;
    }
})(this, function (_promise) {
    "use strict";

    var _promise2 = _interopRequireDefault(_promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    new _promise2.default(function (resolve, reject) {
        resolve(1); // 不需要return就可以在紧随其后的then回调中获取promise成功回调的返回值
        // throw new Error('出错');
    }).then(function (v) {
        console.log(v);
    });
});

//# sourceMappingURL=基本用法2.js.map