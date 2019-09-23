/**
 * bin 2019/9/23
 * 公开课
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
        data: null
    },

	/**
	 * 组件的生命周期
	 */
    lifetimes: {
        attached: function() {
            request.openClass(133).then(res => {
                this.setData({
                    data: res.data
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