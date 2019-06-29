// pages/mymoive/mymoive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    image:[]//保存选中图片
  },
  onConentChange(e){
     this.setData({
       content:e.detail
     })
     console.log(this.data.content);
  },
  uploadImg(){
      
    wx.chooseImage({
      count:9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:res=>{
       var file = res.tempFilePaths;
       this.setData({
         image:file
       })
       console.log(file);
      }
    })
  },
  onSubmit(){
   //提交加载框
   wx.showLoading({
     title: '加载中',
   })
   //获取留言内容
   var arr=[];
   
   //获取图片
    arr.push(this.data.image);
   //创建一个正则表达式
    var fluul ="";
   for(var item of arr){
     fluul= /\.\w+$/.exec(item)[0];
     
   }
    console.log(fluul);
   //上传图片
   //5.上传成功  
   //5.1获取fileID
   //5.2向集合添加记录
   //5.3失败
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})