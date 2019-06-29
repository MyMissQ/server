<template>
  <div >
    <div class="model-con" v-for="(item,index) of list " :key="index">
  
      <div class="top-text">
         <h3>每日推荐</h3>
         <a href="javascript:;">查看详情</a>
      </div>
      <div class="content-box">
          <ul class="nav-bars">
            <li> <span></span> <a href="">小学科学六年级总复习</a></li>
            <li> <span></span> <a href="">小学科学六年级总复习</a></li>
            <li> <span></span> <a href="">小学科学六年级总复习</a></li>
            <li> <span></span> <a href="">小学科学六年级总复习</a></li>
          </ul>
      </div>
  </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style>
.model-con{
  background: #fff;
  padding-top: .1rem;
  padding-bottom: .1rem;
}
.top-text{
  font-size:.426667rem;
  display: flex;
  justify-content: space-between;
  color: #333;
  padding: .326667rem .346667rem 0  .346667rem;
}
.top-text a{
  font-size:.32rem;
  color:#666;
}
.content-box{

}
.content-box ul.nav-bars{
  display: flex;
  flex-flow: column;
  justify-items: start;
 /* padding-top: .326667rem; */
}
.content-box ul.nav-bars li{
    font-size:.273333rem;
    display: flex;
    align-items: center;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
.content-box ul.nav-bars li span{
  display: block;
  width: .48rem;
  height: .48rem;
  background: url(../assets/icon.png) no-repeat .026667rem -6.426667rem;
  background-size:7.84rem 8rem;
  margin: 0 .266667rem 0 .266667rem;
}
</style>
