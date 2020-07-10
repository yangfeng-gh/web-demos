(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/reflect/set-prototype-of', 'babel-runtime/core-js/object/get-prototype-of'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/reflect/set-prototype-of'), require('babel-runtime/core-js/object/get-prototype-of'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.setPrototypeOf, global.getPrototypeOf);
        global.__proto__ = mod.exports;
    }
})(this, function (_setPrototypeOf, _getPrototypeOf) {
    'use strict';

    var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前，所有浏览器（包括IE11）都部署了这个属性。
     * 该属性没有写入ES6的正文，而是写入了附录，
     * 原因是__proto__前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的API，只是由于浏览器广泛支持，才被加入了ES6。
     * 标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。
     * 因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，
     * 而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
    */

    Object.defineProperty(Object.prototype, '__proto__', {
        get: function get() {
            var _thisObj = Object(this);
            return (0, _getPrototypeOf2.default)(_thisObj);
        },
        set: function set(proto) {
            if (this === undefined || this === null) {
                throw new TypeError();
            }
            if (!isObject(this)) {
                return undefined;
            }
            if (!isObject(proto)) {
                return undefined;
            }
            var status = (0, _setPrototypeOf2.default)(this, proto);
            if (!status) {
                throw new TypeError();
            }
        }
    });
    function isObject(value) {
        return Object(value) === value;
    }

    // 如果一个对象本身部署了__proto__属性，则该属性的值就是对象的原型。
    var objProto = (0, _getPrototypeOf2.default)({ __proto__: null });
    console.log(objProto);
});

//# sourceMappingURL=__proto__.js.map