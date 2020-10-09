const utils = require("../common/utils")
const User = require("../models/user");



/* ------------------  前端用户操作 ------------------   */


/* 前端登录 */
exports.login = async (ctx,next)=>{
    let { email, password } = ctx.request.body;
    if (!email) {
        utils.responseClient(ctx, 400,'用户邮箱不可为空');
        return;
      }
    if (!password) {
        utils.responseClient(ctx, 400,'密码不可为空');
        return;
    }
    await User.findOne({
        email,
        password: utils.md5(password + utils.MD5_SUFFIX),
      })
        .then(userInfo => {
          if (userInfo) {
            //登录成功后设置session
            ctx.session.userInfo = userInfo;
            utils.responseClient(ctx, 200,'登录成功', userInfo);
          } else {
            utils.responseClient(ctx, 400,'密码不可为空');
          }
        })
        .catch(err => {
            utils.responseClient(ctx);
        });
}
/* 前端注册 */
exports.register = async (ctx,next )=>{
  let { name, password, phone, email, introduce, type } = ctx.request.body;
  if (!email) {
    utils.responseClient(ctx, 400,'用户邮箱不可为空');
    return;
  }
  const reg = new RegExp(
    '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$',
  ); //正则表达式
  if (!reg.test(email)) {
    utils.responseClient(ctx, 400, '请输入格式正确的邮箱！');
    return;
  }
  if (!name) {
    utils.responseClient(ctx, 400, '用户名不可为空');
    return;
  }
  if (!password) {
    utils.responseClient(ctx, 400, '密码不可为空');
    return;
  }
  //验证用户是否已经在数据库中
  await User.find({'$or':[{email:email},{name:name}]})
    .then(data => {
      if (data) {
         utils.responseClient(ctx, 200,'用户已存在');
        return;
      }
      //保存到数据库
      let user = new User({
        email,
        name,
        password: utils.md5(password + utils.MD5_SUFFIX),
        phone,
        type,
        introduce,
      });
       user.save().then(data => {
        utils.responseClient(ctx, 200,'注册成功', data);
      });
    })
    .catch(err => {
      utils.responseClient(ctx);
      return;
    });
}
/* 前端退出登录 */
exports.logout = async (ctx,next ) => {
    if (ctx.session.userInfo) {
      req.session.userInfo = null; // 删除session
      utils.responseClient(ctx, 200, '登出成功！！');
    } else {
      utils.responseClient(ctx, 200,'您还没登录！！！');
    }
  };


  /* ------------------  管理后台端用户操作 ------------------   */
  
/* 管理后台端登录 */
exports.loginAdmin = async (ctx,next)=>{
  
}
  
/* 管理后台端获取所有用户 */
exports.getUserList = async (ctx,next)=>{
  let keyword = ctx.request.query.keyword || '';
  let pageNum = parseInt(ctx.request.query.pageNum) || 1;
  let pageSize = parseInt(ctx.request.query.pageSize) || 10;
  let conditions = {};
  if (keyword) {
    const reg = new RegExp(keyword, 'i');
    conditions = {
      $or: [{ name: { $regex: reg } }, { email: { $regex: reg } }],
    };
  }
  let skip = pageNum - 1 < 0 ? 0 : (pageNum - 1) * pageSize;
  let responseData = {
    count: 0,
    list: [],
  };
  User.countDocuments({},async (err, count) => {
    if (err) {
      console.error('Error:' + err);
    } else {
      console.log(2222,count)
      responseData.count = count;
      // 待返回的字段
      let fields = {
        _id: 1,
        email: 1,
        name: 1,
        avatar: 1,
        phone: 1,
        introduce: 1,
        type: 1,
        create_time: 1,
      };
      let options = {
        skip: skip,
        limit: pageSize,
        sort: { create_time: -1 },
      };
      await User.find(conditions, fields, options, (error, result) => {
        console.log(3333,error,result)
        if (err) {
          console.error('Error:' + error);
          // throw error;
        } else {
          responseData.list = result;
          utils.responseClient(ctx, 200,'获取成功',responseData);
        }
      });
    }
  });
} 



  /* 管理后台端删除某个用户 */
exports.deleteOneUser = async (ctx,next)=>{
  
}