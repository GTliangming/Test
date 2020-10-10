

## 目录结构

—— bin                  项目开始文件
—— common               通用方法
—— config               项目配置文件夹
—— controllers          路由请求方法
—— models               数据库集合模型
—— public               公共文件
—— routes               路由定义
—— views                通用页面

部署地址：`http://netbugs.cn:3000/api/`

## 部分技术

#### consola

安装 `npm i consola` or `yarn add consola`

基本用法
```
const consola = require('consola')

consola.start('Starting build')
consola.success('Built!')
consola.info('Reporter: Some info')
consola.error(new Error('Foo'))
```
