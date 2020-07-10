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
        global.throw3 = mod.exports;
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
     * 如果Generator函数内部没有部署try...catch代码块，那么throw方法抛出的错误，将被外部try...catch代码块捕获。
     */
    var g = _regenerator2.default.mark(function g() {
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!true) {
                            _context.next = 6;
                            break;
                        }

                        _context.next = 3;
                        return;

                    case 3:
                        console.log('内部捕获', e);
                        _context.next = 0;
                        break;

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, g, this);
    });

    var i = g();
    i.next();

    try {
        i.throw('a');
        i.throw('b');
    } catch (e) {
        console.log('外部捕获', e);
    }
    // 外部捕获 a
});

//# sourceMappingURL=throw3.js.map