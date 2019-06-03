## 语法：

```
background：[ <bg-layer>, ]* <final-bg-layer>

<bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>

<final-bg-layer> = <bg-image> || <position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box> || background-color
```

**默认值**：看每个独立属性

**适用于**：所有元素

**继承性**：无

**动画性**：看每个独立属性

**计算值**：看每个独立属性

**媒　体**：视觉

## 取值：

- [background-image](http://css.doyoe.com/properties/backgrounds/background-image.htm)：

  指定元素使用的背景图像。可以是图片路径或使用渐变创建的“背景图像”

- [background-position](http://css.doyoe.com/properties/backgrounds/background-position.htm)：

  指定背景图像在元素中出现的位置。

- [background-size](http://css.doyoe.com/properties/backgrounds/background-size.htm)：

  指定背景图像尺寸。

- [background-repeat](http://css.doyoe.com/properties/backgrounds/background-repeat.htm)：

  指定背景图像如何填充。

- [background-attachment](http://css.doyoe.com/properties/backgrounds/background-attachment.htm)：

  定义滚动时背景图像相对于谁固定。

- [background-origin](http://css.doyoe.com/properties/backgrounds/background-origin.htm)：

  指定背景图像从元素的哪个区域作为显示的原点。

- [background-clip](http://css.doyoe.com/properties/backgrounds/background-clip.htm)：

  指定背景图像向外裁剪的区域。

- [background-color](http://css.doyoe.com/properties/backgrounds/background-color.htm)：

  指定背景颜色。

## 说明：

简写属性。定义元素的背景特性（背景色[background-color](http://css.doyoe.com/properties/backgrounds/background-color.htm)不能设置多组）。

- 一个元素可以设置多组背景图像，每组属性间使用逗号分隔。

- 如果设置的多组背景图之间存在着交集（即存在着重叠关系），前面的背景图会覆盖在后面的背景图之上。

- 示例：假设要在同一个元素上定义3个背景图像

  **缩写方式：**

  > ```
  > background: url(test1.jpg) no-repeat scroll 10px 20px/50px 60px content-box padding-box,
  > 	   url(test2.jpg) no-repeat scroll 10px 20px/70px 90px content-box padding-box,
  > 	   url(test3.jpg) no-repeat scroll 10px 20px/110px 130px content-box padding-box #aaa;
  > ```

  注意，因为[background-color](http://css.doyoe.com/properties/backgrounds/background-color.htm)不能设置多组，且前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住。

  **拆分方式：**

  > ```
  > background-image: url(test1.jpg), url(test2.jpg), url(test3.jpg);
  > background-repeat: no-repeat, no-repeat, no-repeat;
  > background-attachment: scroll, scroll, scroll;
  > background-position: 10px 20px, 10px 20px, 10px 20px;
  > background-size: 50px 60px, 70px 90px, 110px 130px;
  > background-origin: content-box, content-box, content-box;
  > background-clip: padding-box, padding-box, padding-box;
  > background-color: #aaa;
  > ```

- 如果定义了多个背景图片，而其他属性只有一个参数值，则表明所有背景图片的该属性都应用同一个参数值。据此可以对上面的例子进行缩写：

  **缩写方式：**

  > ```
  > background-image: url(test1.jpg), url(test2.jpg), url(test3.jpg);
  > background-repeat: no-repeat;
  > background-attachment: scroll;
  > background-position: 10px 20px;
  > background-size: 50px 60px,70px 90px,110px 130px;
  > background-origin: content-box;
  > background-clip: padding-box;
  > background-color: #aaa;
  > ```

- 如果定义了多个背景图片，而[background-origin](http://css.doyoe.com/properties/backgrounds/background-origin.htm)和[background-clip](http://css.doyoe.com/properties/backgrounds/background-clip.htm)设置了相同的值。可这样缩写：

  **缩写方式：**

  > ```
  > background: url(test1.jpg) no-repeat scroll 10px 20px/50px 60px padding-box,
  > 	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px padding-box,
  > 	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px padding-box #aaa;
  > ```

  这表示[background-origin](http://css.doyoe.com/properties/backgrounds/background-origin.htm)和[background-clip](http://css.doyoe.com/properties/backgrounds/background-clip.htm)都使用了`padding-box`参数值。

- 对应的脚本特性为：**background**。