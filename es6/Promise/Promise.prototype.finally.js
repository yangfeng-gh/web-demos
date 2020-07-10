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
        global.PromisePrototypeFinally = mod.exports;
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
     * finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。
     * 它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。
     */

    _promise2.default.prototype.finally = function (callback) {
        var P = this.constructor;
        return this.then(function (value) {
            return P.resolve(callback()).then(function () {
                return value;
            });
        }, function (reason) {
            return P.resolve(callback()).then(function () {
                throw reason;
            });
        });
    };
    // 服务器使用Promise处理请求，然后使用finally方法关掉服务器。
    // server.listen(0).then(function () {
    //     // run test
    // }).finally(server.stop);

    // 上面代码中，不管前面的Promise是fulfilled还是rejected，都会执行回调函数callback。

    _promise2.default.resolve().then(function () {
        throw new Error('finally test');
    }).finally(callback);

    function callback() {
        console.log('finally test');
    }
});

//# sourceMappingURL=Promise.prototype.finally.js.map