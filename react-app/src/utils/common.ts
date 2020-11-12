



// px转rem
export const px2rem = (pxValue?: number, defaultValue: string = "") => {
    if (typeof pxValue !== "undefined") {
        return `${Number((pxValue / 16).toFixed(4))}rem`;
    } else {
        return defaultValue;
    }
};