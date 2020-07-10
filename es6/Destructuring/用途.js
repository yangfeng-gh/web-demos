(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/core-js/get-iterator', 'babel-runtime/core-js/map', 'babel-runtime/helpers/slicedToArray', "source-map"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/get-iterator'), require('babel-runtime/core-js/map'), require('babel-runtime/helpers/slicedToArray'), require("source-map"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.getIterator, global.map, global.slicedToArray, global.sourceMap);
        global._ = mod.exports;
    }
})(this, function (_getIterator2, _map, _slicedToArray2, _require) {
    'use strict';

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _map2 = _interopRequireDefault(_map);

    var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _ref = [y, x];
    x = _ref[0];
    y = _ref[1];

    // 上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

    // （2）从函数返回多个值

    // 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

    // 返回一个数组

    function example() {
        return [1, 2, 3];
    }

    var _example = example(),
        _example2 = (0, _slicedToArray3.default)(_example, 3),
        a = _example2[0],
        b = _example2[1],
        c = _example2[2];

    // 返回一个对象

    function example() {
        return {
            foo: 1,
            bar: 2
        };
    }

    var _example3 = example(),
        foo = _example3.foo,
        bar = _example3.bar;

    // （3）函数参数的定义

    // 解构赋值可以方便地将一组参数与变量名对应起来。

    // 参数是一组有次序的值
    function f(_ref2) {/*...*/

        var _ref3 = (0, _slicedToArray3.default)(_ref2, 3),
            x = _ref3[0],
            y = _ref3[1],
            z = _ref3[2];
    }
    f([1, 2, 3]);

    // 参数是一组无次序的值
    function f(_ref4) {/*...*/
        var x = _ref4.x,
            y = _ref4.y,
            z = _ref4.z;
    }
    f({ z: 3, y: 2, x: 1 });
    // （4）提取JSON数据

    // 解构赋值对提取JSON对象中的数据，尤其有用。

    var jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    var id = jsonData.id,
        status = jsonData.status,
        number = jsonData.data;


    console.log(id, status, number);
    // 42, "OK", [867, 5309]
    // 上面代码可以快速提取JSON数据的值。

    // （5）函数参数的默认值


    jQuery.ajax = function (url, _ref5) {
        // ... do stuff

        var _ref5$async = _ref5.async,
            async = _ref5$async === undefined ? true : _ref5$async,
            _ref5$beforeSend = _ref5.beforeSend,
            beforeSend = _ref5$beforeSend === undefined ? function () {} : _ref5$beforeSend,
            _ref5$cache = _ref5.cache,
            cache = _ref5$cache === undefined ? true : _ref5$cache,
            _ref5$complete = _ref5.complete,
            complete = _ref5$complete === undefined ? function () {} : _ref5$complete,
            _ref5$crossDomain = _ref5.crossDomain,
            crossDomain = _ref5$crossDomain === undefined ? false : _ref5$crossDomain,
            _ref5$global = _ref5.global,
            global = _ref5$global === undefined ? true : _ref5$global;
    };
    // 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

    // （6）遍历Map结构

    // 任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。

    var map = new _map2.default();
    map.set('first', 'hello');
    map.set('second', 'world');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(map), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref6 = _step.value;

            var _ref7 = (0, _slicedToArray3.default)(_ref6, 2);

            var key = _ref7[0];
            var value = _ref7[1];

            console.log(key + " is " + value);
        }
        // first is hello
        // second is world
        // 如果只想获取键名，或者只想获取键值，可以写成下面这样。

        // 获取键名
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = (0, _getIterator3.default)(map), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref8 = _step2.value;

            var _ref9 = (0, _slicedToArray3.default)(_ref8, 1);

            var _key = _ref9[0];
        }
        // ...


        // 获取键值
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = (0, _getIterator3.default)(map), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _ref10 = _step3.value;

            var _ref11 = (0, _slicedToArray3.default)(_ref10, 2);

            var _value = _ref11[1];
        }
        // ...

        // （7）输入模块的指定方法

        // 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。

    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var SourceMapConsumer = _require.SourceMapConsumer,
        SourceNode = _require.SourceNode;
});

//# sourceMappingURL=用途.js.map