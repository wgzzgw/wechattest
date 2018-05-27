// pages/has15/has15.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    datasource: [],
    dataanswer: [],
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68
      , 69, 70, 71, 72, 73, 74],
    minute: 2,
    second: 59,
    rightAmount: 0,//正确题目数量,
    wrongAmount: 0,//错误题目数量
    answerArray: [1, 2, 3, 4],
    answer: 0
  },
  onLoad: function () {
    this.setData({
      datasource: app.globalData.HAS15,
      dataanswer: app.globalData.HAS15answer
    })
  },
  //随机排序
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList
    });
  },
  onShow: function () {
    this.setList();
    this.initNumber();
  },
  //随机生成并改变一组指定范围内的加减法组合
  initNumber: function () {
    var result = this.data.dataanswer[this.data.list[this.data.index % 75]];//答案
    //开始随机生成成4个答案
    var answerArray = new Array;
    //随机生成正确答案位置
    var count = Math.ceil(Math.random() * 4);//1-4范围
    for (; answerArray.length < 4;) {
      var answer = Math.round(Math.random() * 80 + 20);
      if (count == (answerArray.length + 1)) { answerArray.push(result); }
      if (answer != result && answerArray.indexOf(answer) == -1 && answerArray.length < 4) { answerArray.push(answer); }
    }//生成成功
    //更新数据
    this.setData({
      answer: result,
      answerArray: answerArray
    });
  },
  judgeNumber: function (e) {
    if (e.target.id == this.data.answer) {
      this.setData({
        rightAmount: this.data.rightAmount + 1
      })
    } else {
      this.setData({
        wrongAmount: this.data.wrongAmount + 1,
      })
    }
    this.setData({
      index: this.data.index + 1
    }),
      this.initNumber();
  },
  onReady: function (e) {
    //时间进度条跑起来
    this.runTime(this);
  },
  runTime: function (that) {
    if (that.data.minute == 0 && that.data.second == 0) {
      wx.redirectTo({
        url: '../has15result/has15result?rightAmount=' + this.data.rightAmount
        + '&wrongAmount=' + this.data.wrongAmount
      })
    } else if (that.data.second == 0) {
      that.setData({
        second: 59,
        minute: that.data.minute - 1
      });
    }
    setTimeout(function () {
      // 判断当前页面是否已经退出
      if (getCurrentPages().length == 2) {
        that.setData({ second: that.data.second - 1 });
        that.runTime(that);
      }
    }, 1000)
  }
})