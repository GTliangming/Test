
/**
 * Article models module.
 * @file 权限和用户数据请求
 * @module routes/user
 * @author  lm
 */


const utils = require("../common/utils")
const User = require("../models/user");
const CONFIG = require('../app.config');
const fetch = require('node-fetch');

// Client ID
// 0bd27ff087cc7103c1b9
// Client Secret
// dfa9e7b807408190b570a7da52092f96bdeecfe6

/* ------------------  前端用户操作 ------------------   */

/* github授权登录 */
exports.authorizeLogin = async (ctx , next) =>{
  let { code} = ctx.request.query;
  console.log("code",code)
  if (!code) {
    utils.responseClient(ctx, 400, 'code缺失');
    return;
  }
  let path = CONFIG.GITHUB.access_token_url;
  const params = {
    client_id: CONFIG.GITHUB.client_id,
    client_secret: CONFIG.GITHUB.client_secret,
    code: code,
  };
  console.log(222,path,params)
  const tokenResponse = await fetch(path,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(params),
  })
  console.log(3333,tokenResponse)

  
  // fetch(path, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json', 
  //   },
  //   body: JSON.stringify(params),
  // })
  // .then((res1)=>{
  //   console.log(1111,res1)
  // })
}


/* 前端登录 */
exports.login = async (ctx, next) => {
  let { email, password ,name} = ctx.request.body;
  if (!email && !name) {
    utils.responseClient(ctx, 400, '用户名或邮箱不可为空');
    return;
  }
  if (!password) {
    utils.responseClient(ctx, 400, '密码不可为空');
    return;
  }
  await User.find(
    { '$or': [
      { email: email ,password: utils.md5(password + utils.MD5_SUFFIX)},
      { name: name ,password: utils.md5(password + utils.MD5_SUFFIX)}]
    })
    .then(userInfo=> {
      if (userInfo) {
        //登录成功后设置session
        ctx.session.userInfo = userInfo;
        utils.responseClient(ctx, 200, '登录成功',userInfo);
      } else {
        utils.responseClient(ctx, 400, '登录失败请重试');
      }
    })
    .catch(err => {
      utils.responseClient(ctx);
    });
}
/* 前端注册 */
exports.register = async (ctx, next) => {
  let { name, password, phone, email, introduce, type } = ctx.request.body;
  if (!email) {
    utils.responseClient(ctx, 400, '用户邮箱不可为空');
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
  let datas = [];
  await User.find({ '$or': [{ email: email }, { name: name }] })
    .then((data) => {
      datas = data;
    })
    .catch(err => {
      console.log(err)
    });
  if (datas.length > 0) {
    utils.responseClient(ctx, 400, "用户已存在！")
  } else {
      //保存到数据库
      let user = new User({
        email,
        name,
        password: utils.md5(password + utils.MD5_SUFFIX),
        phone,
        type,
        introduce,
      });
      await user.save().then(data => {
        //注册成功后设置session
        ctx.session.userInfo = data;
        utils.responseClient(ctx, 200, '注册成功', data);
      });
  }
}
/* 前端退出登录 */
exports.logout = async (ctx, next) => {
  if (ctx.session.userInfo) {
    ctx.session.userInfo = null; // 删除session
    utils.responseClient(ctx, 200, '登出成功！！');
  } else {
    utils.responseClient(ctx, 400, '您还没登录！！！');
  }
};


/* ------------------  管理后台端用户操作 ------------------   */

/* 管理后台端登录 */
exports.loginAdmin = async (ctx, next) => {
  let { name, password } = ctx.request.body;
  if (!name) {
    utils.responseClient(ctx, 400, 2, '用户名不可为空');
    return;
  }
  if (!password) {
    utils.responseClient(ctx, 400, 2, '密码不可为空');
    return;
  } 
  let userType = 0;
  await User.findOne({name:name,password: utils.md5(password + utils.MD5_SUFFIX),})
    .then(data => {
      if(data){
        userType = data.type;
        if(userType === 999 || userType === 99){
          //登录成功后设置session
          ctx.session.userInfo = data;
          utils.responseClient(ctx, 200, '后台管理平台登录成功',data);
        }else{
          utils.responseClient(ctx, 400, '您没有登录权限！');
        }
      }else{
        utils.responseClient(ctx, 400, '该用户不存在');
      }
    })
    .catch(err => {
      console.log(err)
    });
}

/* 管理后台端获取所有用户 */
exports.getUserList = async (ctx, next) => {
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
  await User.countDocuments({}, (err, count) => {
    responseData.count = count ;
    next();
  });
  if (responseData.count < 1) {
    utils.responseClient(ctx, 400, "当前无用户！")
  } else {
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
    try {
      let result = await User.find(conditions, fields, options)
      responseData.list = result;
      utils.responseClient(ctx, 200, '获取成功', responseData);
    } catch (err) {
      next(err)
    }
  }
}

/* 管理后台端删除某个用户 */
exports.deleteOneUser = async (ctx, next) => {
  let { id } = ctx.request.body;
  await User.deleteMany({ _id: id }).then(result => {
    if (result.n === 1) {
      utils.responseClient(ctx, 200, '用户删除成功!');
    } else {
      utils.responseClient(ctx, 400, '用户不存在');
    }
  }).catch(err => {
    utils.responseClient(ctx);
    return;
  });
}
/* 获取当前用户信息 */
exports.getUserInfo = async (ctx,next) =>{
  let info = ctx.session.userInfo;
  console.log(11111,info)
  if(info){
    utils.responseClient(ctx, 200, '获取成功',info);
  }else{
    utils.responseClient(ctx, 400, '当前还未登录');
  }
}