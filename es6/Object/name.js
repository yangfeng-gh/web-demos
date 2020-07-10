(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/helpers/defineProperty", "babel-runtime/core-js/symbol"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/helpers/defineProperty"), require("babel-runtime/core-js/symbol"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.defineProperty, global.symbol);
        global.name = mod.exports;
    }
})(this, function (_defineProperty2, _symbol) {
    "use strict";

    var _defineProperty3 = _interopRequireDefault(_defineProperty2);

    var _symbol2 = _interopRequireDefault(_symbol);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _obj;

    /**
     * 方法的name属性
     */
    var person = {
        sayName: function sayName() {
            console.log(this.name);
        },

        get firstName() {
            return "Nicholas";
        }
    };

    console.log(person.sayName.name); // "sayName"
    console.log(person.firstName.name); // "get firstName"

    //(new Function()).name; // "anonymous"

    var doSomething = function doSomething() {
        // ...
    };
    console.log(doSomething.bind().name); // "bound doSomething"

    var key1 = (0, _symbol2.default)('description');
    var key2 = (0, _symbol2.default)();
    var obj = (_obj = {}, (0, _defineProperty3.default)(_obj, key1, function () {}), (0, _defineProperty3.default)(_obj, key2, function () {}), _obj);
    console.log(obj[key1].name); // "[description]"
    obj[key2].name; // ""
});

//# sourceMappingURL=name.js.map