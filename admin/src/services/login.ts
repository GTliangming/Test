import { request } from 'umi';
import { Webapi } from './webapi';

// export interface LoginParamsType {
//   username: string;
//   password: string;
//   mobile: string;
//   captcha: string;
//   type: string;
// }

// export async function fakeAccountLogin(params: LoginParamsType) {
//   return request<API.LoginStateType>('/api/login/account', {
//     method: 'POST',
//     data: params,
//   });
// }

// export async function getFakeCaptcha(mobile: string) {
//   return request(`/api/login/captcha?mobile=${mobile}`);
// }

// export async function outLogin() {
//   return request('/api/login/outLogin');
// }

/*  定义请求 */

// 登录
export interface LoginParamsType {
  email?: string;
  username?: string;
  password: string;
  checkcode?: string;
}
export async function LoginReq(params: LoginParamsType) {
  console.log(22222,params)
  return Webapi("/login", params)
}