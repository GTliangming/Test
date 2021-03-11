const crypto = require("crypto");

exports.MD5_SUFFIX = 'www.biaochenxuying.cn*&^%$#'

exports.md5 = (pwd) => {
  let md5 = crypto.createHash('md5');
  return md5.update(pwd).digest('hex');
}
// 响应客户端
exports.responseClient = async (ctx, code, message, data) => {
  if (data) {
    return ctx.body = {
      code,
      message,
      data
    }
  } else {
    return ctx.body = {
      code,
      message
    }
  }
}
// 时间 格式化成 2018-12-12 12:12:00
exports.timestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
  const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}
// 生成六位随机验证码
exports.createSixNum = () => {
  let codeNum = "";
  for (var i = 0; i < 6; i++) {
    codeNum += Math.floor(Math.random() * 10);
  }
  return codeNum;
}
exports.CheckUserInfo = (name, email, password) => {
  // let ErrText = ""
  // switch () {

  // }
}


exports.emallText = `<table cellspacing="0" cellpadding="0" border="0"
style="width: 100%;border: none;margin: auto;padding: 0;background-color: #fff;">
<tbody>
  <tr>
    <td>
      <!--顶部logo-->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center">
              <table cellspacing="0" cellpadding="0" border="0"
                style="border-collapse: separate; border-spacing: 0px;" width="100%">
                <tbody>
                  <tr
                    style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;">
                    <td align="center" style="text-align: center;">
                      <a href="https://ezbuy.sg/" target="_blank"
                        style="width: 129px;height: 40px;margin: 0 auto;display: inline-block; text-decoration: none;padding-top: 15px;"><img
                          src="https://i.ezbuy.sg/FqD4UxFUhf-ppg1u1rnfBta-dQja" alt="" width="129px" height="40px"
                          style="border: 0;display: block;"></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 介绍文字 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center">
              <table cellspacing="0" cellpadding="0" border="0"
                style="border-collapse: separate; border-spacing: 0px;" width="100%">
                <tbody>
                  <tr>
                    <td align="center"><span
                        style="font-size: 12px;font-weight: 400;color: #999999;line-height: 14px;mso-line-height-rule:exactly;padding-top: 3px;">Happy
                        Shopping，Better Living</span></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 占位模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr
            style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;background-color:transparent;">
            <td style="width: 100%; height: 15px;"></td>
          </tr>
        </tbody>
      </table>
      <!-- 导航模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center">
              <table
                style="max-width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td style="width: 25%;">
                      <table align="center" cellpadding="0" cellspacing="0" style="border: none;width: 100%;">
                        <tbody>
                          <tr>
                            <td style="width: 100%;text-align: center;"><a href=""
                                style="width: 100%;text-decoration: none;display: block;font-size: 14px;color: #333333;text-align: center;"><span
                                  style="display: inline;line-height: 16px;font-weight: 500;">Prime1</span></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="width: 25%;">
                      <table align="center" cellpadding="0" cellspacing="0" style="border: none;width: 100%;">
                        <tbody>
                          <tr>
                            <td style="width: 100%;text-align: center;"><a href=""
                                style="width: 100%;text-decoration: none;display: block;font-size: 14px;color: #333333;text-align: center;"><span
                                  style="display: inline;line-height: 16px;font-weight: 500;">Prime2</span></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="width: 25%;">
                      <table align="center" cellpadding="0" cellspacing="0" style="border: none;width: 100%;">
                        <tbody>
                          <tr>
                            <td style="width: 100%;text-align: center;"><a href=""
                                style="width: 100%;text-decoration: none;display: block;font-size: 14px;color: #333333; text-align: center;"><span
                                  style="display: inline;line-height: 16px;font-weight: 500;">Prime3</span></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="width: 25%;">
                      <table align="center" cellpadding="0" cellspacing="0" style="border: none;width: 100%;">
                        <tbody>
                          <tr>
                            <td style="width: 100%;text-align: center;"><a href=""
                                style="width: 100%;text-decoration: none;display: block;font-size: 14px;color: #333333;text-align: center;"><span
                                  style="display: inline;line-height: 16px;font-weight: 500;">Prime4</span></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 占位模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr
            style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;background-color:transparent;">
            <td style="width: 100%; height: 10px;"></td>
          </tr>
        </tbody>
      </table>
      <!-- 顶部变化banner -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td>
              <table
                style="max-width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible; background-color: #f2f2f2;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td><a href=""><img src="https://i.ezbuy.sg/FjPqO0umJ7JQ2OFwxGR4asM9hTn3" alt="" width="100%"
                          style="display: block;border: 0;"></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 顶部固定banner -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td>
              <table
                style="max-width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible; background-color: #f2f2f2;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td colspan="7" style="background-color: #f2f2f2;">
                      <img src="https://i.ezbuy.sg/FgCPZJqrKAX7J793L-dgevFXXYE1" alt="" width="100%"
                        style="display: block;border: 0;">
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 占位模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr
            style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;background-color: #f2f2f2;">
            <td style="width: 100%; height: 12px;"></td>
          </tr>
        </tbody>
      </table>
      <!-- 商品模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0" 
        style="width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td>
              <table align="center" style="width: 750px;" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                  <!-- 商品盒子 -->
                  <tr style="width: 100%;background-color: #f2f2f2;" align="left" valign="top">
                    <!-- 单个商品 -->
                    <td
                      style="width:31.2%;margin-left: 1.6%;margin-bottom: 1.6%;background-color: #fff;display: inline-block;">
                      <table align="center" style="width: 100%;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td>
                              <div style="border-radius: 4px;background-color: #FFF;width:100%;float: left;">
                                <a href="{{.Href}}" style="width: 100%;text-decoration: none;display: block;"
                                  target="_blank">
                                  <div style="width: 100%;"><img
                                      src="http://7xiata.com1.z0.glb.clouddn.com/FtFtlRB9LhqJIF6X4oQCu-WsFATr"
                                      alt=""
                                      style="border-radius: 4px 4px 0 0 ;display: block;width: 100%;height: 234px;">
                                  </div>
                                  <div
                                    style="width: 100%;padding: 10px 0px;box-sizing: border-box;font-size: 12px;text-align: left;">
                                    <div
                                      style="height: 28px;width: 100%;padding-left: 9px;padding-right: 9px;box-sizing: border-box;position: relative;">
                                      <span
                                        style="overflow: hidden;text-overflow: ellipsis;display:block;-webkit-line-clamp: 2;-webkit-box-orient: vertical;color: #333;margin: 0;font-weight: 400;line-height: 14px;width: 100%;height: 100%;word-wrap:break-word;word-break: break-all;">
                                        shirt women's long sleeveautumn autumn and winter 2019 new
                                        cotton plus velvet 2020 spring
                                        and autumn bottom shirt matching top women's shirt inc</span>
                                    </div>
                                    <div style="width: 100%;height: 38px;">
                                      <div
                                        style="font-weight: 500;font-size: 16px;font-family: Roboto-Medium, Roboto;color: #FF5A00;line-height: 19px;margin: 0;margin-top: 9px;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">
                                        $48.90</div><span
                                        style="color: #999;line-height: 19px;text-decoration-line: line-through;display: block;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">$48.90</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td
                      style="width:31.2%;margin-left: 1.6%;margin-bottom: 1.6%;background-color: #fff;display: inline-block;">
                      <table align="center" style="width: 100%;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td>
                              <div style="border-radius: 4px;background-color: #FFF;width:100%;float: left;">
                                <a href="{{.Href}}" style="width: 100%;text-decoration: none;display: block;"
                                  target="_blank">
                                  <div style="width: 100%;"><img
                                      src="http://7xiata.com1.z0.glb.clouddn.com/FtFtlRB9LhqJIF6X4oQCu-WsFATr"
                                      alt=""
                                      style="border-radius: 4px 4px 0 0 ;display: block;width: 100%;height: 234px;">
                                  </div>
                                  <div
                                    style="width: 100%;padding: 10px 0px;box-sizing: border-box;font-size: 12px;text-align: left;">
                                    <div
                                      style="height: 28px;width: 100%;padding-left: 9px;padding-right: 9px;box-sizing: border-box;position: relative;">
                                      <span
                                        style="overflow: hidden;text-overflow: ellipsis;display:block;-webkit-line-clamp: 2;-webkit-box-orient: vertical;color: #333;margin: 0;font-weight: 400;line-height: 14px;width: 100%;height: 100%;word-wrap:break-word;word-break: break-all;">
                                        shirt women's long sleeveautumn autumn and winter 2019 new
                                        cotton plus velvet 2020 spring
                                        and autumn bottom shirt matching top women's shirt inc</span>
                                    </div>
                                    <div style="width: 100%;height: 38px;">
                                      <div
                                        style="font-weight: 500;font-size: 16px;font-family: Roboto-Medium, Roboto;color: #FF5A00;line-height: 19px;margin: 0;margin-top: 9px;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">
                                        $48.90</div><span
                                        style="color: #999;line-height: 19px;text-decoration-line: line-through;display: block;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">$48.90</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td
                      style="width:31.2%;margin-left: 1.6%;margin-bottom: 1.6%;background-color: #fff;display: inline-block;">
                      <table align="center" style="width: 100%;" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                          <tr>
                            <td>
                              <div style="border-radius: 4px;background-color: #FFF;width:100%;float: left;">
                                <a href="{{.Href}}" style="width: 100%;text-decoration: none;display: block;"
                                  target="_blank">
                                  <div style="width: 100%;"><img
                                      src="http://7xiata.com1.z0.glb.clouddn.com/FtFtlRB9LhqJIF6X4oQCu-WsFATr"
                                      alt=""
                                      style="border-radius: 4px 4px 0 0 ;display: block;width: 100%;height: 234px;">
                                  </div>
                                  <div
                                    style="width: 100%;padding: 10px 0px;box-sizing: border-box;font-size: 12px;text-align: left;">
                                    <div
                                      style="height: 28px;width: 100%;padding-left: 9px;padding-right: 9px;box-sizing: border-box;position: relative;">
                                      <span
                                        style="overflow: hidden;text-overflow: ellipsis;display:block;-webkit-line-clamp: 2;-webkit-box-orient: vertical;color: #333;margin: 0;font-weight: 400;line-height: 14px;width: 100%;height: 100%;word-wrap:break-word;word-break: break-all;">
                                        shirt women's long sleeveautumn autumn and winter 2019 new
                                        cotton plus velvet 2020 spring
                                        and autumn bottom shirt matching top women's shirt inc</span>
                                    </div>
                                    <div style="width: 100%;height: 38px;">
                                      <div
                                        style="font-weight: 500;font-size: 16px;font-family: Roboto-Medium, Roboto;color: #FF5A00;line-height: 19px;margin: 0;margin-top: 9px;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">
                                        $48.90</div><span
                                        style="color: #999;line-height: 19px;text-decoration-line: line-through;display: block;padding-left: 9px;box-sizing: border-box;padding-right: 9px;text-align: left;">$48.90</span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 固定banner模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center">
              <table
                style="max-width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible; background-color: #f2f2f2;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                  <td>
                    <img src="https://i.ezbuy.sg/FtSkoHzs0WlNMWfbh1i2m1N0XZOB" alt="" width="100%"
                      style="border: 0;display: block;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 动态变化banner模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center">
              <table
                style="max-width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible; background-color: #f2f2f2;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                  <tr>
                    <td><a href=""><img src="https://i.ezbuy.sg/Fr1iMdBNxmDkYV-DNjtJFpKa_pe4" alt="" width="100%"
                          style="display: block;border: 0;"></a></td>
                  </tr>
                  <tr>
                    <td><a href=""><img src="https://i.ezbuy.sg/Fv-g68-IAMLur6S3wMSbQtR0x-Qm" alt="" width="100%"
                          style="display: block;border: 0;"></a></td>
                  </tr>
                  <tr>
                    <td><a href=""><img src="https://i.ezbuy.sg/Ft0n-RkOB7xfTAAoKZUwE_v5sUW4" alt="" width="100%"
                          style="display: block;border: 0;"></a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 占位模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr
            style="border: 0px none transparent; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;background-color: #f2f2f2;">
            <td style="width: 100%; height: 15px;"></td>
          </tr>
        </tbody>
      </table>
      <!-- 底部导航模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td align="center" style="width: 100%;background-color: #f2f2f2;text-align: center;">
              <table
                style="width:375px; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;margin: 0 auto;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tbody>
                  <tr valign="bottom" align="center"
                    style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                    <td align="center" style="text-align: cente;">
                      <div style="text-align: center;display: inline-block;width: 100%;">
                        <a href="https://m.ezbuy.sg/appdownload" target="_blank"
                          style="text-align: center;text-decoration: none;display: inline-block;width: 85px;">
                          <img src="https://i.ezbuy.sg/FpUHHsX06afa-itMFMhT8Onv1VaD" alt="" width="28px"
                            height="28px"
                            style="border: 0;display: block;margin: 0;margin-left: auto;margin-right: auto;"
                            vspace="0" hspace="30">
                          <p
                            style="font-size: 12px;font-weight: 400;color: #333;line-height: 14px;mso-line-height-rule:exactly; font-family: Roboto-Regular, Roboto;margin-top: 5px;margin-bottom: 12px;">
                            Download app</p>
                        </a>
                        <p style="margin-left: 2.6%;margin-right: 3%;margin-top: 5px;display: inline-block;">
                          <span style="height:28px;width: 1px;background: #DEDEDE;display: inline-block;"></span>
                        </p>
                        <a href="https://ezbuy.sg/Account/Login" target="_blank"
                          style="text-align: center;text-decoration: none;display: inline-block;width: 85px;">
                          <img src="https://i.ezbuy.sg/FjVng5-9AmTardP5YReoDVSpC_1n" alt="" width="28px"
                            height="28px"
                            style="border: 0;display: block;margin: 0;margin-left: auto;margin-right: auto;"
                            vspace="0" hspace="30">
                          <p
                            style="font-size: 12px;font-weight: 400;color: #333;line-height: 14px;mso-line-height-rule:exactly; font-family: Roboto-Regular, Roboto;margin-top: 5px;margin-bottom: 12px;">
                            My Account</p>
                        </a>
                        <p style="margin-left: 2.6%;margin-right: 1%;margin-top: 5px;display: inline-block;">
                          <span
                            style="height:28px;width: 1px;background: #DEDEDE;display: inline-block;margin-top: 2px;"></span>
                        </p>
                        <a href="https://ezbuy.sg/help/orderrelated" target="_blank"
                          style="text-align: center;text-decoration: none;display: inline-block;width: 85px;">
                          <img src="https://i.ezbuy.sg/Fgi_cH0BorqFsGruPQ3glSyu0G88" alt="" width="28px"
                            height="28px"
                            style="border: 0;display: block;margin: 0;margin-left: auto;margin-right: auto;"
                            vspace="0" hspace="30">
                          <p
                            style="font-size: 12px;font-weight: 400;color: #333;line-height: 14px;mso-line-height-rule:exactly; font-family: Roboto-Regular, Roboto;margin-top: 5px;margin-bottom: 12px;">
                            FAQ</p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 底部信息模块 -->
      <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="width: 100%;width:750px; margin:auto;min-width: 750px;">
        <tbody>
          <tr>
            <td style="width:100%;" align="center">
              <table
                style="width: 100%; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;"
                cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr style="width:100%">
                  <td valign="top" align="center"
                    style="padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;width: 100%;">
                    <table
                      style="width: 375px;border: none;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <tbody>
                        <tr>
                          <td valign="top"
                            style="padding-top: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <table
                              style="border: none;max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                              width="100%">
                              <tbody>
                                <tr>
                                  <td align="center"
                                    style="padding-top: 0;padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <div
                                      style="text-align: center; font-size: 12px;font-weight: 400;color: #666;line-height: 14px; mso-line-height-rule:exactly;font-family: Roboto-Regular, Roboto;display: inline-block;">
                                      Follow us</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center"
                                    style="padding-top: 0;padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <div style="text-align: center;width: 100%;display: inline-block;">
                                      <a href="https://www.facebook.com/ezbuy.singapore/"
                                        style="display: inline-block;text-decoration: none;"><img
                                          src="https://i.ezbuy.sg/Fi-wJZXfDesgcgI_8r268gPJ7nCj" alt="" width="36px"
                                          height="36px" style="border: 0;display: block;"></a>
                                      <a href="http://instagram.com/ezbuy.sg"
                                        style="display: inline-block;text-decoration: none;margin: 0 2.333% 0 4.666%;"><img
                                          src="https://i.ezbuy.sg/Fo0fVpe-ixM9iCp-KFAIhfZqjQ4g" alt="" width="36px"
                                          height="36px" style="border: 0;display: block;"></a>
                                      <a href="https://api.whatsapp.com/send?phone=6596613166&text=Hi%20ezbuy,%20keep%20me%20updated!%20%F0%9F%98%8A"
                                        style="display: inline-block;text-decoration: none;margin: 0 2.333%;"><img
                                          src="https://i.ezbuy.sg/Fm6zGG_fDB-7DmJSq7GuYohh8J45" alt="" width="36px"
                                          height="36px" style="border: 0;display: block;"></a>
                                      <a href="https://t.me/ezbuyTelegram"
                                        style="display: inline-block;text-decoration: none;margin: 0 4.666% 0 2.333%;"><img
                                          src="https://i.ezbuy.sg/FmGr1lm1G4pNoWyIZ_cvYPkaB768" alt="" width="36px"
                                          height="36px" style="border: 0;display: block;"></a>
                                      <a href="https://www.tiktok.com/@ezbuy.sg "
                                        style="display: inline-block;text-decoration: none;"><img
                                          src="https://i.ezbuy.sg/FouuR0Fbdspisq9z-LqxTHZqY4AM" alt="" width="36px"
                                          height="36px" style="border: 0;display: block;"></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center"
                                    style="padding-top: 0;padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <div
                                      style="text-align: center; font-size: 12px;font-weight: 400;color: #666;line-height: 14px;mso-line-height-rule:exactly;width: 100%;">
                                      <a href="https://ezbuy.sg/Help/QuickGuide#Shipping"
                                        style="color: #666;text-decoration: none;display: inline-block;">Shipping &
                                        Charges</a>
                                      <span style="margin: 0 2%;">|</span>
                                      <a href=" https://ezbuy.sg/help/orderrelated/list?DOMid=faq_7212794e-54a0-4892-8e1f-865f9e5bf150"
                                        style="color: #666;text-decoration: none;display: inline-block;">Contact
                                        Us</a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td valign="top" align="center"
                                    style="padding-top: 0;padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

                                    <div
                                      style="text-align: center; font-size: 12px;font-weight: 400;color: #666;line-height: 14px;mso-line-height-rule:exactly; font-family: Roboto-Regular, Roboto;">
                                      To ensure our emails reach your inbox, please add (<a
                                        style="color: #666;text-decoration: none;"
                                        href="mailto:newsletter@ezbuy.com">newsletter@ezbuy.com</a>) to your address
                                      book.
                                      <br />
                                      If you do not wish to receive any emails, click

                                      <a href="http://m4.sg.65emall.net/email/unsubscribe"
                                        style="text-decoration: none;"><b>unsubscribe</b></a>
                                      <p
                                        style="margin-top: 12px;text-align: center;font-size: 12px;font-weight: 400;color: #666;line-height: 14px;mso-line-height-rule:exactly;font-family: Roboto-Regular, Roboto;">
                                        © 2021 EZbuy Holdings Limited 51 Tai Seng Avenue, #05-02 Lobby C Singapore
                                        533941
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>`