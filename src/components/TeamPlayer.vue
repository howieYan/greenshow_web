<template>
<div>
	<div class="header" id="header">
	    <ul class="row">
	        <li class="back1" tapmode="hover"  @click="closeFrame"></li>
	        <li class="col textCenter5">
	            队员
	        </li>
	        <li class="right_width" style="width:67px;"></li>
	    </ul>
	</div>
	<div class="padding_t64_height"style="padding-top:50px;">
	    <div class="height_40_header">当前人数 {{ total }} 人</div>
	    <div class="height_60_border" v-for="record in data">
	        <ul class="row">
	            <li class="width_image_height">
	                <img :src="record.avatar ? record.avatar : 'static/logo.png'" alt="">
	            </li>
	            <li class="col">
	                <p class="line_height_55_title color_0e709d"> {{record.name}} </p>
	                <p style="line-height: 0px;font-size: 12px;" class="color_7a7a7a"></p>
	            </li>
	            <li v-show='false'>
	                <p class="line_height_55_title padding_right20px_color_000"><b>差点：</b>9</p>
	                <p style="line-height: 0px;" class="padding_right20px_color_7a7a7a color_7a7a7a">42</p>
	            </li>
	        </ul>
	    </div>
	</div>
</div>
</template>
<script>
import api from '../api'

export default {
  name: 'TeamPlayer',
  data () {
    return {
      name: 'TeamPlayerV',
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
      return this.$route.query.id
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
        let result = await api.listTeamPlayer(this.id, 'all', this.pager.page, this.pager.size)
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

