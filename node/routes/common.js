/**
 * Article models module.
 * @file 通用请求
 * @module routes/common
 * @author  lm
 */

const utils = require("../common/utils");
const nodemailer = require("../config/nodemailer");



exports.sendEmail = async (ctx,next) =>{
    let email=ctx.request.query.email;
    console.log(111,email)
    if(!email){
        utils.responseClient(ctx,400,'邮箱不可为空')
        return;
    }
    let code = utils.createSixNum();
    let mail = {
        from : "lmzs124083@163.com",
        subject : "即将拥有八块腹肌のlm向你发送了一个爱心验证码",
        to : email,
        text :`
        正见空江明月来，云水苍茫失江路。

        夜深江月弄清辉，水上人歌月下归
        
        您的验证码为 ${code}  !!
        `
    }
    await nodemailer(ctx,mail).then(result=>{
        utils.responseClient(ctx,200,'验证码发送成功,请到邮箱查看！')
    })
}

exports.testPage = async (ctx,next) =>{
    await ctx.render("index")
}