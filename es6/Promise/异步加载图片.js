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
    function loadImageAsync(url) {
        return new _promise2.default(function (resolve, reject) {
            var image = new Image();

            image.onload = function () {
                resolve(image);
            };

            image.onerror = function () {
                reject(new Error('Could not load images at ' + url));
            };

            image.src = url;
        });
    }

    loadImageAsync('http://pic.qiantucdn.com/58pic/19/40/65/17m58PICgSH_1024.jpg').then(function (image) {
        console.log(image.src);
    }, function () {
        console.log('rejected!');
    });
});

//# sourceMappingURL=异步加载图片.js.map