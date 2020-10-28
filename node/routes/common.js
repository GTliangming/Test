/**
 * Article models module.
 * @file 通用请求
 * @module routes/common
 * @author  lm
 */

const utils = require("../common/utils");
const nodemailer = require("../config/nodemailer");
const User = require("../models/user");
const fetch = require('node-fetch');
const fs = require("fs");

/* 邮箱发送验证码！ */
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
        html:`
        <H1>验证码</H1><a href="javascript:;">${code}</a>  请在5分钟内完成验证！`
    }
    await nodemailer(ctx,mail).then( async result=>{
        ctx.session.checking_code = code;
        utils.responseClient(ctx,200,'验证码发送成功,请到邮箱查看！')
    }).catch(err=>{
        utils.responseClient(ctx,400,'验证码发送失败,请重新再试！')
    })
}

/* 接口测试页面    (用postman测试更佳) */
exports.testPage = async (ctx,next) =>{
    await ctx.render("index")
}