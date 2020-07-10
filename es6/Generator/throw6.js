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
        global.throw6 = mod.exports;
    }
})(this, function (_regenerator) {
    "use strict";

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(foo);

    /**
     * Created by yvan on 2016-06-28.
     */
    function foo() {
        var x, y;
        return _regenerator2.default.wrap(function foo$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 3;

                    case 2:
                        x = _context.sent;
                        y = x.toUpperCase();
                        _context.next = 6;
                        return y;

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    var it = foo();

    it.next(); // { value:3, done:false }

    try {
        it.next(42);
    } catch (err) {
        console.log(err);
    }
});

//# sourceMappingURL=throw6.js.map