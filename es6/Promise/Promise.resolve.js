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
        global.PromiseResolve = mod.exports;
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
     * 将现有对象转为Promise对象
     */

    _promise2.default.resolve('foo');
    // 等价于
    new _promise2.default(function (resolve) {
        return resolve('foo');
    });

    // （1）参数是一个Promise实例
    // 如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
    var p = new _promise2.default(function (resolve, reject) {
        resolve('success');
    });
    var p2 = _promise2.default.resolve(p);
    console.log(p === p2);

    // （2）参数是一个thenable对象
    // thenable对象指的是具有then方法的对象
    var thenable = {
        then: function then(resolve, reject) {
            resolve(42);
        }
    };
    // Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法
    var p1 = _promise2.default.resolve(thenable);
    p1.then(function (value) {
        console.log(value); // 42
    });

    // （3）参数不是具有then方法的对象，或根本就不是对象
    // 如果参数是一个原始值，或者是一个不具有then方法的对象，
    // 则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。
    var p = _promise2.default.resolve('Hello');

    p.then(function (s) {
        console.log(s);
    });
    // Hello

    // （4）不带有任何参数
    setTimeout(function () {
        console.log('three');
    }, 0);

    _promise2.default.resolve().then(function () {
        console.log('two');
    });

    console.log('one');
    // 上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
    // Promise.resolve()在本轮“事件循环”结束时执行，
    // console.log(’one‘)则是立即执行，因此最先输出。
});

//# sourceMappingURL=Promise.resolve.js.map