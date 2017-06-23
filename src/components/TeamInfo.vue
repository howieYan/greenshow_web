<template>
  <div>
    <div id="header">
      <div class="header">
        <ul class="row">
          <li v-if="false" class="back"></li>
        </ul>
      </div>
      <div class="box_radius" id="bg_height">
        <div class="bg_logo"></div>
        <!-- <img :src="Logo"> -->
      </div>
    </div>
    <section id="section">
      <div>
        <ul class="row">
          <li class="col">
            <b></b>
          </li>
          <li class="">
            球队简介
          </li>
          <li class="col">
            <b></b>
          </li>
        </ul>
      </div>
      <div class="bgColor" id="bgColor">
        <ul class="row">
          <li class="padding_t" id="padding_t">
            <div>
              <div></div>
            </div>
          </li>
          <li class="">
            成立时间
          </li>
          <li class="col">
            2008年7月13日
          </li>
        </ul>
        <ul class="row">
          <li class="padding_t" id="padding_t">
            <div>
              <div></div>
            </div>
          </li>
          <li class="">
            现任队长
          </li>
          <li class="col">
            {{ Caption }}
          </li>
        </ul>
      </div>
      <div class="width">
        <ul class="row">
          <li class="padding_t" id="padding_t">
            <div>
              <div></div>
            </div>
          </li>
          <li class="padding_t_text" id="padding_t_text">
            球队宗旨
          </li>
          <div class="col padding_t_text" id="padding_t_text">
            球队倡导：团结、诚实、豁达、 内敛。力争建成一支讲规则、重 礼仪、争奉献、促和谐、恒快乐 的中国好球队。
          </div>
        </ul>
      </div>
      <div class="button">
        球队章程
      </div>
    </section>
  </div>
</template>

<script>
// import api from '../api'

export default {
  name: 'TeamInfo',
  data () {
    return {
      Logo: '/static/img/logo.png',
      Caption: ''
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  created () {
    // try {
    //   api.getTeam(this.id).then((data) => {
    //     console.debug(`%o`, data)
    //   })
    // }
    // catch (e) {
    // }
  },

  mounted () {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/infro_frame.css';
</style>
