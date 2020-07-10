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

    var _ref4;

    /**
     * Created by yvan on 2016-06-29.
     */
    // 将[x,y]从笛卡尔（直角）坐标转换为[r,theta]极坐标
    function polar(x, y) {
        return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
    }
    //将极坐标转换为笛卡尔坐标
    function cartesian(r, theta) {
        return [r * Math.cos(theta), r * Math.sin(theta)];
    }

    var _polar = polar(1.0, 1.0),
        _polar2 = (0, _slicedToArray3.default)(_polar, 2),
        r = _polar2[0],
        theta = _polar2[1];

    var _cartesian = cartesian(r, theta),
        _cartesian2 = (0, _slicedToArray3.default)(_cartesian, 2),
        x = _cartesian2[0],
        y = _cartesian2[1];

    var _ref = [1];
    x = _ref[0];
    y = _ref[1];
    var _ref2 = [1, 2, 3];
    x = _ref2[0];
    y = _ref2[1];
    var _ref3 = [1, 2, 3, 4];
    x = _ref3[1];
    y = _ref3[3];
    //x=2, y=4
    console.log(x, y);

    var first = void 0,
        second = void 0,
        all = void 0;
    all = (_ref4 = [1, 2, 3, 4], first = _ref4[0], second = _ref4[1], _ref4); //first=1, second=2, all=[1,2,3,4]

    var _ref5 = [1, [2, 2.5], 3],
        one = _ref5[0],
        _ref5$ = (0, _slicedToArray3.default)(_ref5[1], 2),
        twoA = _ref5$[0],
        twoB = _ref5$[1];

    //one=1, towA=2, towB=2.5

    var transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 }; //一个用RGBA值表示的颜色
    var red = transparent.r,
        green = transparent.g,
        blue = transparent.b;
    //red=0.0, green=0.0, blue=0.0

    var value = [1, 2, [3, 4, 5]];

    var el1 = value[0],
        el2 = value[1],
        _value$ = (0, _slicedToArray3.default)(value[2], 2),
        el3 = _value$[0],
        el4 = _value$[1];

    var head = 1,
        tail = [2, 3, 4];

    console.log(tail); // [2, 3, 4]
});

//# sourceMappingURL=解构赋值.js.map