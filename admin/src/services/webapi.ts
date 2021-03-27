import { request } from 'umi';



export const Webapi = async (prexURl: string, reqDate?: any) => {
    const localHostName = "https://localhost:3002/api";
    const onlineHostName = ""
    return request(localHostName + prexURl, reqDate && {
        method: 'POST',
        data: reqDate,
    });
}
