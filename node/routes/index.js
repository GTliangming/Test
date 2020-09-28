const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  try{
    ctx.session.username = "11";
    ctx.session.age = "22";
  }catch(e){
    console.log(111111,e)
  }
  console.log(2222,ctx.session.username)
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json 111'
  }
})

module.exports = router
