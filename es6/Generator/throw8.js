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
    global.throw8 = mod.exports;
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
   * 如果Generator函数内部和外部，都没有部署try...catch代码块，那么程序将报错，直接中断执行。
   */

  function g() {
    return _regenerator2.default.wrap(function g$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return console.log('hello');

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var it = g();
  it.throw();
});

//# sourceMappingURL=throw8.js.map