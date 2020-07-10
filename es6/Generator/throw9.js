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
        global.throw9 = mod.exports;
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
     * Generator函数体外抛出的错误，可以在函数体内捕获；反过来，Generator函数体内抛出的错误，也可以被函数体外的catch捕获。
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
        console.log(err.message);
    }
    // 上面代码中，第二个next方法向函数体内传入一个参数42，数值是没有toUpperCase方法的，所以会抛出一个TypeError错误，被函数体外的catch捕获。
});

//# sourceMappingURL=throw9.js.map