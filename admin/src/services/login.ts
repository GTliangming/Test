// import { request } from 'umi';
// import { BASE_URL, TIMEOUT } from './utils';

// export interface LoginParamsType {
//   username?: string;
//   password?: string;
//   mobile?: string;
//   captcha?: string;
//   type?: string;
// }

// export async function fakeAccountLogin(params: LoginParamsType) {
//   return request<API.LoginStateType>(BASE_URL+'/loginAdmin', {
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


import HTTP from "./webapi"
/*  定义请求 */

// 登录
export interface LoginParamsType {
  email?: string;
  username?: string;
  password: string;
  checkcode?: string;
}
export async function AccountLogin(params: LoginParamsType) {
  console.log(22222,params)
  return HTTP.post("/loginAdmin", params)
}
