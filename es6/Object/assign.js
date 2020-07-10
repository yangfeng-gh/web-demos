(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/helpers/defineProperty', 'babel-runtime/core-js/symbol', 'babel-runtime/helpers/typeof', 'babel-runtime/core-js/object/assign'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/helpers/defineProperty'), require('babel-runtime/core-js/symbol'), require('babel-runtime/helpers/typeof'), require('babel-runtime/core-js/object/assign'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.defineProperty, global.symbol, global._typeof, global.assign);
    global.assign = mod.exports;
  }
})(this, function (_defineProperty2, _symbol, _typeof2, _assign) {
  'use strict';

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _symbol2 = _interopRequireDefault(_symbol);

  var _typeof3 = _interopRequireDefault(_typeof2);

  var _assign2 = _interopRequireDefault(_assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
   */
  {
    var target = { a: 1 };

    var source1 = { b: 2 };
    var source2 = { c: 3 };

    (0, _assign2.default)(target, source1, source2);
    console.log(target);
  }

  // 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
  {
    var _target = { a: 1, b: 1 };

    var _source = { b: 2, c: 2 };
    var _source2 = { c: 3 };

    (0, _assign2.default)(_target, _source, _source2);
    console.log(_target);
  }

  // 如果只有一个参数，Object.assign会直接返回该参数。
  {
    var obj = { a: 1 };
    (0, _assign2.default)(obj) === obj; // true
    console.log(obj);
  }

  // 如果该参数不是对象，则会先转成对象，然后返回。
  {
    var _obj = (0, _assign2.default)(2); // "object"
    console.log(typeof _obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(_obj));
  }

  // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
  {}
  // Object.assign(undefined) // 报错
  // Object.assign(null) // 报错


  // 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
  // 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。
  // 这意味着，如果undefined和null不在首参数，就不会报错。
  {
    var _obj2 = { a: 1 };
    (0, _assign2.default)(_obj2, undefined) === _obj2; // true
    (0, _assign2.default)(_obj2, null) === _obj2; // true
  }

  // 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。
  // 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
  {
    var v1 = 'abc';
    var v2 = true;
    var v3 = 10;

    var _obj3 = (0, _assign2.default)({}, v1, v2, v3);
    console.log(_obj3); // { "0": "a", "1": "b", "2": "c" }
  }

  // Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），
  // 也不拷贝不可枚举的属性（enumerable: false）。
  {
    var _obj4 = (0, _assign2.default)({ b: 'c' }, Object.defineProperty({}, 'invisible', {
      enumerable: false,
      value: 'hello'
    }));
    console.log(_obj4);
  }

  // 属性名为Symbol值的属性，也会被Object.assign拷贝。
  {
    var _obj5 = (0, _assign2.default)({ a: 'b' }, (0, _defineProperty3.default)({}, (0, _symbol2.default)('c'), 'd'));
    console.log(_obj5);
  }

  // Object.assign方法实行的是浅拷贝，而不是深拷贝。
  // 也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
  {
    var obj1 = { a: { b: 1 } };
    var obj2 = (0, _assign2.default)({}, obj1);

    obj1.a.b = 2;
    console.log(obj2.a.b); // 2
  }

  // 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
  {
    var _target2 = { a: { b: 'c', d: 'e' } };
    var source = { a: { b: 'hello' } };
    (0, _assign2.default)(_target2, source);
    console.log(_target2);
  }

  // 注意，Object.assign可以用来处理数组，但是会把数组视为对象。
  {
    var _obj6 = (0, _assign2.default)([1, 2, 3], [4, 5]);
    console.log(_obj6); // [4, 5, 3]
  }

  {
    // let obj = Object.assign(undefined, {a: 1})
    // console.log(obj) // Cannot convert undefined or null to object
  }
});

//# sourceMappingURL=assign.js.map