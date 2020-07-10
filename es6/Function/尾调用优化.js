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
     * 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，
     * 就是指某个函数的最后一步是调用另一个函数。
     */

    // 以下几种情况，都不属于尾调用。

    // 情况一
    function f(x) {
        var y = g(x);
        return y;
    }

    // 情况二
    function f(x) {
        return g(x) + 1;
    }

    // 情况三
    function f(x) {
        g(x);
    }

    // 情况四
    function f(x) {
        if (x > 0) {
            return m(x);
        }
        return n(x);
    }
});

//# sourceMappingURL=尾调用优化.js.map