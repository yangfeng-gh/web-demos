(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/helpers/slicedToArray", "babel-runtime/regenerator", "babel-runtime/core-js/get-iterator", "babel-runtime/core-js/object/keys"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/helpers/slicedToArray"), require("babel-runtime/regenerator"), require("babel-runtime/core-js/get-iterator"), require("babel-runtime/core-js/object/keys"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.slicedToArray, global.regenerator, global.getIterator, global.keys);
        global.keys = mod.exports;
    }
})(this, function (_slicedToArray2, _regenerator, _getIterator2, _keys) {
    "use strict";

    var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _getIterator3 = _interopRequireDefault(_getIterator2);

    var _keys2 = _interopRequireDefault(_keys);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(values),
        _marked2 = _regenerator2.default.mark(entries);

    var keys = _keys2.default;

    var obj = { a: 1, b: 2, c: 3 };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(keys(obj)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log(key); // 'a', 'b', 'c'
        }

        // values()
        // Generator函数的版本
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

    function values(obj) {
        var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _key;

        return _regenerator2.default.wrap(function values$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 3;
                        _iterator2 = (0, _getIterator3.default)((0, _keys2.default)(obj));

                    case 5:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context.next = 12;
                            break;
                        }

                        _key = _step2.value;
                        _context.next = 9;
                        return [obj[_key]];

                    case 9:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 5;
                        break;

                    case 12:
                        _context.next = 18;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](3);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                    case 18:
                        _context.prev = 18;
                        _context.prev = 19;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 21:
                        _context.prev = 21;

                        if (!_didIteratorError2) {
                            _context.next = 24;
                            break;
                        }

                        throw _iteratorError2;

                    case 24:
                        return _context.finish(21);

                    case 25:
                        return _context.finish(18);

                    case 26:
                    case "end":
                        return _context.stop();
                }
            }
        }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }
    // 非Generator函数的版本
    function values(obj) {
        var arr = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(obj)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _key2 = _step3.value;

                arr.push(obj[_key2]);
            }
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

        return arr;
    }

    // entries()
    // Generator函数的版本
    function entries(obj) {
        var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _key3;

        return _regenerator2.default.wrap(function entries$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context2.prev = 3;
                        _iterator4 = (0, _getIterator3.default)((0, _keys2.default)(obj));

                    case 5:
                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                            _context2.next = 12;
                            break;
                        }

                        _key3 = _step4.value;
                        _context2.next = 9;
                        return [_key3, obj[_key3]];

                    case 9:
                        _iteratorNormalCompletion4 = true;
                        _context2.next = 5;
                        break;

                    case 12:
                        _context2.next = 18;
                        break;

                    case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2["catch"](3);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context2.t0;

                    case 18:
                        _context2.prev = 18;
                        _context2.prev = 19;

                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                            _iterator4.return();
                        }

                    case 21:
                        _context2.prev = 21;

                        if (!_didIteratorError4) {
                            _context2.next = 24;
                            break;
                        }

                        throw _iteratorError4;

                    case 24:
                        return _context2.finish(21);

                    case 25:
                        return _context2.finish(18);

                    case 26:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _marked2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    }

    // 非Generator函数的版本
    function entries(obj) {
        var arr = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = (0, _getIterator3.default)((0, _keys2.default)(obj)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _key4 = _step5.value;

                arr.push([_key4, obj[_key4]]);
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        return arr;
    }

    // ES7有一个提案，引入了跟Object.keys配套的Object.values和Object.entries。

    /*for (let value of values(obj)) {
        console.log(value); // 1, 2, 3
    }*/

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = (0, _getIterator3.default)(entries(obj)), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _ref = _step6.value;

            var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

            var _key5 = _ref2[0];
            var value = _ref2[1];

            console.log([_key5, value]); // ['a', 1], ['b', 2], ['c', 3]
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
});

//# sourceMappingURL=keys.js.map