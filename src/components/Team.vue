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
              <div>{{ team.AverageScore }}</div>
              <b>平均成绩</b>
            </div>
            <div class="col">
              <div>{{ team.MemberCount }}</div>
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
      <ul class="row signup_text" @click="urlFrame(record)" v-for="record in events.list">
        <li class=""></li>
        <li class="col">
          <div>{{ record.Name }}</div>
        </li>
        <li v-if="record.Status === 0" class="">
          <img :src="'static/signup_image.png'" alt="">
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Team',
  data () {
    return {
      blank: {
        Logo: '../static/img/logo.png',
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
        this.team = api.isValid(result) ? result.data : this.blank

        result = await api.listEvent(this.id, 'team', this.events.page, this.events.size)
        console.debug(`%o`, result)
        this.events.list = api.isValid(result) ? result.data : []
      }
      catch (e) {
        console.error(e)
      }
    },

    urlFrame (event) {
      console.debug(`Click to open: %o`, event)
      this.$router.push({ path: `/event/${event.Id}` })
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
