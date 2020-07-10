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
        global.throw2 = mod.exports;
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
     * 不要混淆遍历器对象的throw方法和全局的throw命令。全局的throw命令只能被函数体外的catch语句捕获。
     */
    var g = _regenerator2.default.mark(function g() {
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!true) {
                            _context.next = 13;
                            break;
                        }

                        _context.prev = 1;
                        _context.next = 4;
                        return;

                    case 4:
                        _context.next = 11;
                        break;

                    case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](1);

                        console.log('内部捕获', _context.t0.message);

                        if (!(_context.t0.message != 'a')) {
                            _context.next = 11;
                            break;
                        }

                        throw _context.t0;

                    case 11:
                        _context.next = 0;
                        break;

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, g, this, [[1, 6]]);
    });

    var i = g();
    i.next();

    try {
        // i.throw(new Error('a'));
        throw new Error('a'); // 全局的throw命令不会被generator函数内部的try...catch捕获
        throw new Error('b');
    } catch (e) {
        console.log('外部捕获', e.message);
    }
    // 外部捕获 [Error: a]
});

//# sourceMappingURL=throw2.js.map