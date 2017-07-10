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
      <div class="width_150px" v-for="n in 8">
          <img :src="'/static/automobile.png'" alt="">
          <p>2017年6月例赛</p>
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

