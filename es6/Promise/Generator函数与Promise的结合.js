(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/regenerator', 'babel-runtime/core-js/promise'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/regenerator'), require('babel-runtime/core-js/promise'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator, global.promise);
        global.GeneratorPromise = mod.exports;
    }
})(this, function (_regenerator, _promise) {
    'use strict';

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _promise2 = _interopRequireDefault(_promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * 使用Generator函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。
     */
    function getFoo() {
        return new _promise2.default(function (resolve, reject) {
            resolve('foo');
        });
    }

    var g = _regenerator2.default.mark(function g() {
        var foo;
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return getFoo();

                    case 3:
                        foo = _context.sent;

                        console.log(foo);
                        _context.next = 10;
                        break;

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, g, this, [[0, 7]]);
    });

    function run(generator) {
        var it = generator();

        function go(result) {
            if (result.done) return result.value;

            return result.value.then(function (value) {
                return go(it.next(value));
            }, function (error) {
                return go(it.throw(error));
            });
        }

        go(it.next());
    }

    run(g);

    // 上面代码的Generator函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。
    // 函数run用来处理这个Promise对象，并调用下一个next方法。
});

//# sourceMappingURL=Generator函数与Promise的结合.js.map