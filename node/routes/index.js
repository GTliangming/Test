const router = require('koa-router')()
router.prefix('/api')



const user = require('./user');
const common = require('./common');
/*  通用 ············· */
router.get('/sendEmail',common.sendEmail)

/*  用户·········· */
router.post('/login',user.login)
router.post('/loginAdmin',user.loginAdmin)
router.post('/logout',user.logout)
router.post('/register',user.register)
router.get('/getUserList',user.getUserList)
router.get('/getUserInfo',user.getUserInfo)
router.post('/deleteOneUser',user.deleteOneUser)





module.exports = router
