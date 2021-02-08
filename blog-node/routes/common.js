/**
 * Article models module.
 * @file 通用请求
 * @module routes/common
 * @author  lm
 */
const CONFIG = require('../app.config.js')
const utils = require("../common/utils");
const nodemailer = require("../config/nodemailer");
const User = require("../models/user");
const fetch = require('node-fetch');
const fs = require("fs");

/* 邮箱发送验证码！ */
const sendEmail = async (ctx, next) => {
    let email = ctx.request.query.email;
    if (!email) {
        utils.responseClient(ctx, 400, '邮箱不可为空')
        return;
    }
    // let code = utils.createSixNum();
    let mail = {
        from: "lmzs124083@163.com",
        subject: "测试",
        to: email,
        html: utils.emallText
    }
    // await User.findOne({ email }).then(result => {
    //     console.log(22222, result);
    //     utils.responseClient(ctx, 200, "success", result)
    // })
    await nodemailer.sendMail(mail).then(async result => {

        console.log(3333, ctx.session)
        utils.responseClient(ctx, 200, '验证码发送成功,请到邮箱查看！')
    }).catch(err => {
        utils.responseClient(ctx, 400, '验证码发送失败,请重试！')
    })
}

/* 接口测试页面    (用postman测试更佳) */
const testPage = async (ctx, next) => {
    await ctx.render("index")
}
const testGithub = async (ctx, next) => {
    console.log(3333)
    await ctx.render("github")
}

const test = async (ctx, next) => {
    ctx.session.test = false
    const session = ctx.session.test
    console.log(3333, session)
    utils.responseClient(ctx, 200, "success")
}
const gettest = async (ctx, next) => {
    const session = ctx.session
    console.log(444, ctx.session)
    utils.responseClient(ctx, 200, "success", session)
}


/* 舔狗日记 */
const diary = async (ctx, next) => {
    await fetch('http://api.tianapi.com/txapi/tiangou/index?key=c854802ac330abef23a003bc699e8f0f')
        .then(res => res.json())
        .then((json) => {
            console.log(1111, json)
            if (json.code === 200) {
                utils.responseClient(ctx, 200, json.newslist)
            }
        }).catch(err => {
            console.log(err);
            utils.responseClient(ctx, 400, "今日份的舔狗日记已经结束喽！")
        })
}

/* 神回复 */

const reply = async (ctx, next) => {
    await fetch('http://api.tianapi.com/txapi/godreply/index?key=c854802ac330abef23a003bc699e8f0f')
        .then(res => res.json())
        .then((json) => {
            console.log(1111, json)
            if (json.code === 200) {
                utils.responseClient(ctx, 200, json.newslist)
            }
        }).catch(err => {
            console.log(err);
            utils.responseClient(ctx, 400, "今日份的神回复已经结束喽！")
        })
}
module.exports = {
    gettest, test, testGithub, testPage, sendEmail, diary, reply
}


// 手机号查询归属地
// $.ajax({
//     type: "get",
//     url: 'https://api.jisuapi.com/shouji/query?appkey=06d97****fd0bb5&shouji='+this.tel,  //这个appkey自己申请就好
//     dataType: "jsonp",
//     jsonp: "callback",
//     success: function(data) {
//         console.log(data);
//         this.province = data.result.province;
//         this.city = data.result.city;
//         let company = data.result.company;
//         let bigPlace = this.province + this.city;
//         $(".place-item").html(bigPlace)
//         $(".topUp-company").html(company);
//     }
// });