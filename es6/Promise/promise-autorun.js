(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/regenerator', 'babel-runtime/core-js/promise', 'fs'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/regenerator'), require('babel-runtime/core-js/promise'), require('fs'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator, global.promise, global.fs);
        global.promiseAutorun = mod.exports;
    }
})(this, function (_regenerator, _promise, fs) {
    'use strict';

    var _regenerator2 = _interopRequireDefault(_regenerator);

    var _promise2 = _interopRequireDefault(_promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var readFile = function readFile(fileName) {
        return new _promise2.default(function (resolve, reject) {
            fs.readFile(fileName, function (error, data) {
                if (error) return reject(error);
                resolve(data);
            });
        });
    };

    var gen = _regenerator2.default.mark(function gen() {
        var f1, f2;
        return _regenerator2.default.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return readFile('user.json');

                    case 2:
                        f1 = _context.sent;
                        _context.next = 5;
                        return readFile('goods.json');

                    case 5:
                        f2 = _context.sent;

                        console.log(f1.toString());
                        console.log(f2.toString());

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, gen, this);
    });

    // var g = gen();
    //
    // g.next().value.then(function(data){
    //     g.next(data).value.then(function(data){
    //         g.next(data);
    //     });
    // });
    // 手动执行其实就是用then方法，层层添加回调函数。理解了这一点，就可以写出一个自动执行器。

    function run(gen) {
        var g = gen();

        function next(data) {
            var result = g.next(data);
            if (result.done) return result.value;
            result.value.then(function (data) {
                next(data);
            });
        }

        next();
    }

    run(gen);
});

//# sourceMappingURL=promise-autorun.js.map