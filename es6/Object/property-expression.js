(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/helpers/defineProperty'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/helpers/defineProperty'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.defineProperty);
        global.propertyExpression = mod.exports;
    }
})(this, function (_defineProperty2) {
    /**
     * Created by yvan on 2016-06-23.
     */
    "use strict";
    // es3 支持的语法, es5严格模式下报obj is not defined
    /*
    obj.foo = true;
    obj['a' + 'bc'] = 123;
    */

    // 直接量语法

    var _defineProperty3 = _interopRequireDefault(_defineProperty2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _obj;

    var obj2 = {
        foo: true,
        abc: 123
    };

    // 仅es6支持的语法
    var propKey = 'foo';

    var obj3 = (_obj = {}, (0, _defineProperty3.default)(_obj, propKey, true), (0, _defineProperty3.default)(_obj, 'a' + 'bc', 123), _obj);

    var lastWord = 'last word';
    var a = (0, _defineProperty3.default)({
        'first word': 'hello'
    }, lastWord, 'word');
    console.log(a['first word']);
    console.log(a[lastWord]);
    console.log(a['last word']);

    /*表达式还可以用于定义方法名*/
    var obj4 = (0, _defineProperty3.default)({}, 'h' + 'ello', function () {
        return 'hi';
    });

    console.log(obj4.hello());

    /*属性名表达式与简洁表示法，不能同时使用，会报错*/
    var foo = 'bar';
    var bar = 'abc';
    //var baz = {[foo]}; //incorrect

    var baz = (0, _defineProperty3.default)({}, foo, 'abc'); //correct
});

//# sourceMappingURL=property-expression.js.map