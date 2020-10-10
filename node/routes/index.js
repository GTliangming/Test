
/**
 * Article models module.
 * @file 整合所有路由请求
 * @module routes/article
 * @author  lm
 */

const router = require('koa-router')()
router.prefix('/api')



const user = require('./user');
const common = require('./common');
const article = require('./article');
const tags = require('./tag');


/*  通用 ············· */
router.get('/sendEmail',common.sendEmail)
router.get('/testPage',common.testPage)

/*  用户·········· */
router.post('/login',user.login)
router.post('/loginAdmin',user.loginAdmin)
router.post('/logout',user.logout)
router.post('/register',user.register)
router.get('/getUserList',user.getUserList)
router.get('/getUserInfo',user.getUserInfo)
router.post('/deleteOneUser',user.deleteOneUser)


/*  文章·········· */
router.get('/getArticleList',article.getArticleList)
router.get('/getArticleListAdmin',article.getArticleListAdmin)
router.post('/getArticleDetail',article.getArticleDetail)
router.post('/likeArticle',article.likeArticle)
router.post('/addArticle',article.addArticle)
router.post('/updateArticle',article.updateArticle)
router.post('/delArticle',article.delArticle)


/* 标签 ············ */
router.get('/getTagList',tags.getTagList)
router.post('/addTags',tags.addTags)
router.post('/delTags',tags.delTags)
router.post('/updateTags',tags.updateTags)

module.exports = router
