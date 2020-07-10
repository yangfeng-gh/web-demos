(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/get-iterator', 'babel-runtime/core-js/string/from-code-point'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/get-iterator'), require('babel-runtime/core-js/string/from-code-point'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.getIterator, global.fromCodePoint);
        global._ = mod.exports;
    }
})(this, function (_getIterator2, _fromCodePoint) {
    'use strict';

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        /**
         * Created by yvan on 2016-06-30.
         */
        // ES6为字符串添加了遍历器接口

        for (var _iterator = (0, _getIterator3.default)('foo'), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var codePoint = _step.value;

            console.log(codePoint);
        }

        // 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
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

    var text = (0, _fromCodePoint2.default)(0x20BB7);

    for (var i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    // �
    // �

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = (0, _getIterator3.default)(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i = _step2.value;

            console.log(_i);
        }
        // "𠮷"
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
});

//# sourceMappingURL=遍历接口.js.map