// pages/has121result/has121result.js
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
  continutenext: function () {
    //合格，继续测同层知识点
    wx.redirectTo({
      url: '../has122/has122'
    })
  },
  onLoad: function (options) {
    var key = this.data.key;
    if (options.wrongAmount == 0) {
      //没有错题的情况
      if (options.rightAmount >= 45) { key = 5 } else
        if (options.rightAmount < 45 && options.rightAmount >= 37) { key = 4 } else
          if (options.rightAmount < 37 && options.rightAmount >= 30) { key = 3 } else
            if (options.rightAmount < 30 && options.rightAmount >= 15) { key = 2 } else
              if (options.rightAmount < 15 && options.rightAmount >= 5) { key = 1 } else
                if (options.rightAmount < 5) { key = 0 }
    } else {
      //错题情况
      if (options.rightAmount - options.wrongAmount * 20 >= 45) {
        //五星级，赔率1-20
        key = 5
      } else if (options.rightAmount - options.wrongAmount * 10 >= 37) {
        //四星级，赔率1-10
        key = 4
      } else if (options.rightAmount - options.wrongAmount * 10 >= 30) {
        //三星级，赔率1-10
        key = 3
      } else if (options.rightAmount - options.wrongAmount * 1 >= 15) {
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