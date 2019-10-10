/**
 * bin 2019/10/10
 */
module.exports = {
    formatTime: date => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
    },
    formatNumber: n => {
        n = n.toString()
        return n[1] ? n : '0' + n
    },
    sortParam: data => {
        let arr = new Array();
        let arrIndex = 0;
        for (let key in data) {
            arr[arrIndex] = key;
            arrIndex++;
        }
        arr = arr.sort();
        let params = "";
        for (let i = 0; i < arrIndex; i++) {
            if (i == 0) {
                params += arr[i] + "=" + data[arr[i]];
            } else {
                params += "&" + arr[i] + "=" + data[arr[i]];
            }
        }
        return params;
    }
}