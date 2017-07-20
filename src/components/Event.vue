<template>
  <div>
    <div class="header" id="header">
    <ul class="row">
    <li v-bind:style="{ opacity: inApp ? '0' : '1' }" class="back1" tapmode="hover" @click="closeFrame"></li>
    <li class="col textCenter5">
      活动主页
    </li>
    <li class="share" @click="noticeFrame">
      分享
    </li>
    </ul>
    <div id="wrapper" class="flex-wrap" >
    <div id="iscroll" class="flex-con" >
      <div class="con">
      <ul class="scroll_ul row" id="active">
        <li tapmode="hover" onclick="selectTag('nav1',this)" class="cur" id="col1">
        报名
        </li>
        <li tapmode="hover" onclick="selectTag('nav2',this)" class="" id="col2">
        分组
        </li>
        <li tapmode="hover" onclick="selectTag('nav3',this)" class="" id="col3">
        总杆排名
        </li>
        <li tapmode="hover" onclick="selectTag('nav4',this)" class="" id="col4">
        净杆排名
        </li>
        <li tapmode="hover" onclick="selectTag('nav5',this)" class="" id="col5">
        获取结果
        </li>
        <li tapmode="hover" onclick="selectTag('nav6',this)" class="" id="col6">
        图片
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
  <div id="nav_1" style="padding-top:88px;">
    <div id="nav1" class="nav selected">
    <div class="height">
      活动信息
    </div>
    <div class="bgColor">
      <ul class="row">
        <li class="">活动名称</li>
        <li class="col">{{ event.name }}</li>
      </ul>
      <ul class="row">
        <li class="">开球时间</li>
        <li class="col">{{ formatTs(event.startDate, 'YYYY-MM-DD') }}</li>
      </ul>
      <ul class="row">
        <li class="">活动地点</li>
        <li class="col">{{ event.place }}</li>
      </ul>
      <ul class="row">
        <li class="">其他信息</li>
        <li class="col" v-html=" event.summary "></li>
      </ul>
    </div>
    <div class="button0" @click="clickEnter">
      点击报名
    </div>
    <div class="padding_t">
      <b>已报名/{{ event.enterCount }}人</b>
    </div>
    <div class="apply"  >
      <ul class="" >
      <li class="widthHeight" v-for="record in event.players">
        <img :src="record.avatar ? record.avatar : 'static/apply_1.png'" alt="">
        <div>{{ record.name }}</div>
      </li>
      </ul>
    </div>
    </div>
    <div id="nav2" class="nav">
    <div class="text_header">
      <div class="header0">
      <ul class="row">
        <li class="col" v-for="first in packet">
        <b style="padding-left:10px;">{{ first.aplystring }}</b>
        <b>{{ first.string }}</b>
        </li>

      </ul>
      </div>
      <div class="module padding_t10">
      <div class="text_center">
        <ul class="row">
        <li class="width_40">
          <div class="one">
          第一组
          </div>
          <div class="two">
          1号洞
          </div>
          <div class="three">
          10:00
          </div>
        </li>
        <li class="col" v-for="first in aplyname">
          <p><img :src="'static/apply_1.png'" alt="">
          </p>
          <b>{{ first.name }}</b>
          <b class="border"></b>
        </li>
        </ul>
      </div>
      </div>
      <div class="module">
      <div class="text_center">
        <ul class="row">
        <li class="width_40">
          <div class="one">
          第二组
          </div>
          <div class="two">
          1号洞
          </div>
          <div class="three">
          10:00
          </div>
        </li>
        <li class="col" v-for="first in aplyname">
          <p><img :src="'static/apply_1.png'" alt="">
          </p>
          <b>{{ first.name }}</b>
          <b class="border"></b>
        </li>
        </ul>
      </div>
      </div>
    </div>
    </div>
    <div id="nav3" class="nav">
    <div class="title">
      <ul class="row">
      <li class="col" v-for="title in ranking.list[0].title">
        {{ title }}
      </li>

      </ul>
      <ul class="row" v-for="player in ranking.list[0].list">
      <li class="col">{{ player.Number }}</li>
      <li class="col">{{ player.Name }}</li>
      <li class="col" style="color:red;">{{ player.Measure }}</li>
      <li class="col">{{ player.Done }}</li>
      <li class="col">{{ player.Before }}</li>
      <li class="col">{{ player.Reak }}</li>
      <li class="col">{{ player.Gross }}</li>
      </ul>

    </div>
    </div>
    <div id="nav4" class="nav">
    <div class="title">
      <ul class="row">
      <li class="col" v-for="title in ranking.list[1].title">
        {{ title }}
      </li>
      </ul>
      <ul class="row" v-for="player in ranking.list[1].list">
      <li class="col">{{ player.Number }}</li>
      <li class="col">{{ player.Name }}</li>
      <li class="col red">{{ player.Measure }}</li>
      <li class="col">{{ player.Gross }}</li>
      <li class="col">{{ player.Tee }}</li>
      </ul>

    </div>
    </header>
    </div>
    <div id="nav5" class="nav">
    <div class="title">
      <ul class="row">
      <li class="col" v-for="title in ranking.list[2].title">
        {{ title }}
      </li>
      </ul>
      <ul class="row" v-for="player in ranking.list[2].list">
      <li class="col">{{ player.Didnt }}</li>
      <li class="col">{{ player.Name }}</li>
      <li class="col red">{{ player.Award }}</li>
      </ul>
    </div>
    </div>
    <div id="nav6" class="nav">
        <article class="htmleaf-container">
          <div class="demo">
            <div class="demo__content">

            <div class="demo__card-cont">
              <div class="demo__card" v-for="n in 5">
                <div class="slideCss">
                  <img :src="'/static/bg_nav_6.png'">
                  <p>
                    <b class="font_size_weight">TO:</b>
                    <b class="font_size_weight_b">SOMEONE</b>
                  </p>
                  <p class="font_size_12">留白</p>
                  <p class="font_size_12">用白色明信片</p>
                  <p class="font_size_12">框住每一个偶遇</p>
                  <div class="row margin_Top10">
                    <ul class="border_width">
                      <li><b>May,</b><b>25</b></li>
                      <li><b>2015</b></li>
                      <li><b>+</b></li>
                    </ul>
                    <ul class="col line_height_bottom">
                      <li><b>by:</b><b>SOMEONE</b></li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </article>
    </div>
  </div>
  </div>
</template>

<script>
import api from '../api'
import * as lib from '../lib'
import '../script/swiper.js'
import '../script/swiper.min.js'
export default {
  name: 'Event',
  data () {
    return {
      name: 'EventV',
      event: {},
      aplyname: [
        { name: '远行0' },
        { name: '远行1' },
        { name: '远行2' },
        { name: '远行3' }
      ],
      packet: [
        { aplystring: '报名人数：', string: '20人' },
        { aplystring: '球队人数：', string: '20人' },
        { aplystring: '嘉宾:', string: '20人' }
      ],
      ranking: {
        index: 0,
        list: [
          {
            title: ['排名', '姓名', '距标准杆', '已完成', '前9', '后9', '总杆'],
            list: [
              { Number: 1, Name: '陈坚', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 },
              { Number: 2, Name: '陈坚', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 },
              { Number: 3, Name: '陈坚', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 },
              { Number: 4, Name: '陈坚', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 },
              { Number: 5, Name: '陈坚', Measure: -3, Done: 'F', Before: 34, Reak: 35, Gross: 69 }
            ]
          },
          {
            title: ['排名', '姓名', '差点', '总杆', '净杆'],
            list: [
              { Number: 1, Name: '陈坚', Measure: -3, Gross: '69', Tee: 68.6 },
              { Number: 2, Name: '陈坚', Measure: -3, Gross: '69', Tee: 68.6 },
              { Number: 3, Name: '陈坚', Measure: -3, Gross: '69', Tee: 68.6 },
              { Number: 4, Name: '陈坚', Measure: -3, Gross: '69', Tee: 68.6 },
              { Number: 5, Name: '陈坚', Measure: -3, Gross: '69', Tee: 68.6 }
            ]
          },
          {
            title: ['奖项名称', '获奖人', '奖品'],
            list: [
              { Didnt: '总冠', Name: '陈坚', Award: '1#木' },
              { Didnt: '总冠', Name: '陈坚', Award: '1#木' },
              { Didnt: '总冠', Name: '陈坚', Award: '1#木' },
              { Didnt: '总冠', Name: '陈坚', Award: '1#木' },
              { Didnt: '总冠', Name: '陈坚', Award: '1#木' }
            ]
          }
        ]
      }
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    },

    inApp () {
      return !!this.$route.query.token
    }
  },

  created () {
    this.loadData()
  },

  methods: {
    formatTs: lib.formatTs,

    async loadData () {
      try {
        // this.team = this.blank
        let result = await api.getEvent(this.id, 'all')
        console.debug(`%o`, result)
        this.event = api.isValid(result) ? result.data : {}
      }
      catch (e) {
        console.error(e)
      }
    },
    noticeFrame (event) {
      this.$router.push({ path: `/Share/` })
    },
    closeFrame () {
      this.$router.go(-1)
    },

    clickEnter () {
      console.log(`${this.name}.clickEnter`)
      this.$router.replace({path: '/login', query: { redirect: this.$router.currentRoute.fullPath }})
    }
  },

  mounted () {
/* eslint-disable  */
    var arrli=document.getElementById("active").getElementsByTagName("li");
    var arrdiv=document.getElementById("nav_1").children;
    for(var i=0;i<arrli.length;i++){
      arrli[i].onclick=li_mouseenter;
    }
    function li_mouseenter() {
      for(var i=0;i<arrli.length;i++){
        if(arrli[i]==this){
          arrli[i].className="cur";
          arrdiv[i].className="selected";
        }else {
          arrli[i].className="";
          arrdiv[i].className="";
        }
      }
    }
/* eslint-enable  */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/resetd.css';
</style>
