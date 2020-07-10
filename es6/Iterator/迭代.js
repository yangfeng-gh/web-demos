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

  /**
   * 迭代
   */
  var o = { one: 1, two: 2, three: 3 };
  for (var _p in o) {
    console.log(_p);
  } //for/in:输出'one','two','three'
  //for each (let v in o) console.log(v); //for/each:输出1~3

  //返回迭代器的一个函数
  function counter(start) {
    var nextValue = Math.round(start); //表示迭代器的一个私有状态
    return {
      next: function next() {
        return nextValue++;
      }
    }; //返回迭代器对象
  }

  var serialNumberGenerator = counter(1000);
  var sn1 = serialNumberGenerator.next(); //1000
  var sn2 = serialNumberGenerator.next(); //1001
  console.log(sn2);

  //返回一个可迭代的对象，用以表示该范围内的一个数字
  function range(min, max) {
    return { //返回一个表示这个范围的对象
      get min() {
        return min;
      }, //范围边界是固定的
      get max() {
        return max;
      }, //并在闭包内保存起来
      includes: function includes(x) {
        //检测成员是否属于这个范围
        return min <= x && x <= max;
      },
      toString: function toString() {
        //以字符串形式输出这个范围
        return "[" + min + "," + max + "]";
      },
      __iterator__: function __iterator__() {
        var val = Math.ceil(min); //将当前位置保存在闭包中
        return {
          next: function next() {
            if (val > max) throw StopIteration;
            return val++;
          }
        };
      }
    };
  }

  for (var i in range(1, 10)) {
    console.log(i);
  } //在firefox输出1~10之间的数字

  for (var _ref in Iterator({ a: 1, b: 2 })) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

    var k = _ref2[0];
    var v = _ref2[1];

    console.log(k + "=" + v);
  }

  o = { x: 1, y: 2 //定义一个对象，它有两个属性
  };Object.prototype.z = 3; //所有的对象都继承了z
  for (p in o) {
    console.log(p);
  } //firefox输出"x","y","z"
  for (p in Iterator(o, true)) {
    console.log(p);
  } //firefox输出"x","y"
});

//# sourceMappingURL=迭代.js.map