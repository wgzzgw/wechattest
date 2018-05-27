// pages/has15result/has15result.js
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
  onLoad: function (options) {
    var key = this.data.key;
    if (options.wrongAmount == 0) {
      //没有错题的情况
      if (options.rightAmount >= 44) { key = 5 } else
        if (options.rightAmount < 44 && options.rightAmount >= 35) { key = 4 } else
          if (options.rightAmount < 35 && options.rightAmount >= 26) { key = 3 } else
            if (options.rightAmount < 26 && options.rightAmount >= 14) { key = 2 } else
              if (options.rightAmount < 14 && options.rightAmount >= 3) { key = 1 } else
                if (options.rightAmount < 3) { key = 0 }
    } else {
      //错题情况
      if (options.rightAmount - options.wrongAmount * 10 >= 44) {
        //五星级，赔率1-10
        key = 5
      } else if (options.rightAmount - options.wrongAmount * 5 >= 35) {
        //四星级，赔率1-5
        key = 4
      } else if (options.rightAmount - options.wrongAmount * 5 >= 26) {
        //三星级，赔率1-5
        key = 3
      } else if (options.rightAmount - options.wrongAmount * 1 >= 14) {
        //二星级，赔率1-1
        key = 2
      } else if (options.rightAmount - options.wrongAmount * 1 >= 3) {
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