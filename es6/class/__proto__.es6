/**
 * Created by yvan on 2016-06-19.
 */
class Animal {
    // 构造方法，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // toString 是原型对象上的属性
    toString() {
        console.log('name:' + this.name + ',color:' + this.color);
    }
}

let animal = new Animal('dog', 'white');
animal.toString();

console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); // false
console.log(animal.__proto__.hasOwnProperty('toString')); // true

class Cat extends Animal {
    constructor(action) {
        // 子类必须要在constructor中指定super 方法，否则在新建实例的时候会报错.
        // 如果没有置顶consructor,默认带super方法的constructor将会被添加
        super('cat', 'white');
        this.action = action;
    }

    toString() {
        console.log(super.toString());
    }
}

let cat = new Cat('catch')
cat.toString();

// 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true

console.log(Cat.__proto__ === Animal); // true
console.log(Cat.prototype.__proto__ === Animal.prototype); // true