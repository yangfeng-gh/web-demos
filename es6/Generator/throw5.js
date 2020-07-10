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
        global.throw5 = mod.exports;
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
     * throw方法被捕获以后，会附带执行下一条yield语句。也就是说，会附带执行一次next方法。
     */
    var gen = _regenerator2.default.mark(function gen() {
        return _regenerator2.default.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return console.log('a');

                    case 3:
                        _context.next = 7;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                    case 7:
                        _context.next = 9;
                        return console.log('b');

                    case 9:
                        _context.next = 11;
                        return console.log('c');

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, gen, this, [[0, 5]]);
    });

    var g = gen();
    g.next(); // a
    g.throw(); // b
    g.next(); // c
});

//# sourceMappingURL=throw5.js.map