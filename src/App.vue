<template>
  <div id="app">
    <router-view />
    <van-tabbar route inactive-color="#333" active-color="#f65c65" class="app-tabbar">
      <van-tabbar-item v-for="(item, index) in tabbars" :key="index" :to="(item.path)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="scopes" :src="scopes.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabbars: [
        {
          path: '/Hot',
          title: '热门',
          normal: require('./assets/tabbar/hot.png'),
          active: require('./assets/tabbar/hot-active.png')
        },
        {
          path: '/Boutique',
          title: '精品',
          normal: require('./assets/tabbar/boutique.png'),
          active: require('./assets/tabbar/boutique-active.png')
        },
        {
          path: '/Purchased',
          title: '已购',
          normal: require('./assets/tabbar/purchased.png'),
          active: require('./assets/tabbar/purchased-active.png')
        },
        {
          path: '/Mine',
          title: '我的',
          normal: require('./assets/tabbar/mine.png'),
          active: require('./assets/tabbar/mine-active.png')
        }
      ]
    }
  },
  methods: {},
  // 通过路由跳转判断选中的样式
  created () {
    if (this.$route.path === '/Hot') {
      this.active = 0
    } else if (this.$route.path === '/Boutique') {
      this.active = 1
    } else if (this.$route.path === '/Purchased') {
      this.active = 2
    } else if (this.$route.path === '/Mine') {
      this.active = 3
    }
  }
}
</script>

<style>
#app {
  padding: 0;
}

.app-tabbar{
  box-shadow: 1px 0 0.8rem #aaa;
}
</style>
