<template>
  <div class="register">
    <div class="register-nav text-center">
      <a href="javascript:;" @click="goback">
        <van-icon name="arrow-left"
                  color="#fff"
                  class="register-nav--icon" /></a>
      <span>注册</span>
    </div>
    <div class="register-logo text-center log">
      <span>LOGO</span>
    </div>
    <div class="register-form custom-form">
      <van-cell-group class="bg-tran">
        <van-field v-model="account"
                   placeholder="请输入用户名"
                   left-icon="contact"
                   :label-width="10"
                   class="bg-tran"
                   :error-message="accountErrMsg"
                   @blur="validAccount">
          <span class="register-form--icon-user" slot="left-icon"></span>
        </van-field>
        <van-field v-model="pwd"
                   type="password"
                   :label-width="10"
                   class="bg-tran"
                   placeholder="请输入密码"
                   :error-message="pwdErrMsg"
                   @blur="validPwd">
          <span class="register-form--icon-pwd" slot="left-icon"></span>
        </van-field>
        <van-field v-model="confirmPwd"
                   type="password"
                   :label-width="10"
                   class="bg-tran"
                   placeholder="请再次确认密码"
                   :error-message="confirmPwdErrMsg"
                   @blur="validConfirmPwd">
          <span class="register-form--icon-pwd" slot="left-icon"></span>
        </van-field>
        <van-field v-model="phone"
                   :label-width="10"
                   class="bg-tran"
                   placeholder="请输入手机号码（选填）"
                   :error-message="phoneErrMsg"
                   @blur="validPhone">
          <span class="register-form--icon-phone" slot="left-icon"></span>
        </van-field>
      </van-cell-group>
    </div>
    <div class="register-operate text-center">
      <a href="javascript:;"
         class="van-button"
         @click="submit">注册并登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      account: '',
      confirmPwd: '',
      pwd: '',
      phone: '',
      accountErrMsg: '',
      pwdErrMsg: '',
      confirmPwdErrMsg: '',
      phoneErrMsg: ''
    }
  },
  methods: {
    submit () {
      // 提交注册信息
      if (this.validAccount() && this.validPwd() && this.validConfirmPwd() && this.validPhone()) {
        const that = this
        window.setTimeout(() => {
          that.$toast.success('Register Success!')
          that.$cookies.set('userName', that.account)
          that.$router.push('/Home/Hot')
        }, 20)
        // this.$axios.post('/xxx/').then(res => { console.log(res) })
      } else {
        this.$toast.fail('亲，请填写完表单！')
      }
    },
    clear () {
      // 清空注册信息
      this.account = ''
      this.confirmPwd = ''
      this.pwd = ''
      this.phone = ''
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
    // 再次确认密码
    validConfirmPwd () {
      const reg = /[A-Za-z0-9_$.]{5,29}/
      this.confirmPwdErrMsg = ''
      if (!reg.test(this.confirmPwd)) {
        this.confirmPwdErrMsg = '至少5位只能是字母、数字或 _ 或 $ 或 .'
      } else if (!this.pwd) {
        this.confirmPwdErrMsg = '请输入密码'
        this.pwdErrMsg = '请先输入密码'
      } else if (this.pwd && this.pwd !== this.confirmPwd) {
        this.confirmPwdErrMsg = '请输入正确密码！'
      }
      return !this.confirmPwdErrMsg
    },
    // 校验手机号
    validPhone () {
      const reg = /^(13|14|15|17|18|19)[0-9]{9}/
      this.phoneErrMsg = ''
      if (this.phone && !reg.test(this.phone)) {
        this.phoneErrMsg = '请输入正确的手机号'
      }
      return !this.phoneErrMsg
    },
    // 回退到上一个界面
    goback () {
      window.history.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  > div {
    padding: 0 4%;
  }
  .register-nav {
    flex-basis: 12%;
    box-sizing: border-box;
    // border-bottom: 1px solid black;
    background: url("../../assets/gradual-bg.png") no-repeat scroll center;
    background-size: 100% 100%;
    padding-top: 1.5rem;
    position: relative;
    a {
      position: absolute;
      top: 1.4rem;
      left: 0.2rem;
      .register-nav--icon {
        font-size: 1.7rem;
      }
    }
    span {
      color: #333;
      font: normal 700 1.1rem/11.72% "黑体";
    }
  }
  .register-logo {
    flex-basis: 16%;
    position: relative;
    span{
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .register-form {
    padding: 0 6%;
    // background-color: #fff;
    [class*="register-form--icon"]{
      background: url() no-repeat scroll center;
      background-size: 100% 100%;
      display: block;
      height: 1.1rem;
      width: 1.1rem;
      margin-right: 0.2rem;
      transform: translateY(0.24rem);
      &.register-form--icon-user{
        background-image: url("../../assets/user-icon.png")
      }
      &.register-form--icon-pwd{
        height: 1.2rem;
        width: 1rem;
        background-image: url("../../assets/pwd-icon.png")
      }
      &.register-form--icon-phone{
        height: 1.2rem;
        width: 0.8rem;
        background-image: url("../../assets/phone-icon.png")
      }
    }
  }
  .register-operate {
    margin-top: 1.3rem;
    a {
      width: 40%;
      height: 2.1rem;
      font: normal 500 1rem/2.1rem "Microsoft YaHei";
      color: #333;
      outline: none;
      border: none;
      display: inline-block;
      box-sizing: border-box;
      border-radius: 0.4rem;
      background: url("../../assets/gradual-bg.png") no-repeat scroll center;
      background-size: 100% 100%;
    }
  }
}
</style>
