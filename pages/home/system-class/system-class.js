/**
 * bin 2019/10/10
 * 系统班列表
 */
const request = require("../../../request/index.js")
const uri = require("../../../uri/index.js")

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的生命周期
     */
    lifetimes: {
        attached: function() {
            request.systemClass({
                sku: 133,
                ftype: 1,
                os: 0,
                appType: 998,
                page: 1,
                size: 5,
                lmVerify: 0
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})