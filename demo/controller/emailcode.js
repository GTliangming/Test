
/**
 * Article models module.
 * @file 邮箱验证码实现
 * @module routes/
 * @author  lm
 */

const utils = require("../common/utils");
const nodemailer = require('nodemailer');

//创建一个smtp服务器
const config = {
    host: 'smtp.163.com',
    port: 465,
    auth: {
        user: 'lmzs124083@163.com', //注册的163邮箱账号
        pass: 'XPHVMFGAGWOXFMTH' //邮箱的授权码，不是注册时的密码,等你开启的stmp服务自然就会知道了
    }
};


// 创建一个SMTP客户端对象
const transporter = nodemailer.createTransport(config);

const sendEmail = async (ctx, next) => {
    let email = ctx.request.query.email;
    if (!email) {
        utils.responseClient(ctx, 400, '邮箱不可为空')
        return;
    }
    let code = utils.createSixNum();
    let mail = {
        from: "lmzs124083@163.com",
        subject: "即将拥有八块腹肌のlm向你发送了一个爱心验证码",
        to: email,
        html: `
        <H1>验证码</H1><a href="javascript:;">${code}</a>  请在5分钟内完成验证！`
    }
    let resultType = true;
    //发送邮件
    await transporter.sendMail(mail, (err, info) => {
        if (err) {
            resultType = false
            return console.log(err);
        }
    })
    if (resultType) {
        ctx.session.checkcode = code;
        console.log(999,ctx.session)
        utils.responseClient(ctx, 200, "验证码发送成功，请到邮箱查看！");
    } else {
        utils.responseClient(ctx, 200, "验证码发送失败");
    }
}
module.exports = {
    sendEmail
}