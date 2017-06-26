<template>
  <div>
<!--球队header-->
    <header class="header1">
      <ul class="row">
        <li class="back" @click="closeFrame"></li>
        <li class="textCenter col">
          <img :src="'static/logo_header.png'" alt="">
          <div class="row string">
            <div class="col">
              <p>81</p>
              <b>平均成绩</b>
            </div>
            <div class="col">
              <p>40</p>
              <b>球队人数</b>
            </div>
          </div>
        </li>
        <li></li>
      </ul>
    </header>
    <div class="clearfix"></div>
    <div class="section_title">
      <ul class="row">
        <li class="col">
          <img :src="'static/notice.png'" alt="">
          <p>公告</p>
        </li>
        <li class="col">
          <img :src="'static/schedule.png'" alt="">
          <p>赛程</p>
        </li>
        <li class="col">
          <img :src="'static/regulations.png'" alt="">
          <p>章程</p>
        </li>
        <li class="col">
          <img :src="'static/player.png'" alt="">
          <p>球员</p>
        </li>
      </ul>
      <ul class="row">
        <li class="col">
          <img :src="'static/ranking.png'" alt="">
          <p>排行</p>
        </li>
        <li class="col">
          <img :src="'static/history.png'" alt="">
          <p>历史</p>
        </li>
        <li class="col">
          <img :src="'static/honor.png'" alt="">
          <p>荣誉</p>
        </li>
        <li class="col">
          <img :src="'static/photoalbum.png'" alt="">
          <p>相册</p>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <section>
      <div class="title_image">
        <img :src="'static/latestnews.png'" alt="">
      </div>
      <ul class="row signup_text" @click="urlFrame">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
          <img :src="'static/signup_image.png'" alt="">
        </li>
      </ul>
      <ul class="row signup_text" @click="urlFrame">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
          <img :src="'static/signup_image.png'" alt="">
        </li>
      </ul>
      <ul class="row signup_text">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
        </li>
      </ul>
      <ul class="row signup_text">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
        </li>
      </ul>
      <ul class="row signup_text">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
        </li>
      </ul>
      <ul class="row signup_text">
        <li class=""></li>
        <li class="col">
          <div>6月例出游季，6月21-22日龙王溪</div>
        </li>
        <li class="">
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
// import api from '../api'

export default {
  name: 'Team',
  data () {
    return {
      Logo: '../static/img/logo.png',
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

  methods: {
    urlFrame () {
      this.$router.push({ path: '/event' })
    },

    closeFrame () {
      this.$router.go(-1)
    }
  },

  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
@import '../css/team.css';
</style>
