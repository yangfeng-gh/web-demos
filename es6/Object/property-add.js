(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/object/assign", "babel-runtime/helpers/classCallCheck"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/object/assign"), require("babel-runtime/helpers/classCallCheck"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.assign, global.classCallCheck);
        global.propertyAdd = mod.exports;
    }
})(this, function (_assign, _classCallCheck2) {
    "use strict";

    var _assign2 = _interopRequireDefault(_assign);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Point = function Point(x, y) {
        (0, _classCallCheck3.default)(this, Point);

        (0, _assign2.default)(this, { x: x, y: y });
    };

    var p1 = new Point(1, 2);
    console.log(p1);
});

//# sourceMappingURL=property-add.js.map