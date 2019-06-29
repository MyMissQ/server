<template>
  <div>
     <div class="conetn-text">
    <div class="No1">
        <div class="No1_box">
   <van-swipe :autoplay="3000" indicator-color="white" :show-indicators="false" :vertical="colm">
  <van-swipe-item v-for="(item,index) of list" :key="index"><span>{{item}}</span></van-swipe-item>
  <!-- <van-swipe-item><span></span></van-swipe-item>
  <van-swipe-item><span></span></van-swipe-item>
  <van-swipe-item><span></span></van-swipe-item> -->
</van-swipe>
             
    </div>
    <div class="ico_bg">
      <img src="../assets/daynews.png" alt="">
    </div> 
   </div>
   </div>

  </div>


</template>
<script>
import PrArr from './p1.vue'
export default {
  data(){
    return {
      colm:true,
      list:["孙春兰：加强高校创新能力开放合作，更好地服务党和国家工作大局",
      "西安小升初“品德零分”背后：素质评价应试化引争议！",
      "西安小升初“品德零分”背后：素质评价应试化引争议！",
      "孙春兰：加强高校创新能力开放合作，更好地服务党和国家工作大局",
      "正在直播｜首届中国基础教育“新教学”研讨活动—高中语文•上海静安专场"
      ]
    }
  },
  components:{
    "pr-arr":PrArr
  } 
}
</script>

<style scoped>
.conetn-text{
  display: flex;
  flex-flow: nowrap;
  height:1.2rem;
  padding-left: .2rem;
  padding-right: .2rem;
  background: #fff;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  
}
.conetn-text .No1{
  width:100%;
  height: 1.2rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  
}
.conetn-text  .No1_box{
    width: 100%;
    height:6rem;
    overflow:hidden;

}
 .ico_bg{
    width: 1.066667rem;
    height:1.2rem;
    display: flex;
    align-items: center;
    margin-left: .3rem;
  }
  .ico_bg img{
    width:100%;
    cursor: pointer;
  }
  span{
    display: block;
    height:1.2rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    font-size: .3rem;
    line-height: 1.2rem;
    
  }
  .van-swipe{
    height: 1.2rem;
  }
</style>
