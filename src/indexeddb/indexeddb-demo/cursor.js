var trans = db.transaction(personStore, 'readwrite');
var store = trans.objectStore(personStore);
var cursorRequest = store.openCursor();
cursorRequest.onsuccess = function(e) {
    var cursor = e.target.result;
    if (cursor) {
        var html = template('tbTmpl', cursor.value);
        document.getElementById('tbd').innerHTML += html;
        cursor.continue(); // 游标继续往下 搜索，重复触发 onsuccess方法，如果到最后返回null
    }
};
