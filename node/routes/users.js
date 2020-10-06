const router = require('koa-router')()

router.prefix('/users')


const {
  login,
  loginAdmin
} = require('../controllers/user');




router.post('/login',login)
router.post('/loginAdmin',loginAdmin)


module.exports = router
