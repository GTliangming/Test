const crypto = require("crypto"),
  jwt = require("jsonwebtoken");
// TODO:使用数据库
// 这里应该是用数据库存储，这里只是演示用
let userList = [];

class UserController {
  // 用户登录
  static async login(ctx) {
    const data = ctx.request.body;
    if (!data.name || !data.password) {
      return ctx.body = {
        code: "000002", 
        message: "参数不合法"
      }
    }
    const result = userList.find(item => item.name === data.name && item.password === crypto.createHash('md5').update(data.password).digest('hex'))
    if (result) {
      const token = jwt.sign(
        {
          name: result.name
        },
        "Gopal_token", // secret
        { expiresIn: 60 * 60 } // 60 * 60 s
      );
      return ctx.body = {
        code: "0",
        message: "登录成功",
        data: {
          token
        }
      };
    } else {
      return ctx.body = {
        code: "000002",
        message: "用户名或密码错误"
      };
    }
  }
}

module.exports = UserController;

/* 
通过 jsonwebtoken 的 sign 方法生成一个 token。该方法第一个参数指的是 Payload（负载），
用于编码后存储在 token 中的数据，也是校验 token 后可以拿到的数据。
第二个是秘钥，服务端特有，注意校验的时候要相同才能解码，而且是保密的，一般而言，最好是定公共的变量，这里只是演示方便，直接写死。
第三个参数是 option，可以定义 token 过期时间
 */