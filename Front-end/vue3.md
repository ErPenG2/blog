# Vue3 介绍

## vue3

> 本文为 Vue3 快速上手介绍（示例基于 setup 语法糖，帮助新手快速认识 Vue3），需要一定的 Vue2 基础，深度学习还需大量的练习与查阅[官方文档](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2F)。_如果时间充足，建议先学习 Vue2，对于理解整个 Vue 生态有一定的帮助_。路还很长，愿每一位读到本文的朋友能够只争朝夕，不负韶华！（[Vue2 基础入门详细版](https://juejin.cn/post/7255955134131093564)、[Vue3 技术栈合集](https://link.juejin.cn/?target=https%3A%2F%2Fvue3js.cn%2F)）

Vue3 于 2020 年 9 月 18 日发布，2022 年 2 月 7 日开始，Vue3 被设为默认版本。Vue3 在经过一年的迭代后，越来越好用，毫无疑问，vue3 是现在也是未来！（2023 年 12 月 31 日，Vue2 停止维护~）

| 库名称                                                                                                  | 简介                                                                    |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [ant-design-vue](https://link.juejin.cn/?target=https%3A%2F%2Fantdv.com%2Fdocs%2Fvue%2Fintroduce-cn%2F) | PC 端组件库：Ant Design 的 Vue 实现，开发和服务于企业级后台产品         |
| [arco-design-vue](https://link.juejin.cn/?target=https%3A%2F%2Farco.design%2Fvue)                       | PC 端组件库：字节跳动出品的企业级设计系统                               |
| [element-plus](https://link.juejin.cn/?target=https%3A%2F%2Felement-plus.gitee.io%2Fzh-CN%2F)           | PC 端组件库：基于 Vue 3，面向设计师和开发者的组件库                     |
| [Naive UI](https://link.juejin.cn/?target=https%3A%2F%2Fwww.naiveui.com%2Fzh-CN%2F)                     | PC 端组件库：一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，快 |
| [vant](https://link.juejin.cn/?target=https%3A%2F%2Fvant-contrib.gitee.io%2Fvant%2Fv3%2F%23%2Fzh-CN)    | 移动端组件库：一个 **轻量、可靠的移动端组件库**，于 2017 年开源         |
| [VueUse](https://link.juejin.cn/?target=https%3A%2F%2Fvueuse.org%2F)                                    | 基于 composition 组合式 api 的常用函数集合（炸裂推荐、极其好用！）      |

**相关文档**

1. Vue3 中文文档(新) [cn.vuejs.org/](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2F)
2. ~~Vue2 中文文档(旧)~~ [v2.cn.vuejs.org/](https://link.juejin.cn/?target=https%3A%2F%2Fv2.cn.vuejs.org%2F)
3. Vue3 设计理念 [vue3js.cn/vue-composi…](https://link.juejin.cn/?target=https%3A%2F%2Fvue3js.cn%2Fvue-composition%2F)
4. Vue3 非兼容性改变 [v3-migration.vuejs.org/zh/breaking…](https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fzh%2Fbreaking-changes%2F)

**Vue3 框架优点特点**

1. 首次渲染更快
2. diff 算法更快
3. 内存占用更少
4. 打包体积更小
5. 更好的 Typescript 支持
6. `Composition API` 组合 API

> 学习 vue3 主要学习的就是 `组合式API` 的使用

## vite 构建工具

Vite 是一个现代化的前端构建工具，旨在提供开发环境的快速启动和快速重载。它以轻量、简单和快速为设计原则，具有快速的**冷启动**和**热模块替换**能力

对比 webpack：

- 基于打包器的方式启动，必须优先抓取并构建你的整个应用，然后才能提供服务
- 更新速度会随着应用体积增长而直线下降

![image.png](vue3.assets/13ae597d57724c23ba3a95029ed89503tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

vite 的原理：

- 使用原生 ESModule 通过 script 标签动态导入，访问页面的时候加载到对应模块编译并响应
- Vite 只需要在浏览器请求源码时进行转换并按需提供源码
- 根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理

![image-1693310267216-6.png](vue3.assets/af3261b61c9a4b9ab58e613800394854tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## vite 创建项目

运行创建项目命令：[官方文档](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fquick-start.html%23creating-a-vue-application)

```bash
# 使用npm
npm create vite@latest
# 使用yarn
yarn create vite
# 使用pnpm
pnpm create vite
# 全部自动配置(vite)
pnpm create vue
# 使用vue-cli
vue create project-name
```

> 使用 Vue3 时，**需要安装 volar 插件**，**并且禁用 vetur**

Vue3 不同点：

- 组件一个根节点**非必需**
- 创建应用挂载到根容器
- 入口页面，ESM（模块化）加载资源

```
平常组件
<template>
  <div>节点1</div>
  <div>节点2</div>
</template>
main.js
// 导入Vue
import { createApp } from 'vue'
import App from './App.vue'
// 根据App组件创建一个应用实例
const app = createApp(App)
// app应用挂载（管理）index.html的 #app 容器
app.mount('#app')
// vue3 中是使用 createApp() 管理容器，不是 new Vue()
index.html
<div id="app"></div>
<script type="module" src="/src/main.ts"></script>
```

总结：

- `Vite` 项目中，`index.html` 是项目的入口文件，在项目最外层
- 加载`index.html`后，`Vite` 解析 `<script type="module" src="xxx">` 指向的`JavaScript`
- `Vue3`中是通过 `createApp` 函数创建一个应用实例

Vue3 中对这些 API 做出了调整：

- 将全局的 API，即：`Vue.xxx`调整 到应用实例（`app`）上

  | Vue2 全局 API（`Vue`）   | Vue3 实例 API (`app`)       |
  | ------------------------ | --------------------------- |
  | Vue.config.xxxx          | app.config.xxxx             |
  | Vue.config.productionTip | `移除`                      |
  | Vue.component            | app.component               |
  | Vue.directive            | app.directive               |
  | Vue.mixin                | app.mixin                   |
  | Vue.use                  | app.use                     |
  | Vue.prototype            | app.config.globalProperties |

## npm 镜像配置

- 更换镜像地址

```bash
# 更换淘宝镜像
npm config set registry https://registry.npmmirror.com
# 查看是否更换成功
npm config get registry
# 执行安装命令
npm install
```

镜像地址可能会更改，推荐使用`nrm` 管理 `npm` 镜像地址：

```bash
# 下载nrm
npm install -g nrm
# 最新淘宝源默认就有，直接使用就行
nrm use taobao
```

`nrm`相关操作

```bash
# 查看所有的源
nrm ls
# 增加源地址
nrm add taobao https://registry.npmmirror.com/
# 切换镜像源，比如切换到 淘宝源
nrm use tobao
# 删除源地址
nrm del taobao
# 测试所有源的相应时间 看那个更快
nrm test
```

# Composition API（核心）

## 组合式 API 与选项式 API

- `Vue2`的`API`设计是`Options`（配置）风格的
- `Vue3`的`API`设计是`Composition`（组合）风格的

**选项式 API**：数据、方法、计算属性等，分散在：`data`、`methods`、`computed`中，若想新增或者修改一个需求，就需要分别修改：`data`、`methods`、`computed`，**不便于维护和复用**

![1696662197101-55d2b251-f6e5-47f4-b3f1-d8531bbf9279.gif](vue3.assets/52646fba50b64224a7d4073d1505aaf3tplv-k3u1fbpfcp-jj-mark3024000q75.webp) ![option.gif](vue3.assets/fd5756f0ef784616adb666c17013d17ftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

**组合式 API**：**旨在提供一种更灵活和强大的方式来组织和复用组件逻辑**。传统的 Vue 组件通常基于选项 API，而组合式 API 则基于函数式的组合思想

![composition.gif](vue3.assets/c9d7329d394648508d703b82b16a07bdtplv-k3u1fbpfcp-jj-mark3024000q75.webp) ![compositionAPI.gif](vue3.assets/bdeb5d800c774d4a860820a573dbc99ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与`<script setup>` 搭配使用

这个 `setup` 属性是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用

**选项式 API (Options API)**

```html
<script>
  export default {
    // data() 返回的属性将会成为响应式的状态
    // 并且暴露在 this 上
    data() {
      return {
        count: 0,
      };
    },

    // methods 是一些用来更改状态与触发更新的函数
    // 它们可以在模板中作为事件处理器绑定
    methods: {
      increment() {
        this.count++;
      },
    },

    // 生命周期钩子会在组件生命周期的各个不同阶段被调用
    // 例如这个函数就会在组件挂载完成后被调用
    mounted() {
      console.log(`The initial count is ${this.count}.`);
    },
  };
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

下面是使用了**组合式 API** 与 `<script setup>` 改造后和上面的模板完全一样的组件：

```html
<script setup>
  import { ref, onMounted } from 'vue';

  // 响应式状态
  const count = ref(0);

  // 用来修改状态、触发更新的函数
  function increment() {
    count.value++;
  }

  // 生命周期钩子
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`);
  });
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

> 在 setup 中通过 vue 提供的函数组织代码实现功能，就是组合式 API 写法。 组合式 API 可复用，可维护

## setup

### setup 函数

> setup 函数是组合式 API 的入口函数

- `setup` 函数是 `Vue3` 特有的选项，作为组合式 API 的起点
- 从组件生命周期看，它在 `beforeCreate` 之前执行
- **函数中 `this` 不是组件实例，是 `undefined`**
- 如果数据或者函数在模板中使用，需要在 `setup` 返回

```html
<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    setup() {
      console.log('setup执行了');
      console.log(this);
      // 定义数据和函数
      const msg = 'hello vue3!';
      const say = () => {
        console.log(msg);
      };
      // 返回给模板使用
      return { msg, say };
    },
    beforeCreate() {
      console.log('beforeCreate执行了');
    },
    created() {
      console.log('created执行了');
    },
    // ...
  };
</script>
```

> **尽量不要与 Vue2 配置混用**
>
> - Vue2 配置（data、methos、computed...）中**可以访问**到 setup 中的属性、方法
> - 但 setup 中**不能访问到**Vue2 配置（data、methos、computed...）
> - 如果有重名，setup 优先级更高（同名属性，data 中的数据优先级低于 setup 中的数据）
>
> setup 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性

**setup 的参数**

- `props`：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性

- ```
  context
  ```

  ：上下文对象

  - `attrs`：值为对象，包含：组件外部传递过来，但没有在 props 配置中声明的属性，相当于 `this.$attrs`
  - `slots`：收到的插槽内容，相当于 `this.$slots`
  - `emit`：分发自定义事件的函数，相当于 `this.$emit`

```html
<script>
  import { reactive } from 'vue';
  export default {
    props: ['msg', 'school'],
    emits: ['hello'], //自定义事件需声明
    setup(props, context) {
      console.log(props, context);
      console.log(context.attrs); //相当与Vue2中的$attrs
      console.log(context.emit); //触发自定义事件
      console.log(context.slots); //插槽
      //数据
      let person = reactive({
        name: '张三',
        age: 18,
      });
      //方法
      function test() {
        context.emit('hello', 666);
      }
      //返回一个对象（常用）
      return {
        person,
        test,
      };
    },
  };
</script>
```

### setup 语法糖

在 `<script setup>` 中的顶层变量都可以在模板使用，包括数据，函数，组件

使用 setup 语法糖后的页面结构如下：

```html
<template>
  <div></div>
</template>

<script setup>
  //如果使用TS则要加上 lang="ts"
</script>

<style lang="scss" scoped></style>
```

使用语法糖写法稍微有一个小问题：会丢失组件名字

- 解决方法有很多，其中一种就是再使用一个`script`标签

```javascript
<script lang="ts">
  export default {
    name:'xxx',
  }
</script>
```

- 也可以在标签上加`name`属性

```html
<script setup lang="ts" name="xxx"></script>
```

这里有个前提是需要另外安装一个插件`vite-plugin-vue-setup-extend -D`

配置步骤：

- `npm i vite-plugin-vue-setup-extend -D`
- 在`vite.config.ts`配置相关设置

```jsx
import { defineConfig } from 'vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

export default defineConfig({
  plugins: [VueSetupExtend()],
});
```

配置完成后，重启项目，标签中的`name`属性生效

## 定义响应式数据

### reactive

> 通常使用它定义`对象类型`响应式数据（在 vue3 中，直接定义的数据不是响应式的）

- 作用：定义一个**对象类型**的响应式数据，**不能定义基本数据类型**
- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象）
- reactive 定义的响应式数据是**深层次的**，意思是不管对象嵌套多少层，整个对象都是响应式的
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作

```html
<template>
  <div>
    <p>姓名：{{state.name}}</p>
    <p>年龄：{{state.age}} <button @click="state.age++">age++</button></p>
  </div>
</template>

<script>
  // 1. 导入函数
  import { reactive } from 'vue';
  export default {
    setup() {
      // 2. 创建响应式数据对象
      const state = reactive({ name: 'jack', age: 18 });
      // 3. 返回数据，供模板使用
      return { state };
    },
  };
</script>
```

> `reactive`重新分配一个新对象，会**失去**响应式（可以使用`Object.assign`整体替换该对象）

### ref

> 通常使用它定义响应式数据，不限数据类型

```
let xxx = ref(初始值)
```

- **返回值：** `RefImpl`实例对象（简称 ref），`ref`对象的`value`**属性是响应式的**
- 在 `setup` 函数中，使用 `ref` 函数，传入普通数据，返回一个响应式数据。最后 `setup` 函数返回一个对象，包含该响应式数据即可

> `ref` 创建的数据，`js` 中需要 `.value` ，`template` 中可省略（自动解包）

```html
<template>
  <div>
    <!-- template中使用可省略.value -->
    计数器：{{ count }}
    <button @click="count++">累加1</button>
    <button @click="increase">累加10</button>
  </div>
</template>

<script>
  // 1. 导入函数
  import { ref } from 'vue';
  export default {
    setup() {
      // 2. 创建响应式数据对象
      const count = ref(0);
      const increase = () => {
        // js中使用需要.value
        count.value += 10;
      };
      // 3. 返回数据
      return { count, increment };
    },
  };
</script>
```

> `ref`创建的变量必须使用`.value`（可以使用`volar`插件自动添加`.value`）
>
> 安装`volar`插件后，搜索`Dot Value`，勾选对应选项

### ref 和 reactive 区别

从定义数据角度：

- `ref`用来定义**基本类型数据**、**引用类型数据**。定义引用数据类型时，内部会调用`reactive`转为**代理对象**
- `reactive`用来定义**引用类型数据**，不支持基本数据类型

从原理角度：

- `ref`通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）
- `reactive`通过使用**Proxy**来实现响应式（数据劫持）, 并通过**Reflect**操作**源对象**内部的数据
- `ref`遇到引用数据类型时，底层也是利用`Proxy`

从使用角度：

- `ref`定义的数据：操作数据**需要**`.value`，读取数据时模板中直接读取**不需要**`.value`
- `reactive`定义的数据：操作数据与读取数据：**均不需要**`.value`

使用原则：

> - 若需要一个基本类型的响应式数据，必须使用`ref`
> - 若需要一个响应式对象，层级不深，`ref`、`reactive`都可以
> - 若需要一个响应式对象，且层级较深，推荐使用`reactive`

## ref 获取 DOM 元素

> `ref`用在普通`DOM`标签上，获取的是`DOM`节点
>
> `ref`用在组件标签上，获取的是组件实例对象

```html
<template>
  <div>
    <input ref="myInput" type="text" />
  </div>
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  // 创建一个ref来存储输入框的引用
  const myInput = ref(null);
  // 使用nextTick确保DOM更新完成后再访问引用的值
  nextTick(() => {
    console.log(myInput.value); // 输出输入框的DOM元素
  });
</script>
```

> 默认值是`null`，需要在渲染完毕后访问 DOM 属性

## Vue 响应式原理

### Vue2 响应式原理

实现原理：

- 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）

- 数组类型：通过重写更新数组的一系列方法来实现拦截（pop、shift、push、unshift、splice、reverse、sort）

  ```js
  Object.defineProperty(data, 'count', {
    get() {},
    set() {},
  });
  ```

存在问题：

- 新增属性、删除属性，界面不会更新
- 直接通过下标修改数组，界面不会自动更新

解决方案：

- 新增：`Vue.set(object, key, value)`、`this.$set(object, key, value)`
- 删除：`Vue.delete(target, key)`、`this.$delete(target, key)`

新增有两种大方向的解决方案：

1.  不重新赋值原对象，在原对象基础上新增属性

    - 使用`this.$set(对象，属性名，属性值)`

2.  重新赋值原对象（用的较少，了解即可）

    - `Object.assign()`

           ```js

      this.obj = Object.assign({}, this.obj, { color: 'red' });
      ```

    - 直接定义一个新对象，这个对象包括原对象的全部属性以及新增的对象

      ```js
      this.obj = {
        ...this.obj,
        sex: 'male',
      };
      ```

### Vue3 响应式原理

实现原理:

- 通过`Proxy`（代理）: 拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等

- 通过`Reflect`（反射）: 对源对象的属性进行操作

- MDN 文档中描述的 Proxy 与 Reflect：

  - Proxy：[MDN-Proxy](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FProxy)

  - Reflect：[MDN-Reflect](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FReflect)

    ```js
    new Proxy(data, {
      // 拦截读取属性值
      get(target, prop) {
        return Reflect.get(target, prop);
      },
      // 拦截设置属性值或添加新属性
      set(target, prop, value) {
        return Reflect.set(target, prop, value);
      },
      // 拦截删除属性
      deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      },
    });
    proxy.name = 'jack';
    ```

## toRef 和 toRefs

> 当去解构和展开响应式数据对象使用 `toRefs` 保持响应式

使用 `ref` 创建的变量是一个独立的响应式引用。但是，当我们需要将一个响应式对象的属性解构到组件模板中使用时，需要使用 `toRefs`

```js
const { name, age } = reactive({ name: 'Jack', age: 18 }); //直接解构，数据不是响应式
```

### toRefs

使用 `toRefs` 处理响应式数据，得到的是`ref`定义的响应式数据，并且解构的属性与原对象中的属性保持一致（同步更新）

```js
import { reactive, toRefs } from 'vue';
const user = reactive({ name: 'Jack', age: 18 });
const { name, age } = toRefs(user);
```

> 你可能会问，`toRefs`对于`ref`定义的数据怎么解构呢。实际上，`ref`定义引用数据类型不就是使用的`reactive`，这其实是一种情况

### toRef

`toRef`与`toRefs`功能一致，只不过一次只能处理一个属性

- 语法：`const name = toRef(user,'name')`

```javascript
import { ref, toRef } from 'vue';
const user = ref({ name: 'Jack', age: 18 });
const name = toRef(user.value, 'name');
```

## computed

Vue3 中`computed`改为了函数的形式，`computed`函数接受一个 getter 函数，返回一个只读的响应式 [ref](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Freactivity-core.html%23ref) 对象。该 ref 通过 `.value` 暴露 getter 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象

- 创建一个**只读**的计算属性 ref

```javascript
const count = ref(1);
const plusOne = computed(() => count.value + 1);

console.log(plusOne.value); // 2
plusOne.value++; // 错误
```

- 创建一个**可写**的计算属性 ref

```javascript
const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    //此处的val就是赋的新值
    count.value = val - 1;
  },
});

plusOne.value = 1;
console.log(count.value); // 0
```

## watch

Vue3 中的`watch`也为一个函数：`watch(监听的数据, 数据改变执行函数, 配置对象)` 来进行数据的侦听

- 数据：单个数据，多个数据，函数返回对象属性，引用数据类型需要开启深度监听
- 配置对象：`deep` 深度监听 、`immediate` 默认执行、`flush: 'post'`访问更新后的 DOM

Vue3 中`watch`只能监听以下四种数据：（官网）

> 1. `ref`定义的数据（不需要`.value`）
> 2. `reactive`定义的数据
> 3. 函数返回一个值（`getter`函数）
> 4. 一个包含上述内容的数组

停止侦听器：

```js
const stop = watch(source, callback);
stop(); // 停止侦听器
```

### 监听基本类型

监听`ref`定义的**基本类型**数据：直接写数据名即可，监视的是其`value`值的改变

```js
import { ref, watch } from 'vue';
const count = ref(0);
// watch(数据, 改变后回调函数)
const stopWatch = watch(count, (newValue, oldValue) => {
  console.log('count改变了', newValue, oldValue);
  if (newValue >= 10) stopWatch(); //值大于等于5时，停止侦听
});
// 修改count数据
setInterval(() => {
  count.value++;
}, 500);
```

### 监听对象类型

监听`ref`定义的**对象类型**数据：直接写数据名，监视的是对象的**地址值**，若想监视对象内部的数据，要手动开启深度监视`{ deep: true }`

> 若修改的是`ref`定义的**对象中的属性**，`newValue` 和 `oldValue` 都是新值，因为它们是同一个对象
>
> 若修改的是`ref`定义的**整个对象**，`newValue` 是新值， `oldValue` 是旧值，因为不是同一个对象了

```js
import { ref, watch } from 'vue';
const user = ref({
  name: 'tom',
  info: {
    gender: '男',
    age: 18,
  },
});

watch(
  user,
  (newValue, oldValue) => {
    console.log('数据改变了', newValue, oldValue);
  },
  { deep: true }
);

// 2s改变数据
setTimeout(() => {
  user.value.info.age++; //newValue与oldValue都为新值
}, 2000);
// 4s改变数据
setTimeout(() => {
  // ref定义对象可以整体修改
  user.value = {
    name: 'jack',
    info: {
      gender: '男',
      age: 20,
    },
  };
}, 4000); //newValue为新值，oldValue为旧值
```

监视`reactive`对象类型与监视`ref`对象类型有些许不同：

- `newValue` 和 `oldValue` 都是新值，因为始终都是同一个对象
- 对象整体赋值使用的是`Object.assign()`
- **默认开启深度监听**，且无法关闭

### 监听对象中的属性

监听`ref`或`reactive`定义的对象类型数据中的**某个属性**，注意点如下：

1. 若该属性值**不是对象类型**，要写成**函数形式**
2. 若该属性值**是对象类型**，可直接监听，也可写成函数，**建议写成函数**

> 监听的属性也是对象，写成函数形式则监听的是地址值，需要关注对象内部，要手动开启深度监视

```js
import { ref, watch, reactive } from 'vue';

const user = reactive({
  name: 'tom',
  info: {
    gender: '男',
    age: 18,
  },
});

// watch(()=>数据, 改变后回调函数)
watch(
  () => user.name,
  (newValue, oldValue) => {
    console.log('数据改变了', newValue, oldValue);
  }
);
watch(
  () => user.info,
  (newValue, oldValue) => {
    console.log('数据改变了', newValue, oldValue);
  },
  { deep: true }
);

// 2s改变数据
setTimeout(() => {
  user.name = 'jack';
}, 2000);

// 3s改变数据
setTimeout(() => {
  user.info.age++; //对象属性改变能监听
}, 2000);

// 4s改变数据
setTimeout(() => {
  Object.assign(user.info, { gender: '女', age: 20 }); //对象整体改变能监听
}, 2000);
```

### 监听多个数据

上述类型的监听数据，放入一个数组内

```javascript
import { reactive, ref, watch } from 'vue';
const count = ref(0);
const user = reactive({
  name: 'tom',
  info: {
    gender: '男',
    age: 18,
  },
});
// watch([数据1, 数据2, ...], 改变后回调函数)
watch([count, user], (newValue, oldValue) => {
  console.log('数据改变了', newValue, oldValue); //以数组呈现结果
});
// 2s改变数据
setTimeout(() => {
  count.value++;
}, 2000);
// 4s改变数据
setTimeout(() => {
  user.info.age++;
}, 4000);
```

## watchEffect

`watchEffect` 是 Vue 3 组合式 API 中用于监听响应式数据变化的钩子。它会**立即执行一次回调函数**（相当于 watch 加了`{ immediate: true }`），并在依赖的响应式数据发生变化时再次执行回调函数

`watchEffect`不用指明监听哪个属性，**监听的回调中用到哪个属性，那就监听哪个属性**

`watchEffect`有点类似于`computed`：

- `computed`注重的计算出来的值（回调函数的返回值），所以必须要写返回值
- `watchEffect`更注重的是过程（回调函数的函数体），所以不用写返回值

```html
<template>
  <p>计数器：{{ counter }}</p>
  <button @click="increment">增加</button>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue';

  // 定义计算属性
  const counter = ref(0);

  // 监听计算属性的变化
  watchEffect(() => {
    console.log('计数器变化：', counter.value);
    // 执行其他逻辑
  });

  // 增加计数器的方法
  const increment = () => {
    counter.value++;
  };
</script>
```

> ```
> watch` vs. `watchEffect
> ```
>
> `watch` 和 `watchEffect` 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
>
> - `watch` 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。`watch` 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
> - `watchEffect`，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

## defineExpose

- 使用 `<script setup>` 的组件是**默认关闭**的，组件实例使用不到顶层的数据和函数
- 需要配合 `defineExpose` 暴露给组件实例使用，暴露的响应式数据会自动解除响应式

父组件：

```html
<script setup>
  import { ref } from 'vue';
  // vue3 中使用组件只需导入无需注册
  import Form from './components/Form.vue';

  // 提供一个ref
  const formRef = ref(null);
  // 使用组件组件和方法
  // 配合 defineExpose 暴露数据和方法，ref获取的组件实例才可以使用
  const fn = () => {
    console.log(formRef.value.count);
    formRef.value.validate();
  };
</script>

<template>
  <form ref="formRef"></form>
</template>
```

子组件：

```html
<script setup>
  import { ref } from 'vue';

  const count = ref(0);
  const validate = () => {
    console.log('表单校验方法');
  };

  // 暴露属性给外部组件使用
  defineExpose({ count, validate });
</script>

<template>
  <h3>我是Form组件</h3>
</template>
```

## 组件通信

**`Vue3`组件通信相比于`Vue2`：**

- 移出事件总线，使用`mitt`

- `vuex`换成`pinia`
- `.sync`合并到`v-model`
- `$listeners`合并到`$attrs`
- 删除`$children`

![image-20240123100812051.png](vue3.assets/ede22185f7ef41b6a84ebc9516269681tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### defineProps(父传子)

> Vue3 中用于实现组件通信中的父传子组件通信

- 父组件提供数据，将数据传递给子组件
- 子组件通过 `defineProps` 进行接收，并渲染父组件传递的数据

**父组件：**

```html
<script setup>
  import { ref } from 'vue';
  import ChildCom from './components/ChildCom.vue';

  const name = ref('Jack');
  const age = ref(18);
</script>

<template>
  <div>
    <ChildCom :name="name" :age="age"></ChildCom>
  </div>
</template>
```

**子组件 (setup)：**

```html
<script setup>
  import { computed } from 'vue';

  // defineProps: 接收父组件传递的数据
  const props = defineProps({ name: String, age: Number });
  // 使用props
  console.log(props.name); //模板中可直接使用，无需使用返回值props前缀
</script>
```

> 如果使用 `defineProps` 接收数据，这个数据只能在模板中渲染。如果想要在 `script` 中也操作 `props` 属性，应该接收返回值（使用 props 变量接受）[prop 进一步校验](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fcomponents%2Fprops.html%23prop-validation)可以直接参考官网
>
> 如果是结合`TS`使用，官网有更详细的限制接受变量以及默认值设置：[defineProps](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2Fsfc-script-setup.html%23defineprops-defineemits)

**子组件 (常规写法)：** [官网 props 常规写法](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fcomponents%2Fprops.html)

```html
<script>
  import { ref, onMounted } from 'vue';

  export default {
    props: {
      name: String,
      age: Number,
    },
    setup(props) {
      const name = ref(props.name); // 通过 ref() 创建响应式变量
      const age = ref(props.age);

      onMounted(() => {
        console.log(name.value); // 访问 props 的 name 属性
        console.log(age.value); // 访问 props 的 age 属性
      });

      return {
        name,
        age,
      };
    },
  };
</script>
```

**props 除了父传子外，其实也能实现子向父传递：** （不推荐这种用法）

- 若 **父传子**：属性值是**非函数**
- 若 **子传父**：属性值是**函数**

实现原理：父组件给子组件传递一个函数，子组件通过父组件传递过来的函数来传递数据给父组件

**父组件：**

```html
<template>
  <Child :getToy="getToy" />
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import { ref } from 'vue';

  const toy = ref();
  // 方法
  function getToy(value: string) {
    toy.value = value;
  }
</script>
```

**子组件：**

```html
<template>
  <button @click="getToy(toy)">传值给父亲</button>
</template>

<script setup lang="ts" name="Child">
  import { ref } from 'vue';

  const toy = ref('奥特曼');
  defineProps(['getToy']);
</script>
```

### defineEmits(子传父)

Vue 推崇单向数据流，父组件传来的函数，子组件不应该修改。所以，更多时候我们是借助`emit`来自定义事件，实现子向父传递参数

- 子组件通过 `defineEmits`获取 `emit` 函数
- 子组件通过 `emit` 触发事件，并且传递数据
- 子组件模板中可以使用`$emit`

子组件：

```html
<script setup>
  defineProps({
    name: String,
    age: Number,
  });

  // 得到emit函数，显性声明事件名称
  const emit = defineEmits(['changeAge']);
  const change = () => {
    emit('changeAge', 1);
  };
</script>
```

父组件：

```html
<script setup>
  import { ref } from 'vue';
  import ChildCom from './ChildCom.vue';

  const name = ref('Jack');
  const age = ref(18);
  const changeAge = (num) => {
    age.value = age.value + num;
  };
</script>

<template>
  <div>
    <ChildCom :name="name" :age="age" @changeAge="changeAge"></ChildCom>
  </div>
</template>
```

> `defineEmits` 获取 `emit` 函数，且组件需要触发的事件需要显性声明出来

本节还有一个很重要的点，那就是**原生事件**和**自定义事件**

原生事件：

- 事件名是特定的（`click`、`mosueenter`等等）
- 事件对象`$event`：是包含事件相关信息的**对象**（`pageX`、`pageY`、`target`、`keyCode`）

自定义事件：

- 事件名是任意名称
- 事件对象`$event`：是调用`emit`时所提供的**数据**，可以是任意类型

```html
<Child @send-toy="toy = $event" />
<!-- 这里的$event就是子组件中$emit('send-toy', 数据)传过来的值 -->
```

### mitt(任意)

`mitt` 是一个小型的事件总线库，可以用于在 Vue 3 中进行组件间的事件通信。它提供了一种简单而灵活的方式来触发和监听事件，而不需要使用 Vue 实。**对于更大型的应用程序，推荐使用 Pinia**

安装`mitt`

```bash
npm i mitt
```

新建文件：`src\utils\emitter.ts`

```js
// 引入mitt
import mitt from 'mitt';

// 创建emitter
const emitter = mitt();

// 绑定事件
emitter.on('abc', (value) => {
  console.log('abc事件被触发', value);
});
emitter.on('xyz', (value) => {
  console.log('xyz事件被触发', value);
});

// 触发事件
emitter.emit('abc', 666);
emitter.emit('xyz', 777);

// 清理全部事件
emitter.all.clear();
// 清理指定事件
emitter.off('abc');

// 创建并暴露mitt
export default emitter;
```

> 在组件中使用时，导入即可

### v-model

Vue3 中的 `v-model`合并了 Vue2 中的`.sync`标识符，可以多次使用

- HTML 标签上`v-model`的本质

```html
<!-- 使用v-model指令 -->
<input type="text" v-model="userName" />

<!-- v-model的本质是下面这行代码 -->
<input
  type="text"
  :value="userName"
  @input="userName =(<HTMLInputElement>$event.target).value"
/>
```

- 组件标签上的`v-model`的本质，此处`modelValue`可改名

```html
<!-- 组件标签上使用v-model指令 -->
<CustomInput v-model="userName" />

<!-- 组件标签上v-model的本质 -->
<CustomInput :modelValue="userName" @update:model-value="userName = $event" />
```

`CustomInput`组件中：

```html
<template>
  <div class="box">
    <input
      type="text"
      :value="modelValue"
      @input="emit('update:model-value',$event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
  // 接收props
  defineProps(['modelValue']);
  // 声明事件
  const emit = defineEmits(['update:model-value']);
</script>
```

### $attrs(祖孙)

`$attrs`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖 → 孙**）

- `$attrs`是一个对象，包含所有父组件传入的标签属性
- `$attrs`接收的其实就是[透传 Attributes](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fcomponents%2Fattrs.html%23fallthrough-attributes)

实现基本逻辑：**父**给**子**传，**子**通过`v-bind=$attrs`转传给**孙**，孙组件可以通过`defineProps`接收，并且可以通过传函数的方式来进行祖孙之间的通信

> Vue3 中以`$`开头的属性，在模板中使用

### $refs、$parent

- `$refs`：**父 → 子**
- `$parent`：**子 → 父**

原理如下：

| 属性      | 说明                                             |
| --------- | ------------------------------------------------ |
| `$refs`   | 获取包含所有被`ref`属性标识的`DOM`元素或组件实例 |
| `$parent` | 获取当前组件的父组件实例对象                     |

> 使用时，需要通过`defineExpose`来暴露数据给其他组件访问

### provide、inject

> 通过 provide 和 inject 函数可以**简便的**实现跨级组件通信

- `provide`和`inject`是解决跨级组件通信的方案
  - provide 提供后代组件需要依赖的数据或函数
  - inject 注入（获取）provide 提供的数据或函数
- 官方术语：依赖注入
  - App 是后代组件`依赖`的数据和函数的`提供者`，Child 是`注入`（获取）了 App 提供的依赖

祖先组件：`App.vue`

```html
<script setup>
  import { provide, ref } from 'vue';
  import ParentCom from './ParentCom.vue';

  // 1. app组件数据传递给child
  const count = ref(0);
  provide('count', count);

  // 2. app组件函数传递给child，调用的时候可以回传数据
  const updateCount = (num) => {
    count.value += num;
  };
  provide('updateCount', updateCount);
</script>

<template>
  <div
    class="app-page"
    style="border: 10px solid #ccc; padding: 50px; width: 600px"
  >
    app 组件 {{ count }} updateCount
    <ParentCom />
  </div>
</template>
```

父级组件：`ParentCom.vue`

```html
<script setup>
  import ChildCom from './ChildCom.vue';
</script>

<template>
  <div class="parent-page" style="padding: 50px">
    parent 组件
    <hr />
    <ChildCom />
  </div>
</template>
```

子级组件：`ChildCom.vue`

```html
<script setup>
  const count = inject('count');
  const updateCount = inject('updateCount');
</script>

<template>
  <div class="child-page" style="padding: 50px; border: 10px solid #ccc">
    child 组件 {{ count }} <button @click="updateCount(100)">修改count</button>
  </div>
</template>
```

> vue3 中的 inject 函数与 vue2 中的 inject 函数有所不同，一次只能获取一条数据或函数

# 其它新特性

## 生命周期函数

- 先从 vue 中导入以`on开头`的生命周期钩子函数
- 在`setup`函数中调用生命周期函数并传入回调函数
- 生命周期钩子函数可以调用多次

| 选项式 API 下的生命周期函数使用 | 组合式 API 下的生命周期函数使用 | 函数描述                                                                     |
| ------------------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| beforeCreate                    | 可以省略                        | 组件实例被创建之前调用                                                       |
| created                         | 可以省略                        | 组件实例创建完成后调用，可以在这个钩子函数中进行数据初始化和对外部资源的请求 |
| beforeMount                     | `onBeforeMount`                 | 在组件挂载到 DOM 之前调用，此时模板编译完成，但组件尚未插入到 DOM 中         |
| mounted                         | `onMounted`                     | 在组件挂载到 DOM 后调用，此时组件已经被插入到 DOM 中，可以进行 DOM 操作      |
| beforeUpdate                    | `onBeforeUpdate`                | 数据更新前调用，当响应式数据被修改时触发，但 DOM 尚未更新                    |
| updated                         | `onUpdated`                     | 数据更新后调用，DOM 已经更新完成                                             |
| beforeDestroyed                 | `onBeforeUnmount`               | 在组件卸载之前调用，此时组件还没有被卸载                                     |
| destroyed                       | `onUnmounted`                   | 在组件卸载之后调用，组件已经被完全卸载，可以进行一些清理操作                 |
| activated                       | `onActivated`                   | 当组件被激活时调用                                                           |
| deactivated                     | `onDeactivated`                 | 当组件被失活时调用                                                           |

例如 `onMounted` 的使用：

- 选项式 Api

```html
<script>
  export default {
    mounted() {
      console.log('挂载完成');
      // 执行其他逻辑
    },
  };
</script>
```

- 组合式 Api

```html
<script>
  import { onMounted } from 'vue';

  export default {
    setup() {
      onMounted(() => {
        console.log('挂载完成');
        // 执行其他逻辑
      });
    },
  };
</script>
```

- setup 语法糖

```html
<script setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log('挂载完成');
    // 执行其他逻辑
  });
</script>
```

![life.png](vue3.assets/77a62156ed544012a4ddfff3accb179ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

## 自定义 hook 函数

`hook`本质是一个函数，把`setup`函数中使用的 Composition API 进行了封装

- 类似于 Vue2 中的 mixin
- 自定义 hook 的优势：复用代码，让 setup 中的逻辑更清楚易懂
- hooks 函数文件名以`use`开头

下面是一个简单的示例：

- `src/hooks/useSquareHook.js`

```js
// useSquareHook.js
import { ref, computed } from 'vue';

export function useSquareHook() {
  const number = ref(0);

  const square = computed(() => number.value * number.value);

  const setNumber = (value) => {
    number.value = value;
  };

  return {
    number,
    square,
    setNumber,
  };
}
```

在组件中使用这个自定义 hook：

```html
<template>
  <div>
    <input type="number" v-model="number" @input="setNumber" />
    <p>数字的平方是: {{ square }}</p>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useSquareHook } from './useSquareHook';

  export default defineComponent({
    setup() {
      const { number, square, setNumber } = useSquareHook();
      return {
        number,
        square,
        setNumber,
      };
    },
  });
</script>
```

## shallowReactive 与 shallowRef

- `shallowReactive`：只处理对象**最外层属性**的响应式（浅响应式）
- `shallowRef`：只处理**基本数据类型**的响应式，不进行对象的响应式处理
- 使用场景：
  - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化（shallowReactive）
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是用新的对象来替换（shallowRef）

```html
<template>
  <div>
    修改shallowRef:{{ dataRef }}
    <button @click="add">count++</button>
    <br />
    修改shallowReactive:{{ dataReactive }}
    <button @click="change">change</button>
  </div>
</template>

<script setup>
  import { shallowRef, shallowReactive } from 'vue';
  const dataRef = shallowRef({ count: 0 });
  const add = () => {
    dataRef.value.count++;
    console.log(dataRef.value);
  };
  const dataReactive = shallowReactive({ nested: { count: 0 } });
  const change = () => {
    dataReactive.nested.count++;
    console.log(dataReactive);
  };
</script>
```

> 上述代码数据均不为响应式

## readonly 与 shallowReadonly

- `readonly`：让一个响应式数据变为只读的（深只读），**依旧是返回的代理对象**
- `shallowReadonly`：让一个响应式数据变为只读的（浅只读）
- 应用场景：不希望数据被修改时

## toRaw 与 markRaw

`toRaw`：

- 作用：将一个由`reactive`生成的**响应式对象**转为**普通对象**
- 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

`markRaw`：

- 作用：标记一个对象，使其永远不会再成为响应式对象
- 应用场景：
  1. 有些值不应被设置为响应式的，例如复杂的第三方类库等
  2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

## customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

- 实现防抖效果：（来自官网）

  ```html
  <template>
    <input type="text" v-model="keyword" />
    <h3>{{keyword}}</h3>
  </template>

  <script>
    import { ref, customRef } from 'vue';
    export default {
      name: 'Demo',
      setup() {
        // let keyword = ref('hello') //使用Vue准备好的内置ref
        //自定义一个myRef
        function myRef(value, delay) {
          let timer;
          //通过customRef去实现自定义
          return customRef((track, trigger) => {
            return {
              get() {
                track(); //告诉Vue这个value值是需要被“追踪”的
                return value;
              },
              set(newValue) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                  value = newValue;
                  trigger(); //告诉Vue去更新界面
                }, delay);
              },
            };
          });
        }
        let keyword = myRef('hello', 500); //使用程序员自定义的ref
        return {
          keyword,
        };
      },
    };
  </script>
  ```

## 响应式数据的判断

- `isRef`：检查一个值是否为一个 `ref `对象
- `isReactive`：检查一个对象是否是由 `reactive` 创建的响应式代理
- `isReadonly`：检查一个对象是否是由 `readonly` 创建的只读代理
- `isProxy`：检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

## Fragment

- 在`Vue2`中：组件必须有一个根标签
- 在`Vue3`中：组件可以没有根标签，内部会将多个标签包含在一个 Fragment 虚拟元素中
- 好处：减少标签层级，减小内存占用

## Teleport

`Teleport` 是一种能够将我们的`组件html结构`移动到指定位置的技术，使用`Teleport`，你可以将组件的内容渲染到 DOM 树中的任意位置，而不必修改组件的父组件层次结构或使用复杂的技巧

示例：

- 在组件模板中使用`<teleport>`标签来包裹你想要渲染到的目标位置。这个目标位置可以是任意的 DOM 元素或选择器

```html
<template>
  <div>
    <!-- other content -->
    <teleport to="#target">
      <div>Teleport content</div>
    </teleport>
  </div>
</template>
```

- 在同一个组件内部，在目标位置的外部创建一个具有唯一 ID 的 DOM 元素，这将作为`Teleport`的渲染目标

```html
<template>
  <div>
    <!-- other content -->
    <teleport to="#target">
      <div>Teleport content</div>
    </teleport>
  </div>
  <div id="target"></div>
</template>
```

此时，Teleport 就会将`<div>Teleport content</div>`渲染到具有 ID 为`target`的 DOM 元素中，而不是在父组件的位置

> Teleport 只会将内容渲染到目标位置，不会移动组件的其他属性或行为。这使得 Teleport 非常适合在模态框、对话框、弹出菜单等情况下使用

## Vue3 组件注册

> 本节内容源自[官网](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fcomponents%2Fregistration.html)

### 全局注册

- 我们可以使用 [Vue 应用实例](https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fessentials%2Fapplication.html)的 `app.component()` 方法，让组件在当前 Vue 应用中全局可用

```js
import { createApp } from 'vue';

const app = createApp({});

app.component(
  // 注册的名字
  'MyComponent',
  // 组件的实现
  {
    /* ... */
  }
);
```

- 如果使用单文件组件，你可以注册被导入的 `.vue` 文件

```js
import MyComponent from './App.vue';

app.component('MyComponent', MyComponent);
```

- `app.component()` 方法可以被链式调用

```js
app
  .component('ComponentA', ComponentA)
  .component('ComponentB', ComponentB)
  .component('ComponentC', ComponentC);
```

- 全局注册的组件可以在此应用的任意组件的模板中使用

```js
<!-- 这在当前应用的任意组件中都可用 -->
<ComponentA/>
<ComponentB/>
<ComponentC/>
```

### 局部注册

全局注册虽然很方便，但有以下几个问题：

1. 全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，**它仍然会出现在打包后的 JS 文件中**
2. 全局注册在大型项目中使项目的依赖关系变得**不那么明确**。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性

相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。**它的优点是使组件之间的依赖关系更加明确，并且对 tree-shaking 更加友好**

在使用 `<script setup>` 的单文件组件中，导入的组件可以直接在模板中使用，无需注册（Vite 支持自动全局注册组件，前提是要将组件写在`components`目录中）

```html
<script setup>
  import ComponentA from './ComponentA.vue';
</script>

<template>
  <ComponentA />
</template>
```

如果没有使用 `<script setup>`，则需要使用 `components` 选项来显式注册（建议直接使用 setup 语法糖形式）

```js
import ComponentA from './ComponentA.js';

export default {
  components: {
    ComponentA,
  },
  setup() {
    // ...
  },
};
```

> **局部注册的组件在后代组件中并不可用**。在这个例子中，`ComponentA` 注册后仅在当前组件可用，而在任何的子组件或更深层的子组件中都不可用

# Pinia

## 基本介绍

`Pinia` 是一个状态管理工具，它和 `Vuex` 一样为 `Vue` 应用程序提供共享状态管理能力。`Pinia`核心概念包括`state`（状态）、`actions`（修改状态，包括同步和异步）、`getters`（计算属性）

在 `Pinia` 中，状态的修改是通过直接操作 `store` 中的状态属性来实现的，而不是通过 `mutation`。相比于 `Vuex` 的 `mutation`，`Pinia` 提倡使用更直接的方式来修改状态，这使得代码更加简洁和直观

除此之外：

- 语法和 `Vue3` 一样，它实现状态管理有两种语法：`选项式API` 与 `组合式API`
- 它也支持 `Vue2` 、 `devtools`，当然它也是类型安全的，支持 `TypeScript`
- `Pinia` 相比 `Vuex4`，对于 `Vue3`的兼容性更好，具备完善的类型推荐（同样支持 vue 开发者工具）

Pinia 的数据流转图：

![image-20220727155944251.396f5157.png](vue3.assets/66cce866c4164d91a0cbca1e27599f34tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> Pinia 可以创建多个全局仓库，不用像 Vuex 一个仓库嵌套模块，结构简单。此外，Pinia 管理数据简单，只需提供数据和修改数据的逻辑即可，无需记忆过多的 API

## 使用 Pinia

### 基本使用

- 安装 Pinia

```bash
yarn add pinia
# 或者使用 npm
npm install pinia
```

- 在 `main.js` 中挂载 pinia

```js
import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';
const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
```

此时开发者工具中已经有了`pinia`选项

![1684309952481-c67f67f9-d1a3-4d69-8bd6-2b381e003f31.png](vue3.assets/b034c24992654887b0eff1d09649a6c8tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

- 新建文件 `store/counter.js`

> 创建 store，命名规则： `useXxxxStore`（一个符合组合式函数风格的约定）
>
> - 参数 1：`store`的唯一标识，也被用作 id，是必须传入的，Pinia 将用它来连接 store 和 devtools
> - 参数 2：可接受两类值：`Setup函数`或`Option对象`

```js
import { defineStore } from 'pinia';
// Option Store 写法：
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: '苹果' }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// Setup Store 写法：
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});
```

- 在组件中使用`state`中数据

```js
<script setup>
import { useCounterStore } from '@/stores/counter'
// 可以在组件中的任意位置访问 `store` 变量
const store = useCounterStore()
</script>

<template>
  <h1>根组件---{{ store.count }}</h1>
</template>
```

> `store` 是一个用 `reactive` 包装的对象，这意味着不需要`.value`，并且`reactive`声明的对象内部如果使用了`ref`，在使用时也无需`.value`（自动解包）

### 修改 state 中数据

- 直接修改

```js
countStore.count = 666;
```

- `$patch`批量修改

```js
countStore.$patch({
  count: 1,
  name: '梨子',
});
```

- 借助`action`修改（`action`中可以编写一些业务逻辑）

```js
import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

> 如果要监听`state`中数据的变化，可以使用 store 的 `$subscribe()` 方法

### actions 与 getters 的使用

> 如上文所说，在 pinia 中没有 mutations，只有 actions，不管是同步还是异步的代码，都可以在 actions 中完成

- 在 actions 中提供方法并且修改数据，在 getters 中提供计算属性

```js
import { defineStore } from 'pinia';
// 创建store
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    //getters函数内部自带有一个参数state
    double() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    },
  },
});
// 导出 useCounterStore
export default useCounterStore;
```

- 在组件中使用 actions 与 getters

```js
<script setup>
import useCounterStore from './store/counter'
const counter = useCounterStore()
</script>

<template>
  <h1>根组件---{{ counter.count }}</h1>
  <h3>{{ counter.double }}</h3>
  <button @click="counter.increment">加1</button>
  <button @click="counter.incrementAsync">异步加1</button>
</template>
```

### storeToRefs 的使用

> 如果直接从 pinia 中解构数据，会丢失响应式， 使用`storeToRefs`可以使解构出的数据保持响应式

```js
<script setup>
  import {storeToRefs} from 'pinia' import useCounterStore from
  './store/counter' const counter = useCounterStore() // 直接从 pinia
  中解构数据，会丢失响应式 const {(count, double)} = counter // 使用 storeToRefs
  可以保证解构出来的数据也是响应式的 const {(count, double)} =
  storeToRefs(counter)
</script>
```

### 组件外使用 Pinia

Pinia store 依靠 `pinia` 实例在所有调用中共享同一个 store 实例。大多数时候，只需调用你定义的 `useStore()` 函数，完全开箱即用。例如，**在 `setup()` 中，你不需要再做任何事情。但在组件之外，情况就有点不同了。** 实际上，`useStore()` 给你的 `app` 自动注入了 `pinia` 实例。这意味着，如果 `pinia` 实例不能自动注入，你必须手动提供给 `useStore()` 函数。 你可以根据不同的应用，以不同的方式解决这个问题

> 这段话的意思是：在`setup()`中，你可以随便使用`useStore`，隐含意思就是在`js`或别的文件中，就不能随便用了。这是由于`script setup` 是一个特殊的语法状态，它会在 JS 前置执行

**官网举例：**

如果你不做任何 SSR(服务器端渲染)，在用 `app.use(pinia)` 安装 pinia 插件后，对 `useStore()` 的任何调用都会正常执行：

```js
import { useUserStore } from '@/stores/user';
import { createApp } from 'vue';
import App from './App.vue';

// ❌ 失败，因为它是在创建 pinia 之前被调用的
const userStore = useUserStore();

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

// ✅ 成功，因为 pinia 实例现在激活了
const userStore = useUserStore();
```

为确保 pinia 实例被激活，最简单的方法就是将 `useStore()` 的调用放在 pinia 安 装后才会执行的函数中。

让我们来看看这个在 Vue Router 的导航守卫中使用 store 的例子

```js
import { createRouter } from 'vue-router';
const router = createRouter({
  // ...
});

// ❌ 由于引入顺序的问题，这将失败
const store = useStore();

router.beforeEach((to, from, next) => {
  // 我们想要在这里使用 store
  if (store.isLoggedIn) next();
  else next('/login');
});

router.beforeEach((to) => {
  // ✅ 这样做是可行的，因为路由器是在其被安装之后开始导航的，
  // 而此时 Pinia 也已经被安装。
  const store = useStore();

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login';
});
```

> 最简单方法是延迟调用 `useStore()`，方法是将它们放在安装 pinia 后始终运行的函数中，万不得已可以放入定时器中延迟调用

## Pinia 模块化

> 复杂项目中，不可能多个模块的数据都定义到一个 store 中，一般来说会一个模块对应一个 store，最后通过一个根 store 进行整合

- 新建`store/user.js`文件

```js
import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'Jack',
      age: 18,
    };
  },
});
export default useUserStore;
```

- 新建文件`store/counter.js`文件

```js
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    double() {
      return this.count * 2;
    },
  },
  actions: {},
});
export default useCounterStore;
```

- 新建`store/index.js`文件

```js
// 写法一
import useUserStore from './user';
import useCounterStore from './counter';

// 统一导出 useStore 方法
export default function useStore() {
  return {
    user: useUserStore(),
    counter: useCounterStore(),
  };
}

// 写法二
export useUserStore from './user';
export useCounterStore from './counter';
```

- 在组件中使用

```js
// 写法一使用
<script setup>
import { storeToRefs } from 'pinia'
import useStore from './store'
const { counter } = useStore()

// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { count, double } = storeToRefs(counter)
</script>

// 写法二使用
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore, useCounterStore } from './store'
const counter = useCounterStore()

// 使用 storeToRefs 可以保证解构出来的数据也是响应式的
const { count, double } = storeToRefs(counter)
</script>
```

## Pinia 持久化

> 使用 `pinia-plugin-persistedstate` 可以实现 pinia 仓库状态持久化

- 安装 `pinia-plugin-persistedstate`

```bash
# pnpm
pnpm i pinia-plugin-persistedstate
# npm
npm i pinia-plugin-persistedstate
# yarn
yarn add pinia-plugin-persistedstate
```

- 在 `main.js/main.ts` 中注册（将插件添加到 pinia 实例上）

```js
import persist from 'pinia-plugin-persistedstate';
const app = createApp(App);

app.use(createPinia().use(persist));
```

- 创建 Store 时，将 `persist` 选项设置为 `true`

```js
// 选项式 Store 语法
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      someState: '你好 pinia',
    };
  },
  persist: true,
});

// 组合式 Store 语法
import { defineStore } from 'pinia';

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('你好 pinia');
    return { someState };
  },
  {
    persist: true,
  }
);
```

> 基本配置完成后，你的整个 Store 将使用[默认持久化配置](https://link.juejin.cn/?target=https%3A%2F%2Fprazdevs.github.io%2Fpinia-plugin-persistedstate%2Fzh%2Fguide%2Fconfig.html)保存，更多配置请参考 [插件中文官网](https://link.juejin.cn/?target=https%3A%2F%2Fprazdevs.github.io%2Fpinia-plugin-persistedstate%2Fzh%2Fguide%2F)

# vue-router4

> Vue3 之后，配套的 vue-router 也升级为 [vue-router@4.x](https://link.juejin.cn/?target=mailto%3Avue-router%404.x) 版本
>
> [vue-router4](https://link.juejin.cn/?target=https%3A%2F%2Frouter.vuejs.org%2F) 的语法和 vue-router3 的版本语法基本一致，但是有一些细微的修改

## 基本使用

- 安装 vue-router

```bash
yarn add vue-router
```

- 创建路由组件 Home.vue 和 Login.vue
- 路由组件通常存放在`pages` 或 `views`文件夹，一般组件通常存放在`components`文件夹
- 创建文件`router/index.js`

```js
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

// 创建路由
const router = createRouter({
  // 创建history模式的路由
  // history: createWebHistory(),
  // 创建hash模式的路由
  history: createWebHashHistory(),
  // 配置路由规则
  routes: [
    { path: '/home', component: () => import('../pages/Home.vue') },
    { path: '/login', component: () => import('../pages/Login.vue') },
  ],
});

export default router;
```

> 在路由规则中，可以使用`name`属性来给路由规则命名，这称为**命名路由**

- 在 `main.js` 中引入

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

- `App.vue` 中使用

```html
<template>
  <ul>
    <li>
      <router-link to="/home">首页</router-link>
    </li>
    <li>
      <router-link to="/login">登陆</router-link>
    </li>
  </ul>

  <!-- 路由出口 -->
  <router-view></router-view>
</template>
```

## 路由工作模式

### history 模式

优点：`URL`更加美观，不带有`#`，更接近传统的网站`URL`

缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有`404`错误

```javascript
const router = createRouter({
  history: createWebHistory(), //history模式
  /******/
});
```

### hash 模式

优点：兼容性更好，因为不需要服务器端处理路径

缺点：`URL`带有`#`不太美观，且在`SEO`优化方面相对较差

```javascript
const router = createRouter({
  history: createWebHashHistory(), //hash模式
  /******/
});
```

## route 与 router

> Vue3 弱化了`this`，使用 `useRouter` 和 `useRoute` 函数替代`this.$route、this.$router`

- 通过 `useRoute()` 可以获取 route 信息

```html
<script setup>
  import { useRoute } from 'vue-router';
  // 模板中仍然可以访问 $router 和 $route
  const route = useRoute();
  console.log(route.path);
  console.log(route.fullPath);
</script>
```

- 通过 `useRouter()` 可以获取 router 信息

```html
<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const login = () => {
    router.push('/home');
  };
</script>
```

## 路由导航

### 声明式与编程式

- 声明式导航

```html
<router-link :to="..."></router-link>
```

- 编程式导航

```js
router.push(...)
```

> 浏览器的历史记录有两种写入方式：分别为`push`和`replace`：
>
> - `push`是追加历史记录（默认值）
> - `replace`是替换当前记录

其中的路由路径参数分为两种：**字符串路径**、**带有路径的对象**

以编程式导航为例：

```js
// 字符串路径
router.push('/users/eduardo');

// 带有路径的对象
router.push({ path: '/users/eduardo' });

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } });

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' });
```

此外，可以使用命名路由来代替 path 路径：

```js
// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } });
```

如果跳转时想携带参数，则就要用到**query 参数**和**params 参数**

### query 参数

- 传递参数

```html
<!-- 跳转并携带query参数（字符串写法） -->
<router-link to="/news/detail?id=1&title=这是标题&content=这是内容"
  >跳转</router-link
>

<!-- 跳转并携带query参数（对象写法） -->
<RouterLink
  :to="{
    path:'/news/detail',
    query:{
      id:news.id,
      title:news.title,
      content:news.content
    }
  }"
>
  {{news.title}}
</RouterLink>
```

- 接受参数

```js
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.query); // 打印query参数
```

### params 参数

- 传递参数

```html
<!-- 跳转并携带params参数（字符串写法） -->
<RouterLink :to="`/news/detail/001/测试标题/测试内容`"
  >{{news.title}}</RouterLink
>

<!-- 跳转并携带params参数（对象写法） -->
<RouterLink
  :to="{
    name:'news', //用name跳转
    params:{
      id:news.id,
      title:news.title,
      content:news.title
    }
  }"
>
  {{news.title}}
</RouterLink>
```

- 接收参数：

```js
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params); // 打印params参数
```

> 传递`params`参数时，若使用`to`的对象写法，必须使用`name`配置项，不能用`path`
>
> 传递`params`参数时，需要在路由规则中占位：`xxx/:xx/:xx`

## 路由 props

路由`props`可以让路由组件更方便的收到参数（可以将路由参数作为`props`传给组件，配合`defineProps`接收）

```js
{
  name:'news',
  path:'detail/:id/:title/:content',
  component:Detail,
  props:{a:1,b:2,c:3}, //对象写法，值固定不常用
  props:true //布尔值写法
  props(route){//函数写法
    return route.query
  }
}
```
