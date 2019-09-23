//bin 2019/9/6
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
    //首页广告
    recommend: () => {
        return request(uri.skuPath + '/wap/recommend')
    },
    //sku配置
    skuConfig: data => {
        return request(uri.skuPath + '/index/config/sku', 'POST', {
            'content-type': 'application/x-www-form-urlencoded'
        }, data)
    },
    //首页banner
    banner: skuId => {
        return request(uri.skuPath + '/wap/carousel/' + skuId)
    },
    //公开课列表
    openClass: skuId => {
        return request(uri.skuPath + '/wap/openLives/' + skuId)
    }
}