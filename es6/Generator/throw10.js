(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['babel-runtime/regenerator'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/regenerator'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.regenerator);
        global.throw10 = mod.exports;
    }
})(this, function (_regenerator) {
    'use strict';

    var _regenerator2 = _interopRequireDefault(_regenerator);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _marked = _regenerator2.default.mark(g);

    /**
     * 一旦Generator执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。
     * 如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，
     * 即JavaScript引擎认为这个Generator已经运行结束了。
     */

    function g() {
        return _regenerator2.default.wrap(function g$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 1;

                    case 2:
                        console.log('throwing an exception');
                        throw new Error('generator broke!');

                    case 6:
                        _context.next = 8;
                        return 3;

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked, this);
    }

    function log(generator) {
        var v;
        console.log('starting generator');
        try {
            v = generator.next();
            console.log('第一次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第二次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        try {
            v = generator.next();
            console.log('第三次运行next方法', v);
        } catch (err) {
            console.log('捕捉错误', v);
        }
        console.log('caller done');
    }

    log(g());
    // starting generator
    // 第一次运行next方法 { value: 1, done: false }
    // throwing an exception
    // 捕捉错误 { value: 1, done: false }
    // 第三次运行next方法 { value: undefined, done: true }
    // caller done

    // 上面代码一共三次运行next方法，第二次运行的时候会抛出错误，然后第三次运行的时候，Generator函数就已经结束了，不再执行下去了。
});

//# sourceMappingURL=throw10.js.map