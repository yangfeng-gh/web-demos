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

    var _console;

    /**
     * 扩展运算符（spread）是三个点（...）
     * 将一个数组转为用逗号分隔的参数序列。
     */

    (_console = console).log.apply(_console, [1, 2, 3]);

    function push(array) {
        for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
        }

        array.push.apply(array, items);
    }

    function add(x, y) {
        return x + y;
    }

    var numbers = [4, 38];
    var sum = add.apply(undefined, numbers); // 42
    console.log(sum);

    // 由于JavaScript不提供求数组最大元素的函数，所以只能套用Math.max函数，将数组转为一个参数序列，然后求最大值。
    // ES5的写法
    Math.max.apply(null, [14, 3, 77]);

    // ES6的写法
    Math.max.apply(Math, [14, 3, 77]);

    // 等同于
    Math.max(14, 3, 77);

    // ES5的写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);

    // ES6的写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1.push.apply(arr1, arr2);

    // ES5
    var d1 = new (Date.bind.apply(Date, [null, 2015, 1, 1]))();
    // ES6
    var d2 = new (Function.prototype.bind.apply(Date, [null].concat([2015, 1, 1])))();
    console.log(d1, d2);
});

//# sourceMappingURL=扩展运算符.js.map