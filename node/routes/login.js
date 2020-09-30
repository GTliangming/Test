const router = require('koa-router')()

router.prefix('/login')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a login response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a login/bar response'
})

module.exports = router
