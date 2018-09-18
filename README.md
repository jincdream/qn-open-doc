# 开始文档

## 编译工具安装

```
$ [sudo] npm install wgather -g
```

## 开发

```
$ cd demo
$ npm i && wgather dev
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
