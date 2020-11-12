/**
 * Article models module.
 * @file 通用请求
 * @module routes/common
 * @author  lm
 */

const utils = require("../common/utils");



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
    const session = ctx.session
    console.log(3333, session)
    utils.responseClient(ctx, 200, "success")
}
const gettest = async (ctx, next) => {
    const session = ctx.session
    console.log(444,ctx.session.test)
    utils.responseClient(ctx, 200, "success", session)
}
module.exports = {
    gettest,test,testGithub,testPage
}