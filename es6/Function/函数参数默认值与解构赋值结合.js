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
    "use strict";

    /**
     * 与解构赋值默认值结合使用
     */

    // 写法一
    function m1() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        return [x, y];
    }

    // 写法二
    function m2() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
            x = _ref2.x,
            y = _ref2.y;

        return [x, y];
    }

    // 上面两种写法都对函数的参数设定了默认值，区别是：
    // 写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
    // 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。

    // 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。
    // 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
    // 例一
    function f() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var y = arguments[1];

        return [x, y];
    }

    f(); // [1, undefined]
    f(2); // [2, undefined])
    // f(, 1) // 报错
    f(undefined, 1); // [1, 1]

    // 例二
    function f2(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        var z = arguments[2];

        return [x, y, z];
    }

    f2(); // [undefined, 5, undefined]
    f2(1); // [1, 5, undefined]
    // f2(1, ,2) // 报错
    f2(1, undefined, 2); // [1, 5, 2]

    // 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
    function foo() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

        console.log(x, y);
    }

    foo(undefined, null);
    // 5 null
});

//# sourceMappingURL=函数参数默认值与解构赋值结合.js.map