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
     *
     */

    // setTimeout(print, 500, 'hello');
    // function print(val) {
    //     console.log(val);
    // }
    //
    // function timeout(ms) {
    //     Generator.prototype.return new Promise((resolve, reject) => {
    //         setTimeout(resolve, ms, 'done');
    //     });
    // }
    //
    // timeout(1000).then((value) => {
    //     console.log(value);
    // });

    // var p = new Promise((resolve, reject) => {
    //     resolve(callback());
    // });

    // 以上代码简写为
    var p = _promise2.default.resolve(callback());

    function callback() {
        console.log('callback');
    }

    var p2 = new _promise2.default(function (resolve, reject) {
        reject(new Error('p2 error rejected'));
    });

    p2.then(function () {
        console.log('p2 resolved');
    });
});

//# sourceMappingURL=基本用法.js.map