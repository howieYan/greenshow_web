<template>
<<<<<<< HEAD
    <div>
        <div class="header_position" id="">
            <h1 class="title_h1 bg_opacity">上海旗忠高尔夫球场</h1>
            <ul class="details">
                <li class="col">
                    <div class="center_title">
                        <div class="title_h1_time">2017年6月15日</div>
                    </div>
                </li>
            </ul>
            <div class="row nav_jifen" id="active_nav">
                <div class="col active_bottom"><b>记分详情</b></div>
                <div class="col"><b>图文资讯</b></div>
            </div>
        </div>
        <div id="sention_nav">
            <div id="display_none0" class="selected">
                <ul class="row height_30px background_21945d">
                    <li class="padding_left5px">HOLE</li>
                    <li class="col">1</li>
                    <li class="col">2</li>
                    <li class="col">3</li>
                    <li class="col">4</li>
                    <li class="col">5</li>
                    <li class="col">6</li>
                    <li class="col">7</li>
                    <li class="col">8</li>
                    <li class="col">9</li>
                    <li class="col">IN</li>
                </ul>
                <ul class="row height_30px background_d6d9e2">
                    <li class="padding_left5px">PAR</li>
                    <li class="col">4</li>
                    <li class="col">4</li>
                    <li class="col">3</li>
                    <li class="col">4</li>
                    <li class="col">5</li>
                    <li class="col">6</li>
                    <li class="col">7</li>
                    <li class="col">8</li>
                    <li class="col">9</li>
                    <li class="col">36</li>
                </ul>
                <ul class="row height_50px">
                    <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                    <li class="col position_b"  v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                   
                </ul>
                <ul class="row height_50px">
                    <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_50px">
                    <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_50px">
                    <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_30px background_21945d">
                    <li class="col">10</li>
                    <li class="col">11</li>
                    <li class="col">12</li>
                    <li class="col">13</li>
                    <li class="col">14</li>
                    <li class="col">15</li>
                    <li class="col">16</li>
                    <li class="col">17</li>
                    <li class="col">18</li>
                    <li class="col">IN</li>
                    <li class="col">OUT</li>
                </ul>
                <ul class="row height_30px background_d6d9e2">
                    <li class="col">4</li>
                    <li class="col">4</li>
                    <li class="col">4</li>
                    <li class="col">3</li>
                    <li class="col">4</li>
                    <li class="col">5</li>
                    <li class="col">6</li>
                    <li class="col">7</li>
                    <li class="col">8</li>
                    <li class="col">9</li>
                    <li class="col">36</li>
                </ul>
                <ul class="row height_50px">
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_50px">
                    <li class="col position_b"  v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_50px">
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
                <ul class="row height_50px">
                    <li class="col position_b" v-for="n in 10">
                        <b style="">4</b>
                        <b style="">+5</b>
                    </li>
                </ul>
            </div>
            <div id="display_none2">
                <div class="section_title_height">
                    <ul class="row height_jq0">
                        <li class="border_radius">
                            <div></div>
                        </li>
                        <li class="pa_left col">
                            <p><b>蓝晶灵</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                            <div><b>和高手打球有点紧张</b></div>
                        </li>
                    </ul>
                    <div class="border1_height10px0 po_top0"></div>
                </div>
                <div class="section_title_height">
                    <ul class="row height_jq1">
                        <li class="border_radius">
                            <div></div>
                        </li>
                        <li class="pa_left col">
                            <p><b>扫荡腿</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                            <div>大家说姿势如何？</div>
                            <div class="module_box5">
                                <img :src="'/static/bg_nav_6.png'" alt="">
                                <div class="triangle_border_left"></div>
                            </div>
                        </li>
                    </ul>
                    <div class="border1_height10px1 po_top1"></div>
                </div>
                <div class="section_title_height">
                    <ul class="row height_jq2">
                        <li class="border_radius_color_a9b217">
                            <div></div>
                        </li>
                        <li class="pa_left">
                            <p><b>扫荡腿</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                            <div>大家说姿势如何？</div>
                            <div class="module_box5">
                                <img :src="'/static/bg_nav_6.png'" alt="">
                                <div class="triangle_border_left"></div>
                            </div>
                        </li>
                    </ul>
                    <div class="border1_height10px2 po_top2"></div>
                </div>
            </div>
        </div>
    </div>
</template>
=======
<div>
    <div>
      <div class="header_position" id="">
        <h1 class="title_h1 bg_opacity">上海旗忠高尔夫球场</h1>
        <ul class="details">
            <li class="col">
                <div class="center_title">
                    <div class="title_h1_time">2017年6月15日</div>
                </div>
            </li>
        </ul>
        <div class="row nav_jifen" id="active_nav">
            <div class="col active_bottom"><b>记分详情</b></div>
            <div class="col"><b>图文资讯</b></div>
        </div>
      </div>
      <div id="sention_nav">
        <div id="display_none0" class="selected">
            <ul class="row height_30px background_21945d">
                <li class="padding_left5px">HOLE</li>
                <li class="col">1</li>
                <li class="col">2</li>
                <li class="col">3</li>
                <li class="col">4</li>
                <li class="col">5</li>
                <li class="col">6</li>
                <li class="col">7</li>
                <li class="col">8</li>
                <li class="col">9</li>
                <li class="col">IN</li>
            </ul>
            <ul class="row height_30px background_d6d9e2">
                <li class="padding_left5px">PAR</li>
                <li class="col">4</li>
                <li class="col">4</li>
                <li class="col">3</li>
                <li class="col">4</li>
                <li class="col">5</li>
                <li class="col">6</li>
                <li class="col">7</li>
                <li class="col">8</li>
                <li class="col">9</li>
                <li class="col">36</li>
            </ul>
            <ul class="row height_50px">
                <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                <li class="col position_b" v-for=" n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="width50px_hidden">扫荡你的空间科<b></b></li>
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_30px background_21945d">
                <li class="col">10</li>
                <li class="col">11</li>
                <li class="col">12</li>
                <li class="col">13</li>
                <li class="col">14</li>
                <li class="col">15</li>
                <li class="col">16</li>
                <li class="col">17</li>
                <li class="col">18</li>
                <li class="col">IN</li>
                <li class="col">OUT</li>
            </ul>
            <ul class="row height_30px background_d6d9e2">
                <li class="col">4</li>
                <li class="col">4</li>
                <li class="col">4</li>
                <li class="col">3</li>
                <li class="col">4</li>
                <li class="col">5</li>
                <li class="col">6</li>
                <li class="col">7</li>
                <li class="col">8</li>
                <li class="col">9</li>
                <li class="col">36</li>
            </ul>
            <ul class="row height_50px">
                <li class="col position_b" v-for=" n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
            <ul class="row height_50px">
                <li class="col position_b" v-for="n in 10">
                    <b style="">4</b>
                    <b style="">+5</b>
                </li>
            </ul>
        </div>
        <div id="display_none2">
            <div class="section_title_height">
                <ul class="row height_jq0">
                    <li class="border_radius">
                        <div></div>
                    </li>
                    <li class="pa_left col">
                        <p><b>蓝晶灵</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                        <div><b>和高手打球有点紧张</b></div>
                    </li>
                </ul>
                <div class="border1_height10px0 po_top0"></div>
            </div>
            <div class="section_title_height">
                <ul class="row height_jq1">
                    <li class="border_radius">
                        <div></div>
                    </li>
                    <li class="pa_left col">
                        <p><b>扫荡腿</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                        <div>大家说姿势如何？</div>
                        <div class="module_box5">
                            <img :src="'/static/bg_nav_6.png'" alt="">
                            <div class="triangle_border_left"></div>
                        </div>
                    </li>

                </ul>
                <div class="border1_height10px1 po_top1"></div>
            </div>
            <div class="section_title_height">
                <ul class="row height_jq2">
                    <li class="border_radius_color_a9b217">
                        <div></div>
                    </li>
                    <li class="pa_left">
                        <p><b>扫荡腿</b><b style="float: right;padding-right: 20px;">10:00</b></p>
                        <div>大家说姿势如何？</div>
                        <div class="module_box5">
                            <img :src="'/static/bg_nav_6.png'" alt="">
                            <div class="triangle_border_left"></div>
                        </div>
                    </li>
                </ul>
                <div class="border1_height10px2 po_top2"></div>
            </div>
        </div>
      </div>
  </div>
</div>
</template>

>>>>>>> yanhao
<script>
import api from '../api'

export default {
  name: 'Team',
  data () {
    return {
      name: 'TeamV',
      blank: {
<<<<<<< HEAD
=======
        Logo: '../static/img/logo.png',
>>>>>>> yanhao
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
<<<<<<< HEAD
  /* eslint-disable  */
    var arrli=document.getElementById("active_nav").getElementsByTagName("div");
    var arrdiv=document.getElementById("sention_nav").children;
    for(var i=0;i<arrli.length;i++){
        arrli[i].onclick=li_mouseenter;
    }
    function li_mouseenter() {
        for(var i=0;i<arrli.length;i++){
            if(arrli[i]==this){
                arrli[i].className="active_bottom";
                arrdiv[i].className="selected";
                var height_jq0= $('.height_jq0').height();
                var height_jq1= $('.height_jq1').height();
                var height_jq2= $('.height_jq2').height();
                $('.border1_height10px0').css({'height':height_jq0-30});
                $('.border1_height10px1').css({'height':height_jq1-30});
                $('.border1_height10px2').css({'height':height_jq2-30});
                $('.po_top0').css({'top':height_jq0-20});
                $('.po_top1').css({'top':height_jq0+35});
                $('.po_top2').css({'top':height_jq0+35+height_jq1});
            }else {
                arrli[i].className="";
                arrdiv[i].className="";
            }
        }
    }
=======
    /* eslint-disable  */
      var arrli=document.getElementById("active_nav").getElementsByTagName("div");
      var arrdiv=document.getElementById("sention_nav").children;
      for(var i=0;i<arrli.length;i++){
          arrli[i].onclick=li_mouseenter;
      }
      function li_mouseenter() {
          for(var i=0;i<arrli.length;i++){
              if(arrli[i]==this){
                  arrli[i].className="active_bottom";
                  arrdiv[i].className="selected";
              }else {
                  arrli[i].className="";
                  arrdiv[i].className="";
              }
          }
      }
>>>>>>> yanhao
    /* eslint-disable  */
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/resetd.css';
</style>

<<<<<<< HEAD
=======



>>>>>>> yanhao
