(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/regexp/escape'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/regexp/escape'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.escape);
        global.tokenize = mod.exports;
    }
})(this, function (_escape) {
    'use strict';

    var _escape2 = _interopRequireDefault(_escape);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Created by yvan on 2016-06-30.
     */

    var TOKEN_Y = new RegExp('\\s*(\\+|[0-9]+)\\s*', 'y');
    var TOKEN_G = /\s*(\+|[0-9]+)\s*/g;

    tokenize(TOKEN_Y, '3 + 4');
    // [ '3', '+', '4' ]
    tokenize(TOKEN_G, '3 + 4');
    // [ '3', '+', '4' ]

    function tokenize(TOKEN_REGEX, str) {
        var result = [];
        var match = void 0;
        while (match = TOKEN_REGEX.exec(str)) {
            result.push(match[1]);
        }
        return result;
    }

    console.log(tokenize(TOKEN_Y, '3x + 4'));
    // [ '3' ]
    console.log(tokenize(TOKEN_G, '3x + 4'));
    // [ '3', '+', '4' ]
    // 上面代码中，g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误。


    // sticky属性
    var r = new RegExp('hello\\d', 'y');
    console.log(r.sticky); // true


    // flag属性
    // ES5的source属性
    // 返回正则表达式的正文
    console.log(/abc/ig.source);
    // "abc"

    // ES6的flags属性
    // 返回正则表达式的修饰符
    console.log(/abc/ig.flags);
    // 'gi'

    // RegExp.escape()
    console.log((0, _escape2.default)('The Quick Brown Fox'));
    // "The Quick Brown Fox"

    console.log((0, _escape2.default)('Buy it. use it. break it. fix it.'));
    // "Buy it\. use it\. break it\. fix it\."

    console.log((0, _escape2.default)('(*.*)'));
    // "\(\*\.\*\)"
});

//# sourceMappingURL=tokenize.js.map