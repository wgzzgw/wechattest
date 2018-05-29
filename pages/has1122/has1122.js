// pages/has1122/has1122.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datasource: [],
    list: [[0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80]],
    minute: 0,
    second: 0,
    count: 0,
    count1:0,
    count2:0,
    countlist: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
  },
  onLoad: function () {
    this.setData({
      datasource: app.globalData.HAS1122tt
    })
  },
  //随机排序
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },
  setList: function () {
    for(var i=0;i<9;i++){
      this.data.list[i].sort(this.randSort);
    }
    // var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: this.data.list
    });
  },
  onShow: function () {
    this.setList();
  },
  getvalue: function (e) {
    if (e.target.id == 1) {
      if (1 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#8A2BE2';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2:this.data.count2+1
        })
        if(this.data.count2==9){
          this.setData({
            count1:this.data.count1+1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      } else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 2) {
      if (2 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#FF3300';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 3) {
      if (3 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#FF66FF';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 4) {
      if (4 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#660099';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 5) {
      if (5 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#6495ED';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 6) {
      if (6 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#66FFFF';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 7) {
      if (7 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#663333';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 8) {
      if (8 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#FFFF00';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    } else if (e.target.id == 9) {
      if (9 + this.data.datasource[this.data.list[this.data.count1][this.data.count2]] == 10) {
        this.data.countlist[this.data.count] = '#FFCC99';
        this.setData({
          countlist: this.data.countlist,
          count: this.data.count + 1,
          count2: this.data.count2 + 1
        })
        if (this.data.count2 == 9) {
          this.setData({
            count1: this.data.count1 + 1,
            count2: 0
          })
        }
        // this.data.countlist[this.data.count] = '#5cb85c';
        // this.setData({
        //   countlist: this.data.countlist,
        // })
        if (this.data.count == 81) {
          //做完题目了
          wx.redirectTo({
            url: '../has1122result/has1122result?minute=' + this.data.minute
            + '&second=' + this.data.second
          })
        }
      }
      else {
        //做错了
        wx.vibrateLong();
      }
    }
  },
  onReady: function (e) {
    //时间进度条跑起来
    this.runTime(this);
  },
  runTime: function (that) {
    if (that.data.second == 60) {
      that.setData({
        second: 0,
        minute: that.data.minute + 1
      });
    }
    setTimeout(function () {
      // 判断当前页面是否已经退出
      if (getCurrentPages().length == 2) {
        that.setData({ second: that.data.second + 1 });
        that.runTime(that);
      }
    }, 1000)
  }
})