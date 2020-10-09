const crypto = require("crypto")

module.exports = {
	MD5_SUFFIX: 'www.biaochenxuying.cn*&^%$#',
	md5: function(pwd) {
		let md5 = crypto.createHash('md5');
		return md5.update(pwd).digest('hex');
	},
	// 响应客户端
	responseClient(ctx, code , message, data){
        console.log("responseClient ------------->")
        console.log(data)
        if(data){
            ctx.body = {
                code,
                message,
                data
            }
        }else{
            console.log(777)
            ctx.body = {
                code,
                message
            }
        }
        
	},
	// 时间 格式化成 2018-12-12 12:12:00
	timestampToTime(timestamp) {
		const date = new Date(timestamp);
		const Y = date.getFullYear() + '-';
		const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
		const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
		const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
		const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
		return Y + M + D + h + m + s;
	},
};