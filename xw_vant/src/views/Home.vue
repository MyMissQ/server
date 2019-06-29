<template>
  <div>
  
      <van-search
        v-model="value"
        placeholder="请输入感兴趣课程的关键词"
        input-align
        :show-action="bool"
        @focus="fus"
        @blur="bus"
      />
      <div class="top-ser" v-show="bool" >
        <div class="header">
          <h1>热门搜索</h1>
        </div>
          <ul><li>小学数学</li><li>语文</li><li>微课</li><li>赵相文</li><li>幼儿园</li><li>小学英语</li><li>小学语文</li><li>初中英语</li><li>剪辑师</li><li>音乐</li></ul>
      </div>
    <van-swipe :autoplay="4000" indicator-color="white">
  <van-swipe-item><img src="../assets/bannr1.png" style="width:100%;" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/bannr2.png" style="width:100%;" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/bannr3.png" style="width:100%;" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/bannr4.png" style="width:100%;" alt=""></van-swipe-item>
   <van-swipe-item><img src="../assets/bannr5.png" style="width:100%;" alt=""></van-swipe-item>
</van-swipe>
  <div class="nav_nuem">
    <ul class="nav_liner">
      <li><i class="icon_1"></i><a href="">产品教程</a></li>
      <li><i class="icon_2"></i><a href="">精彩案例</a></li>
      <li><i class="icon_3"></i><a href="">专题精选</a></li>
      <li><i class="icon_4"></i><a href="">原创分享</a></li>
      <li><i class="icon_5"></i><a href="">教研论坛</a></li>
    </ul>
     <text-log></text-log>
    <video-modle ></video-modle>
    <video-tex :list="arr" :mylist="mylist"></video-tex>
    <score-fil></score-fil>
    <love-tex></love-tex>
  </div>
   
  
  
 
  </div>
</template>

<script>
import TextLog from '../components/Text.vue'
import videoModle  from '../components/Modle.vue'
import VideoTex from '../components/videoTex.vue'
import ScoreFil from '../components/Score.vue'
import LoveTex from '../components/Love.vue'
import { create } from 'domain';
import { setInterval, setTimeout } from 'timers';
export default {
    
    data(){
      return{
      value:"",
      bool:false,
      active:"",
      pno:0,
      ps:3,
      list:[1,2,3,4,5],
      arr:[],
      mylist:["每日推荐","精彩案例","选题题库","每日下载","截胡苍井空"]
      }
    },methods:{
     fus(){
       this.bool=true;
     },
     bus(){
       this.bool=false;
     }
    },
    created(){
    
      for(var item of this.list){
        

      
      this.pno+=1;
      var obj={
      pon:this.pno,
      ps:this.ps
      }

    var url="vue_index"
     
      this.axios(url,{params:obj}).then(res=>{
        // console.log(res.data.data);
        this.arr.push(res.data.data);
      })
      if(this.pon>5){
          return;
      }
     
     
      }
  
      console.log(this.arr);
    },
    components:{
      "text-log":TextLog,
      "video-modle":videoModle,
      "video-tex":VideoTex,
      "score-fil":ScoreFil,
      "love-tex":LoveTex
    }
}
</script>

<style scoped>
.van-search{
  padding: .1rem;
}
.van-search .van-cell{
  height: .56rem;
  border:0.5px solid rgb(206, 204, 204);
  line-height: 0.56rem;
  font-size: .2rem;
  box-sizing: border-box;
  border-radius: .05rem;
  padding: 0 .1rem 0 .1rem;
}
.van-search__content{
  padding-left:0;
}
.van-field__left-icon .van-icon-search:before {
    content: "\F0A9";
    font-size: .8rem !important;
}
.van-search .van-cell input.van-field__control{
  height: .56rem;
  
}
.van-search__action{
    font-size: .326667rem;
    color: #108ee9;
}
.top-ser{
    background-color: #f8f8f8;
    height: 100%;
    width: 100%;
    min-height: 91vh;
    padding: .166667rem;
    box-sizing: border-box;
    z-index: 888;
    position: absolute;
}
.head{
  padding: .166667rem;
 
}
.header h1{
    font-size: .373333rem;
    color: #333;
    text-align: left;
    margin-bottom: .2rem;
}
.top-ser ul{
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding-left: .08rem;
  padding-top: .08rem;
  box-sizing: border-box;

}
.top-ser ul li{
   
    list-style-type: none;
    line-height: .3rem;
    background-color: rgb(235, 235, 235);
    font-size: .15rem;
    color: #666;
    padding: 0.2rem;
    height: .3rem;
    border-radius: .533333rem;
    /* margin-bottom: .2rem; */
    margin: .1rem .05rem .1rem .05rem;


}
.van-swipe__indicators{
  position: absolute;
    bottom: 10px;
    left: 50%;
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
}
.nav_nuem{
    padding: .3rem;
    background: #fff;
}
.nav_nuem ul.nav_liner{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

} 
.nav_nuem ul.nav_liner li{
   display: flex;
   flex-flow: column;
   align-items: center;

}
.nav_nuem ul.nav_liner li i{
    width: 1.013333rem;
    height: 1.013333rem;
    margin: 0 auto;
    background: url(../assets/icon.png) no-repeat;
    background-size: 7.84rem 8rem;
}
.nav_nuem ul.nav_liner li i.icon_1{
    background-position:0 -5.386667rem;
}
.nav_nuem ul.nav_liner li i.icon_2{
    background-position:-.986667rem -5.386667rem;
}
.nav_nuem ul.nav_liner li i.icon_3{
    background-position:-2rem -5.386667rem;
}
.nav_nuem ul.nav_liner li i.icon_4{
    background-position:-2.986667rem -5.386667rem;
}
.nav_nuem ul.nav_liner li i.icon_5{
    background-position:-4.053333rem -5.386667rem;
}
.nav_nuem ul.nav_liner li a{
  font-size:.32rem;
  display: block;
  margin: .213333rem 0 0;
  color:#333;
  font-weight: lighter;
}

</style>
