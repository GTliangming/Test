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
