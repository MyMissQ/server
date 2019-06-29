<template>
<div>
  <div class="model-con" v-for="(item,index) of list" :key="index">
      <div class="top-text">
         <h3>{{mylist[index]}}</h3>
         <a href="javascript:;">查看详情</a>
      </div>
      <div class="content-box">
          <ul class="nav-bars">
            <li v-for="(itm,i) of item" :key="i" > 
                <div class="beew">
                    <i></i>
                    <div class="col-text">
                    <p>{{itm.tit_tex}}</p>
                    <div class="hale-le"><em></em><strong style="font-size:.32rem">{{itm.p_names}}</strong></div>
                    <a href="" style="font-size:.32rem;">共21讲 | {{itm.p_numbers}}万已学</a>
                    </div>
                 </div>
                   <a class="end-tex">免费</a>
                </li>
         <!-- <li-item></li-item>
         <li-item></li-item>
         <li-item></li-item> -->
           
          </ul>
      </div>
  </div>
  </div>
</template>

<script>
import LiItem from './child/liItem.vue'
export default {
    data(){
        return {

        }
    },
    props:["list","mylist"]
    ,
    components:{
        "li-item":LiItem
    }
}
</script>

<style scoped>
.model-con{
  background: #fff;
  padding-top: .1rem;
  padding-bottom: .1rem;
  margin-top: .2rem;
  margin-bottom: .2rem;
}
.top-text{
  font-size:.426667rem;
  display: flex;
  justify-content: space-between;
  color: #333;
  padding-top: .326667rem;
  font-size:.32rem;
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
  padding-top: .326667rem;
}
.content-box ul.nav-bars li{
    font-size:.273333rem;
    display: flex;
    align-items: center;
  
    justify-content: space-between;
   

    
}
 li i{
  display: block;
  width: 2.826667rem;
  height: 1.653333rem;
  background: url(../assets/videoList-No1.png) no-repeat;
  background-size:2.826667rem 1.653333rem;
 
}
.beew{
    display:flex;
    
}
.col-text{
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-left: .4rem;
    height: 1.653333rem;
    justify-content: space-between;
}
.col-text p{
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:.373333rem;
   
    color: #333;
}
.hale-le{
    display: flex;
    align-items: center;
}
.hale-le em{
    width: .346667rem;
    height: .346667rem;
    display: block;
    background: url(../assets/icon2.png) no-repeat -.266667rem -2.693333rem;
    background-size:6.266667rem 6.186667rem;
    margin-right: .05rem;
}
.end-tex{
    display: flex;
    align-self: flex-end;
    color:#2ba920;
    font-size:.32rem;
}
</style>
