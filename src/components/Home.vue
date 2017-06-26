<template>
  <div>
    <header>
      <ul class="row">
        <li class="back" @click="closeFrame"></li>
        <li class="col textCenter">
          高领云
        </li>
        <li></li>
      </ul>
    </header>
    <div id="swipe" class="swipe">
      <div class="swipe-wrap" id="swipe_banner">
        <div class="swipe-box" v-for="n in 4">
          <img :src="'static/automobile.png'" alt="">
          <p class="p">亲水湾一优仕队   六周年庆典，共享狂欢Party0</p>
        </div>
      </div>
      <div class="title-box">
        <ul class="title-box-ul">
          <li class="active"></li>
          <li></li>
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
          <div class="swipe-box_1_width" id="nav" v-for="n in 13">
            <div class="swipe-box_1_width_fl" id="offsetWidth" @click="urlFrame">
              <div>
                <img :src="'static/qiu6.jpg'" alt="">
                <b class="b">SGCU联盟</b>
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
            <div class="opacity ">
              <div class="swiper-slide-header">
                <div>
                  1st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left" id="padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="" id="Image">
                        <p>小皇帝</p>
                        <div class="bg_logo" id="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-slide_opacity ">
              <div class="swiper-slide-header">
                <div>
                  2st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="">
                        <p>小皇帝</p>
                        <div class="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-slide_opacity ">
              <div class="swiper-slide-header">
                <div>
                  3st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="">
                        <p>小皇帝</p>
                        <div class="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-slide_opacity ">
              <div class="swiper-slide-header">
                <div>
                  4st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="">
                        <p>小皇帝</p>
                        <div class="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-slide_opacity ">
              <div class="swiper-slide-header">
                <div>
                  5st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="">
                        <p>小皇帝</p>
                        <div class="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-slide_opacity ">
              <div class="swiper-slide-header">
                <div>
                  6st Place
                </div>
                <div class="height240">
                  <ul class="row">
                    <li class="col padding_left">
                      <div class="width_image">
                        <img :src="'static/timg.jpg'" alt="">
                        <b>小皇帝</b>
                        <div class="bg_logo">
                          <img :src="'static/logo.png'" alt="">
                        </div>
                      </div>
                    </li>
                    <li class="col color_0a0b1b_b color_0a0b1b_b0">
                      <p>ＳＧＣＵ系列赛</p>
                      <p>
                        冠军
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
                    <li class="col color_0a0b1b_b text_right">
                      <p>Total pole</p>
                      <p>
                        68
                      </p>
                      <div class="border_bottom"></div>
                      <p>数据</p>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                      <div class="line_height">
                        2
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable " id="pagination">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active ">
            <i>1</i>
          </span>
          <span class="swiper-pagination-bullet ">
            <i>2</i>
          </span>
          <span class="swiper-pagination-bullet ">
            <i>3</i>
          </span>
          <span class="swiper-pagination-bullet ">
            <i>4</i>
          </span>
          <span class="swiper-pagination-bullet ">
            <i>5</i>
          </span>
          <span class="swiper-pagination-bullet ">
            <i>6</i>
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
          <b class="col">排行榜</b>
        </div>
        <div id="swipelb" class="swipe">
          <div class="swipe-wrap">
            <div class="swipe-box">
              <div class="swiper-slide-header_ph">
                <div class="bestResult">
                  <p>最好成绩</p>
                </div>
                <div class="nav1">
                  <ul class="row">
                    <li class="col">
                      <b>名次</b>
                    </li>
                    <li class="col">
                      <b>名字</b>
                    </li>
                    <li class="col">
                      <b>球队</b>
                    </li>
                    <li class="col">
                      <b>杆数</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>1</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>优仕队</b>
                    </li>
                    <li class="col">
                      <b>68</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>2</b>
                    </li>
                    <li class="col">
                      <b>蔡苏刚</b>
                    </li>
                    <li class="col">
                      <b>鹰之队</b>
                    </li>
                    <li class="col">
                      <b>70</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>3</b>
                    </li>
                    <li class="col">
                      <b>afei</b>
                    </li>
                    <li class="col">
                      <b>复旦队</b>
                    </li>
                    <li class="col">
                      <b>71</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swipe-box">
              <div class="swiper-slide-header_ph">
                <div class="bestResult">
                  <p>差点排名</p>
                </div>
                <div class="nav1">
                  <ul class="row">
                    <li class="col">
                      <b>名次</b>
                    </li>
                    <li class="col">
                      <b>名字</b>
                    </li>
                    <li class="col">
                      <b>球队</b>
                    </li>
                    <li class="col">
                      <b>差点</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>1</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>优仕队</b>
                    </li>
                    <li class="col">
                      <b>7.1</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>2</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>鹰之队</b>
                    </li>
                    <li class="col">
                      <b>7.5</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>3</b>
                    </li>
                    <li class="col">
                      <b>afei</b>
                    </li>
                    <li class="col">
                      <b>天马队</b>
                    </li>
                    <li class="col">
                      <b>7.8</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swipe-box">
              <div class="swiper-slide-header_ph">
                <div class="bestResult">
                  <p>平均成绩</p>
                </div>
                <div class="nav1">
                  <ul class="row">
                    <li class="col">
                      <b>名次</b>
                    </li>
                    <li class="col">
                      <b>名字</b>
                    </li>
                    <li class="col">
                      <b>球队</b>
                    </li>
                    <li class="col">
                      <b>成绩</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>1</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>优仕队</b>
                    </li>
                    <li class="col">
                      <b>74</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>2</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>鹰之队</b>
                    </li>
                    <li class="col">
                      <b>77</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>3</b>
                    </li>
                    <li class="col">
                      <b>afei</b>
                    </li>
                    <li class="col">
                      <b>天马队</b>
                    </li>
                    <li class="col">
                      <b>79</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swipe-box">
              <div class="swiper-slide-header_ph">
                <div class="bestResult">
                  <p>小鸟数</p>
                </div>
                <div class="nav1">
                  <ul class="row">
                    <li class="col">
                      <b>名次</b>
                    </li>
                    <li class="col">
                      <b>名字</b>
                    </li>
                    <li class="col">
                      <b>球队</b>
                    </li>
                    <li class="col">
                      <b>成绩</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>1</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>优仕队</b>
                    </li>
                    <li class="col">
                      <b>59</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>2</b>
                    </li>
                    <li class="col">
                      <b>扫荡腿</b>
                    </li>
                    <li class="col">
                      <b>鹰之队</b>
                    </li>
                    <li class="col">
                      <b>55</b>
                    </li>
                  </ul>
                </div>
                <div class="nav_2">
                  <ul class="row">
                    <li class="col">
                      <b>3</b>
                    </li>
                    <li class="col">
                      <b>afei</b>
                    </li>
                    <li class="col">
                      <b>天马队</b>
                    </li>
                    <li class="col">
                      <b>50</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="swipe-box">
              <div class="swiper-slide-header_ph">
              <div class="bestResult">
                <p>老鹰数</p>
              </div>
              <div class="nav1">
                <ul class="row">
                  <li class="col">
                    <b>名次</b>
                  </li>
                  <li class="col">
                    <b>名字</b>
                  </li>
                  <li class="col">
                    <b>球队</b>
                  </li>
                  <li class="col">
                    <b>成绩</b>
                  </li>
                </ul>
              </div>
              <div class="nav_2">
                <ul class="row">
                  <li class="col">
                    <b>1</b>
                  </li>
                  <li class="col">
                    <b>扫荡腿</b>
                  </li>
                  <li class="col">
                    <b>优仕队</b>
                  </li>
                  <li class="col">
                    <b>19</b>
                  </li>
                </ul>
              </div>
              <div class="nav_2">
                <ul class="row">
                  <li class="col">
                    <b>2</b>
                  </li>
                  <li class="col">
                    <b>扫荡腿</b>
                  </li>
                  <li class="col">
                    <b>鹰之队</b>
                  </li>
                  <li class="col">
                    <b>15</b>
                  </li>
                </ul>
              </div>
              <div class="nav_2">
                <ul class="row">
                  <li class="col">
                    <b>3</b>
                  </li>
                  <li class="col">
                    <b>afei</b>
                  </li>
                  <li class="col">
                    <b>天马队</b>
                  </li>
                  <li class="col">
                    <b>10</b>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div class="title-box">
            <ul class="title-box-ul_li">
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
              <img :src="'static/qiu1.jpg'" alt="">
              <p>张欣</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一位刻苦努力锻炼 球技的选手 一位刻苦努力锻炼 球技的选手</b>
            </div>
          </li>
          <li style="width: 10px"></li>
          <li class="col title_tj_img">
            <div class="title_tj_img_border">
              <img :src="'static/qiu1.jpg'" alt="">
              <p>张欣</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一位刻苦努力锻炼 球技的选手 一位刻苦努力锻炼 球技的选手</b>
            </div>
          </li>
        </ul>
        <ul class="row">
          <li class="col title_tj_img">
            <div class="title_tj_img_border">
              <img :src="'static/qiu1.jpg'" alt="">
              <p>张欣</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一位刻苦努力锻炼 球技的选手 一位刻苦努力锻炼 球技的选手</b>
            </div>
          </li>
          <li style="width: 10px"></li>
          <li class="col title_tj_img">
            <div class="title_tj_img_border">
              <img :src="'static/qiu1.jpg'" alt="">
              <p>张欣</p>
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一位刻苦努力锻炼 球技的选手 一位刻苦努力锻炼 球技的选手</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import '../script/swiper.js'

export default {
  name: 'Home',
  data () {
    return {
    }
  },

  methods: {
    urlFrame () {
      this.$router.push({ path: '/team' })
    },

    closeFrame () {
      this.$router.go(-1)
    }
  },

  mounted () {
/* eslint-disable  */
    var nav=document.getElementById("nav");
    var navLength=nav.children.length;
    var offsetWidth =document.getElementById('offsetWidth').offsetWidth;
    nav.style.width=navLength*(offsetWidth+5)+10+'px';

    /*SGCU系列赛排名*/
    var paginationOnclick =document.getElementById('pagination').getElementsByTagName("span");
    var onclickOpacity =document.getElementById('opacity').children;
    for(var i= 0;i<paginationOnclick.length;i++){
      paginationOnclick[i].onclick = function () {
        for(var i = 0;i<paginationOnclick.length;i++){
          if(paginationOnclick[i]==this){
            paginationOnclick[i].className='swiper-pagination-bullet-active';
            onclickOpacity[i].className='opacity';
          }else{
            paginationOnclick[i].className='';
            onclickOpacity[i].className='swiper-slide_opacity';
          }
        }
      }
    }
/* eslint-enable */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
</style>
