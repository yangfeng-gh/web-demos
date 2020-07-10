function f(y) {
  return this.x + y
};
var o = {x: 1};
var g = f.bind(o);
g(2);

//返回一个函数，通过调用它来调用o中的方法f(),传递它所有的实参
function bind(f, o) {
  if (f.bind) return f.bind(o);
  else return function () {
    return f.apply(o, arguments);
  };
}

//ECMAScript3版本的Function.bind()方法
if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function (o /*, args*/) {
    var self = this, boundArgs = arguments;
//返回闭包
    return function () {
      var args = [], i;
      for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
      for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
      console.log(arguments);
      return self.apply(o, args);
    };
  };
}

var o = {x: 1};
var g = f.bind2(o);
g(2);
