/**
 * Generator函数的暂停执行的效果，意味着可以把异步操作写在yield语句里面，等到调用next方法时再往后执行。
 * 这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在yield语句下面，反正要等到调用next方法时再执行。
 * 所以，Generator函数的一个重要实际意义就是用来处理异步操作，改写回调函数。
 */
function* loadUI() {
    showLoadingScreen();
    yield loadUIDataAsynchronously();
    hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next()
// 上面代码表示，第一次调用loadUI函数时，该函数不会执行，仅返回一个遍历器。
// 下一次对该遍历器调用next方法，则会显示Loading界面，并且异步加载数据。等到数据加载完成，再一次使用next方法，则会隐藏Loading界面。
// 可以看到，这种写法的好处是所有Loading界面的逻辑，都被封装在一个函数，按部就班非常清晰。

// Ajax是典型的异步操作，通过Generator函数部署Ajax操作，可以用同步的方式表达。
function* main() {
    var result = yield request("http://some.url");
    var resp = JSON.parse(result);
    console.log(resp.value);
}

function request(url) {
    makeAjaxCall(url, function(response){
        it.next(response);
    });
}

var it = main();
it.next();
// 上面代码的main函数，就是通过Ajax操作获取数据。
// 可以看到，除了多了一个yield，它几乎与同步操作的写法完全一样。
// 注意，makeAjaxCall函数中的next方法，必须加上response参数，
// 因为yield语句构成的表达式，本身是没有值的，总是等于undefined。