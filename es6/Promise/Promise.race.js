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
        global.PromiseRace = mod.exports;
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
     * 将多个Promise实例，包装成一个新的Promise实例。
     * 与Promise.all()不同的是：
     * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。
     */

    // 如果指定时间内没有获得结果，就将Promise的状态变为reject，否则变为resolve。
    var p = _promise2.default.race([fetch('/resource-that-may-take-a-while'), new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
            return reject(new Error('request timeout'));
        }, 5000);
    })]);
    p.then(function (response) {
        return console.log(response);
    });
    p.catch(function (error) {
        return console.log(error);
    });

    // 上面代码中，如果5秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
});

//# sourceMappingURL=Promise.race.js.map