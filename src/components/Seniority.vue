<template>
<div>
	<div class="header" id="header">
	    <ul class="row">
	        <li class="back1" tapmode="hover" @click="closeFrame"></li>
	        <li class="col textCenter5">
	            近一场排名
	        </li>
	        <li class="right_width"></li>
	    </ul>
	</div>
	<div class="padding_t64">
	    <ul class="row height_40_border_top_bottom background_color_odd_event" >
	        <li class="col" v-for="title in ranking.list[0].title">{{ title }}</li>
	    </ul>
	    <ul class="row height_40_border0" v-for="grade in ranking.list[0].linst">
	        <li class="col">{{ grade.Number }}</li>
	        <li class="col">{{ grade.Name }}</li>
	        <li class="col" style="color: red;">{{ grade.Measure }}</li>
	        <li class="col" style="">{{ grade.Done }}</li>
	        <li class="col">{{ grade.Before }}</li>
	        <li class="col">{{ grade.Reak }}</li>
	        <li class="col">{{ grade.Gross }}</li>
	    </ul>
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
      ranking: {
        index: 0,
        list: [
          {
            title: ['排名', '姓名', '距标准杆', '已完成', '前9', '后9', '总杆'],
            linst: [
                { Number: 1, Name: '许韫', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 },
                { Number: 2, Name: '张三', Measure: -3, Done: 'F', Before: 32, Reak: 34, Gross: 67 },
                { Number: 3, Name: '许韫', Measure: -3, Done: 'F', Before: 25, Reak: 33, Gross: 65 },
                { Number: 4, Name: '许韫', Measure: -3, Done: 'F', Before: 22, Reak: 32, Gross: 64 },
                { Number: 5, Name: '许韫', Measure: -3, Done: 'F', Before: 20, Reak: 31, Gross: 62 },
                { Number: 6, Name: '许韫', Measure: -3, Done: 'F', Before: 19, Reak: 30, Gross: 60 },
                { Number: 7, Name: '许韫', Measure: -3, Done: 'F', Before: 15, Reak: 29, Gross: 58 }
            ]
          }
        ]
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

