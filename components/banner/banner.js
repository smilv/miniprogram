// 首页banner图
const request = require("../../request/index.js")
const uri = require("../../uri/index.js")

Component({
    data: {
        uri: uri,
		data:null
    },
	lifetimes:{
		//在组件实例进入页面节点树时执行
		attached:function(){
			request.banner(133).then(res=>{
				this.setData({
					data: res.data
				})
			})
		}
	},
	methods:{
		link:function(event){
			console.log(event.currentTarget.dataset.item)
		}
	}
})