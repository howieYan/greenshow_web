<template>
<div>
  <div class="logo_icon">
      <img src="/static/favicon.ico" alt="">
      <p class="logo_text_center">高领秀</p>
  </div>
  <div>
      <p class="height_50px_input"><input type="text" translate="no" placeholder="手机号码"></p>
      <p class="height_50px_input">
          <input type="text" translate="no" placeholder="动态密码">
          <b class="position_input">获取动态密码</b>
      </p>
      <p class="height_50px_input"><button class="button_deng">登录</button></p>
  </div>
  <div class="weChat" @click="clickWechat">
      <p><img src="/static/weChat.png" alt=""></p>
      <b>微信快捷登录</b>
  </div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Team',
  data () {
    return {
      name: 'TeamV',
      blank: {
        Name: '',
        AverageScore: '无',
        MemberCount: 0
      },
      team: null,
      events: {
        page: 0,
        size: 5,
        list: []
      }
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    async loadData () {
      try {
        this.team = this.blank
        let result = await api.getTeam(this.id, 'summary')
        console.debug(`%o`, result)
        this.team = api.isValid(result) ? result.Data : this.blank

        result = await api.listEvent(this.id, 'team', this.events.page, this.events.size)
        console.debug(`%o`, result)
        this.events.list = api.isValid(result) ? result.Data : []
      }
      catch (e) {
        console.error(e)
      }
    },
    closeFrame () {
      this.$router.go(-1)
    },

    clickWechat () {
      let redirect = this.$route.query.redirect
      console.log(`${this.name}.clickWechat: ${redirect}`)
      let appid = 'wx4ede82d46b4d6b2b'
      let urlback = encodeURIComponent('http://wx.golfgreenshow.com/api5/User/WechatH5')
      let state = encodeURIComponent(redirect)
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlback}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
      window.location.href = url
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

