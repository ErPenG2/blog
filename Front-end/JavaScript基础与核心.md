# JavaScript 基础

## JavaScript 简介

JavaScript，就是我们通常所说的 JS。这是一种嵌入到 HTML 页面中的编程语言，由浏览器一边解释一边执行。JS 是一种运行在客户端（浏览器）的编程语言，实现人机交互效果

主要作用有：

1. 网页特效（监听用户的一些行为让网页作出对应的反馈）
2. 表单验证 (针对表单数据的合法性进行判断)
3. 数据交互 (获取后台的数据, 渲染到前端)
4. 服务端编程 (node.js)

![image-20230504222258848.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/f4e139f54c5c424fb992204995a4ee9atplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## JavaScript 组成

- ECMAScript
  - 规定了 JavaScript 基础语法核心知识，可以理解为官方标准版 JS 语法
- Web APIs
  - `DOM`操作文档，比如对页面元素进行移动、大小、添加删除等操作
  - `BOM`操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等

![image-20230504224021590.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/82041a630d5c4232b2f37c3795d2f09etplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## JavaScript 书写位置

### 外部 JavaScript

外部 JavaScript，指的是把 HTML 代码和 JavaScript 代码单独放在不同文件中，然后在 HTML 文档中使用“script 标签”来引入 JavaScript 代码

外部 JavaScript 是最理想的 JavaScript 引入方式。在实际开发中，为了提升网站的性能和可维护性，一般都是使用外部 JavaScript

- 语法：

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title></title>
      <!--1、在head中引入-->
      <script src="index.js"></script>
    </head>
    <body>
      <!--2、在body中引入-->
      <script src="index.js"></script>
    </body>
  </html>
  ```

### 内部 JavaScript

内部 JavaScript，指的是把 HTML 代码和 JavaScript 代码放在同一个文件中。其中 JavaScript 代码写在`<script></script>`标签对内

- 语法：

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title></title>
      <!--1、在head中引入-->
      <script>
        ……
      </script>
    </head>
    <body>
      <!--2、在body中引入-->
      <script>
        ……
      </script>
    </body>
  </html>
  ```

### 内联 JavaScript

内联 JavaScript，指的是 JS 代码写在标签内部，一般来说不常用，了解即可

- 语法：

  ```html
  <input type="button" value="按钮" onclick="alert('点我看看')" />
  ```

## JavaScript 语法基础

### JavaScript 注释

- 单行注释

  ```js
  //单行注释  快捷键 Ctrl + /
  ```

- 多行注释

  ```js
  /*
     多行注释  快捷键 shift + alt + a
  */
  ```

### JavaScript 结束符

- 使用英文分号`;`代表语句（语法结束）
- 实际开发中可写可不写，浏览器可以自动推断语句结束为止
- 开发中，一般为了保持代码风格统一，要么每句都写，要么每句都不写
- 回车会被解析为`;`

### 输入输出语法

输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程

- 输出：

  ```js
  document.write("要输出的内容");
  document.writeln("要输出的内容");
  //向body内输出内容 （HTML页面里面）
  //可以解析标签

  alert("要输出的内容"); //页面弹出警告对话框
  console.log("要输出的内容"); //控制台打印
  ```

- 输入：

  ```js
  prompt("输入内容");
  ```

  > `alert()` 和 `prompt()` 它们会跳过页面渲染先被执行

### 字面量

- 在计算机科学中，

  ```
  字面量（literal）
  ```

  是在计算机中描述事、物

  - `3000`：数字字面量
  - `'hello world'`：字符串字面量
  - `true`：布尔字面量
  - `{}`：对象字面量
  - `[]`：数组字面量

- 简单理解字面量指的是一个固定的数据（字面量是数据），**能够直接给 JS 识别的数据**

- 字面量永远不能出现在等号的左边，等号的左边只能是变量

### 变量

在 JavaScript 中，变量指的是一个可以改变的量。也就是说，变量的值在程序运行过程中是可以改变的。变量也是计算机中用来**存储数据**的**容器**，它可以让计算机变得有记忆

- 变量本质：程序在内存中申请的一块用来存放数据的小空间

![image-20240115195407655.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/b28a61a1d01f441e947bccf1b53a266ftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

- 声明变量：

  ```js
  let 变量名;
  //此处也可以使用var，但es6之后不推荐这么使用
  ```

- 变量赋值：

  ```js
  /*定义了一个变量后，你就能够初始化它（赋值）。在变量名之后跟上一个“=”，然后是数值*/
  let age;
  age = 18;
  ```

- 多变量声明：

  ```js
  //多个变量，中间逗号隔开
  let age = 18,
    uname = "moss";
  //一般来说，分开声明
  let age = 18;
  let uname = "moss";
  ```

变量命名规则与规范：

**规则**：

- 不能用关键字（如 let、var、if、for）
- **只能用字母、数字、下划线、$，且不能以数字开头**
- 严格区分大小写（age 与 Age 为两个不同变量）

**规范**：

- 变量要有意义
- 小驼峰命名（userName，第一个单词字母小写，第二个大写）

### 常量

使用`const`声明的变量称为**常量**，当某个变量永远**不会改变**的时候，就可以使用`const`来声明

- 常量无法修改，强制修改会报错
- 常量必须要初始化，定义的时候必须要进行赋值
- `const` 声明并不会真的保护数据不被改变。 为了确保数据不被改变，JavaScript 提供了一个函数 `Object.freeze`，任何更改对象的尝试都将被拒绝，如果脚本在严格模式下运行，将抛出错误

```javascript
const obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
//obj.review 和 obj.newProp 赋值将导致错误，因为我们的编辑器默认在严格模式下运行
//控制台将显示值 { name: "FreeCodeCamp", review: "Awesome" }
```

### 数据类型

JS 数据类型整体分为两大类：基本数据类型（简单数据类型）、引用数据类型（复杂数据类型）

- 基本数据类型：

  - number 数字型
  - string 字符串型
  - boolean 布尔型
  - symbol 标志型（不常用）
  - undefined 未定义型
  - null 空类型

- 引用数据类型：
  - Object
  - Function
  - Array

![image-20230531221423577.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/2cc29c3c2d0f490785c5a891f7e138d2tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

#### 模板字符串

- 用于拼接字符串和变量（ES6 新增）

- 语法：

  - `` (反引号)
  - 内容拼接变量时，用 `${}` 包住变量
  - 反引号中间的字符串可以换行（不管有多少，都视为一行）

- 示例：

  ```js
  document.write("大家好，我叫${name},今年${age}岁");
  ```

#### 数字型（number）

在 JavaScript 中，数字是最基本的数据类型。所谓的数字，就是我们数学上的数字，如 10、-10、3.14 等。JavaScript 中的数字是 不区分“整型（int）”和“浮点型（float）” 的。**JavaScript 是弱数据类型，变量到底属于那种类型，只有赋值之后，我们才能确认**

- 数字可以有很多操作，如乘法 \* 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起
- 数学运算符也叫**算术运算符**，主要包括加、减、乘、除、取余（求模）
- `+`：求和、 `-`：求差、`*`：求积、`/`：求商、 `%`：取模（取余数）

> Tips : `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，`NaN` 是粘性的，任何对 `NaN` 的操作都会返回 `NaN`

#### 字符串型（string）

通过单引号（' '） 、双引号（" "）或反引号( ` ) 包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号

- 单引号/双引号可以互相嵌套，但是不能自已嵌套自已（外双内单，或者外单内双）
- 必要时可以使用转义符 `\`来输出单引号或双引号
- 通过 `+` 运算符 可以实现字符串的拼接
- **在 JavaScript 中，字符串（`String`）的值是不可变的（immutable），这意味着一旦字符串被创建就不能被改变，不过字符串是可以整体赋新值**

#### 布尔类型（boolean）

表示肯定或否定时在计算机中对应的是布尔类型数据。它有两个固定的值 `true` 和 `false`，表示肯定的数据用 true（真），表示否定的数据用 false（假）

#### 未定义类型（undefined）

未定义是比较特殊的类型，只有一个值 `undefined`

- **什么情况出现未定义类型？**
  - **只声明变量，不赋值的情况下**，变量的默认值为 `undefined`，一般很少**直接**为某个变量赋值为 `undefined`
- 使用场景：
  - 我们开发中经常声明一个变量，等待传送过来的数据。如果我们不知道这个数据是否传递过来，可以通过检测这个变量是不是`undefined`，就判断用户是否有数据传递过来

```
typeof`检测`undefined`显示为`undefined
```

#### 空类型（null）

JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值

- null 和 undefined 区别：
  - `undefined` 表示没有赋值
  - `null` 表示赋值了，但内容为空
- 使用场景：
  - 把 `null` 作为尚未创建的对象。或则说，将来有个变量里面存放的是一个对象，但是对象还没创建好，可以先给个`null`

#### 数据类型检测

- 通过`typeof`关键字检测数据类型，返回表示数据类型的字符串

- 书写形式：

  ```js
  typeof x;
  typeof x;
  ```

- 返回值：

  - `undefined`：该值未定义
  - `boolean`：该值为布尔值
  - `string`：该值为字符串
  - `number`：该值为数值
  - `object`：该值为对象（引用数据类型）或者**null**
  - `function`：该值为函数

### 运算符与表达式

#### 表达式

- 由运算符组成的式子，一定会有运算结果
- 表达式是可以被求值的代码，JavaScript 引擎会将其计算出一个结果

```js
//表达式一定会有运算结果
console.log(1 + 2);
let num = 1 + 2;
```

#### 运算符

##### 算数运算符

- 数学运算符也叫

  算术运算符

  ，主要包括加、减、乘、除、取余（求模）

  - `+`：求和
  - `-`：求差
  - `*`：求积
  - `/`：求商
  - `%`：取模（取余数）

- 计算失败时，显示结果为`NaN`（not a number）

##### 连接符（+）

- 用于字符串的拼接
- `+`号只要遇到字符串，就是连接符（数字相加，字符相连）

```js
document.write("Hello" + "World"); //HelloWorld
let first = "Hello";
let second = "World";
document.write(first + second); //HelloWorld
```

##### 赋值运算符

- 对变量进行赋值的运算符
  - `=`：直接赋值
  - `+=`：a = a + b
  - `*=`：a = a \* b
  - `/=`：a = a / b
  - `%=`：a = a % b

##### 一元运算符

- 自增：`++`，自减：`--`

一元运算符前置与后置问题：

- 前置

  ```js
  let num = 1;
  console.log(++num + 1 + ++num); //6
  console.log(num); //3
  ```

- 后置

  ```js
  let num = 1;
  console.log(num++ + 1 + num++); //4
  console.log(num); //3
  ```

##### 比较（关系）运算符

- 比较运算符
  - `>` ： 左边是否大于右边
  - `<`： 左边是否小于右边
  - `=`： 左边是否大于或等于右边
  - `<=`： 左边是否小于或等于右边
  - `==`： 左右两边值是否相等
  - `===`： 左右两边是否类型和值都相等
  - `!==`： 左右两边是否不全等
  - 比较结果为`boolean`类型，即只会得到`true`或`false`
- 对比：
  - `=` ：单等是赋值
  - `==` ：判断值相等，有强转
  - `===` ：判定值和类型相等，无强转（判断相等，推荐使用）

##### 逻辑运算符

| 符号 | 名称   | 日常读法 | 特点                            | 口诀           |
| ---- | ------ | -------- | ------------------------------- | -------------- |
| &&   | 逻辑与 | 并且     | 符号两边都为 true 结果才为 true | 一假则假       |
| \|\| | 逻辑或 | 或者     | 符号两边有一个 true 就为 true   | 一真则真       |
| !    | 逻辑非 | 取反     | true 变 false，false 变 true    | 真变假，假变真 |

##### 运算符优先级

![image-20230509071107684.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/4a22baaad9e047d59e5505b1415fd0a2tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> JavaScript 运算符优先级详情见：[JavaScript 运算符优先级](https://juejin.cn/post/7233605431494754365)

### 类型转换

- JavaScript 是弱数据类型： JavaScript 也不知道变量到底属于那种数据类型，只有赋值了才确定
- 使用表单、prompt 获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算

#### 显示转换

##### 转换为数字型

- Number(数据)

  - 转换成功返回一个数字类型
  - 字符串内容里有非数字，转换失败时结果为`NaN`(number 类型，表示非数字)

- parseInt(数据)

  - 只保留整数
  - 如果数字开头的字符串，只保留整数数字
  - 如果字符串中的第一个字符不能转换为数字，则返回 `NaN`

  > `parseInt(string, radix)` 函数解析一个字符串并返回一个整数。 它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36 之间的整数

- parseFloat(数据)

  - 可以保留小数
  - 如果数字开头的字符串，可以保留小数

> 布尔型转换为数字： `true`为`1` ， `false`为`0`
>
> ```
> null`转换为数字为`0`， `undefined`为`NaN
> ```

##### 转换为字符型

- String(数据)：返回字符串类型
- 变量.toString(进制数)：可以有进制转换

##### 转换为布尔型

- Boolean（数据）：返回`true`或者`false`
- `空字符、0、-0、undefined、null、false、NaN`转换为布尔值后为 false，其余为 true

#### 隐式转换

- 某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换
- 规则
  - `+` 号两边只要有一个是字符串，都会把另外一个转成字符串
  - 除了`+`以外的算术运算符 比如 `- * /` 等都会把数据转成数字类型
  - 逻辑非 `!` 转换为布尔类型
- 技巧
  - `+`号作为正号解析可以转换成数字型
  - 任何数据和字符串相加结果都是字符串

> JS 隐式转换详情见：[JavaScript 中的隐式转换](https://juejin.cn/post/7232872175647817786)

## JavaScript 流程控制

- 在 JavaScript 中，共有 3 种流程控制方式：顺序结构、选择结构、循环结构
- 顺序结构
  - 在 JavaScript 中，顺序结构是最基本的结构。所谓的顺序结构，就是代码按照从上到下、从左到右的“顺序”执行

![image-20230510070920011.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/b605175b3be9449094099ae05a8e0572tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

- 选择结构
  - 在 JavaScript 中，选择结构指的是根据“条件判断”来决定使用哪一段代码。选择结构有 3 种：单向选择、双向选择以及多向选择，但是无论是哪一种，JavaScript 都只会执行其中的一个分支

![image-20230510071223590.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/c8481f3d9043465590ba9efd7ea02915tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

- 循环结构
  - 循环结构，指的是根据条件来判断是否重复执行某一段程序。若条件为 true，则继续循环；若条件为 false，则退出循环

![image-20230510071314677.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/baad01f4aae84ff697e9d496cb088b1ftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 分支语句

`if`分支语句

- `if`语句有三种使用：单分支、双分支、多分支

- 小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码；为 false，则不执行大括号里面代码

- 小括号内的结果若不是布尔类型时，会发生类型转换为布尔值

- 如果大括号只有一个语句，大括号可以省略，但不提倡

- 语法：

  ```js
  //单分支
  if (条件) {
    //满足条件要执行的代码
  }
  ```

  ```js
  //双分支
  if (条件) {
    //满足条件要执行的代码
  } else {
    //不满足条件要执行的代码
  }
  ```

  ```js
  //多分支
  if (条件1) {
    //代码1
  } else if (条件2) {
    //代码2
  } else if (条件3) {
    //代码3
  } else {
    //代码n
  }
  //先判断条件1，若满足条件1就执行代码1，其他不执行
  //若不满足则向下判断条件2，满足条件2执行代码2，其他不执行
  //若依然不满足继续往下判断，依次类推
  //若以上条件都不满足，执行else里的代码n
  ```

`三元(目)`运算符

- if 双分支更简单的写法，可以使用三元表达式

- 语法：

  ```js
  js;
  复制代码条件 ? 满足条件执行的代码 : 不满足条件执行的代码;
  ```

- 数字补零案例

  ```js
  js;
  复制代码num = num < 10 ? "0" + num : num;
  ```

`Switch`语句

- 找到跟小括号里数据**全等**的 case 值，并执行里面对应的代码，若没有全等 `===` 的则执行 default 里的代码

- switch case 语句一般用于等值判断,不适合于区间判断

- switch case 一般需要配合`break`关键字使用 没有`break`会造成`case`穿透

- 语法：

  ```js
  switch (数据) {
    case 值1:
      代码1;
      break;
    case 值2:
      代码2;
      break;
    default:
      代码n;
      break;
  }
  ```

### 循环语句

`while`循环

- 跟`if`语句很像，都要满足小括号里的条件为`true`才会进入循环体执行代码

- while 大括号里代码执行完毕后不会跳出，而是继续回到小括号里判断条件是否满足，若满足又执行大括号里的代码，然后再回到小括号判断条件，直到括号内条件不满足，即跳出

- 语法：

  ```js
  while (循环条件) {
    要重复执行的代码(循环体);
  }
  ```

- **while 循环三要素：**

  - 循环变量初始化
  - 循环条件（判断条件是否成立，成立执行循环体代码，不成立，循环结束）
  - 变量更新（用自增或者自减）

  ```js
  //变量初始化
  let i = 1;
  //循环条件
  while (i <= 3) {
    document.write(`我会循环三次<br>`);
    //变量更新
    i++;
  }
  ```

> 拓展： `do...while` 循环，它被称为 `do...while` 循环，是因为不论什么情况，它都会首先 `do`循环里的第一部分代码，然后 `while`规定的条件被评估为 `true`的时候，它会继续运行循环

`for`循环

- 重复执行指定的一段代码

- **初始化语句**只会在执行循环开始之前执行一次。 它通常用于定义和设置你的循环变量

- 循环条件语句会在每一轮循环的开始前执行，只要条件判断为 `true` 就会继续执行循环。 当条件为 `false` 的时候，循环将停止执行。 这意味着，如果条件在一开始就为 `false`，这个循环将不会执行

- **终止循环表达式**在每次循环迭代结束， 在下一个条件检查之前时执行，通常用来递增或递减循环计数

- 语法：

  ```js
  for (初始化语句; 循环条件语句; 终止循环表达式) {
    //循环体
  }
  ```

`for`循环嵌套

- 一个循环里再套一个循环，一般用在 for 循环里

- 语法：

  ```js
  for (外部循环变量; 循环条件; 变化值) {
    for (内部循环变量; 循环条件; 变化值) {
      //循环体
    }
  }
  ```

**循环退出**

- `continue`：中止本次循环，一般用于排除或者跳过某一个选项的时候
- `break`：中止整个循环，一般用于结果已经得到，后续的循环不需要的时候可以使用

无限循环

- `while(true)` 来构造“无限”循环，需要使用`break`退出循环
- `for(;;)` 也可以来构造“无限”循环，同样需要使用`break`退出循环

## 数组

### 定义

- 数组：(Array)是一种可以按顺序保存数据的**数据类型**(**复杂数据类型**)

- 数组作用 : 存储多个数据（可以是任意类型的数据）

- 声明语法：

  ```js
  //计算机中的编号从0开始。在数组中，数据的编号也叫索引或下标
  let arr = [数据1, 数据2, ..., 数据n];
  let arr = new Array (数据1, 数据2, ..., 数据n);
  let arr = new Array (n);

  //也可以在其他数组中嵌套数组
  const teams = [["Bulls", 23], ["White Sox", 45]];//多维数组（multi-dimensional array）
  ```

- 取值语法：

  ```js
  数组名[下标];
  //多维数组取值
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const subarray = arr[3]; //[[10, 11, 12], 13, 14]
  const nestedSubarray = arr[3][0]; //[10, 11, 12]
  const element = arr[3][0][1]; //11
  ```

- 遍历数组：

  ```js
  for (let i = 0; i < arr.length; i++) {
    arr[i];
  }
  ```

### 数组操作

- 数组本质是数据的集合，操作数据无非是增、删、改、查语法

#### 数组操作-新增

```
push()
```

- 将一个或多个元素添加到数组的**末尾**，并返回该数组的新长度

- 语法：

  ```js
  arr.push(元素1, ..., 元素n);
  ```

```
unshift()
```

- 方法将一个或多个元素添加到数组的**开头**，并返回该数组的新长度

- 语法：

  ```js
  arr.unshift(元素1, ..., 元素n);
  ```

#### 数组操作-删除

```
pop()
```

- 从数组中删除**最后一个**元素，**并返回该元素的值**

- 语法：

  ```js
  js;
  复制代码arr.pop();
  ```

```
shift()
```

- 从数组中删除**第一个**元素，**并返回该元素的值**

- 语法：

  ```js
  js;
  复制代码arr.shift();
  ```

```
splice()
```

- **删除指定元素**也可以**添加指定元素**（主要处理数组中间数据）

- 说明：可以从指定位置删除或者增加数组元素，它修改原数组

- 新增时：返回值是一个空数组

- 删除时：返回的是删除的元素

- 语法：

  ```js
  arr.splice(start, deleteCount);
  arr.splice(起始位置, 删除几个元素);
  //start：指定修改的开始位置
  //deleteCount：指定修改的个数。可选，如果省略则默认从指定的起始位置删除到最后

  arr.splice(start, Count, item1, item2);
  arr.splice(起始位置, 新增几个元素, 新增的元素);
  //start 新增的位置
  //count 新增的个数（替换操作），大于1则是替换
  //item1、item2新增的元素

  arr.splice(1, 0, item1, item2);
  //start值，为0则为头，为数组长度值则为尾
  //第二个变量值为0的意思是不替换原数据
  //后面的item解析时默认为一个参数
  ```

#### 数组操作-截取

```
slice()
```

- 截取数组元素

- `slice(start,end)`，这里的选取访问为`[start,end)`，半开半闭

- 语法：

  ```js
  var a = [1, 2, 3, 4, 5];
  var b = a.slice(2, 5); //[3,4,5]
  //截取第三个元素到第六个元素 前 的元素

  //若为负数
  var b = a.slice(-4, -2); //[2,3]
  //截取倒数第四个元素到倒数第二个元素 前 的元素
  ```

#### 数组操作-合并

```
concat()
```

- 通过合并（连接）现有数组来创建一个新数组

- **不会改变现有数组，总是返回一个新数组**，可以使用任意数量的数组参数

- 语法：

  ```js
  var num1 = ["1", "2"];
  var num2 = ["3", "4"];
  var num = num1.concat(num2);
  //连接num1和num2，返回值为新数组['1', '2', '3', '4']
  ```

#### 数组操作-排序

```
sort()
```

- `数组. sort()`方法可以排序

- 语法：

  ```js
  // 数组排序  数组.sort()  修改原数组
  let arr = [88, 78, 100, 34, 99];
  //不写参数，此时sort会把数组元素当做字符串来排
  arr.sort();
  console.log(arr); // [100, 34, 78, 88, 99]

  // 1. 升序排序
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr); // [34, 78, 88, 99, 100]

  // 2. 降序排序
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr); //  [100, 99, 88, 78, 34]

  // 3. 获取数组最大值和最小值
  document.write(`数组的最大值：${arr[0]}`);
  document.write(`数组的最小值：${arr[arr.length - 1]}`);

  // 4.扩展sort排序可以对字符串进行使用,默认按ASCII码进行排序
  let Arr = ["b", "w", "c", "a"];
  Arr.sort(); //默认升序
  console.log(Arr);
  ```

## 函数

### 定义

- `function`，是被设计为执行特定任务的代码块（简单理解函数就是一个可以重复使用的代码块）

- 函数可以把具有相同或相似逻辑的代码“包裹”（封装）起来，通过函数调用执行这些被“包裹”的代码逻辑，这么做的优势是**有利于精简代码方便复用**

- 函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做头等*first class*函数。 **在 JavaScript 中，所有函数都是头等函数**

- 将函数作为参数或将函数作为返回值返回的函数叫作高阶函数

- 声明语法：

  ```js
  function 函数名() {
    //函数体
  }
  ```

- 函数命名规范：
  - 和变量命名基本一致
  - 尽量使用`小驼峰`命名法
  - 函数名应该为动词

### 函数使用

- 函数调用语法：

  ```js
  函数名();
  //声明（定义）的函数必须调用才能真正被执行，使用()调用函数
  ```

- 函数体

  - 函数体是函数的构成部分，它复杂将相同或相似的代码包裹起来，直到函数调用时函数体内的代码才会被执行。函数的功能代码都要写到函数体中

  ```js
  function sayHi() {
    console.log("hi~");
  }
  sayHi();
  ```

### 函数传参

- 参数的作用是为了提高函数的灵活性

- 声明语法：

  ```js
  function 函数名(参数列表) {
    函数体;
  }
  //传入数据列表
  //声明这个函数需要传入几个数据
  //多个数据用逗号隔开
  ```

- 示例：

  ```js
  function getSum(num1, num2) {
    document.write(num1 + num2);
  }
  getSum(10, 20);
  ```

  > 形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）
  >
  > 实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）

- 参数默认值

  - 形参可以看做变量，但是如果一个变量不赋值，默认为`undefined`

  - 不输入实参，会出现`undefined + undefined = NaN`

  - 可以在参数声明时通过赋值符号`=`，给参数设置默认值（es6 新增）

    ```js
    //es6
    function sum(x = 0, y = 0) {
      return x + y;
    }
    //es5
    function sum(x, y) {
      x = x || 0;
      y = y || 0;
      return x + y;
    }
    ```

- 逻辑中断

  - **逻辑中断**： 存在于逻辑运算符 && 和 || 中，左边如果满足一定条件会中断代码执行，也称为逻辑短路
  - 当逻辑表达式不是布尔值的结果时，会进行隐式转换为布尔值，但是最后运算结果，**返回的不是布尔值，而是进行隐式转换之前的原结果**

  > `false && anything`：逻辑与左边 false 则中断，如果左边为 true，则返回右边代码的值
  >
  > `true || anything`：逻辑或左边 true 则中断，如果左边为 false，则返回右边代码的值
  >
  > 短路运算`&&`可以代替`if(flag){}`代码块

```js
console.log(1 || 2); //1，或运算，左边为true，逻辑中断，不用计算右边，直接输出或运算符左边的原结果，即1
console.log(1 || 0); //1，或运算，左边为true，逻辑中断，不用计算右边，直接输出或运算符左边的原结果，即1
console.log(0 || 1); //1，或运算，左边为false，右边计算为true，输出或运算符右边的原结果，即1
console.log(0 || 0); //0，或运算，左边为false，右边计算为false，输出或运算符右边的原结果，即0
console.log(1 && 2); //2，与运算，左边为true，右边计算为true，输出与运算符右边的原结果，即2
console.log(1 && 0); //0，与运算，左边为true，右边计算为false，输出与运算符右边的原结果，即0
console.log(0 && 1); //0，与运算，左边为false，逻辑中断，不用计算右边，直接输出与运算符左边的原结果，即0

//实际例子举例
let age = 10;
console.log(true && age++); //10，++在右边，不参与运算
console.log(true && ++age); //12，++在左边，参与运算
console.log(age); //12
```

### 函数返回值

- 函数是被设计为执行特定任务的代码块

- 有返回值函数的概念：

  - 当调用某个函数，这个函数会返回一个结果出来，这就是有**返回值**的函数
  - 函数本身不处理结果，而是交给调用者处理
  - 函数内部不需要输出结果，而是返回结果

- 当函数需要返回数据出去时，使用`return`关键字

- 语法：

  ```js
  //return 数据;
  function getSum(x, y) {
    return x + y;
  }
  let num = getSum(10, 30);
  document.write(num);
  ```

  > 在函数体中使用`return`关键字能将内部的执行结果交给函数外部使用
  >
  > `return`后面代码不会再被执行，会立即结束当前函数，所以`return`后面的数据不要换行写
  >
  > `return`函数可以没有`return`，这种情况函数默认返回值为`undefined`

### 作用域

- 在 JavaScript 中，作用域可以分为：全局作用域、函数作用域（局部作用域）、块级作用域、模块作用域
- 根据作用域的不同，变量可以分为：全局变量和局部变量（函数作用域和块级作用域中的变量）

> 如果函数内部，变量没有声明，直接赋值，则为全局变量

- 变量访问原则：**在能够访问到的情况下先局部， 局部没有再找全局（就近原则）**

示例：

- 局部作用域内有该变量

```js
function f1() {
  let num = 123;
  function f2() {
    let num = 0;
    console.log(num);
  }
  f2();
}
let num = 456;
f1(); //0
```

- 局部作用域内没有该变量，但上层局部作用域内有该变量

```js
function f1() {
  let num = 123;
  function f2() {
    console.log(num);
  }
  f2();
}
let num = 456;
f1(); //123
```

- 更复杂的作用域嵌套

```js
let a = 1;
function fn1() {
  let a = 2;
  let b = "22";
  fn2();
  function fn2() {
    let a = 3;
    fn3();
    function fn3() {
      let a = 4;
      console.log(a); //4
      console.log(b); //'22'
    }
  }
}
fn1();
```

- 函数内部，变量没有声明，直接赋值，则为全局变量

```js
let num = 1;
console.log(num); //1
function fn(a) {
  console.log(num); //3
  num = 2; //给全局变量num赋值为2
  console.log(num); //2
}
num = 3;
console.log(num); //3
fn(num);
console.log(num); //2
```

### 匿名函数

- 没有具体名字的函数

- 匿名函数必须先定义再使用，防止代码报错

  ```js
  function () {}
  ```

- 使用方式

  - 函数表达式
  - 立即执行函数

- 函数表达式

  - 使用变量来调用函数的一种方式

  ```js
  let fn = function () {
    函数体;
  };
  fn(); //调用
  ```

- 立即执行函数（立即执行函数表达式）

  - 避免全局变量之间的污染
  - 通过定义一个匿名函数，**创建了一个新的函数作用域**，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间

- 无需调用，立即执行（本质上已经调用了）

  ```js
  (function () {
    console.log(11);
  })(); //形式一
  (function () {
    console.log(11);
  })(); //形式二
  //多个立即执行函数要用`;`隔开，不然会报错
  let fn = (function () {
    console.log(11);
  })(); //立即执行函数也可以作为函数表达式
  ```

## 对象

### 对象定义

- JavaScript 里的一种复杂数据类型
- 对象可以用来描述具体的某个事物
- 对象（object）本质上是键值对（key-value pair）的集合。 或者说，一系列被映射到唯一标识符的数据就是对象；习惯上，唯一标识符叫做属性（property）或者键（key）；数据叫做值（value）

```js
//传统写法
let obj = {
  uname: "张三",
  age: 18,
  gender: "男",
  sayHi: function () {
    console.log("hi~");
  },
};
//es6简写
const uname = "andy";
const age = 18;
const gender = "女";
let obj = {
  uname, //此处的uname等同于uname:uname
  age,
  gender,
  sayHi() {
    console.log("hi~");
  },
};
```

### 对象使用

- 对象声明

  ```js
  let 对象名 = {}; //{}是对象字面量
  let 对象名 = new Object();
  ```

- 对象组成

  - 属性：信息或特征（名词）
  - 方法：功能或行为（动词）

  ```js
  let 对象名 = {
    属性: 属性值,
    方法名: 函数,
  };
  ```

> 如果你的对象有非字符串属性的话，JavaScript 会自动将它们转为字符串

#### 属性-查

- 声明对象，并添加了若干属性后，可以使用 `.` 获得对象中属性对应的值，称之为属性访问

##### `.`访问语法

- 语法：`对象名.属性`

- 简单理解就是获得对象里面的属性值

- 示例：

  ```js
  let person = {
    unname: "张三",
    age: 18,
    gender: "男",
  };
  console.log(person.uname);
  console.log(person.age);
  console.log(person.gender);
  ```

##### `[]`访问语法

- 语法：`对象['属性']`
- 对于**多词属性**，比如：中横线分割的属性，或者需要解析变量的时候使用`[]`语法
- **对对象上使用方括号表示法，还可以访问对象上作为变量值存储的属性。 当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用**

> 与`.`语法的区别：
>
> - `.`方法后面跟的必须是一个指定的属性名称，`[]`里面可以是变量
> - 中括号方法里面的属性名可以是数字，而点方法后面的属性名不可以是数字
> - 动态为对象添加属性时，必须使用`[]`，不可用点方法

示例：

```js
let person = {
  "un-name": "张三",
  age: 18,
  gender: "男",
};
console.log(person["un-name"]); //必须要添加引号，否则会被当成变量解析
```

#### 属性-改

- 语法：`对象名.属性 = 新值`

- 示例：

  ```js
  let person = {
    unname: "张三",
    age: 18,
    gender: "男",
  };
  person.gender = "女";
  console.log(person.gender);
  console.log(person);
  ```

#### 属性-增

- 语法：

  - `对象名.新属性 = 新值`
  - `对象名[字符串] = 新值`

- 示例：

  ```js
  let person = {
    unname: "张三",
    age: 18,
    gender: "男",
  };
  person.address = "燕山大雁塔";
  console.log(person);
  ```

#### 属性-删

- 语法：`delete 对象名.属性`

- 示例：

  ```js
  let person = {
    unname: "张三",
    age: 18,
    gender: "男",
  };
  delete person.gender;
  console.log(person);
  ```

#### 对象中的方法

- 数据行为性的信息称为方法，一般是动词性的，其本质是函数

  ```js
  let person = {
    name: "andy",
    sayHi: function () {
      document.write("hi~");
    },
    //此处的sayHi可以写为(es6)sayHi(){}
  };
  ```

- 声明对象，并添加了若干方法后，可以使用`.`调用对象中函数，称为方法调用，并且可以添加形参和实参

#### 检查对象是否具有某个属性

JavaScript 为我们提供了两种不同的方式来实现这个功能：

- 通过 `hasOwnProperty()` 方法

```js
js;
复制代码users.hasOwnProperty("Alan"); //true
```

- 使用 `in` 关键字

```js
"Alan" in users; //true
```

### 遍历对象

- 注意点

  - 对象没有像数组一样的`length`属性，无法确定长度
  - 对象里面是无序的键值对，没有规律，没有下标

- for-in 遍历

  - `for in`语法中的 k 是一个变量，在循环的过程中依次代表对象的属性名
  - 由于 k 是变量，所以必须使用 `[]` 语法解析
  - **k** 是获得对象的**属性名**， **对象名[k]** 是获得 **属性值**

- 示例：

  ```js
  let obj = {
    uname: "andy",
    age: 18,
    sex: "男",
  };
  for (let k in obj) {
    console.log("key:", k, "value:", obj[k]);
  }
  ```

### Math 内置对象

Math 对象是 JavaScript 提供的一个**数学**对象，提供了一系列做数学运算的方法

- Math 对象包含的方法有：

  - PI：圆周率
  - random：生成 0-1 之间的随机数（包含 0 不包括 1）
  - ceil：向上取整
  - floor：向下取整
  - round：四舍五入
  - max：找最大数
  - min：找最小数
  - pow：幂运算
  - abs：绝对值

- `Math.random()` 随机数函数， 返回一个 0 - 1 之间，并且包括 0 不包括 1 的随机小数 [0, 1）

- 生成 0-10 随机数

  ```js
  js;
  复制代码Math.floor(Math.random() * (10 + 1));
  ```

- 生成 5-10 随机数

  ```js
  js;
  复制代码Math.floor(Math.random() * (5 + 1)) + 5;
  ```

- 生成 N-M 随机数

  ```js
  js;
  复制代码Math.floor(Math.random() * (M - N + 1)) + N;
  ```

> 常见对象方法详解请跳转：[JavaScript 对象常用方法](https://juejin.cn/post/7237065395941785659)

### 拓展-创建对象（es6）

**语法糖（Syntactic sugar）** 也译为糖衣语法，是计算机中的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会

- ES6 提供了一个新的创建对象的语法，[使用关键字 class](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FClasses)，此处的`class`就是语法糖

- 在 ES6 里，`class` 声明有一个 `constructor` 方法，与 `new` 关键字一起被调用。 如果 `constructor` 方法没有明确定义，那么它就被隐式地定义为没有参数

  ```js
  // 显示构造函数
  class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }

  // 隐式构造函数
  class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }

  const zeus = new SpaceShuttle("Jupiter");
  zeus.takeOff(); // To Jupiter!

  const atlas = new Rocket();
  atlas.launch(); // To the moon!
  ```

  - 应该注意 `class` 关键字声明了一个新的函数，里面添加了一个构造函数。当用 `new` 创建一个新的对象时，构造函数会被调用
  - `constructor` 方法是一个特殊方法，用于创建和初始化 class 创建的对象

- 使用 getter 和 setter 来控制对象的访问

  - Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量
  - Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。 这些修改可以是计算，或者是直接替换之前的值

  ```js
  class Book {
    constructor(author) {
      this._author = author;
      //通常会在私有变量前添加下划线（_）
      //这种做法本身并不是将变量变成私有的
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book("anonymous");
  console.log(novel.writer); //anonymous
  novel.writer = "newAuthor";
  console.log(novel.writer); //newAuthor
  ```

# Web APIs

## 变量声明

变量声明有三个 `var`、`let`和`const`

- const 优先，尽量使用 const，后续值要修改可以再改回 let
- const 声明的值不能更改，而且 const 声明变量的时候需要里面进行初始化
- **对于引用数据类型，const 声明的变量，里面存的不是值而是地址，因此能够使用 const 声明**

```js
const arr = [1, 2, 3];
```

![image-20230511222837919.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/05398fe231b142008ca21bea0412cfeetplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 数据存储

内存中堆栈空间分配区别：

**栈：** 访问速度快，基本数据类型存放到栈里面

**堆：** 存储容量大，引用数据类型存放到堆里面

![1671092272171.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/d5bc12c5e6134918b52841745bba80fftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

![1671092296012.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/2b1118ffcafe4095a25029711ff99eebtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## API

- API：应用程序接口（Application Programming Interface）
- 接口：无需关心内部如何实现，只需要调用就可以很方便实现某些功能

## DOM 基本概念

DOM（Document Object Model 文档对象模型）是用来呈现以及与任意 HTML 或 XML 文档交互的 API

- DOM 是浏览器提供的一套专门用来**操作网页内容**的功能，DOM 的核心是把网页内容当做**对象**来处理，通过对象的属性和方法来操作网页内容，开发网页特效和实现用户交互

DOM 相关概念有：

- **文档（Document）：** 表示整个文档的顶层节点。文档节点是 DOM 树的根节点
- **节点（Node）：** DOM 树的基本构建块，可以是元素、属性、文本等。所有节点都继承自 Node 接口
  - **元素（Element）：** 表示文档中的标签，如`<div>`、`<p>`、`<span>`等。每个元素都可以包含其他元素或文本
  - **属性（Attribute）：** 表示元素的特性，如 id、class、src 等。通过 DOM 可以访问和修改这些属性
  - **文本节点（Text Node）：** 表示元素包含的文本内容。例如，`<p>这是文本</p>`中的 "这是文本" 就是一个文本节点
- **父节点（Parent Node）和子节点（Child Node）：** 一个节点可以包含其他节点，其中包含其他节点的节点称为父节点，被包含在其中的节点称为子节点
- **兄弟节点（Sibling Node）：** 具有相同父节点的节点被称为兄弟节点
- **DOM 接口：** 提供了一组 API，允许开发者通过编程方式操纵文档结构。常见的 DOM 接口有 Document、Element、Node 等

### DOM 树

- 将 HTML 文档以树状结构直观的表现出来，称之为文档树或 DOM 树（用于描述网页内容关系）
- DOM 树直观的体现了标签与标签之间的关系，每一个节点都为 DOM 对象

![image-20230511224731327.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/3eb26bb92a7b41a09853a57a31e65770tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### DOM 对象

- DOM 对象：浏览器根据 html 标签生成的 JS 对象

  - 所有的标签属性都可以在这个对象上面找到
  - 修改这个对象的属性会自动映射到标签身上

- DOM 的核心思想：把网页内容当做对象来处理

- ```
  document
  ```

  对象

  - 是 DOM 里提供的一个**对象**
  - 它提供的属性和方法都是**用来访问和操作网页内容的**
  - 网页所有内容都在 document 里面

![image-20230518153930912.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/7e02e1a997f34b91bc46d6e9b14b006ftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 获取 DOM 对象

- **查找 DOM 元素就是利用 JavaScript 选择页面中标签元素**
- body 和 html 标签比较特殊：
  - `document.body`获取 body
  - `document.documentElement`获取网页 html 标签

#### CSS 选择器获取 DOM 元素

选择匹配的第一个元素

- 语法：

  ```js
  js;
  复制代码document.querySelector("css选择器"); //一个或多个有效的CSS选择器字符串
  ```

- 返回值：CSS 选择器匹配的第一个元素,一个 HTMLElement 对象。如果没有匹配到，则返回 null

- 打印：`console.log / console.dir`，前者显示为 HTML 标签，后者显示为一个对象

选择匹配的多个元素

- 语法：

  ```js
  js;
  复制代码document.querySelectorAll("css选择器"); //一个或多个有效的CSS选择器字符串
  ```

- 返回值：CSS 选择器匹配的**NodeList 对象集合**。如果没有匹配到，依旧返回一个伪数组（数组长度为 0）

- **伪数组**：

  - 有长度、有索引号，但不等同于数组
  - 没有`pop()` 、`push()`等数组方法
  - 可以使用 for 循环遍历，也可以使用 forEach 遍历。这里的 forEach 不是数组中的 forEach 方法，**而是伪数组实现了一个名为 forEach 的方法**

#### 其他获取 DOM 元素方法

> 此类写法基本不再使用

- 根据 id 获取一个元素

```js
js;
复制代码document.getElementById("nav");
```

- 根据标签获取一类元素 获取页面所有 div

```js
js;
复制代码document.getElementByTagName("div");
```

- 根据类名获取元素 获取页面所有类名为 w 的元素

```js
js;
复制代码document.getElementByClassName("w");
```

### 操作元素内容

DOM 对象都是根据标签生成的，所以操作标签本质上就是操作 DOM 对象

- 修改标签元素里面的内容，主要有两种方式：

  - `对象.innerText 属性`
  - `对象.innerHTML 属性`

- `innerText`

  - 将文本内容添加/更新（渲染）到任意标签位置
  - 显示**纯文本**，不解析标签

  ```js
  const info = document.querySelector(".info");
  info.innerText = "hello world!";
  ```

- `innerHTML`

  - 将文本内容添加/更新到任意标签位置
  - **会解析标签**，多标签建议使用模板字符

  ```js
  const info = document.querySelector(".info");
  info.innerHTML = "<strong>hello world!</strong>";
  ```

### 操作元素属性

#### 操作元素常用属性

- 常用属性主要为**元素本身的属性**
- 使用`对象.属性 = 值`的方法，直接修改对象属性值

#### 操作元素样式属性

- 通过 JS 设置/修改标签元素的样式属性

  - 通过`style`属性操作 CSS
  - 通过类名（`className`）操作 CSS
  - 通过`classList`操作类控制 CSS

- **通过`style`属性操作 CSS**

  ```js
  //对象.style.样式属性 = 值
  const box = document.querySelector(".box");
  box.style.width = "200px";
  box.style.marginTop = "15px"; //此处的连接符改写用小驼峰
  ```

- **操作类名`className`操作 CSS**

  - 如果修改的样式比较多，可以通过修改类名来操作 CSS
  - **由于 class 是关键字**，所以使用`className`去代替
  - className 是使用**新值换旧值**（整体替换），如果需要添加一个类，需要保留之前的类名

  ```JS
  元素.className = 'active'
  ```

- **通过`classList`操作类控制 CSS**

  - 为了解决 className 容易覆盖以前的类名，我们可以通过 classList 方式追加和删除类名

  ```JS
  //追加一个类
  元素.classList.add('类名')
  //删除一个类
  元素.classList.remove('类名')
  //切换一个类，如果该类名存在则移除，不存在则添加
  元素.classList.toggle('类名')
  //是否包含某个类，如果有则返回true，没有则返回false
  元素.classList.contains('类名')
  ```

#### 操作表单元素属性

- 获取: `DOM对象.属性名`

- 设置: `DOM对象.属性名 = 新值`

- 可以用 JavaScript 人为控制表单元素

  ```js
  表单.value = "用户名";
  表单.type = "password";
  ```

> - `input` : button / checkbox / radio （name 相同绑定）/ image / file / password / reset / submit / text (type)
>
> 其余属性：name、value（input 元素值）、checked（首次加载是否被选中）、disabled（CSS 属性）属性（设置表单控件不可用）、maxlength（最大字符数）
>
> - `select`：与 option 共用、selected="selected"默认选中
> - `textarea`：clos、rows
>
> Tips：以上要标明 name 属性

#### 自定义属性

HTML5 新增了`data-`自定义属性

- 标签上以`data-`开头

- 在 DOM 对象上一律以`dataset`对象方式获取

- `DOM对象.dataset`获取自定义属性对象（属性为各个自定义属性）

  ```html
  <div class="box" data-id="10">盒子</div>
  <script>
    const box = document.querySelector(".box");
    console.log(box.dataset.id);
  </script>
  ```

### 定时器-间歇函数

`setInterval` 是 JavaScript 中用于周期性调用函数的方法，它会按照指定的时间间隔（以毫秒为单位）重复执行指定的函数

- 语法：

  ```js
  setInterval(function[, delay]) //返回值为定时器开启的ID
  ```

定时器函数可以开启和关闭定时器

- 开启定时器：

  ```js
  function repeat() {
    console.log("hello world");
  }
  setInterval(repeat, 1000);
  ```

- 关闭定时器：

  ```js
  //let intervalId = setInterval(function, delay)
  //clearInterval(intervalId)

  let timerId = setInterval(function () {
    console.log("hi~~~");
  }, 1000);
  clearInterval(timerId);
  ```

### 定时器-延迟函数

全局的 `setTimeout()`方法设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段

- 语法：

  ```js
  setTimeout(functionRef, delay);
  setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN);
  ```

- setTimeout 仅仅只执行一次，所以可以理解为就是把一段代码延迟执行

- 清除延时函数：

  ```js
  let timerId = setTimeout(functionRef, delay);
  clearTimeout(timerId);
  ```

> Tips:
>
> - 延时函数需要等待，后面的代码先执行
> - 返回值是一个正整数，表示定时器的编号（ID）
> - `setInterval()` 和 `setTimeout()` 共享同一个 ID 池

## DOM 事件基础

### 回调函数

如果将**函数 A**做为参数传递给**函数 B**时，我们称函数 A 为**回调函数**。或者说，当一个函数当做参数来传递给另外一个函数的时候，这个函数就是回调函数

- 回调函数本质是函数，只不过当做参数使用
- 使用匿名函数作为回调函数比较常见
- 回调函数作用是完成某些特定的任务

常见使用场景：

```js
setInterval(function () {}, 1000); //定时器
box.addEventListener("click", function () {}); //事件监听
```

### 事件监听

- 事件概念

  - 事件是在编程时系统内发生的**动作**或者发生的事情
  - 例如：点击按钮、鼠标经过菜单

- 事件监听

  - 就是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为**绑定事件**或者**注册事件**
  - 事件监听是将事件处理函数注册到元素对象上
  - 我们可以给同一个 DOM 对象添加同一种类型的事件监听，不存在相应函数被覆盖的情况。执行顺序是：事件被触发时，响应函数会按照函数的绑定顺序执行

- 语法：

  ```js
  元素对象.addEventListener("事件类型", 要执行的函数);
  ```

- 事件监听三要素：

  - **事件源**：哪个 DOM 元素被事件触发了，要获取 DOM 元素
  - **事件类型**：用什么方式触发，比如鼠标单击 `click`、鼠标经过 `mouseover` 等
  - **事件处理函数**：要做什么事

- 示例：

  ```js
  //HTML结构
  <button>按钮</button>;

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function () {
    alert("点击了~");
  });
  //事件类型要加引号
  //函数是点击之后再去执行，每次点击都会执行一次
  ```

- 拓展（事件监听版本）

  - `事件源.on事件 = function() { }`

  - on 方式会被**覆盖**（DOM L0），addEventListener 方式**可绑定多次**，拥有事件更多特性（DOM L2）

    ```js
    btn.onclick = function () {
      alert("我是弹窗1");
    };
    ```

### 事件类型

- 鼠标事件

  - `click`鼠标点击
  - `mouseenter`鼠标经过
  - `mouseleave`鼠标离开

- 焦点事件

  - `focus`获得焦点
  - `blur`失去焦点

- 键盘事件

  - `keydown`键盘按下触发（不常用）
  - `keyup`键盘抬起触发

- 文本事件

  - `change`修改事件，修改数据失去焦点就触发，频率一般
  - `submit`表单提交事件，用于 form 表单
  - `input`用户输入事件，文本框发生变化就会立马触发这个事件

- keydown、keyup、input 总结

  | **事件**  | **触发时机**              | **得到表单值**        |
  | --------- | ------------------------- | --------------------- |
  | `keydown` | 按下键盘时触发            | 不带最后一次按键值 ab |
  | `keyup  ` | 弹起键盘时触发            | 输入内容 abc          |
  | `input  ` | 表单 value 发生变化时触发 | 输入内容 abc          |

  > 执行顺序：`keydown` > `input` > `keyup`

![image-20230521104144172.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/8c2ce3f6f70f45a88f977486b5143227tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> 拓展：
>
> - `对象.click()` 方法是程序可以**模拟用户点击事件**，自动执行
> - 常见的有`click()、blur()、focus()`

### 事件对象

- 定义：事件对象也是个对象，这个对象里有事件触发时的相关信息

- 使用场景

  - 可以判断用户按下哪个键，比如按下回车键发布评论
  - 可以判断鼠标点击了哪个元素，从而做相应的操作

- 获取

  - 在事件绑定的回调函数的第一个参数就是事件对象
  - 一般命名为`event、e`

  ```js
  元素.addEventListener("click", function (e) {
    //其中e即为事件对象
  });
  ```

- 事件对象常用属性

  | 属性名      | 类型   | 说明                                                                                          |
  | ----------- | ------ | --------------------------------------------------------------------------------------------- |
  | **offsetX** | number | 事件发生时，鼠标相对于事件源的 x 坐标                                                         |
  | **offsetY** | number | 事件发生时，鼠标相对于事件源的 y 坐标                                                         |
  | **target**  | object | 事件源对象                                                                                    |
  | pageX       | number | 事件发生时，鼠标相对于网页的 x 坐标                                                           |
  | pageY       | number | 事件发生时，鼠标相对于网页的 y 坐标                                                           |
  | clientX     | number | 事件发生时，鼠标相对于视口的 x 坐标                                                           |
  | clientY     | number | 事件发生时，鼠标相对于视口的 y 坐标                                                           |
  | **key**     | string | 如果是键盘相关事件，则事件对象中包含该属性，表示键盘事件发生时，按下的是什么键。'Enter'回车键 |

### 环境对象

环境对象指的是函数内部特殊的变量`this`，它代表着当前函数运行时所处的环境

- 作用：
  - 弄清楚 this 的指向，可以让我们代码更简洁
  - 函数的调用方式不同，`this`指代的对象也不同
- **谁调用，this 就是谁**，this 指向的粗略规则（后文有详细讲解）
- 直接调用函数，其实相当于是 `window.函数`，所以 this 指代 window(在浏览器运行 js，全局所有的东西全属于 window)
- 在浏览器任何地方都可以省略 window

### 拓展-排他思想

排他目的是突出显示某个元素，核心原则是**排他留己**

- 示例：

  ```html
  <button class="yellow">按钮1</button>
  <button>按钮2</button>
  <button>按钮3</button>
  <button>按钮4</button>
  <button>按钮5</button>
  <script>
    // 点击哪个按钮，哪个按钮高亮，其余不高亮
    const btn = document.querySelectorAll("button");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        const adjustClass = document.querySelector(".yellow");
        adjustClass && adjustClass.classList.remove("yellow"); // 短路运算实现排他
        this.classList.add("yellow");
      });
    }
  </script>
  ```

## DOM 事件进阶

### 事件流

事件流指的是事件完整执行过程中的流动路径

- 例如：假设页面里有个 div，当触发事件时，会经历三个阶段，分别是`捕获阶段`、`目标阶段`、`冒泡阶段`
- 简单来说：**捕获阶段是从父到子、冒泡阶段是从子到父**，并且我们只能干预捕获和冒泡阶段中的一个
- 目标阶段指的是触发自己的事件

![image-20230517171243300.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/31766a368fc84ffdbb0f1f5097364720tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> **捕获阶段**--->**目标阶段**--->**冒泡阶段**

#### 事件捕获

- 当一个元素的事件被触发时，会从 DOM 的根元素开始依次调用同名事件 (从外到里)

- 语法：

  ```js
  DOM.addEventListener(事件类型, 事件处理函数, 是否使用捕获机制);
  ```

  - `addEventListener`第三个参数传入`true`代表是捕获阶段触发
  - 若传入`false`代表**冒泡阶段触发**，默认就是`false`

- 示例：

  ```html
  <body>
    <div class="father">
      父盒子
      <div class="son">子盒子</div>
    </div>
    <script>
      // 事件流
      const father = document.querySelector(".father");
      const son = document.querySelector(".son");
      // 事件捕获
      father.addEventListener(
        "click",
        function () {
          alert("我是爸爸");
        },
        true
      ); // 事件捕获
      // 点击子盒子
      son.addEventListener(
        "click",
        function () {
          alert("我是儿子");
        },
        true
      ); // 事件捕获
    </script>
  </body>
  ```

#### 事件冒泡

- 当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发。这一过程被称为事件冒泡（从里到外）
- 简单理解：当一个元素触发事件后，会依次向上调用所有父级元素的**同名事件**
- 事件冒泡是默认存在的（默认第三参数就是`false`），或者第三个参数传入`false`

#### 阻止冒泡

- 因为默认就有冒泡阶段的存在，所以容易导致事件影响到父级元素

- 若想把事件就限制在当前元素内，就需要阻止事件冒泡

- **阻止事件冒泡需要拿到事件对象**

- 语法：

  ```js
  事件对象.stopPropagation();
  ```

- 示例：

  ```html
  <div class="father">
    父盒子
    <div class="son">子盒子</div>
  </div>
  <script>
    // 事件流
    const father = document.querySelector(".father");
    const son = document.querySelector(".son");
    father.addEventListener("click", function () {
      alert("我是爸爸");
    });
    son.addEventListener("click", function (e) {
      alert("我是儿子");
      e.stopPropagation(); //阻止冒泡
    });
  </script>
  ```

> 鼠标经过/离开事件：
>
> - `mouseover`和`mouseout`会有冒泡
> - `mouseenter`和`mouseleave`没有冒泡 (常用)

#### 阻止默认行为

阻止元素发生默认行为：`事件对象.preventDefault()`

```html
<body>
  <form action="">
    姓名: <input type="text" name="username" />
    <button>提交</button>
  </form>
  <a href="http://www.baidu.com">点击跳转</a>
  <script>
    // 阻止默认行为
    const form = document.querySelector("form");
    const input = document.querySelector("[name=username]");
    form.addEventListener("submit", function (e) {
      // 如果input表单的值为空则不允许提交
      if (input.value === "") {
        // return 无法阻止提交事件
        e.preventDefault(); // 阻止提交事件
      }
    });
    document.querySelector("a").addEventListener("click", function (e) {
      e.preventDefault();
    });
  </script>
</body>
```

#### 事件委托

事件委托(Event Delegation)：是 JavaScript 中注册事件的常用技巧，也称为**事件委派**、**事件代理**

- 简单理解：**原本需要注册在子元素的事件委托给父元素，让父元素担当事件监听的职务**

- 优点：**减少注册次数**，可以提高程序性能

- 原理：事件委托其实是利用事件冒泡的特点，给父元素注册事件，当我们触发子元素的时候，会冒泡到父元素身上，从而触发父元素的事件（事件冒泡）

- 获取当前点击的元素：

  ```js
  事件对象.target.tagName; //e.target事件目标
  ```

- 注意：

  - `e.target.tagName`获取的标签名要**大写**
  - `e.target`得到目标元素

  > 给新增元素注册事件，使用事件委托，因为动态新增的元素我们无法直接注册事件

### 移除事件监听

- 移除事件处理函数，也称为解绑事件

- 传统 on 注册（L0）

  - **同一个对象,后面注册的事件会覆盖前面注册（同名事件）**

  - 直接使用`null`覆盖偶就可以实现事件的解绑

  - 只有冒泡阶段，没有捕获阶段

    ```js
    //绑定事件
    btn.onclick = function () {
      alert("点击");
    };
    //解绑事件
    btn.onclick = null;
    ```

- 事件监听注册（L2）

  - 语法: `addEventListener(事件类型, 事件处理函数, 是否使用捕获)`

  - **后面注册的事件不会覆盖前面注册的事件（同名事件）**

  - 必须使用`removeEventListener(事件类型, 事件处理函数, 获取捕获或者冒泡阶段)`实现事件解绑

  - 可以通过第三个参数去确定是在冒泡或者捕获阶段执行

  - 匿名函数无法被解绑

    ```js
    function fn() {
      alert("点击");
    }
    btn.addEventListener("click", fn);
    btn.removeEventListener("click", fn);
    ```

### 其他事件

#### 页面加载事件

加载外部资源（如图片、外联 CSS 和 JavaScript 等）加载完毕时触发的事件

- 事件名：`load`

- 监听页面所有资源加载完毕：给`window`添加`load`事件

  ```js
  //页面加载事件
  window.addEventListener("load", function () {
    //执行的操作
  });
  ```

当初始的 HTML 文档被完全加载和解析完成之后就触发，而无需等待样式表、图像等完全加载

- 事件名：`DOMContentLoaded`

- 监听页面 DOM 加载完毕：给`document`添加`DOMContentLoaded`事件

  ```js
  document.addEventListener("DOMContentLoaded", function () {
    //执行的操作
  });
  ```

#### 页面滚动事件

滚动条在滚动的时候持续触发的事件

- 事件名：`scroll`

- 监听整个页面滚动

  ```js
  //页面滚动事件
  window.addEventListener("scroll", function () {
    //执行的操作
  });
  ```

- `document.documentElement`(HTML 元素)

- `scrollLeft`和`scrollTop`（属性）：获取被卷去的左侧和头部，均可读写

#### 页面尺寸事件

- 会在窗口尺寸改变的时候触发事件：`resize`

  ```js
  window.addEventListener("resize", function () {
    //执行的代码
  });
  ```

- 获取元素的可见部分宽高（不包含`border`，`margin`，`滚动条`等）`clientWidth和clientHeight`

#### 三大家族

![image-20230606230219532.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/6f8e72ec68cb4c6b90f0d2bf50aae15dtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

- 总结：

![L0hUTUw15byA5Y-R5paH5qGjL2ltYWdlcy9Dc3NCb3hNb2RlbC5wbmc.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/2f58bf4545e0446fa807b71ca6f370c5tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 日期对象

日期对象 Date (JS 内置对象) 用来表示日期和时间的对象（获取当前系统日期和时间）

- 日期对象使用必须先实例化：创建一个日期对象并获取时间

  - 获得当前日期

        ```js

    const date = new Date()

    ```

    ```

  - 获得指定日期

        ```js

    const date = new Date('2023-10-1')

    ```

    ```

- 日期对象方法

  | 方法                  | 作用                                   | 说明                 |
  | --------------------- | -------------------------------------- | -------------------- |
  | `getFullYear()      ` | 获得年份                               | 获取四位年份         |
  | `getMonth()         ` | 获得月份                               | 取值为 0 ～ 11       |
  | `getDate()          ` | 获取月份中的每一天                     | 不同月份取值也不相同 |
  | `getDay()           ` | 获取星期                               | 取值为 0 ～ 6        |
  | `getHours()         ` | 获取小时                               | 取值为 0 ～ 23       |
  | `getMinutes()       ` | 获取分钟                               | 取值为 0 ～ 59       |
  | `getSeconds()       ` | 获取秒                                 | 取值为 0 ～ 59       |
  | `toLocaleString()   ` | 返回该日期对象的字符串(包含日期和时间) | 2099/9/2018:30:43    |
  | `toLocaleDateString(` | 返回日期对象日期部分的字符串           | 2099/9/20            |
  | `toLocaleTimeString(` | 返回日期对象时间部分的字符串           | 18:30:00             |

- 时间戳：指 1970 年 01 月 01 日 00 时 00 分 00 秒起至现在的总毫秒数(数字型)，它是一种特殊的计量时间的方式

  三种方法获取时间戳：

  | 方法            | 说明                                  |
  | --------------- | ------------------------------------- |
  | `getTime( )   ` | 1)需要实例化 2)new Date( ).getTime( ) |
  | `+new Date( ) ` | 本质转换为数字，推荐使用              |
  | `Date.now( )  ` | 无序实例化，只能得到当前的时间戳      |

### 节点操作

#### 查找节点

查找节点：利用节点关系查找节点，返回的都是对象。有了查找节点可以使我们选择元素更加方便

节点分为：`父节点`、`子节点`、`兄弟节点`

##### 父节点查找

- `子元素.parentNode`：返回最近一级的父节点对象， 找不到返回为`null`

##### 子节点查找

- `节点对象.children`：获得所有子元素节点，**返回的是一个伪数组**

##### 兄弟节点查找

- `节点对象.nextElementSibling`：获取节点的下一个兄弟节点
- `节点对象.previousElementSibling`：获取节点的上一个兄弟节点

#### 增加节点

- 创建节点

  - 语法：`document.createElement('标签名')`

- 追加节点

  - 父元素最后一个子节点之后，插入节点元素（可以为文本）：`element.append(内容)`

  - 父元素第一个子元素的之前，插入节点元素：`element.prepend(内容)`

  - 示例：

    ```js
    //插入节点
    var parent = document.createElement("div");
    var p = document.createElement("p");
    parent.append(p);

    console.log(parent.childNodes); // NodeList [ <p> ]

    //插入文本
    var parent = document.createElement("div");
    parent.append("Some text");

    console.log(parent.textContent); // "Some text"

    //插入节点同时插入文本
    var parent = document.createElement("div");
    var p = document.createElement("p");
    parent.append("Some text", p);

    console.log(parent.childNodes); // NodeList [ #text "Some text", <p> ]
    ```

#### 删除节点

若一个节点在页面中已不需要时，可以删除它

- 语法：`element.remove()`
- 把对象从它所属的 DOM 树中删除
- 删除节点和隐藏节点（display:none） 有区别的： 隐藏节点还是存在的，但是删除，则从 DOM 树中删除

## BOM 操作

### BOM

BOM (Browser Object Model) 浏览器对象模型

- window 对象是一个全局对象，是 JavaScript 中的顶级对象
- 例如`document、alert()、console.log()`这些都是 window 的属性，基本 BOM 的属性和方法都属于 window
- 所有通过`var`定义在全局作用域中的变量以及全局作用域中定义的函数都会变成 window 对象的属性和方法
- **window 对象下的属性和方法调用的时候可以省略 window**

![image-20230519181829238.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/b895fa1bd1bf46aaa6a5c85bf00b2595tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### location 对象

- location (地址、Uniform Resource Locator) 它拆分并保存了 URL 地址的各个组成部分， 它是一个对象

- 常用属性和方法：

  | 属性/方法  | 说明                                                 |
  | ---------- | ---------------------------------------------------- |
  | `href    ` | 属性，获取完整的`URL`地址，赋值时用于地址的跳转      |
  | `search  ` | 属性，获取地址中携带的参数，符号`?`后面部分          |
  | `hash    ` | 属性，获取地址中的啥希值，符号`#`后面部分            |
  | `reload()` | 方法，用来刷新当前页面，传入参数`true`时表示强制刷新 |

- 示例：

  ```html
  <form><input type="text" name="search" /> <button>搜索</button></form>
  <a href="#/music">音乐</a>
  <a href="#/download">下载</a>

  <button class="reload">刷新页面</button>
  <script>
    // href 属性  得到完整地址，赋值则是跳转到新地址
    console.log(location.href);

    // search 属性  得到 ? 后面的地址
    console.log(location.search); // ?search=笔记本

    // hash 属性  得到 # 后面的地址
    console.log(location.hash);

    // reload 方法  刷新页面
    const btn = document.querySelector(".reload");
    btn.addEventListener("click", function () {
      // location.reload() // 页面刷新
      location.reload(true); // 强制页面刷新 ctrl+f5
    });
  </script>
  ```

### navigator 对象

- navigator 对象记录了浏览器自身的相关信息

- 如：通过 userAgent 检测浏览器的版本及平台

  ```js
  // 检测 userAgent（浏览器信息）
  (function () {
    const userAgent = navigator.userAgent;
    // 验证是否为Android或iPhone
    const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/);
    const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/);
    // 如果是Android或iPhone，则跳转至移动站点
    if (android || iphone) {
      location.href = "http://m.itcast.cn";
    }
  })();
  ```

### history 对象

- history 对象主要管理历史记录，该对象与浏览器地址栏的操作相对应，如前进、后退等

- 常见方法：

  | history 对象方法 | 作用                                                                |
  | ---------------- | ------------------------------------------------------------------- |
  | `back()    `     | 后退                                                                |
  | `forward() `     | 前进                                                                |
  | `go(参数)  `     | 根据函数的参数对应相应功能。-1 后退，1 前进，0 或者无参数为刷新页面 |

  `

- 示例：

  ```html
  <button class="back">←后退</button>
  <button class="forward">前进→</button>
  <script>
    // 前进
    const forward = document.querySelector(".forward");
    forward.addEventListener("click", function () {
      // history.forward()
      history.go(1);
    });
    // 后退
    const back = document.querySelector(".back");
    back.addEventListener("click", function () {
      // history.back()
      history.go(-1);
    });
  </script>
  ```

### 本地存储

将数据存储在本地浏览器中，主要用于页面刷新数据不丢失

- 优点：
  - 页面刷新或者关闭不丢失数据，实现数据持久化
  - 容量较大，`sessionStorage`和`localStorage`约 5M 左右

#### localStorage

数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失。localStorage 以键值对的形式存储，并且存储的是字符串，省略了 window

- 存储：`localStorage.setItem(key, value)`
- 获取：`localStorage.getItem(key)`
- 删除：`localStorage.removeItem(key)`

#### sessionStorage

用法跟 localStorage 基本相同，**区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除**

- 存储：`sessionStorage.setItem(key, value)`
- 获取：`sessionStorage.getItem(key)`
- 删除：`sessionStorage.removeItem(key)`

#### localStorage 存储复杂类型

本地只能存储字符串，无法存储复杂数据类型

- 解决方案：

![image-20230519190050874.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/261ce6e6f7434845b45676c795adbefatplv-k3u1fbpfcp-jj-mark3024000q75.webp)

复杂数据类型转换成 JSON（JavaScript Object Notation）字符串，在存储到本地

- 语法：`JSON.stringify(复杂数据类型)`
- JSON 字符串：
  - 首先是一个字符串
  - 属性名使用双引号引起来，不能单引号
  - 属性值如果是字符串型也必须双引号
- 本地存储里面取出来的是字符串，不是对象，无法直接使用

把取出来的字符串转换为对象

- 注意：数据多了会自动用数组存储起来

- 语法：`JSON.parse(JSON字符串)`

- 示例：

  ```js
  // 本地存储复杂数据类型
  const goods = {
    name: "华为",
    price: 9999,
  };
  // 1. 把对象转换为JSON字符串  JSON.stringify
  localStorage.setItem("goods", JSON.stringify(goods));
  // 2.取出goods JSON.parse
  JSON.parse(localStorage.getItem("goods"));
  ```

## 正则表达式

- 正则表达式（Regular Expression）是用于匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式也是对

  象

- 通常用来查找、替换那些符合正则表达式的文本，许多语言都支持正则表达式

- 作用：表单验证（**匹配**）、 过滤敏感词（**替换**）、 字符串中提取我们想要的部分（**提取**）

### 语法

- JavaScript 中定义正则表达式的语法有两种

- 定义正则表达式语法：

  ```js
  const 变量名 = /表达式/;
  ```

  其中，`/ /`是正则表达式字面量，**正则表达式也是对象**

- **判断是否有符合规则的字符串：**

  - `test()` 方法，用来查看正则表达式与指定的字符串是否匹配
  - 如果正则表达式与指定的字符串匹配 ，返回`true`，否则`false`

- 语法：

  ```js
  regobj.test(被检测的字符串);
  ```

- **检索（查找）符合规则的字符串：**

  - `exec()` 方法 在一个指定字符串中执行一个搜索匹配
  - 如果匹配成功，`exec()` 方法返回一个数组，否则返回 null

- 语法：

  ```js
  regobj.exec(被检测的字符串);
  ```

> 正则表达式检测查找 test 方法和 exec 方法有什么区别？
>
> 1. `test方法`用于判断是否有符合规则的字符串，返回的是布尔值 找到返回 true，否则 false
> 2. `exec方法`用于检索（查找）符合规则的字符串，找到返回数组，否则为 null

### 元字符

- **普通字符**：大多数的字符仅能够描述它们本身，这些字符称作普通字符。例如所有的字母和数字，也就是说普通字符只能够匹配字符串中与它们相同的字符

- 元字符

  ：

  一些具有特殊含义的字符

  ，可以极大提高了灵活性和强大的匹配功能

  - 比如，规定用户只能输入英文 26 个英文字母，普通字符的话 abcdefghijklm…..
  - 但是换成元字符写法： `[a-z]`

- 我们可以把元字符分为三类：

  - 边界符（表示位置，开头和结尾，必须用什么开头，用什么结尾）
  - 量词（表示重复次数）
  - 字符类（比如 `\d` 表示 0~9）

#### 边界符

- 正则表达式中的边界符（位置符）用来提示字符所处的位置，主要有两个字符

  | 边界符  | 说明                         |
  | ------- | ---------------------------- |
  | `^    ` | 表示匹配行首的文本(以谁开始) |
  | `$    ` | 表示匹配行尾的文本(以谁结束) |

  > 如果 ^ 和 $ 在一起，表示精确匹配

  ```js
  // 边界符
  console.log(/^哈/.test("哈")); // true
  console.log(/^哈/.test("哈哈")); // true
  console.log(/^哈/.test("二哈")); // flase
  console.log(/^哈$/.test("哈")); // true  只有这种情况为true 否则全是false
  console.log(/^哈$/.test("哈哈")); // false
  console.log(/^哈$/.test("二哈")); // false

  //易错点
  let firstString = "Ricky is first and can be found.";
  let firstRegex = /^Ricky/; //这里的^指的应该是^后的字符串，而不是单个字符
  firstRegex.test(firstString);
  let notFirst = "You can't find Ricky now.";
  firstRegex.test(notFirst);
  ```

#### 量词

- 量词用来设定某个模式出现的次数

- 指的是量词最近的一个字符

- 使用精确匹配

  | 量词    | 说明              |
  | ------- | ----------------- |
  | `\*   ` | 重复零次或更多次  |
  | `+    ` | 重复一次或更多次  |
  | `?    ` | 重复零次或一次    |
  | `{n}  ` | 重复 n 次         |
  | `{n,} ` | 重复 n 次或更多次 |
  | `{n,m}` | 重复 n 到 m 次    |

  > 逗号左右两侧千万**不要出现空格**

  ```js
  //  量词 * 类似 >=0 次
  console.log(/^哈$/.test("哈")); // true
  console.log(/^哈*$/.test("")); // true
  console.log(/^哈*$/.test("哈")); // true
  console.log(/^哈*$/.test("哈哈")); // true
  console.log(/^哈*$/.test("二哈很傻")); //  false
  console.log(/^哈*$/.test("哈很傻")); //  false
  console.log(/^哈*$/.test("哈很哈")); // false，精确匹配，只能为'哈'

  //  量词 + 类似 >=1 次
  console.log(/^哈$/.test("哈")); // true
  console.log(/^哈+$/.test("")); // false
  console.log(/^哈+$/.test("哈")); // true
  console.log(/^哈+$/.test("哈哈")); // true
  console.log(/^哈+$/.test("二哈很傻")); //  false
  console.log(/^哈+$/.test("哈很傻")); //  false
  console.log(/^哈+$/.test("哈很哈")); // false，精确匹配，只能为哈

  //  量词 ? 类似  0 || 1
  console.log(/^哈?$/.test("")); // true
  console.log(/^哈?$/.test("哈")); // true
  console.log(/^哈?$/.test("哈哈")); // false
  console.log(/^哈?$/.test("二哈很傻")); //  false
  console.log(/^哈?$/.test("哈很傻")); //  false
  console.log(/^哈?$/.test("哈很哈")); // false，精确匹配，只能为哈，且数量为1或者0

  // 量词 {n} 写几，就必须出现几次
  console.log(/^哈{4}$/.test("哈哈哈")); //false
  console.log(/^哈{4}$/.test("哈哈哈哈")); //true
  console.log(/^哈{4}$/.test("哈哈哈哈哈")); //false

  // 量词 {n,}   >=n
  console.log(/^哈{4,}$/.test("哈哈哈")); //false
  console.log(/^哈{4,}$/.test("哈哈哈哈")); //true
  console.log(/^哈{4,}$/.test("哈哈哈哈哈")); //true

  // 量词 {n,m}  逗号左右两侧千万不能有空格   >=n && <= m
  console.log(/^哈{4,6}$/.test("哈哈哈")); //false
  console.log(/^哈{4,6}$/.test("哈哈哈哈")); //true
  console.log(/^哈{4,6}$/.test("哈哈哈哈哈")); //true
  console.log(/^哈{4,6}$/.test("哈哈哈哈哈哈")); //true
  console.log(/^哈{4,6}$/.test("哈哈哈哈哈哈哈")); //false
  ```

#### 字符类

- `[ ]` 匹配字符集合

  - 例如：
    - `[abc]` 匹配 abc 其中的任何单个字符

- `[ ]` 里面加上 `-` 连字符：使用连字符 `-` 表示一个范围

  - 例如：
    - `[a-z]` 表示 a 到 z，26 个英文字母都可以
    - `[a-zA-Z]` 表示大小写都可以
    - `[0-9]` 表示 0~9 的数字都可以

- `[ ]` 里面加上 `^` 取反符号

  - 例如：
    - `[^a-z]` 匹配除了小写字母以外的字符

- `.` 匹配除换行符之外的任何**单个字符**

- `预定义`：指的是某些常见模式的简写方式（短语元字符 shorthand character classes）

  | 预定义类 | 说明                                                                         |
  | -------- | ---------------------------------------------------------------------------- |
  | `\d    ` | 匹配 0-9 之间的任一数字，相当于`[0-9]`                                       |
  | `\D    ` | 匹配所有 0-9 以外的字符，相当于`[^0-9]`                                      |
  | `\w    ` | 匹配任意的字母、数字和下划线，相当于`[A-Za-zO-9 ]`                           |
  | `\W    ` | 除所有字母、数字和下划线以外的字符，相当于`[^A-Za-zO-9 ]`                    |
  | `\s    ` | 匹配空格(包括制表、回车、换行、垂直制表、换页、空格等),相当于`[ \t\r\n\v\f]` |
  | `\S    ` | 匹配非空格的字符，相当于`[^ \t\r\n\v\f]`                                     |

### 修饰符

- 修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等

- 语法：

  ```js
  / 表达式 / 修饰符;
  ```

  - `i` 是单词 ignore 的缩写，正则匹配时字母不区分大小写
  - `g` 是单词 global 的缩写，匹配所有满足正则表达式的结果

  ```js
  console.log(/^java$/.test("java")); //true
  console.log(/^java$/i.test("JAVA")); //true
  const str = "hello world,HELLO WORLD";
  const re = str.replace(/world/gi, "JavaScript"); //hello JavaScript,HELLO JavaScript
  ```

- 替换：replace 替换

- 语法：

  ```js
  字符串.replace(/正则表达式/, "替换的文本");
  ```

- 在 replace 中：`$1` 对应第一个小括号内容，`$2` 对应第二个括号内容，依次类推（捕获组），可以搭配`()`将字符串进行分割

- 捕获组重用模式：

  - 分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：`\1`）。 捕获组按其开头括号的位置自动编号（从左到右），从 1 开始

  ```js
  //下面的示例是匹配被空格隔开的两个相同单词
  let repeatRegex = /(\w+) \1 \1/;
  repeatRegex.test(repeatStr); // Returns true
  repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

  let repeatNum = "42 42 42";
  let reRegex = /^(\d+) \1 \1$/;
  let result = reRegex.test(repeatNum);
  ```

- 捕获组搜索和替换：

  ```js
  // 隐藏手机号中间四位
  const tel = "13611112222";
  console.log(tel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")); //136****2222

  //交换位置
  "Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"); //Camp Code
  ```

### 匹配技巧

#### 贪婪匹配

- 在正则表达式中，贪婪（greedy）匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回
- 例如：
  - 可以将正则表达式 `/t[a-z]*i/` 应用于字符串 `"titanic"`。 这个正则表达式是一个以 `t` 开始，以 `i` 结束，并且中间有一些字母的匹配模式
  - 正则表达式默认是贪婪匹配，因此匹配返回为 `["titani"]`。 它会匹配到适合该匹配模式的最大子字符串

#### 惰性匹配

- 除了贪婪匹配，另一种方案称为懒惰（lazy）匹配，它会匹配到满足正则表达式的字符串的**最小可能部分**

- 你可以使用 `?` 字符来将其变成懒惰匹配。 调整后的正则表达式 `/t[a-z]*?i/` 匹配字符串 `"titanic"` 返回 `["ti"]`

  ```js
  let text = "<h1>Winter is coming</h1>";
  let myRegex = /<.*?>/g;
  let result = text.match(myRegex); //返回['<h1>', '</h1>']
  ```

使用示例：

- 用户名只能是数字字母字符

- 用户名中的数字必须在最后。 数字可以有零个或多个。 用户名不能以数字开头

- 用户名字母可以是小写字母和大写字母

- 用户名长度必须至少为两个字符。 两位用户名只能使用字母

  ```js
  let username = "JackOfAllTrades";
  let userCheck = /^([a-z]{2,}|[a-z]+\d{2,})(\d*)$/i; // 修改这一行
  let result = userCheck.test(username);
  ```

#### 正向先行断言和负向先行断言

- 先行断言 （Lookaheads）是告诉 JavaScript 在字符串中向前查找的匹配模式。 当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用

- 有两种先行断言：正向先行断言（positive lookahead）和负向先行断言（negative lookahead）

- **正向先行断言**会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配（意思是必须有，使用 test 可以检测，但使用 match 不会匹配到）。 正向先行断言的用法是 `(?=...)`，其中 `...` 就是需要存在但不会被匹配的部分

- **负向先行断言**会查看并确保搜索匹配模式中的元素不存在。 负向先行断言的用法是 `(?!...)`，其中 `...` 是希望不存在的匹配模式。 如果负向先行断言部分不存在，将返回匹配模式的其余部分

- 使用示例：

  ```js
  let quit = "qu";
  let noquit = "qt";
  let quRegex = /q(?=u)/;
  let qRegex = /q(?!u)/;
  quit.match(quRegex);
  noquit.match(qRegex); //这两次 match 调用都将返回 ["q"]

  //先行断言的更实际用途是检查一个字符串中的两个或更多匹配模式
  //这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字
  let password = "abc123";
  let checkPass = /(?=\w{3,6})(?=\D*\d)/;
  checkPass.test(password);

  //在正则表达式 pwRegex 中使用先行断言以匹配大于 5 个字符且有两个连续数字的密码
  let sampleWord = "astronaut";
  let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; // 修改这一行
  let result = pwRegex.test(sampleWord);
  ```

# JavaScrip 进阶

## 编程思想

### 面向过程

- 面向过程就是分析出解决问题所需的步骤，然后用函数把这些步骤实现，使用的时候再依次调用
- 简而言之：面向过程，就是按照我们分析好了的步骤，按照步骤解决问题

### 面向对象

- 面向对象是把事务分解成为一个个对象，然后由对象之间分工合作
- 面向对象是以对象功能来划分问题，而不是步骤
- 面向对象特性：封装性、继承性、多态性

> 面向过程编程：
>
> - 优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程
> - 缺点：不灵活、复用性较差
>
> 面向对象编程：
>
> - 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护
> - 缺点：性能比面向过程低

## JS 重用

- 为了让 JavaScript 更模块化、更整洁以及更易于维护，ES6 引入了在多个 JavaScript 文件之间共享代码的机制。 它可以导出文件的一部分供其它文件使用，然后在需要它的地方按需导入

  为了使用这一功能， 需要在 HTML 文档里创建一个 `type` 为 `module` 的脚本。例子如下：

  ```js
  <script type="module" src="filename.js"></script>
  //使用了 module 类型的脚本可以使用 import 和 export 特性
  ```

### export 导出

- 在不同的 JavaScript 文件复用一个函数，就需要使用 `export` 导出

  ```js
  export const add = (x, y) => x + y;
  ```

- 上面是导出单个函数常用方法，还可以这样导出：

  ```js
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  export { add, subtract };
  ```

### import 导入

- `import` 可以导入文件或模块的一部分，例如：

  ```js
  import { add } from "./math.js";
  ```

  > `import` 会在 `math.js` 里找到 `add`，只导入这个函数，忽略剩余的部分。用这种方式导入时，相对路径（`./`）和文件扩展名（`.js`）都是必需的

- `import` 语句可以从文件里导入多个项目，例如：

  ```js
  import { add, subtract } from "./math.js";
  ```

- 用 `*` 从文件中导入所有内容：

  ```js
  // import 语句会创建一个 addModule 的对象（可以随便命名）
  import * as addModule from "./math.js";
  // addModule 对象包含 math.js 文件里的所有导出，可以直接访问其中的函数
  myMathModule.add(2, 3);
  myMathModule.subtract(5, 3);
  ```

### export default 默认导出

在文件中只有一个值需要导出的时候，通常会使用默认导出语法，它也常常用于给文件或者模块创建返回值

- `export default` 用于为模块或文件声明一个返回值，**在每个文件或者模块中应当只默认导出一个值**

- 此外，不能将 `export default` 与 `var`、`let` 或 `const` 同时使用

  ```js
  export default function add(x, y) {
    return x + y;
  }
  ```

- 如有多个函数或变量

  ```js
  const baseURL = "https://www.baidu.com/";
  const getArraySum = (arr) => arr.reduce((sum, item) => (sum += item), 0);
  export default {
    baseURL, ////此处为 baseURL: baseURL 的简写
    getArraySum, //此处为 getArraySum: getArraySum 的简写
  };
  ```

import 配合 export default 用法：

```js
import add from "./math.js";
```

> 被导入的 `add` 值没有被花括号（`{}`）所包围。 `add` 只是变量名，对应 `math.js` 文件的任何默认导出值。 在导入默认导出时，可以任意命名

总结：

|                      | 导出                 | 导入                                      |
| -------------------- | -------------------- | ----------------------------------------- |
| ECMAScript 标准-默认 | `export default {}`  | `import 变量名 from '模块名或路径'`       |
| ECMAScript 标准-命名 | `export修饰定义语句` | `import { 同名变量 } from '模块名或路径'` |

## 作用域

作用域（scope）**规定了变量能够被访问的“范围”**，离开了这个“范围”变量便不能被访问

作用域分为：

- 局部作用域（模块作用域、函数作用域、块级作用域）
- 全局作用域

### 局部作用域

局部作用域（非官方定义）分为函数作用域和块级作用域

- 函数作用域：

  - 在函数内部声明变量只能在函数内部被访问，外部无法直接访问
  - 函数的参数也是函数内部的局部变量
  - 不同函数内部声明的变量无法互相访问
  - 函数执行完毕后，函数内部的变量会被回收

  ```js
  function counter(x, y) {
    // 函数内部声明的变量
    const s = x + y;
    console.log(s); // 18
  }
  // 设用 counter 函数
  counter(10, 8);
  // 访问变量 s
  console.log(s); // 报错
  ```

- 块级作用域：

  - 在 JavaScript 中使用 `{ }` 包裹的代码称为代码块，代码块内部声明的变量，外部可能无法访问
  - `let、const`声明的变量会产生块作用域，**var 不会产生块级作用域**
  - 不同代码块之间的变量无法互相访问

  ```js
  {
    // age 只能在该代码块中被访问
    let age = 18;
    console.log(age); // 正常
  }

  // 超出了 age 的作用域
  console.log(age); // 报错

  let flag = true;
  if (flag) {
    // str 只能在该代码块中被访问
    let str = "hello world!";
    console.log(str); // 正常
  }

  // 超出了 age 的作用域
  console.log(str); // 报错

  for (let t = 1; t <= 6; t++) {
    // t 只能在该代码块中被访问
    console.log(t); // 正常
  }

  // 超出了 t 的作用域
  console.log(t); // 报错
  ```

### 全局作用域

- `<script>标签`和`.js文件`的**最外层**就是全局作用域，在此声明的变量在函数内部也可以被访问。全局作用域中声明的变量，任何其它作用域都可以被访问

- 为 window 对象动态添加的属性默认是全局变量

- 函数中未使用任何关键字声明的变量为全局变量

- 尽可能少的声明全局变量，防止全局变量被污染

  > 如果使用双`script`标签，`script`标签中的变量与函数也是可以共享的（全局作用域中声明的变量，任何其它作用域都可以被访问）

### 作用域链

嵌套关系的作用域串联起来形成了作用域链

- 作用域链本质上是底层的变量查找机制

  - 在函数被执行时，会优先查找当前函数作用域中查找变量
  - **如果当前作用域查找不到，则会依次逐级查找父级作用域直到全局作用域**

- 总结：

  - 相同作用域链中按着从小到大的规则查找变量（每一个函数内部，都隐含着一个对上一级的引用）
  - 子作用域能够访问父作用域，父级作用域无法访问子级作用域

  ```html
  <script>
    //全局作用域
    let a = 1;
    //局部作用域
    function f() {
      let a = 2;
      //局部作用域
      function g() {
        a = 3;
        console.log(a); //3
      }
      g();
      console.log(a); //3
    }
    f();
    console.log(a); //1
  </script>
  ```

### 垃圾回收机制

垃圾回收机制 (Garbage Collection) 简称 GC。JavaScript 中内存的分配和回收都是**自动完成的**，内存在不使用的时候会被垃圾回收器自动回收

如果内存没有被及时回收，就会造成**内存泄露**（本该被释放的内存没有被及时释放）

#### 内存的生命周期

- JS 环境中分配的内存, 一般有如下生命周期：
  - 内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存
  - 内存使用：即读写内存，也就是使用变量、函数等
  - 内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
- 注意：
  - 全局变量一般不会回收（关闭页面才回收）
  - 一般情况下局部变量的值，不使用了会被自动回收掉

#### 垃圾回收机制算法

- 堆栈空间分配区别：
  1. 栈（操作系统）: 由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面
  2. 堆（操作系统）: 一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型放到堆里面

常见的浏览器垃圾回收算法主要有两种：**引用计数法**和**标记计数法**

- **引用计数**：
  - IE 采用的引用计数算法，定义“内存不再使用”，看一个**对象**是否有指向它的引用，没有引用了就回收对象（已淘汰）
  - 算法：
    - 跟踪记录被引用的次数
    - 如果被引用了一次，那么就记录次数 1，多次引用会累加 ++
    - 如果减少一个引用就减 1
    - 如果引用次数是 0 ，则释放内存
  - 存在问题：（嵌套引用 - 循环引用）
    - 如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露
- **标记清除法**：
  - 现代浏览器通用的大多是基于标记清除算法的某些改进算法，总体上一致
  - 算法：
    - 标记清除算法将“不再使用的对象”定义为“无法达到的对象”
    - 从根部（在 JS 中就是全局对象）出发定时扫描内存中的对象，凡是能从根部到达的对象，为仍需使用的对象
    - **那些无法由根部出发触及到的对象被标记为不再使用**，稍后进行回收

![image-20230522150049358.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/d274462dffea4c5b97f389fb6b570a45tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> 垃圾回收机制详细文档：[javascript.info/garbage-col…](https://link.juejin.cn/?target=https%3A%2F%2Fjavascript.info%2Fgarbage-collection)

### 闭包

在 JavaScript 中，函数总是可以访问创建它的上下文，这就叫做`closure`

- **闭包（closure） = 内层函数 + 外层函数的变量**
- 外层函数嵌套内层函数，内层函数访问了外层函数的局部变量，此时就会产生闭包
- 闭包应用：实现数据的私有化、函数柯里化、数据缓存
- 可能引起的问题：内存泄漏，合理泄漏，可继续使用

实现数据私有化

```js
//实现数据私有，无法直接修改count
function fn() {
  let count = 1;
  return function fun() {
    count++;
    console.log(`函数被调用${count}次`);
  };
}
const result = fn();
result();
result();
```

实现 curry 函数

```js
// curry 函数的实现
function curry(fn) {
  return function judge(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return function (...argus) {
      return judge(...args, ...argus);
    };
  };
}
```

## 函数进阶

### 变量提升

变量提升（变量悬挂）是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问（仅存在于 var 声明变量）

- 先把`var`变量提升到当前作用域于最前面。只提升变量声明， 不提升变量赋值
- 注意：
  - 变量在`var`声明之前即被访问，变量的值为`undefined`
  - `let/const` 声明的变量不存在变量提升，未被声明就使用会报语法错误
  - 变量提升出现在相同作用域当中

### 函数提升

函数提升与变量提升比较类似，是指函数在声明之前即可被调用

- 特点：

  - 函数提升到当前作用域的最前面
  - 函数提升能够使函数的声明调用更灵活
  - **函数表达式不存在提升的现象**
  - 函数提升出现在相同作用域当中

- 示例：

  ```js
  //会提升
  fun()
  function fun() {
    ...
  }

  //不会提升
  fn()
  let fn = function() {
    ...
  }

  //只会提升变量，匿名函数不会提升
  console.log(fn) //undefined
  fn() //报错
  var fn = function () {
    console.log('hello')
  }
  ```

### 函数提升和变量提升总结

- JS 代码在执行前会先编译（预处理），函数提升和 var 变量提升就发生在这个阶段
- JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是**所有的变量的声明语句，都会被提升到代码的头部，而赋值或其他运行逻辑会留在原地**，这就叫做变量提升
- 包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理，这种现象称为**提升**
- `JS` 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 `undefined`

#### var 变量提升

- 变量提升就是变量会被提升到作用域的最上层

```js
//原代码
console.log(a); // undefined
var a = 1;
//代码实际执行过程
var a;
console.log(a);
a = 1;

//原代码
a = 2;
var a;
console.log(a); //2
//代码实际执行过程
var a;
a = 2;
console.log(a);
```

- 即使 `if` 语句的条件是 `false`，也一样不影响 `var` 变量提升

```js
function fx() {
  console.log(a); // undefined
  if (false) {
    var a = 1;
  }
  console.log(a); // undefined
}
fx();
```

#### 函数提升

- `JavaScript` 引擎**将函数名视同变量名**，所以采用 `function` 命令声明函数时，整个代码块会提升到它所在的作用域的最开始执行

```js
//函数的提升会把函数值也提升赋值
console.log(f); //此处打印的是完整函数，由此我们可以直接调用
function f() {
  return 123;
}
console.log(f()); //123
function f() {
  return 456;
}
```

- 仅 `function` 定义的函数可以提升，通过变量（`let、const`）创建的函数和箭头函数是不会提升的。但如果是通过 `var`定义的变量来保存函数，也会提升，但不会提升函数值，此处提升的是`var变量`

```js
//原代码
console.log(h); // undefined
var h = function () {
  return 123;
};

//代码实际执行过程
var h;
console.log(h); // undefined
h = function () {
  return 123;
};
```

> 此处变量标识符`h`被提升并分配给所在作用域，但`h`此时并没有赋值（如果它是一个函数声明而不是函数表达式，那么就会赋值）。实际上只有`var`变量`h`被提升到了函数作用域最上面

- 当**函数声明**和**函数表达式**同时存在时，**会优先提升函数声明**，实质上是**函数**优先级高于**变量**优先级

```js
//原代码
console.log(one()); // 7
var one = function () {
  var i = 2,
    j = 3;
  return i + j;
};
console.log(one()); // 5
function one() {
  var i = 3,
    j = 4;
  return i + j;
}

//代码实际执行过程
var one = function () {
  var i = 3,
    j = 4;
  return i + j;
};
console.log(one()); //7
one = function () {
  var i = 2,
    j = 3;
  return i + j;
};
console.log(one()); //5
```

- 函数声明和变量声明使用同一个变量名称时，**函数的优先级高于变量的优先级**

```js
console.log(fx); // fx定义的函数
var fx = "fx";
function fx() {
  console.log("fx is a function");
}
console.log(fx); // fx
```

- 经典综合题

```js
function Shop() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Shop.getName = function () {
  console.log(2);
};
Shop.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Shop.getName(); // 2
getName(); // 4
Shop().getName(); // 1
getName(); // 1
new Shop.getName(); // 2
new Shop().getName(); // 3
new new Shop().getName(); // 3
```

### 函数参数

函数参数分为两种：**动态参数**和**剩余参数**

动态参数：

- `arguments`是函数内部内置的**伪数组变量**，它包含了调用函数时传入的所有实参

  - `arguments`是一个伪数组，**只存在于函数中**
  - `arguments`的作用是动态获取函数的实参
  - 可用通过`for`循环依次得到传递过来的实参
  - **arguments 不支持 forEach**，箭头函数不支持`arguments`

- 示例：

  ```js
  function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  console.log(sum(1, 4, 7, 2, 5, 8, 3, 6, 9));
  //arguments只接受多个参数，其他传参方法均无效
  ```

剩余参数：

- 剩余参数（rest 参数）允许我们将一个不定数量的参数表示为一个数组

- `...`是语法符号，置于最末函数形参之前，用于获取剩余的实参，是一个**真数组**

  ```js
  function getSum(...other) {
    console.log(other); //[1,2,3]
  }
  getSum(1, 2, 3);

  //拓展写法
  function getSum(a, b, ...other) {
    console.log(a); //1
    console.log(b); //2
    console.log(other); //[3,4,5,6]
  }
  getSum(1, 2, 3, 4, 5, 6);
  ```

展开运算符`(...)`：（ spread 运算符）

- 展开运算符`(...)`，将一个数组 / 对象进行展开

- 典型运用场景：求数组最大值（最小值）、合并数组等

  ```js
  //求最大值和最小值
  const arr = [1, 5, 3, 8, 2];
  //console.log(...arr)//1 5 3 8 2
  console.log(Math.max(...arr)); //8
  console.log(Math.min(...arr)); //1

  //合并数组
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2];
  console.log(arr3); //[1, 2, 3, 4, 5, 6]
  ```

> 展开运算符和剩余参数有什么区别？
>
> - 展开运算符主要是：数组展开（拆散）
> - 剩余参数：在函数内部使用，把多个元素收集起来生成一个真数组（凝聚）

### 箭头函数

箭头函数是更简短的函数写法并且不绑定 this，箭头函数的语法比函数表达式更简洁

- 箭头函数更适用于那些本来需要匿名函数的地方

  ```js
  const getMousePosition = (x, y) => ({ x, y }); //意思是x:x,y:y
  ```

#### 基本语法

- 基本写法

  ```js
  const fn = () => {
    //函数体
  };
  ```

- 只有一个参数可以省略小括号

  ```js
  array.forEach((item) => {
    //函数体
  });
  ```

- 若函数体只有一行代码，可以写到一行上，默认带有`return`

  ```js
  js;
  复制代码array.forEach((item) => console.log(item));
  ```

- 语法加括号的函数体返回对象字面量表达式

  ```js
  const fn = () => ({ name: "zs", age: 18 });
  ```

#### 箭头函数参数

- 普通函数有`arguments` 动态参数
- 箭头函数没有`arguments`动态参数，但有剩余参数`...args`

#### 箭头函数 this

- 在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的`this`值

- 箭头函数不会创建自己的`this`，它只会从自己的作用域链的**上一层**沿用`this`

- 使用箭头函数前需要考虑函数中`this`指向。在回调函数使用箭头函数时，`this`为全局的`window`，因此 DOM 事件回调函数不推荐使用箭头函数

- 示例：

  ```js
  //示例一
  const obj = {
    name: "seven",
    age: 18,
    sayHi: function () {
      console.log(this); //obj
      const fn = () => {
        console.log(this); //obj
      };
      fn();
    },
  };
  obj.sayHi();

  //示例二
  btn.addEventListener("click", () => {
    console.log(this); //window
  });

  //示例三
  btn.addEventListener("click", function () {
    setTimeout(() => {
      this.style.color = "yellow"; //btn
    });
  });
  ```

  > **普通函数**`this`指向调用者；**箭头函数**`this`指向上一层作用域的`this`

## 解构赋值

解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值

### 数组解构

数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法

- 基本语法：

  - 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量

  - 变量的顺序对应数组单元值的位置依次进行赋值操作

  - 我们甚至能在数组解构中使用逗号分隔符，来获取任意一个想要的值：

    ```js
    const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c); //1 2 5
    ```

  - 利用数组交换变量

    ```js
    let a = 5,
      b = 8;
    [a, b] = [b, a];
    ```

    > JS 中两个特殊情况需要加分号：
    >
    > 1. 如果是小括号开头的需要加分号
    >
    > ```js
    > (function () {})();
    > (function () {})();
    > ```
    >
    > 1. 如果是中括号开头的需要加分号
    >
    > ```js
    > let a = 5,
    >   b = 8; //此处必须加分号
    > [a, b] = [b, a];
    > ```

  - 使用`rest`参数解构

    ```js
    const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
    console.log(a, b); // 1 2
    console.log(arr); //[3,4,5,7]

    //省略前面两参数
    const [, , ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(arr); //[3, 4, 5, 6, 7, 8, 9, 10]
    ```

### 对象解构

对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法

- 基本语法：

  - 赋值运算符左侧的 `{}` 用于**批量声明变量**，右侧对象的属性值将被赋值给左侧的变量
  - 对象属性的值将被赋值给与属性名相同的变量
  - 注意解构的变量名不要和外面的变量名冲突，否则会报错
  - 对象的属性名一定要和变量名相同
  - 对象中找不到与变量名一致的属性时变量值为`undefined`

- 给新的变量名赋值

  - 可以从一个对象中提取变量并同时修改新的变量名

  ```js
  const user = {
    uname: "小明",
    age: 18,
  };
  const { name: uname, age } = user; //对象内的属性 ：要赋值的变量名
  ```

- 数组对象解构：

  ```js
  const pig = [
    {
      uname: "小明",
      age: 18,
    },
  ];
  const [{ name, age }] = pig;
  ```

- 多级对象解构：

  ```js
  const pig = {
    name: "佩奇",
    family: {
      mother: "猪妈妈",
      father: "猪爸爸",
      brother: "乔治",
    },
    age: 6,
  };
  //按照解构依次剥离即可, 这里的family不是解构出来的
  const {
    name,
    family: { mother, father, brother },
  } = pig;
  ```

- 使用解构赋值将对象作为函数的参数传递：

  ```js
  const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  };

  //这样的操作也可以直接在参数里完成
  const profileUpdate = ({ name, age, nationality, location }) => {};
  ```

- **如果是给事先声明的变量赋值**，则赋值表达式必须包含在一对括号中：

  ```js
  let personName, personAge;
  let person = {
    name: "Matt",
    age: 27,
  };
  ({ name: personName, age: personAge } = person);
  console.log(personName, personAge); // Matt, 27
  ```

## 深入理解对象

创建对象分为三种：`对象字面量`、`new Object`、`构造函数`

- 利用**对象字面量**创建对象：

  ```js
  const obj = {
    name: "pig",
  };
  ```

- 利用**new Object**创建对象：

  ```js
  const obj = new Object({ name: "pig" });
  ```

- 利用**构造函数**创建对象：

  ```js
  function Pig(name) {
    this.name = name;
  }
  const pig = new Pig("佩奇");
  console.log(pig); //{name: '佩奇'}
  ```

### 构造函数

**构造函数是一种特殊的函数**，主要用来创建对象（初始化对象）。构造函数命名一般以**大写字母开头**。通过`new`关键字来**调用**构造函数，可以创建对象

- 通过构造函数创建对象的时候要使用 `new` 操作符。 因为只有这样，JavaScript 才知道要给构造函数创建一个新的实例。 如果不使用 `new` 操作符来新建对象，那么构造函数里面的 `this` 就无法指向新创建的这个对象实例，从而产生不可预见的错误。 **新创建的实例继承了构造函数的所有属性**

- 创建构造函数：

  ```js
  function Pig(name) {
    this.name = name;
  }
  const pig = new Pig("佩奇");
  console.log(pig); //{name: '佩奇'}
  ```

  > - 使用`new`关键字调用函数的行为被称为**实例化**
  > - 实例化构造函数时没有参数时可以省略`()`
  > - 构造函数内部无需写`return`，返回值即为新创建的对象

- `new`实例化执行过程：

  - 创建新空对象（在内存中开辟空间，创建一个对象）
  - 构造函数`this`指向新对象
  - 执行构造函数代码
  - 返回新对象

### 实例成员&静态成员

**实例成员**

- 通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员（包括实例属性和实例方法）

- **构造函数创建的实例对象彼此独立互不影响**

  ```js
  function Person() {
    this.name = "小明";
    this.sayHi = function () {
      console.log("大家好~");
    };
  }
  const p1 = new Person(); //实例对象
  //其中p1的name、sayHi即为实例成员
  ```

**静态成员**

- 构造函数的属性和方法被称为静态成员（静态属性和静态方法）

- 当前构造函数创建出来的实例的公共数据

  ```js
  function Person() {
    this.name = "小明";
    this.sayHi = function () {
      console.log("大家好~");
    };
  }
  Person.eyes = 2;
  Person.walk = function () {
    console.log("走路");
  };
  //这里的eyes、walk就是静态成员
  ```

  > - 静态成员只能构造函数来访问
  > - 静态方法中的 this 指向构造函数

### 一切皆对象

- 引用类型

  - Object、Array、RegExp、Date（均为对象）

- 基本数据类型

  - string、number、boolean、undefined、null

  > 其实 string、number、boolean 等基本类型也都有专门的构造函数，这些我们称为**包装类型**

- 包装类型

  - String、Number、Boolean

- 包装类型执行过程

  - 创建一个 String 类型实例

  - 调用实例上的特定方法

  - 销毁实例

    ```js
    const str = "pig";
    let _str = new String(str); //包装
    console.log(_str.length); // 调用实例上的特定方法
    _str = null; //释放
    ```

  > JS 中几乎所有的数据都可以基于构造函数创建，不同的构造器创建出来的数据拥有不同的属性和方法

## JS 内置构造函数

> 本节更多内容请跳转 [JavaScript 对象常用方法](https://juejin.cn/post/7237065395941785659)

### Object

- Object 是内置的构造函数，用于创建普通对象

- 推荐使用`字面量`方式声明对象，而不是`Object`构造函数

  ```js
  const user = new Object({ name: "小明", age: 15 });
  const user = { name: "小明", age: 15 };
  ```

- Object 常用静态方法

  - `Object.keys()`： 获取对象中所有属性名（键） ，返回的是一个数组，数组中存放所有的键

  - `Object.values()`：获取对象中所有属性值（值），返回的是一个数组，数组中存放所有的值

  - `Object.assign()`：常用于对象拷贝，返回新对象

    ```js
    //拷贝对象 把 o 拷贝给 obj
    const o = { name: "佩奇", age: 6 };
    const obj = {};
    Object.assign(obj, o);
    console.log(obj); //{name:'佩奇', age: 6}
    //推荐方法
    const o1 = Object.assign({}, o);
    ```

### Array

- `Array`是内置的构造函数，用于创建数组

- 创建数组建议使用字面量创建，不用`Array`构造函数创建

  | 方法       | 作用     | 说明                                                         |
  | ---------- | -------- | ------------------------------------------------------------ |
  | ` forEach` | 遍历数组 | 不返回，用于不改变值，经常用于查找打印输出值                 |
  | `filter`   | 过滤数组 | 筛选数组元素，并生成新数组                                   |
  | `map   `   | 迭代数组 | 返回新数组，新数组里面的元素是处理之后的值，经常用于处理数据 |
  | `reduce`   | 累计器   | 返回函数累计处理的结果，经常用于求和等                       |

伪数组转换为真数组

- 常见伪数组：函数里的`arguments`对象、`querySelectorAll` 等获得、`元素.children`

- 静态方法：

  ```
  Array.from()
  ```

  - 返回新数组（真数组）
  - 不修改原数组

### String

常用方法一图流：

![image-20230528155842488.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/6d4d2ea22f324339b40ca381a549e14ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### Number

- Number 是内置的构造函数，用于创建数值

- 常用方法：

  - toFixed(保留位数长度) 设置保留小数位的长度

    ```js
    // 数字 toFixed 方法
    const num = 12.345;
    console.log(num.toFixed(2)); // 12.35
    console.log(num.toFixed(1)); // 12.3
    const num1 = 12;
    console.log(num1.toFixed(2)); // 12.00
    ```

### 拓展-parseInt

- `parseInt()`函数可解析一个字符串，并返回一个整数

- 语法：

  ```js
  parseInt(string, radix);
  ```

- 参数：

  | 参数     | 说明                                                                                                                                                                                                                                                                                      |
  | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _string_ | 要解析的字符串                                                                                                                                                                                                                                                                            |
  | _radix_  | **1)** 可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间 **2)** 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数；以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数 **3)** 如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN |

- 示例：

  ```js
  //注意：
  //1：只有字符串中的第一个数字会被返回
  //2：开头和结尾的空格是允许的
  //3：如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN

  parseInt("689090", 8); //6  只解析小于8的
  parseInt("8f89090", 8); //NaN  8不在8进制范围内
  parseInt("8000", 0) //8000 以10为基数解析
    [
      //经典案例
      ("1", "2", "3")
    ].map(parseInt);
  //[1, NaN, NaN]
  //其实就是["1", "2", "3"].map((item,index)=>{return parseInt(item,index)})
  ```

## 原型

### 构造函数封装

封装是面向对象思想中比较重要的一部分，JS 面向对象可以通过构造函数实现封装

- 把公共的属性和方法抽取封装到构造函数里面来实现数据的共享，这样创建的实例对象可以使用这些属性和方法

  ```js
  //构造函数实现封装
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
      console.log("hi~");
    };
  }
  //实例对象使用属性和方法
  const zs = new Person("张三", 18);
  const ls = new Person("李四", 19);
  ```

> 浪费内存，构造函数中函数多次创建，占用内存（函数也是对象，会另外开辟空间）为了解决这个问题 JavaScript 引入了**原型**的概念

### 原型对象

JavaScript 规定，每一个构造函数都有一个`prototype`属性，指向另一个对象，所以我们也称为**原型对象**

- 原型对象可以挂载属性和方法，对象实例化不会多次创建原型上的属性和方法，节约内存

- 构造函数通过原型分配的属性和方法是所有对象所共享的

- **构造函数和原型对象中的 this 都指向实例化的对象**

  > 箭头函数不能作为构造函数（箭头函数没有`this`）

- 示例：

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.sayHi = function () {
    console.log(this.name + "hi~");
  };
  Person.prototype.eat = function () {
    console.log(this.name + "eating~");
  };
  Person.prototype.class = "101";
  const zs = new Person("张三", 18);
  const ls = new Person("李四", 19);

  zs.sayHi(); // 张三hi~
  zs.eat(); // 张三eating~
  ls.sayHi(); // 李四hi~
  ls.eat(); // 李四eating~
  console.log(zs.class); // 101
  console.log(ls.class); // 101
  ```

### constructor 属性

每个原型对象里面都有个`constructor`属性

- 该属性指向该原型对象的构造函数
- `构造函数.prototype.constructor === 构造函数`
- **原型对象**找**构造函数**：`原型对象(构造函数.prototype).constructor`
- **实例对象**找**构造函数**：`实例对象.__proto__.constructor`（此处`__proto__`可省）

使用场景：

- 如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 `constructor` 就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 `constructor` 来指向原来的构造函数

```js
function Star(name) {
  this.name = name;
}
Star.prototype = {
  constructor: Star, //重新指回，此处不能使用this（指向window）
  sing() {
    console.log("唱歌");
  },
  dance() {
    console.log("跳舞");
  },
};
const pig = new Star("GGBang"); //创建对象一定要在修改原型之后
pig.sing(); //唱歌
```

### 对象原型

实例对象都会有一个属性 `__proto__` 指向构造函数的原型对象，之所以实例对象可以使用构造函数的原型对象上的属性和方法，就是因为对象有 `__proto__`属性的存在

- 注意：
  - `__proto__` 是 JS 非标准属性
  - `[[prototype]]`和`__proto__`意义相同，用来表明当前实例对象指向哪个原型对象

![image-20230529072137638.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/791769357a6b4d8f9fec00c12183b648tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 原型继承

继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助**原型对象实现继承的特性**

> 有一条原则叫做：Don't Repeat Yourself。常以缩写形式 DRY 出现，意思是“不要自己重复”。 编写重复代码会产生的问题是：任何改变都需要去多个地方修复所有重复的代码。 这通常意味着我们需要做更多的工作，会产生更高的出错率。根据以上所说的 DRY 原则，我们可以通过创建一个 `supertype`（或者父类）来重写重复的代码

- 封装：抽取公共部分

- 继承：通过原型对象实现继承

- 示例代码：

  ```js
  function Person() {
    this.eyes = 2;
  }
  Person.prototype.sayHi = function () {
    console.log("hi~");
  };

  function Man() {}
  function Woman() {}

  //给每个构造函数分配一个原型对象
  Man.prototype = new Person();
  Woman.prototype = new Person();
  //将原型对象指向对应的构造函数
  Man.prototype.constructor = Man;
  Woman.prototype.constructor = Woman;

  //为不同的原型对象添加公共方法
  Man.prototype.drinking = function () {
    console.log("喝酒");
  };
  Woman.prototype.shopping = function () {
    console.log("购物");
  };

  //实例化对象
  const man = new Man();
  const woman = new Woman();

  //调用其不同的方法
  man.sayHi(); //hi~
  woman.sayHi(); //hi~
  woman.shopping(); //购物
  man.drinking(); //喝酒
  console.log(man.eyes); //2
  console.log(woman.eyes); //2
  ```

### 原型链

基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，**我们将原型对象的链状结构关系称为原型链**

- JavaScript 中，被继承的函数称为**超类型（父类、基类）** ，继承的函数称为**子类型（子类、派生类）**
- **注意：** `Object` 是 JavaScript 中所有对象的 `supertype`（超类，父型），也就是原型链的最顶层

![Snipaste_2023-06-02_15-16-46.png](JavaScript%E5%9F%BA%E7%A1%80%E4%B8%8E%E6%A0%B8%E5%BF%83.assets/bff5ebe6e60141308b97b2663501ae20tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> 除了上面关系外，在 JavaScript 中 Function 为**所有函数**的**构造函数**，并且 Function 继承于 Object 于是有：
>
> - `Person.__proto__` === `Function.prototype`
> - `Function.prototype.__proto__` === `Object.prototype`

查找规则：

- 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性
- 如果没有就查找它的原型（`__proto__`指向的原型对象）
- 如果还没有就查找原型对象的原型（Object 的原型对象）
- 依此类推一直找到 Object 为止（null）
- `__proto__`对象原型的意义就在于为对象成员查找机制提供一个方向（一条路线）

```
instanceof
```

- 可以使用`instanceof`运算符用于检测构造函数的`prototype`属性*是否出现在某个实例对象的原型链上*
- 与`typeof`区别：
  - `typeof`用于判断基本数据类型
  - `instanceof`用于判断引用数据类型

```js
// 实例对象  instanceof  构造函数
function Person(name) {
  this.name = name;
}

function Person1(name) {
  this.name = name;
}
const zs = new Person("张三");
console.log(zs instanceof Person); // true
console.log(zs instanceof Person1); // false

// 数组
const arr = [1, 2, 3];
console.log(arr instanceof Array); //  true
console.log(arr instanceof Object); //  true
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Array.__proto__ === Function.prototype); //true
```

### 继承实现

#### 原型链继承

原型链继承是 JavaScript 中最基本的继承方式，它通过**将子类的原型指向父类的实例**来实现继承，继承到的属性

```js
// 父类
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

// 子类
function Dog() {}

Dog.prototype = new Animal("Default"); // 原型链继承
Dog.prototype.constructor = Dog;

const dog1 = new Dog();
dog1.sayName(); //Default
```

原型链继承会有一些问题：

- **共享属性：** 所有实例共享原型对象上的属性和方法。如果一个实例修改了原型上的属性，其他所有实例也会受到影响。这可能导致意外的行为，特别是在修改引用类型的属性时
- **无法向父类传递参数：** 在使用原型链继承时，子类无法向父类构造函数传递参数。所有子类实例都会共享相同的父类实例，无法在创建子类实例时为父类构造函数传递参数
- **原型对象上的引用类型属性共享：** 如果原型对象上有引用类型的属性，那么所有实例将共享相同的引用，可能导致修改一个实例的属性会影响其他实例

以上代码略微改动：

```js
// 父类
function Animal(name) {
  this.name = name;
  this.play = [1, 2, 3];
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

// 子类
function Dog() {}

Dog.prototype = new Animal("Default"); // 原型链继承
Dog.prototype.constructor = Dog;

const dog1 = new Dog();
const dog2 = new Dog();

console.log(Dog.prototype.name); // 输出 "Default"
console.log(dog1.name); // 输出 "Default"
console.log(dog2.name); // 输出 "Default"

dog1.name = "New Dog 1"; // 修改实例的属性，不影响其他实例
console.log(Dog.prototype.name); // 输出 "Default"
console.log(dog1.name); // 输出 "New Dog 1"
console.log(dog2.name); // 输出 "Default"

Dog.prototype.name = "New Default"; // 修改原型对象上的属性，影响所有实例
console.log(Dog.prototype.name); // 输出 "New Default"
// dog1实例上name属性覆盖了原型对象上的name属性
console.log(dog1.name); // 输出 "New Dog 1"
console.log(dog2.name); // 输出 "New Default"

// 使用push等方法直接修改原数组时，其他实例对象也会受到影响
console.log(dog1.play); // [1, 2, 3]
console.log(dog2.play); // [1, 2, 3]
dog1.play.push(4); // 此处修改的是原型链上的play属性，而不是在dog1对象上新增
// 如若改成 dog1.play = [1, 2, 3, 4] 则dog2不受影响
console.log(dog1.play); // [1, 2, 3, 4]
console.log(dog2.play); // [1, 2, 3, 4]
```

在 JavaScript 中，当实例对象访问一个属性时，它会按照以下顺序查找：

1. **实例对象自身属性：** 如果实例对象直接拥有该属性，就返回该属性的值
2. **原型链上的属性：** 如果实例对象没有直接拥有该属性，JavaScript 引擎会沿着原型链向上查找，找到第一个拥有该属性的对象，并返回该属性的值

此外，实例上的属性会覆盖原型链上的同名属性

#### 构造函数继承

构造函数继承通过在子类构造函数中使用 `call()` 或 `apply()` 方法来调用父类构造函数，并传递子类实例作为上下文，从而实现继承

构造函数继承优化了原型链继承中：共享属性造成的问题、无法向父类传参的问题、修改原型对象造成的问题

```js
//父类
function Animal(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi, I am " + this.name);
  };
}

Animal.prototype.walk = function () {
  console.log(this.name + " is walking.");
};

//子类
function Dog(name, breed) {
  Animal.call(this, name); // 调用父类构造函数，继承父类属性
  this.breed = breed;
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name); // 输出：Buddy
console.log(dog.breed); // 输出：Golden Retriever
dog.sayHi(); // 输出：Hi, I am Buddy
dog.walk(); // 报错，walk() 方法未被继承
```

> 使用构造函数继承只能继承父类的实例属性和方法，不能继承原型属性或者方法

#### 组合继承

组合继承是将原型链继承和构造函数继承结合起来使用的方式，它通过调用父类构造函数并设置子类原型指向父类的实例来实现继承

```js
// 父类
function Animal(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi, I am " + this.name);
  };
}

Animal.prototype.sayName = function () {
  console.log(this.name);
};

// 子类
function Dog(name, breed) {
  // 使用构造函数继承，继承实例属性
  Animal.call(this, name);
  this.breed = breed;
}

// 使用原型链继承，继承原型上的方法
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

const dog = new Dog("Buddy", "Golden Retriever");

// 原型的方法
dog.sayName(); // 输出 "Buddy"
// 父类的方法
dog.sayHi(); // 输出 "Hi, I am Buddy"
console.log(dog.breed); // 输出 "Golden Retriever"
```

**原型链继承**：本质是通过**原型对象**来**间接**继承父类的实例属性和方法（父类属性和方法全部挂载在原型对象上）

**构造函数继承**：直接继承父类的实例属性和方法（父类属性和方法在子类实例对象上），但不能继承原型上的属性和方法（实现上毕竟没有任何联系）

**组合继承**：包含上述两种继承的优点，父类的实例属性和方法在子类实例对象上，同时也继承了原型上的属性和方法

> 组合继承依然有一个小缺点，就是在调用父类构造函数时会调用两次，一次是为了继承实例属性，另一次是为了继承原型上的方法。这个问题可以通过使用 ES6 的 `Object.create()` 或者其他方式来避免

#### 寄生组合继承

寄生组合继承是**为了解决组合继承的一些性能问题**而提出的一种继承方式

组合继承的问题：在创建子类实例时，父类的构造函数会被调用两次，一次是为了创建子类实例的属性，另一次是为了设置子类原型链上的方法

寄生组合继承在组合继承的基础上进行了改进：

- **利用寄生（parasitic）方式修复子类原型：** 创建一个空的中间构造函数，该构造函数的原型对象是父类的原型对象的副本。这样，就不需要调用父类构造函数来创建不必要的属性
- **设置子类的原型为中间构造函数的实例：** 这一步与组合继承相同，将子类的原型设置为一个父类的实例，但这次不再是直接使用 `new Parent()`，而是使用一个临时的构造函数，该构造函数的原型是 `Parent.prototype` 的副本

> `Object.create()`静态方法以一个现有对象作为原型，创建一个新对象

```js
function inheritPrototype(child, parent) {
  // 此处无需再调用一次父类构造函数
  child.prototype = Object.create(parent.prototype);
  child.prototype.constructor = child;
}

// 父类
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

// 子类
function Dog(name, breed) {
  // 调用父类构造函数
  Animal.call(this, name);
  this.breed = breed;
}

// 利用寄生组合继承
inheritPrototype(Dog, Animal);

Dog.prototype.bark = function () {
  console.log("Woof!");
};

var myDog = new Dog("Buddy", "Golden Retriever");
// 调用父类的方法
myDog.sayName(); //My name is Buddy
// 调用子类的方法
myDog.bark(); //Woof!
```

## 深浅拷贝

浅拷贝和深拷贝只针对引用类型

### 浅拷贝

把对象拷贝给一个新的对象，只能拷贝单层（多层，遇到对象则是直接拷贝的引用地址）

- 常用方法：

  - 拷贝对象：`Object.assgin()`、展开运算符 `{...obj}`
  - 拷贝数组：`Array.prototype.concat()` 或者 `[...arr]`，当然其他返回新数组的方法也可以实现浅拷贝

- 示例：

  ```js
  // 对象拷贝
  const obj = {
    name: "jack",
    age: 18,
  };
  const newObj1 = Object.assign({}, obj);
  const newObj2 = { ...obj };
  console.log(newObj1); //{ name: 'jack', age: 18 }
  console.log(newObj2); //{ name: 'jack', age: 18 }

  //数组拷贝
  const arr = [1, 2, 3];
  const newArr1 = [].concat(arr);
  const newArr2 = [...arr];
  console.log(newArr1); //[ 1, 2, 3 ]
  console.log(newArr2); //[ 1, 2, 3 ]
  ```

> 直接赋值和浅拷贝有什么区别？
>
> - 直接赋值的方法，只要是对象，都会相互影响，因为是直接拷贝对象栈里面的**地址**
> - 浅拷贝如果是一层对象，不相互影响，如果出现多层对象拷贝还会相互影响
>
> 浅拷贝怎么理解？
>
> - 拷贝对象之后，里面的属性值是**简单数据类型直接拷贝值**
> - 如果属性值是引用数据类型则**拷贝的是地址**

### 深拷贝

深拷贝是逐层拷贝，针对引用类型数据中的属性做深层次的复制，基本数据类型直接赋值，引用数据类型会创建一个新的对象再拷贝其中的值。**深拷贝实现原理是递归**

#### 递归实现深拷贝

- 函数递归

  - **如果一个函数在内部可以调用其本身，那么这个函数就是递归函数**
  - 简单理解：函数内部自己调用自己，这个函数就是递归函数，用于重复执行相同逻辑
  - 由于递归很容易溢栈（stack overflow），所以**必须要加退出条件 return**

- 通过递归实现深拷贝

  ```js
  //方法一
  function deepCopy(newObj, oldeObj) {
    for (let k in oldeObj) {
      if (oldObj[k] instanceof Array) {
        newObj[k] = [];
        deepCopy(newObj[k], oldeObj[k]);
      } else if (oldObj[k] instanceof Object) {
        newObj[k] = {};
        deepCopy(newObj[k], oldeObj[k]);
      } else {
        newObj[k] = oldObj[k];
      }
    }
  }

  //方法二
  function cloneDeep(oldObj) {
    let newObj = Array.isArray(oldObj) ? [] : {};
    for (let k in oldObj) {
      if (typeof oldObj[k] !== "object") {
        newObj[k] = oldObj[k];
      } else {
        newObj[k] = cloneDeep(oldObj[k]);
      }
    }
    return newObj;
  }
  ```

#### lodash/cloneDeep 实现深拷贝

- js 库 lodash 里面 cloneDeep 内部实现了深拷贝，本质就是更彻底的递归

- 官网地址：[www.lodashjs.com/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.lodashjs.com%2F)

  ```js
  //使用前先引入lodash
  <script src="lodash.js"></script>;
  const obj = {
    uname: "pekiy",
    age: 18,
    hobby: ["篮球", "足球"],
    family: {
      baby: "littlePekiy",
    },
  };
  //语法：_.cloneDeep(要被克隆对象)
  const o = _.cloneDeep(obj);
  o.family.baby = "pig";
  ```

#### 序列化与反序列化实现

- 先使用`JSON.stringify()`序列化，再使用`JSON.parse()`反序列化

  > JSON 序列化就是将数据对象转换为 JSON 字符串

- **注意：** 序列化时会丢弃对象中的**函数**和**undefined 属性**

  ```js
  const obj = {
    uname: "pekiy",
    age: 18,
    hobby: ["篮球", "足球"],
    family: {
      baby: "littlePekiy",
    },
  };
  const o = JSON.parse(JSON.stringify(obj));
  o.family.baby = "pig";
  ```

## 异常处理

### throw 抛异常

异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行

- `throw` 抛出异常信息，程序也会终止执行

- `throw` 后面跟的是错误提示信息

- `Error`（内置对象）对象配合`throw`使用，能够设置更详细的错误信息

  ```js
  throw new Error("程序执行错误了~");
  ```

### try/catch 捕获异常

我们想要测试某些代码是否有异常，可以通过`try / catch`捕获错误信息（浏览器提供的错误信息）

- 将预估可能发生错误的代码写在`try`代码段中
- 如果`try`代码段中出现错误后，会执行`catch`代码段，并截获到错误信息
- `finally`不管是否有错误，都会执行

### debugger

- debugger 语句调用调试功能，例如设置断点

## 深入理解 this

### this 指向

this 不是静态的，this 在运行时才绑定。它的绑定和函数声明的位置没有关系，只取决于函数调用的方式

> this 指向有一个优先级链，后者不能更改前者的 this 指向
>
> - `箭头函数` > `new关键字` > `bind、apply、call > obj.` >`直接调用` > `不在函数里`

- **普通函数**
  - 普通函数的调用方式决定了 this 的值，即谁调用 this 的值指向谁
  - 严格模式下指向 undefined
- **箭头函数**
  - 箭头函数中的 this 与普通函数完全不同，**也不受调用方式**的影响，事实上箭头函数中并不存在 this
  - 箭头函数会默认帮我们绑定外层 this，所以在箭头函数中 this 的值和外层的 this 是一样的。向外层作用域中，一层一层查找 this，直到有 this 的定义
  - **箭头函数不会被函数更改（call、apply、bind）**
- **new 关键字**
  - 当使用 new 关键字调用构造函数时，构造函数和原型对象中的 this 一定指向新创建的对象
  - 注意：箭头函数不能作为构造函数
- **直接调用**
  - 直接调用 this 会指向 window，如函数嵌套函数，函数内部调用函数，内部调用的函数 this 指向 window
- **立即执行函数**
  - 一般情况下指向 window

> - 在非严格模式下：this 不能是 undefined 或 null。当 this 指向为 undefined 或 null 时，this 会指向全局对象
> - 在严格模式下：this 会区分指向，正常指向 undefined 和 null

### 改变 this 指向

#### call( )

```
call()
```

- 立即调用一个函数，并指定函数内部的 `this` 值

- 如果`call()`传入的`this`上下文是`undefined`或`null`，那么`window`对象将成为默认的`this`上下文

- 语法：

  ```js
  fun.call(thisArg, arg1, arg2, ...)
  //thisArg：在 fun 函数运行时指定的 this 值
  //arg1，arg2：传递的其他参数
  ```

常见用法：

- `Object.prototype.toString.call(数据)` 检测数据类型

  ```js
  //检查数据类型（重写）
  function checkType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }
  ```

- 使用`call`实现属性继承（继承中常用）

#### apply( )

```
apply()
```

- 立即调用一个函数，并指定函数内部的 `this` 值

- 语法：

  ```js
  fun.apply(thisArg, [argsArray]);
  //thisArg：在fun函数运行时指定的 this 值
  //argsArray：传递的值，必须包含在数组里面
  ```

常见用法：

- 主要用于数组

  ```js
  //es6之前可以用于求数组的最大值
  const arr = [1, 6, 12, 2, 33];
  console.log(Math.max.apply(null, arr));
  ```

#### bind( )

```
bind()
```

- `bind()` 方法**不会调用函数**，但是能改变函数内部`this`值

- `bind()` 会**返回一个新的函数**，该函数是改变 this 后的原函数的拷贝

- 语法：

  ```js
  fun.bind(thisArg, arg1, arg2, ...)
  //thisArg：在 fun 函数运行时指定的 this 值
  //arg1，arg2：传递的其他参数
  ```

常见用法：

- 只改变 this 指向，不调用函数时，可以使用 bind。比如改变定时器内部的 this 指向

  ```js
  const obj = {
    message: "Hello",
    greet: function () {
      console.log(this.message);
    },
  };

  // 使用 bind 修改 setTimeout 内部回调函数的 this 指向
  setTimeout(obj.greet, 1000); //undefined
  setTimeout(obj.greet.bind(obj), 1000); //Hello
  ```

#### 总结

| 相同点         | 方法  | 传递参数             | 是否调用函数 | 使用场景                                     |
| -------------- | ----- | -------------------- | ------------ | -------------------------------------------- |
| 改变 this 指向 | call  | 参数列表 arg1, arg2. | 调用函数     | Object.prototype.toString.call()检测数据类型 |
| 改变 this 指向 | apply | 数组、伪数组         | 调用函数     | 跟数组相关，比如求数组最大值和最小值等       |
| 改变 this 指向 | bind  | 参数列表 arg1,arg2.. | 不调用函数   | 改变定时器内部的 this 指向                   |

### this 指向面试题

#### 基础部分

> 本节只需要搞懂前几题，后续的题无非就是变种，本质上还是一个东西

- let、const 变量不会挂载到 window

```js
let a = 1;
const b = 2;
var c = 3;
function print() {
  console.log(this.a); //undefined
  console.log(this.b); //undefined
  console.log(this.c); //3
}
print();
```

- **当函数不作为对象的方法调用时（隔了一层，相当于直接调用函数）** ，`this` 会指向全局对象

```js
a = 1;
function foo() {
  console.log(this.a);
}
const obj = {
  a: 10,
  bar() {
    foo(); // 1，this指向window
  },
};
obj.bar();
```

- 事件回调函数中，this 已经被封装指向对应的元素；不能用箭头函数，否则会指向 window

```js
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // <button id="btn"></button>
});
```

- 立即执行函数中，this 指向 window

```js
a = 1;
(function () {
  console.log(this); //window
  console.log(this.a); //1
})();
function bar() {
  b = 2;
  (function () {
    console.log(this); //window
    console.log(this.b); //2
  })();
}
bar();
```

- 对象链式调用，this 绑定最近的对象

```js
var obj1 = {
  a: 1,
  obj2: {
    a: 2,
    foo() {
      console.log(this.a);
    },
  },
};
obj1.obj2.foo(); // 2
```

- 浏览器环境中，没有明确指定调用对象时，`this` 默认指向全局对象，通常是 `window`。此处的`foo()`不是`window.foo()`

```js
a = 1;
var obj = {
  a: 2,
  foo() {
    console.log(this.a);
  },
};
let foo = obj.foo;
obj.foo(); // 2
foo(); // 1
```

- `obj2.foo`指向了`obj.foo`的堆内存，此后执行与`obj`无关

```js
var obj = {
  a: 1,
  foo() {
    console.log(this.a);
  },
};
var a = 2;
var foo = obj.foo;
var obj2 = { a: 3, foo: obj.foo };

obj.foo(); //1
foo(); //2
obj2.foo(); //3
```

- `call`改变`this`指向，注意返回函数中的`this`，万变不离其宗

```js
var obj = {
  a: "obj",
  foo: function () {
    console.log("foo:", this.a);
    return function () {
      console.log("inner:", this.a);
    };
  },
};
var a = "window";
var obj2 = { a: "obj2" };

obj.foo()();
obj.foo.call(obj2)();
obj.foo().call(obj2);

//输出结果：
// foo: obj
// inner: window
// foo: obj2
// inner: window
// foo: obj
// inner: obj2
```

- `call`使用，较为复杂题，本质上与上题一样

```js
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a;
    return function (c) {
      console.log(this.a + b + c);
    };
  },
};
var a = 2;
var obj2 = { a: 3 };

obj.foo(a).call(obj2, 1); //6
obj.foo.call(obj2)(1); //6
```

- 使用`call、apply、bind`链式调用，以第一次为准

```js
obj = {
  _name: "obj",
  func() {
    const arrowFunc = () => {
      console.log(this._name);
    };
    return arrowFunc;
  },
};

obj.func()(); //obj
func = obj.func;
func()(); //undefined, 直接调用, this指向window
obj.func.bind({ _name: "newObj" })()(); //newObj
obj.func.bind()()(); //undefined, 此处this指向window
obj.func.bind({ _name: "bindObj" }).apply({ _name: "applyObj" })(); //bindObj
```

- 箭头函数没有自己的`this`，它的`this`指向外层作用域的`this`，且**指向函数定义时的 this 而非执行时**

```js
name = "tom";
const obj = {
  name: "zc",
  intro: function () {
    return () => {
      console.log("My name is " + this.name);
    };
  },
  intro2: function () {
    return function () {
      console.log("My name is " + this.name);
    };
  },
};
obj.intro2()(); //My name is tom
obj.intro()(); //My name is zc
```

- 箭头函数没有`this`，不能通过`call/apply/bind`来修改`this`指向，但可以通过**修改外层作用域**的`this`来达成间接修改

```js
var name = "window";
var obj1 = {
  name: "obj1",
  intro: function () {
    console.log(this.name);
    return () => {
      console.log(this.name);
    };
  },
  intro2: () => {
    console.log(this.name);
    return function () {
      console.log(this.name);
    };
  },
};
var obj2 = {
  name: "obj2",
};
obj1.intro.call(obj2)(); //obj2 obj2
obj1.intro().call(obj2); //obj1 obj1
obj1.intro2.call(obj2)(); //window window
obj1.intro2().call(obj2); //window obj2
```

- 本题为上文全部类型的集合

```js
var name = "window";
var user1 = {
  name: "user1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};
var user2 = { name: "user2" };

user1.foo1(); //user1
user1.foo1.call(user2); //user2

user1.foo2(); //window
user1.foo2.call(user2); //window

user1.foo3()(); //window
user1.foo3.call(user2)(); //window
user1.foo3().call(user2); //user2

user1.foo4()(); //user1
user1.foo4.call(user2)(); //user2
user1.foo4().call(user2); //user1
```

#### 综合提升

- `(foo.bar = foo.bar)()`意为赋值并调用，类似于取别名；`(foo.bar, foo.bar)`逗号表达式，前后执行完后返回右边表达式的结果

```js
var x = 10;
var foo = {
  x: 20,
  bar: function () {
    var x = 30;
    console.log(this.x);
  },
};
foo.bar(); //20
foo.bar(); //20
(foo.bar = foo.bar)(); //10，这里相当于是一个新的函数，在全局作用域内执行
(foo.bar, foo.bar)(); //10，这里相当于是一个新的函数，在全局作用域内执行
```

> 本题了解即可，没有太大意义

- `arguments`为伪数组，实际上是一个对象，不过对象属性有 0、1、2 编号，并且有 length 属性

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0](); //这里相当于arguments.fn(), 对象中[]与.可以互换
  },
};

obj.method(fn, 1); //10 2
```

- JavaScript 作用域链为静态，在函数定义时就已经确定；对象中的立即执行函数，会在对象创建时自动执行

```js
var number = 5;
var obj = {
  number: 3,
  fn: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    };
  })(),
};
var myFun = obj.fn;
myFun.call(null);
obj.fn();
console.log(window.number);

//输出结果为：
//10
//9
//3
//27
//20
```

## 性能优化

### 防抖

单位时间内，频繁触发事件，**只执行最后一次**

- 使用场景

  - 搜索框搜索输入，只需用户最后一次输入完，再发送请求
  - 手机号、邮箱验证输入检测

- 原理：

  ```js
  function debounce(fn, t) {
    let timerId;
    return function () {
      clearTimeout(timerId); //空或undefined都不会报错
      timerId = setTimeout(() => fn(), t);
    };
  }
  ```

### 节流

单位时间内，频繁触发事件，**只执行一次**

- 使用场景

  - 高频事件：鼠标移动 mousemove、页面尺寸缩放 resize、滚动条滚动 scroll 等等

- 原理：

  ```js
  function throttle(fn, t) {
    let timerId;
    return function () {
      if (!timerId) {
        timerId = setTimeout(() => {
          fn();
          timerId = null;
        }, 300);
      }
    };
  }
  ```

## 异步编程

- Promise 是异步编程的一种解决方案 - 它在未来的某时会生成一个值。 任务完成，分执行成功和执行失败两种情况。 `Promise` 是构造器函数，需要通过 `new` 关键字来创建。 构造器参数是一个函数，该函数有两个参数 - `resolve` 和 `reject`。 通过它们来判断 promise 的执行结果。 用法如下：

  ```js
  const myPromise = new Promise((resolve, reject) => {});
  ```

- Promise 有三个状态：`pending`、`fulfilled` 和 `rejected`。 上一个例子创建的 promise 一直阻塞在 `pending` 状态里，因为没有调用 promise 的完成方法。 Promise 提供的 `resolve` 和 `reject` 参数就是用来结束 promise 的

- Promise 成功时调用 `resolve`，promise 执行失败时调用 `reject`， 如下文所述，这些方法需要有一个参数

  ```js
  const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });
  ```

  > 上面的示例使用字符串作为这些函数的参数，但参数实际上可以是任何格式。 通常，它可能是一个包含数据的对象，你可以将它放在网站或其他地方

- 当程序需要花费未知的时间才能完成时（比如一些异步操作），一般是服务器请求，promise 很有用。 服务器请求会花费一些时间，当结束时，需要根据服务器的响应执行一些操作。 这可以用 `then` 方法来实现， 当 promise 完成 `resolve` 时会触发 `then` 方法。 例子如下：

  ```js
  myPromise.then((result) => {}); //result 即传入 resolve 方法的参数
  ```

- 当 promise 失败时会调用 `catch` 方法。 当 promise 的 `reject` 方法执行时会直接调用。 用法如下：

  ```js
  myPromise.catch((error) => {}); //error 是传入 reject 方法的参数
  ```
