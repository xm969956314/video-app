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
      <van-field v-model="confirmPwd"
                 type="password"
                 label="确认密码"
                 placeholder="请再次确认密码"
                 required />
      <van-field v-model="phone"
                 label="手机号"
                 placeholder="请输入手机号" />
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
      form: {
        account: '',
        confirmPwd: '',
        pwd: '',
        phone: ''
      }
    }
  },
  methods: {
    submit () {
      // 提交注册信息
      const that = this
      window.setTimeout(() => {
        that.$toast.success('Register Success!')
      }, 20)
      // this.$axios.post('/xxx/').then(res => { console.log(res) })
    },
    clear () {
      // 清空注册信息
      this.form = {
        account: '',
        confirmPwd: '',
        pwd: '',
        phone: ''
      }
    }
  }
}
</script>

<style>
</style>
