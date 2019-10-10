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
		uri:uri,
		data: null
    },

    /**
     * 组件的生命周期
     */
    lifetimes: {
        attached: function() {
            request.systemClass({
                sku: 133,
                ftype: 0,
                os: 0,
                appType: 998
            }).then(res=>{
				this.setData({
					data:res.data
				})
			})
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})