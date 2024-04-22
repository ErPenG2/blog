# 什么是 AJAX

AJAX 代表异步的 JavaScript 和 XML（**A**synchronous **J**avaScript **A**nd **X**ML）。简单点说，就是使用 [`XMLHttpRequest`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FXMLHttpRequest) 对象与服务器通信。它可以使用 JSON、XML (Extensible Markup Language)、HTML 和文本文件等格式发送和接收数据

AJAX 最吸引人的就是它的`异步`特性，也就是说它可以在**不重新刷新页面**的情况下与服务器通信、交换数据或更新页面

过程图如下：

![image-20230611114124820.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/ae34dcf2b87a419b94b90b057963cfc4tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

为避免混淆，这里重新梳理一下 Ajax 概念：

- AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）
- AJAX **不是编程语言**，而是一种基于现有标准的新方法
- AJAX 最大的优点是在**不重新加载整个页面**的情况下，与服务器交换数据并更新部分网页内容
- **XMLHttpRequest 只是实现 Ajax 的一种方式**

**总的来说，AJAX 是浏览器与服务器进行数据通信的技术**

# AJAX 的实现

## URL

URL (Uniform Resource Locator) 统一资源定位符（统一资源定位器、定位地址、URL 地址）俗称地址，是因特网上标准的资源的地址，如同在网络上的门牌，用于访问网络上的资源

URL 组成：URL 由**协议**、**域名**、**资源路径**组成

- 协议：URL 使用 http 协议（超文本传输协议），规定浏览器与服务器之间传输数据的格式
- 域名：标记服务器在互联网中的方位
- 资源路径：标记资源在浏览器下的具体位置

![URL.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/db67ee0cd8864ada9eb09c8bc6388c1etplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## XMLHttpRequest

### XHR 概念

`XMLHttpRequest`（XHR）对象**用于与服务器交互**。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL 来获取数据。这允许网页在不影响用户操作的情况下，更新页面的局部内容。`XMLHttpRequest` 在 [AJAX](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FAJAX) 编程中被大量使用，所有现代浏览器均支持 XMLHttpRequest 对象

`XMLHttpRequest` 可以用于获取任何类型的数据，而不仅仅是 XML。它甚至支持 [HTTP](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP) 以外的协议（包括 file:// 和 FTP），尽管可能受到更多出于安全等原因的限制

### XHR 使用

实现 `Ajax`异步交互需要完成以下步骤：

- 创建 `XMLHttpRequest` 对象
- 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端建立连接
- 构建请求所需的数据内容，并通过` XMLHttpRequest` 对象的 `send()` 方法发送给服务器端
- 通过 `XMLHttpRequest` 对象提供的 `readystatechange、loadend` 事件监听服务器端的通信状态
- 接受并处理服务端向客户端响应的数据结果
- 将处理结果更新到 `HTML`页面中

#### 向服务器发送请求

如需将请求发送到服务器，我们使用 **XMLHttpRequest** 对象的 **open()** 和 **send()** 方法

**open()**

- 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务器建立连接

- 语法

  ```js
  xhr.open(method, url, [async][, user][, password])
  ```

- 参数说明

  | 参数     | 说明                                              |
  | -------- | ------------------------------------------------- |
  | method   | 表示当前的请求方式，常见的有 _GET_、_POST_        |
  | url      | 服务端地址                                        |
  | async    | 布尔值，表示是否异步执行操作，默认为 _true_(异步) |
  | user     | 可选的用户名用于认证用途；默认为 _null_           |
  | password | 可选的密码用于认证用途，默认为 _null_             |

**send()**

- 通过 `XMLHttpRequest` 对象的 `send()` 方法，将客户端页面的数据发送给服务端

- 语法

  ```js
  xhr.send([body]); // body为 XHR 请求中要发送的数据体(string)，如果不传递数据则为 null
  ```

#### onreadystatechange

当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时（存有 XMLHttpRequest 状态信息）就会触发 readystatechange 事件

以下是 XMLHttpRequest 对象的三个重要的属性：

| 属性               | 描述                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数                                                                           |
| readyState         | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化 0：请求未初始化 1：服务器连接已建立 2：请求已接收 3：请求处理中 4：请求已完成，且响应已就绪 |
| status             | 200："OK"，404：未找到页面                                                                                                                 |

> readystatechange 事件被触发四次，分别是：0-1、1-2、2-3、3-4，对应着 readyState 的每个变化

```js
// 旧写法
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 在这里处理服务器的响应数据
    console.log(xhr.responseText);
  } else {
    // 在这里处理服务器的响应数据
    console.log(xhr.statusText);
  }
};

// 新写法
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 在这里处理服务器的响应数据
    console.log(xhr.response);
  }
});
```

#### 服务器响应

获取 XMLHttpRequest 响应体

```js
function readBody(xhr) {
  if (!xhr.responseType || xhr.responseType === 'text') {
    return xhr.responseText;
  } else if (xhr.responseType === 'document') {
    return xhr.responseXML;
  } else {
    return xhr.response;
  }
}
```

#### XHR 使用示例

- GET 请求

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://xxxx.com/xxx/xxx?参数名1=值1&参数名2=值2');

xhr.addEventListener('loadend', () => {
  console.log(xhr.response);
});

xhr.send();
```

- POST 请求

```js
// POST请求，要设置请求头，请求体携带JSON字符串
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://xxx/api/register');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 在这里处理服务器的响应数据
    console.log(xhr.response);
  }
});

xhr.setRequestHeader('Content-Type', 'application/json');

const obj = {
  username: 'xxx',
  password: 'xxx',
};

xhr.send(JSON.stringify(obj));
```

### 相关概念拓展

#### 请求方式

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。但在以下情况中，请使用 POST 请求：

- 不愿使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

常见 GET 请求

```js
xhr.open('GET', '/try/ajax/demo.php?fname=Henry&lname=Ford', true);
xhr.send();
```

常见 POST 请求

```js
xhr.open('POST', '/try/ajax/demo.php', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send('fname=Henry&lname=Ford');
```

> POST 方式发送数据，需要设置请求头，并且使用`send`方法传递参数

#### Content-Type

`Content-Type`是 HTTP 头部字段之一，用于指示请求或响应消息的媒体类型

以下是常见的`Content-Type`格式：

- `application/json`：用于传输 JSON 格式的数据
- `application/xml`：用于传输 XML 格式的数据
- `text/plain`：纯文本格式，通常用于普通文本文件
- `text/html`：用于传输 HTML 格式的数据
- `image/jpeg, image/png, image/gif`：用于传输图像数据
- `multipart/form-data`：通常用于上传文件，表单数据会被编码成一系列的部分
- `application/x-www-form-urlencoded`：通常用于发送表单数据，数据会被编码为键值对的形式（表单默认的提交数据的格式）

在 HTTP 协议中，如果未明确指定 `Content-Type` 头部字段，默认值取决于请求或响应的具体情况：

- **对于请求（Request）**
  - 对于常见的表单提交，即 `application/x-www-form-urlencoded`
  - 对于通过表单上传文件的情况，即 `multipart/form-data`
- **对于响应（Response）**
  - 如果服务器响应包含实际的数据，而不仅仅是一条状态码和头部字段，则常见的默认值为 `application/octet-stream`，表示二进制流，没有指定具体的数据类型

HTTP 协议规范允许在请求和响应中都不设置 `Content-Type` 头部字段。在这种情况下，接收方可能需要根据上下文来猜测数据的类型，这可能引入一些不确定性。推荐在请求和响应中显式地设置 `Content-Type` 头部字段

#### FormData

Ajax 操作往往用来传递表单数据。为了方便表单处理，HTML5 新增了一个 FormData 对象，可以模拟表单，特别适用于发送包含文件上传等复杂数据的请求

使用 FormData 可以执行以下步骤：

- 创建一个 FormData 对象：

```js
const formData = new FormData();
```

- 向 FormData 对象中添加字段：

```js
formData.append('username', 'John');
formData.append('email', 'john@example.com');
```

- 添加文件类型的字段：

```js
// 从文件输入框中获取选中的文件, 可以根据实际情况选择获取文件的方式
const fileInput = document.getElementById('fileInput');
formData.append('file', fileInput.files[0]);
```

- 将 FormData 对象作为请求的 body 或附加到 XMLHttpRequest 或 fetch 等发送请求的方法中：

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', '/api/endpoint');
xhr.send(formData);
```

以上就将 FormData 数据作为请求的一部分发送给服务器端了

注意事项：

- 当使用 FormData 时，浏览器会自动设置适当的 `Content-Type` 头部，无需手动设置
- FormData 也支持删除字段和追加相同字段名的多个值等操作，请根据需求使用相应的方法

> FormData 对象其他方法参考官网：[MDN-FormData](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FFormData)

#### HTTP

HTTP 协议规定了浏览器发送以及浏览器返回内容的格式用于客户端和服务器之间的通信

- 请求访问文本或图像等资源的一端称为**客户端**，而提供资源响应的一端称为**服务器端**

##### HTTP 请求与响应报文

请求报文和响应报文的结构：

![image-20240226172349359.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/cf26c628f6734e06a7e25eae3b5a7243tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

请求报文（上）和响应报文（下）的实例：

![image-20240226172456721.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/7bc2e65f66474bb5b7fdc456cf7bed8dtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

请求报文组成：

- 请求行：请求方法、URL、HTTP 版本
- 请求头：以键值对的格式携带的附加信息，比如：Content-Type
- 空行：分隔请求头，空行之后的是发送给服务器的资源
- 请求体：发送的资源

请求报文请求头对应属性一览：

![http请求头.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/123b7b299e004e55917b6643406519eatplv-k3u1fbpfcp-jj-mark3024000q75.webp)

响应报文组成：

- 响应行 (状态行)：HTTP 版本、HTTP 响应状态码、状态信息
- 响应头：以键值对的格式携带的附加信息，比如：Content-Type
- 空行：分隔响应头，空行之后的是服务器返回的资源
- 响应体：返回的资源

响应报文响应头对应属性一览：

![http响应头.png](%E4%B8%80%E6%96%87%E7%86%9F%E6%82%89Ajax.assets/8be4996307f746adbc66766b501a36bbtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

##### HTTP 响应状态码

| 状态码 | 说明       |
| ------ | ---------- |
| 1xx    | 信息       |
| 2xx    | 成功       |
| 3xx    | 重定向消息 |
| 4xx    | 客户端错误 |
| 5xx    | 服务端错误 |

常见的 HTTP 响应状态码：

- 200 - 服务器成功返回网页
- 304 - 未修改（Not Modified）协商缓存。用于指示服务器资源没有发生变化，客户端可以继续使用缓存的副本
- 400 - 请求错误（请求数据格式错误、账号密码错误）
- 401 - 身份没有通过认证（token 失效）
- 404 - 请求的网页不存在
- 500 - 服务器错误
- 503 - 服务不可用

常见的 [HTTP 响应状态码总览](https://link.juejin.cn/?target=https%3A%2F%2Fcloud.tencent.com%2Fdeveloper%2Fchapter%2F13553)：

- 1xx 表示【**临时响应**】并需要请求者继续执行操作的状态代码
  - `100(继续)`请求者应当继续提出请求。服务器返回此代码表示已收到请求的第一部分，正在等待其余部分 `101(切换协议)`请求者已要求服务器切换协议，服务器已确认并准备切换
- 2xx 表示【**成功**】处理了请求的状态代码
  - `200(成功)`服务器已成功处理了请求。通常，这表示服务器提供了请求的网页
  - `201(已创建)`请求成功并且服务器创建了新的资源
  - `202(已接受)`服务器已接受请求，但尚未处理
  - `203(非授权信息)`服务器已成功处理了请求，但返回的信息可能来自另一来源
  - `204(无内容)`服务器成功处理了请求，但没有返回任何内容
  - `205(重置内容)`服务器成功处理了请求，但没有返回任何内容
  - `206(部分内容)`服务器成功处理了部分 GET 请求
- 3xx 表示【**要完成请求，需要进一步操作**】。通常这些状态代码用来重定向
  - `300(多种选择)`针对请求，服务器可执行多种操作。服务器可根据请求者(user agent)选择一项操作，或提供操作列表供请求者选择
  - `301(永久移动)`请求的网页已永久移动到新位置。服务器返回此响应(对 GET 或 HEAD 请求的响应)时，会自动将请求者转到新位置
  - `302(临时移动)`服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求
  - `303(查看其他位置)`请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码
  - `304(未修改)`自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容
  - `305(使用代理)`请求者只能使用代理访问请求的网页。如果服务器返回此响应，还表示请求者应使用代理
  - `307(临时重定向)`服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求
- 4xx 表示【**请求可能出错**】，妨碍了服务器的处理
  - `400(错误请求)`表示客户端请求的语法错误，服务器无法理解，例如 url 含有非法字符、json 格式有问题
  - `401(未授权)`请求要求身份验证，对于需要登录的网页，服务器可能返回此响应
  - `402`表示保留，将来使用
  - `403(禁止)`表示服务器理解请求客户端的请求，但是拒绝请求
  - `404(未找到)`服务器无法根据客户端的请求找到资源(网页)
  - `405(方法禁用)`禁用请求中指定的方法
  - `406(不接受)`无法使用请求的内容特性响应请求的网页
  - `407(需要代理授权)`此状态代码与 401(未授权) 类似，但指定请求者应当授权使用代理
  - `408(请求超时)`服务器等候请求时发生超时
  - `409(冲突)`服务器在完成请求时发生冲突。服务器必须在响应中包含有关冲突的信息
  - `410(已删除)`如果请求的资源已永久删除，服务器就会返回此响应
  - `411(需要有效长度)`服务器不接受不含有效内容长度标头字段的请求
  - `412(未满足前提条件)`服务器未满足请求者在请求中设置的其中一个前提条件
  - `413(请求实体过大)`表示响应实在太大。服务器拒绝处理当前请求，请求超过服务器所能处理和允许的最大值
  - `414(请求的 URI 过长)`请求的 URI(通常为网址)过长，服务器无法处理
  - `415(不支持的媒体类型)`请求的格式不受请求页面的支持
  - `416(请求范围不符合要求)`如果页面无法提供请求的范围，则服务器会返回此状态代码
  - `417(未满足期望值)`在请求头 Expect 指定的预期内容无法被服务器满足(力不从心)
  - `418`表示我是一个茶壶。超文本咖啡馆控制协议，但是并没有被实际的 HTTP 服务器实现
  - `420`表示方法失效
  - `422`表示不可处理的实体。请求格式正确，但是由于含有语义错误，无法响应
- 5xx 表示【**服务器在尝试处理请求时发生内部错误**】。这些错误可能是服务器本身的错误，而不是请求出错
  - `500(服务器内部错误)`服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理
  - `501(尚未实施)`服务器不具备完成请求的功能。例如，服务器无法识别请求方法时可能会返回此代码
  - `502(错误网关)`服务器作为网关或代理，从上游服务器收到无效响应
  - `503(服务不可用)`服务器目前无法使用(由于超载或停机维护)。通常，这只是暂时状态
  - `504(网关超时)`服务器作为网关或代理，但是没有及时从上游服务器收到请求
  - `505(HTTP 版本不受支持)`服务器不支持请求中所用的 HTTP 版本

# Axios

> 本节为 Axios 常规使用，更多方法请看[Axios 中文文档](https://link.juejin.cn/?target=https%3A%2F%2Fwww.kancloud.cn%2Fyunye%2Faxios%2F234845%2F)、[Axios 中文文档(官方)](https://link.juejin.cn/?target=https%3A%2F%2Fwww.axios-http.cn%2Fdocs%2Fintro)、开源 API 库：[BootCDN](https://link.juejin.cn/?target=https%3A%2F%2Fwww.bootcdn.cn%2Findex.html)

## Axios 概念

Axios 是一个基于 promise 的网络请求库，作用于 node.js 和浏览器中，它是 isomorphic 的 (即同一套代码可以运行在浏览器和 node.js 中)。在服务端它使用原生 node.js http 模块，而在客户端 (浏览端) 则使用 XMLHttpRequest

- **Axios 本质上是对原生 XMLHttpRequest 的封装**，只不过它是 Promise 的实现版本，符合最新的 ES6 规范

> Promise 教程请参考：[juejin.cn/post/732199…](https://juejin.cn/post/7321996765977198611)

主要特点：

- 从浏览器创建 XMLHttpRequests、从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 超时处理
- 自动将请求体序列化
- 自动转换 JSON 数据

## Axios 使用

### 安装

- 使用 npm

```bash

$ npm install axios
```

- 使用 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 基本使用

可以向 `axios` 传递相关配置来创建请求

- `axios(config)`

```js
// 发起一个get请求, 参数名和值会自动拼接到url
axios({
  method: 'get',
  url: '/user/12345',
  params: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});

// 发起一个post请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});
```

常用请求方法：

| 请求方法 | 操作             |
| -------- | ---------------- |
| GET      | 获取数据         |
| POST     | 提交数据         |
| PUT      | 修改数据（全部） |
| DELETE   | 删除数据         |
| PATCH    | 修改数据（部分） |

为方便起见，为所有支持的请求方法提供了别名：

无 data 属性：

- `axios.request(config)`
- `axios.get(url[, config])`
- `axios.delete(url[, config])`
- `axios.head(url[, config])`
- `axios.options(url[, config])`

有 data 属性：

- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`
- `axios.postForm(url[, data[, config]])`
- `axios.putForm(url[, data[, config]])`
- `axios.patchForm(url[, data[, config]])`

> 别名中的 data 属性无需显式给出，只需传入一个对象即可

下面是使用方法别名的示例：

- GET 请求

```js
axios
  .get('/user', {
    params: {
      ID: 12345,
    },
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

- POST 请求

```js
// data属性直接为一个对象, 无需显式给出
const { data } = await axios.post(
  'https://httpbin.org/post',
  {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files,
  },
  {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
);
```

### 取消请求

Axios 支持以 fetch API 方式—— [`AbortController`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FAbortController) 取消请求

```js
const controller = new AbortController();

axios
  .get('/foo/bar', {
    signal: controller.signal,
  })
  .then(function (response) {
    //...
  });
// 取消请求
controller.abort();
```

## Axios 请求配置

以下是创建请求时可以用的配置选项只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `GET` 方法

> 配置源于官网，已将常用配置移到最前

```js
{
  // 请求的服务器 URL
  url: '/user',

  // 创建请求时使用的方法
  method: 'get', // 默认值

  // baseURL 自动加在url前，除非url是一个绝对 URL
  baseURL: 'https://some-domain.com/api/',

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // params 是与请求一起发送的 URL 参数, 与 get 方法搭配使用
  params: {
    ID: 12345
  },

  // data 是作为请求体被发送的数据 (PUT、POST、DELETE、PATCH)
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // 指定请求超时的毫秒数, 超时则请求会被中断
  timeout: 1000, // 默认值是 0 (永不超时)

  // responseType 表示浏览器将要响应的数据类型
  // 包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // auth 示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 Authorization ，覆写掉现有的任意使用 headers 置的自定义 Authorization
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理
    return data;
  }],

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件 (浏览器专属)
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件 (浏览器专属)
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // see https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed
  // automatically. If set to `true` will also remove the 'content-encoding' header
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // 默认值
}
```

## Axios 响应结构

一个请求的响应包含以下结构：

```js
{
  // 由服务器提供的响应
  data: {},

  // HTTP 状态码
  status: 200,

  // HTTP 状态信息
  statusText: 'OK',

  // 服务器响应头, 所有的 header 名称都是小写, 而且可以使用方括号语法访问
  // 例如: response.headers['content-type']
  headers: {},

  // axios 请求的配置信息
  config: {},

  // 生成此响应的请求
  // 在node.js中它是最后一个ClientRequest实例 (in redirects)，
  // 在浏览器中则是 XMLHttpRequest 实例
  request: {}
}
```

## Axios 默认配置

### 全局默认配置

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

### 自定义实例

可以使用自定义配置新建一个实例：`axios.create([config])`

```js
// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com',
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 配置优先级

配置将会按优先级进行合并

- 优先级：[lib/defaults.js](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Faxios%2Faxios%2Fblob%2Fmaster%2Flib%2Fdefaults.js%23L28)默认值 < 实例 `defaults` 属性 < 请求 `config` 参数

```js
// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 0
const instance = axios.create();

// 重写库的超时默认值
instance.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance.get('/longRequest', {
  timeout: 5000,
});
```

## Axios 拦截器

在请求或响应被 then 或 catch 处理前拦截它们

```js
// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
```

拦截器完整使用示例：

```js
// 创建一个单独的axios实例
const instance = axios.create({
  baseURL: 'https://xxx.xxx.xxx',
  timeout: 6000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const store = userStore();
    if (store.user?.token) {
      config.headers.authorization = `Bearer ${store.user?.token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截器
// 数据脱壳、业务成功、业务失败、401 token失效的处理
instance.interceptors.response.use(
  (res) => {
    // 下面判断用户请求的业务成功
    if (res.data?.code === 10000) {
      // 数据脱壳
      return res.data;
    } else {
      // 业务失败, 提示错误
      showToast(res.data?.message || '请求失败');
      return Promise.reject(res);
    }
  },
  (err) => {
    // 下面这里的函数是请求失败，http状态码是 4xx 5xx
    if (err.response?.status === 401) {
      // 处理401错误
      const store = userStore();
      store.delUser();
      router.push('/login');
    }
    return Promise.reject(err);
  }
);

export default instance;
```

如果需要移除拦截器，可以这样：

```js
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

# Fetch

## Fetch 概念

> 本节参考阮一峰老师的教程：[www.ruanyifeng.com/blog/2020/1…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2020%2F12%2Ffetch-tutorial.html)

`Fetch`被称为下一代`Ajax`技术，内部采用`Promise`方式来处理数据。`Fetch`与`Axios`不是同一类，`Axios`是对 XMLHttpRequest 的封装库，而`Fetch`是浏览器原生支持的新对象，是 XMLHttpRequest 的升级版，用于在 JavaScript 脚本里面发出 HTTP 请求

其特点主要有：

- API 语法简洁，比 XMLHttpRequest 更加简单易用
- 采用模块化设计，API 分散于多个对象中（如 Response、Request、Header）
- 通过数据流处理数据，可以分块读取，有利于提高网站性能，对于大文件或网速较慢的场景极为有用

## Fetch 基本使用

`fetch()`接受一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象

基本用法如下：

```js
fetch(url)
  .then(...)
  .catch(...)

// 查询参数直接通过 ?、& 拼接
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Request Failed', err))
```

`fetch()`接收到的`response`是一个 [Stream 对象](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FStreams_API)，`response.json()`是一个**异步操作**，取出所有内容，并将其转为 JSON 对象

使用 await 语法改写：

```js
async function getJSON() {
  let url = 'http://example.com/movies.json';
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Request Failed', error);
  }
}
```

## Fetch 配置参数

### 使用示例

`fetch()`的第一个参数是 URL，还可以接受第二个参数，作为配置对象，定制发出的 HTTP 请求

- `fetch(url, options)`
- post、put、patch 用法类似
- HTTP 请求的方法、标头、数据体都在`options`这个对象里面设置

下面是一些示例：

**（1）POST 请求**

```js
const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: 'foo=bar&lorem=ipsum',
});

const json = await response.json();
```

> 此处的`body`指的是 POST 请求的数据体

**（2）提交 JSON 数据**

```js
const user = { name: 'John', surname: 'Smith' };
const response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(user),
});
```

> ```
> Content-Type`的默认值是`'text/plain;charset=UTF-8'
> ```

**（3）提交表单**

```js
const form = document.querySelector('form');

const response = await fetch('/users', {
  method: 'POST',
  body: new FormData(form),
});
```

**（5）直接上传二进制数据**

`fetch()`也可以直接上传二进制数据，将 Blob 或 arrayBuffer 数据放在`body`属性里面

```js
let blob = await new Promise((resolve) =>
  canvasElem.toBlob(resolve, 'image/png')
);

let response = await fetch('/article/fetch/post/image', {
  method: 'POST',
  body: blob,
});
```

### 完整配置项

```javascript
const response = fetch(url, {
  // 指定请求方法
  method: 'GET',
  // 指定请求头
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  },
  // 指定请求体数据
  body: undefined,
  // 指定 fetch() 请求的 referer 标头
  referrer: 'about:client',
  // 指定 Referer 标头的规则
  referrerPolicy: 'no-referrer-when-downgrade',
  // 指定请求的模式
  mode: 'cors',
  // 指定是否发送 Cookie
  credentials: 'same-origin',
  // 指定如何处理缓存
  cache: 'default',
  // 指定 HTTP 跳转的处理方法
  redirect: 'follow',
  // 指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值
  integrity: '',
  // 用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据
  keepalive: false,
  // 指定一个 AbortSignal 实例，用于取消fetch()请求
  signal: undefined,
});
```

由于官网对于部分配置项没有中文翻译，以下列出全部配置项具体值及其说明

`cache`：指定如何处理缓存，可能的取值如下：

> - `default`：默认值，先在缓存里面寻找匹配的请求
> - `no-store`：直接请求远程服务器，并且不更新缓存
> - `reload`：直接请求远程服务器，并且更新缓存
> - `no-cache`：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存
> - `force-cache`：缓存优先，只有不存在缓存的情况下，才请求远程服务器
> - `only-if-cached`：只检查缓存，如果缓存里面不存在，将返回 504 错误

`mode`：指定请求的模式，可能的取值如下：

> - `cors`：默认值，允许跨域请求
> - `same-origin`：只允许同源请求
> - `no-cors`：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单所能发出的请求

`credentials`：指定是否发送 Cookie，可能的取值如下：

> - `same-origin`：默认值，同源请求时发送 Cookie，跨域请求时不发送
> - `include`：不管同源请求，还是跨域请求，一律发送 Cookie
> - `omit`：一律不发送

`redirect`：指定 HTTP 跳转的处理方法，可能的取值如下：

> - `follow`：默认值，`fetch()`跟随 HTTP 跳转
> - `error`：如果发生跳转，`fetch()`就报错
> - `manual`：`fetch()`不跟随 HTTP 跳转，但是`response.url`属性会指向新的 URL，`response.redirected`属性会变为`true`，由开发者自己决定后续如何处理跳转

`referrerPolicy`：用于设定`Referer`标头的规则，可能的取值如下：

> - `no-referrer-when-downgrade`：默认值，总是发送`Referer`标头，除非从 HTTPS 页面请求 HTTP 资源时不发送
> - `no-referrer`：不发送`Referer`标头
> - `origin`：`Referer`标头只包含域名，不包含完整的路径
> - `origin-when-cross-origin`：同源请求`Referer`标头包含完整的路径，跨域请求只包含域名
> - `same-origin`：跨域请求不发送`Referer`，同源请求发送
> - `strict-origin`：`Referer`标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送`Referer`标头
> - `strict-origin-when-cross-origin`：同源请求时`Referer`标头包含完整路径，跨域请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头
> - `unsafe-url`：不管什么情况，总是发送`Referer`标头

## 取消 Fetch 请求

`fetch()`请求发送以后，如果中途想要取消，需要使用`AbortController`对象，流程如下：

- 创建`AbortController`实例
- 配置对象的`signal`属性指定接收`AbortController`实例发送的信号`controller.signal`
- 使用`controller.abort()`方法发出取消信号
- 发出取消信号后，会触发`abort`事件，这个事件可以监听，也可以通过`controller.signal.aborted`属性判断取消信号是否已经发出

```js
let controller = new AbortController();
let signal = controller.signal;

fetch(url, {
  signal: signal,
});

signal.addEventListener('abort', () => console.log('abort!'));

controller.abort(); // 取消fetch请求
console.log(signal.aborted); // true
```

## Response 对象

`fetch()`请求成功以后，得到的是一个 [Response 对象](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FResponse)。它对应服务器的 HTTP 响应

```js
const response = await fetch(url);
```

### 实例属性

Response 实例属性如下表：

| 属性           | 返回值                                                                                                                             | 含义                                                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ok**         | 布尔值                                                                                                                             | 表示请求是否成功，`true`对应 HTTP 请求的状态码 200 到 299，`false`对应其他的状态码                                                                                                                                                                                         |
| **status**     | 数字                                                                                                                               | 表示 HTTP 回应的状态码（如：200，表示成功请求）                                                                                                                                                                                                                            |
| **statusText** | 字符串                                                                                                                             | 表示 HTTP 回应的状态信息（如：请求成功以后，服务器返回"OK"）                                                                                                                                                                                                               |
| **url**        | 请求的 URL                                                                                                                         | 如果 URL 存在跳转，该属性返回的是最终 URL                                                                                                                                                                                                                                  |
| **type**       | 请求的类型                                                                                                                         | `basic`：普通请求，即同源请求 `cors`：跨域请求 `error`：网络错误，主要用于 Service Worker `opaque`：如果`fetch()`请求的`type`属性设为`no-cors`，就会返回这个值。表示发出的是简单的跨域请求 `opaqueredirect`：如果`fetch()`请求的`redirect`属性设为`manual`，就会返回这个值 |
| **redirected** | 布尔值                                                                                                                             | 表示请求是否发生过跳转                                                                                                                                                                                                                                                     |
| **body**       | ReadableStream 对象                                                                                                                | 暴露响应体内容                                                                                                                                                                                                                                                             |
| **headers**    | 与响应关联的[Headers](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FHeaders)对象 | 通过访问与响应关联的 Headers 对象，来操作 HTTP 响应头                                                                                                                                                                                                                      |

`fetch()`发出请求以后，**只有网络错误，或者无法连接时**，`fetch()`才会报错，其他情况都不会报错，而是认为请求成功。这意味着服务器返回的状态码是`4xx`或`5xx`时，不会报错（Promise 不会变为 `rejected`状态）

以下两种方法可以判断是否发生错误：

- 通过`status`属性，得到 HTTP 回应的真实状态码，判断请求是否成功
- 判断`ok`属性是否为`true`

`Response.body`属性是 Response 对象暴露出的底层接口，返回一个 ReadableStream 对象，供用户操作

它可以用来分块读取内容，应用之一就是显示下载的进度

```js
const response = await fetch('flower.jpg');
const reader = response.body.getReader();

while (true) {
  const { done, value } = await reader.read();
  if (done) {
    break;
  }
  console.log(`Received ${value.length} bytes`);
}
```

`response.body.getReader()`方法返回一个遍历器。这个遍历器的`read()`方法每次返回一个对象，表示本次读取的内容块，其中：

- `done`属性是一个布尔值，用来判断有没有读完
- `value`属性是一个 arrayBuffer 数组，表示内容块的内容
- `value.length`属性是当前块的大小

Response 对象还有一个`Response.headers`属性，指向一个 [Headers 对象](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FHeaders)，对应 HTTP 回应的所有标头

Headers 对象提供了以下方法，用来操作标头：

- `Headers.get()`：根据指定的键名，返回键值
- `Headers.has()`： 返回一个布尔值，表示是否包含某个标头
- `Headers.set()`：将指定的键名设置为新的键值，如果该键名不存在则会添加
- `Headers.append()`：添加标头
- `Headers.delete()`：删除标头
- `Headers.keys()`：返回一个遍历器，可以依次遍历所有键名
- `Headers.values()`：返回一个遍历器，可以依次遍历所有键值
- `Headers.entries()`：返回一个遍历器，可以依次遍历所有键值对（`[key, value]`）
- `Headers.forEach()`：依次遍历标头，每个标头都会执行一次参数函数

> 方法具体用法请参考官网：[developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FHeaders)

### 实例方法

`Response`对象根据服务器返回的不同类型的数据，提供了不同的读取方法

- `response.text()`：得到文本字符串
- `response.json()`：得到 JSON 对象
- `response.blob()`：得到二进制 Blob 对象

```js
// 读取图片文件flower.jpg，显示在网页上
const response = await fetch('flower.jpg');
const myBlob = await response.blob();
const myImage = document.querySelector('img');
myImage.src = URL.createObjectURL(myBlob);
```

- `response.formData()`：得到 FormData 表单对象
- `response.arrayBuffer()`：得到二进制 ArrayBuffer 对象

```js
const audioCtx = new window.AudioContext();
const source = audioCtx.createBufferSource();

const response = await fetch('song.ogg');
const buffer = await response.arrayBuffer();

const decodeData = await audioCtx.decodeAudioData(buffer);
source.buffer = buffer;
source.connect(audioCtx.destination);
source.loop = true;
```

Stream 对象只能读取一次，这意味着，前五个读取方法，只能使用一个，否则会报错。Response 对象提供了克隆方法

- `response.clone()`：创建`Response`对象的副本，实现多次读取

```js
const response1 = await fetch('flowers.jpg');
const response2 = response1.clone();

const myBlob1 = await response1.blob();
const myBlob2 = await response2.blob();
// 将同一张图片读取了两次
image1.src = URL.createObjectURL(myBlob1);
image2.src = URL.createObjectURL(myBlob2);
```
