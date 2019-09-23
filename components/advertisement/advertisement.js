//bin 2019/9/10
// 首页app广告
const request = require("../../request/index.js")
const uri = require("../../uri/index.js")

Component({
    data: {
		uri: uri,
        data: null
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
		// 在组件实例进入页面节点树时执行
        attached: function() {
            request.recommend().then(res => {
                this.setData({
                    data: res.data
                })
            })
        },
		// 在组件实例被移动到节点树另一个位置时执行
        moved: function() {},
		// 在组件实例被从页面节点树移除时执行
        detached: function() {},
    },
    methods: {
        // 关闭app广告
        close: function() {
            this.setData({
                data: null
            })
        }
    }
})