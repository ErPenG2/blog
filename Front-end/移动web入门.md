# 移动端

## 移动端与 PC 端

PC 端

- 屏幕大，网页**固定版心**
- 端浏览器繁多，更多考虑兼容性问题（布局： 浮动+定位+标准流）

移动端

- 手机屏幕小，网页宽度多数为 100%，是适配手机屏幕宽度
- 移动端则基本不需要考虑兼容性问题，放心大胆使用 CSS 新特性

## 物理分辨率和逻辑分辨率

- 物理分辨率：硬件所支持的，屏幕出厂就设定无法修改
- 逻辑分辨率：软件可以达到的，可人为调整，**开发中写的是逻辑分辨率**
- 手机端物理分辨率一般为逻辑分辨率的两到三倍
- PC 端物理分辨率与逻辑分辨率相等

## 视口

- **视口（viewport）\*\*就是浏览器显示页面内容的\*\*屏幕区域**，视口可以分为布局视口、视觉视口和理想视口

### 布局视口（**layout viewport**）

- 一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的 PC 端页面在手机上显示的问题
- iOS, Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页大多都能在手机上呈现，一般默认可以通过手动缩放网页

![image-20230504205310308.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/17b7be5486cf4318adbb0a2902682cc4tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

### 视觉视口（**visual viewport**）

- 网页的可视区域
- 我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度

![image-20230504210937988.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/a44c163bd9bd44798530c3463a25e27ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

### 理想视口（**ideal viewport**）

- 为了使网站在移动端有最理想的浏览和阅读宽度而设定
- 理想视口，对设备来讲，是最理想的视口尺寸
- 需要手动添写`meta`视口标签通知浏览器操作
- 简单理解就是设备有多宽，我们布局的视口就多宽

![image-20230504211912407.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/9e02b136dd614c54943364c16c8a8cdctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

### meta 视口标签

- 有了视口标签，可以达到我们想要的理想视口

  ```html
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
  />
  <!-- 标准视口设置 -->
  <!-- 从左到右依次为：视口宽度等于设备宽度，初始缩放比1.0，最大缩放比1.0，用户不可缩放-->
  ```

  | 属性            | 解释说明                                                 |
  | --------------- | -------------------------------------------------------- |
  | `width        ` | 宽度设置的是 viewport 宽度，可以设置 device-width 特殊值 |
  | `initial-scale` | 初始缩放比，大于 0 的数字                                |
  | `maximum-scale` | 最大缩放比，大于 0 的数字                                |
  | `minimum-scale` | 最小缩放比，大于 0 的数字                                |
  | `user-scalable` | 用户是否可以缩放，yes 或 no(1 或 0)                      |

## 二倍图

- 实际开发中还有三倍图甚至四倍图等，多倍图，但是现在市场还是二倍图偏多，我们称为二倍图
- 二倍图存在就是为了让页面中图片更加清晰
- 二倍图的主要使用逻辑是把例如 750px 的设计稿，缩放到一半，改为 375px 来写代码，手机显示会按照物理像素显示为 750px，这样图片就不会失真

## 流式布局（百分比布局）

- 宽度自适应，高度固定
- 仍然沿用 PC 端布局方式，不推荐此种用法

# flex 布局

## flex 布局特性

- 基于 flex 精确灵活控制块级盒子的布局方式，避免浮动布局中脱离文档流现象发生
- flex 布局中子元素不会脱标
- 操作方便，布局极为简单，移动端应用很广泛
- PC 端浏览器使用较多，部分浏览器(IE)不支持
- 组成部分：
  - **弹性容器（父元素）**
  - **弹性盒子（子元素）**
  - **主轴**
  - **侧轴（交叉轴）**

![image-20230505194835266.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/e5c04247dee04993a02a8296fb6aa74atplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

## 布局原理

- flexible Box （弹性盒子/布局），用来为盒子模型提供最大的灵活性
  - 父盒子设置`flex`后，`float`、`clear`、`vertical-align`全部失效
  - 弹性布局=伸缩盒布局=flex 布局
  - 父元素添加 `display: flex`，子元素可以自动的挤压或拉伸
- 给容器设置`flex`后，它的所有子元素自动成为容器成员，成为`flex item`，简称项目
- 在 flex 眼中，标签不再分类

- 简单说就是没有块级元素，行内元素和行内块元素
- 任何一个元素都可以直接给宽度和高度一行显示

- Flex 不存在脱标的情况：也就是基本淘汰了浮动，更不用清除浮动

## flex 布局父项常见属性

- `flex-direction`：主轴方向
- `justify-content`：主轴上的子元素排列方式
- `flex-wrap`：子元素是否换行
- `align-content`：设置侧轴上的子元素排列方式（多行）
- `align-items`：设置侧轴上的子元素排列方式（单行）
- `flew-flow`：复合属性（flex-direction 和 flex-wrap 属性复合）

### flex-direction

- 设置主轴方向
- 默认主轴水平向右、默认侧轴垂直水平向下

| 属性值           | 说明                 |
| ---------------- | -------------------- |
| `row          `  | 行、从左到右（默认） |
| `row-reverse  `  | 行、从右到左         |
| `column`         | 列、从上到下         |
| `column-reverse` | 列、从下到上         |

### justify-content

- `justify-content`定义了项目在**主轴**上的子元素排列方式

- 语法：

  ```css
  /*修改元素在主轴的对齐方式*/
  /*使用示例*/
  justify-content: space-between;
  ```

| 属性值          | 说明                       |
| --------------- | -------------------------- |
| flex-start      | 从头开始(默认)             |
| flex-end        | 从尾部开始                 |
| `center`        | 主轴居中对齐               |
| `space-around`  | 两端距离是中间距离的一半   |
| `space-between` | 先两边贴边 再平分剩余空间  |
| `space-evenly`  | 弹性盒子与容器之间间距相等 |

![image-20230504214606263.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/6bbe69418a4f44389496a1e13a9ff389tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 记忆：
  - 两侧没缝隙是 `between`
  - 缝隙一样大是 `evenly`
  - 2 倍缝隙是 `around`

### flex-wrap

- 设置子元素是否换行
- nowrap 不换行 / wrap 换行
- 默认不换行，会强行挤一挤
- 需要给弹性盒子设置宽度

### align-items

- 设置**侧轴**上的子元素排列方式（单行）
- 子项单行的时候使用

| 属性值     | 说明                                         |
| ---------- | -------------------------------------------- |
| flex-start | 从上到下                                     |
| flex-end   | 从下到上                                     |
| `center`   | 挤在一起居中（垂直居中）                     |
| `stretch`  | 拉伸（默认值，前提是弹性盒子有宽度、无高度） |
| baseline   | 伸缩项目的第一行文字的基线对齐               |

![image-20230504215331735.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/08433c92d42c4618a8ac7c70f5ee1b49tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 拓展：使用 flex 让子盒子垂直水平居中

  ```css
  /*方法一：
  父容器开启 flex 布局，随后使用 justify-content 和 align-items 实现水平垂直居中*/
  .father {
    width: 500px;
    height: 500px;
    background-color: pink;
    /* 设置为flex布局 */
    display: flex;
    /* 主轴水平居中 */
    justify-content: center;
    /* 侧轴垂直居中 */
    align-items: center;
  }

  .son {
    width: 200px;
    height: 200px;
    background-color: purple;
  }

  /*方法二：
  父容器开启 flex 布局，随后子元素 margin: auto*/
  .father {
    width: 500px;
    height: 500px;
    background-color: pink;
    /* 设置为flex布局 */
    display: flex;
  }

  .son {
    width: 200px;
    height: 200px;
    background-color: purple;
    margin: auto;
  }
  ```

### align-content

- 设置侧轴上的子元素的排列方式（多行）

| 属性值          | 说明                                   |
| --------------- | -------------------------------------- |
| `flex-start   ` | 默认值在侧轴的头部开始                 |
| `flex-end     ` | 在侧轴的尾部开始排列                   |
| `center`        | 在侧轴中间显示                         |
| `space-around`  | 子项在侧轴上下距离为中间距离一半       |
| `space-between` | 子项在侧轴先平分在两头，再平分剩余空间 |
| `space-evenly`  | 子项在侧轴距离相等                     |
| `stretch     `  | 设置子项元素高度平分父元素高度         |

![image-20230506105425429.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/2c7e6d5c324d41e6a938bc35efe6328ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

### flex-flow

- flex-direction 和 flex-wrap 属性的复合属性

```css
flex-flow: row wrap;
```

### 圣杯布局（拓展）

- 圣杯布局就是左右两边大小固定不变，中间宽度自适应
- 一般这种布局方式适用于各种移动端顶部搜索部分，如京东手机版主页面顶部搜索

![image-20230506085522848.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/a3f79fd0437241c090b856527c1ceab4tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 思路：

  - 两侧盒子写固定大小
  - 中间盒子 flex: 1; 占满剩余空间

- 示例：

  ```css
  .top {
    display: flex;
    justify-content: center;
  }

  .top div:first-child {
    width: 50px;
    height: 50px;
    background-color: red;
  }

  .top div:last-child {
    width: 50px;
    height: 50px;
    background-color: red;
  }

  .top div:nth-child(2) {
    flex: 1;
    height: 50px;
    background-color: pink;
  }
  ```

## flex 布局子项常见属性

- flex 子项目占的份数
- align-self 控制子项目在侧轴的排列方式
- order 属性定义子项的排列顺序

### 伸缩比

- flex 属性定义子项目分配剩余空间，用 flex 来表示占多少份

- 把父盒子分为若干份数，每个子盒子各占几份（整数）

  - `flex:1`; 一定给子盒子加
  - 分配父级剩余的空间
  - 伸缩比优先于宽度

- 语法：

  ```css
  flex: 1;
  ```

- 示例：

  一个父盒子里有三个子盒子，每个子盒子写 flex：1； 此时每个子盒子各占三分之一

  ```html
  <div class="father">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  ```

  ```css
  .father {
    display: flex;
    height: 300px;
    background-color: pink;
  }

  .father div {
    /* 每个孩子各占1份 */
    flex: 1;
    /* 默认子盒子和父亲一样高 */
    background: purple;
  }
  ```

![image-20230506085454346.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/c5d4d6736f0b4396bc70ee369fda501btplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 注意：
  - 一定要给子盒子添加
  - 子盒子默认高度会和父盒子一样高（前提是不给高度）

### align-self

- 控制子项自己（单个）在侧轴上的排列方式
- 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。
- 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，等同于 stretch

| 属性值        | 说明                                 |
| ------------- | ------------------------------------ |
| `flex-start`  | 从上到下                             |
| `flex-end  `  | 从下到上                             |
| `center`      | 挤在一起居中（垂直居中）             |
| `stretch`     | 拉伸（默认值，前提是弹性盒子无高度） |
| `baseline   ` | 伸缩项目的第一行文字的基线对齐       |

### order

- 定义项目的排列顺序
- 数值越小，排列越靠前，默认为 0

```css
.item {
  order: <number>;
}
```

# rem 适配布局

## rem 单位

- 相对单位，类似于 em，em 是相对于**父元素字体大小**

- rem 的基准是相对于**HTML 元素的字体大小**（只受 HTML 字体大小影响，其余的无影响）

  - 相对单位
  - rem 单位是相对于 HTML 标签的字号计算结果
  - 1rem = 1HTML 字号大小
  - 我们只需要修改 html 的文字大小，就可以完成元素大小的等比例缩放

- 示例：

  ```css
  html {
    font-size: 35px;
  }
  ```

  此时，1rem 就是 35 像素

- 补充单位（vw 和 vh）

  > 什么是 vw 和 vh？
  >
  > - vw 视口宽，vh 视口高，是长度单位，同时也是相对单位，相当于视口的大小
  >
  > vw 和 vh 把视口分成多少份？屏幕视口在 375\*667 时，1vw=？1vh=？
  >
  > - 100 份，标准稿：1vw=3.75 1vh=6.67
  >
  > 测量的值如何转换 vw 或 vh，转换公式是？
  >
  > - vw = 测量的值 / 视口宽度百分之一 标准稿 vw=50 / 3.75
  > - vh = 测量的值 / 视口高度百分之一 标准稿 vw=40 / 6.67
  >
  > 屏幕视口变化时，vw 和 vh 的值是否会跟着变化？
  >
  > - 会
  >
  > 在实际开发中 vw 和 vh 会不会一起使用？为什么？
  >
  > - 不会一起使用，原因是盒子会变形，要么统一 vw 要么统一 vh

- 补充单位（vmin 和 vmax）

  > 100vmin 指的是屏幕视口宽和高中较小的那个值，375 \*667 竖屏：取 375 宽，横屏：取 375 高
  >
  > 100vmax 指的是屏幕视口宽和高中较大的那个值，375\*667 竖屏：取 667 高，横屏：667 宽
  >
  > vmin 和 vmax 一般推荐使用 vmin 可以解决移动端横屏文字显示不一致的问题,替换 vw 即可

## 媒体查询（CSS3）

- 媒体查询 mediaquery 可以自动检测视口的宽度
- 使用@media 查询，可以针对不同的媒体类型定义不同的样式
- 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面

### 语法规范

```css
@media mediatype and|not|only(media feature) {
    CSS-Code
}
```

- 用@media 开头，注意@符号
- mediatype 媒体类型
- 关键字 and not only
- media feature 媒体特性，必须有小括号包含

#### mediatype 查询类型

- 将不同终端设备划分成不同的类型，成为媒体类型

| 值        | 解释说明                         |
| --------- | -------------------------------- |
| `all  `   | 用于所有设备                     |
| `print`   | 用于打印机和打印预览             |
| ` screen` | 用于电脑屏幕、平板电脑、智能手机 |

#### 关键字

- 关键字将媒体类型或多个媒体特性连接到一起作为媒体查询的条件
  - and：可以将多个媒体类型连接到一起，相当于“且”的意思。
  - not：排除某个媒体类型，相当于“非”的意思。
  - only：指定某个特定的媒体类型，可以省略。

#### 媒体特性

- 每种媒体类型都具有各自不同的特性，用小括号包含。

| 值          | 解释说明                                       |
| ----------- | ---------------------------------------------- |
| `width    ` | 定义输出设备中页面可见区域的宽度               |
| `min-width` | 定义输出设备中页面最小可见区域宽度（大于等于） |
| `max-width` | 定义输出设备中页面最大可见区域宽度（小于等于） |

- x<a;-------x>=b;-------x>=c (a<b<c)

### 媒体查询+rem 实现元素动态大小变化

- rem 单位跟着 html 来走，有了 rem 页面元素可以设置不同的大小尺寸
- 媒体查询可以根据不同设备宽度来修改样式
- 媒体查询+rem 可以实现不同设备宽度，实现页面元素大小的动态变化
  - 查看设计稿宽度 → 确定参考设备宽度(视口宽度) → 确定基准根字号（1/10 视口宽度）
  - rem 单位的尺寸 = px 单位数值 / 基准根字号

### 引入资源

- 当样式比较繁多的时候，我们可以针对不同的媒体使用不同的 stylesheets（样式表）
- 原理：直接在 link 中判断设备尺寸，然后引入不同的 css 文件

```html
<link rel="stylesheet" href="./css/pc.css" media="(max-width:992px)" />
```

## Less 基础

### 维护 CSS 弊端

- CSS 是一门非程序式语言，没有变量、函数、scope 作用域等概念
- CSS 缺点：
  - CSS 冗余度高
  - CSS 没有很好的计算能力
  - 不方便维护和扩展，不利于复用

### Less

- Less（leaner Style Sheets）CSS 扩展语言，也成为了 CSS 预处理器
- 并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为 CSS 加入程序式语言的特性
- 它在 CSS 语法的基础上，引入了变量，minxin（混入），运算以及函数等功能，大大简化了 CSS 的编写，用最少的代码做更多的事情

常见的 CSS 预处理器：Sass、Less、Stylus

Less 是一门 CSS 预处理器语言，它扩展了 CSS 动态特性，使用 VScode 中的**easyless**插件即可以自动编译

### Less 使用

> 1. 新建后缀名为 less 的文件
> 2. Less 变量
> 3. Less 编译
> 4. Less 嵌套
> 5. Less 运算

Less 导入：

```less
@import "./变量.less";
@import url(./变量.less);
```

- import 后面有空格
- 使用 less 导入的好处是：减少了 html 页面的 link 标签数量

Less 导出：

```less
//out: ./css/
//out: ./css/common.css

/*
在less文件第一行添加以上代码
以上为代码，非注释
*/
```

Less 禁止导出：

```less
//out: false;

/*
禁止导出的代码防止css生成，应用场景：当多个文件被其他文件引入，被引入的文件不需要生成css
*/
```

### Less 变量

变量指没有固定的值，可以改变的。因为我们 CSS 中的一些颜色和数值经常使用。

```less
@变量名: 值;
@fontSize: 16px;
```

#### 变量命名规范

- 必须要有@为前缀

- 不能包含特殊字符

- 不能以数字开头

- **大小写敏感**

  ```less
  @color: pink;
  @Color: pink;
  //以上为两个变量
  ```

#### 变量使用规范

```less
body {
  color: @color;
}
a:hover {
  color: @color;
}
```

### Less 编译

Less 包含**自定义语法**和**解析器**，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。我们需要把我们的 less 文件编译生成 css 文件，这样我们的 html 页面才能使用。

### Less 嵌套

正常嵌套写法：

```less
#header .logo {
  width: 300px;
}
```

Less 嵌套写法

```less
#header {
  .logo {
    width: 300px;
  }
}
```

(交集 | 伪类 | 伪元素选择器)

- 内层选择器前面没有&符号，则它被解析为父选择器后代
- 如果有&符号，它就被解析为父元素自身或父元素的伪类

CSS 写法：

```css
a:hover {
  color: red;
}
```

Less 嵌套写法

```less
a {
  &:hover {
    color: red;
  }
}
```

### Less 运算

Less 提供了四则运算，数字、颜色、变量均可以参与运算

> 注意事项：
>
> - 运算符中间有**空格**隔开
> - 对于两个不同**单位值**之间的运算，取**第一个值**的单位
> - 如果两个值之间只有一个值有单位，则运算符就取这个单位
> - 除法比较特殊，必须添加小括号，或者在出号前面加'.'变成 ./

示例

```less
.box {
  width: 100px + 100;
  // 注意：单位的转换 计算的时候以第一个单位为准
  height: (100 / 37.5rem);
  // height: (100rem / 37.5);
  // height: 100px - 50;
  margin: (20px * 5) auto;
  padding: (10px / 5);
  border: 1px + 2 * 3 solid red;
}
```

## rem 适配方案

### rem 实际方案

1. 按照设计稿与设备宽度的比例，动态计算并设置 html 根标签的 font-size 大小（媒体查询）
2. CSS 中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为 rem 为单位的值

### rem 适配方案技术使用（主流）

方案 1：

- less
- 媒体查询
- rem

方案 2：

- flexible.js
- rem

### rem 实际方案一

- rem + 媒体查询 + less 技术

  1.设计稿常见尺寸

  | 设备         | 常见宽度                                                         |
  | ------------ | ---------------------------------------------------------------- |
  | iPhone 4 5   | 640px                                                            |
  | iPhone 6 7 8 | 750px                                                            |
  | Android      | 常见 320px、360px、400px、500px、720px。大多数的安卓设备为 720px |

  现在基本上以 750px 为准

  2.元素大小取值方法：

  > - rem = 页面元素值（px）/（屏幕宽度/划分的份数）
  > - font-size = 屏幕宽度 / 划分的份数（一般为 10 份）

### rem 实际方案二

- flexible.js 是淘宝开发出的一个用来适配移动端的 js 库

- 核心原理就是根据不同的视口宽度给网页中 html 根节点设置不同的 font-size

- 导入 flexible.js

  ```html
  <script src="./js/flexible.js"></script>
  ```

> 有了这个 JS 文件，可以帮助我们自动检测屏幕宽度，自动修改 html 文字大小，这样就可以让盒子配合 rem 完成适配

# 响应式开发

## 响应式开发

### 原理

- 使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而达到适配不同设备的目的
  - 超小屏幕（手机） **< 768px**
  - 小屏设备（平板） **>= 768px ~ < 992px**
  - 中等屏幕（桌面显示器） **>= 992px ~ <1200px**
  - 宽屏设备（大桌面显示器） **>= 1200px**

### 响应式布局容器

- 超小屏幕--宽度设置 100%
- 小屏设备--宽度设置 750px
- 中等屏幕--宽度设置 970px
- 宽屏设备--宽度设置 1170px

## Bootstrap 前端框架

### 简介

- 目前最受欢迎的前端框架，基于 HTML、CSS、JavaScript 的，简洁灵活，使得 web 开发更加快捷
  - 中文官网：**[www.bootcss.com/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.bootcss.com%2F)**
  - 官网：**[getbootstrap.com/](https://link.juejin.cn/?target=http%3A%2F%2Fgetbootstrap.com%2F)**
  - 推荐使用：**[bootstrap.css88.com/](https://link.juejin.cn/?target=http%3A%2F%2Fbootstrap.css88.com%2F)**
- 优点：
  - 标准化的 HTML+CSS 编码规范
  - 提供了一套简洁、直观、强悍的组件
  - 有自己的生态圈，不断更新迭代
  - 让开发更简单，提高了开发效率
- 版本：3.0 版本最稳定和全面
- 使用步骤：
  - 复制 css 文件

![image-20230510223600373.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/2d9509fad8b3479a9ee7f033c150e0b8tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 并且引入到 HTML 文件中

  ```html
  <link rel="stylesheet" href="./css/bootstrap.min.css" />
  ```

- 复制字体图标文件夹

![image-20230510223715455.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/274a2c37e8984cf58bbe13e261e9cf3atplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

- 如果需要 js，则复制 js 文件，并引入 html 文件中

  ```html
  <script src="./js/bootstrap.min.js"></script>
  ```

- 使用内部预定义好的类即可

  ```html
  <div class="container">我的内容</div>
  ```

### Bootstrap 布局容器

- Bootstrap 需要为页面内容和栅格系统包裹一个`.container`容器，它提供了两个作此用处的类

> **1. container-fluid 类**
>
> - 流式布局容器 百分百宽度
> - 占据全部视口（viewport）的容器。
>
> **2. container 类**
>
> 响应式布局的容器 固定宽度
>
> - 大屏 ( >=1200px) 宽度定为 1170px
> - 中屏 ( >=992px) 宽度定为 970px
> - 小屏 ( >=768px) 宽度定为 750px
> - 超小屏 (100%)

### Bootstrap 栅格系统

#### 简介

- 网格系统，指将页面布局划分为等宽的列，然后通过列数的定义来模块化页面布局。
- 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口尺寸的增加，系统会自动分为最多 12 列。
- 简单说，栅格系统也是一种布局方式。 BootStrap 给咱们内置好了一套布局系统。

#### 使用举例

比如，超大屏幕下我们想要一个通栏的大盒子

```html
<div class="container">
  <div class="col-lg-12">我自己独占一行</div>
</div>
```

又比如，超大屏幕下，我们想要一行左右来分

```html
<div class="container">
  <div class="col-lg-6">我占左边6个</div>
  <div class="col-lg-6">我站右边6个</div>
</div>
```

![1638375474814.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/66202af2acf3445587891a2eb7ff1bf5tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

超大屏下，如果一行放 4 个，怎么做呢？

```html
<div class="container">
  <div class="col-lg-3">我占左边3个</div>
  <div class="col-lg-3">我站右边3个</div>
  <div class="col-lg-3">我站右边3个</div>
  <div class="col-lg-3">我站右边3个</div>
</div>
```

如果实现不同屏幕下，不同的显示个数，可以通过使用不同类名。

中等屏幕下放 3 个

```html
<div class="container">
  <div class="col-lg-3 col-md-4">盒子内容</div>
  <div class="col-lg-3 col-md-4">盒子内容</div>
  <div class="col-lg-3 col-md-4">盒子内容</div>
  <div class="col-lg-3 col-md-4">盒子内容</div>
</div>
```

小屏幕下放 2 个

```html
<div class="container">
  <div class="col-lg-3 col-md-4 col-sm-6">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6">盒子内容</div>
</div>
```

超小屏幕下放 1 个

```html
<div class="container">
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">盒子内容</div>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">盒子内容</div>
</div>
```

#### 重要技巧

##### row 类

- row 可以去掉 container 默认的内边距

##### 列偏移

- 列偏移 通过 col-lg-offset-\* ，让盒子往右侧走，左边有几份

例如：

```html
<div class="container">
  <div class="row first">
    <div class="col-lg-4">左侧</div>
    <div class="col-lg-4 col-lg-offset-4">右侧</div>
  </div>
  <div class="row second">
    <div class="col-lg-3 col-lg-offset-3">1侧</div>
    <div class="col-lg-3 col-lg-offset-3">2侧</div>
  </div>
  <div class="row third">
    <div class="col-lg-6 col-lg-offset-3"></div>
  </div>
</div>
.first div { height: 100px; background-color: pink; } .second div {
background-color: purple; height: 100px; } .third div { height: 100px;
background-color: skyblue; }
```

效果如下：

![image-20230510224652821.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/f7d566d25eba4b4899265d75845b4c6ftplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

##### 列嵌套

- 一个盒子里面可以再嵌套其他的盒子，但是站在这个盒子的角度来看，他又分为了 12 份。

```html
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <p class="col-lg-6">登录</p>
      <p class="col-lg-6">注册</p>
    </div>
    <div class="col-lg-4">2</div>
    <div class="col-lg-4">3</div>
  </div>
</div>
.container .row div { height: 100px; background-color: pink; }
```

效果如下：

![image-20230510224855303.png](%E7%A7%BB%E5%8A%A8web%E5%85%A5%E9%97%A8.assets/add2b2e4cc16443683a71799b1ece405tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)
