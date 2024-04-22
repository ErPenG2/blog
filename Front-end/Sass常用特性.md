> [Sass 中文官网](https://link.juejin.cn/?target=https%3A%2F%2Fwww.sass.hk%2F)

# CSS 功能拓展

## 嵌套规则(核心)

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器

例如有这么一段 CSS 代码：

```css
.container {
  width: 1200px;
  margin: 0 auto;
}
.container .header {
  height: 90px;
  line-height: 90px;
}
.container .header .log {
  width: 100px;
  height: 60px;
}
.container .center {
  height: 600px;
  background-color: #f00;
}
.container .footer {
  font-size: 16px;
  text-align: center;
}
```

改成写 Sass：

```scss
.container {
  width: 1200px;
  margin: 0 auto;

  .header {
    height: 90px;
    line-height: 90px;

    .log {
      width: 100px;
      height: 60px;
    }
  }

  .center {
    height: 600px;
    background-color: #f00;
  }

  .footer {
    font-size: 16px;
    text-align: center;
  }
}
```

> 嵌套功能避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理

## 父选择器 `&`

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，可以用 `&` 代表嵌套规则外层的父选择器

`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如：

```scss
#main {
  color: black;
  &-sidebar {
    border: 1px solid;
  }
}
```

编译为：

```css
#main {
  color: black;
}
#main-sidebar {
  border: 1px solid;
}
```

> 编译后的 CSS 文件中 `&` 将被替换成嵌套外层的父选择器。如果含有多层嵌套，最外层的父选择器会一层一层向下传递

## 属性嵌套

有些 CSS 属性遵循相同的命名空间，比如 `font-family, font-size, font-weight` 都以 `font` 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中，例如：

例如：

```css
.container a {
  color: #333;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
}
```

改成写 Sass：

```scss
.container {
  a {
    color: #333;

    font: {
      size: 14px;
      family: sans-serif;
      weight: bold;
    }
  }
}
```

> 此处`font:`后要加一个空格

## 占位符选择器 `%foo`

Sass 额外提供了一种特殊类型的选择器：占位符选择器 。与常用的 `id` 与 `class` 选择器写法相似，只是 `#` 或 `.` 替换成了 `%`。必须通过 `@extend` 指令调用

占位符选择器不会在 CSS 中生成具体的类名，直到它们被`@extend`到其他选择器时才会生成。这可以减少生成的 CSS 文件大小，因为不会有多余的类名（用于扩展其他选择器，但不会被编译成最终的 CSS）

```scss
%my-placeholder {
  color: blue;
  font-weight: bold;
}

.my-element {
  @extend %my-placeholder;
  background-color: yellow;
}
```

编译为：

```css
.my-element {
  color: blue;
  font-weight: bold;
}

.my-element {
  background-color: yellow;
}
```

## 注释 `/* */` 与 `//`

Sass 支持标准的 CSS 多行注释 `/* */`，以及单行注释 `//`，前者会被完整输出到编译后的 CSS 文件中，而后者则不会，例如：

```scss
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body {
  color: black;
}

// These comments are only one line long each.
// They won't appear in the CSS output,
// since they use the single-line comment syntax.
a {
  color: green;
}
```

编译为：

```css
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body {
  color: black;
}

a {
  color: green;
}
```

> 单行注释没有编译进 css 文件

此外，将 `!` 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息

# Sass 变量

## CSS 变量

CSS 定义变量：

```css
:root {
  --color: #f00;
}

body {
  --border-color: #f2f2f2;
}

.header {
  --background-color: #f8f8f8;
}

p {
  color: var(--color);
  border-color: var(--border-color);
}

.header {
  background-color: var(--background-color);
}
```

> CSS 变量必须以`--`开头，通过`var()`使用
>
> **`:root`** 表示`<html>`，除了优先级更高之外，与 `html` 选择器相同

Sass 的写法：

```scss
$font-size: 14px;

.container {
  font-size: $font-size;
}
```

## Sass 变量定义

定义规则：

- 变量一定要先定义，后使用，以美元符号`$`开头，后面跟变量名
- 变量名是**不以数字开头**的可包含字母、数字、下划线、横线（连接符）
- 写法同 css，即变量名和值之间用冒号`:`分隔

### 连接符与下划线

通过连接符与下划线 定义的同名变量为同一变量，建议使用连接符

```scss
$font-size: 14px;
$font_size: 16px;
.container {
  font-size: $font-size;
}
```

### 变量作用域

Sass 变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明

```scss
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

编译为：

```css
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```

> 在选择器外面的最前面定义的变量为全局变量

## 变量数据类型

SassScript 支持六种主要的数据类型：

- 数字：`1, 2, 13, 10px`
- 字符串：有引号字符串与无引号字符串，`"foo", 'bar', baz`
- 颜色：`blue, #04a3f9, rgba(255,0,0,0.5)`
- 布尔型：`true, false`
- 空值：`null`，值 null 是其类型的唯一值。它表示缺少值，通常由函数返回以指示缺少结果
- 数组 (list)：用空格或逗号作分隔符，`1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- maps：相当于 JavaScript 的 object，`(key1: value1, key2: value2)`

SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 `!important` 声明。然而 Sass 不会特殊对待这些属性值，一律视为无引号字符串

### 字符串

SassScript 支持 CSS 的两种字符串类型：

- 有引号字符串，如 `"Lucida Grande"`、`'http://sass-lang.com'`
- 与无引号字符串，如 `sans-serif`、`bold`

在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 `#{}` 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名：

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: 'Hi, Firefox users!';
  }
}
@include firefox-message('.header');
```

编译为

```css
body.firefox .header:before {
  content: 'Hi, Firefox users!';
}
```

# Sass 插值语句

通过 `#{}` 插值语句可以在选择器或属性名中使用变量

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

编译为：

```css
p.foo {
  border-color: blue;
}
```

`#{}` 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 `#{}` 可以避免 Sass 运行运算表达式，直接编译 CSS

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译为

```css
p {
  font: 12px/30px;
}
```

# Sass 运算

## 等号操作符

所有数据类型都支持等号运算符

| 符号 | 说明   |
| ---- | ------ |
| `==` | 等于   |
| `!=` | 不等于 |

数字比较：

```scss
$theme: 1;

.container {
  @if $theme == 1 {
    background-color: red;
  } @else {
    background-color: blue;
  }
}
```

字符串比较：

```scss
$theme: 'blue';

.container {
  @if $theme != 'blue' {
    background-color: red;
  } @else {
    background-color: blue;
  }
}
```

## 关系运行符

| 符号         | 说明     |
| ------------ | -------- |
| `<` （lt）   | 小于     |
| `>` （gt）   | 大于     |
| `<=` （lte） | 小于等于 |
| `>=` （gte） | 大于等于 |

例如：

```scss
$theme: 3;

.container {
  @if $theme >= 5 {
    background-color: red;
  } @else {
    background-color: blue;
  }
}
```

## 逻辑运行符

| 符号  | 说明   |
| ----- | ------ |
| `and` | 逻辑与 |
| `or`  | 逻辑或 |
| `not` | 逻辑非 |

例如：

```scss
$width: 100;
$height: 200;
$last: false;

div {
  @if $width > 50 and $height < 300 {
    font-size: 16px;
  } @else {
    font-size: 14px;
  }

  @if not $last {
    border-color: red;
  } @else {
    border-color: blue;
  }
}
```

## 数字操作符

| 符号 | 说明 |
| ---- | ---- |
| `+`  | 加   |
| `-`  | 减   |
| `*`  | 乘   |
| `/`  | 除   |
| `%`  | 取模 |

例如：

```scss
// 数字与百分号或单位运算时会自动转化成相应的百分比与单位值
.container {
  // + 运算
  width: 50 + 20%; // 70%
  width: 10pt + 20px; // 25pt
  width: 10pt + 20; // 30pt
  width: 10px + 10; // 20px

  // - 运算
  height: 10 - 30%; //invalid value
  height: 60% - 30%;
  height: 50px - 20px;
  height: 50pt - 20px;
  height: 50pt - 40;

  // * 运算
  height: 50 * 30;
  height: 10 * 30%;
  /* height: 60% * 30%; 报错,出现了两个百分号*/
  /* height: 50px * 20px; 报错,出现了两个单位*/
  height: 50 * 2px;
  height: 50pt * 4;

  // / 运算 (除完后最多只能保留一种单位)
  $width: 100px;
  width: 10/5; // 不进行运算, 未被括号包裹
  width: 10px/5px; // 不进行运算, 未被括号包裹
  width: 10px/10 * 2; // 2px
  width: 20px/2px * 5%; //50%
  width: ($width/2); // 使用变量与括号
  z-index: round(10) / 2; // 使用了函数
  height: (500px/2); // 使用了括号

  // % 运算
  width: 10 % 3; // 1
  width: 50 % 3px; // 2px
  width: 50px % 4px; // 2px
  width: 50px % 7; // 1px
  width: 50% % 7; // 1%
  width: 50% % 9%; // 5%
  width: 50px % 10pt; // 10px
  width: 50px % 13.33333px; // 10.00001px
  /* width: 50px % 5%; 报错，单位无法换算*/
}
```

`/`在 CSS 中通常起到分隔数字的用途，SassScript 作为 CSS 语言的拓展当然也支持这个功能，同时也赋予了`/`除法运算的功能。也就是说，如果`/`在 SassScript 中把两个数字分隔，编译后的 CSS 文件中也是同样的作用

**以下三种情况 / 将被视为除法运算符号：**

- 如果值或值的一部分，是变量或者函数的返回值
- 如果值**被圆括号包裹**
- 如果值是算数表达式的一部分

```scss
$width: 1000px;
div {
  font: 16px/30px Arial, Helvetica, sans-serif; // 不运算, 未被括号包裹
  width: ($width/2); // 使用变量与括号
  z-index: round(10) / 2; // 使用了函数
  height: (500px/2); // 使用了括号
  margin-left: 5px + 8px/2px; // 使用了+表达式
}
```

> 如果需要使用变量，同时又要确保`/`不做除法运算而是完整地编译到 CSS 文件中，只需要用`#{}`插值语句将变量包裹

## 字符串运算

`+` 可用于连接字符串

**注意**：

- 有引号字符串（位于 + 左侧）连接无引号字符串，运算结果是有引号的
- 无引号字符串（位于 + 左侧）连接有引号字符串，运算结果则没有引号

```scss
p:before {
  content: 'Foo ' + Bar;
  font-family: sans- + 'serif';
}
```

编译为

```css
p:before {
  content: 'Foo Bar';
  font-family: sans-serif;
}
```

在有引号的文本字符串中使用 `#{}` 插值语句可以添加动态的值：

```scss
p:before {
  content: 'I ate #{5 + 10} pies!';
}
```

编译为

```css
p:before {
  content: 'I ate 15 pies!';
}
```

# Sass 混入指令

`@mixin`指令允许我们定义一个可以在整个样式表中重复使用的样式

`@include`指令可以将混入（mixin）引入到文档中

## 定义与使用

```scss
@mixin mixin-name() {
  /* css 声明 */
}
```

### 标准形式

```scss
// 定义页面一个区块基本的样式
@mixin block {
  width: 96%;
  margin-left: 2%;
  border-radius: 8px;
  border: 1px #f6f6f6 solid;
}

// 使用混入
.container {
  .block {
    @include block;
  }
}
```

编译为：

```css
.container .block {
  width: 96%;
  margin-left: 2%;
  border-radius: 8px;
  border: 1px #f6f6f6 solid;
}
```

### 嵌入选择器

```scss
@mixin warning-text {
  .warn-text {
    font-size: 12px;
    color: rgb(255, 253, 123);
    line-height: 180%;
  }
}

// 使用混入
.container {
  @include warning-text;
}
```

编译为：

```css
.container .warn-text {
  font-size: 12px;
  color: rgb(255, 253, 123);
  line-height: 180%;
}
```

### 使用变量（单参数）

```scss
// 定义flex布局元素纵轴的排列方式
@mixin flex-align($aitem) {
  -webkit-box-align: $aitem;
  -webkit-align-items: $aitem;
  -ms-flex-align: $aitem;
  align-items: $aitem;
}
```

使用：

```scss
// 只有一个参数，直接传递参数
.container {
  @include flex-align(center);
}

// 给指定参数指定值
.footer {
  @include flex-align($aitem: center);
}
```

### 使用变量（多参数）

```scss
// 定义块元素内边距
@mixin block-padding($top, $right, $bottom, $left) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
```

使用：

```scss
// 按照参数顺序赋值
.container {
  @include block-padding(10px, 20px, 30px, 40px);
}

// 可指定参数赋值
.container {
  @include block-padding($left: 20px, $top: 10px, $bottom: 10px, $right: 30px);
}
```

> 使用时必须给每一个参数都赋值

### 指定默认值

```scss
// 定义块元素内边距，参数指定默认值
@mixin block-padding($top: 0, $right: 0, $bottom: 0, $left: 0) {
  padding-top: $top;
  padding-right: $right;
  padding-bottom: $bottom;
  padding-left: $left;
}
```

使用：

```scss
// 可指定参数赋值
.container {
  // 不带参数
  @include block-padding;
  // 按顺序指定参数值
  @include block-padding(10px, 20px);
  // 给指定参数指定值
  @include block-padding($left: 10px, $top: 20px);
}
```

### 可变参数

参数不固定的情况

```scss
/** 
   定义线性渐变
   @param $direction  方向
   @param $gradients  颜色过度的值列表
*/

@mixin linear-gradient($direction, $gradients...) {
  background-color: nth($gradients, 1);
  background-image: linear-gradient($direction, $gradients);
}
```

使用：

```scss
.table-data {
  @include linear-gradient(to right, #f00, orange, yellow);
}
```

## @mixin 混入总结

- `@mixin`是可以重复使用的一组 CSS 声明
- `@mixin`有助于减少重复代码，只需声明一次，就可在文件中引用
- 混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。
- 使用参数时建议加上默认值

# Sass 继承指令

`@extend`指令告诉 Sass 一个选择器的样式从另一选择器继承。如果一个样式与另外一个样式几乎相同，只有少量的区别，则使用 `@extend` 就显得很有用，`@extend` 很好的体现了代码的复用

## 基本使用

以下 Sass 实例中，我们创建了一个基本的按钮样式 `.button-basic`，接着我们定义了两个按钮样式 `.button-report`与 `.button-submit`，它们都继承了 `.button-basic`，它们主要区别在于背景颜色与字体颜色，其他的样式都是一样的

Sass 代码：

```scss
.button-basic {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report {
  @extend .button-basic;
  background-color: red;
}

.button-submit {
  @extend .button-basic;
  background-color: green;
  color: white;
}
```

将以上代码转换为 CSS 代码，如下所示：

```css
.button-basic,
.button-report,
.button-submit {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report {
  background-color: red;
}

.button-submit {
  background-color: green;
  color: white;
}
```

> 使用 `@extend` 后，我们在 HTML 按钮标签中就不需要指定多个类 class="button-basic button-report" ，只需要设置 class="button-report" 类即可
>
> 此外`@extend`还支持多个继承，即每个类内可以使用多个`@extend`

## 多层继承

例如定义两个类，`important`类继承`alert`类的样式

```scss
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 12px;
}

.important {
  @extend .alert;
  font-weight: bold;
  font-size: 14px;
}
```

`alert-danger`类继承`important`的样式

```scss
.alert-danger {
  @extend .important;
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
```

# Sass 流程控制指令

## @if

`@if()`函数允许您根据条件进行分支，并仅返回两种可能结果中的一种，同 JavaScript 中的条件分支语句

代码形式：

```scss
.container {
  // if
  @if (/* 条件 */) {
    // ...
  }

  // if、else
  @if (/* 条件 */) {
    // ...
  } @else {
    // ...
  }

  // if、else if、else
  @if (/* 条件 */) {
    // ...
  } @else if(/* 条件 */) {
    // ...
  } @else {
    // ...
  }
}
```

例如，定义一个 CSS 的三角形`@mixin`声明

```scss
@mixin triangle($direction: top, $size: 30px, $border-color: black) {
  width: 0px;
  height: 0px;
  display: inline-block;
  border-width: $size;
  border-#{$direction}-width: 0;
  @if ($direction==top) {
    border-color: transparent transparent $border-color transparent;
    border-style: dashed dashed solid dashed;
  } @else if($direction==right) {
    border-color: transparent transparent transparent $border-color;
    border-style: dashed dashed dashed solid;
  } @else if($direction==bottom) {
    border-color: $border-color transparent transparent transparent;
    border-style: solid dashed dashed dashed;
  } @else if($direction==left) {
    border-color: transparent $border-color transparent transparent;
    border-style: dashed solid dashed dashed;
  }
}
```

HTML 部分：

```html
<p class="p0"></p>
<p class="p1"></p>
<p class="p2"></p>
<p class="p3"></p>
```

使用：

```scss
.p0 {
  @include triangle();
}

.p1 {
  @include triangle(right, 50px, red);
}

.p2 {
  @include triangle(bottom, 50px, blue);
}

.p3 {
  @include triangle(left, 50px, green);
}
```

## @for

`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动

指令包含两种格式：

- `@for $var from <start> through <end>`
- `@for $var from <start> to <end>`

区别在于 `through` 与 `to` 的含义：

- 使用 `through` 时，条件范围包含 `<start>` 与 `<end>` 的值
- 使用 `to` 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值

`$var` 可以是任何变量，比如 `$i`；`<start>` 和 `<end>` 必须是整数值

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2em * $i;
  }
}
```

编译为：

```css
.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}
```

## @each

```
@each` 指令的格式是 `$var in <list>
```

- `$var` 可以是任何变量名，比如 `$length` 或者 `$name`
- `<list>` 是一连串的值，也就是值列表

`@each` 将变量 `$var` 作用于值列表中的每一个项目，然后输出结果，例如：

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

编译为：

```css
.puma-icon {
  background-image: url('/images/puma.png');
}

.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
}

.egret-icon {
  background-image: url('/images/egret.png');
}

.salamander-icon {
  background-image: url('/images/salamander.png');
}
```

## @while

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到。例如：

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 2em * $i;
  }
  $i: $i - 2;
}
```

编译为：

```scss
.item-6 {
  width: 12em;
}

.item-4 {
  width: 8em;
}

.item-2 {
  width: 4em;
}
```

# Sass 函数指令

Sass 支持自定义函数，并能在任何属性值或 SassScript 中使用，函数用于把一些比较复杂或经常用些的内容进行抽离（封装），以便重复使用

## 函数的定义与使用

### 函数的定义

```scss
@function function-name([$param1,$param2,...]){
    ...
    @return $value;
}
```

### @return

`@return`只允许在`@函数体`中使用，并且每个`@function`必须以`@return`结束。当遇到`@return`时，它会立即结束函数并返回其结果

### 函数的使用

例如：

```scss
@function row-cols-width($column) {
  @return percentage(1 / $column);
}

@for $i from 1 through 6 {
  .row-cols-#{$i} > * {
    width: row-cols-width($i);
  }
}
```

编译为：

```css
.row-cols-1 > * {
  width: 100%;
}

.row-cols-2 > * {
  width: 50%;
}

.row-cols-3 > * {
  width: 33.3333333333%;
}

.row-cols-4 > * {
  width: 25%;
}

.row-cols-5 > * {
  width: 20%;
}

.row-cols-6 > * {
  width: 16.6666666667%;
}
```

## 函数的参数与默认值

```scss
/** 
    *定义线性渐变
    *@param $direction  方向
    *@param $gradients  颜色过度的值列表
 */

@function background-linear-gradient(
  $direction,
  $start-color,
  $end-color: blue
) {
  @return linear-gradient($direction, $start-color, $end-color);
}
```

- 正常传参调用

```scss
.header {
  background-image: background-linear-gradient(to right, red, green);
}
```

- 省略默认值

```scss
.header {
  background-image: background-linear-gradient(to right, red);
}
```

- 按照参数名传参

```scss
.header {
  background-image: background-linear-gradient(
    $start-color: red,
    $direction: to bottom
  );
}
```

> 函数参数默认值可以是任意 SassScript 表达式，甚至可以引用前面的参数

## 任意参数

参数任意参数：

```scss
/** 
    *定义线性渐变
    *@param $direction  方向
    *@param $gradients  颜色过度的值列表
 */

@function background-linear-gradient($direction, $gradients...) {
  @return linear-gradient($direction, $gradients);
}

.header {
  background-image: background-linear-gradient(to bottom, red, green, blue);
}
```

调用任意参数：

```scss
$widths: 50px, 30px, 100px;

.logo {
  width: min($widths...);
}
```

## mixin 与 function 区别

- 混入 mixin 主要是通过传递参数的方式输出多样化的样式，为了可以现实**代码复用**
- 函数的功能主要是通过传递参数后，经过函数内部的计算，最后`@return`输出一个值

## 三元条件函数

定义：

```scss

if($condition, $if-true, $if-false);
```

> 判断`$condition`，如果条件成立，则返回`$if-true`的结果，如果条件不成立，则返回`$if-false`的结果

例如：if 的写法

```scss
$theme: 'light';

.container {
  @if $theme== 'light' {
    color: #000;
  } @else {
    color: #fff;
  }
}
```

三元条件函数 if 改进：

```scss
$theme: 'light';

.container {
  color: if($theme== 'light', #000, #fff);
}
```

# Sass 常用函数

> 更多函数请参考[菜鸟教程](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fsass%2Fsass-functions.html)

## Color(颜色函数)

sass 包含很多操作颜色的函数。例如：`lighten()`与`darken()`函数可用于调亮或调暗颜色，`opacify()`函数使颜色透明度减少，`transparent()`函数使颜色透明度增加，`mix()`函数可用来混合两种颜色

```scss
p {
  height: 30px;
}

.p0 {
  background-color: #5c7a29;
}

.p1 {
  /* 
        让颜色变亮
        lighten($color, $amount)
        $amount 的取值在0% - 100% 之间
     */
  background-color: lighten(#5c7a29, 30%);
}

.p2 {
  // 让颜色变暗  通常使用color.scale()代替该方案
  background-color: darken(#5c7a29, 15%);
}

.p3 {
  // 降低颜色透明度  通常使用color.scale()代替该方案
  // background-color: opacify(#5c7a29,0.5);
  background-color: opacify(rgba(#5c7a29, 0.1), 0.5);
}
```

使用

```html
<p></p>
<p class="p0"></p>
<p class="p1"></p>
<p class="p2"></p>
<p class="p3"></p>
```

## String(字符串函数)

Sass 有许多处理字符串的函数，比如向字符串添加引号的`quote()`、获取字符串长度的`str-length()`和将内容插入字符串给定位置的`str-insert()`。Sass 字符串的起始索引值从 1 开始，不是 0

| 函数                                    | 描述                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| quote(_string_)                         | 给字符串添加引号                                                                                       |
| str-index(_string_,_substring_)         | 返回 substring 子字符串第一次在 string 中出现的位置。如果没有匹配到子字符串，则返回 null               |
| str-insert(_string_, _insert_, _index_) | 在字符串 string 中 index 位置插入 insert                                                               |
| str-length(_string_)                    | 返回字符串的长度                                                                                       |
| str-slice(_string_, _start_, _end_)     | 从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾 |
| to-lower-case(_string_)                 | 将字符串转成小写                                                                                       |
| to-upper-case(_string_)                 | 将字符串转成大写                                                                                       |
| unique-id()                             | 返回一个无引号的随机字符串作为 id。只能保证单次的 Sass 编译中 id 的唯一性                              |
| unquote(_string_)                       | 移除字符串的引号                                                                                       |

例如：

```scss
p {
    &:after {
        content: quote(这是里面的内容);
    }
    background-color: unquote($string: "#F00");
    z-index:str-length("sass学习");
}

str-index(abcd, a)  => 1
str-index(abcd, ab) => 1
str-index(abcd, X)  => null
str-index(abcd, c)  => 3
to-lower-case("RUNOOB") //"runoob"
to-upper-case("runoob") //"RUNOOB"
unique-id() //uad053b1c
str-slice("abcd", 2, 3) //"bc"
str-slice("abcd", 2) //"bcd"
str-slice("abcd", -3, -2) //"bc"
str-slice("abcd", 2, -2) //"bc"
```

## Math(数值函数)

数值函数处理数值计算，例如：`percentage()`将无单元的数值转换为百分比，`round()`将数字四舍五入为最接近的整数，`min()`和`max()`获取几个数字中的最小值或最大值，`random()`返回一个随机数

| 函数                      | 描述                                                   |
| ------------------------- | ------------------------------------------------------ |
| abs(_number_)             | 返回一个数值的绝对值                                   |
| ceil(_number_)            | 向上取整                                               |
| comparable(_num1_,_num2_) | 返回一个布尔值，判断 _num1_ 与 _num2_ 是否可以进行比较 |
| floor(_number_)           | 向下取整                                               |
| max(_number..._)          | 返回最大值                                             |
| min(_number..._)          | 返回最小值                                             |
| percentage(_number_)      | 将数字转化为百分比的表达形式                           |
| random()                  | 返回 0-1 区间内的小数                                  |
| random(_number_)          | 返回 1 至 number 之间的整数，包括 1 和 limit           |
| round(_number_)           | 返回最接近该数的一个整数，四舍五入                     |

例如：

```scss
p {
  z-index: abs($number: -15); // 15
  z-index: ceil(5.8); //6
  z-index: max(5, 1, 6, 8, 3); //8
  opacity: random(); // 随机 0-1
}
```

## List 函数

List 函数操作 List，length()返回列表长度，nth()返回列表中的特定项，join()将两个列表连接在一起，append()在列表末尾添加一个值

| 函数                                             | 描述                                                                                                                                                                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| append(_list_, _value_, [*separator*])           | 将单个值 _value_ 添加到列表尾部。_separator_ 是分隔符，默认会自动侦测，或者指定为逗号或空格                                                                                         |
| index(_list_, _value_)                           | 返回元素 _value_ 在列表中的索引位置                                                                                                                                                 |
| is-bracketed(_list_)                             | 判断列表中是否有中括号                                                                                                                                                              |
| join(_list1_, _list2_, [*separator, bracketed*]) | 合并两列表，将列表 _list2_ 添加到列表 _list1_ 的末尾。_separator_ 是分隔符，默认会自动侦测，或者指定为逗号或空格。 _bracketed_ 默认会自动侦测是否有中括号，可以设置为 true 或 false |
| length(_list_)                                   | 返回列表的长度                                                                                                                                                                      |
| list-separator(_list_)                           | 返回一列表的分隔符类型。可以是空格或逗号                                                                                                                                            |
| nth(_list_, _n_)                                 | 获取第 _n_ 项的值                                                                                                                                                                   |
| set-nth(_list_, _n_, _value_)                    | 设置列表第 _n_ 项的值为 _value_                                                                                                                                                     |
| zip(_lists_)                                     | 将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表                                                                                                                        |

例如：

```scss
p {
    z-index: length(12px); //1
    z-index: length(12px 5px 8px); //3
    z-index: index(a b c d, c); //3
    padding: append(10px 20px, 30px); // 10px 20px 30px
    color: nth($list: red blue green, $n: 2); // blue
}

append((a b c), d) //a b c d
append((a b c), (d), comma) //a, b, c, d
zip(1px 2px 3px, solid dashed dotted, red green blue) //1px solid red, 2px dashed green, 3px dotted blue
set-nth(a b c, 2, x) //a x c
```

## Map 函数

Sass Map(映射)对象是以一对或多对的 key/value 来表示

Sass Map 是不可变的，因此在处理 Map 对象时，返回的是一个新的 Map 对象，而不是在原有的 Map 对象上进行修改

| 函数                         | 描述                                                                   |
| ---------------------------- | ---------------------------------------------------------------------- |
| map-get(_map_, _key_)        | 返回 Map 中 _key_ 所对应的 value(值)。如没有对应的 key，则返回 null 值 |
| map-has-key(_map_, _key_)    | 判断 _map_ 是否有对应的 _key_，存在返回 true，否则返回 false           |
| map-keys(_map_)              | 返回 _map_ 中所有的 key 组成的队列                                     |
| map-merge(_map1_, _map2_)    | 合并两个 map 形成一个新的 map 类型，即将 _map2_ 添加到 *map1*的尾部    |
| map-remove(_map_, _keys..._) | 移除 _map_ 中的 keys，多个 key 使用逗号隔开                            |
| map-values(_map_)            | 返回 _map_ 中所有的 value 并生成一个队列                               |

例如：

```scss
$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-get($font-sizes, "small") //12px

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-has-key($font-sizes, "big") //false

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-keys($font-sizes) //"small", "normal, "large"

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
$font-sizes2: ("x-large": 30px, "xx-large": 36px)
map-merge($font-sizes, $font-sizes2) //"small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-remove($font-sizes, "small") //("normal": 18px, "large": 24px)
map-remove($font-sizes, "small", "large") //("normal": 18px)

$font-sizes: ("small": 12px, "normal": 18px, "large": 24px)
map-values($font-sizes) //12px, 18px, 24px
```

## Selector 选择器函数

Sass 选择器函数用于查看与处理选择器。选择符相关函数可对 CSS 选择进行一些相应的操作，例如：`selector-append()`可以把一个选择符附加到另一个选择符，`selector-unify()`将两组选择器合成一个复合选择器

| 函数                                                    | 描述                                                                                                                |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| is-superselector(_super_, _sub_)                        | 比较两个选择器匹配的范围，即判断 _super_ 选择器是否包含了 _sub_ 选择器所匹配的范围，是的话返回 true，否则返回 false |
| selector-append(_selectors_)                            | 将第二个 (也可以有多个) 添加到第一个选择器的后面                                                                    |
| selector-nest(_selectors_)                              | 返回一个新的选择器，该选择器通过提供的列表选择器生成一个嵌套的列表                                                  |
| selector-parse(_selector_)                              | 将字符串的选择符 _selector_ 转换成选择器队列                                                                        |
| selector-replace(_selector_, _original_, _replacement_) | 给定一个选择器，用 replacement 替换 original 后返回一个新的选择器队列                                               |
| selector-unify(_selector1_, _selector2_)                | 将两组选择器合成一个复合选择器。如两个选择器无法合成，则返回 null 值                                                |
| simple-selectors(_selectors_)                           | 将合成选择器拆为单个选择器                                                                                          |

例如：

```scss
.header {
    background-color: #000;
    content: selector-append(".a", ".b", ".c") + '';
    content: selector-unify("a", ".disabled") + '';
}

is-superselector("div", "div.myInput") //true
is-superselector("div.myInput", "div") //false
is-superselector("div", "div") //true

selector-append("div", ".myInput") //div.myInput
selector-append(".warning", "__a") //.warning__a

selector-nest("ul", "li") //ul li
selector-nest(".warning", "alert", "div") //.warning div, alert div

selector-parse("h1 .myInput .warning") //('h1' '.myInput' '.warning')

selector-replace("p.warning", "p", "div") //div.warning

selector-unify("myInput", ".disabled") //myInput.disabled
selector-unify("p", "h1") //null

simple-selectors("div.myInput") //div, .myInput
simple-selectors("div.myInput:before") //div, .myInput, :before
```

## 调试函数

自检相关函数，例如：feature-exists()检查当前 Sass 版本是否存在某个特性，variable-exists()检查当前作用域中是否存在某个变量，mixin-exists()检查某个 mixin 是否存在

| 函数                                     | 描述                                                                                     |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| call(_function_, _arguments_...)         | 函数的动态调用，即调用函数 function 参数为 arguments，并返回结果                         |
| content-exists()                         | 查看当前的混入是否传递 @content 块                                                       |
| feature-exists(_feature_)                | 检查当前的 Sass 实现是否支持该特性                                                       |
| function-exists(_functionname_)          | 检测指定的函数是否存在                                                                   |
| get-function(_functionname_, css: false) | 返回指定函数。如果 css 为 true，则返回纯 CSS 函数。                                      |
| global-variable-exists(_variablename_)   | 检测某个全局变量是否定义                                                                 |
| inspect(_value_)                         | 返回一个字符串的表示形式，value 是一个 sass 表达式。                                     |
| mixin-exists(_mixinname_)                | 检测指定混入 (mixinname) 是否存在                                                        |
| type-of(_value_)                         | 返回值类型。返回值可以是 number, string, color, list, map, bool, null, function, arglist |
| unit(_number_)                           | 返回传入数字的单位（或复合单位）                                                         |
| unitless(_number_)                       | 返回一个布尔值，判断传入的数字是否带有单位                                               |
| variable-exists(_variablename_)          | 判断变量是否在当前的作用域下                                                             |

例如：

```scss
$color:#F00;
@mixin padding($left:0, $top:0, $right:0, $bottom:0) {
    padding: $top $right $bottom $left;
}


.container {
    @if variable-exists(color) {
        color: $color;
    }
    @else {
        content: "$color不存在";
    }
    @if mixin-exists(padding) {
        @include padding($left: 10px, $right: 10px);
    }
}

type-of(15px) //number
type-of(#ff0000) //color

unit(15px) //px

unitless(15px) //false
unitless(15) //true
```

> 自检函数通常用在代码的调试上

# Sass@import

## @import 导入

Sass 拓展了`@import`的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用，例如：

```
public.scss
$font-base-color:#333;
```

在`index.scss`里面使用

```scss
@import 'public';
$color: #666;

.container {
  border-color: $color;
  color: $font-base-color;
}
```

> - 普通的 CSS 中，`@import` 是用来导入一个外部 CSS 文件，它会下载并解析所导入的文件
> - Sass 中，`@import` 不仅可以导入外部的 CSS 文件，还可以导入其他 Sass 文件
>
> 其区别在于：Sass 的 `@import` 指令在处理时会将所导入的文件合并到当前文件中，并生成一份完整的 CSS 文件，因此需要注意多个 Sass 文件中可能存在命名冲突的情况。此外，Sass 中的 `@import` 指令支持路径变量、CSS 扩展名和通配符

如下几种方式，都将作为普通的 CSS 语句，不会导入任何 Sass 文件

- 文件拓展名是 `.css`
- 文件名以 `http:// `开头
- 文件名是 `url()`
- @import 包含 media queries

```css
@import 'public.css';
@import url(public);
@import 'http://xxx.com/xxx';
@import 'landscape' screen and (orientation: landscape);
```

## 局部文件

Sass 源文件中可以通过`@import`指令导入其他`Sass`源文件，被导入的文件就是局部文件，局部文件让 Sass 模块化编写更加容易

如果一个目录正在被 Sass 程序监测，目录下的所有 scss/sass 源文件都会被编译，但通常不希望局部文件被编译，因为局部文件是用来被导入到其他文件的。如果不想局部文件被编译，文件名可以以下划线 `(_)`开头

例如：`_theme.scss`

```scss
$border-color: #999;
$background-color: #f2f2f2;
```

使用

```scss
@import 'theme';

.container {
  border-color: $border-color;
  background-color: $background-color;
}
```

> 同一个目录下不能同时出现两个相关名的 sass 文件（一个不带下划线，一个带下划线），添加下划线的文件将会被忽略

## 嵌套 @import

大多数情况下，一般在文件的最外层（不在嵌套规则内）使用 @import，其实，也可以将 @import 嵌套进 CSS 样式或者 @media 中，与平时的用法效果相同，只是这样导入的样式只能出现在嵌套的层中

例如：`_base.scss`

```scss
.main-color {
  color: #f00;
}

// 嵌套使用
.container {
  @import 'base';
}
```

编译为：

```scss
.container .main-color {
  color: #f00;
}
```

> **注意：** `@import`不能嵌套使用在**控制指令**或**混入**中

# Sass@use

`@use`用于从其他 Sass 样式表加载 mixin，function 和变量，并将来自多个样式表的 CSS 组合在一起

- `@use`加载的样式表被称为`模块`，多次引入只包含一次
- `@use`也可以看作是对 `@import` 的增强

语法：

```scss
@use '<url>' [as alias|namespace];
```

## 加载普通 SCSS、CSS

```
use/_common.scss
$font-size:14px !default;

* {
  margin: 0;
  padding: 0;
  font-size: $font-size;
  color: #333;
}

@function column-width($col, $total) {
  @return percentage($col/$total);
}

@mixin bgColor($bg-color: #f2f2f2) {
  background-color: $bg-color;
}
use/about.css
h1 {
  font-size: 24px;
}
```

使用：

```scss
@use 'use/common';
@use 'use/about';
```

## 加载模块

新增`_global.scss`

```scss
$font-size: 28px;

@mixin base($color: #f00) {
  color: $color;
}

.gclass {
  background-color: #f00;
}
```

### @import 的方式

```scss
@import 'use/common';
@import 'use/global';
@import 'use/global';

body {
  font-size: $font-size;
  @include base('#FFF');
  @include base('#000');
  width: column-width(3, 12);
  @include bgColor('#F00');
}
```

> `@use`引入同一个文件多次，不会重复引入，而`@import`会重复引入

### @use 的方式

```scss
@use 'use/common';
@use 'use/global' as g1;
@use 'use/global' as g2;

body {
  font-size: common.$font-size;
  @include g1.base('#FFF');
  @include g2.base('#000');
  width: common.column-width(3, 12);
  @include common.bgColor('#F00');
}
```

> 通过`@use`引入的样式默认把文件名作为模块名使用，你可以通过`as`的形式重新取一个别名
>
> `@use`引入多个文件时，每个文件都是单独的模块，相同变量名不会覆盖，通过模块名访问，而`@import`变量会被覆盖

### @use 取消别名

可能`@use "" as * `来取消命名空间，这种方式加载的模块被提升为全局模块

```scss
@use 'use/common';
@use 'use/global' as *;
@use 'use/global' as g2;

body {
  font-size: $font-size;
  @include base('#FFF');
  @include g2.base('#000');
  width: common.column-width(3, 12);
  @include common.bgColor('#F00');
}
```

## 定义私有成员

如果加载的模块内部有变量只想在模块内使用，可使用`-`或`_`定义在变量头即可

例如：

```scss
$-font-size: 14px;

* {
  margin: 0;
  padding: 0;
  font-size: $-font-size;
  color: #333;
}

@use 'use/common';
@use 'use/global' as *;
@use 'use/global' as g2;

body {
  font-size: common.$-font-size;
  // 报错 Error: Private members can't be accessed from outside their modules.
  @include base('#FFF');
  @include g2.base('#000');
}
```

## 定义默认值

`!default`能为变量定义默认值

```scss
$font-size: 14px !default;

* {
  margin: 0;
  padding: 0;
  font-size: $font-size;
  color: #333;
}
```

`@use`引入时可通过`with(...)`修改默认值

```scss
@use 'use/common' with (
  $font-size: 16px
);
@use 'use/global' as *;
@use 'use/global' as g2;
common.$font-size: 28px; // 也可能通过这种方式覆盖

body {
  font-size: common.$font-size;
  @include base('#FFF');
  @include g2.base('#000');
}
```

## 默认加载 index.scss

创建`_index.scss`，见同级的`.scss`文件样式引入到`_index.scss`，后面只需要引入`_index.scss`即可

# Sass @forward

通过`@forward`加载一个模块的成员，并将这些成员当作自己的成员对外暴露出去，类似于 es6 的 export 通常用于跨多个文件组织 Sass 库

## 转发、合并 scss

### 转发

创建`_common.scss`

```scss
$font-size: 14px !default;

* {
  margin: 0;
  padding: 0;
  font-size: $font-size;
  color: #333;
}

@function column-width($col, $total) {
  @return percentage($col/$total);
}

@mixin bgColor($bg-color: #f2f2f2) {
  background-color: $bg-color;
}
```

创建`merge.scss`

```scss
@forward 'uses/common';
```

使用：

```scss
@use 'merge';

.body {
  font-size: merge.$font-size;
  width: merge.column-width(3, 12);
  @include merge.bgColor('#F00');
}
```

> 可以使用到`_common.scss`中的变量、函数以及样式，转发成功

### 合并

新增一个`_global.scss`

```scss
$font-size: 28px;

@mixin base($color: #f00) {
  color: $color;
}

.gclass {
  background-color: #f00;
}
```

统一转发`merge.scss`

```scss
@forward 'uses/common';
@forward 'uses/global';
```

使用：

```scss
@use 'merge';

.body {
  font-size: merge.$font-size;
  width: merge.column-width(3, 12);
  @include merge.bgColor('#F00');
  @include merge.base('#000');
}
```

## 添加前缀

语法：` @forward "<url>" as <prefix>-*`

将给定的前缀添加到模块转发的每个 mixin，函数和变量名称的开头。例如，如果模块定义了一个名为的成员`reset`并进行了转发`as list-*`，则下游样式表会将其称为 `list-reset`

实例

```scss
// src/_list.scss
@mixin reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
// bootstrap.scss
@forward 'src/list' as list-*;

// styles.scss
@use 'bootstrap';

li {
  @include bootstrap.list-reset;
}
```

编译为 CSS 结果：

```css
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

## 选择性转发

默认情况下，`@forward` 会将一个模块中所有成员都转发，如果只想转发某些成员，可使用：

- `@forward "module" hide $var, mixinName, fnName` 禁止转发某些成员
- `@forward "module" show $var, mixinName, fnName` 只转发某些成员

各个成员通过逗号 `,` 分隔开，如果成员是变量，不能省略 `$` 符号

```scss
@forward 'uses/common' as com-* hide com-bgColor, $com-font-size;
@forward 'uses/global' as glob-* show glob-base;
```

> 转发前加上前缀，用于避免相同变量造成的问题

使用：

```scss
@use 'merge';

.body {
  font-size: merge.$com-font-size; //报错，不能使用
  width: merge.com-column-width(3, 12); //报错，不能使用
  @include merge.com-bgColor('#000');
  @include merge.glob-base('#000');
}
```

## 配置模块

该`@forward`规则还可以使用 configuration 加载模块：

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

// _opinionated.scss
@forward 'library' with (
  $black: #222 !default,
  $border-radius: 0.1rem !default
);

// style.scss
@use 'opinionated' with (
  $black: #333
);
```

编译为 CSS 结果：

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(51, 51, 51, 0.15);
}
```

# Sass@at-root

`@at-root`可以使被嵌套的选择器或属性**跳出嵌套**

语法：

```scss
@at-root <selector > {
  // ...
}
```

## 普通嵌套

```scss
.parent {
  font-size: 12px;
  .child {
    font-size: 14px;
    .son {
      font-size: 16px;
    }
  }
}
```

- 作用某个选择器使其跳出嵌套

```scss
.parent {
  font-size: 12px;
  @at-root .child {
    font-size: 14px;
    @at-root .son {
      font-size: 16px;
    }
  }
}
```

编译为：

```css
.parent {
  font-size: 12px;
}

.child {
  font-size: 14px;
}

.son {
  font-size: 16px;
}
```

- 作用某些选择器使其跳出嵌套

```scss
.parent {
  font-size: 12px;
  @at-root {
    .child-1 {
      font-size: 14px;
    }
    .child-2 {
      font-size: 16px;
    }
  }
}
```

编译为：

```css
.parent {
  font-size: 12px;
}

.child-1 {
  font-size: 14px;
}

.child-2 {
  font-size: 16px;
}
```

## @at-root 与&的结合

`&`的使用：

```css
.foo {
  & .bar {
    color: gray;
  }
}

.foo {
  & {
    color: gray;
  }
}

.foo {
  .bar & {
    color: gray;
  }
}
```

> `&`与`@at-root`效果一样

## @at-root 结合#{&}实现 BEM 效果

理解 BEM：[zhuanlan.zhihu.com/p/122214519](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F122214519)

官网学习：[en.bem.info/methodology…](https://link.juejin.cn/?target=https%3A%2F%2Fen.bem.info%2Fmethodology%2Fquick-start%2F)

BEM 完整命名规则：block-name\_\_element-name--modifier-name (也可以换成驼峰式命名)

比较 BEM 的一则样式

```css
.block {
  width: 1000px;
}
.block__element {
  font-size: 12px;
}
.block--modifier {
  font-size: 14px;
}
.block__element--modifier {
  font-size: 16px;
}
```

`@at-root`结合`#{&}`实现：

```scss
.block {
  width: 1000px;
  @at-root #{&}__element {
    font-size: 12px;
    @at-root #{&}--modifier {
      font-size: 16px;
    }
  }
  @at-root #{&}--modifier {
    font-size: 14px;
  }
}

//或
.block {
  width: 1000px;
  @at-root {
    #{&}__element {
      font-size: 12px;
      @at-root #{&}--modifier {
        font-size: 16px;
      }
    }
    #{&}--modifier {
      font-size: 14px;
    }
  }
}
```

实现上也能直接用`&`实现：

```scss
.block {
  width: 1000px;
  &__element {
    font-size: 12px;
    &--modifier {
      font-size: 16px;
    }
  }
  &--modifier {
    font-size: 14px;
  }
}
```

## 超越样式规则

就其本身而言，`@at-root`不仅摆脱的样式规则。任何类似`@media`或的规则`@supports`都将保留

但如果这不是想要的，则可以使用诸如媒体查询功能：

- `@at-root (with: <rules...>) { ... }` ：查询将排除**除**列出的规则**以外的**所有规则
- `@at-root (without: <rules...>) { ... }`：查询告诉 Sass 应该排除哪些规则

除了规则名称外，还有两个可以在查询中使用的特殊值：

- `rule`指样式规则。例如，`@at-root (with: rule)` 排除所有规则，但保留样式规则
- `all`指所有规则*，*应排除样式规则

```scss
@media screen {
  .parent {
    font-size: 12px;
    @at-root (without: media) {
      .child {
        font-size: 14px;
        .son {
          font-size: 16px;
        }
      }
    }
  }
}

@supports (display: flex) {
  .parent {
    font-size: 12px;
    @at-root (with: supports) {
      .child {
        font-size: 14px;
        .son {
          font-size: 16px;
        }
      }
    }
  }
}
```

编译为：

```css
@media screen {
  .parent {
    font-size: 12px;
  }
}

.parent .child {
  font-size: 14px;
}

.parent .child .son {
  font-size: 16px;
}

@supports (display: flex) {
  .parent {
    font-size: 12px;
  }
  .child {
    font-size: 14px;
  }
  .child .son {
    font-size: 16px;
  }
}
```
