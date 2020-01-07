<template>
  <div class="login">
    <div class="login-nav text-center">
      <a href="javascript:;" @click="goback">
        <van-icon name="arrow-left"
                  color="#fff"
                  class="login-nav--icon" /></a>
      <span>账号登录</span>
    </div>
    <div class="login-logo text-center">
      <span>LOGO</span>
      <a href="javascript:;" class="login-logo--forget" @click="forgetPwd">忘记密码?</a>
    </div>
    <div class="login-form custom-form">
      <van-cell-group>
        <van-field v-model="account"
                   placeholder="请输入用户名"
                   left-icon="contact"
                   :label-width="10"
                   :error-message="accountErrMsg"
                   @blur="validAccount">
          <span class="login-form--icon-user" slot="left-icon"></span>
        </van-field>
        <van-field v-model="pwd"
                   type="password"
                   :label-width="10"
                   placeholder="请输入密码"
                   :error-message="pwdErrMsg"
                   @blur="validPwd"
                   @keyup.enter.native="login">
          <span class="login-form--icon-pwd" slot="left-icon"></span>
        </van-field>
      </van-cell-group>
    </div>
    <div class="login-operate text-center">
      <button class="van-button" @click="register">注册</button>
      <button class="van-button" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      account: '',
      pwd: '',
      accountErrMsg: '',
      pwdErrMsg: ''
    }
  },
  methods: {
    // 登陆
    login () {
      if (this.validAccount() && this.validPwd()) {
        const that = this
        window.setTimeout(() => {
          that.$cookies.set('userName', that.account)
          that.$toast.success('Login Success!')
          that.$router.push('/Home/Hot')
        }, 20)
      } else {
        this.$toast.fail('亲，请输入有效账号或密码!')
      }
    },
    forgetPwd () {
      // 忘记密码
      this.$cookies.remove('userName')
      this.$toast.fail('Forget Password!')
    },
    // 注册
    register () {
      this.$router.push('/register')
    },
    // 校验账号
    validAccount () {
      const reg = /^[a-zA-Z]{1}[A-Za-z0-9_]{4,29}/
      this.accountErrMsg = ''
      if (!reg.test(this.account)) {
        this.accountErrMsg = '必须是至少5位以英文字母开头'
      }
      return !this.accountErrMsg
    },
    // 校验密码
    validPwd () {
      const reg = /[A-Za-z0-9_$.]{5,29}/
      this.pwdErrMsg = ''
      if (!reg.test(this.pwd)) {
        this.pwdErrMsg = '至少5位只能是字母、数字或 _ 或 $ 或 .'
      }
      return !this.pwdErrMsg
    },
    // 回退到上一个界面
    goback () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  > div {
    padding: 0 4%;
  }
  .login-nav {
    flex-basis: 12%;
    box-sizing: border-box;
    // border-bottom: 1px solid black;
    background: url("../../assets/gradual-bg.png") no-repeat scroll center;
    background-size: 100% 100%;
    padding-top: 1.5rem;
    position: relative;
    letter-spacing: 1px;
    a {
      position: absolute;
      top: 1.4rem;
      left: 0.2rem;
      .login-nav--icon {
        font-size: 1.7rem;
      }
    }
    span {
      color: #333;
      font: normal 700 1rem/11.72% "Microsoft YaHei";
    }
  }
  .login-logo {
    flex-basis: 16%;
    position: relative;
    span{
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .login-logo--forget{
      position: absolute;
      right: 3.3%;
      top: 6%;
      font: normal 500 0.8rem "Microsoft YaHei";
      color: #000;
    }
  }
  .login-form {
    padding: 0;
    background-color: #fff;
    [class*="login-form--icon"]{
      background: url() no-repeat scroll center;
      background-size: 100% 100%;
      display: block;
      height: 1.1rem;
      width: 1.1rem;
      margin-right: 0.2rem;
      transform: translateY(0.24rem);
      &.login-form--icon-user{
        background-image: url("../../assets/user-icon.png")
      }
      &.login-form--icon-pwd{
        height: 1.2rem;
        width: 1rem;
        background-image: url("../../assets/pwd-icon.png")
      }
    }
  }
  .login-operate {
    margin-top: 2.8rem;
    button{
      outline: none;
      border: none;
      display: inline-block;
      box-sizing: border-box;
      width: 38%;
      height: 2.1rem;
      text-align: center;
      font: normal 500 0.9rem/2rem "Microsoft YaHei";
      color: #333;
      border-radius: 0.4rem;
      &:nth-child(1) {
        border: 1px solid #999;
        background-color: #fff;
        margin-right: 6%;
      }
      &:nth-child(2) {
        background: url("../../assets/gradual-bg.png") no-repeat scroll center;
        background-size: 100% 100%;
      }
    }

  }
}
</style>
