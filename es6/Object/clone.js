(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/object/create", "babel-runtime/core-js/object/get-prototype-of", "babel-runtime/core-js/object/assign"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/object/create"), require("babel-runtime/core-js/object/get-prototype-of"), require("babel-runtime/core-js/object/assign"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.create, global.getPrototypeOf, global.assign);
        global.clone = mod.exports;
    }
})(this, function (_create, _getPrototypeOf, _assign) {
    "use strict";

    var _create2 = _interopRequireDefault(_create);

    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

    var _assign2 = _interopRequireDefault(_assign);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * 克隆对象
     */
    function clone(origin) {
        return (0, _assign2.default)({}, origin);
    }

    // 不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。
    function clone(origin) {
        var originProto = (0, _getPrototypeOf2.default)(origin);
        return (0, _assign2.default)((0, _create2.default)(originProto), origin);
    }
});

//# sourceMappingURL=clone.js.map