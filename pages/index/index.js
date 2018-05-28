//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    multiArray: [['加减法', '加法', '减法', '混合运算', '专项训练'], ['100以内']],
    multiIndex: [0, 0]
  },
  //多列选择器
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  //多列选择器，某一列的值改变时触发事件
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['100以内'];
            break;
          case 1:
            data.multiArray[1] = ['20以内', '20以上', '10以内', '10以上20以内'];
            break;
          case 2:
            data.multiArray[1] = ['20以内', '20以上', '10以内', '10以上20以内'];
            break;
          case 3:
            data.multiArray[1] = ['20以内'];
            break;
          case 4:
            data.multiArray[1] = ['凑十法','朋友对'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
    }
    this.setData(data);
  },
  //測試入口函數
  beginTest: function () {
    if (this.data.multiArray[0][this.data.multiIndex[0]] == '加减法' &&
      this.data.multiArray[1][this.data.multiIndex[1]] == '100以内') {
      wx.navigateTo({
        url: '../has1/has1',
      })
    } else
      if (this.data.multiArray[0][this.data.multiIndex[0]] == '加法' &&
        this.data.multiArray[1][this.data.multiIndex[1]] == '20以内') {
        wx.navigateTo({
          url: '../has11/has11',
        })
      } else
        if (this.data.multiArray[0][this.data.multiIndex[0]] == '减法' &&
          this.data.multiArray[1][this.data.multiIndex[1]] == '20以内') {
          wx.navigateTo({
            url: '../has12/has12',
          })
        } else
          if (this.data.multiArray[0][this.data.multiIndex[0]] == '混合运算' &&
            this.data.multiArray[1][this.data.multiIndex[1]] == '20以内') {
            wx.navigateTo({
              url: '../has13/has13',
            })
          } else
            if (this.data.multiArray[0][this.data.multiIndex[0]] == '加法' &&
              this.data.multiArray[1][this.data.multiIndex[1]] == '20以上') {
              wx.navigateTo({
                url: '../has14/has14',
              })
            } else
              if (this.data.multiArray[0][this.data.multiIndex[0]] == '减法' &&
                this.data.multiArray[1][this.data.multiIndex[1]] == '20以上') {
                wx.navigateTo({
                  url: '../has15/has15',
                })
              } else
                if (this.data.multiArray[0][this.data.multiIndex[0]] == '加法' &&
                  this.data.multiArray[1][this.data.multiIndex[1]] == '10以内') {
                  wx.navigateTo({
                    url: '../has111/has111',
                  })
                } else
                  if (this.data.multiArray[0][this.data.multiIndex[0]] == '加法' &&
                    this.data.multiArray[1][this.data.multiIndex[1]] == '10以上20以内') {
                    wx.navigateTo({
                      url: '../has112/has112',
                    })
                  } else
                    if (this.data.multiArray[0][this.data.multiIndex[0]] == '减法' &&
                      this.data.multiArray[1][this.data.multiIndex[1]] == '10以内') {
                      wx.navigateTo({
                        url: '../has121/has121',
                      })
                    } else
                      if (this.data.multiArray[0][this.data.multiIndex[0]] == '减法' &&
                        this.data.multiArray[1][this.data.multiIndex[1]] == '10以上20以内') {
                        wx.navigateTo({
                          url: '../has122/has122',
                        })
                      } else
                        if (this.data.multiArray[0][this.data.multiIndex[0]] == '专项训练' &&
                          this.data.multiArray[1][this.data.multiIndex[1]] == '凑十法') {
                          wx.navigateTo({
                            url: '../has1121/has1121',
                          })
                        } else if (this.data.multiArray[0][this.data.multiIndex[0]] == '专项训练' &&
                          this.data.multiArray[1][this.data.multiIndex[1]] == '朋友对'){
                          wx.navigateTo({
                            url: '../has1122/has1122',
                          })
                          }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
