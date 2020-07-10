var desc = Object.getOwnPropertyDescriptor({x: 1}, "x");
//            console.log(desc);

var random = {
get octet() {
return Math.floor(Math.random() * 256);
},
get uint16() {
return Math.floor(Math.random() * 65536);
},
get int16() {
return Math.floor(Math.random() * 65536 - 32768);
}
};
var randomDescriptor = Object.getOwnPropertyDescriptor(random, "octet");
//            console.log(randomDescriptor);

var o = {};
Object.defineProperty(o, "x", {
value: 1,
writable: true,
enumerable: false,
configurable: true
});
console.log(o.x);
console.log(Object.keys(o));
Object.defineProperty(o, "x", {
enumerable: true
});
console.log(Object.keys(o));
Object.defineProperty(o, "x", {
get: function(){return 10;}
});
console.log(o.x);

var obj = {};
obj.__defineGetter__("name", function () {
return 'yvan';
});
console.log(obj.name);
