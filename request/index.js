//request接口封装
const uri = require("../uri/index.js")

const request = (url, method, header, data) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            header: header,
            data: data,
            success(res) {
                resolve(res.data);
            },
            fail(res) {
                reject(res);
            }
        })
    })
}

module.exports = {
    recommend: () => {
		return request(uri.skuPath + '/wap/recommend')
    },
    skuConfig: data => {
		return request(uri.skuPath + '/index/config/sku', 'POST', {
            'content-type': 'application/x-www-form-urlencoded'
        }, data)
    }
}