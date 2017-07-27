<template>
<div>
	<div class="header" id="header">
	    <ul class="row">
	        <li class="back1" tapmode="hover" @click="closeFrame"></li>
	        <li class="col textCenter5">
	            近一场排名
	        </li>
	        <li class="right_width" style="width:67px;"></li>
	    </ul>
	</div>
	<div class="padding_t64" style="padding-top:50px;">
	    <ul class="row height_40_border_top_bottom background_color_odd_event">
	        <li class="col">排名</li>
	        <li class="col">姓名</li>
	        <li class=""style="width:13%;padding-right:10px;">杆差</li>
	        <li class=""style="width:13%;padding-left:10px;">已完成</li>
	        <li class="col">前9</li>
	        <li class="col">后9</li>
	        <li class="col">总杆</li>
	    </ul>
	    <ul class="row height_40_border0" v-for="(record, i) in data">
	        <li class="col">{{ i + 1 }}</li>
	        <li class="col">{{ record.name }}</li>
	        <li class="col" style="color: red;">{{ record.currentRoundToPar }}</li>
	        <li class="col" style="">{{ record.thru !== 18 ? record.thru : 'F' }}</li>
	        <li class="col">{{ record.outScore }}</li>
	        <li class="col">{{ record.inScore }}</li>
	        <li class="col">{{ record.grossStroke }}</li>
	    </ul>
	</div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'Seniority',
  data () {
    return {
      name: 'SeniorityV',
      pager: {
        page: 0,
        size: 10
      },
      total: 0,
      data: null
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
        this.total = 0
        this.data = []
        let result = null // await api.listPlayer(this.id, 'team', this.pager.page, this.pager.size)
        console.debug(`%o`, result)
        this.total = api.isValid(result) && result.total ? result.total : 0
        this.data = api.isValid(result) && result.data ? result.data : []
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

