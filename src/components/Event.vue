<template>
  <div>
    <div class="header" id="header">
    <ul class="row">
    <li class="back1" tapmode="hover" @click="closeFrame"></li>
    <li class="col textCenter5">
      活动主页
    </li>
    <li class="share">
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
  <div id="nav_1">
    <div id="nav1" class="nav selected">
    <div class="height">
      活动信息
    </div>
    <div class="bgColor">
      <ul class="row">
      <li class="">
        活动名称
      </li>
      <li class="col">
        优仕队5月例赛
      </li>
      </ul>
      <ul class="row">
      <li class="">
        开球时间
      </li>
      <li class="col">
        2017.05.30 <b>10:00</b>
      </li>
      </ul>
      <ul class="row">
      <li class="">
        活动地点
      </li>
      <li class="col">
        汤臣高尔夫俱乐部
      </li>
      </ul>
    </div>
    <div class="width">
      <ul class="row">
      <li class="">
        其他信息
      </li>
      <div class="col color_2d2d2d">
        <p class="color_2d2d2d">
        击球费用：￥1200元（含午餐） 签到时间：9:00，开球仪式：9:40，请大家准时 在1号T台集合进行开球仪式。
        </p>
        <p>
        着装要求：绿色队服
        </p>
        <p>
        晚宴地点：农家菜
        </p>
      </div>
      </ul>
    </div>
    <div class="button0">
      点击报名
    </div>
    <div class="padding_t">
      <b>已报名/10人</b>
    </div>
    <div class="apply"  >
      <ul class="row" >
      <li class="col" v-for="n in 4">
        <p><img :src="'static/apply_1.png'" alt="">
        </p>
        <b>远行</b>
      </li>
      </ul>
       <ul class="row">
          <li class="col" v-for="n in 4">
              <p><img :src="'static/apply_1.png'" alt="">
              </p>
              <b>远行</b>
          </li>
      </ul>
    </div>
    </div>
    <div id="nav2" class="nav">
    <div class="text_header">
      <div class="header0">
      <ul class="row">
        <li class="">
        <b style="padding-left:10px;">报名人数：</b>
        <b>20人</b>
        </li>
        <li class="col">
        <b>球队人数：</b>
        <b>20人</b>
        </li>
        <li class="text_r">
        <b>嘉宾：</b>
        <b>20人</b>
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
        <li class="col" v-for="n in 4">
          <p><img :src="'static/apply_1.png'" alt="">
          </p>
          <b>远行</b>
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
        <li class="col" v-for="n in 4">
          <p><img :src="'static/apply_1.png'" alt="">
          </p>
          <b>远行</b>
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
      <li class="col">
        排名
      </li>
      <li class="col">
        姓名
      </li>
      <li class="col">
        距标准杆
      </li>
      <li class="col">
        已完成
      </li>
      <li class="col">
        前9
      </li>
      <li class="col">
        后9
      </li>
      <li class="col">
        总杆
      </li>
      </ul>
      <ul class="row" v-for="n in 10">
      <li class="col">
        1
      </li>
      <li class="col">
        陈坚
      </li>
      <li class="col red">
        -3
      </li>
      <li class="col">
        F
      </li>
      <li class="col">
        34
      </li>
      <li class="col">
        35
      </li>
      <li class="col">
        69
      </li>
      </ul>

    </div>
    </div>
    <div id="nav4" class="nav">
    <div class="title">
      <ul class="row">
      <li class="col">
        排名
      </li>
      <li class="col">
        姓名
      </li>
      <li class="col">
        差点
      </li>
      <li class="col">
        总杆
      </li>
      <li class="col">
        净杆
      </li>
      </ul>
      <ul class="row" v-for="n in 10">
      <li class="col">
        1
      </li>
      <li class="col">
        陈坚
      </li>
      <li class="col red">
        -3
      </li>
      <li class="col">
        69
      </li>
      <li class="col">
        68.6
      </li>
      </ul>

    </div>
    </header>
    </div>
    <div id="nav5" class="nav">
    <div class="title">
      <ul class="row">
      <li class="col">
        奖项名称
      </li>
      <li class="col">
        获奖人
      </li>
      <li class="col">
        奖品
      </li>
      </ul>
      <ul class="row" v-for="n in 10">
      <li class="col">
        总冠
      </li>
      <li class="col">
        陈坚
      </li>
      <li class="col red">
        1#木
      </li>
      </ul>
    </div>
    </div>
    <div id="nav6" class="nav">
    <div class="slider" id="slider">
      <div class="slide" style="transform: translateX(0px) rotateZ(0deg) translateY(30px) translateZ(-150px); transition: 0.102564s cubic-bezier(0, 1.95, 0.49, 0.73); opacity: 1;" v-for="n in 5">
      <img :src="'static/bg_nav_6.png'">
      <p>
        <b class="font_size_weight">TO:</b>
        <b class="font_size_weight_b">SOMEONE</b>
      </p>
      <P class="font_size_12">留白</P>
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
  </div>
</template>

<script>
import '../script/swiper.min.js'

export default {
  name: 'Event',
  data () {
    return {
    }
  },

  methods: {
    closeFrame () {
      this.$router.go(-1)
    }
  },

  mounted () {
/* eslint-disable  */
    var sliderWidth= document.getElementById('slider').offsetWidth;
    var arrli=document.getElementById("active").getElementsByTagName("li");
    var arrdiv=document.getElementById("nav_1").children;
    for(var i=0;i<arrli.length;i++){
      arrli[i].onclick =   function () {
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
    }
/* eslint-enable  */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
@import '../css/image.css';
</style>
