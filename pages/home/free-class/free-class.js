/**
 * bin 2019/10/14
 * 免费课
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
		uri: uri,
		data: null
	},

	lifetimes:{
		attached:function(){
			request.coursesClass(133).then(res => {
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
