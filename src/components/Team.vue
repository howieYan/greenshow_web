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
              <div>{{ team.averageScore }}</div>
              <b>平均成绩</b>
            </div>
            <div class="col">
              <div>{{ team.memberCount }}</div>
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
        <li class="col" @click="noticeFrame">
          <img :src="'static/notice.png'" alt="">
          <div>公告</div>
        </li>
        <li class="col" @click="agendaFrame">
          <img :src="'static/schedule.png'" alt="">
          <div>赛程</div>
        </li>
        <li class="col" @click="statuteFrame">
          <img :src="'static/regulations.png'" alt="">
          <div>章程</div>
        </li>
        <li class="col" @click="playerFrame">
          <img :src="'static/player.png'" alt="">
          <div>队员</div>
        </li>
      </ul>
      <ul class="row">
        <li class="col" @click="seniorityFrame">
          <img :src="'static/ranking.png'" alt="">
          <div>排行</div>
        </li>
        <li class="col" @click="historyFrame">
          <img :src="'static/history.png'" alt="">
          <div>历史</div>
        </li>
        <li class="col" @click="honorFrame">
          <img :src="'static/honor.png'" alt="">
          <div>荣誉</div>
        </li>
        <li class="col" @click="photoFrame">
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
          <div>{{ record.name }}</div>
        </li>
        <li v-if="record.status === 0" class="">
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
      name: 'TeamV',
      blank: {
        logo: '../static/img/logo.png',
        name: '',
        averageScore: '无',
        playerCount: 0
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
      console.debug(`${this.Name}.click to open: %o`, event)
      this.$router.push({ path: `/event/${event.id}` })
    },
    noticeFrame (event) {
      this.$router.push({ path: `/notice`, query: { id: this.id } })
    },
    agendaFrame (event) {
      this.$router.push({ path: `/agenda`, query: { id: this.id } })
    },
    statuteFrame (event) {
      this.$router.push({ path: `/Statute/` })
    },
    playerFrame (event) {
      this.$router.push({ path: `/teamPlayer`, query: { id: this.id } })
    },
    seniorityFrame (event) {
      this.$router.push({ path: `/Seniority/` })
    },
    historyFrame (event) {
      this.$router.push({ path: `/history`, query: { id: this.id } })
    },
    honorFrame (event) {
      this.$router.push({ path: `/honor`, query: { id: this.id } })
    },
    photoFrame (event) {
      this.$router.push({ path: `/photo`, query: { id: this.id } })
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
@import '../css/resetd.css';
</style>
