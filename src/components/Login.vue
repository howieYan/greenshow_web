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
          <input type="text" translate="no" placeholder=""  v-model.trim="code">
          <b class="position_input" @click="clickSms(this)" v-if="code===''">获取动态密码</b>
          <b class="position_input" v-else>{{ seconds }} 秒</b>
      </p>
      <p class="height_50px_input">
          <button class="button_deng" @click="clickLogin" v-if="phone!=''">登录</button>
          <button class="button" v-else>登录</button>
      </p>
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
      phone: lib.debugView ? '18616398546' : '',
      code: lib.debugView ? '111111' : '',
      enable: true,
      isActive: false,
      period: 60,
      timeId: 0,
      lastTime: 0,
      seconds: this.period
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }

  },

  created () {
  },

  beforeDestroy () {
    lib.debugView && console.debug(`${this.name}.beforeDestroy.`)
    if (this.timerId > 0) {
      window.clearInterval(this.timerId)
      this.timerId = 0
    }
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
      let self = this
      if (this.enable) {
        this.enable = false
        try {
          self.seconds = self.period
          self.lastTime = Math.floor(new Date().getTime() / 1000)
          // api.sms(this.phone).then((result) => { })
          this.timerId = window.setInterval(function () {
            let now = Math.floor(new Date().getTime() / 1000)
            if (self.lastTime + self.period < now) {  // Timeout.
              window.clearInterval(self.timerId)
              self.timerId = 0
              self.enable = true
            }
            else {
              lib.debugView && console.debug(`${this.name}.clickSms: count down, ${self.lastTime} ${now}`)
            }
            self.seconds = self.period - (now - self.lastTime)
          }, 1000)
        }
        catch (e) {
          console.error(e)
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

