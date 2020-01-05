<template>
  <div class="hot">
    <div class="hot-header">
      <div class="hot-header--search">
        <van-search
          v-model="searchVideo"
          placeholder="请输入影片名称"
          shape="round"
          class="hot-header--search-input"
          @search="onSearch"
        />
        <a href="javascript:;" class="hot-header--customer"/>
        <a href="javascript:;" class="hot-header--download" />
      </div>
      <div class="hot-header--nav">
        <van-tabs background="transparent" color="#fff" title-inactive-color="#fff" title-active-color="#fff">
          <van-tab v-for="nav in navList" :key="nav" :title="nav"></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="hot-banner">
      <van-swipe :autoplay="3000" class="hot-banner--swipe">
        <van-swipe-item v-for="(img, index) in images" :key="index" style="vertical-align:top;">
          <img :src="img" class="hot-banner--swipe-img"/>
          <!-- <div :style="{'backgroundImage': 'url('+ img +')'}" class="hot-banner--swipe-img" /> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hot-tip">
      <h4>
        <i></i>
        <span>提示：加入会员，无需等待，无广告</span>
      </h4>
    </div>
    <div class="hot-item">
      <div v-for="(item, idx) in list" :key="idx" class="hot-item--info">
        <div class="hot-item--aside">
          <img src="../../assets/timg.png" alt="Nothing">
        </div>
        <div class="hot-item--article">
          <h4>大约在冬季-{{idx + 1}}</h4>
          <p>北师大才女安然与台湾男生齐啸在1991年里......</p>
          <div class="hot-item--detail">
            <div class="detail-favorable">
              <span>好评率：</span>
              <span>100%</span>
            </div>
            <div class="detail-viewing">
              <span class="detail-viewing--bg"></span>
              <span class="detail-viewing--times">{{item.viewingTimes}}</span>
            </div>
            <div class="detail-member text-center">
              <a href="javascript:;"  class="detail-member--join">加入会员</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import {setTimeout} from 'timers'
export default {
  name: 'Hot',
  data () {
    return {
      images: [
        // require('../../assets/banner.png'),
        require('../../assets/banner.png')
      ],
      list: [],
      searchVideo: '',
      navList: ['言情','科幻','惊悚','恐怖','动作','古装','玄幻','韩剧','少儿','动漫','体育']
    }
  },
  mounted() {
    for(let i = 0;i<10;i++){
      this.list.push({
        img: '', // 图片
        title: '' + (i + 1), // 标题
        content: '' + (i + 1), // 内容
        favorable: '' + (i + 1) * 10, // 好评率
        viewingTimes: '' + (i + 1) * 100 // 观看次数
      })
    }
  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    loadData() {
      const that = this
      // 加载列表
      setTimeout(() => {
        for(let i = 0;i<10;i++){
          this.list.push({
            img: '', // 图片
            title: '' + (i + 1), // 标题
            content: '' + (i + 1), // 内容
            favorable: '' + (i + 1) * 10, // 好评率
            viewingTimes: '' + (i + 1) * 100 // 观看次数
          })
        }
      }, 20)
    }
  }
}
</script>

<style>
/* 备注：以下写法直接使用 css 不适用 less/sass 由于局域网限制不能下载 */
.hot{
  background: url() no-repeat center;
  background-size: 100% 100%;
}
.hot-header{
  background: url('../../assets/tabbar/header-bg.png') no-repeat scroll center;
  background-size: 100% 100%;
  padding: 1.2rem 0.6rem 0.2rem 0.2rem; 
}
.hot-header--search{
  display: flex;
}
.hot-header--search-input{
  background: transparent !important;
  width: 68%;
  margin-left: 2%;
  padding: 0;
}
.hot-header--search-input .van-search__content{
  background-color: rgba(255,255,255, 0.65);
  border: 1px solid #ccc;
}
.hot-header--search-input input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fff;
}
.hot-header--search-input input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
}
.hot-header--search-input input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
}
.hot-header--search-input input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fff;
}

.hot-header--customer{
  background: url('../../assets/customer.png') no-repeat scroll center;
  background-size: 100% 100%;
  margin: 0 4% 0 12.4%;
  width: 1.8rem;
  height: 1.8rem;
}
.hot-header--download{
  background: url('../../assets/download.png') no-repeat scroll center;
  background-size: 100% 100%;
  width: 1.8rem;
  height: 1.8rem;
}
.hot-item--info{
  display: flex;
}
.hot-header--nav {

}

.hot-banner--swipe{
  height: 18rem;
}
.hot-banner--swipe .hot-banner--swipe-img{
  /* display: block; */
  background: url() no-repeat scroll center;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
}

.hot-tip{
  position: relative;
  height: 2.2rem;
}
.hot-tip i{
  background: url('../../assets/video-play.png') no-repeat scroll center;
  background-size: 100% 100%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  transform: translate(0, 0.15rem);
}
.hot-tip h4{
  position: absolute;
  width: 80%;
  left: 50%;
  transform: translate(-50%,0);
  background-color: hotpink;
  color: #fff;
  text-align: center;
  padding: 0.3rem 0 0.3rem;
  border-radius: 0.2rem;
  font: normal 400 1rem/1 "Microsoft Yahei";
}

.hot-item{
  height: auto;
  padding: 0 0.9rem;
}
.hot-item--info{
  display: flex;
  margin-bottom: 0.4rem;
  height: 16rem;
  height: 100%;
}
.hot-item--aside{
  width: 46%;
  height: 100%;
  vertical-align: top;
}
.hot-item--aside img{
  width: 100%;
  height: 100%;
}
.hot-item--article{
  width: 54%;
  height: 100%;
}
.hot-item--article h4{
  color: #262626;
}
.hot-item--article .hot-item--detail{
  display: flex;
}
.hot-item--article p, .hot-item--article .detail-viewing{
  color: #808080;
}
.hot-item--article .detail-favorable{
  color: #f87074;
}
.hot-item--article .detail-member{
  background: url('../../assets/member-bg.png') no-repeat scroll center;
  background-size: 100% 100%;
}
.hot-item--article .detail-member--join {
  color: #675928;
}
</style>
