// 创建一个事务，类型：IDBTransaction，文档地址： https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction
var transaction = db.transaction(personStore, 'readwrite');

// 通过事务来获取IDBObjectStore
var store = transaction.objectStore(personStore);
var person = {
    id: 6,
    name: 'lama',
    phone: '515154084',
    address: 'aicoder.com'
};

// 修改或者添加数据。 第一参数是要修改的数据，第二个参数是主键（可省略)
var updatePersonRequest = store.get(6);

// 监听添加成功事件
updatePersonRequest.onsuccess = function (e) {
    // var p = e.target.result;  // 要修改的原对象
    store.put(person);
};

// 监听失败事件
updatePersonRequest.onerror = function (e) {
    console.log(e.target.error);
};
