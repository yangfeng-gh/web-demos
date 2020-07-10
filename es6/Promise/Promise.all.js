(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["babel-runtime/helpers/slicedToArray", "babel-runtime/core-js/promise"], factory);
    } else if (typeof exports !== "undefined") {
        factory(require("babel-runtime/helpers/slicedToArray"), require("babel-runtime/core-js/promise"));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.slicedToArray, global.promise);
        global.PromiseAll = mod.exports;
    }
})(this, function (_slicedToArray2, _promise) {
    "use strict";

    var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

    var _promise2 = _interopRequireDefault(_promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Promise.all方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例
     * p的状态由p1、p2、p3决定，分成两种情况。
     * （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
     * （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
     */

    var databasePromise = connectDatabase();

    var booksPromise = databaseProimse.then(findAllBooks);

    var userPromise = databasePromise.then(getCurrentUser);

    _promise2.default.all([booksPromise, userPromise]).then(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            books = _ref2[0],
            user = _ref2[1];

        return pickTopRecommentations(books, user);
    });

    // 上面代码中，booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommentations这个回调函数。
});

//# sourceMappingURL=Promise.all.js.map