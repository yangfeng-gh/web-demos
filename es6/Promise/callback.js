(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.callback = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * JavaScript语言对异步编程的实现，就是回调函数。
   * 所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。
   * 它的英语名字callback，直译过来就是"重新调用"。
   *
   * 能过指针调用的函数叫做回调函数
   * 如果把函数A的指针作为参数传递给另一个函数B，当B通过A的指针调用A时，A就是回调函数
   * 回调函数不是由定义方调用的，而是在特定的事件或条件发生时，由另一方调用，用于对该事件或条件进行响应。
   *
   * 回调函数机制：
   * 1.定义一个回调函数
   * 2.在定义方初始化时，将回调函数的指针注册给调用方
   * 3.在特定的事件或条件发生时，使用回调函数指针调用函数对事件进行处理
   */

  // 读取文件进行处理，是这样写的。

  fs.readFile('/etc/passwd', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  // 上面代码中，readFile函数的第二个参数，就是回调函数，也就是任务的第二段。
  // 等到操作系统返回了/etc/passwd这个文件以后，回调函数才会执行。

  // 一个有趣的问题是，为什么Node.js约定，回调函数的第一个参数，必须是错误对象err（如果没有错误，该参数就是null）？
  // 原因是执行分成两段，在这两段之间抛出的错误，程序无法捕捉，只能当作参数，传入第二段。
});

//# sourceMappingURL=callback.js.map