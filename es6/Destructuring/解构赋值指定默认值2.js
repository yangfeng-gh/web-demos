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

    var x = void 0;
    if ([1][0] === undefined) {
        x = f();
    } else {
        x = [1][0]; //[1]的第[0]个无素
    }
    console.log(x);

    console.log([1][0]);
});

//# sourceMappingURL=解构赋值指定默认值2.js.map