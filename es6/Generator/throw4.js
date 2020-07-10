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
        global.throw4 = mod.exports;
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
     * 
     */
    var gen = _regenerator2.default.mark(function gen() {
        return _regenerator2.default.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return console.log('hello');

                    case 3:
                        _context.next = 7;
                        break;

                    case 5:
                        _context.prev = 5;
                        _context.t0 = _context['catch'](0);

                    case 7:
                        _context.next = 9;
                        return console.log('world');

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, gen, this, [[0, 5]]);
    });

    var g = gen();
    g.next();
    g.throw();
    g.next();
    // hello
    // world
    /*
        上面代码在两次next方法之间，使用throw方法抛出了一个错误。
        由于这个错误在Generator函数内部被捕获了，所以不影响第二次next方法的执行。
        如果Generator函数内部没有try...catch,则遍历直接终止
    */
});

//# sourceMappingURL=throw4.js.map