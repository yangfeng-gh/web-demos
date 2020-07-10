(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['babel-runtime/helpers/extends', 'babel-runtime/core-js/object/create', 'babel-runtime/core-js/json/stringify', 'babel-runtime/helpers/objectWithoutProperties'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('babel-runtime/helpers/extends'), require('babel-runtime/core-js/object/create'), require('babel-runtime/core-js/json/stringify'), require('babel-runtime/helpers/objectWithoutProperties'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._extends, global.create, global.stringify, global.objectWithoutProperties);
    global.extendedOperator = mod.exports;
  }
})(this, function (_extends2, _create, _stringify, _objectWithoutProperties2) {
  'use strict';
  // 对象中的扩展运算符

  /**
   * 解构赋值
   *
   *
   *
   * 3.解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，
   * 而不是这个值的副本;
   * 4.扩展运算符修饰的变量解构赋值不会拷贝继承自原型对象的属性;
   */

  /**
   * 对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。
   * 所有的键和它们的值，都会拷贝到新对象上面。
   */

  var _extends3 = _interopRequireDefault(_extends2);

  var _create2 = _interopRequireDefault(_create);

  var _stringify2 = _interopRequireDefault(_stringify);

  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  {
    var a = 1,
        b = [2, 3];

    console.log('解析赋值拷贝键值：a = %d, b = %s', a, b);
  }

  {
    var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
        x = _x$y$a$b.x,
        y = _x$y$a$b.y,
        z = (0, _objectWithoutProperties3.default)(_x$y$a$b, ['x', 'y']);

    console.log('\u89E3\u6790\u8D4B\u503C\u62F7\u8D1D\u952E\u503C\uFF1A ' + (0, _stringify2.default)(z));
  }

  /**
   * 1.解构赋值要求等号右边是一个对象,如果等号右边是null,undefined就会报错;
   */
  // let { x, y, ...z } = null; // 运行时错误
  // let { x, y, ...z } = undefined; // 运行时错误
  /**
   * 2.扩展运算符修饰的变量必须是最后一个参数，否则会报错;
   */
  // let { x, ...y, ...z } = obj; // 句法错误
  // let { ...x, y, z } = obj; // 句法错误

  /**
   * 解构赋值的拷贝是浅拷贝，
   * 即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。
   */
  {
    var obj = { a: { b: 1 } };
    var n = (0, _objectWithoutProperties3.default)(obj, []);

    obj.a.b = 2;
    console.log('\u89E3\u6784\u8D4B\u503C\u7684\u62F7\u8D1D\u662F\u6D45\u62F7\u8D1D: ' + n.a.b); // 2
  }
  // 上面代码中，x是解构赋值所在的对象，拷贝了对象obj的a属性。a属性引用了一个对象，修改这个对象的值，会影响到解构赋值对它的引用。

  {
    var o = (0, _create2.default)({ x: 1, y: 2 });
    o.z = 3;
    // let {a, ...{b, c}} = o;
    // console.log(`${a}, ${b}, ${c}`);
  }
  // 上面代码中，变量x是单纯的解构赋值，所以可以读取继承的属性；扩展运算符产生的变量y和z，只能读取对象自身的属性，
  // 所以只有变量z可以赋值成功

  /**
   * 3.扩展运算符的解构赋值，不能复制继承自原型对象的属性
   */
  {
    var o1 = { a: 1 };
    var o2 = { b: 2 };
    o2.__proto__ = o1;
    var o3 = (0, _extends3.default)({}, o2);
    console.log(o3 === o2);
    console.log('\u6269\u5C55\u8FD0\u7B97\u7B26\u4E0D\u4F1A\u62F7\u8D1D\u7EE7\u627F\u81EA\u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027: ' + (0, _stringify2.default)(o3)); // { b: 2 }
  }

  {
    var _o = (0, _create2.default)({ x: 1, y: 2 });
    _o.z = 3;
    var _o2 = (0, _extends3.default)({}, _o, { m: 4, n: 5 });
    console.log('o2 = ' + (0, _stringify2.default)(_o2));
  }

  {
    var _ref = [],
        _ref$ = _ref[0],
        x1 = _ref$ === undefined ? 1 : _ref$,
        _ref$2 = _ref[1],
        y1 = _ref$2 === undefined ? x1 : _ref$2;
    var _ref2 = [2],
        _ref2$ = _ref2[0],
        x2 = _ref2$ === undefined ? 1 : _ref2$,
        _ref2$2 = _ref2[1],
        y2 = _ref2$2 === undefined ? x2 : _ref2$2;
    var _ = 1,
        x3 = _ === undefined ? 1 : _,
        _2 = 2,
        y3 = _2 === undefined ? x3 : _2;
    var _ref3 = [],
        _ref3$ = _ref3[0],
        x4 = _ref3$ === undefined ? y4 : _ref3$,
        _ref3$2 = _ref3[1],
        y4 = _ref3$2 === undefined ? 1 : _ref3$2;

    console.log(x1, y1); //1 1
    console.log(x2, y2); //2 2
    console.log(x3, y3); //1 2
    console.log(x4, y4);
  }

  /**
   * 2.扩展运算符
   * 扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。
   * 如果扩展运算符的参数是null或undefined，这个两个值会被忽略，不会报错。
   */
  // 扩展运算符可以用于合并两个对象。
  {
    var _o3 = { a: 1 };
    var _o4 = { b: 2 };
    var ab = (0, _extends3.default)({}, _o3, _o4);
  }
  // 等同于
  // let ab2 = Object.assign({}, o1, o2);

  {
    var _obj = {};
    var aWithOverrides = (0, _extends3.default)({}, _obj, { x: 1, y: 2 });
  }
  // 等同于
  // let aWithOverrides2 = {...a, ...{x: 1, y: 2}};
  // 等同于
  // let x2 = 1, y2 = 2, aWithOverrides3 = {...a, x, y};
  // 等同于
  // let aWithOverrides4 = Object.assign({}, a, {x: 1, y: 2});
  // 上面代码中，a对象的x属性和y属性，拷贝到新对象后会被覆盖掉。

  {

    var previousVersion = {};
    var newVersion = (0, _extends3.default)({}, previousVersion, {
      name: 'New Name' // Override the name property
    });
  }

  // 上面代码中，newVersion对象自定义了name属性，其他属性全部复制自previousVersion对象。
  // 并不会抛出错误，因为x属性只是被定义，但没执行
  {
    var _obj2 = {};
    var aWithXGetter = (0, _extends3.default)({}, _obj2, {
      get x() {
        throw new Error('not thrown yet');
      }
    });
  }

  // 会抛出错误，因为x属性被执行了
  // {
  //   let obj = {};
  //   let runtimeError = {
  //     ...obj,
  //     ...{
  //       get x() {
  //         throw new Error('thrown now');
  //       }
  //     }
  //   };
  // }

  {
    var emptyObject = (0, _extends3.default)({}, null, undefined); // 不报错
    var _obj3 = (0, _extends3.default)({}, undefined, { a: 1 });
    console.log('undefined: ', _obj3);
  }
});

//# sourceMappingURL=extended-operator.js.map