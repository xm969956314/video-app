<template>
  <div class="vrecharge">
    <!-- vip 充值用户信息 -->
    <div class="vrecharge-user">
      <div class="vrecharge-user--title text-center">
        <a href="javascript:;" @click="goback">
          <van-icon name="arrow-left" color="#fff" class="vrecharge-user--icon" />
        </a>
        <span>VIP会员充值</span>
      </div>
      <div class="vrecharge-user--info clearfix">
        <div class="vrecharge-user--info-img">
          <!-- <img :src="" alt="" srcset=""> -->
        </div>
        <div class="vrecharge-user--info-detail">
          <div class="detail-name">{{user.name}}</div>
          <div class="detail-vip">
            <span v-if="user.vip" style="color: #ebc375;">VIP</span>
            <span v-else>您当前未开通VIP</span>
          </div>
        </div>
      </div>
    </div>
    <!-- vip 选择套餐 进行付款 -->
    <div class="vrecharge-package">
      <h5>套餐选择</h5>
      <div class="van-tabs van-tabs--line">
        <div class="van-tabs__wrap van-tabs__wrap--scrollable van-hairline--top-bottom">
          <ul role="tablist" class="van-tabs__nav van-tabs__nav--line">
            <li
              v-for="(item, i) in packageList"
              :key="i"
              class="van-tab"
              style="flex-basis: 29%;"
              :class="{'active': currentPackage == item}"
              @click="choosePackage(item, i)"
            >
              <div class="vrecharge-package--name">{{item.name}}</div>
              <div class="vrecharge-package--price">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
              <!-- 新用户专享 -->
              <div class="vrecharge-package--newuser" v-if="item.isNewUser">新用户专享</div>
            </li>
            <li
              v-for="(item, i) in packageList"
              :key="i"
              class="van-tab"
              style="flex-basis: 29%;"
              :class="{'active': currentPackage == item}"
              @click="choosePackage(item, i)"
            >
              <div class="vrecharge-package--name">{{item.name}}</div>
              <div class="vrecharge-package--price">
                <span>￥</span>
                <span>{{item.price}}</span>
              </div>
              <!-- 新用户专享 -->
              <div class="vrecharge-package--newuser" v-if="item.isNewUser">新用户专享</div>
            </li>
            <!-- <div role="tab" aria-selected="true" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">言情</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻1</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻2</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻3</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻4</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻5</span>
            </div>
            <div role="tab" class="van-tab" style="flex-basis: 29%;">
              <span class="van-tab__text">玄幻6</span>
            </div>-->
          </ul>
        </div>
      </div>
      <ul ref="packageUl">
        <li
          v-for="(item, i) in packageList"
          :key="i"
          :class="{'active': currentPackage == item}"
          @click="choosePackage(item, i)"
        >
          <div class="vrecharge-package--name">{{item.name}}</div>
          <div class="vrecharge-package--price">
            <span>￥</span>
            <span>{{item.price}}</span>
          </div>
          <!-- 新用户专享 -->
          <div class="vrecharge-package--newuser" v-if="item.isNewUser">新用户专享</div>
        </li>
      </ul>
    </div>
    <!-- vip 会员特权 -->
    <div class="vrecharge-member">
      <h5>会员特权</h5>
      <div class="vrecharge-member--pay text-center">
        <a href="javascript:;" @click="immediatePayment">
          <span>立即支付</span>
          <span class="vrecharge-member--pay-save">(已节省{{currentPackage.save}}元)</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VipRecharge',
  data () {
    return {
      packageList: [
        {
          name: '连续包月VIP',
          price: '9.9',
          isNewUser: true,
          save: 5
        },
        {
          name: '季卡VIP',
          price: '30',
          isNewUser: false,
          save: 16
        },
        {
          name: '半年VIP',
          price: '58',
          isNewUser: false,
          save: 33
        }
      ], // 套餐列表
      user: {
        name: '少女心小仙女',
        vip: this.$cookies.get('vip') || 3
      },
      currentPackage: {}
    }
  },
  mounted () {
    this.currentPackage = this.packageList[0]
  },
  methods: {
    // 选择套餐
    choosePackage (item, idx) {
      this.currentPackage = item
    },
    // 立即支付
    immediatePayment () {
      this.$toast('正在支付！')
    },
    // 回退到上一个界面
    goback () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.vrecharge {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: space-between;
  > div {
    background: #fff;
    padding: 0 4%;
  }
  /* vip user-info */
  .vrecharge-user {
    flex-basis: 22%;
    box-sizing: border-box;
    // border-bottom: 1px solid black;
    background: url("../../assets/vip-bg.png") no-repeat scroll center;
    background-size: 100% 100%;
    .vrecharge-user--title {
      height: 2rem;
      margin: 6.2% 0 3%;
      position: relative;
      a {
        position: absolute;
        top: -1px;
        left: 0;
        .vrecharge-user--icon {
          font-size: 1.7rem;
        }
      }
      span {
        color: #333;
        font: normal 700 1rem/2rem "Microsoft YaHei";
      }
    }
    .vrecharge-user--info {
      height: 4.4rem;
      > div {
        float: left;
      }
      .vrecharge-user--info-img {
        height: 3.8rem;
        width: 3.8rem;
        border-radius: 50%;
        background-color: #171717;
        margin-right: 0.6rem;
      }
      .vrecharge-user--info-detail {
        color: #fff;
        font-weight: 500;
        margin-top: 0.4rem;
        .detail-name {
          font-size: 1rem;
          line-height: 1.6rem;
        }
        .detail-vip {
          font-size: 0.8rem;
        }
      }
    }
  }
  /* vip user-info */
  .vrecharge-package {
    flex-basis: 35.2%;
    margin-bottom: 1.9%;
    h5 {
      font-size: 1rem;
      color: #333;
      margin: 0.7rem 0 1.1rem;
    }
    ul {
      display: flex;
      li {
        flex: 1;
        border: 1px solid #b39d67;
        border-radius: 0.4rem;
        text-align: center;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        margin-right: 0.4rem;
        &:nth-last-child() {
          margin: 0;
        }
        &.active {
          .vrecharge-package--price {
            background: url("../../assets/golden-inner.png") no-repeat scroll
              center;
            background-size: 100% 100%;
          }
        }
        .vrecharge-package--name {
          background-color: #ebc375;
          padding: 0.6rem 0;
          font-size: 1rem;
          border-radius: 0.36rem 0.36rem 0 0;
        }
        /* vip user-info */
        .vrecharge-package--price {
          height: 5.4rem;
          line-height: 5.4rem;
          color: #98752d;
          border-radius: 0 0 0.36rem 0.36rem;
          span {
            &:nth-child(1) {
              font-size: 2rem;
            }
            &:nth-child(2) {
              font-size: 3rem;
            }
          }
        }
        /* vip user-info */
        .vrecharge-package--newuser {
          position: absolute;
          left: 0;
          top: -0.7rem;
          height: 1.4rem;
          width: 5.6rem;
          background: url("../../assets/exclusive4newusers.png") no-repeat
            scroll center;
          background-size: 100% 100%;
          color: #333;
          font: normal 400 0.8rem/1.4rem "Microsoft YaHei";
        }
      }
    }
  }
  /* vip user-info */
  .vrecharge-member {
    flex-basis: 40.91%;
    position: relative;
    h5 {
      font-size: 1rem;
      margin-top: 1rem;
      color: #333;
    }
    /* vip user-info */
    .vrecharge-member--pay {
      background-image: linear-gradient(to right, #d4b978, #edd38a);
      height: 2.6rem;
      border-radius: 1.3rem;
      position: absolute;
      bottom: 14%;
      left: 10%;
      width: 80%;
      a {
        display: block;
        width: 100%;
        height: 100%;
        font: normal 500 1rem/2.6rem "Microsoft YaHei";
        color: #333;
        &:hover,
        &:active {
          color: #333;
        }
        /* vip user-info */
        .vrecharge-member--pay-save {
          font-size: 0.8rem;
          display: inline-block;
          transform: translateY(-0.1rem);
        }
      }
    }
  }
}
</style>
