(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/get-iterator", "babel-runtime/core-js/symbol/iterator", "babel-runtime/helpers/classCallCheck", "babel-runtime/helpers/createClass"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/symbol/iterator"), require("babel-runtime/helpers/classCallCheck"), require("babel-runtime/helpers/createClass"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.getIterator, global.iterator, global.classCallCheck, global.createClass);
        global.iterator = mod.exports;
    }
})(this, function (_getIterator2, _iterator2, _classCallCheck2, _createClass2) {
    "use strict";

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _iterator3 = _interopRequireDefault(_iterator2);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    var _createClass3 = _interopRequireDefault(_createClass2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var RangeIterator = function () {
        function RangeIterator(start, stop) {
            (0, _classCallCheck3.default)(this, RangeIterator);

            this.value = start;
            this.stop = stop;
        }

        (0, _createClass3.default)(RangeIterator, [{
            key: _iterator3.default,
            value: function value() {
                return this;
            }
        }, {
            key: "next",
            value: function next() {
                var value = this.value;
                if (value < this.stop) {
                    this.value++;
                    return { done: false, value: value };
                } else {
                    return { done: true, value: undefined };
                }
            }
        }]);
        return RangeIterator;
    }();

    function range(start, stop) {
        return new RangeIterator(start, stop);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(range(0, 3)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log(value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
});

//# sourceMappingURL=iterator属性.js.map