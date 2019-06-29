<template>
  <div id="app">
   
    <router-view/>
    <div style="height:46px;"></div>
<van-tabbar :route="true">
  <van-tabbar-item
    replace
    to="/"
    icon="fire"
  >
    标签
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/p1"
    icon="search"
  >
    标签
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
     return{}
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
