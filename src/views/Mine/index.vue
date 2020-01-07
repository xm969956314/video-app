<template>
  <div class="mine">
    <!-- 个人中心用户信息 -->
    <!-- <div class="mine-user">
      <div class="mine-user--title text-center">
        <a href="javascript:;" @click="goback">
          <van-icon name="arrow-left"
                    color="#fff"
                    class="mine-user--icon" /></a>
        <span>个人中心</span>
      </div>
      <div class="mine-user--info clearfix">
        <div class="mine-user--info-img">
        </div>
        <div class="mine-user--info-detail">
          <div class="detail-name">{{user.name}}</div>
          <div class="detail-vip">
            <span v-if="user.vip"
                  style="color: #ebc375;"></span>
            <span v-else>您当前未开通VIP</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      user: {
        name: '少女心小仙女',
        vip: this.$cookies.get('vip')
      }
    }
  },
  methods: {
    // 回退到上一个界面
    goback () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.mine {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  justify-content: space-between;
  > div {
    background: #fff;
    padding: 0 4%;
  }
  /* mine user-info */
  .mine-user {
    flex-basis: 28%;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    background: url("../../assets/tabbar/header-bg.png") no-repeat scroll center;
    background-size: 100% 100%;
    .mine-user--title {
      height: 11.72%;
      margin: 9.2% 0 9%;
      position: relative;
      a {
        position: absolute;
        top: -1px;
        left: 0;
        .mine-user--icon {
          font-size: 1.7rem;
        }
      }
      span {
        font: normal 700 1rem/11.72% "Microsoft YaHei";
      }
    }
    .mine-user--info {
      height: 4.4rem;
      > div {
        float: left;
      }
      .mine-user--info-img {
        height: 3.8rem;
        width: 3.8rem;
        border-radius: 50%;
        background-color: #171717;
        margin-right: 0.6rem;
      }
      .mine-user--info-detail {
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

}
</style>
