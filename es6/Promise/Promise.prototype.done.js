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
        global.PromisePrototypeDone = mod.exports;
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
     * Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，
     * 都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。
     * 因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。
     */

    _promise2.default.prototype.done = function (onFulfilled, onRejected) {
        this.then(onFulfilled, onRejected).catch(function (reason) {
            // 抛出一个全局错误
            setTimeout(function () {
                throw reason;
            }, 0);
        });
    };
    // 调用done方法
    _promise2.default.resolve('ayncFunc').then(function (val) {
        return val;
    }).then(function (val) {
        console.log(val);
        throw new Error('出错了');
    }).done();

    // 从上面代码可见，done方法的使用，可以像then方法那样用，提供Fulfilled和Rejected状态的回调函数，也可以不提供任何参数。
    // 但不管怎样，done都会捕捉到任何可能出现的错误，并向全局抛出。
});

//# sourceMappingURL=Promise.prototype.done.js.map