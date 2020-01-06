<template>
  <div>
    <van-cell-group>
      <van-field v-model="account"
                 placeholder="请输入用户名"
                 label="用户名"
                 left-icon="contact"
                 required
                 :error-message="accountErrMsg"
                 @blur="validAccount" />
      <van-field v-model="pwd"
                 type="password"
                 label="密码"
                 placeholder="请输入密码"
                 required
                 :error-message="pwdErrMsg"
                 @blur="validPwd" />
      <div>
        <button @click="login">登录</button>
        <a href="javascript:;" @click="forgetPwd">忘记密码?</a>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      form: {
        account: '',
        pwd: '',
        accountErrMsg: '',
        pwdErrMsg: ''
      }
    }
  },
  methods: {
    login () {
      if (this.validAccount() && this.validPwd()) {
        const that = this
        window.setTimeout(() => {
          that.$toast.success('Login Success!')
        }, 20)
      } else {
        this.$toast.fail('亲，请输入有效账号或密码!')
      }
    },
    forgetPwd () {
      // 忘记密码
      this.$toast.fail('Login Success!')
    },
    // 校验账号
    validAccount () {
      const reg = /^[a-zA-Z]{1}[A-Za-z0-9_]{5,29}/
      this.accountErrMsg = ''
      if (!reg.test(this.account)) {
        this.accountErrMsg = '必须是至少6位以英文字母开头'
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
    }
  }
}
</script>

<style>
</style>
