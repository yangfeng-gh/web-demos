(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["module", "babel-runtime/core-js/json/stringify"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, require("babel-runtime/core-js/json/stringify"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.stringify);
        global.abbreviation = mod.exports;
    }
})(this, function (module, _stringify) {
    "use strict";

    var _stringify2 = _interopRequireDefault(_stringify);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Created by yvan on 2016-06-23.
     */

    /* 属性名简写 */
    var foo = 'bar';
    var baz = { foo: foo };
    console.log((0, _stringify2.default)(baz)); // {"foo":"bar"}

    //等同于
    var baz = { foo: foo };
    /***********************************************************/
    function f(x, y) {
        return { x: x, y: y };
    }

    console.log(f(1, 2)); //{ x: 1, y: 2 }

    /*
     // 等同于
     function f(x, y) {
     Generator.prototype.return {x: x, y: y};
     }
     */
    /*方法名简写*/

    var o = {
        method: function method() {
            return "hello";
        }
    };
    //等同于
    var o = {
        method: function method() {
            return "hello";
        }
    };
    /***********************************************************/
    var birth = '2000/01/01';

    var person = {
        name: '张三',
        birth: birth,
        hello: function hello() {
            console.log('我的生日是：', this.birth);
        }
    };

    person.hello();
    /***********************************************************/
    var ms = {};

    function getItem(key) {
        return key in ms ? ms[key] : null;
    }
    function setItem(key, value) {
        ms[key] = value;
    }
    function clear() {
        ms = {};
    }
    module.exports = { getItem: getItem, setItem: setItem, clear: clear };
    //等同于

    /*
     module.exports = {
     getItem: getItem,
     setItem: setItem,
     clear: clear
     };
     */

    /***********************************************************/

    /*setter, getter*/
    var cart = {
        _wheels: 4,

        get wheels() {
            return this._wheels;
        },

        set wheels(value) {
            if (value < this._wheels) {
                throw new Error('数值太小了！');
            }
            this._wheels = value;
        }
    };
    cart._wheels = 5;
    console.log(cart._wheels);
    /***********************************************************/

    /*简洁写法的属性名总是字符串*/
    var obj = {
        class: function _class() {
            //class是字符串，所以不会因为属于关键字，而导致语法解析错误
        }
    };
    //等同于
    var obj = {
        'class': function _class() {}
    };
});

//# sourceMappingURL=abbreviation.js.map