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
        global._ = mod.exports;
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
     * Created by yvan on 2016-07-29.
     */
    var promise = new _promise2.default(function (resolve, reject) {
        console.log('Promise');
        resolve(function () {});
    });

    promise.then(function () {
        console.log('Resolved.');
    });

    console.log('Hi!');
});

//# sourceMappingURL=新建后就会立即执行.js.map