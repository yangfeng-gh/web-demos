var db; // 全局的indexedDB数据库实例。

//1. 获取IDBFactory接口实例（文档地址： https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory）
var indexedDB =
    window.indexedDB ||
    window.webkitIndexedDB ||
    window.mozIndexedDB ||
    window.msIndexedDB;

if (!indexedDB) {
    console.log('你的浏览器不支持IndexedDB');
}

// 2. 通过IDBFactory接口的open方法打开一个indexedDB的数据库实例
// 第一个参数： 数据库的名字，第二个参数：数据库的版本。返回值是一个：IDBRequest实例,此实例有onerror和onsuccess事件。
var IDBOpenDBRequest = indexedDB.open('demoDB', 1);

// 3. 对打开数据库的事件进行处理
// 打开数据库成功后，自动调用onsuccess事件回调。
IDBOpenDBRequest.onsuccess = function (e) {
};

// 打开数据库失败
IDBOpenDBRequest.onerror = function (e) {
    console.log(e.currentTarget.error.message);
};

// 第一次打开成功后或者版本有变化自动执行以下事件：一般用于初始化数据库。
IDBOpenDBRequest.onupgradeneeded = function (e) {
    db = e.target.result; // 获取到 demoDB对应的 IDBDatabase实例,也就是我们的数据库。

    if (!db.objectStoreNames.contains('personStore')) {
        //如果表格不存在，创建一个新的表格（keyPath，主键 ； autoIncrement,是否自增），会返回一个对象（objectStore）
        // objectStore就相当于数据库中的一张表。IDBObjectStore类型。
        var objectStore = db.createObjectStore('personStore', {
            keyPath: 'id',
            autoIncrement: true
        });

        //指定可以被索引的字段，unique字段是否唯一。类型： IDBIndex
        objectStore.createIndex('name', 'name', {
            unique: true
        });
        objectStore.createIndex('phone', 'phone', {
            unique: false
        });
    }
    console.log('数据库版本更改为： ' + dbVersion);
};
