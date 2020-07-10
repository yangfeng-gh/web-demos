(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global._ = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Created by yvan on 2016-06-30.
     */
    function move() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        return [x, y];
    }

    move({ x: 3, y: 8 }); // [3, 8]
    move({ x: 3 }); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]

    function move() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
            x = _ref2.x,
            y = _ref2.y;

        return [x, y];
    }

    move({ x: 3, y: 8 }); // [3, 8]
    move({ x: 3 }); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]
    // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

    // undefined就会触发函数参数的默认值。
    [1, undefined, 3].map(function () {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
        return x;
    }); // [ 1, 'yes', 3 ]
});

//# sourceMappingURL=函数参数解构默认值.js.map