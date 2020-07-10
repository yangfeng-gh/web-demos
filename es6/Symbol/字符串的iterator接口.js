(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/symbol/iterator", "babel-runtime/helpers/toConsumableArray"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/symbol/iterator"), require("babel-runtime/helpers/toConsumableArray"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.iterator, global.toConsumableArray);
        global.iterator = mod.exports;
    }
})(this, function (_iterator, _toConsumableArray2) {
    "use strict";

    var _iterator2 = _interopRequireDefault(_iterator);

    var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Created by yvan on 2016-07-25.
     */
    var str = new String("hi");

    [].concat((0, _toConsumableArray3.default)(str)); // ["h", "i"]

    str[_iterator2.default] = function () {
        return {
            next: function next() {
                if (this._first) {
                    this._first = false;
                    return { value: "bye", done: false };
                } else {
                    return { done: true };
                }
            },
            _first: true
        };
    };

    console.log([].concat((0, _toConsumableArray3.default)(str)));
    console.log(str);
});

//# sourceMappingURL=字符串的iterator接口.js.map