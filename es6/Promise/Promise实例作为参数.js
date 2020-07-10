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
        global.Promise = mod.exports;
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
    var p1 = new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
            return resolve('success');
        }, 3000);
        // setTimeout(() => reject(new Error('fail')), 3000);
    });

    var p2 = new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
            return resolve(p1);
        }, 1000);
    });

    p2.then(function (result) {
        return console.log(result);
    }).catch(function (error) {
        return console.log(error);
    });

    // result => console.log(result) 变成了针对p1, 当p1从pending变成resolved状态后
});

//# sourceMappingURL=Promise实例作为参数.js.map