(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/regenerator'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/regenerator'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator);
        global._return = mod.exports;
    }
})(this, function (_regenerator) {
    'use strict';

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(gen),
        _marked2 = _regenerator2.default.mark(gen);

    /**
     * Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
     */
    function gen() {
        return _regenerator2.default.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                        _context.next = 4;
                        return 2;

                    case 4:
                        _context.next = 6;
                        return 3;

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked, this);
    }
    var v;
    var g = gen();

    v = g.next(); // { value: 1, done: false }
    v = g.return('foo'); // { value: "foo", done: true }
    v = g.next(); // { value: undefined, done: true }
    // 面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。
    // 并且，Generator函数的遍历就终止了，返回值的done属性为true，以后再调用next方法，done属性总是返回true。

    // 如果return方法调用时，不提供参数，则返回值的value属性为undefined。
    function gen() {
        return _regenerator2.default.wrap(function gen$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return 1;

                    case 2:
                        _context2.next = 4;
                        return 2;

                    case 4:
                        _context2.next = 6;
                        return 3;

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _marked2, this);
    }

    var g = gen();

    g.next(); // { value: 1, done: false }
    g.return(); // { value: undefined, done: true }
});

//# sourceMappingURL=return.js.map