<template>
<div>
  <div class="logo_icon">
      <img src="/static/favicon.ico" alt="">
      <p class="logo_text_center">高领秀</p>
  </div>
  <div>
      <p class="height_50px_input">
        <input type="text" translate="no" placeholder="手机号码" v-model.trim="phone">
      </p>
      <p class="height_50px_input">
          <input type="text" translate="no" placeholder="动态密码"  v-model.trim="code">
          <b class="position_input" @click="clickSms">获取动态密码</b>
      </p>
      <p class="height_50px_input"><button class="button_deng" @click="clickLogin">登录</button></p>
  </div>
  <div class="weChat" @click="clickWechat">
      <p><img src="/static/weChat.png" alt=""></p>
      <b>微信快捷登录</b>
  </div>
</div>
</template>
<script>
import api from '../api'
import * as lib from '../lib'

export default {
  name: 'Login',
  data () {
    return {
      name: 'LoginV',
      phone: lib.debugView ? '13585562369' : '',
      code: lib.debugView ? '111111' : '',
      enable: true
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }

  },

  created () {
  },

  methods: {
    closeFrame () {
      this.$router.go(-1)
    },

    clickWechat () {
      let redirect = this.$route.query.redirect
      lib.debugView && console.log(`${this.name}.clickWechat: ${redirect}`)
      let appid = 'wx4ede82d46b4d6b2b'
      let urlback = encodeURIComponent('http://wx.golfgreenshow.com/api5/User/WechatH5')
      let state = encodeURIComponent(redirect)
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlback}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
      window.location.href = url
    },

    clickSms () {
      lib.debugView && console.debug(`${this.name}.clickSms`)
      if (this.enable) {
        try {
          api.sms(this.phone).then((result) => {
          })
        }
        catch (e) {
        }
      }
    },

    clickLogin () {
      lib.debugView && console.debug(`${this.name}.clickLogin`)
      if (this.enable) {
        try {
          api.login(this.phone, this.code).then((result) => {

          })
        }
        catch (e) {
        }
      }
    }
  },

  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../css/resetd.css';
</style>

