const router = require('koa-router')()
router.prefix('/api')



const user = require('./user');

router.post('/login',user.login)
router.post('/loginAdmin',user.loginAdmin)
router.post('/logout',user.logout)
router.post('/register',user.register)

router.get('/getUserList',user.getUserList)
router.post('/deleteOneUser',user.deleteOneUser)



module.exports = router
