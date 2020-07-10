(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['String.prototype.at'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('String.prototype.at'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.StringPrototype);
    global.at = mod.exports;
  }
})(this, function () {
  'use strict';

  console.log('abc'.at(0)); // "a"
  /**
   * Created by yvan on 2016-06-30.
   */
  console.log('𠮷'.at(0)); // "𠮷"
});

//# sourceMappingURL=at.js.map