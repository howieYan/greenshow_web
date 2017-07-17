<template>
<div>
	<div class="header" id="header">
	    <ul class="row">
	        <li class="back1" tapmode="hover"  @click="closeFrame"></li>
	        <li class="col textCenter5">
	            球员
	        </li>
	        <li class="right_width"></li>
	    </ul>
	</div>
	<div class="padding_t64_height">
	    <div class="height_40_header">当前人数40人</div>
	    <div class="height_60_border">
	        <ul class="row">
	            <li class="width_image_height">
	                <img :src="'/static/apply_1.png'" alt="">
	            </li>
	            <li class="col">
	                <p class="line_height_55_title color_0e709d">远行</p>
	                <p style="line-height: 0px;font-size: 12px;" class="color_7a7a7a">对内职务一对长</p>
	            </li>
	            <li>
	                <p class="line_height_55_title padding_right20px_color_000"><b>差点：</b>9</p>
	                <p style="line-height: 0px;" class="padding_right20px_color_7a7a7a color_7a7a7a">42</p>
	            </li>
	        </ul>
	    </div>
	    <div class="height_60_border">
	        <ul class="row">
	            <li class="width_image_height">
	                <img :src="'/static/apply_1.png'" alt="">
	            </li>
	            <li class="col">
	                <p class="line_height_55_title color_0e709d">远行</p>
	                <p style="line-height: 0px;font-size: 12px;" class="color_7a7a7a">对内职务一对长</p>
	            </li>
	            <li>
	                <p class="line_height_55_title padding_right20px_color_000"><b>差点：</b>9</p>
	                <p style="line-height: 0px;" class="padding_right20px_color_7a7a7a color_7a7a7a">42</p>
	            </li>
	        </ul>
	    </div>
	    <div class="height_60_border">
	        <ul class="row">
	            <li class="width_image_height">
	                <img :src="'/static/apply_1.png'" alt="">
	            </li>
	            <li class="col">
	                <p class="line_height_55_title color_0e709d">远行</p>
	                <p style="line-height: 0px;font-size: 12px;" class="color_7a7a7a">对内职务一对长</p>
	            </li>
	            <li>
	                <p class="line_height_55_title padding_right20px_color_000"><b>差点：</b>9</p>
	                <p style="line-height: 0px;" class="padding_right20px_color_7a7a7a color_7a7a7a">42</p>
	            </li>
	        </ul>
	    </div>
	    <div class="height_60_border">
	        <ul class="row">
	            <li class="width_image_height">
	                <img :src="'/static/apply_1.png'" alt="">
	            </li>
	            <li class="col">
	                <p class="line_height_55_title color_0e709d">远行</p>
	                <p style="line-height: 0px;font-size: 12px;" class="color_7a7a7a">对内职务一对长</p>
	            </li>
	            <li>
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

