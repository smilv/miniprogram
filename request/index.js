/**
 * bin 2019/9/6
 * request接口封装
 */
const uri = require("../uri/index.js")
const tools = require("../utils/tools.js");
const request = (method, url, config, data) => {
    config = config || {};
    config.header = config.header || {};
    if (config.params) {
        url += '?' + tools.sortParam(config.params)
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            method: method,
            header: config.header,
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
        return request("GET", uri.skuPath + '/wap/recommend')
    },
    //sku配置
    skuConfig: data => {
        return request("POST", uri.skuPath + '/index/config/sku', {
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }, data)
    },
    //首页banner
    banner: skuId => {
        return request("GET", uri.skuPath + '/wap/carousel/' + skuId)
    },
    //公开课列表
    openClass: skuId => {
        return request("GET", uri.skuPath + '/wap/openLives/' + skuId)
    },
    //系统班列表
    systemClass: data => {
        return request("POST", uri.skuPath + '/feeLive/' + data.sku, {
            params: data
        })
    }
}