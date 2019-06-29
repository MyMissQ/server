<template>
    <div>
         <li> 
                <div class="beew">
                    <i></i>
                    <div class="col-text">
                    <p>希沃白板5-基础教程</p>
                    <div class="hale-le"><em></em><strong style="font-size:.32rem">优仔老师</strong></div>
                    <a href="" style="font-size:.32rem;">共21讲 | 11.0万已学</a>
                    </div>
                 </div>
                   <a class="end-tex">免费</a>
                </li>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 li{
    font-size:.273333rem;
    display: flex;
    align-items: center;
  
    justify-content: space-between;
   

    
}
 li i{
  display: block;
  width: 2.826667rem;
  height: 1.653333rem;
  background: url(../../assets/videoList-No1.png) no-repeat;
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
    background: url(../../assets/icon2.png) no-repeat -.266667rem -2.693333rem;
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
