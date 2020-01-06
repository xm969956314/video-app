<template>
  <div>
    <van-cell-group>
      <van-field v-model="account"
                 placeholder="请输入用户名"
                 label="用户名"
                 left-icon="contact"
                 required />
      <van-field v-model="pwd"
                 type="password"
                 label="密码"
                 placeholder="请输入密码"
                 required />
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
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      const that = this
      window.setTimeout(() => {
        that.$toast.success('Login Success!')
      }, 20)
    },
    forgetPwd () {
      // 忘记密码
      this.$toast.fail('Login Success!')
    }
  }
}
</script>

<style>
</style>
