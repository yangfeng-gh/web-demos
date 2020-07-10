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
        global.length = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
     */

    console.log(function (a) {}.length); // 1
    console.log(function () {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    }.length); // 0
    console.log(function (a, b) {
        var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    }.length); //2

    // 这是因为length属性的含义是，该函数预期传入的参数个数。
    // 某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。
    // 同理，rest参数也不会计入length属性。

    console.log(function () {}.length); // 0

    // 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
    console.log(function () {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var b = arguments[1];
        var c = arguments[2];
    }.length); // 0
    console.log(function (a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var c = arguments[2];
    }.length); // 1

    var foo = 'outer';
    var f = function f(x) {
        return foo;
    };

    function bar() {
        var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : f;

        var foo = 'inner';
        console.log(func()); // outer
    }

    bar();

    function bar() {
        var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return foo;
        };

        var foo = 'inner';
        console.log(func());
    }

    bar(); // ReferenceError: foo is not defined
});

//# sourceMappingURL=函数的length属性.js.map