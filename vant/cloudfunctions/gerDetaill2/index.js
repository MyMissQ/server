// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//引入request-promise
var rp = require("request-promise");
// 云函数入口函数
exports.main = async (event, context) => {
  //发送请求豆瓣
  var url =`http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
   return rp(url).then(res=>{
     return res;
   }).catch(err=>{
     console.log(err);
   })
}