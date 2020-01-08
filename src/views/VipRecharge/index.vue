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
          <div class="detail-name">
            <span>{{user.name}}</span>
            <span class="info-detail--icon"></span>
          </div>
          <div class="detail-vip">
            <span v-if="user.vip" class="ff-hei" style="color: #f7e5b7;">
              2020年8月15号到期
            </span>
            <span v-else>您当前未开通VIP</span>
          </div>
        </div>
      </div>
    </div>
    <!-- vip 选择套餐 进行付款 -->
    <div class="vrecharge-package">
      <h5>套餐选择</h5>
      <!-- 新用户专享 -->
      <div class="van-tabs van-tabs--line">
        <div class="van-tabs__wrap van-tabs__wrap--scrollable van-hairline--top-bottom">
          <ul role="tablist" class="van-tabs__nav van-tabs__nav--line">
            <li
              v-for="(item, i) in packageList"
              :key="i"
              :class="{'active': currentPackage == item}"
              @click="choosePackage(item, i)"
            >
              <div class="vrecharge-package--name">
                <span class="ff-hei">{{item.name}}</span>
              </div>
              <div class="vrecharge-package--price">
                <div>
                  <span>￥</span><span :class="{'small': item.price.length>=3,'mini': item.price.length>=5}">{{item.price}}</span>
                </div>
              </div>
              <div class="vrecharge-package--newuser" v-if="item.isNewUser">优惠活动</div>
            </li>
          </ul>
          <div class="vrecharge-package--scrollbar"></div>
        </div>
      </div>
      <!-- <ul ref="packageUl">
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

          <div class="vrecharge-package--newuser" v-if="item.isNewUser">新用户专享</div>
        </li>
      </ul> -->
    </div>
    <!-- vip 会员特权 -->
    <div class="vrecharge-member">
      <h5>会员特权</h5>
      <div class="vrecharge-member--privilege">
        <div v-for="item in membershipPrivileges" :key="item.title">
          <div class="privilege-img">
            <img :src="item.img" alt="">
          </div>
          <div class="text-center privilege-title">{{item.title}}</div>
        </div>
      </div>
      <div class="vrecharge-member--pay text-center">
        <a href="javascript:;" @click="immediatePayment">
          <span>立即支付</span>
          <span class="vrecharge-member--pay-save">(已节省<span class="ff-hei">{{currentPackage.save}}</span>元)</span>
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
          price: '10',
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
        },
        {
          name: '一年VIP',
          price: '117',
          isNewUser: false,
          save: 68
        },
        {
          name: '两年VIP',
          price: '232',
          isNewUser: false,
          save: 140
        },
        {
          name: '三年VIP',
          price: '460',
          isNewUser: false,
          save: 288
        },
        {
          name: '五年VIP',
          price: '900',
          isNewUser: false,
          save: 600
        }
      ], // 套餐列表
      user: {
        name: '少女心小仙女',
        vip: this.$cookies.get('vip') || 3
      },
      membershipPrivileges: [{ // 会员特权
        title: '高清',
        img: require('../../assets/member-icon/HD.png')
      }, {
        title: '无广告',
        img: require('../../assets/member-icon/no-advertisement.png')
      }, {
        title: '全站免费',
        img: require('../../assets/member-icon/free.png')
      }, {
        title: '付费折扣',
        img: require('../../assets/member-icon/discount.png')
      }, {
        title: '抢先看',
        img: require('../../assets/member-icon/seen.png')
      }, {
        title: '尊贵标志',
        img: require('../../assets/member-icon/exclusive.png')
      }, {
        title: '专属通道',
        img: require('../../assets/member-icon/sign.png')
      }, {
        title: '专属客服',
        img: require('../../assets/member-icon/customer.png')
      }],
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
        font: normal 700 1.1rem/2rem "黑体";
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
        .info-detail--icon{
          background: url("../../assets/member-icon/member.png") no-repeat scroll
                  center;
          background-size: 100% 100%;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          transform: translate(0.1rem, 0.2rem);
        }
      }
    }
  }
  /* vip package 会员套餐 */
  .vrecharge-package {
    flex-basis: 33.2%;
    margin-bottom: 1.9%;
    padding-right: 0;
    h5 {
      font-size: 1rem;
      color: #333;
      margin: 0.7rem 0 0.4rem;
    }
    .van-tabs {
      [class*=van-hairline]::after{
        border: none;
        content: '';
      }
      .van-tabs__wrap {
        height: 24vh;
        // height: 8.2rem;
        position: relative;
        ul {
          display: flex;
          height: 100%;
          box-sizing: border-box;
          padding: 0.7rem 0 2.3vh;
          // padding: 0.7rem 0 1rem;
          margin-right: 0.4rem;
          li {
            flex-basis: 30%;
            border: 1px solid #b39d67;
            border-radius: 0.5rem;
            text-align: center;
            cursor: pointer;
            position: relative;
            box-sizing: border-box;
            margin-right: 0.5rem;
            display: flex;
            flex-direction: column;
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
              font-family: "黑体";
              width: 26.8vw;
              flex-basis: 27%;
              // display: flex;
              // height: 1.6rem;
              // line-height: 1.6rem;
              // height: 5.4vh;
              // line-height: 5.4vh;
              // padding: 0.6rem 0;
              font-size: 0.9rem;
              border-radius: 0.36rem 0.36rem 0 0;
              position: relative;
              span{
                position: absolute;
                width: 6rem;
                top: 50%;
                transform: translate(-50%,-50%);
              }
            }
            /* vip 套餐价格 */
            .vrecharge-package--price {
              // height: 4.79rem;
              // line-height: 4.79rem;
              // height: 12.96vh;
              // line-height: 12.96vh;
              flex-basis: 73%;
              line-height: 73%;
              color: #98752d;
              border-radius: 0 0 0.36rem 0.36rem;
              position: relative;
              >div{
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translate(0,-50%);
                text-align: center;
              }
              span {
                &:nth-child(1) {
                  font-size: 2rem;
                }
                &:nth-child(2) {
                  font-family: "黑体";
                  font-size: 2.6rem;
                  &.small{
                    font-size: 2rem;
                  }
                  &.mini{
                    font-size: 1.6rem;
                  }
                }
              }
            }
            /* vip 会员新用户 */
            .vrecharge-package--newuser {
              position: absolute;
              left: -1px;
              top: -0.8rem;
              height: 1.2rem;
              width: 4.8rem;
              background: url("../../assets/exclusive4newusers.png") no-repeat
                scroll center;
              background-size: 100% 100%;
              color: #333;
              font: normal 400 0.8rem/1.2rem "Microsoft YaHei";
            }
          }
        }
        .vrecharge-package--scrollbar{
          position: absolute;
          height: 1.7vh;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #fff;
          z-index: 1;
        }
      }
    }
  }
  /* vip 会员 */
  .vrecharge-member {
    flex-basis: 42.91%;
    position: relative;
    h5 {
      font-size: 1rem;
      margin-top: 1rem;
      color: #333;
    }
    /* vip 会员特权 */
    .vrecharge-member--privilege{
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5vh;
      >div{
        width: 25%;
        cursor: pointer;
        text-align: center;
        margin-bottom: 0.4vh;
        .privilege-img{
          img{
            // width: 2.2rem;
            height: 5.4vh;
          }
        }
        .privilege-title{
          font: normal 400 0.8rem '黑体';
        }
      }
    }
    /* vip 会员立即购买*/
    .vrecharge-member--pay {
      background-image: linear-gradient(to right, #d4b978, #edd38a);
      height: 2.6rem;
      border-radius: 1.3rem;
      position: absolute;
      bottom: 8%;
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
        /* vip 会员保存按钮 */
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
