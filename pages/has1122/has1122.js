// pages/has1122/has1122.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    minute: 0,
    second: 0
  },
  onLoad: function () {
    this.setData({
      list: app.globalData.HAS1122t
    })
  },
  //随机排序
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  setList: function () {
    for(var i=0;i<9;i++){
      this.data.list[i]= this.data.list[i].sort(this.randSort);
    }
    this.setData({
      list:this.data.list
    })
  },
  onShow: function () {
    this.setList();
    this.setColor();
  },
  getvalue:function(e){
    if (e.target.id==1){
    }
  },
  setColor:function(){
  }
})