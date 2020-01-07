<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* padding-bottom: 3rem; */
  box-sizing: border-box;
  /* chrome 和Safari 隐藏滚动条但能滚动*/
  /* div::-webkit-scrollbar { width: 0 !important; } */
  /* IE 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  overflow: -moz-scrollbars-none;
  height: 100%;
}
/* chrome 和Safari 隐藏滚动条但能滚动*/
#app::-webkit-scrollbar{
  /* display: none; */
  width: 0 !important;
}

.app-tabbar{
  box-shadow: 1px 0 0.8rem #aaa;
}
</style>
