(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/object/assign', 'babel-runtime/helpers/classCallCheck'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/object/assign'), require('babel-runtime/helpers/classCallCheck'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.assign, global.classCallCheck);
        global.propertyMethod = mod.exports;
    }
})(this, function (_assign, _classCallCheck2) {
    'use strict';

    var _assign2 = _interopRequireDefault(_assign);

    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var SomeClass = function SomeClass() {
        (0, _classCallCheck3.default)(this, SomeClass);

        console.log('构造方法执行。。。');
    };

    (0, _assign2.default)(SomeClass.prototype, {
        someMethod: function someMethod(arg1, arg2) {
            console.log('someMethod方法执行。。。');
        },
        anotherMethod: function anotherMethod() {
            console.log('anotherMethod方法执行。。。');
        }
    });

    // 等同于下面的写法
    SomeClass.prototype.someMethod = function (arg1, arg2) {
        console.log('someMethod方法执行。。。');
    };
    SomeClass.prototype.anotherMethod = function () {
        console.log('anotherMethod方法执行。。。');
    };

    var someClass = new SomeClass();
    someClass.someMethod();
    someClass.anotherMethod();
});

//# sourceMappingURL=property-method.js.map