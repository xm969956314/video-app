<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img v-lazy="img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style>
</style>
