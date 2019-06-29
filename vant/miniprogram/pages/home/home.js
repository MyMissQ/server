// pages/home/home.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用云函数 movielist2
    wx.cloud.callFunction({
      name:"movielist2",
      data:{
        start:0,
        count:10
      }
    }).then(res=>{
      // console.log(res.result);
      //将字符串转换成js对象
     var result =  JSON.parse(res.result);
     this.setData({
        list: result.subjects
        
     })
    
     console.log(result);
    }).catch(err=>{
      console.log(err);
    })

    //将当前函数返回电影列表保存
    //显示当前组件
  },
  //加载更多
  loadMore(){
    wx.cloud.callFunction({
      name: "movielist2",
      data: {
        start: this.data.list.length,
        count: 10
      }
    }).then(res => {
      // console.log(res.result);
      //将字符串转换成js对象
      var result = JSON.parse(res.result);
      this.setData({
        list: this.data.list.concat(result.subjects)

      })

      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  },
  loadMore2(){
    wx.request({
      url: 'http://localhost:3000/movielist',
      data:{pno:1,pageSize:10},
      success:res=>{
        console.log("自定义",res);
      }
    })
  },
  //跳转详情列表
  jumpComment(e){
    //跳转:保留跳转跳转
    var id = e.target.dataset.id;
     wx.navigateTo({
       url: '/pages/comment/comment?id='+id,

      
     });
   
    console.log(id);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
    
  
  //   wx.cloud.callFunction({
  //     name: "movielist2",
  //     data: {
  //       start: 0,
  //       count:this.data.num
  //     }
  //   }).then(res => {
  //     // console.log(res.result);
  //     //将字符串转换成js对象
  //     var result = JSON.parse(res.result);
  //     this.data.num+=10;
  //     this.setData({
  //       list: result.subjects,
        

  //     })

  //     console.log(result);
  //   }).catch(err => {
  //     console.log(err);
  //   })

  // },
  onReachBottom: function () {
    this.loadMore();
    this.loadMore2();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})