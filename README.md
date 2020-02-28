# travel

> This is a tourism project developed by vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


项目配置：
创建vue项目：vue init webpack 项目名称 （如果启动不成功，安装 npm install webpack-dev-server --save-dev 后再启动 ）
根目录index.html的meta content中追加不允许用户缩放操作代码：minimum-scale=1.0,maximum-scale=1.0,user-scalable=no 
样式重置：reset.css
移动端多倍屏1像素边框问题：border.css（解决1像素问题）
解决移动端的300毫秒延时：npm install fastclick --save （cmd进入项目文件夹下运行，安装成功后可以检查package.json 文件中的dependencies是否存在fastclick）
main.js 文件下引入import fastClick from 'fastclick'   以及  fastClick.attach(document.body)
iconfont管理：阿里巴巴矢量图库