// 首页app广告
const request = require("../../api/request.js")
const api = require("../../api/index.js")

Component({
    data: {
        api: api,
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
})