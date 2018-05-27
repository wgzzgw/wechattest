// pages/has1result/has1result.js
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
      //不合格，先测20以内加法
      url: '../has11/has11'
    })
  },
  onLoad: function (options) {
    var key = this.data.key;
    if (options.wrongAmount==0){
      //没有错题的情况
      if (options.rightAmount >= 45){key=5}else
        if (options.rightAmount < 45 && options.rightAmount>=36){key=4}else
          if (options.rightAmount < 36 && options.rightAmount>=27){key=3}else
            if (options.rightAmount < 27 && options.rightAmount>=15){key=2}else
              if (options.rightAmount < 15 && options.rightAmount>=3){key=1}else
                if (options.rightAmount<3){key=0}
    }else{
      //错题情况
      if (options.rightAmount - options.wrongAmount*10>=45){
        //五星级，赔率1-10
        key=5
      } else if (options.rightAmount - options.wrongAmount*5>=27){
        //三四星级，赔率1-5
        if (options.rightAmount - options.wrongAmount * 5<36){
          //三星级，赔率还是1-5
          key=3
        }else{
          //四星级，赔率还是1-5
          key=4
        }
      } else if (options.rightAmount - options.wrongAmount * 1>=9){
        //一二星级，赔率1-1
        if (options.rightAmount - options.wrongAmount * 1< 15) {
          //一星级，赔率还是1-1
          key = 1
        } else {
          //二星级，赔率还是1-1
          key = 2
        }
      }else{
        //0星级
        key=0
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