<template>
  <div class="hear-box">
    <div class="header">
      <h3>猜你喜欢</h3>
      <a href="javascript:;"><i class="refresh"></i><span>换一换</span></a>
    </div>
    <div class="body-cont">
      <div>
        <img src="../assets/videoList-No2.png" alt="">
      <p class="p-tex" style=" line-clamp: 2;">教师必修】科学发声训练，保护您的嗓音</p>
      </div>
        <div>
        <img src="../assets/videoList-No2.png" alt="">
      <p class="p-tex" style=" line-clamp: 2;">教师必修】科学发声训练，保护您的嗓音</p>
      </div>
        <div>
        <img src="../assets/videoList-No2.png" alt="">
      <p class="p-tex" style=" line-clamp: 2;">教师必修】科学发声训练，保护您的嗓音</p>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.hear-box{
  margin-top: .326667rem;
}
.header{
  display: flex;
  font-size: .426667rem;
  color:#333;
  justify-content: space-between;
  align-items: center;
}
.header a{
  color:#666;
  font-size:.32rem;
  display: flex;
  align-items: center;
}
.refresh{
  width: .32rem;
  height:.32rem;
  background: url(../assets/icon2.png) -1.333333rem -3.76rem;
  background-size:6.266667rem 6.136667rem;
  display: block;
  margin-right: .08rem;
}
.body-cont{
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body-cont div{
  width: 2.826667rem;
  
  display: flex;
  flex-flow:column;
  /* align-items: flex-start; */
  overflow: hidden;
  padding-left: .08rem;
  padding-right: .08rem;
  box-sizing:border-box;
}
.body-cont div  img{
  width: 100%;
  height:1.653333rem;
}
.body-cont div  p.p-tex{
  margin-top: .2rem;
  width: 100%;
  font-size: .32rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  color: #333;
  -webkit-line-clamp: 2;
  white-space:nowrap;
 
}
</style>
