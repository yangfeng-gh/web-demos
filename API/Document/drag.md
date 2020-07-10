先介绍一下html5的drag想要启用drag，只要给元素加上draggable="true"就行了（firefox除外，后面会讲到），默认a和img就是可以拖动的。
 在线演示地址[http://jsrun.net/JpiKp/edit](https://link.jianshu.com?t=http://jsrun.net/JpiKp/edit)，但是在firefox中只是这样还是无法拖动的。还需要加上拖动事件

### 拖动事件

事件分为两类，当前拖动的元素上的事件，以及要放置的位置接收到的事件。
 一.发生在拖动元素上的事件：

| 事件名    | 触发时机             | 触发次数 |
| --------- | -------------------- | -------- |
| dragstart | 当拖动开始时触发一次 | 1        |
| drag      | 拖动开始后反复触发   | n        |
| dragend   | 拖动结束后触发一次   | 1        |

二.发生在目标元素上的事件

| 事件名    | 触发时机                                                 | 触发次数 |
| --------- | -------------------------------------------------------- | -------- |
| dragenter | 当拖动元素进入目标时触发一次                             | 1        |
| dragover  | 当拖动元素在目标元素范围内时反复触发                     | n        |
| drop      | 拖动元素在目标元素内释放时(在设置了dropover事件的前提下) | 1        |

可以通过addEventListener来添加事件监听或者直接使用dom0，在firefox中就必须添加dragstart事件并使用event.dataTransfer.setData来添加传递信息

### 信息传递

在拖动元素时可以设置传递的信息
 event.dataTransfer.setData("te", “sss);两个参数，第一个参数key，第二个参数value。注意只能传递字符串和url，但是在firefox使用text或Text作为key时会打开新的标签页，所以不要用他们作为key。

### 阻止浏览器默认事件

使用event.preventDefault();可以阻止浏览器默认事件
 接下来写一个简单的例子，在线演示地址[http://jsrun.net/JpiKp/edit](https://link.jianshu.com?t=http://jsrun.net/JpiKp/edit)

```csharp
<div class="drag" draggable="true">1</div>
<div class="container">容器</div>
```

### 注意：设置了dragover后drop才会触发！！

```jsx
var ele=document.querySelector(".drag");
var container=document.querySelector(".container");
ele.ondragstart = function(event) {
      console.log("start");
      //不能使用text或Text，firefox会打开新tab
      event.dataTransfer.setData("te", event.target.innerText);        
};
container.ondrop = function(event) {
            console.log("onDrop");
            var text = event.dataTransfer.getData("te");
                    alert(text);
            event.preventDefault();
}
container.ondragover = function(event) {
            console.log("onDrop over");
            event.preventDefault();            
}
```

其他事件大家可以自己试一试