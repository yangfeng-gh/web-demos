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
        global._ = mod.exports;
    }
})(this, function (_regenerator) {
    "use strict";

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(g),
        _marked2 = _regenerator2.default.mark(F);

    /**
     * Created by yvan on 2016-06-28.
     */
    function g() {
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        this.a = 11;

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    var obj = g();
    console.log(obj.a); // undefined

    function F() {
        return _regenerator2.default.wrap(function F$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return this.x = 2;

                    case 2:
                        _context2.next = 4;
                        return this.y = 3;

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _marked2, this);
    }

    new F();
    // TypeError: F is not a constructor
});

//# sourceMappingURL=与普通构造函数的区别.js.map