(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/regenerator", "babel-runtime/core-js/set", "babel-runtime/helpers/slicedToArray"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/regenerator"), require("babel-runtime/core-js/set"), require("babel-runtime/helpers/slicedToArray"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator, global.set, global.slicedToArray);
        global.Destructuring2 = mod.exports;
    }
})(this, function (_regenerator, _set, _slicedToArray2) {
    "use strict";

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _set2 = _interopRequireDefault(_set);

    var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = regeneratorRuntime.mark(fibs);

    var _ref = new _set2.default(["a", "b", "c"]),
        _ref2 = (0, _slicedToArray3.default)(_ref, 3),
        x = _ref2[0],
        y = _ref2[1],
        z = _ref2[2];

    console.log(x); // "a"

    // 事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
    function fibs() {
        var a, b, _ref3;

        return _regenerator2.default.wrap(function fibs$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        a = 0;
                        b = 1;

                    case 2:
                        if (!true) {
                            _context.next = 10;
                            break;
                        }

                        _context.next = 5;
                        return a;

                    case 5:
                        _ref3 = [b, a + b];
                        a = _ref3[0];
                        b = _ref3[1];
                        _context.next = 2;
                        break;

                    case 10:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    var _fibs = fibs(),
        _fibs2 = (0, _slicedToArray3.default)(_fibs, 6),
        first = _fibs2[0],
        second = _fibs2[1],
        third = _fibs2[2],
        fourth = _fibs2[3],
        fifth = _fibs2[4],
        sixth = _fibs2[5];

    console.log(sixth); // 5
});

//# sourceMappingURL=Destructuring2.js.map