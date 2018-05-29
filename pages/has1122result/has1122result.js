// pages/has1122result/has1122result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minute: 0,
    second: 0,
    stars: [1, 2, 3, 4, 5],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    key: 0, //评分,
    qualified: false
  },
  onLoad: function (options) {
    var key = this.data.key;
    if (parseInt(options.minute) * 60 + parseInt(options.second) <= 65) { key = 5 } else
      if (parseInt(options.minute) * 60 + parseInt(options.second)<= 75) { key = 4 } else
        if (parseInt(options.minute) * 60 + parseInt(options.second)<= 85) { key = 3 } else
          if (parseInt(options.minute) * 60 + parseInt(options.second) < 115) { key = 2 } else
            if (parseInt(options.minute) * 60 + parseInt(options.second) <145) { key = 1 } else
              if (parseInt(options.minute) * 60 + parseInt(options.second) >=145){ key = 0 }
    this.setData({
      minute: options.minute,
      second:options.second,
      key: key
    })
    if (this.data.key >= 3) {
      this.setData({
        qualified: true
      })
    }
  },
  comeBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  continutenext: function () {
    wx.redirectTo({
      url: '../has13/has13'
    })
  }
})