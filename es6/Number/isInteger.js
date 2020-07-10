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
        global.isInteger = mod.exports;
    }
})(this, function () {
    'use strict';

    /**
     * Created by yvan on 2016-06-30.
     */
    (function (global) {
        var floor = Math.floor,
            isFinite = global.isFinite;

        Object.defineProperty(Number, 'isInteger', {
            value: function isInteger(value) {
                return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && floor(value) === value;
            },
            configurable: true,
            enumerable: false,
            writable: true
        });
    })(undefined);
});

//# sourceMappingURL=isInteger.js.map