(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/string/raw', 'babel-runtime/helpers/taggedTemplateLiteral'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/string/raw'), require('babel-runtime/helpers/taggedTemplateLiteral'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.raw, global.taggedTemplateLiteral);
        global.raw = mod.exports;
    }
})(this, function (_raw, _taggedTemplateLiteral2) {
    'use strict';

    var _raw2 = _interopRequireDefault(_raw);

    var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _templateObject = (0, _taggedTemplateLiteral3.default)(['Hi\n', '!'], ['Hi\\n', '!']),
        _templateObject2 = (0, _taggedTemplateLiteral3.default)(['Hi\n!'], ['Hi\\u000A!']),
        _templateObject3 = (0, _taggedTemplateLiteral3.default)(['Hi\\n'], ['Hi\\\\n']);

    /**
     * String.raw()
     *
     * ES6还为原生的String对象，提供了一个raw方法。
     */

    (0, _raw2.default)(_templateObject, 2 + 3);
    // "Hi\\n5!"

    (0, _raw2.default)(_templateObject2);
    // 'Hi\\u000A!'

    (0, _raw2.default)(_templateObject3);
    // "Hi\\n"

    String.raw = function (strings) {
        var output = "";

        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        for (var index = 0; index < values.length; index++) {
            output += strings.raw[index] + values[index];
        }

        output += strings.raw[index];
        return output;
    };

    // String.raw方法也可以作为正常的函数使用。这时，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组。
    (0, _raw2.default)({ raw: 'test' }, 0, 1, 2);
    // 't0e1s2t'

    // 等同于
    (0, _raw2.default)({ raw: ['t', 'e', 's', 't'] }, 0, 1, 2);
});

//# sourceMappingURL=raw.js.map