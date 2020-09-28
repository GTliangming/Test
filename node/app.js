const Koa = require('koa')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const cookieParser = require('cookie-parser');
const index = require('./routes/index')
const users = require('./routes/users')
// const session = require('express-session');

const Koa_Session = require('koa-session');   // 导入koa-session  
// 配置
const session_signed_key = ["lm-cookie"];  // 这个是配合signed属性的签名key
const session_config = {
    key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: { maxAge: 60 * 1000 * 30, httpOnly: true },   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
};

// 初始化
const app = new Koa()


// 处理跨域问题
var cors = require('koa2-cors');
app.use(cors());

// 启动mongos连接数据库
const mongodb = require('./config/mongodb');
mongodb.connect();

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger("dev"))

app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// 生成cookie

const session = Koa_Session(session_config, app)
app.keys = session_signed_key;
app.use(session)
// app.use(cookieParser('lm-Test-cookie'));
// app.use(
// 	session({
// 		secret: 'lm-Test-cookie',
// 		name: 'session_id', //# 在浏览器中生成cookie的名称key，默认是connect.sid
// 		resave: true,
// 		saveUninitialized: true,
// 		cookie: { maxAge: 60 * 1000 * 30, httpOnly: true }, //过期时间
// 	}),
// );

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()          
  const ms = new Date() - start    
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
