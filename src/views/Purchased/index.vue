<template>
  <div class="purchased">
    <!-- item 视频列表 -->
    <!-- 下拉刷新 @refresh="onRefresh"，上拉加载 @load="onLoad" -->
    <van-pull-refresh v-model="isLoading">
      <van-list v-model="isUpLoading"
                :finished="upFinished"
                @load="onLoad"
                :offset="offset">
        <div class="purchased-item">
          <!-- info 视频列表项 -->
          <div v-for="(item, idx) in list"
               :key="idx"
               class="purchased-item--info">
            <!-- 左侧视频封面图 -->
            <div class="purchased-item--aside">
              <img src="../../assets/timg.png"
                   alt="Nothing">
            </div>
            <!-- 右侧视频详情信息 -->
            <div class="purchased-item--article clearfix">
              <h4>大约在冬季-{{idx + 1}}</h4>
              <p>北师大才女安然与台湾男生齐啸在1991年里......</p>
              <div class="purchased-item--detail">
                <div class="detail-favorable">
                  <span>好评率 :</span>
                  <span>100%</span>
                </div>
                <div class="detail-viewing">
                  <span class="detail-viewing--img" /><span class="detail-viewing--times">{{item.viewingTimes}}万</span>
                </div>
                <div class="detail-member text-center">
                  <a href="javascript:;"
                     class="detail-member--join"
                     @click="joinMember(item,idx)">加入会员</a>
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
  name: 'Purchased',
  data () {
    return {
      list: [],
      userInfo: {
        name: this.$cookies.get('userName') || ''
      },
      isLoading: false, // 下拉刷新
      isUpLoading: false, // 上拉加载
      upFinished: false, // 上拉加载完毕
      offset: 120 // 滚动条与底部距离小于 offset 时触发load事件
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
    onRefresh () { // 下拉调用此函数
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
        this.$route.push('/Register')
      }
    },
    onLoad () { // 上拉调用此函数
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
.purchased {
  background: url() no-repeat center;
  background-size: 100% 100%;
  /* item 列表 */
  .purchased-item {
    background-color: #f5f5f5;
    padding: 0 0.9rem;
    .purchased-item--info {
      display: flex;
      height: 8rem;
      margin-bottom: 0.4rem;
      box-shadow: 1px 1px 0.18rem #ddd;
      background-color: #fff;
      border-radius: 0.28rem;
      /* 左边图片 */
      .purchased-item--aside {
        width: 50%;
        height: 100%;
        vertical-align: top;
        img {
          width: 100%;
          height: 100%;
        }
      }
      /* 右侧信息栏目 */
      .purchased-item--article {
        position: relative;
        width: 50%;
        // padding: 0.5rem 0.3rem 0.375rem 0.75rem;
        // box-sizing: border-box;
        > div,
        > h4,
        > p {
          width: 100%;
          box-sizing: border-box;
          padding: 0 0.2rem 0 0.5rem;
          position: absolute;
          left: 0;
        }
        h4 {
          color: #262626;
          top: 0.44rem;
          font: normal 700 1rem/1 "Microsoft Yahei";
        }
        p {
          color: #808080;
          top: 2.4rem;
          font: normal 400 0.8rem/1.2rem "Microsoft Yahei";
        }
        /* 右侧底部详情信息 */
        .purchased-item--detail {
          bottom: 0.3rem;
          // display: flex;
          height: 1.2rem;
          /* 观看次数 */
          .detail-viewing {
            color: #808080;
            float: left;
            font: normal 400 0.6rem/1.2rem "Microsoft Yahei";
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
            font: normal 400 0.6rem/1.2rem "Microsoft Yahei";
          }
          /* 加入会员 */
          .detail-member {
            float: right;
            background: url("../../assets/member-bg.png") no-repeat scroll
              center;
            background-size: 100% 100%;
            height: 1.1rem;
            width: 3.1rem;
            line-height: 1.2rem;
            .detail-member--join {
              color: #675928;
              display: inline-block;
              transform: translate(0, -0.2rem);
              font: normal 700 0.6rem/1.2rem "Microsoft Yahei";
            }
          }
        }
      }
    }
  }
}
</style>
