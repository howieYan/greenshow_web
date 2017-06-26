<template>
  <div>
<!--球队header-->
    <div class="header1">
      <ul class="row">
        <li class="back" @click="closeFrame"></li>
        <li class="textCenter textCenter0 col">
          <img :src="'static/logo_header.png'" alt="">
          <div class="row string padding_Top10">
            <div class="col">
              <div>81</div>
              <b>平均成绩</b>
            </div>
            <div class="col">
              <div>40</div>
              <b>球队人数</b>
            </div>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="clearfix"></div>
    <div class="section_title">
      <ul class="row">
        <li class="col">
          <img :src="'static/notice.png'" alt="">
          <div>公告</div>
        </li>
        <li class="col">
          <img :src="'static/schedule.png'" alt="">
          <div>赛程</div>
        </li>
        <li class="col">
          <img :src="'static/regulations.png'" alt="">
          <div>章程</div>
        </li>
        <li class="col">
          <img :src="'static/player.png'" alt="">
          <div>球员</div>
        </li>
      </ul>
      <ul class="row">
        <li class="col">
          <img :src="'static/ranking.png'" alt="">
          <div>排行</div>
        </li>
        <li class="col">
          <img :src="'static/history.png'" alt="">
          <div>历史</div>
        </li>
        <li class="col">
          <img :src="'static/honor.png'" alt="">
          <div>荣誉</div>
        </li>
        <li class="col">
          <img :src="'static/photoalbum.png'" alt="">
          <div>相册</div>
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
</style>
