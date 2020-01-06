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
      <van-field v-model="confirmPwd"
                 type="password"
                 label="确认密码"
                 placeholder="请再次确认密码"
                 required
                 :error-message="confirmPwdErrMsg"
                 @blur="validConfirmPwd" />
      <van-field v-model="phone"
                 label="手机号"
                 placeholder="请输入手机号"
                 :error-message="phoneErrMsg"
                 @blur="validPhone" />
      <div>
        <button @click="submit">提交</button>
        <button @click="clear">清空</button>
      </div>
    </van-cell-group>
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
    }
  }
}
</script>

<style>
</style>
