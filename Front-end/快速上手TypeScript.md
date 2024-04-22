# TypeScript 概念

## 基本概念

TypeScript 是一门专为开发**大规模 JavaScript 应用程序**而设计的编程语言，是 JavaScript 的**超集**。**类型系统**是它的核心特性，开发者可以使用类型注解为程序添加静态类型信息（非强制）

TypeScript 支持**类型推断**，编译器能够自动推断出大部分表达式的类型信息，开发者只需要在程序中添加少量的类型注解便能拥有完整的类型信息

- TypeScript = Type + JavaScript（在 JS 基础之上，**添加了静态类型支持**）
- TypeScript 是**微软 C#之父**开发的开源编程语言，可以在任何运行 JavaScript 的地方运行
- TypeScript 需要编译才能在浏览器运行（编译成 JavaScript 代码）

JavaScript 代码：

```js
// 没有明确的类型
let age = 18;
```

TypeScript 代码：

```ts
// 有明确的类型，可以指定age是number类型(数值类型)
let age: number = 18;
```

![image-20230828093532849.png](%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8BTypeScript.assets/da7d79cca4dd4f319759c9132c8f3e43tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

JavaScript 是**解释型**、**弱类型**、**动态语言**；TypeScript 是**编译型**、**强类型**、**静态语言**

JavaScript 的特点是灵活、高效、很短的代码就能实现复杂功能；缺点是没有代码提示，容易出错且编辑器不会给任何提示，而 TypeScript 则相反

> 解释型与编译型：
>
> - 解释型：代码无需编译直接运行，需要一个翻译器，一边翻译一边执行
> - 编译型：机器不能识别代码，需要一个编译器，将代码转换成机器能识别的语言（编译）
>
> 弱类型与强类型：
>
> - 弱类型：声明变量时无需指定类型，并在赋值或运算时数据类型可以随意转换
> - 强类型：声明变量时必须指定类型，如果发现类型错误，就会在编译或运行期间发生错误
>
> 动态语言与静态语言：
>
> - 动态语言：在代码执行的过程中可以动态添加对象的属性
> - 静态语言：不允许在执行过程中随意添加属性

## 安装与运行

### 安装

安装命令：

```bash
npm i -g typescript
#or
yarn global add typescript
```

TypeScript 包：用来编译 TS 代码的包，提供了 tsc 命令（TypeScript Compiler），实现了 TS 到 JS 的转化

- Mac 电脑安装全局包时，需要添加 sudo 获取权限： `sudo npm i -g typescript`

验证是否安装成功：`tsc –v` (查看 TypeScript 的版本)

![image-20230828194820969.png](%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8BTypeScript.assets/22238225e02149ccb8f25bf3591752detplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 编译运行

```
创建 .ts 文件` => `编译 TS` => `执行 JS
```

- 创建 hello.ts 文件（**TS** **文件的后缀名为.ts** ）
- 将 TS 编译为 JS：在终端中输入命令， `tsc hello.ts` （同级目录中会出现一个同名的 JS 文件）
- 执行 JS 代码：在终端中输入命令， `node hello.js`

> 所有合法的 JS 代码都是 TS 代码，在开发中不需要自己手动通过 tsc 把 ts 文件转成 js 文件，这些工作应该交给 webpack 或者 vite 来完成

### 创建基于 TS 的 Vue 项目

基于 vite 创建一个 Vue 项目，使用 typescript 模板，命令如下：

```bash
# npm 6.x
npm create vite@latest my-vue-ts-app --template vue-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-ts-app -- --template vue-ts

# yarn
yarn create vite my-vue-ts-app --template vue-ts

# pnpm
pnpm create vite my-vue-ts-app --template vue-ts
```

> 学习语法阶段，可以直接使用[官网编译器](https://link.juejin.cn/?target=https%3A%2F%2Fwww.typescriptlang.org%2Fzh%2Fplay)

# TypeScript 基础

## 类型概念

在 JavaScript 中类型定义了变量或表达式所能拥有的值集合和操作，可以将 TS 中的常用基础类型细分为两类：

**JavaScript 已有类型：**

- 原始类型（`number/string/boolean/null/undefined/symbol/bigint`）
- 引用数据类型（数组，对象，函数等）

**TypeScript 新增类型：**

- 联合类型
- 自定义类型（类型别名 type）、接口（interface）
- 元组
- 字面量类型、枚举类型
- void、never、unknown

Typescript 类型如下表所示：

| 类型      | 示例             | 描述                              |
| --------- | ---------------- | --------------------------------- |
| number    | 1、-33、2.5      | 数字                              |
| string    | 'hi'、"hi"、`hi` | 字符串                            |
| boolean   | true、false      | 布尔值 true 或 false              |
| 字面量    | 其本身           | 限制变量的值就是该字面量的值      |
| `any`     | \*               | 任意类型                          |
| `unknown` | \*               | 类型安全的 any                    |
| `void`    | undefined、null  | null 或 undefined                 |
| `never`   | 无值             | 不能是任何值                      |
| object    | { name: 'jack' } | 任意的 JS 对象                    |
| array     | [1,2,3]          | 任意 JS 数组                      |
| tuple     | [4,5]            | 元素，TS 新增类型，`固定长度`数组 |
| enum      | enum{ A, B }     | 枚举，TS 中新增类型               |

类型关系图：

![类型.png](%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8BTypeScript.assets/0beea43be68c46a3b57facbec76bee0etplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 类型注解与类型推论

TS 提供了 JS 的所有功能，并且额外的增加了**类型系统**。为了显示告知 TypeScript 你使用的类型，需要使用**注解**，注解的形式为 `value: type`，就像是告诉类型检查器，这个 value 的类型为 type，以下为类型注解示例：

```ts
let age: number = 18; // age 是一个数字
let bool: boolean[] = [true, false]; // bool 是一个布尔数组
```

> TypeScript 类型系统的主要优势：可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。此外，约定了什么类型，就只能给变量赋值该类型的值，否则就会报错

如果想让 TypeScript 推导类型，那就去掉注解，让 TypeScript 自动推导，这就是**类型推论**

类型推论的常见使用：

- 声明变量并初始化
- 决定函数返回值时

```ts
let age = 18; // age 是一个数字
let bool = [true, false]; // bool 是一个布尔数组
```

> 虽然 TypeScript 具有类型推论的功能，但对于初学者来说，**建议加上类型注解**

注意：**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查**：

```ts
let myNumber;
myNumber = 'six';
myNumber = 6; //正常运行，不会报错
```

## 常用类型

### 原始类型

- 原始类型：`number/string/boolean/null/undefined/symbol/bigint`
- 原始类型完全按照 JS 中类型的名称来书写

```ts
let age: number = 30;
let name: string = 'John';
let isStudent: boolean = true;

// null类型只有null一个值
let person: null = null;
// undefined类型只有undefined一个值
let value: undefined = undefined;

let uniqueSymbol: symbol = Symbol('unique');
let bigIntValue: bigint = 100n;
```

### any 类型

any 是类型教父，为达目的不惜一切代价。any 类型的值就像常规的 JavaScript 一样，类型检查器完全发挥不了作用。**除非万不得已，不要使用 any**，在 TypeScript 中 any 主要是作为兜底类型使用，当你或者 TS 编译器无法确定类型时，默认就为 any 类型，其他情况应该尽量避免使用

```ts
// 变量设置类型为 any 后, 相当于对该变量关闭了类型检测
let num: any = 4;
num = 'hello';

//num 的类型为 any，可以赋值给任意变量
let str: string;
str = num; // 这里会让s也失去类型检测（不安全）

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d; //any
d = 10;
d = 'hello';
```

如果确实需要使用 any，像下面这样使用：

```ts
let a: any = 666; //any
let b: any = ['danger']; //any
let c = a + b; //any
```

正常情况下第三个语句会报错，但此时却没有报错，因为我们告诉 TypeScript 相加的两个值都是 any 类型。如果想使用 any，一定要显式注解，这相当于告诉 TypeScript，你知道自己在做什么

> 盲目使用 any 类型，将会使得 TS 又变成了 JS（AnyScript）

### unknown 类型

unknown 本质上就是类型安全的 any，如果无法预知一个值的类型，**不要使用 any，应该使用 unknown**

- unknown 类型的值可以比较 (==、===、||、&&、?)、可以否定 (!)、可以使用 typeof 和 instanceof 运算符细化

用法如下：

```ts
let a: unknown = 30; //unknown
let b = a === 123; //boolean
let c = a + 10; //'a' is of type 'unknown'
if (typeof a === 'number') {
  let d = a + 10; //number
}
```

以上示例，我们大致可以了解 unknown 的用法：

- TypeScript 不会把任何值推导为 unknown 类型，必须显式注解（变量 a）
- unknown 类型的值可以比较（变量 b）
- 执行操作时不能假定 unknown 类型的值为某种特定类型（变量 c）
- 必须先向 TypeScript 证明一个值确实是某个类型（变量 d）

```ts
// unknown 类型类似于 any 类型，但更加类型安全，要求在使用之前进行类型检查或类型断言
let notSure: unknown = 4;
notSure = 'hello'; // 不能将类型“unknown”分配给类型“number”
let num: number = 4;
num = notSure; //此处会报错，unknow 比 any 更安全
```

### void、never 类型

除了 null 和 undefined 之外，TypeScript 还有 void 和 never 类型。这两个类型有明确的特殊作用，进一步划分不同情况下的**不存在**：

- void 是函数没有显式返回任何值时的返回类型（可以返回`空`或`undefined`）
- void 限制变量，只能将变量定义为`空`或`undefined`。实际上 void 类型作为函数返回值类型外，在其他地方使用 void 类型是无意义的

```ts
// ⽆警告
function demo1(): void {}

// ⽆警告
function demo2(): void {
  return;
}

// ⽆警告
function demo3(): void {
  return undefined;
}

// 有警告：不能将类型“number”分配给类型“void”
function demo4(): void {
  return 666;
}
```

- never 是函数根本不返回（例如函数抛出异常，或者永远运行下去）时使用的类型
- 几乎不用 never 限制变量，没有意义（限制变量就意味着该变量以后不能存任何的数据）

```ts
// never 类型表示永远不会有正常返回值的函数的返回类型，或者表示抛出异常的函数的返回类型。
function throwError(message: string): never {
  throw new Error(message);
}
```

### 数组类型

数组类型的两种写法：

```ts
// 写法一
let numbers: number[] = [1, 3, 5];
// 写法二
let strings: Array<string> = ['a', 'b', 'c'];
```

> 更推荐使用 `number[]` 写法，更直观

### 元组类型

在 TypeScript 中，元组（**Tuple**）类型是一种特殊的**数组类型**（固定长度和特定类型顺序的数组，可以用数组的方法）

- 元组类型的语法是使用方括号 `[]` 并在其中指定各个元素的类型，多个类型之间使用逗号分隔，例如：

```ts
// 元组的长度和元素类型顺序需要与定义时相对应，否则会导致类型错误
let myTuple: [string, number, boolean] = ['Hello', 123, true];
```

- 元组的使用方式与数组类似，可以通过索引来访问元素：

```ts
console.log(myTuple[0]); // 输出: "Hello"
console.log(myTuple[1]); // 输出: 123
console.log(myTuple[2]); // 输出: true
```

- 元组还可以使用解构赋值来获取各个元素的值：

```ts
let[(str, num, bool)] = myTuple;
console.log(str); // 输出: "Hello"
console.log(num); // 输出: 123
console.log(bool); // 输出: true
```

> Tuple 在**长度**和**类型**上是固定的，一旦定义后无法动态添加或删除元素，也无法改变元素的类型。如果需要更灵活的数组操作，可以使用普通的数组类型（Array）

### 字面量类型

任意的 JS 字面量（比如，对象、数字等）都可以作为类型使用。使用 `js字面量` 作为变量类型，这种类型就是`字面量类型`

JS 字面量主要有：`{ name: 'jack' }`、`[]`、 `20`、`'abc'`、`false`、`function() {}`

- 直接使用字面量类型

```ts
let a: '你好'; // a的值只能为字符串“你好”
let b: 100; // b的值只能为数字100
a = '欢迎'; // Type '"欢迎"' is not assignable to type '"你好"'
b = 200; // Type '200' is not assignable to type '100'
let gender: '男' | '⼥'; //定义⼀个gender变量，值只能为字符串“男”或“⼥”
gender = '男';
gender = '未知'; //不能将类型“"未知"”分配给类型“"男" | "⼥"”
```

- 类型推断字面量类型

```ts
let str1 = 'Hello TS';
const str2 = 'Hello TS';
```

通过 TS 类型推论机制，可以得出：

- 变量 str1 的类型为：`string`
- 变量 str2 的类型为：`'Hello TS'`

str1 是一个变量(let)，它的值可以是任意字符串，所以类型为`string`

str2 是一个常量(const)，它的值不能变化只能是 `'Hello TS'`，所以它的类型为`'Hello TS'`，是一个**字面量类型**，也就是说某个特定的字符串也可以作为 TS 中的类型

**字面量类型常常配合联合类型一起使用**

- 使用场景：用来表示一组明确的可选值列表
- 如在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中任意一个

```ts
// 使用自定义类型:
type Direction = 'up' | 'down' | 'left' | 'right';
function changeDirection(direction: Direction) {
  console.log(direction);
}
// 调用函数时，会有类型提示：
changeDirection('up');
```

> 参数 direction 的值只能是`up/down/left/right`中的任意一个，相比于 string 类型，使用字面量类型更加精确、严谨

- keyof 与字面量类型

```ts
type Goods = {
  id: number;
  name: string;
};
// keyof 后接类型，返回字面量类型（键）
type Obj = keyof Goods;
let obj1: Obj = 'id';
let obj2: Obj = 'name';
```

### 枚举类型

#### 基本使用

枚举的作用是列举类型中包含的各个值。这是一种无序数据结构，把键映射到值上。枚举可以理解为编译时键固定的对象，访问键时，TypeScript 将检查指定的键是否存在

枚举分为三种：数值型枚举、字符串枚举、异构型枚举

注意事项：

- 使用`enum`关键字定义枚举
- 约定枚举名称以**大写字母**开头
- 枚举中的多个值之间通过逗号分隔

```ts
// 创建枚举
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// 使用枚举类型, 需要传入 Direction 成员的任意一个
function changeDirection(direction: Direction) {
  console.log(direction);
}
changeDirection(Direction.Up); // 类似于 JS 中的对象, 访问枚举的成员
```

#### 数字型枚举

数字型枚举，枚举成员是有值的，默认为从 0 开始自增的数值。枚举成员的值为数字的枚举，简称数字枚举

```ts
// 可以给枚举中的成员初始化值
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}
console.log(Direction);
/*{
  "10": "Up",
  "11": "Down",
  "12": "Left",
  "13": "Right",
  "Up": 10,
  "Down": 11,
  "Left": 12,
  "Right": 13
} */
```

对于数值型枚举，不但可以通过枚举成员名来获取枚举成员值，也可以反过来通过枚举成员值去获取枚举成员名

```ts
Direction.Up; //10
Direction[Direction.Up]; //"Up"
```

> 对于字符串枚举和异构型枚举，则**不能**够通过枚举成员值去获取枚举成员名

#### 字符串枚举

字符串枚举，枚举成员的值是字符串。字符串枚举没有自增长行为，因此，**字符串枚举的每个成员必须有初始值**

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
console.log(Direction);
/*{
  "Up": "UP",
  "Down": "DOWN",
  "Left": "LEFT",
  "Right": "RIGHT"
}*/
```

#### 异构型枚举

TypeScript 允许在一个枚举中同时定义数值型枚举成员和字符串枚举成员，我们将这种类型的枚举称作异构型枚举。异构型枚举在实际代码中很少被使用，虽然在语法上允许定义异构型枚举，但是不推荐在代码中使用异构型枚举

```ts
enum Color {
  Black = 0,
  Blue,
  White = 'White',
}
console.log(Color);
/*{
  "0": "Black",
  "1": "Blue",
  "Black": 0,
  "Blue": 1,
  "White": "White"
}*/
```

> 在异构型枚举中，必须为紧跟在字符串枚举成员之后的数值型枚举成员指定一个初始值。也就是说，在`White`后面新增一个数值型枚举成员，必须要指定初始值

#### 枚举实现原理

枚举是 TS 为数不多的非 JavaScript 类型级扩展的特性之一。其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值(枚举成员都是有值的)。也就是说，其他的类型会在编译为 JS 代码时自动移除。但是，**枚举类型会被编译为 JS 代码**

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
// 会被编译为以下 JS 代码：
var Direction;
(function (Direction) {
  Direction['Up'] = 'UP'
  Direction['Down'] = 'DOWN'
  Direction['Left'] = 'LEFT'
  Direction['Right'] = 'RIGHT'
})(Direction || Direction = {})
```

> 一般情况下，**推荐使用字面量类型** + **联合类型组合的方式**，因为相比枚举，这种方式更加直观和高效

## 联合类型与交叉类型

### 联合类型

联合类型能将多个类型组合成一个类型，例如数组中既有 number 类型，也有 string 类型的写法：

```ts
let arr: (number | string)[] = [1, 'a', 3, 'b'];
```

> 类型间使用 `|` 连接，代表类型可以是它们当中的其中一种，这种类型叫：`联合类型`

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型，可以赋值给对应类型的变量。**但其本身仍然是联合类型**

```ts
let myNumber: string | number;
myNumber = 'six';

let str: string;
str = myNumber;
console.log(str); //'six'

myNumber = 6;
```

### 交叉类型

交叉类型允许将多个类型合并为一个类型。使用 `&` 符号连接多个类型，形成一个新的类型，这个新类型包含了所有类型的属性。交叉类型表示一个值同时具有多种类型的特性

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  position: string;
};

type EmployeePerson = Person & Employee;
```

使用交叉类型时，被合并的类型的属性都会包含在新类型中。如果存在重复的属性名，它们的类型会合并成联合类型

## 类型别名

类型别名（自定义类型） ：为任意类型起别名，可以更灵活的限制类型

- 语法：`type 类型别名 = 具体类型`
- 使用场景：当同一（复杂）类型被多次使用时，可以通过类型别名，简化该类型的使用

```ts
type CustomArray = (number | string)[];
let arr1: CustomArray = [1, 'a', 3, 'b'];
let arr2: CustomArray = ['x', 'y', 6, 7];
```

> - 使用`type`关键字来创建自定义类型
> - 类型别名（如此处的 _CustomArray_ ）可以是任意合法的变量名称
> - 推荐使用`大写字母`开头（PascalCase 命名法）
> - 创建类型别名后，直接使用该**类型别名**作为变量的**类型注解**即可

## 类型断言

类型断言（Type Assertion）是一种在 TypeScript 中告诉编译器某个值的具体类型的方法。它允许开发者手动指定一个变量或表达式的类型，即使这个类型与编译器推断的类型不一致

在 TypeScript 中，类型断言有两种形式：

- 尖括号语法：

```ts
let value: any = 'Hello World';
let length: number = (<string>value).length;
```

- as 语法：

```ts
let value: any = 'Hello World';
let length: number = (value as string).length;
```

**类型断言仅在编译时起作用**，不会进行真正的类型转换或运行时检查。它只是告诉编译器使用指定的类型来处理变量，**一旦类型断言不正确，可能会导致运行时错误**

> 类型断言尖括号语法容易和泛型混淆，并且与 react 的结合中必须使用`as`语法，所以建议使用`as`语法，避免不必要的麻烦

类型断言常用于以下情况：

- 开发者比编译器更了解某个变量的类型时，可以使用类型断言来覆盖编译器的类型推断
- 在处理从动态类型语言（如 JavaScript）转换为 TypeScript 的代码时，可以使用类型断言来逐步将动态类型转换为静态类型

> 过度使用类型断言可能会破坏类型安全性，应当慎重使用。尽量让编译器进行类型推断，只在必要的情况下使用类型断言

typeof 与 as 结合使用：

- typeof 后面接值，返回类型
- as 后接类型，用于给变量或者表达式手动指定类型

```ts
const obj = {
  name: 'jack',
  age: 18,
};
let detail = {} as typeof obj;
```

## 函数

### 基本使用

类型在函数中的应用指的是： `函数参数` 和 `返回值`的类型

为函数指定类型的两种方式：

- 单独指定参数、返回值的类型

```ts
// 函数声明
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// 函数表达式
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};
```

- 同时指定参数、返回值的类型

```ts
// 使用类型别名
type AddFn = (num1: number, num2: number) => number;

const add: AddFn = (num1, num2) => {
  return num1 + num2;
};

// 直接声明
const add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2;
};
```

注意不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`

- 在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
- 在 ES6 中，`=>` 叫做箭头函数，应用十分广泛

### 函数中的 void

- 如果函数没有返回值，在 TS 的类型中，应该使用 void 类型

```ts
// 如果什么都不写，此时 add 函数的返回值类型为： void
const add = () => {};

// 明确指定函数返回值类型为 void
const add = (): void => {};
```

注意：

- 在`JS` 中如果没有返回值，默认返回的是 `undefined`
- `void` 和 `undefined` 在 `TypeScript` 中并不等同
- 如果指定返回值类型是 `undefined` 那返回值必须是 `undefined`

```typescript
// 指定返回值类型为 undefined，函数体中必须显式 return undefined
const add = (): undefined => {
  return undefined;
};
```

### 可选参数

使用`?`给函数指定可选参数类型，**可选参数只能在参数列表的最后**，可选参数后面不能再出现必选参数

```ts
function mySlice(start?: number, end?: number): void {
  console.log('起始索引：', start, '结束索引：', end);
}
```

### 默认参数

可以给函数的参数添加默认值，**TypeScript 会将添加了默认值的参数识别为可选参数**

```ts
function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
```

> 虽然会被识别为可选参数，但此时不受「可选参数必须接在必需参数后面」的限制

### 函数重载

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

比如，实现一个函数 `reverse`，输入数字 `123` 的时候，输出反转的数字 `321`，输入字符串 `'hello'` 的时候，输出反转的字符串 `'olleh'`

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
```

上述重复定义了多次函数 `reverse`，前几次都是函数定义，最后一次是函数实现

> TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面

## 对象

### 基本使用

JS 中的对象是由属性和方法构成的，而 **TS** **对象的类型就是在描述对象的结构**（有什么类型的属性和方法）

- 对象类型的写法：

```ts
// 空对象
let person: {} = {};

// 有属性
let person: { name: string } = {
  name: '同学',
};

// 有属性和方法
// 指定对象的多个属性类型时，使用分号(;)或逗号(,)分隔
let person: { name: string; sayHi(): void } = {
  name: 'jack',
  sayHi() {},
};

// 对象中如果有多个类型，可以换行写
// 通过换行来分隔多个属性类型
let person: {
  name: string;
  sayHi(): void;
} = {
  name: 'jack',
  sayHi() {},
};
```

> - 使用`{}`来描述对象结构
> - **属性**采用`属性名: 类型`的形式
> - **方法**采用`方法名(): 返回值类型`的形式

### 箭头函数形式

- 对象中方法的类型也可以使用箭头函数形式

```ts
type Person = {
  greet: (name: string) => void;
  //等价于: greet(name: string): void
};

let person: Person = {
  greet(name) {
    console.log(name);
  },
};
```

### 对象可选属性

- 对象的属性或方法，也可以是可选的，此时就用到**可选属性**
- 可选属性的语法与函数可选参数的语法一致，都使用`?`来表示

```ts
type Config = {
  url: string;
  method?: string;
  fn?(): void;
  fn1?: () => void;
};

function myAxios(config: Config) {
  console.log(config);
}
```

### 使用类型别名

直接使用`{}`形式为对象添加类型，会降低代码的可读性，推荐使用类型别名为对象添加类型

```ts
// 创建类型别名
type Person = {
  name: string;
  sayHi(): void;
};

// 使用类型别名作为对象的类型
let person: Person = {
  name: 'jack',
  sayHi() {},
};
```

## 接口

### 接口描述对象

当一个对象类型被多次使用时，一般会使用接口（interface）来描述**对象**的类型，达到复用的目的

- 使用`interface`关键字来声明接口
- 接口一般首字母大写，可以是任意合法的变量名称，有些语言接口以`I`开头
- 接口的每一行只能有 `一个` 属性或方法，每一行不需要加分号

```ts
interface Person {
  name: string;
  age: number;
  sayHi(): void;
}

let person: Person = {
  name: 'jack',
  age: 19,
  sayHi() {},
};
```

> 赋值的时候，变量的形状必须和接口的形状保持一致

### 接口描述数组

接口也可以用来描述数组：

```ts
interface NumberArray {
  [index: number]: number
}
let arr: NumberArray = [1, 2, 3]\
```

上述代码意思是：只要索引的类型是数字时，那么值的类型必须是数字。用接口来描述数组用的并不多，或者说几乎不用

### 接口描述函数

我们也可以使用接口的方式来定义一个函数需要符合的形状：

```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = (source, subString) =>
  source.search(subString) !== -1;
```

采用接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变

### 接口继承

- 如果两个接口之间有相同的属性或方法，可以将**公共的属性或方法抽离出来，通过继承来实现复用**

```ts
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

// 等价于
interface Point2D {
  x: number;
  y: number;
}
interface Point3D extends Point2D {
  z: number;
}
```

> 使用`extends`关键字实现了接口 Point3D 继承 Point2D。继承后，Point3D 就有了 Point2D 的所有属性和方法（此时，Point3D 同时有 x、y、z 三个属性）

### 接口可选属性

在 TypeScript 的接口中，你可以使用可选属性来表示不是所有属性都是必需的。以下是一个简单的例子：

```ts
interface Person {
  name: string;
  age?: number; // 可选属性
  gender?: string; // 可选属性
}

let tom: Person = {
  name: 'Tom',
};
```

### 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  gender: 'male',
};
```

**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**，以下代码会报错：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom: Person = {
  name: 'Tom',
  age: 18,
  gender: 'male',
};
```

此处报错原因有两点：

- 定义任意属性时，确定属性和可选属性类型必须是其类型的子集
- `age?`的类型是`number | undefined`

解决该报错可以使用联合类型 (也可以使用 any)：

```ts
interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number | undefined;
}

let tom: Person = {
  name: 'Tom',
  age: 18,
  gender: 'male',
};
```

### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性：

```ts
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 666,
  name: 'Tom',
  gender: 'male',
};
```

**只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**，也就是说，继续赋值会报错

```ts
tom.id = 777; // Cannot assign to 'id' because it is a read-only property
```

### type 与 interface

interface（接口）和 type（类型别名）的对比：

- 相同点：都可以给对象指定类型，在许多情况下，可以在它们之间`自由选择`
- 不同点：
  - 接口只能为`对象`指定类型，并且接口可以继承
  - 类型别名可以为`任意类型`指定别名

```ts
interface Person {
  name: string;
  age: number;
  sayHi(): void;
}
// 为对象类型创建类型别名
type Person = {
  name: string;
  age: number;
  sayHi(): void;
};
// 为联合类型创建类型别名
type NumStr = number | string;
```

除以上不同以外，type 和 interface 重复定义时也不同

- type 不可重复定义

```ts
type Person = {
  name: string;
};
// 标识符 Person 重复  Error
type Person = {
  age: number;
};
```

- interface 重复定义会合并

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}
// 类型会合并，注意：属性类型和方法类型不能重复定义
const p: Person = {
  name: 'jack',
  age: 18,
};
```

| interface                 | type                     |
| ------------------------- | ------------------------ |
| 支持：对象类型            | 支持：对象类型，其他类型 |
| 复用：可以继承（extends） | 复用：交叉类（&）        |

## 声明合并

- 如果定义了两个相同名字的**函数**、**接口**或**类**，那么它们会合并成一个类型

上文或多或少涉及过相关用法，这里统一总结一下：

- **函数合并**：使用重载定义多个函数类型

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
```

- **接口合并**：接口中的属性在合并时会简单的合并到一个接口中

```ts
interface Alarm {
  price: number;
  alert(s: string): string;
}
interface Alarm {
  weight: number;
  alert(s: string, n: number): string;
}

//相当于
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}
```

> 合并的属性的类型必须是唯一的

- **类的合并与接口的合并规则一致**

# TypeScript 泛型

## 基本概念

泛型参数使用尖括号`<>`声明。尖括号的位置限定泛型的作用域，只有少数几个地方可以使用尖括号。TypeScript 将确保当前作用域中相同的泛型参数最终都绑定同一个具体类型

- **泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用**，常用于函数、接口和类中

例如：创建一个函数，传入数据并将其返回

```ts
function fn(value: number): number {
  return value;
}

// 使用泛型进行改造
function fn<T>(value: T): T {
  return value;
}
```

改造后，调用时可以传入不同的参数，实现函数能够接受任意类型的效果：

```ts
fn<number>(10); //number类型
fn<string>('hello world'); //string类型
```

> 调用时，可以省略`<>`，这样做，TypeScript 会自动推论类型

## 泛型别名

泛型别名（Generic Type Aliases）允许你创建一个**具有泛型参数的类型别名**。这使得你可以在定义类型时使用泛型，以提高代码的灵活性和复用性

- `<T>` 是一个变量，可以随意命名，建议遵循 PascalCase 命名法（大驼峰命名）

```ts
// 类型别名-使用泛型
type Data<T> = {
  id: number;
  name: string;
  data: T;
};

// 原始类型
const obj1: Data<number> = {
  id: 1,
  name: 'jack',
  data: 1,
};

// 字符串数组类型
const obj2: Data<string[]> = {
  id: 1,
  name: 'jack',
  data: ['1', '2'],
};

// 字面量类型
type Name = 'jack' | 'lucy' | 'tom';
const obj3: Data<Name> = {
  id: 1,
  name: 'jack',
  data: 'lucy', // 只能为 jack、lucy、tom
};

// 函数类型
type Fn = (a: number, b: string) => void;
const obj4: Data<Fn> = {
  id: 1,
  name: 'jack',
  data: (a: number, b: string) => {
    console.log(a, b);
  },
};

// 对象类型
type Obj = {
  id: number;
  name: string;
  direction: 'up' | 'down' | 'left' | 'right';
};
const obj5: Data<Obj> = {
  id: 1,
  name: 'jack',
  data: {
    id: 1,
    name: 'jack',
    direction: 'down', // 只能为 up、down、left、right
  },
};
```

## 泛型函数

### 定义泛型函数

```ts
function id<Type>(value: Type): Type {
  return value;
}
```

- 语法：在函数名称的后面添加 `<> `，**尖括号中添加类型变量**，比如此处的 Type（任意合法的变量名）
- **类型变量** **Type**，是一种特殊类型的变量，它处理类型而不是值
- 该类型变量相当于一个类型容器，能够捕获用户提供的类型 (具体是什么类型由用户调用该函数时指定)
- 因为 Type 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型

### 调用泛型函数

```ts
const num = id<number>(10);
const str = id<string>('a');
```

- 语法：在函数名称的后面添加 `<>`，**尖括号中指定具体的类型**，比如，此处的 number
- 当传入类型 number 后，这个类型就会被函数声明时指定的类型变量 Type 捕获到。此时，Type 的类型就是 number。所以，函数 **id 参数和返回值**的类型都是 number
- 如果传入类型 string，函数 id 参数和返回值的类型就都是 string。这样，通过泛型就做到了让 id 函数与多种不同的类型一起工作，**实现了复用的同时保证了类型安全**

### 简化泛型函数调用

```ts
// 省略 <number> 调用函数
let num = id(10);
let str = id('a');
```

- 在调用泛型函数时，**可以省略** `<类型>` **来简化泛型函数的调用**
- 此时，TS 内部会采用一种叫做**类型参数推断**的机制，来根据传入的实参自动推断出类型变量 Type 的类型。这种简化的方式调用泛型函数，使得代码更短，更易于阅读
- **当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数**

## 泛型约束

泛型约束（Generic Constraints）是 TypeScript 中一种用于限制泛型类型参数的方法。通过泛型约束，你可以指定泛型类型参数必须满足某些条件，从而使代码更具安全性和可预测性

- 比如，`getLength('a')`调用函数时获取参数的长度：

```ts
function getLength<T>(value: T): T {
  console.log(value.length); //参数可能不存在 length 属性
  return value;
}
getLength('a');
```

T 可以代表任意类型，无法保证一定存在 length 属性。此时，就需要**为泛型添加约束**来收缩类型

添加泛型约束收缩类型，主要有两种方式：`指定更具体类型`、`添加约束`

### 指定更具体类型

将类型修改为`T[]` (T 类型数组)

```ts
function getLength<T>(value: T[]): T[] {
  console.log(value.length);
  return value;
}
```

### 添加约束

`T extends Xxx`：添加泛型约束，表示传入的类型必须满足接口的要求

```ts
// 定义接口
interface Length {
  length: number;
}

function getLength<T extends Length>(value: T): T {
  console.log(value.length);
  return value;
}
```

- 创建描述约束的接口`Length`，该接口要求提供 length 属性
- 通过`extends`关键字使用该接口，为泛型添加约束。该约束表示**传入的类型必须具有 length 属性**
- 注意：传入的实参**只要**有 length 属性即可（类型兼容性）

### 多个类型变量

泛型的类型变量可以有多个，并且**类型变量之间还可以约束**

如第二个类型变量受第一个类型变量约束：

```ts
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
let person = { name: 'jack', age: 18 };
getProp(person, 'name');
```

- 添加了第二个类型变量 Key，两个类型变量之间使用 `,` 逗号分隔
- **keyof** **关键字接收一个对象类型，生成其键名称**的联合类型
- 本示例中`keyof Type`实际上获取的是 person 对象所有键的联合类型： `'name' | 'age'`
- 类型变量 Key 受 Type 约束，可以理解为 Key 只能是 Type 所有键中的任意一个，或者说只能访问对象中存在的属性

```ts
// Type extends object 表示： Type 应该是一个对象类型，如果不是 对象 类型，就会报错
function getProperty<Type extends object, Key extends keyof Type>(
  obj: Type,
  key: Key
) {
  return obj[key];
}
```

## 泛型接口

泛型接口：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性

```ts
interface IdFunc<Type> {
  id: (value: Type) => Type;
  ids: () => Type[];
}
let obj: IdFunc<number> = {
  id(value) {
    return value;
  },
  ids() {
    return [1, 3, 5];
  },
};
```

- 在接口名称的后面添加`<类型变量>`，这个接口就变成了泛型接口
- 接口的类型变量，对接口中所有其他成员可见，也就是**接口中所有成员都可以使用类型变量**
- 使用泛型接口时，**需要显式指定具体的类型**

> 最常见的，JS 中的数组，就是一个泛型接口。当我们在使用数组时，TS 会根据数组的不同类型，来自动将类型变量设置为相应的类型

# TypeScript 面向对象

## 相关概念

ECMAScript 6 开始，JavaScript 程序员将能够使用基于类的面向对象的方式。这种写法本质是构造函数的语法糖，运行时还是会编译成构造函数

TypeScript 完全兼容 JavaScript 面向对象写法，并在此基础上新增了部分新特性，如：`接口`、`访问修饰符`、`抽象类`等，以增强代码的可读性、可维护性。当然，这些特性并不改变 JavaScript 的基本语法和结构，如果你熟悉 JavaScript 中 class 的用法，亦或是有例如 Java、C#等面向对象语言的基础，这一节将变得十分容易

类相关的概念：

- 类（Class）：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 `new` 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要 知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

## 类

类由`属性`、`方法`、`构造函数组成`。使用 `class` 定义类，使用 `constructor` 定义构造函数

通过 `new` 生成新实例的时候，会自动调用构造函数

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
let greeter = new Greeter('world');
```

该类有三个成员：一个叫做 greeting 的属性，一个构造函数和一个 greet 方法。与构造函数写法一样，类中的`this`默认指向实例对象

## 继承

继承是面向对象中的又一个特性，通过继承可以将其他类中的属性和方法引入到当前类中，从而拓展现有的类 JavaScript 单继承

我们看下面的例子：

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('Snake Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('Horse Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake('Snack Sam');
let tom: Animal = new Horse('Horse Tom');
sam.move();
// "Snake Slithering..."
// "Snack Sam moved 5m."
tom.move(34);
// "Horse Galloping..."
// "Horse Tom moved 34m."
```

构造函数的派生类（子类）必须调用`super()`，它会执行基类的构造方法。子类中的`super`指代父类的实例对象

子类里可以重写父类的方法，Snake 类和 Horse 类都创建了 move 方法，它们重写了从 Animal 继承来的 move 方法，使得 move 方法根据不同的类而具有不同的功能

> 注意，即使 tom 被声明为 Animal 类型，但因为它的值是 Horse ， tom.move(34) 会调用 Horse 里的重写方法

## 修饰符

### readonly 修饰符

可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化

```ts
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus('8 strong legs');
dad.name = '3-piece suit'; // Cannot assign to 'name' because it is a read-only property.
```

### 访问修饰符

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

#### public

`public`修饰：可以在类、子类、对象中修改

```ts
class Person {
  public name: string; // 默认为public
  public age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以在类中修改
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中可以修改
  }
}

const p = new Employee('Rose', 18);
p.name = 'Jack'; // 可以通过对象修改
```

#### protected

`protected`修饰：可以在类、子类中修改

```ts
class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以修改
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中可以修改
  }
}

const p = new Employee('Rose', 18);
p.name = 'Jack'; // 对象不能修改
```

#### private

`private`修饰：只能在类中修改

```ts
class Person {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以修改
    this.age = age;
  }
}

class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中不能修改
  }
}

const p = new Employee('Rose', 18);
p.name = 'Jack'; // 对象不能修改
```

## 存取器

TypeScript 支持通过`getters/setters`来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问

- Getter 函数的作用是可以让对象返回一个私有变量，而不需要直接去访问私有变量
- Setter 函数的作用是可以基于传进的参数来修改对象中私有变量。 这些修改可以是计算，或者是直接替换之前的值

```TS
class Person {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name () {
    return this._name
  }

  set name (name: string) {
    this._name = name
  }
}

const p1 = new Person('Rose')
console.log(p1.name) // 通过getter读取name属性
p1.name = 'Jack' // 通过setter修改name属性
```

## 静态属性

- 静态属性（方法）也称为类属性（方法），使用静态属性无需创建实例，通过类即可直接使用
- 使用`static`关键字来声明**静态属性**和**静态方法**

```ts
class Tools {
  static PI = 3.1415926;

  static sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

## 抽象类

抽象类做为其它派生类的基类使用。 它们不允许被被实例化。 抽象类可以包含成员的实现细节

`abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。抽象方法没有方法体只能定义在抽象类中，子类继承抽象类时必须要实现对应的抽象方法

```TS
abstract class Animal {
  abstract run (): void //抽象方法没有方法体
  bark () {
    console.log('bark~')
  }
}

class Dog extends Animals {
  //子类必须要实现抽象方法
  run () {
    console.log('Dog run~')
  }
}
```

## 类的类型

给类加上 TypeScript 的类型很简单，与接口类似：

```ts
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

## 类与接口

### 类实现接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现

接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法。可以让一个类去实现接口，实现接口时，类中要保护接口中的所有属性

一个类可以实现多个接口：

```ts
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}
```

> 接口与抽象类区别：
>
> - 抽象类可以有普通方法，也可以有抽象方法；接口只能有抽象方法
> - 使用 extends 关键字去继承抽象类；使用 implements 关键字去实现接口

### 接口继承类

面向对象的语言基本上不支持接口继承类，但 TypeScript 比较特殊，**支持接口继承类**

当声明一个类的同时，也会创建该类对应的类型（实例的类型），我们既可以使用 `new Xxx` 创建实例，也可以将其作为类型使用

```ts
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
// 用作类型
function printPoint(p: Point) {
  console.log(p.x, p.y);
}
// 用于创建实例
const p = new Point(1, 2);
```

其等价于：

```ts
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface PointInstanceType {
  x: number;
  y: number;
}
```

于是便能理解为什么 TypeScript 中接口能继承类了：

```TS
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

// interface PointInstanceType {
//   x: number
//   y: number
// }

// 等价于 interface Point3d extends PointInstanceType
interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
```

此处可以理解为定义了一个接口 `Point3d` 继承另一个接口 `PointInstanceType`。所以「接口继承类」和「接口继承接口」没有什么本质的区别

> `Point` 类时创建的 `Point` 类型（实例的类型）是不包含构造函数的，并且静态属性或静态方法也不包含（实例的类型当然不应该包含构造函数、静态属性或静态方法）简言之，对应的类型只会包含实例属性和实例方法

```ts
class Point {
  //静态属性
  static origin = new Point(0, 0);

  // 静态方法
  static distanceToOrigin(p: Point) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }

  // 实例属性
  x: number;
  y: number;

  // 构造函数
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // 实例方法
  printPoint() {
    console.log(this.x, this.y);
  }
}

interface PointInstanceType {
  x: number;
  y: number;
  printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;
```

上例中最后的类型 `Point` 和类型 `PointInstanceType` 是等价的。同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法
