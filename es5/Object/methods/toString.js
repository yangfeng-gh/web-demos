var b = new Boolean(false); //原始值为false的对象转换为原始值时为true,所有的对象转换为布尔值都为true,包装对象也不例外
console.log(b.valueOf()); //false 调用对象的valueOf()方法获取构造对象的原始值
console.log(b.toString()); //false 调用对象的toString()方法获取构造对象的原始值的字符串形式
console.log(!!b); //true 转换为原始的boolean类型，结果为true

var arr = [1,2,3];
console.log(arr.toString()); //1,2,3
console.log(arr.valueOf()); //[1, 2, 3]
