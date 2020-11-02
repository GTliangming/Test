

//  通用接口前缀

export const DEV_HOST = "https://localhost:3002/api/";

export const PUB_HOST = "http://netbugs.cn:3002/api/";


// px转rem
export const px2rem = (pxValue?: number, defaultValue: string = "") => {
    if (typeof pxValue !== "undefined") {
        return `${Number((pxValue / 16).toFixed(4))}rem`;
    } else {
        return defaultValue;
    }
};