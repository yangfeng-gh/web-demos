// 创建一个事务，类型：IDBTransaction，文档地址： https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction
var transaction = db.transaction(personStore, 'readwrite');

// 通过事务来获取IDBObjectStore
var store = transaction.objectStore(personStore);

// 往store表中添加数据
var addPersonRequest = store.add({
    name: '老马',
    phone: '189111833',
    address: 'aicoder.com'
});

// 监听添加成功事件
addPersonRequest.onsuccess = function(e) {
    console.log(e.target.result); // 打印添加成功数据的 主键（id）
};

// 监听失败事件
addPersonRequest.onerror = function(e) {
    console.log(e.target.error);
};
