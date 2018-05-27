// pages/has12result/has12result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rightAmount: 0,
    wrongAmount: 0,
    stars: [1, 2, 3, 4, 5],
    normalSrc: '../../images/normal.png',
    selectedSrc: '../../images/selected.png',
    key: 0, //评分,
    qualified: false
  },
  comeBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  continute: function () {
    wx.redirectTo({
      //不合格，测10内减法
      url: '../has121/has121'
    })
  },
  continutenext: function () {
    //合格，继续测同层知识点
    wx.redirectTo({
      url: '../has13/has13'
    })
  },
  onLoad: function (options) {
    var key = this.data.key;
    if (options.wrongAmount == 0) {
      //没有错题的情况
      if (options.rightAmount >= 55) { key = 5 } else
        if (options.rightAmount < 55 && options.rightAmount >= 47) { key = 4 } else
          if (options.rightAmount < 47 && options.rightAmount >= 40) { key = 3 } else
            if (options.rightAmount < 40 && options.rightAmount >= 20) { key = 2 } else
              if (options.rightAmount < 20 && options.rightAmount >= 5) { key = 1 } else
                if (options.rightAmount < 5) { key = 0 }
    } else {
      //错题情况
      if (options.rightAmount - options.wrongAmount * 12 >= 55) {
        //五星级，赔率1-12
        key = 5
      } else if (options.rightAmount - options.wrongAmount * 8 >= 47) {
        //四星级，赔率1-8
        key = 4
      } else if (options.rightAmount - options.wrongAmount * 8 >= 40) {
        //三星级，赔率1-8
        key = 3
      } else if (options.rightAmount - options.wrongAmount * 1 >= 20) {
        //二星级，赔率1-1
        key = 2
      } else if (options.rightAmount - options.wrongAmount * 1 >= 5) {
        key = 1
      } else {
        key = 0
      }
    }
    this.setData({
      rightAmount: options.rightAmount,
      wrongAmount: options.wrongAmount,
      key: key
    })
    if (this.data.key >= 3) {
      this.setData({
        qualified: true
      })
    }
  }
})