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
        global._throw = mod.exports;
    }
})(this, function (_regenerator) {
    'use strict';

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。
     */
    var g = _regenerator2.default.mark(function g() {
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return;

                    case 3:
                        _context.next = 8;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                        console.log('内部捕获', _context.t0);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, g, this, [[0, 5]]);
    });

    var i = g();
    i.next();

    try {
        i.throw(new Error('a'));
        i.throw(new Error('b'));
    } catch (e) {
        console.log('外部捕获', e);
    }
    // 内部捕获 a
    // 外部捕获 b
});

//# sourceMappingURL=throw.js.map