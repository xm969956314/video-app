<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/Hot" icon="home-o">热门</van-tabbar-item>
      <van-tabbar-item replace to="/Boutique" icon="search">精品</van-tabbar-item>
      <van-tabbar-item replace to="/Purchased" icon="home-o">已购</van-tabbar-item>
      <van-tabbar-item replace to="/Mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
