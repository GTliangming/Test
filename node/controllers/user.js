import ccc from "../common/utils.js"

const loginAdmin = async (ctx,next )=>{
    console.log(ctx.request.body)
    console.log(ctx.session)
    ctx.cooikes.set("username","",{signed:false,maxAge:0})
    ctx.cooikes.set("age","",{signed:false,maxAge:0})
    ctx.body = 'cookie 清除成功'
}
/* 前端登录 */
const login = async (ctx,next)=>{
    let { email, password } = ctx.request.body;
    console.log(ctx.request.body)
    if (!email) {
        responseClient(res, 400, 2, '用户邮箱不可为空');
        return;
      }
    if (!password) {
        responseClient(res, 400, 2, '密码不可为空');
        return;
    }
    ccc()

}

module.exports = {
    login,
    loginAdmin
}