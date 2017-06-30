<template>
  <div>
    <header>
      <ul class="row">
        <li class="back2" @click="closeFrame"></li>
        <li class="col textCenter1">
          高领云
        </li>
      </ul>
    </header>
    <div id="swipe" class="swipe">
      <div class="swipe-wrap" id="swipe_banner">
        <div class="swipe-box">
          <img :src="'static/automobile0.jpg'" alt="">
          <p class="p">高尔夫，一个幸福快乐的大家庭</p>
        </div>
        <div class="swipe-box">
          <img :src="'static/automobile1.jpg'" alt="">
          <p class="p">九龙山争霸赛，谁将夺冠？</p>
        </div>
        <div class="swipe-box">
          <img :src="'static/automobile2.jpg'" alt="">
          <p class="p">亲水湾一优仕队   六周年庆典，共享狂欢Party</p>
        </div>
      </div>
      <div class="title-box">
        <ul class="title-box-ul">
          <li class="active"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="margin_auto">
      <div class="section">
        <!--合作组织标题-->
        <div class="section_header row">
          <b class=""></b>
          <b class="col">合作组织</b>
        </div>
        <!-- Swiper -->
        <div class="swipe-box_1">
          <div class="swipe-box_1_width" id="nav">

            <div class="swipe-box_1_width_fl" id="offsetWidth" @click="urlFrame(record)" v-for="record in teams.list">
              <div>
                <img :src="record.Logo" alt="">
                <b class="b">{{record.Name}}</b>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="margin_auto">
      <div class="section">
        <!--SGCU系列赛排名-->
        <div class="section_header row margin_Top">
          <b class=""></b>
          <b class="col">SGCU系列赛排名</b>
        </div>
        <div class="swiper-container">
          <div class="swiper-wrapper" id="opacity">
            <div v-if="players.index>=0" class="opacity ">
              <div class="swiper-slide-header">
                <div>
                  {{ players.index + 1 }}st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left" id="padding_left">
                      <div class="width_image">
                        <img :src="players.list[players.index].Avatar" alt="" id="Image">
                        <p class="texe_image_title_all">{{ players.list[players.index].Name }}</p>
                        <div class="bg_logo" id="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                         {{ scores[players.index].title }}
                      </p>
                      <div class="border_bottom"></div>
                      <p>技术指标</p>
                      <div class="line_height">
                        平均推杆数
                      </div>
                      <div class="line_height">
                        PAR3表现
                      </div>
                      <div class="line_height">
                        PAR4表现
                      </div>
                      <div class="line_height">
                        PAR5表现
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b text_right text_align_right_paiming">
                      <p>Total pole</p>
                      <p>{{ scores[players.index].stroke }}</p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        {{ scores[players.index].putt }}
                      </div>
                      <div class="line_height">
                        {{ scores[players.index].par3 }}
                      </div>
                      <div class="line_height">
                        {{ scores[players.index].par4 }}
                      </div>
                      <div class="line_height">
                        {{ scores[players.index].par5 }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable " id="pagination">
          <span class="swiper-pagination-bullet" @click="players.index = i" v-bind:class="{ 'swiper-pagination-bullet-active': i === players.index }" v-for="(record, i) in players.list">
            <i>{{ i + 1 }}</i>
          </span>
        </div>
      </div>
    </div>
    <div class="clearfix0"></div>
    <div class="margin_auto">
      <div class="section">
        <!--排行榜-->
        <div class="section_header row margin_Top">
          <b class=""></b>
          <b class="col">排行榜(2017)</b>
        </div>
        <div id="swipelb" class="swipe">
          <div class="swipe-wrap">
            <div v-if="ranking.index >= 0" class="swipe-box">
              <div class="swiper-slide-header_ph">
                <div class="bestResult">
                  <p>{{ ranking.list[ranking.index].category }}</p>
                </div>
                <div class="nav1">
                  <ul class="row">
                    <li class="col" v-for="title in ranking.list[ranking.index].title"><b>{{ title }}</b></li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row" v-for="player in ranking.list[ranking.index].list">
                    <li class="col"><b>{{ player.Number }}</b></li>
                    <li class="col"><b>{{ player.Name }}</b></li>
                    <li class="col"><b>{{ player.Team }}</b></li>
                    <li class="col"><b>{{ player.Score }}</b></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="title-box title-box_height">
            <ul class="title-box-ul_li row">
              <li @click="ranking.index = i" v-bind:class="{ active: i === ranking.index }" v-for="(n, i) in ranking.list.length" class="col">
                  {{i+1}}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="clearfix"></div>
    <div class="footer">
      <div class="section_header row margin_Top">
        <b class=""></b>
        <b class="col">推荐人物</b>
      </div>
      <div class="title_tj">
        <ul class="row">
          <li class="col title_tj_img">
            <div class="title_tj_img_border">
              <img :src="'static/qiu0.png'" alt="">
              <p>冯珊珊</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国女子高尔夫球运动员。中国历史第一块奥运高尔夫球奖牌获得者  。2012年LPGA锦标赛（大满贯赛）冠军得主。</b>
            </div>
          </li>
          <li style="width: 10px"></li>
          <li class="col title_tj_img">
            <div class="title_tj_img_border">
              <img :src="'static/qiu1.jpg'" alt="">
              <p>李昊桐</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10岁开始学习高尔夫，2008年开始以业余球员的身份参加汇丰青少年公开赛各站赛事的比赛。在2009年全国业余高尔夫球希望赛上，年仅14岁的他在珠海金湾高尔夫球场连续三天领先</b>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="debug" style="text-align: center;background: #f5f5f5;line-height:32px;">{{ version }}</div>
   </div>
</template>

<script>
// import '../script/swiper.js'
import '../script/swiper.min.js'
import api from '../api'
import * as lib from '../lib'

export default {
  name: 'Home',
  data () {
    return {
      version: lib.version,
      debug: lib.debug,

      teams: {
        page: 0,
        size: 5,
        list: []
      },
      players: {
        page: 0,
        size: 5,
        index: -1,
        list: []
      },
      scores: [
        { title: '冠军', stroke: 68, putt: 2, par3: 3.1, par4: 4.3, par5: 4.8 },
        { title: '季军', stroke: 69, putt: 2, par3: 3.5, par4: 4.2, par5: 5 },
        { title: '亚军', stroke: 70, putt: 2.2, par3: 3.1, par4: 4, par5: 4.8 },
        { title: 4, stroke: 71, putt: 2, par3: 2.9, par4: 3.9, par5: 4.7 },
        { title: 5, stroke: 72, putt: 2, par3: 2.7, par4: 3.8, par5: 4.5 }
      ],
      ranking: {
        index: 0,
        list: [
          {
            category: '最好成绩',
            title: ['名次', '姓名', '球队', '杆数'],
            list: [
              { Number: 1, Name: '扫荡腿', Team: '优仕队', Score: 69 },
              { Number: 2, Name: 'Afei', Team: '复旦队', Score: 71 },
              { Number: 3, Name: '蔡苏刚', Team: '鹰之队', Score: 70 }
            ]
          },
          {
            category: '差点排名',
            title: ['名次', '姓名', '球队', '差点'],
            list: [
              { Number: 1, Name: '扫荡腿', Team: '优仕队', Score: 7.1 },
              { Number: 2, Name: 'Afei', Team: '复旦队', Score: 7.5 },
              { Number: 3, Name: '蔡苏刚', Team: '鹰之队', Score: 7.9 }
            ]
          },
          {
            category: '平均成绩',
            title: ['名次', '姓名', '球队', '杆数'],
            list: [
              { Number: 1, Name: '扫荡腿', Team: '优仕队', Score: 69 },
              { Number: 2, Name: 'Afei', Team: '复旦队', Score: 71 },
              { Number: 3, Name: '蔡苏刚', Team: '鹰之队', Score: 70 }
            ]
          },
          {
            category: '小鸟数',
            title: ['名次', '姓名', '球队', '数量'],
            list: [
              { Number: 1, Name: '扫荡腿', Team: '优仕队', Score: 20 },
              { Number: 2, Name: 'Afei', Team: '复旦队', Score: 10 },
              { Number: 3, Name: '蔡苏刚', Team: '鹰之队', Score: 15 }
            ]
          },
          {
            category: '老鹰数',
            title: ['名次', '姓名', '球队', '数量'],
            list: [
              { Number: 1, Name: '扫荡腿', Team: '优仕队', Score: 20 },
              { Number: 2, Name: 'Afei', Team: '复旦队', Score: 10 },
              { Number: 3, Name: '蔡苏刚', Team: '鹰之队', Score: 15 }
            ]
          }
        ]
      }
    }
  },

  computed: {
    activePlayer () {
      return this.index >= 0 ? this.players.list[this.index] : null
    }
  },

  methods: {
    async loadData () {
      try {
        let result = await api.listTeam('home', this.teams.page, this.teams.size)
        console.debug(`%o`, result)
        this.teams.list = api.isValid(result) ? result.data : []
        result = await api.listPlayer('home', this.teams.page, this.teams.size)
        console.debug(`%o`, result)
        if (api.isValid(result) && result.data.length > 0) {
          this.players.list = api.isValid(result) ? result.data : []
          this.players.index = 0
        }
        else {
          this.players.list = []
          this.players.index = -1
        }
      }
      catch (e) {
        console.error(e)
      }
    },

    urlFrame (team) {
      console.debug(`Click to open: %o`, team)
      this.$router.push({ path: `/team/${team.Id}` })
    },

    closeFrame () {
      this.$router.go(-1)
    }
  },

  created () {
    this.loadData()
  },

  mounted () {
  },

  updated () {
    console.debug(`${this.name}.updated`)
    let nav = document.getElementById('nav')
    let navLength = nav.children.length
    let e = document.getElementById('offsetWidth')
    if (e) {
      let offsetWidth = e.offsetWidth
      nav.style.width = navLength * (offsetWidth + 5) + 10 + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
</style>
