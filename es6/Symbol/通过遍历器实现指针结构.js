(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/get-iterator", "babel-runtime/core-js/symbol/iterator"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/symbol/iterator"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.getIterator, global.iterator);
        global._ = mod.exports;
    }
})(this, function (_getIterator2, _iterator2) {
    "use strict";

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _iterator3 = _interopRequireDefault(_iterator2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Created by yvan on 2016-07-25.
     */
    function Obj(value) {
        this.value = value;
        this.next = null;
    }

    Obj.prototype[_iterator3.default] = function () {
        var iterator = {
            next: next
        };

        var current = this;

        function next() {
            if (current) {
                var value = current.value;
                current = current.next;
                return {
                    done: false,
                    value: value
                };
            } else {
                return {
                    done: true
                };
            }
        }
        return iterator;
    };

    var one = new Obj(1);
    var two = new Obj(2);
    var three = new Obj(3);

    one.next = two;
    two.next = three;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(one), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            console.log(i);
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

//# sourceMappingURL=通过遍历器实现指针结构.js.map