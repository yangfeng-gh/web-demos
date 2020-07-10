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

    var _marked = _regenerator2.default.mark(gen);

    /**
     * Created by yvan on 2016-06-28.
     */
    function gen() {
        return _regenerator2.default.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        this.a = 1;
                        _context.next = 3;
                        return this.b = 2;

                    case 3:
                        _context.next = 5;
                        return this.c = 3;

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    function F() {
        return gen.call(gen.prototype);
    }

    var f = new F();

    f.next(); // Object {value: 2, done: false}
    f.next(); // Object {value: 3, done: false}
    f.next(); // Object {value: undefined, done: true}

    f.a; // 1
    f.b; // 2
    f.c; // 3
});

//# sourceMappingURL=获取普通构造函数.js.map