<template>
<div>
  <div class="header" id="header">
      <ul class="row">
          <li class="back1" tapmode="hover" @click="closeFrame"></li>
          <li class="col textCenter5">
              历史
          </li>
          <li class="right_width"></li>
      </ul>
  </div>
  <div class="padding_t64_height">
      <img class="width_height" :src="'/static/automobile.png'" alt="">
      <div class="div_img_jiantou">
          <img :src="'/static/jiantou.png'" alt="">
          <div class="section_title_height">
              <ul class="row">
                  <li class="border_radius">
                      <div></div>
                  </li>
                  <li class="col">
                      <div class="module_box">
                          2017年4月，远行当选优仕队队长
                          <div class="triangle_border_left">

                          </div>

                      </div>
                  </li>
              </ul>
          </div>
          <div class="border1_height10px"></div>
          <div class="section_title_height">
              <ul class="row">
                  <li class="border_radius_color_a9b217">
                      <div></div>
                  </li>
                  <li class="col">
                      <div class="module_box">
                          2017年1月队委成员名单更新
                          <div class="triangle_border_left">

                          </div>

                      </div>
                  </li>
              </ul>
          </div>
          <div class="border1_height10px"></div>
          <div class="section_title_height">
              <ul class="row">
                  <li class="border_radius_color_5bd3db">
                      <div></div>
                  </li>
                  <li class="col">
                      <div class="module_box">
                          2016年1月优仕队连续6年获得康桥 亲水湾赞助
                          <div class="triangle_border_left">

                          </div>

                      </div>
                  </li>
              </ul>
          </div>
          <div class="border1_height10px"></div>
          <div class="section_title_height">
              <ul class="row">
                  <li class="border_radius_color_db825b">
                      <div></div>
                  </li>
                  <li class="col">
                      <div class="module_box">
                          2017年1月队委成员名单更新
                          <div class="triangle_border_left">

                          </div>

                      </div>
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
@import '../css/reset.css';
</style>

