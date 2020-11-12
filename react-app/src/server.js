// @ts-nocheck
// import axios from "axios"
// import qs from "qs"

//  通用接口前缀
import axios from "axios"
const DEV_HOST = "http://localhost:3002/api/";

const PUB_HOST = "http://netbugs.cn:3002/api/";

export const HTTPServer = async (type, url, data) => {
    console.log(11111, type, url, data);
    axios.defaults.withCredentials = true;
    const result = await axios.type(DEV_HOST + url, data)
    return result;
}

// axios.defaults.baseURL = DEV_HOST;

// // axios.interceptors.request.use((config) => {
// //     //如果项目中有将token绑定在请求数据的头部，服务器可以有选择的返回数据，只对有效的请求返回数据，这样写
// //     //这里是用户登录的时候，将token写入了sessionStorage中了，之后进行其他的接口操作时，进行身份验证。
// //     config.headers.Authorization = window.sessionStorage.getItem("token");
// //     console.log(config)
// //     return config;
// // })
// // //在response中
// // axios.interceptors.response.use(config => {
// //     console.log(config)
// //     return config;
// // })
// let HTTP = {
//     post: (api, data) => {
//         return new Promise((resolve, reject) => {
//             axios.post(api, data).then(response => {
//                 resolve(response)
//             })
//         })
//     },
//     get: (api, data) => {
//         return new Promise((resolve, reject) => {
//             axios.get(api, data).then(response => {
//                 resolve(response)
//             })
//         })
//     }
// }
// export default HTTP