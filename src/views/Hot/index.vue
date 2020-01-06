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
        <van-tabs background="transparent" color="#ff9160" title-inactive-color="#fff" title-active-color="#fff">
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
              <span style="font-size: 0.7rem;">好评率 :</span>
              <span>100%</span>
            </div>
            <div class="detail-viewing">
              <span class="detail-viewing--img" />
              <span class="detail-viewing--times">{{item.viewingTimes}}万</span>
            </div>
            <div class="detail-member text-center">
              <a href="javascript:;"  class="detail-member--join" @click="joinMember(item,idx)">加入会员</a>
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
      navList: ['言情', '科幻', '惊悚', '恐怖', '动作', '古装', '玄幻', '韩剧', '少儿', '动漫', '体育']
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
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
    onSearch (val) {
      console.log(val)
    },
    loadData () {
      // const that = this
      // 加载列表
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({
            img: '', // 图片
            title: '' + (i + 1), // 标题
            content: '' + (i + 1), // 内容
            favorable: '' + (i + 1) * 10, // 好评率
            viewingTimes: '' + (i + 1) * 100 // 观看次数
          })
        }
      }, 20)
    },
    joinMember(item, i) {
      console.log(item, i)
    }
  }
}
</script>

<style lang="scss">
.hot{
  background: url() no-repeat center;
  background-size: 100% 100%;
  /* header 头部 */
  .hot-header{
    background: url('../../assets/tabbar/header-bg.png') no-repeat scroll center;
    background-size: 100% 100%;
    padding: 1.2rem 0.6rem 0.2rem 0.2rem;
    .hot-header--search{
      display: flex;
      .hot-header--search-input{
        background: transparent !important;
        width: 68%;
        margin-left: 2%;
        padding: 0;
        .van-search__content{
          background-color: rgba(255,255,255, 0.35);
          border: 1px solid #794b53;
          .van-icon-search{
            color: #fff;
          }
        }
        input::-webkit-input-placeholder {
          /* WebKit browsers */
          color: #fff;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #fff;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #fff;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: #fff;
        }
      }
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
    /* nav 导航 */
    .hot-header--nav {
      [class*=van-hairline]::after{
        border: none;
      }
      .van-tab{
        flex-basis: 16% !important;
        font-size: 1rem;
        &.van-tab--active{
          font-weight: 700;
          font-size: 1.1rem;
        }
      }
    }
  }
  /* banner 头部 */
  .hot-banner{
    .hot-banner--swipe{
      height: 16rem;
      .hot-banner--swipe-img{
        /* display: block; */
        background: url() no-repeat scroll center;
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
      }
    }
  }
  /* tip 提示 */
  .hot-tip{
    padding: 0.4rem 0;
    text-align: center;
    background-color: #f5f5f5;
    i{
      background: url('../../assets/horn.png') no-repeat scroll center;
      background-size: 100% 100%;
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      transform: translate(0, 0.11rem);
    }
    h4{
      display: inline-block;
      width: 80%;
      background: url('../../assets/tip-bg.png') no-repeat scroll center;
      background-size: 100% 100%;
      color: #fff;
      text-align: center;
      padding: 0.28rem 0 0.38rem;
      border-radius: 0.2rem;
      font: normal 400 0.9rem/1 "Microsoft Yahei";
    }
  }
  /* item 列表 */
  .hot-item{
    background-color: #f5f5f5;
    padding: 0 0.9rem;
    .hot-item--info{
      display: flex;
      height: 8rem;
      margin-bottom: 0.4rem;
      box-shadow: 1px 1px 0.18rem #ddd;
      border-radius: 0.28rem;
      /* 左边图片 */
      .hot-item--aside{
        width: 44%;
        height: 100%;
        vertical-align: top;
        img{
          width: 100%;
          height: 100%;
        }
      }
      /* 右侧信息栏目 */
      .hot-item--article{
        position: relative;
        width: 56%;
        // padding: 0.5rem 0.3rem 0.375rem 0.75rem;
        // box-sizing: border-box;
        >div,>h4,>p{
          width: 100%;
          position: absolute;
          left: 0.75rem;
        }
        h4{
          color: #262626;
          top: 0.3rem;
          font: normal 700 1rem/1 "Microsoft Yahei";
        }
        p{
          color: #808080;
          top: 2.4rem;
          font: normal 400 0.8rem/1 "Microsoft Yahei";
        }
        /* 右侧底部详情信息 */
        .hot-item--detail{
          bottom: 0.4rem;
          display: flex;
          height: 1.2rem;
          /* 观看次数 */
          .detail-viewing{
            color: #808080;
            font: normal 400 0.7rem/1.2rem "Microsoft Yahei";
            margin: 0 0.3rem 0 0.4rem;
            .detail-viewing--img{
              background: url('../../assets/video-play.png') no-repeat scroll center;
              display: inline-block;
              background-size: 100% 100%;
              height: 0.7rem;
              width: 0.7rem;
            }
          }
          /* 好评率 */
          .detail-favorable{
            color: #f87074;
            font: normal 400 0.8rem/1.2rem "Microsoft Yahei";
          }
          /* 加入会员 */
          .detail-member{
            background: url('../../assets/member-bg.png') no-repeat scroll center;
            background-size: 100% 100%;
            height: 1.2rem;
            width: 4rem;
            line-height: 1.2rem;
            .detail-member--join {
              color: #675928;
              display: inline-block;
              transform: translate(0, -0.1rem);
              font: normal 700 0.8rem/1.2rem "Microsoft Yahei";
            }
          }
        }
      }
    }
  }
}
</style>
