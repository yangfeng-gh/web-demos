(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/helpers/slicedToArray"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/helpers/slicedToArray"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.slicedToArray);
        global._ = mod.exports;
    }
})(this, function (_slicedToArray2) {
    "use strict";

    var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _foo$bar = { foo: "aaa", bar: "bbb" },
        foo = _foo$bar.foo,
        bar = _foo$bar.bar;

    console.log(foo, bar);

    // 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
    // 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
    var _foo$bar2 = { foo: "aaa", bar: "bbb" },
        baz = _foo$bar2.baz;

    console.log(baz); //undefined

    // 如果变量名与属性名不一致，必须写成下面这样。
    // 真正被赋值的是后者，而不是前者。
    var _foo$bar3 = { foo: "aaa", bar: "bbb" },
        baz = _foo$bar3.foo;

    console.log(baz); //aaa

    var obj = {
        p: ["Hello", { y: "World" }]
    };

    var _obj$p = (0, _slicedToArray3.default)(obj.p, 2),
        x = _obj$p[0],
        y = _obj$p[1].y;

    console.log(x); // "Hello"
    console.log(y); // "World"
    // 这时p是模式，不是变量，因此不会被赋值。

    var obj2 = {};
    var arr2 = [];

    var _foo$bar4 = { foo: 123, bar: true };
    obj2.prop = _foo$bar4.foo;
    arr[0] = _foo$bar4.bar;


    console.log(obj2); // {prop:123}
    console.log(arr2); // [true]
});

//# sourceMappingURL=对象的解构赋值.js.map