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
        attached: function() {
            request.recommend().then(res => {
                this.setData({
                    data: res.data
                })
            })
        },
        moved: function() {},
        detached: function() {},
    },
    methods: {
        //关闭app广告
        close: function() {
            this.setData({
                data: null
            })
        }
    }
})