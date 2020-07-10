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

    /**
     * 我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。
     */
    var preloadImage = function preloadImage(path) {
        return new _promise2.default(function (resolve, reject) {
            var image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.src = path;
        });
    };
});

//# sourceMappingURL=加载图片.js.map