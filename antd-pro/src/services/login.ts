import request from '@/utils/request';
import HTTP from "./webapi"
import { BASE_URL, TIMEOUT } from './utils';
export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(BASE_URL + '/loginAdmin', {
    method: 'POST',
    data: params,
  });
  // return HTTP.post("/loginAdmin", params)
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}


export interface AccountLoginParamsType {
  email?: string;
  username?: string;
  password?: string;
  checkcode?: string;
}
export async function AccountLogin(params: AccountLoginParamsType) {
  return HTTP.post("/loginAdmin", params)
}
export async function getCaptcha() {

}
export interface ForgetPasswordParamsType {
  username: string;
  email: string;
  newPassword: string;
}
export async function AccountForgetPassword(params: ForgetPasswordParamsType) {
  return HTTP.post("/updatePassword", params)
}
