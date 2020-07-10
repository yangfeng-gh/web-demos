(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/core-js/get-iterator"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/core-js/get-iterator"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.getIterator);
        global.codePointAt = mod.exports;
    }
})(this, function (_getIterator2) {
    "use strict";

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Created by yvan on 2016-06-30.
     */
    var s = "𠮷a";

    var len = s.length; // 2
    // console.log(len);
    // console.log(s.charAt(0)); // �
    // console.log(s.charAt(1)); // �
    // console.log(s.charCodeAt(0)); // 55362
    // console.log(s.charCodeAt(1)); // 57271
    //
    // console.log(s.codePointAt(0)); //134071
    // console.log('\u{20BB7}');
    // console.log(s.codePointAt(1)); //
    // console.log(s.charCodeAt(2)); // 97


    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    console.log(is32Bit("𠮷")); // true
    console.log(is32Bit("a")); // false

    // 你可能注意到了，codePointAt方法的参数，仍然是不正确的。
    // 比如，上面代码中，字符a在字符串s的正确位置序号应该是1，但是必须向charCodeAt方法传入2。
    // 解决这个问题的一个办法是使用for...of循环，因为它会正确识别32位的UTF-16字符。

    var s = '𠮷a';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(s), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ch = _step.value;

            console.log(ch.codePointAt(0).toString(16));
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

//# sourceMappingURL=codePointAt.js.map