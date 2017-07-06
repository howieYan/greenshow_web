<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              相册
          </li>
          <li class="right_width"></li>
      </ul>
  </div>
  <div class="padding_t64_height" id="body">
      <div class="width_150px" v-for="titleList in title">
          <img :src="'/static/automobile.png'" alt="">
          <p>{{ titleList.titleN }}</p>
      </div>
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
      },
      title: [
        { titleN: '2017年4月例赛' },
        { titleN: '2017年5月例赛' },
        { titleN: '2017年6月例赛' },
        { titleN: '2017年7月例赛' },
        { titleN: '2017年8月例赛' },
        { titleN: '2017年9月例赛' }
      ]
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
    closeFrame () {
      this.$router.go(-1)
    }
  },

  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../css/reset.css';
</style>

