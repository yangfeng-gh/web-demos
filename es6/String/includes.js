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
    global.includes = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Created by yvan on 2016-06-30.
   */
  var s = 'Hello world!';

  s.startsWith('Hello'); // true
  s.endsWith('!'); // true
  s.includes('o'); // true


  s.startsWith('world', 6); // true
  s.endsWith('Hello', 5); // true
  s.includes('Hello', 6); // false
});

//# sourceMappingURL=includes.js.map