//has1121.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    num:1,
    list:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32
    ,33,34,35,36,37,38,39,40,41,42,43,44,44],
    index:0,
    datasource:[],
    dataanswer:[],
    answer11:"",
    answer22:"",
    answer33:"",
    answer44:"",
    minute:2,
    second:59,
    rightAmount: 0//正确题目数量
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
onShow:function(){
  this.setList();
},
onLoad:function(){
  this.setData({
    datasource: app.globalData.HAS1121,
    dataanswer: app.globalData.HAS1121answer
  })
},
answer1:function(e){
this.setData({
  answer11:e.detail.value
})
},
answer2: function (e) {
  this.setData({
    answer22: e.detail.value
  })
},
answer3: function (e) {
  this.setData({
    answer33: e.detail.value
  })
},
answer4: function (e) {
  this.setData({
    answer44: e.detail.value
  })
},
next:function(){
  if (this.data.answer11 == this.data.dataanswer[this.data.list[this.data.index]]['4'] &&
    this.data.answer22 == this.data.dataanswer[this.data.list[this.data.index]]['2'] &&
    this.data.answer33 == this.data.dataanswer[this.data.list[this.data.index]]['3'] &&
    this.data.answer44 == this.data.dataanswer[this.data.list[this.data.index]]['1']) {
    this.setData({
      index: this.data.index + 1,
      num: this.data.num + 1,
      answer11:"",
      answer22:"",
      answer33:"",
      answer44:"",
      rightAmount: this.data.rightAmount+1
    })
  }else{
    wx.vibrateLong();
  }
},
onReady: function (e) {
  //时间进度条跑起来
  this.runTime(this);
},
runTime: function (that) {
  if (that.data.minute == 0 && that.data.second==0) {  
    wx.redirectTo({
      url: '../has1121result/has1121result?rightAmount='+this.data.rightAmount
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

