<template>
  <div>
    <div class="Score-top">
      <h3>精彩讨论</h3><span>一起成长</span>
    </div>
   
        <van-swipe :autoplay="3000" indicator-color="white">
         <van-swipe-item  v-for="(itme,index) of 4" :key="index"> 
            <div class="Score-cont" >
              <div class="Score-section">
                <p><span>讨论</span>[教学研讨] 深化课程改革下,项目化学习正逐渐改变课堂的教与学!</p>
              </div>
            </div>
         </van-swipe-item>
       
        </van-swipe>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Score-top{
  font-size:.426667rem;
  color:#333;
  display: flex;
  align-items: center;
 
  margin-bottom: .266667rem;
}
.Score-top h3{
  margin-right: .266667rem;
}
.Score-top span{
  font-size:.22rem;

}
.Score-cont{
  display: flex;
  width: 100%;
  height: 4.16rem;

   box-sizing: border-box;

}
.Score-section{
  width: 100%;
  height: 4.16rem;
  background: url(../assets/score_bg.png) no-repeat;
  background-size:100%;
     display: flex;
  justify-content: center;
  align-items: center;
   padding: 0rem .246667rem 0 .246667rem;
   box-sizing:border-box;
 
}
.Score-section p{
  font-size: .326667rem;
  color: #363736;
    letter-spacing: .053333rem;
    line-height: .8rem;
    word-break: normal;
    white-space: normal;
    margin: 0;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    width: 100%;
}
.Score-section p span{
    width: 1.066667rem;
  height: .586667rem;
  background: #9cd0d4;
  display: inline-block;
  margin-right: .08rem;

  color:#fff;
  line-height: .586667rem;
  border-radius: .08rem;
  text-align: center;
}
</style>
