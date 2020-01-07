<template>
  <div class="hot">
    <!-- hot 头部 -->
    <div class="hot-header">
      <!-- search 搜索栏 -->
      <div class="hot-header--search">
        <van-search
          v-model="searchVideo"
          placeholder="请输入影片名称"
          shape="round"
          class="hot-header--search-input"
          @search="onSearch"
        />
        <a href="javascript:;" class="hot-header--customer" />
        <a href="javascript:;" class="hot-header--download" />
      </div>
      <!-- nav 页签导航 -->
      <div class="hot-header--nav">
        <van-tabs
          background="transparent"
          color="#ff9160"
          title-inactive-color="#fff"
          title-active-color="#fff"
        >
          <van-tab v-for="nav in navList" :key="nav" :title="nav"></van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- banner 轮播图 -->
    <div class="hot-banner">
      <van-swipe :autoplay="3000" class="hot-banner--swipe">
        <van-swipe-item v-for="(img, index) in images" :key="index" style="vertical-align:top;">
          <img :src="img" class="hot-banner--swipe-img" />
          <!-- <div :style="{'backgroundImage': 'url('+ img +')'}" class="hot-banner--swipe-img" /> -->
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- tip 提示 -->
    <div class="hot-tip">
      <h4>
        <i></i>
        <span>提示：加入会员，无需等待，无广告</span>
      </h4>
    </div>
    <!-- item 视频列表 -->
    <!-- 下拉刷新 @refresh="onRefresh"，上拉加载 @load="onLoad" -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="isUpLoading" :finished="upFinished" @load="onLoad" :offset="offset">
        <div class="hot-item">
          <!-- info 视频列表项 -->
          <div v-for="(item, idx) in list" :key="idx" class="hot-item--info">
            <!-- 左侧视频封面图 -->
            <div class="hot-item--aside">
              <img src="../../assets/timg.png" alt="Nothing" />
            </div>
            <!-- 右侧视频详情信息 -->
            <div class="hot-item--article clearfix">
              <h4>大约在冬季的味道哇大无多哇大武当-{{idx + 1}}</h4>
              <div>
                <div class="hot-item--detail">
                  <div class="detail-viewing">
                    <span class="detail-viewing--img" />
                    <span class="detail-viewing--times">{{item.viewingTimes}}万</span>
                  </div>
                  <div class="detail-favorable">
                    <span>好评率 :</span>
                    <span>100%</span>
                  </div>
                </div>
                <div class="hot-item--member text-center">
                  <a href="javascript:;"
                    class="hot-item--member-join"
                    @click="joinMember(item,idx)"
                  >加入会员</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
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
      navList: [
        '言情',
        '科幻',
        '惊悚',
        '恐怖',
        '动作',
        '古装',
        '玄幻',
        '韩剧',
        '少儿',
        '动漫',
        '体育'
      ],
      userInfo: {
        name: this.$cookies.get('userName') || ''
      },
      isLoading: false, // 下拉刷新
      isUpLoading: false, // 上拉加载
      upFinished: false, // 上拉加载完毕
      offset: 150 // 滚动条与底部距离小于 offset 时触发load事件
    }
  },
  mounted () {
    this.list = []
    this.createdData()
  },
  methods: {
    onSearch (val) {
      console.log(val)
    },
    createdData () {
      // 随机生成数据
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
    onRefresh () {
      // 下拉调用此函数
      const that = this
      window.setTimeout(() => {
        that.$toast('刷新成功') // 弹出
        that.isLoading = false
      }, 50)
    },
    joinMember (item, i) {
      // 加入会员
      console.log(item, i)
      if (!this.userInfo.name) {
        this.$router.push('/Register')
      }
    },
    onLoad () {
      // 上拉调用此函数
      const that = this
      window.setTimeout(() => {
        that.$toast('加载成功') // 弹出
        that.isUpLoading = false
        that.createdData()
      }, 300)
    }
  }
}
</script>

<style lang="scss">
.hot {
  background: url() no-repeat center;
  background-size: 100% 100%;
  /* header 头部 */
  .hot-header {
    background: url("../../assets/tabbar/header-bg.png") no-repeat scroll center;
    background-size: 100% 100%;
    padding: 1.1rem 0.6rem 0.2rem 0.2rem;
    .hot-header--search {
      display: flex;
      justify-items: center;
      margin-bottom: 0.12rem;
      .hot-header--search-input {
        background: transparent !important;
        width: 68%;
        margin-left: 2%;
        padding: 0;
        .van-search__content {
          background-color: rgba(255, 255, 255, 0.35);
          border: 1px solid #794b53;
          .van-icon-search {
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
      a {
        background: url() no-repeat scroll center;
        background-size: 100% 100%;
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        // margin-top: 50%;
        transform: translateY(22%);
      }
      .hot-header--customer {
        background-image: url("../../assets/customer.png");
        margin: 0 4% 0 12.4%;
      }
      .hot-header--download {
        background-image: url("../../assets/download.png");
      }
    }
    /* nav 导航 */
    .hot-header--nav {
      [class*="van-hairline"]::after {
        border: none;
      }
      .van-tab {
        flex-basis: 16% !important;
        font-size: 1rem;
        &.van-tab--active {
          font-weight: 700;
          font-size: 1.1rem;
        }
      }
      .van-tabs__line {
        bottom: 21px;
        padding: 0 0.3rem;
      }
    }
  }
  /* banner 头部 */
  .hot-banner {
    .hot-banner--swipe {
      height: 13rem;
      .hot-banner--swipe-img {
        /* display: block; */
        background: url() no-repeat scroll center;
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
      }
    }
  }
  /* tip 提示 */
  .hot-tip {
    padding: 0.4rem 0;
    text-align: center;
    background-color: #f5f5f5;
    i {
      background: url("../../assets/horn.png") no-repeat scroll center;
      background-size: 100% 100%;
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      transform: translate(0, 0.1rem);
    }
    h4 {
      display: inline-block;
      width: 80%;
      background: url("../../assets/tip-bg.png") no-repeat scroll center;
      background-size: 100% 100%;
      color: #fff;
      text-align: center;
      height: 1.4rem;
      border-radius: 0.2rem;
      font: normal 400 0.9rem/1.44rem "Microsoft Yahei";
    }
  }
  /* item 列表 */
  .hot-item {
    background-color: #f5f5f5;
    padding: 0 0.9rem 0.2rem;
    .hot-item--info {
      display: flex;
      height: 7rem;
      margin-bottom: 0.4rem;
      box-shadow: 1px 1px 0.18rem #ddd;
      background-color: #fff;
      border-radius: 0.28rem;
      /* 左边图片 */
      .hot-item--aside {
        width: 50%;
        height: 100%;
        vertical-align: top;
        img {
          width: 100%;
          height: 100%;
        }
      }
      /* 右侧信息栏目 */
      .hot-item--article {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 50%;
        padding: 0.44rem 0.4rem 0.2rem 0.5rem;
        h4 {
          color: #333;
          flex-basis: 70%;
          font: normal 400 0.96rem/1 "Microsoft Yahei";
        }
        /* 右侧底部详情信息 */
        .hot-item--detail {
          display: flex;
          flex-basis: 30%;
          justify-content: space-between;
          height: 1.2rem;
          /* 观看次数 */
          .detail-viewing {
            color: #808080;
            font: normal 400 0.7rem/1.2rem "Microsoft Yahei";
            // margin: 0 0.3rem 0 0.4rem;
            margin: 0 0.2rem 0 0.2rem;
            .detail-viewing--img {
              background: url("../../assets/video-play.png") no-repeat scroll
                center;
              display: inline-block;
              background-size: 100% 100%;
              height: 0.7rem;
              width: 0.7rem;
              transform: translate(0, 0.14rem);
            }
          }
          /* 好评率 */
          .detail-favorable {
            color: #f87074;
            float: left;
            font: normal 400 0.7rem/1.2rem "Microsoft Yahei";
          }
        }
        /* 加入会员 */
        .hot-item--member {
          background-image: linear-gradient(to right, #f6dd94 , #e4c587);
          border-radius: 0.22rem;
          cursor: pointer;
          width: 100%;
          .hot-item--member-join {
            color: #675928;
            font: normal 700 0.8rem "Microsoft Yahei";
          }
        }
      }
    }
  }
}
</style>
