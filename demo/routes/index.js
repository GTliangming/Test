/**
 * Article models module.
 * @file 整合所有路由请求
 * @module routes/article
 * @author  lm
 */

const router = require('koa-router')()
router.prefix('/api')

const CommonController = require("../controller/common")
const UserController = require("../controller/user")
const TagController = require("../controller/tag")
const ArticleController = require("../controller/article")
const EmailController = require("../controller/emailcode")
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})
/* 邮箱验证码 */
router.get('/sendEmail',EmailController.sendEmail)

/*  通用 ············· */

router.get('/test',CommonController.test)
router.get('/gettest',CommonController.gettest)
router.get('/testPage',CommonController.testPage)
router.get('/loginGithub',CommonController.testGithub)


/*  用户·········· */
router.post('/login',UserController.login)
router.post('/loginAdmin',UserController.loginAdmin)
router.post('/logout',UserController.logout)
router.post('/register',UserController.register)
router.get('/getUserList',UserController.getUserList)
router.get('/getUserInfo',UserController.getUserInfo)
router.post('/deleteOneUser',UserController.deleteOneUser)
router.get('/authorizeLogin',UserController.authorizeLogin)
router.get('/githubLogin',UserController.githubLogin)
router.post('/updatePassword',UserController.updatePassword)
// router.post('/updateUserAuthority',UserController.updateUserAuthority)

/*  文章·········· */
router.get('/getArticleList',ArticleController.getArticleList)
router.get('/getArticleListAdmin',ArticleController.getArticleListAdmin)
router.post('/getArticleDetail',ArticleController.getArticleDetail)
router.post('/likeArticle',ArticleController.likeArticle)
router.post('/addArticle',ArticleController.addArticle)
router.post('/updateArticle',ArticleController.updateArticle)
router.post('/delArticle',ArticleController.delArticle)

/* 标签 ············ */
router.get('/getTagList',TagController.getTagList)
router.post('/addTags',TagController.addTags)
router.post('/delTags',TagController.delTags)
router.post('/updateTags',TagController.updateTags)

module.exports = router
