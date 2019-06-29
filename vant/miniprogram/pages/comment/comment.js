// pages/comment/comment.js
const db=wx.cloud.database({
  env: "web-test-01-i77rm"
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:"",
    detail:{},
    content:"",
    score:"",
    fileID:[],
    images:[],
    fileIds:[]
  },
  onChange(e){
    console.log(e.detail);
    this.setData({
      content:e.detail
    })
  },
  onContentChange(e){
    this.setData({
      score:e.detail
    })
    console.log(this.data.score);
  },
  //上传图片
  uploadImg(){
    wx.chooseImage({
      count:9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success:res=> {
         const file=res.tempFilePaths;
         console.log(file);
         this.setData({
           images:file
         })
          // // 选择成功后上传图片
          // wx.cloud.uploadFile({
          //   cloudPath:new Date().setTime()+"png",
          //   filePath:file,
          //   success:res=>{
          //     var fileID=res.fileID;
          //     this.setData({
          //       fileID: fileID
          //     })

          //   }
          // })
      },
    })
  },
  onSubmit(){
    wx.showLoading({
      title: '评论上传中',
    });
    //上传图片到云存储
    //创建pormise数组
    let promiseArr=[];
    //创建循环9次
    //创建promise push数组
    for(let i=0;i<this.data.images.length;i++){
      promiseArr.push(new Promise((reslove,reject)=>{
        var item = this.data.images[i];
        let suffix = /\.\w+$/.exec(item)[0];
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + suffix,//上传至云端路径
          filePath:item,
          success:res=>{
            wx.hideLoading();
        var ids = this.data.fileIds.concat(res.fileID);
            this.setData({
              fileIds: ids
            })
                reslove();
          Promise.all(promiseArr).then(res=>{
        
            db.collection("wexxin05").add({
              data:{
                  content:this.data.content,
                  score:this.data.score,
                  id:this.data.id,
                  fileIds:this.data.fileIds
              }
            }).then(res=>{
              wx.showToast({
                title: '评价成功'
              })
                  console.log(res);
                 
            }).catch(err=>{
              wx.showToast({
                title: '评价失败'
              })
              console.log(err);
           
            })
          })

          },
          fail:err=>{
            console.log(err);
            wx.hideLoading();
          }
          
        })
      }))
    }
    
   
    //5.2创建正则表达式拆分文件后缀.jpg .png
    //5.3上传图片
    //5.4上传成功将当前云存储fileID保存数组中
    //追加任务列表 
    //失败显示错误信息

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        //接收电影列表传递参数并且保存data
        this.setData({
          id:options.id
        })
        console.log(options.id);
        //提示数据加载框
        wx.showLoading({
          title: '加载中',
        })
       
        wx.cloud.callFunction({
          name:"gerDetaill2",//函数名称
          data:{
            id:options.id
          }
        }).then(res=>{
         
          var sult = JSON.parse(res.result);
          this.setData({
            detail:sult
          })
          console.log(sult);
            //隐藏加载框
            wx.hideLoading();

        }).catch(err=>{
          wx.hideLoading();
          console.log(err)
        })
        //调用云函数将电影传递云函数
        //获取云函数返回数据并且保存
      
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