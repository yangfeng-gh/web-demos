(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/regenerator"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/regenerator"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator);
        global.return2 = mod.exports;
    }
})(this, function (_regenerator) {
    "use strict";

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(numbers);

    /**
     * 如果Generator函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行。
     */
    function numbers() {
        return _regenerator2.default.wrap(function numbers$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                        _context.prev = 2;
                        _context.next = 5;
                        return 2;

                    case 5:
                        _context.next = 7;
                        return 3;

                    case 7:
                        _context.prev = 7;
                        _context.next = 10;
                        return 4;

                    case 10:
                        _context.next = 12;
                        return 5;

                    case 12:
                        return _context.finish(7);

                    case 13:
                        _context.next = 15;
                        return 6;

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this, [[2,, 7, 13]]);
    }
    var g = numbers();
    g.next(); // { done: false, value: 1 }
    g.next(); // { done: false, value: 2 }
    g.return(7); // { done: false, value: 4 }
    g.next(); // { done: false, value: 5 }
    g.next(); // { done: true, value: 7 }
    // 调用return方法后，就开始执行finally代码块，然后等到finally代码块执行完，再执行return方法。
});

//# sourceMappingURL=return2.js.map