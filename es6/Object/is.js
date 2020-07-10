(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/object/is'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/object/is'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.is);
        global.is = mod.exports;
    }
})(this, function (_is) {
    'use strict';

    var _is2 = _interopRequireDefault(_is);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * 与严格比较运算符（===）的行为基本一致
     * NaN === NaN
     */

    (0, _is2.default)('foo', 'foo');
    // true
    (0, _is2.default)({}, {})
    // false

    + 0 === -0; //true
    NaN === NaN; // false

    (0, _is2.default)(+0, -0); // false
    (0, _is2.default)(NaN, NaN); // true

    // ES5可以通过下面的代码，部署Object.is
    Object.defineProperty(Object, 'is', {
        value: function value(x, y) {
            if (x === y) {
                // 针对+0 不等于 -0的情况
                return x !== 0 || 1 / x === 1 / y;
            }
            // 针对NaN的情况
            return x !== x && y !== y;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });

    // polyfill
    if (!_is2.default) {
        Object.is = function (x, y) {
            // SameValue algorithm
            if (x === y) {
                //  +0 != -0, 当x!==0时，返回true, 当x==+0,y==-0(y==+0,x==-0)时，1/x == Infinity, 1/y==-Infinity, 根据Infinity ！= -Infinity
                // 推算出+0 != -0
                return x !== 0 || 1 / x === 1 / y;
            } else {
                //  NaN == NaN, 根据NaN不等于自身的特点判断出x==NaN,y==NaN时返回true, 其他x!=y的情况返回false
                return x !== x && y !== y;
            }
        };
    }
});

//# sourceMappingURL=is.js.map