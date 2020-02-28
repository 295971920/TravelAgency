项目配置：

创建vue项目：vue init webpack 项目名称 （如果启动不成功，安装 npm install webpack-dev-server --save-dev 后再启动 ）
根目录index.html的meta content中追加不允许用户缩放操作代码：minimum-scale=1.0,maximum-scale=1.0,user-scalable=no 
样式重置：reset.css
移动端多倍屏1像素边框问题：border.css（解决1像素问题）
解决移动端的300毫秒延时：npm install fastclick --save （cmd进入项目文件夹下运行，安装成功后可以检查package.json 文件中的dependencies是否存在fastclick）
main.js 文件下引入import fastClick from 'fastclick'   以及  fastClick.attach(document.body)
iconfont管理：阿里巴巴矢量图库