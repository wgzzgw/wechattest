// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rightAmount: 0,
    stars: [1, 2, 3, 4, 5],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    key: 0, //评分,
    qualified:false
  },
  onLoad: function (options) {
    var key = this.data.key;
    if (options.rightAmount>=25) {key = 5 } else
      if (options.rightAmount < 25 && options.rightAmount>=20) {key = 4 } else
        if (options.rightAmount<20&& options.rightAmount>=15) {key = 3 } else
          if (options.rightAmount<15&& options.rightAmount>10) {key = 2 } else
            if (options.rightAmount<10&& options.rightAmount>0) {key = 1 } else
              if (options.rightAmount == 0) {key = 0 }
    this.setData({
      rightAmount: options.rightAmount,
      key: key
    })
    if(this.data.key>=3){
      this.setData({
        qualified:true
      })
    }
  },
  comeBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  continutenext:function(){
    wx.redirectTo({
      url: '../has1122/has1122'
    })
  }
})