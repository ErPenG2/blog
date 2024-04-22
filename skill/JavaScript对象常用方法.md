JavaScript 中对象方法非常多，全部记忆不现实，但我们可以记住常用的对象方法。话不多说，下面依次列举 Array 对象、String 对象、Number 对象、Boolean 对象、Date 对象、Math 对象、Object 对象的常用方法

> 本文为 JS 对象常用方法，其他用法详细请转到[MDN](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2F)或[菜鸟教程](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-obj-array.html)

# Array 对象

## 总览

![image-20230605161723270.png](JavaScript%E5%AF%B9%E8%B1%A1%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.assets/a7fc8dca66b34692aecb2440c10384e5tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 改变原数组

四大常用数组操作函数：`pop()、shift()、push()、unshift()`，用法自不必多说

### splice( )

- `splice()`方法用于添加或删除数组中的元素

- **注意：** 这种方法会改变原始数组，`toSpliced()`是其不改变原数组的复制版本

- 返回值：

  - 如果删除一个元素，则返回一个元素的数组
  - 如果未删除任何元素，则返回空数组

- 语法：

  ```js
  array.splice(index, howmany, item1, ....., itemX)
  ```

- 参数：

  | 参数                | 描述                                                                                                                                          |
  | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
  | _index_             | **必需**，规定从何处添加/删除元素。 该参数是开始插入和（或）删除的数组元素的下标，必须是数字（如果传递传递 _undefined_ ， 则会被转换为 _0_ ） |
  | _howmany_           | **可选**，规定应该删除多少元素。必须是数字，但可以是 "0"和负数。 如果未规定此参数，则删除从 **index**开始到原数组结尾的所有元素               |
  | _item1, ..., itemX_ | **可选**，要添加到数组的新元素                                                                                                                |

> 注意：使用`splice()`进行添加时，如果第二个参数为`0或者负数`，意思是不替换原数据，否则直接替换元素

```js
//情况一
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 1, 'Lemon', 'Kiwi'); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']

//情况二
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 2, 'Lemon', 'Kiwi'); // ['Banana', 'Orange', 'Lemon', 'Kiwi']

//情况三，这种类似于将Lemon传给了第二个参数（危险用法）
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 'Lemon', 'Kiwi'); // [ 'Banana', 'Orange', 'Kiwi', 'Apple', 'Mango' ]
```

### sort( )

- `sort()` 方法用于对数组的元素进行排序，排序顺序可以是字母或数字。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序（升序时，"40"将排在"5"前面）

- 使用数字排序，你必须通过一个**函数作为参数**来调用，函数指定数字是按照升序还是降序排列

- **注意：** 这种方法会改变原数组，`toSorted()`是其不改变原数组的复制版本

- 返回值：

  - `sort()` 会修改原数组项的排序，`sort()` 结束后会返回一个数组结果，这个结果其实**就是原数组**。并不是返回一个新的数组

- 语法：

  ```js
  array.sort(compareFn(a, b));
  ```

- 参数：

  | 参数        | 描述                                                                                    |
  | ----------- | --------------------------------------------------------------------------------------- |
  | _compareFn_ | **可选**，规定排序顺序，必须是函数                                                      |
  | _a，b_      | a：用于比较的第一个元素，不会是 `undefined` b：用于比较的第二个元素，不会是 `undefined` |

- `compareFn(a, b)` 返回值：

  | `compareFn(a, b)` 返回值 | 排序顺序                   |
  | ------------------------ | -------------------------- |
  | > 0                      | `a` 在 `b` 后，如 `[b, a]` |
  | < 0                      | `a` 在 `b` 前，如 `[a, b]` |
  | === 0                    | 保持 `a` 和 `b` 原来的顺序 |

- 比较函数形式：

  ```js
  function compareFn(a, b) {
    if (根据排序标准，a 小于 b) {
      return -1;
    }
    if (根据排序标准，a 大于 b) {
      return 1;
    }
    // a 一定等于 b
    return 0;
  }
  ```

- 示例：

  ```js
  //数字升序
  let points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return a - b;
  }); //降序只需要把a-b改为b-a

  //字符升序
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.sort(); //默认为升序：['Apple', 'Banana', 'Mango', 'Orange']
  fruits.reverse(); //将得到的字符串反转即可得到降序 ['Orange', 'Mango', 'Banana', 'Apple']

  //对象数组的排序
  const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ];
  // 根据 value 排序
  items.sort((a, b) => a.value - b.value);

  // 根据 name 排序
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // 忽略大小写
    const nameB = b.name.toUpperCase(); // 忽略大小写
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // name 必须相等
    return 0;
  });
  ```

### reverse( )

- `reverse()`方法用于颠倒数组中元素的顺序

- **注意：** 此方法改变原数组

- 返回值：

  - 返回颠倒后的原数组

- 语法：

  ```js
  array.reverse();
  ```

- 参数：

  | 类型    | 描述             |
  | ------- | ---------------- |
  | _Array_ | 颠倒顺序后的数组 |

- 示例：

  ```js
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.reverse(); //['Mango', 'Apple', 'Orange', 'Banana']
  ```

### fill( )

- `fill()` 方法用于将一个固定值替换数组的元素

- **注意：** 此方法改变原数组

- 返回值：

  - 返回改变后的原数组

- 语法：

  ```js
  array.fill(value, start, end);
  ```

- 参数：

  | 参数    | 描述                                                           |
  | ------- | -------------------------------------------------------------- |
  | _value_ | **必需**，填充的值                                             |
  | _start_ | **可选**，开始填充位置                                         |
  | _end_   | **可选**，停止填充位置，不包括**end** (默认为**array.length**) |

- 示例：

  ```js
  //写明start和end（不包括end索引）
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.fill('Runoob', 0, 2); //['Runoob', 'Runoob', 'Apple', 'Mango']

  //不写明
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.fill('Runoob'); //['Runoob', 'Runoob', 'Runoob', 'Runoob']
  ```

## 不改变原数组

### forEach( )

- `forEach()` 方法用于调用数组的每个元素，并将元素传递给回调函数

- **注意：**`forEach()`对于空数组是不会执行回调函数的

- **注意：**`forEach()`没有返回值

- 语法：

  ```js
  array.forEach(callbackFn(currentValue, index, arr), thisValue);
  ```

- 参数：

  | 参数                                   | 描述                                                                                                                                      |
  | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
  | _callbackFn(currentValue, index, arr)_ | **必需**，数组中每个元素需要调用的函数。 函数参数：**currentValue**必需，当前元素的索引值**index**可选，当前元素所属的数组对象**arr**可选 |
  | _thisValue_                            | **可选**，传递给函数的值一般用`this`值。如果这个参数为空，`undefined`会传递给`this`值                                                     |

### indexOf( )

- `indexOf()` 方法可返回数组中某个指定的元素位置

- 该方法将从头到尾地检索数组，看它是否含有对应的元素。开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）

- 返回值：

  - 如果找到一个 item，则返回 item 的第一次出现的位置（索引）。如果在数组中没找到指定元素则返回 -1

- 语法：

  ```js
  array.indexOf(item, start);
  ```

- 参数：

  | 参数    | 描述                                                                                                                                     |
  | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | _item_  | **必须**，查找的元素                                                                                                                     |
  | _start_ | **可选**的整数参数，规定在数组中开始检索的位置。它的合法取值是`0`到`stringObject.length - 1`。如省略该参数，则将从字符串的首字符开始检索 |

### filter( )

- `filter()` 方法（过滤）创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素

- **注意：**`filter()` 不会对空数组进行检测

- **注意：**`filter()` 不会改变原始数组

- 返回值：

  - 返回符合条件的新数组

- 语法：

  ```js
  array.filter(function(currentValue, index, arr), thisValue)
  ```

- 参数：

  | 参数                                | 描述                                                                                                                                     |
  | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | _function(currentValue, index,arr)_ | **必须**，数组中的每个元素都会执行这个函数。函数参数：**currentValue**必须，当前元素的值**index**可选，当前元素属于的数组对象**arr**可选 |
  | _thisValue_                         | **可选**，对象作为该执行回调时使用，传递给函数，用作`this`的值。 如果省略了 _thisValue_ ，`this`的值为`undefined`                        |

- 示例：

  ```js
  //获取全部偶数
  let arr = [56, 15, 48, 3, 7];
  let newArr = arr.filter(function (value, index, array) {
    return value % 2 === 0;
  });
  console.log(newArr); // [56, 48]

  //数组去重
  function unique(arr) {
    return arr.filter(function (item, index, arr) {
      //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
      return arr.indexOf(item, 0) === index;
    });
  }
  var arr = [1, 1, 'RUNOOB', 'RUNOOB', true, true, 15];
  console.log(unique(arr)); // [1, "RUNOOB", true, 15]

  //去除数组空值
  let newrr = ['', '', 1, 2, 3];
  var newArr = newrr.filter((item) => item); //这里的return为判断条件，为真则放在新的数组中
  console.log(newArr); //[1,2,3]
  ```

### map( )

- `map()` 方法（加工）按照原始数组元素顺序依次处理元素

- **注意：**`map()` 不会对空数组进行检测

- **注意：**`map()` 不会改变原始数组

- 返回值：

  - 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

- 语法：

  ```js
  array.map(function(currentValue, index, arr), thisValue)
  ```

- 参数：

  | 参数                                | 描述                                                                                                                                               |
  | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _function(currentValue, index,arr)_ | **必须**，数组中的每个元素都会执行这个函数。函数参数：**currentValue**必须，当前元素的值**index**可选，当前元素属于的数组对象**arr**可选           |
  | _thisValue_                         | **可选**，对象作为该执行回调时使用，传递给函数，用作`this`的值。 如果省略了 _thisValue_，或者传入`null、undefined`，那么回调函数的`this`为全局对象 |

- 示例：

  ```js
  [(4, 9, 16, 25)] //map对原数组加工
    .map((item) => Math.sqrt(item)); //[2, 3, 4, 5]

  //面试题补充
  let newArr = ['1', '2', '3'].map(parseInt);
  console.log(newArr); //[1, NaN, NaN]

  //原理：parseInt(string, radix)，接收两个参数。string：要转化的字符串；radix：要转化的进制数(将这个字符串转为多少进制的数，默认为 10，即将字符串转为十进制的数)，radix 的范围 为 2-36的整数， 超出这个返回将返回 NaN。
  //当 map() 中的函数可以接收参数时，map() 函数会自动把参数传递进去，所以三次执行顺序，parseInt() 接收的三次参数分别是:[parseInt('1', 0), parseInt('2', 1), parseInt('3', 2)]。
  ```

> - 相同点：`filter` 和 `map`都是对数组的操作，均返回一个新的数组
> - 不同点：`filter`是满足条件的留下，是对原数组的过滤；`map`则是对原数组的加工，映射成一一映射的新数组
>
> 补充：
>
> - `map`最常见的用法就是遍历一个数组，返回一个新的数组。除此之外，`map`还可以这样用：
>
>   （1）map(Number)：将 string 数组转换为 number 数组
>
>   （2）map(String)：将 number 数组转成 string 数组

### find( )

- `find()`方法返回通过测试（函数内判断）的数组的第一个元素的值

- `find()`方法为数组中的每个元素都调用一次函数执行

- **注意：** `find()`对于空数组，函数是不会执行的

- **注意：** `find()`并没有改变数组的原始值

- **注意：** `find()`返回的元素如果是复杂数据类型，修改返回的元素，原数组中对应的元素也会更新，这里是因为引用的是同一个对象，属于浅拷贝

- 返回值：

  - 当数组中的元素在测试条件时返回 _true_ 时，`find()`返回符合条件的元素，之后的值不会再调用执行函数，如果没有符合条件的元素返回 _undefined_

- 语法：

  ```js
  array.find(function(currentValue, index, arr),thisValue)
  ```

- 参数：

  | 参数                                | 描述                                                                                                                                     |
  | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | _function(currentValue, index,arr)_ | **必须**，数组中的每个元素都会执行这个函数。函数参数：**currentValue**必须，当前元素的值**index**可选，当前元素属于的数组对象**arr**可选 |
  | _thisValue_                         | **可选**， 传递给函数的值一般用`this`值。 如果这个参数为空，`undefined`会传递给`this`值                                                  |

- 示例：

  ```js
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find((element) => element > 10);
  console.log(found); // Expected output: 12

  //浅拷贝影响原对象情况
  const goods = [
    {
      name: '苹果',
      price: 9999,
    },
    {
      name: '黄瓜',
      price: 8888,
    },
    {
      name: '雪梨',
      price: 8888,
    },
  ];
  const result = goods.find((item, index) => item.name === '苹果');
  console.log(result); //{name: '苹果', price: 9999}
  result.price++;
  console.log(goods);
  //{name: '苹果', price: 10000},{name: '黄瓜', price: 8888},{name: '雪梨', price: 8888}
  ```

> `find`与`findIndex`：用法完全一样，只不过`find`是找元素（找不到返回 _undefined_ ），`findIndex`是找索引（找不到返回 _-1_ ）
>
> `find`和`filter`的区别：
>
> 1. 返回值不一样, `filter`返回的是数组`find`返回的是数组元素
> 2. 查找方式不一样, `filter`是查找所有满足条件的数组元素, `find`只查找第一个满足条件的, 找到就终止查找

### every( )

- `every()`方法用于检测数组所有元素是否都符合指定条件（通过函数提供）

- `every()`方法使用指定函数检测数组中的所有元素

- **注意：** `every()`不会对空数组进行检测，数组为空则返回*true*

- **注意：** `every()`不会改变原始数组

- 返回值：

  - 如果数组中检测到有一个元素不满足，则整个表达式返回 _false_ ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 _true_

- 语法：

  ```js
  array.every(function(currentValue, index, arr), thisValue)
  ```

- 参数：

  | 参数                                | 描述                                                                                                                                     |
  | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
  | _function(currentValue, index,arr)_ | **必须**，数组中的每个元素都会执行这个函数。函数参数：**currentValue**必须，当前元素的值**index**可选，当前元素属于的数组对象**arr**可选 |
  | _thisValue_                         | **可选**，对象作为该执行回调时使用，传递给函数，用作`this`的值。 如果省略了 _thisValue_ ，`this`的值为`undefined`                        |

- 示例：

  ```js
  //写法一
  const isBelowThreshold = (currentValue) => currentValue < 40;
  const array1 = [1, 30, 39, 29, 10, 13];
  console.log(array1.every(isBelowThreshold)); // Expected output: true
  //写法二
  const arr = [10, 20, 30];
  console.log(arr.every((item) => item >= 11)); // Expected output: false
  ```

> `every`与`some`区别：
>
> 1. `every`所有数组元素满足条件则返回 _true_ , 只要有一个不满足条件就返回 _false_ （有一个不满足就停止），如果数组为空则返回 _true_
> 2. `some`只要有一个数组元素满足条件则返回 _true_ , 都不满足则返回 _false_ （都不满足才停止），如果数组为空则返回 _false_
> 3. 对于`some`和`every`遍历空数组返回值的辅助理解：`some`的作用是找元素是否存在，因此数组为空时返回 _false_ ，`every`是判断是否都满足条件，因此数组为空时返回 _true_

### slice( )

- `slice()` 方法可从已有的数组中返回选定的元素

- `slice()` 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分

- **注意：** `slice()` 方法不会改变原数组

- 返回值：

  - 返回一个新的数组，包含从 _start_（包括该元素） 到 _end_（不包括该元素）的 _arrayObject_ 中的元素

- 语法：

  ```js
  array.slice(start, end);
  ```

- 参数：

  | 参数    | 描述                                                                                                                                                                                                                                                                                                                 |
  | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _start_ | **可选**，规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）                                                                                                                                             |
  | _end_   | **可选**，规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从*start*到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素） |

- 示例：

  ```js
  //菜鸟教程
  let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  let myBest = fruits.slice(-3, -1); // 截取倒数第三个（包含）到倒数第一个（不包含）的两个元素
  let myBest = fruits.slice(-3); // 截取最后三个元素

  //MDN
  const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
  console.log(animals.slice(2, 4)); // ["camel", "duck"]
  console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
  console.log(animals.slice(-2)); // ["duck", "elephant"]
  console.log(animals.slice(2, -1)); // ["camel", "duck"]
  console.log(animals.slice()); // ["ant", "bison", "camel", "duck", "elephant"]
  ```

### concat( )

- `concat()` 方法用于连接两个或多个数组

- **注意：** 该方法不会改变原数组

- 返回值：

  - 返回一个新的数组

- 语法：

  ```js
  array1.concat(array2, array3, ..., arrayX)
  ```

- 参数：

  | 参数                         | 描述                     |
  | ---------------------------- | ------------------------ |
  | _array2, array3,..., arrayX_ | **必需**，需要连接的数组 |

- 示例：

  ```js
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = ['g', 'h', 'i'];
  const array4 = array1.concat(array2, array3);
  console.log(array4); // 输出：['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
  ```

### join( )

- `join()` 方法用于把数组中的所有元素转换一个**字符串**

- 元素是通过指定的分隔符（separator）进行分隔的

- **注意：** 该方法不会改变原数组

- 返回值：

  - 返回一个字符串。该字符串是通过把 _arrayObject_ 的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入 _separator（分隔符） 字符串_ 而生成的

- 语法：

  ```js
  array.join(separator);
  ```

- 参数：

  | 参数        | 描述                                                                   |
  | ----------- | ---------------------------------------------------------------------- |
  | _separator_ | **可选**，指定要使用的分隔符。如果省略该参数，则使用**逗号**作为分隔符 |

- 示例：

  ```js
  //无参数
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fruits.join()); //Banana,Orange,Apple,Mango

  //有参数
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  let energy = fruits.join(' and ');
  console.log(energy); //Banana and Orange and Apple and Mango
  ```

### reduce( )

- `reduce()` 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

- `reduce()` 方法对数组中的每个元素按序执行一个提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值

- 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被用作初始值，迭代器将从第二个元素开始执行（即从索引为 1 而不是 0 的位置开始）

- **注意:** `reduce()` **对于空数组是不会执行回调函数的**

- 不改变原数组

- 语法：

  ```js
  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  ```

- 参数：

  | 参数                                      | 描述                                                                                                                                                                                                        |
  | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _function(total,currentValue, index,arr)_ | **必需**，用于执行每个数组元素的函数 函数参数：参数描述**total**必需，为初始值，或者计算结束后的返回值。当前元素**currentValue**必需。当前元素的索引**currentIndex**可选。当前元素所属的数组对象**arr**可选 |
  | _initialValue_                            | **可选**，传递给函数的初始值                                                                                                                                                                                |

- 示例：

  ```js
  //MDN
  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sumWithInitial); // Expected output: 10

  const arr = [1, 2, 3, 6];
  // 有初始值的情况
  const sum = arr.reduce((prev, item) => prev + item, 0);
  console.log(sum); //12
  // 无初始值的情况: 直接从第二个元素开始遍历, 将第一个元素作为初始值传入 prev
  const sum2 = arr.reduce((prev, item) => {
    console.log(prev, item);
    return prev + item;
  });
  console.log(sum2); //12
  ```

> **reduce 详细讲解：**
>
> `reduce` 方法是处理数组更通用的方式，而且 `filter` 和 `map` 方法都可以当作是 `reduce` 的特殊实现。 `reduce` 方法遍历数组中的每个项目并返回单个值（即字符串、数字、对象、数组）。 这是通过在每次迭代中调用一个回调函数来实现的
>
> 回调函数接受四个参数。 第一个参数称为叠加器，它是上一次迭代中回调函数的返回值，第二个参数是当前正在处理的数组元素，第三个参数是该参数的索引，第四个参数是在其上调用 `reduce` 方法的数组
>
> 除了回调函数，`reduce` 还有一个额外的参数作为叠加器的初始值。 如果没有第二个参数，会跳过第一次迭代，第二次迭代给叠加器传入数组的第一个元素

# String 对象

- String 对象用于处理文本（字符串）

- String 对象创建方法： `new String()`

- 语法：

  ```js
  let txt = new String('string');
  let txt = 'string';
  ```

## 总览

![image-20230607165911792.png](JavaScript%E5%AF%B9%E8%B1%A1%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.assets/f0536f23823647daa229ace1c79576actplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 正则相关

### search( )

- `search()` 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串

- 返回值：

  - 与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置，如果没有找到任何匹配的子串，则返回 -1

- 语法：

  ```js
  string.search(searchvalue);
  ```

- 参数：

  | 参数          | 描述                                 |
  | ------------- | ------------------------------------ |
  | _searchvalue_ | **必需**，查找的字符串或者正则表达式 |

- 示例：

  ```js
  //执行一次对大小写敏感的查找:
  let str = 'Mr. Blue has a blue house';
  console.log(str.search('blue')); //15

  //执行一次忽略大小写的检索:
  let str = 'Mr. Blue has a blue house';
  console.log(str.search(/blue/i)); //对大小匹配不敏感，4
  ```

### match( )

- `match()`方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配

- **注意：** `match()`方法将检索字符串 _String Object_ ，以找到一个或多个与 _regexp_ 匹配的文本。这个方法的行为在很大程度上有赖于 _regexp_ 是否具有标志 _g_ 。如果 _regexp_ 没有标志 _g_ ，那么`match()`方法就只能在 _stringObject_ 中执行一次匹配。如果没有找到任何匹配的文本，`match()`将返回 _null_ 。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息

- 返回值：

  - 存放匹配结果的数组，该数组的内容依赖于 _regexp_ 是否具有全局标志 _g_， 如果没找到匹配结果返回 _null_
  - 如果使用 _g_ 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组
  - 如果未使用 _g_ 标志，则仅返回第一个完整匹配及其相关的捕获组（`Array`）。在这种情况下，返回的项目将具有如下所述的其他属性

- 语法：

  ```js
  string.match(regexp);
  ```

- 参数：

  | 参数     | 描述                                                                                                                                       |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
  | _regexp_ | **必需**，规定要匹配的模式的 _RegExp_ 对象。如果该参数不是 _RegExp_ 对象，则需要首先把它传递给 _RegExp_ 构造函数，将其转换为 _RegExp_ 对象 |

- 示例：

  ```js
  let str = 'The rain in SPAIN stays mainly in the plain';
  let n = str.match(/ain/gi); //ain,AIN,ain,ain

  //如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。在这种情况下，返回的项目将具有如下所述的其他属性
  const repeatStr = 'row row row oh row row';
  const repeatRegex = /(\w+) \1 \1/;
  console.log(repeatRegex.test(repeatStr)); //true
  console.log(repeatStr.match(repeatRegex)); //["row row row", "row"]
  ```

### replace( )

- `replace()` 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串

- **注意：** 该方法不会改变原始字符串

- 返回值：

  - 一个新的字符串，是用 _replacement_ 替换了 _regexp_ 的第一次匹配或所有匹配之后得到的

- 语法：

  ```js
  string.replace(searchvalue, newvalue);
  ```

- 参数：

  | 参数          | 描述                                                                                                                                           |
  | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
  | _searchvalue_ | **必需**，规定子字符串或要替换的模式的 _RegExp_ 对象。如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 _RegExp_ 对象 |
  | _newvalue_    | **必需**，一个字符串值。规定了替换文本或生成替换文本的函数                                                                                     |

- 示例：

  ```js
  //正则全局替换
  let str = 'Mr Blue has a blue house and a blue car';
  let n = str.replace(/blue/g, 'red');

  //基本用法
  let str = 'Visit Microsoft! Visit Microsoft!';
  let n = str.replace('Microsoft', 'Runoob'); //Visit Runoob!Visit Microsoft!
  ```

### split( )

- `split()` 方法用于把一个字符串分割成字符串数组

- 如果把空字符串 ("") 用作 _separator_ ，那么 _stringObject_ 中的每个字符之间都会被分割

- **注意：** `split()` 方法不改变原始字符串

- 返回值：

  - **一个字符串数组**。该数组是通过在 _separator_ 指定的边界处将字符串 _string Object_ 分割成子串创建的。返回的数组中的字串不包括 _separator_ 自身

- 语法：

  ```js
  string.split(separator, limit);
  ```

- 参数：

  | 参数        | 描述                                                                                                                                                         |
  | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | _separator_ | **可选**，字符串或正则表达式，从该参数指定的地方分割 _string Object_                                                                                         |
  | _limit_     | **可选**，该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度 |

- 示例：

  ```js
  //省略分割参数
  let str1 = 'How are you doing today?';
  let n1 = str1.split(); //['How are you doing today?']

  //分割每个字符，包括空格
  let str2 = 'How are you doing today?';
  let n2 = str2.split(''); //['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?']

  //分割路径
  let str3 = '/goods/add/';
  let n3 = str3.split('/'); //['', 'goods', 'add', '']

  //使用 limit 参数
  let str4 = 'How are you doing today?';
  let n4 = str3.split(' ', 3); //['How', 'are', 'you']

  //使用一个字符作为分隔符
  let str5 = 'How are you doing today?';
  let n5 = str4.split('o'); //['H', 'w are y', 'u d', 'ing t', 'day?']
  ```

## 基本方法

### charAt( )

- `charAt()` 方法可返回指定位置的字符

- 第一个字符位置为 0，第二个字符位置为 1，以此类推

- 返回值：

  - 返回在指定位置的字符

- 语法：

  ```js
  string.charAt(index);
  ```

- 参数：

  | 参数    | 描述                                                         |
  | ------- | ------------------------------------------------------------ |
  | _index_ | **必需**，表示字符串中某个位置的数字，即字符在字符串中的位置 |

- 示例：

  ```js
  let str = 'HELLO WORLD';
  let n = str.charAt(2); //L
  ```

### concat( )

- `concat()` 方法用于连接两个或多个字符串

- **注意：** 该方法没有改变原有字符串

- 返回值：

  - 返回连接两个或多个字符串新字符串

- 语法：

  ```js
  string.concat(string1, string2, ..., stringX)
  ```

- 参数：

  | 参数                             | 描述                                                 |
  | -------------------------------- | ---------------------------------------------------- |
  | _string1, string2, ..., stringX_ | **必需**，将被连接为一个字符串的一个或多个字符串对象 |

- 示例：

  ```js
  let str1 = 'Hello ';
  let str2 = 'world!';
  let str3 = ' Have a nice day!';
  let n = str1.concat(str2, str3); //Hello world! Have a nice day!
  ```

### endsWith( )

- `endsWith()` 方法用来判断当前字符串是否是以指定的子字符串结尾的（区分大小写）

- 返回值：

  - 如果字符串以指定的值结尾返回 _true_ ，否则返回 _false_

- 语法：

  ```js
  string.endsWith(searchvalue, length);
  ```

- 参数：

  | 参数          | 描述                                                     |
  | ------------- | -------------------------------------------------------- |
  | _searchvalue_ | **必需**，要搜索的子字符串                               |
  | _length_      | 设置字符串的长度，默认值为原始字符串长度 _string.length_ |

- 示例：

  ```js
  let str = 'To be, or not to be, that is the question.';

  str.endsWith('question.'); // true
  str.endsWith('to be'); // false
  str.endsWith('to be', 19); // true
  ```

> `startsWith()`用法与`endsWith()`类似，这里不再赘述

### indexOf( )

- `indexOf()` 方法可返回某个指定的字符串值在字符串中首次出现的位置

- **注意：** `indexOf()` 方法区分大小写

- 返回值：

  - 查找指定字符串第一次出现的位置，如果没找到匹配的字符串则返回 _-1_

- 语法：

  ```js
  string.indexOf(searchvalue, start);
  ```

- 参数：

  | 参数          | 描述                                                                                                                                    |
  | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
  | _searchvalue_ | **必需**，规定需检索的字符串值                                                                                                          |
  | _start_       | **可选**的整数参数，规定在字符串中开始检索的位置。取值是 _0_ 到 _string Object.length - 1_ 。如省略该参数，则将从字符串的首字符开始检索 |

- 示例：

  ```js
  //不带start参数
  let str = 'Hello world, welcome to the universe.';
  let n = str.indexOf('e'); //1

  //带start参数
  let str = 'Hello world, welcome to the universe.';
  let n = str.indexOf('e', 5); //14
  ```

### includes( )

- `includes()` 方法用于判断字符串是否包含指定的子字符串

- **注意：** `includes()` 方法区分大小写

- 返回值：

  - 如果找到匹配的字符串返回 _true_，否则返回 _false_

- 语法：

  ```js
  string.includes(searchvalue, start);
  ```

- 参数：

  | 参数          | 描述                                       |
  | ------------- | ------------------------------------------ |
  | _searchvalue_ | **必需**，要查找的字符串                   |
  | _start_       | **可选**，设置从那个位置开始查找，默认为 0 |

- 示例：

  ```js
  let str = 'Hello world, welcome to the Runoob.';
  let n = str.includes('world', 12); //false
  ```

### repeat( )

- `repeat()` 方法可以把字符串复制指定次数

- **注意：** 不改变原字符串

- 返回值：

  - 返回复制指定次数并连接在一起的字符串

- 语法：

  ```js
  string.repeat(count);
  ```

- 参数：

  | 参数    | 描述                       |
  | ------- | -------------------------- |
  | _count_ | **必需**，设置要复制的次数 |

- 示例：

  ```js
  let str = 'Runoob';
  str.repeat(2); //RunoobRunoob
  ```

### slice( )

- `slice(start, end)` 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分

- 返回值：

  - 提取的字符串

- 语法：

  ```js
  string.slice(start, end);
  ```

- 参数：

  | 参数    | 描述                                                                                                                                                                                                                                                  |
  | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _start_ | **必需**，要抽取的片断的起始下标，第一个字符位置为 0。如果为负数，则从尾部开始截取                                                                                                                                                                    |
  | _end_   | **可选**，紧接着要截取的片段结尾的下标。若未指定此参数，则要提取的子串包括*start*到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素） |

- 示例：

  ```js
  //提取所有字符串
  let str = 'Hello world!';
  let n = str.slice(0); //Hello world!

  //从字符串的第3个位置提取字符串片段
  let str = 'Hello world!';
  let n = str.slice(3); //lo world!

  //从字符串的第3个位置到第8个位置直接的字符串片段
  let str = 'Hello world!';
  let n = str.slice(3, 8); //lo wo

  //提取最后一个字符和最后两个字符(-1 + str.length)、(-2 + str.length)
  let str = 'Hello world!';
  let n = str.slice(-1); //!
  let n2 = str.slice(-2); //d!
  ```

### substr( )

- `substr()`方法可在字符串中抽取从 _开始_ 下标开始的指定数目的字符

- **提示：**`substr()`的参数指定的是子串的开始位置和长度，**官网目前已经弃用，不过仍可以使用（推荐 substring）**

- 返回值：

  - 返回对应的子串

- 语法：

  ```js
  string.substr(start, length);
  ```

- 参数：

  | 参数     | 描述                                                                                                                                                                     |
  | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | _start_  | **必需**，要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推 |
  | _length_ | **可选**，子串中的字符数。必须是数值。如果省略了该参数，那么返回从 _stringObject_ 的开始位置到结尾的字串                                                                 |

- 示例：

  ```js
  var str = 'abcdefghij';

  console.log('(1,2): ' + str.substr(1, 2)); // (1,2): bc
  console.log('(-3,2): ' + str.substr(-3, 2)); // (-3,2): hi
  console.log('(-3): ' + str.substr(-3)); // (-3): hij
  console.log('(1): ' + str.substr(1)); // (1): bcdefghij
  console.log('(-20, 2): ' + str.substr(-20, 2)); // (-20, 2): ab
  console.log('(20, 2): ' + str.substr(20, 2)); // (20, 2):
  ```

### substring( )

- `substring()` 方法用于提取字符串中介于两个指定下标之间的字符

- `substring()` 方法返回的子串包括 _开始_ 处的字符，但不包括 _结束_ 处的字符

- **注意：** `substring()`方法不会改变原字符串

- 返回值：

  - 返回对应的子串

- 语法：

  ```js
  string.substring(from, to);
  ```

- 参数：

  | 参数   | 描述                                                                                                                                                  |
  | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
  | _from_ | **必需**，一个非负的整数，规定要提取的子串的第一个字符在 _string Object_ 中的位置。                                                                   |
  | _to_   | **可选**，一个非负的整数，比要提取的子串的最后一个字符在 _string Object_ 中的位置多 1(不包含 to)。 如果省略该参数，那么返回的子串会一直到字符串的结尾 |

- 示例：

  ```js
  let str = 'Hello world!';
  console.log(str.substring(3)); //lo world!
  console.log(str.substring(3, 7)); //lo w
  ```

### toLowerCase( )

- `toLowerCase()` 方法用于把字符串转换为小写

- 返回值：

  - 不改变原字符串，返回转换后的新字符串

- 语法：

  ```js
  string.toLowerCase();
  ```

- 示例：

  ```js
  let str = 'Runoob';
  console.log(str.toLowerCase());
  ```

> 字符全部转换为大写：`toUpperCase()`

### trim( )

- `trim()` 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等

- `trim()` 方法不会改变原始字符串

- `trim()` 方法不适用于`null, undefined, Number`类型

- 返回值：

  - 返回移除头尾空格的字符串

- 语法：

  ```js
  string.trim();
  ```

- 示例：

  ```js
  var str = '       Runoob        ';
  console.log(str.trim()); //Runoob
  ```

# Number 对象

- Number 对象是原始数值的包装对象

- Number 创建方式 `new Number()`

- 语法：

  ```js
  let num = new Number(value);
  //注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)
  ```

- Number 常见属性

  | 属性                                                                                                                    | 描述                       |
  | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- |
  | [MAX_VALUE](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-max-value.html)                 | 可表示的最大的数。         |
  | [MIN_VALUE](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-min-value.html)                 | 可表示的最小的数。         |
  | [NEGATIVE_INFINITY](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-negative-infinity.html) | 负无穷大，溢出时返回该值。 |
  | [NaN](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-number-nan.html)                      | 非数字值。                 |
  | [POSITIVE_INFINITY](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-positive-infinity.html) | 正无穷大，溢出时返回该值。 |

- Number 常见方法：

  | 方法                                                                                                                   | 描述                                                 |
  | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
  | [isFinite](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-isfinite-number.html)           | 检测指定参数是否为无穷大。                           |
  | [isInteger](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-isinteger-number.html)         | 检测指定参数是否为整数。                             |
  | [isNaN](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-isnan-number.html)                 | 检测指定参数是否为 NaN。                             |
  | [isSafeInteger](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-issafeInteger-number.html) | 检测指定参数是否为安全整数。                         |
  | [toFixed(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tofixed.html)                 | 把数字转换为字符串，结果的小数点后有指定位数的数字。 |
  | [toString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tostring-number.html)         | 把数字转换为字符串，使用指定的基数                   |
  | [valueOf()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-valueof-number.html)           | 返回一个 Number 对象的基本数字值。                   |

# Boolean 对象

## toString( )

- `toString()` 方法可把一个逻辑值转换为字符串，并返回结果

- **注意：** 当需要把 Boolean 对象转换成字符串的情况 JavaScript 会自动调用此方法

- 语法：

  ```js
  boolean.toString();
  ```

- 返回值：

  | Type     | 描述                    |
  | -------- | ----------------------- |
  | _String_ | _"true"_ 或者 _"false"_ |

- 示例：

  ```js
  let bool = new Boolean(1);
  let myvar = bool.toString(); //'true'
  ```

## valueOf( )

- `valueOf()` 方法可返回 Boolean 对象的原始值

- 返回值：

  - true 或者 false

- 语法：

  ```js
  boolean.valueOf();
  ```

- 返回值：

  | Type      | 描述                |
  | --------- | ------------------- |
  | _Boolean_ | _true_ 或者 _false_ |

- 示例：

  ```js
  let bool = new Boolean(0);
  let myvar = bool.valueOf(); //true
  ```

# Date 对象

- Date 对象用于处理日期与时间

- 创建对象：

  ```js
  const d = new Date();
  const d = new Date(milliseconds); // 参数为毫秒
  const d = new Date(dateString);
  const d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  ```

  > - **milliseconds** 参数是一个 Unix 时间戳（Unix Time Stamp），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数
  > - **dateString** 参数表示日期的字符串值
  > - **year, month, day, hours, minutes, seconds, milliseconds** 分别表示年、月、日、时、分、秒、毫秒

- 获取时间戳：

  ```js
  //方法一
  const date = new Date();
  date.getTime() +
    //方法二
    new Date(); //本质为强转为数字

  //方法三
  Date.now(); //只能获取当前时间戳
  ```

- Date 对象常用方法：

  | 方法                                                                                                                        | 描述                                                     |
  | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
  | [getDate()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getdate.html)                       | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。              |
  | [getDay()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getday.html)                         | 从 Date 对象返回一周中的某一天 (0 ~ 6)。                 |
  | [getFullYear()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getfullyear.html)               | 从 Date 对象以四位数字返回年份。                         |
  | [getHours()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-gethours.html)                     | 返回 Date 对象的小时 (0 ~ 23)。                          |
  | [getMilliseconds()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getmilliseconds.html)       | 返回 Date 对象的毫秒(0 ~ 999)。                          |
  | [getMinutes()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getminutes.html)                 | 返回 Date 对象的分钟 (0 ~ 59)。                          |
  | [getMonth()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getmonth.html)                     | 从 Date 对象返回月份 (0 ~ 11)。                          |
  | [getSeconds()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-getseconds.html)                 | 返回 Date 对象的秒数 (0 ~ 59)。                          |
  | [getTime()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-gettime.html)                       | 返回 1970 年 1 月 1 日至今的毫秒数。                     |
  | [parse()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-parse.html)                           | 返回 1970 年 1 月 1 日午夜到指定日期（字符串）的毫秒数。 |
  | [setDate()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setdate.html)                       | 设置 Date 对象中月的某一天 (1 ~ 31)。                    |
  | [setFullYear()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setfullyear.html)               | 设置 Date 对象中的年份（四位数字）。                     |
  | [setHours()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-sethours.html)                     | 设置 Date 对象中的小时 (0 ~ 23)。                        |
  | [setMilliseconds()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setmilliseconds.html)       | 设置 Date 对象中的毫秒 (0 ~ 999)。                       |
  | [setMinutes()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setminutes.html)                 | 设置 Date 对象中的分钟 (0 ~ 59)。                        |
  | [setMonth()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setmonth.html)                     | 设置 Date 对象中月份 (0 ~ 11)。                          |
  | [setSeconds()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-setseconds.html)                 | 设置 Date 对象中的秒钟 (0 ~ 59)。                        |
  | [setTime()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-settime.html)                       | setTime() 方法以毫秒设置 Date 对象。                     |
  | [toDateString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-todatestring.html)             | 把 Date 对象的日期部分转换为字符串。                     |
  | [toLocaleDateString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tolocaledatestring.html) | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。   |
  | [toLocaleTimeString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tolocaletimestring.html) | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。   |
  | [toLocaleString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tolocalestring.html)         | 根据本地时间格式，把 Date 对象转换为字符串。             |
  | [toString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tostring-date.html)                | 把 Date 对象转换为字符串。                               |
  | [toTimeString()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-totimestring.html)             | 把 Date 对象的时间部分转换为字符串。                     |

# Math 对象

- Math 对象用于执行数学任务

- Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math( )

- Math 对象方法：

  | 方法                                                                                                     | 描述                                                          |
  | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
  | [abs(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-abs.html)           | 返回 x 的绝对值。                                             |
  | [acos(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-acos.html)         | 返回 x 的反余弦值。                                           |
  | [asin(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-asin.html)         | 返回 x 的反正弦值。                                           |
  | [atan(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-atan.html)         | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。      |
  | [atan2(y,x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-atan2.html)     | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
  | [ceil(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-ceil.html)         | 对数进行上舍入。                                              |
  | [cos(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-cos.html)           | 返回数的余弦。                                                |
  | [exp(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-exp.html)           | 返回 Ex 的指数。                                              |
  | [floor(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-floor.html)       | 对 x 进行下舍入。                                             |
  | [log(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-log.html)           | 返回数的自然对数（底为 e）。                                  |
  | [max(x,y,z,...,n)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-max.html) | 返回 x,y,z,...,n 中的最高值。                                 |
  | [min(x,y,z,...,n)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-min.html) | 返回 x,y,z,...,n 中的最低值。                                 |
  | [pow(x,y)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-pow.html)         | 返回 x 的 y 次幂。                                            |
  | [random()](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-random.html)      | 返回 0 ~ 1 之间的随机数。                                     |
  | [round(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-round.html)       | 四舍五入。                                                    |
  | [sin(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-sin.html)           | 返回数的正弦。                                                |
  | [sqrt(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-sqrt.html)         | 返回数的平方根。                                              |
  | [tan(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tan.html)           | 返回角的正切。                                                |
  | [tanh(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-tanh.html)         | 返回一个数的双曲正切函数值。                                  |
  | [trunc(x)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fjsref%2Fjsref-trunc.html)       | 将数字的小数部分去掉，只保留整数部分。                        |

# Object 对象

## 总览

![image-20230605221501317.png](JavaScript%E5%AF%B9%E8%B1%A1%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.assets/08e49d05a84f40ee91f21558086dc35atplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## Object 静态方法

### Object.keys( )

- `Object.keys()` 方法用于获取对象中所有属性名（键）

- 返回值：

  - 返回的是一个数组，数组中存放所有的键

- 语法：

  ```js
  Object.keys(obj);
  ```

- 参数：

  | 参数  | 描述               |
  | ----- | ------------------ |
  | _obj_ | **必需**，一个对象 |

- 示例：

  ```js
  const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };

  console.log(Object.keys(object1)); // Expected output: Array ["a", "b", "c"]
  ```

### Object.values( )

- `Object.values()` 方法用于获取对象中所有属性值（值）

- 返回值：

  - 返回的是一个数组，数组中存放所有的值

- 语法：

  ```js
  Object.values(obj);
  ```

- 参数：

  | 参数  | 描述               |
  | ----- | ------------------ |
  | _obj_ | **必需**，一个对象 |

- 示例：

  ```js
  const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };

  console.log(Object.values(object1)); // Expected output: Array ["somestring", 42, false]
  ```

### Object.entries( )

- `Object.entries()` 方法返回一个数组，包含给定对象自有的可枚举字符串键属性的键值对

- **传入的对象的键是数值类型时，它会将返回按键排序之后的数据**

- 返回值：

  - 一个由给定对象自有的可枚举字符串键属性的键值对组成的数组。每个键值对都是一个包含两个元素的数组：第一个元素是属性的键（始终是字符串），第二个元素是属性值

- 语法：

  ```js
  Object.entries(obj);
  ```

- 参数：

  | 参数  | 描述               |
  | ----- | ------------------ |
  | _obj_ | **必需**，一个对象 |

- 示例：

  ```js
  //示例一
  const object1 = {
    a: 'somestring',
    b: 42,
  };
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  // Expected output:
  // "a: somestring"
  // "b: 42"

  //示例二
  const obj = { foo: 'bar', baz: 42 };
  console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

  // 类数组对象
  const obj = { 1: 'a', 0: 'b', 2: 'c' };
  console.log(Object.entries(obj)); // [ ['0', 'b'], ['1', 'a'], ['2', 'c'] ]

  // 具有随机键排序的类数组对象
  const anObj = { 100: 'a', 2: 'b', 7: 'c' };
  console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
  ```

### Object.getOwnPropertyNames( )

- `Object.getOwnPropertyNames()` 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组

- 该方法依旧会对返回的属性名进行排序（数字类型与字符类型均排序）

- 如果对象是数组，返回的数组中除了序号外，末尾还有'length'元素，可以手动过滤掉

- 返回值：

  - 一个对象，其自身的可枚举和不可枚举属性的名称被返回

- 语法：

  ```js
  Object.getOwnPropertyNames(obj);
  ```

- 参数：

  | 参数  | 描述               |
  | ----- | ------------------ |
  | _obj_ | **必需**，一个对象 |

- 示例：

  ```js
  var arr = ['a', 'b', 'c'];
  console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

  // 类数组对象
  var obj = { 0: 'a', 1: 'b', 2: 'c' };
  console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]

  // 类数组对象
  var obj = { uname: 'a', bbb: 'b', ccc: 'c' };
  console.log(Object.getOwnPropertyNames(obj).sort()); // ["bbb", "ccc", "uname"]
  ```

### Object.assign( )

- `Object.assign()` 方法将一个或者多个 _源对象_ 中所有可枚举的自有属性复制到 _目标对象_

- 返回值：

  - 返回修改后的目标对象

- 语法：

  ```js
  Object.assign(target, ...sources);
  ```

- 参数：

  | 参数      | 描述                                             |
  | --------- | ------------------------------------------------ |
  | _target_  | 需要应用源对象属性的目标对象，修改后将作为返回值 |
  | _sources_ | 一个或多个包含要应用的属性的源对象               |

- 示例：

  ```js
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };
  const returnedTarget = Object.assign(target, source);

  console.log(target); // Expected output: Object { a: 1, b: 4, c: 5 }
  console.log(returnedTarget === target); // Expected output: true
  ```

### Object.is( )

- `Object.is()` 方法用来确定两个值是否为相同值

- **注意：**`Object.is()` 不会对其操作数进行类型转换

- **注意：**`Object.is()` 和 `===` 之间的唯一区别在于它们处理带符号的 0 和 `NaN` 值的时候。`===` 运算符（和 `==` 运算符）将数值 `-0` 和 `+0` 视为相等，但是会将 `NaN` 视为彼此不相等。而该方法会判断两个`NaN`相等，将数值 `-0` 和 `+0` 视为不相等

- 返回值：

  - 一个布尔值，指示两个参数是否为相同的值

- 语法：

  ```js
  Object.is(value1, value2);
  ```

- 参数：

  | 参数     | 描述             |
  | -------- | ---------------- |
  | _value1_ | 要比较的第一个值 |
  | _value2_ | 要比较的第二个值 |

- 示例：

  ```js
  // 案例 1：评估结果和使用 === 相同
  Object.is(25, 25); // true
  Object.is('foo', 'foo'); // true
  Object.is('foo', 'bar'); // false
  Object.is(null, null); // true
  Object.is(undefined, undefined); // true
  Object.is(window, window); // true
  Object.is([], []); // false
  const foo = { a: 1 };
  const bar = { a: 1 };
  const sameFoo = foo;
  Object.is(foo, foo); // true
  Object.is(foo, bar); // false
  Object.is(foo, sameFoo); // true

  // 案例 2: 带符号的 0
  Object.is(0, -0); // false
  Object.is(+0, -0); // false
  Object.is(-0, -0); // true

  // 案例 3: NaN
  Object.is(NaN, 0 / 0); // true
  Object.is(NaN, Number.NaN); // true
  ```

### Object.hasOwn( )

- 如果指定的对象 _自身_ 有指定的属性，则静态方法 `Object.hasOwn()` 返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`

- 如果指定的属性是该对象的直接属性——`Object.hasOwn()` 方法返回 `true`，即使属性值是 `null` 或 `undefined`。如果属性是继承的或者不存在，该方法返回 `false`。它不像 `in` 运算符，这个方法不检查对象的原型链中的指定属性

- **注意：** 建议使用此方法替代 `Object.hasOwnProperty()`，因为它适用于使用 `Object.create(null)` 创建的对象以及覆盖了继承的 `hasOwnProperty()` 方法的对象

- 返回值：

  - 如果指定的对象中直接定义了指定的属性，则返回 `true`；否则返回 `false`

- 语法：

  ```js
  Object.hasOwn(obj, prop);
  ```

- 参数：

  | 参数   | 描述                                |
  | ------ | ----------------------------------- |
  | _obj_  | 要测试的 JavaScript 实例对象        |
  | _prop_ | 要测试的属性的字符串名称或者 Symbol |

- 示例：

  ```js
  //示例一
  const example = {};
  Object.hasOwn(example, 'prop'); // false - 目标对象的属性 'prop' 未被定义

  example.prop = 'exists';
  Object.hasOwn(example, 'prop'); // true - 目标对象的属性 'prop' 已被定义

  example.prop = null;
  Object.hasOwn(example, 'prop'); // true - 目标对象本身的属性存在，值为 null

  example.prop = undefined;
  Object.hasOwn(example, 'prop'); // true - 目标对象本身的属性存在，值为 undefined

  //示例二
  const example = {};
  example.prop = 'exists';

  // `hasOwn` 静态方法只会对目标对象的直接属性返回 true：
  Object.hasOwn(example, 'prop'); // returns true
  Object.hasOwn(example, 'toString'); // returns false
  Object.hasOwn(example, 'hasOwnProperty'); // returns false

  //它也可以用于测试使用 Object.create(null) 创建的对象
  const foo = Object.create(null);
  foo.prop = 'exists';
  if (Object.hasOwn(foo, 'prop')) {
    console.log(foo.prop); //true - works irrespective of how the object is created.
  }
  ```

## Object 实例方法

### hasOwnProperty( )

- `hasOwnProperty()` 方法返回一个布尔值，表示对象**自有属性**（而不是继承来的属性）中是否具有指定的属性

- 如果指定的属性是对象的直接属性——即使值为 `null` 或者 `undefined`，`hasOwnProperty()` 方法也会返回 `true`。如果属性是继承的，或者根本没有声明该属性，则该方法返回 `false`。与 `in` 运算符不同的是，该方法不会在对象原型链中检查指定的属性

- **注意：** 如果在对象中重新实现了该方法，或者使用 `Object.create(null)` 创建了对象（这些对象不继承自 `Object.prototype`），则该方法将不可用

- 返回值：

  - 如果对象有指定属性作为自有属性，则返回 `true`；否则返回 `false`

- 语法：

  ```js
  对象.hasOwnProperty(prop);
  ```

- 参数：

  | 参数   | 描述                                |
  | ------ | ----------------------------------- |
  | _prop_ | 要测试的属性的字符串名称或者 Symbol |

- 示例：

  ```js
  //示例一
  const example = {};
  example.hasOwnProperty('prop'); // 返回 false

  example.prop = 'exists';
  example.hasOwnProperty('prop'); // 返回 true——“prop”已定义

  example.prop = null;
  example.hasOwnProperty('prop'); // 返回 true——自有属性存在且值为 null

  example.prop = undefined;
  example.hasOwnProperty('prop'); // 返回 true——自有属性存在且值为 undefined

  //示例二
  const example = {};
  example.prop = 'exists';

  // `hasOwnProperty` 仅对直接属性返回 true：
  example.hasOwnProperty('prop'); // 返回 true
  example.hasOwnProperty('toString'); // 返回 false
  example.hasOwnProperty('hasOwnProperty'); // 返回 false

  //由 Object.create(null) 创建的对象
  //使用 Object.create(null) 创建的对象不从 Object.prototype 继承，使得 hasOwnProperty() 不可访问
  const foo = Object.create(null);
  foo.prop = 'exists';
  foo.hasOwnProperty('prop'); // Uncaught TypeError: foo.hasOwnProperty is not a function
  ```
