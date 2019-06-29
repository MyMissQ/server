// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init();
//引入ruquest-promise 库
var rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {


//返回豆瓣的电影链表
  return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`)
.then(res=>{
  console.log(res);//成功回调
      return res;//只能日志控制台输出
}).catch(err=>{
  console.log(err);
})

}