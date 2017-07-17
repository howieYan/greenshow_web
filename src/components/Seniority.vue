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
	    <ul class="row height_40_border_top_bottom background_color_odd_event">
	        <li class="col">排名</li>
	        <li class="col">姓名</li>
	        <li class=""style="width:13%;padding-right:10px;">距标准杆</li>
	        <li class=""style="width:13%;padding-left:10px;">已完成</li>
	        <li class="col">前9</li>
	        <li class="col">后9</li>
	        <li class="col">总杆</li>
	    </ul>
	    <ul class="row height_40_border0" v-for="n in 5">
	        <li class="col">1</li>
	        <li class="col">许韫</li>
	        <li class="col" style="color: red;">-3</li>
	        <li class="col" style="">F</li>
	        <li class="col">34</li>
	        <li class="col">35</li>
	        <li class="col">69</li>
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
@import '../css/resetd.css';
</style>

