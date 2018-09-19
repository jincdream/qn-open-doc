# 开始文档

## 编译工具安装

```
$ [sudo] npm install wgather -g
```

## 模板

模板在当前仓库的**demo**文件夹，clone下来即可。

```
$ git clone git@github.com:jincdream/qn-open-doc.git
```

## 开发

```
$ cd demo
$ npm i && wgather dev
```

### 目录

![](https://gw.alicdn.com/tfs/TB1LNpPba6qK1RjSZFmXXX0PFXa-235-417.png)

需要增加页面的时候，只需在``containers``目录增加对应文件夹和文件即可。例如：
```
-containers
  |-pageA
    |-index.js
    |-index.less
```

### 需要开发的入口文件：
- demo/src/containers/index

### 不需要开发的容器文件：
- demo/src/app.js
- demo/src/app.worker.js
- demo/src/index.html

### 组件库

组件库使用的是 fusion 的千牛主题，暂未开源，可以先参考ICE的组件库文档：
https://alibaba.github.io/ice/component/grid

属于``@icedesign/base``的组件都可以使用。

无需应用直接使用即可(!注意：Grid.Row 要写成 Grid-Row)

```jsx
<Grid-Row className="demo-row" align="top">
  <Grid-Col span="8">
    <div
      className="demo-col-inset"
      style={{ height: "100px", lineHeight: "100px" }}
    >
      col-8
    </div>
  </Grid-Col>
<Grid-Row>
```

```jsx
<Button type="primary" shape="warning">
  主要警告按钮
</Button>
```

### 可调用的API

#### 调用方式

```javascript
  Runtime.invokePromise('QN.getActiveUser').then(res=>{
    console.log(res);
  })
  Runtime.invokePromise('Toast.success','ok')
```

#### API: Toast

```javascript
Runtime.invokePromise('Toast.success','ok')
Runtime.invokePromise('Toast.error','error')
```

#### API: QN相关

| name | description |params|
|-------- | -------- |------------ |
| getActiveUser | 获取当前聊天用户Nick |-|

```javascript
Runtime.invokePromise('QN.getActiveUser').then(res=>{
  console.log(res);
})
```

### API: Axios

 axios: https://www.npmjs.com/package/axios
  
```javascript
Runtime.invokePromise('Axios',{
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
}).then(res=>{
  console.log(res);
})
```

## 打包发布

```
$ wgather build
```

![](https://gw.alicdn.com/tfs/TB15AJObXYqK1RjSZLeXXbXppXa-438-405.png)

只要将``app.worker.js``和``app.worker.bundle.css``静态资源进行发布即可。
***！注意，*.worker.js、*.worker.bundle.css*** 后缀不要修改。
