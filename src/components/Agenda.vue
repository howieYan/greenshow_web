<template>
<div>
	<div>
		<div class="header" id="header">
		    <ul class="row">
		        <li class="back1" tapmode="hover" @click="closeFrame"></li>
		        <li class="col textCenter5">
		            赛程
		        </li>
		        <li class="right_width" style="width:67px;"></li>
		    </ul>
		</div>
		<div class="padding_t64_height" style="padding-top:50px;">
		    <div class="line_height60_bottom1">
		        <ul class="row">
		            <li class="col padding_left20px">2017年6月例赛</li>
		            <li class="padding_right20px">美兰湖</li>
		        </ul>
		        <ul class="padding_left20px padding_right20px_li">
		            <li class="">
		                5月23日
		            </li>
		            <li class="">
		                周三
		            </li>
		            <li class="">
		                13:30开球
		            </li>
		            <li class="right_image_padding10">
		                <img :src="'/static/signup_image.png'" alt="">
		            </li>
		        </ul>
		    </div>
		    <div class="line_height60_bottom1">
		        <ul class="row">
		            <li class="col padding_left20px">2017年6月例赛</li>
		            <li class="padding_right20px">美兰湖</li>
		        </ul>
		        <ul class="padding_left20px padding_right20px_li">
		            <li class="">
		                5月23日
		            </li>
		            <li class="">
		                周三
		            </li>
		            <li class="">
		                13:30开球
		            </li>
		            <li class="right_image_padding10">
		                <img :src="'/static/signup_image1.png'" alt="">
		            </li>
		        </ul>
		    </div>
		    <div class="line_height60_bottom1">
		        <ul class="row">
		            <li class="col padding_left20px">2017年6月例赛</li>
		            <li class="padding_right20px">美兰湖</li>
		        </ul>
		        <ul class="padding_left20px padding_right20px_li">
		            <li class="">
		                5月23日
		            </li>
		            <li class="">
		                周三
		            </li>
		            <li class="">
		                13:30开球
		            </li>
		            <li class="right_image_padding10">
		                <img :src="'/static/signup_image2.png'" alt="">
		            </li>
		        </ul>
		    </div>
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

