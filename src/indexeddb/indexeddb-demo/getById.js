// 创建一个事务，类型：IDBTransaction，文档地址： https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction
var transaction = db.transaction(personStore, 'readwrite');

// 通过事务来获取IDBObjectStore
var store = transaction.objectStore(personStore);
store.get(6).onsuccess = function(e) {
    console.log('删除成功！')
};
