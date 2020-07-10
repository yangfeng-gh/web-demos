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
    global.normalize = mod.exports;
  }
})(this, function () {
  'use strict';

  /**
   * Created by yvan on 2016-06-30.
   */
  '\u01D1' === 'O\u030C'; //false

  '\u01D1'.length; // 1
  'O\u030C'.length; // 2

  '\u01D1'.normalize() === 'O\u030C'.normalize(); //true

  'O\u030C'.normalize('NFC').length; // 1
  'O\u030C'.normalize('NFD').length; // 2
});

//# sourceMappingURL=normalize.js.map