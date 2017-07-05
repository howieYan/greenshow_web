<template>
<div>
	 <div class="header" id="header">
        <ul class="row">
            <li class="back1" tapmode="hover" @click="closeFrame"></li>
            <li class="col textCenter5">
                公告
            </li>
            <li class="right_width"></li>
        </ul>
    </div>
    <div class="padding_t64_height">
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
                <img :src="'/static/signup_image.png'" alt="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
            </li>
        </ul>
        <ul class="row height50">
            <li class="border_radius line_height_center">
                <b></b>
            </li>
            <li class="col">
                6月例赛出游季，6月21-22日龙王溪6月例赛出游季，6月21-22日龙王溪
            </li>
            <li class="">
            </li>
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
</style>
