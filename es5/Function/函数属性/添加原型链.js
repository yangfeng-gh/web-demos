/**
 *** 通过Object.getPrototypeOf()和 Object.prototype.__proto__的组合，可以给一个新的原型对象添加完整的原型链
 *** Object.appendChain(@object, @prototype)
 *
 * Appends the first non-native prototype of a chain to a new prototype.
 * Returns @object (if it was a primitive value it will transformed into an object).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
 * new Function(["@arg"(s)], "@function_body") to that chain.
 * Returns the function.
 *
 **/

Object.appendChain = function (oChain, oProto) {
  // console.log('===' + JSON.stringify(arguments));
  if (arguments.length < 2) {
    throw new TypeError('Object.appendChain - Not enough arguments');
  }
  if (typeof oProto === 'number' || typeof oProto === 'boolean') {
    throw new TypeError('second argument to Object.appendChain must be an Object or a string');
  }

  var oNewProto = oProto,
    oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd);
       o1st !== Object.prototype && o1st !== Function.prototype;
       o1st = this.getPrototypeOf(o2nd)
  ) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    console.log('===' + oReturn);
    this.setPrototypeOf(oReturn, oLast);
    console.log('====' + oReturn);
  }

  this.setPrototypeOf(o2nd, oNewProto);

  return oReturn;
};

// 例一：给一个原型添加链
function Mammal() {
  this.isMammal = 'yes';
}

function MammalSpecies(sMammalSpecies) {
  this.species = sMammalSpecies;
}

var mammal = new Mammal();
MammalSpecies.prototype = mammal;
MammalSpecies.prototype.constructor = MammalSpecies;

var oCat = new MammalSpecies('Felis');

console.log(oCat.isMammal); // 'yes'

function Animal() {
  this.breathing = 'yes';
}

Object.appendChain(oCat, new Animal());

console.log(oCat.breathing); // 'yes'
