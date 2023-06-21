#### React项目搭建

在React中默认使用yarn, yarn是由facebook推出的一款新的js包管理工具，当然也可以使用npm.

1. 使用yarn
```shell
npm i -g yarn # 全局安装yarn
yarn -v # 查看版本号，检测安装是否成功
```
- 如何使用npx本地安装包
npm: node包管理器，使用npm下载包.
npx: 执行二进制文件，npm从5.2版本开始增加了npx命令.

```shell
yarn init -y # 生成项目依赖文件 package.json
yarn add -D create-react-app # 本地安装create-react-app脚手架包依赖
npx create-react-app react-demo1 # 创建项目
````
npx会自动去查找当前依赖包中的可执行文件，如果找不到，就回去环境变量中查找，如果依然找不到，会执行安装

```js
--public        // 是一个静态资源目录，存放图片等静态资源
    manifest.json // 是一个缓存文件，即使没有联网，离线了也能够访问
    robots.txt    // 给搜索引擎看
-- src          // 项目核心代码
    index.js    // 项目的入口，是工程的入口，也就是项目打包执行的入口
    reportWebVitals.js  // 前端性能检测工具, 
    setupTests.js       // 单元测试
    package.json        // 项目依赖文件
```
public目录下可以只保留index.html文件和favicon.ico图标,
src下可以只保留index.js, index.js文件中内容如下：

```js
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <h1>Hello React</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

根据组件拆分的原则，项目中不可能把所有组件放在index.js中，而是通过拆分和复用来进行开发。
这时候我们可以新建一个App.js，在里面写入以下内容:
```js
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        hello world 
      </div>
    )
  }
}

export default App
```

然后在index.js中去引用App组件
如果我们想要在App组件中去使用另外一个组件Main的话，我们就定义Main.js，在里面写入以下内容：
```js
import React, { Component } from 'react'
import Content from './Content'

export class Main extends Component {
  render() {
    return (
      <div>
        我是主要文件内容
        <Content />
      </div>
    )
  }
}

export default Main
```
然后在App.js中写入以下内容：
```js
import React, { Component } from 'react'
import Main from './Main'

export class App extends Component {
  render() {
    return (
      <div>
        hello world 
        <Main />
      </div>
    )
  }
}

export default App
```













