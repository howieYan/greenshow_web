<template>
    <div>
        <!--header-->
        <header class="header">
            <div class="logo_image float_left">
                <div class="logo_icon float_left">
                    <img :src="'/static/favicon.ico'" alt="">
                </div>
                <div class="title float_left hover">高领秀管理后台</div>
            </div>
            <div class="width70 float_left">
                <div class="float_right user_id hover">
                    <span>小明</span>
                    <div class="position_abs">
                        <ul class="row">
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/ziliao.png'" alt="" class="width30">
                                </p>
                                <p>基本资料</p>
                            </li>
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/user.png'" alt="" class="width30">
                                </p>
                                <p>实名认证</p>
                            </li>
                            <li class="col width80 height50 padding10 bg_hover">
                                <p class="">
                                    <img :src="'/static/pass.png'" alt="" class="width30">
                                </p>
                                <p>安全设置</p>
                            </li>
                        </ul>
                        <ul><li class="line_height bg_hover">退出管理控制台</li></ul>
                    </div>
                </div>
                <div class="seek float_right hover">
                    <span class="row"><b class="bg_image col"></b><b class="col">搜索</b></span>
                    <div class="input">
                        <input type="text" placeholder="搜索">
                        <b class="huiche"></b>
                    </div>

                </div>
            </div>
        </header>
        <!--nav-->
        <div class="nav">
            <div class="nav_on_off">
                <p>
                    <b class=""></b>
                </p>
            </div>
            <div class="nav_home">
                <ul class="">
                    <li class="nav_line_height row homeIndexPlayerOpen" @click="">
                        <i class="fa_icon active_player"></i>
                        <a href="" class="">我的球队</a>
                    </li>
                    <li class="bg_hover_nav0 bg_hover_nav">
                        <b></b>
                        我的球队
                    </li>
                    <ul class="home_index home_index_player">
                        <li class="row active_nav_player_bar">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon0"></li>
                                    <li class="nav_banner_text">高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home_palyer0 bg_hover_nav_home">
                            <b></b>
                            高尔夫
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon1"></li>
                                    <li class="nav_banner_text">和平鸽</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home_player1 bg_hover_nav_home">
                            <b></b>
                            和平鸽
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon2"></li>
                                    <li class="nav_banner_text">长青高球队V</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home_player2 bg_hover_nav_home">
                            <b></b>
                            长青高球队V
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon3"></li>
                                    <li class="nav_banner_text">上海高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home_player3 bg_hover_nav_home">
                            <b></b>
                            上海高尔夫
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon4"></li>
                                    <li class="nav_banner_text">浦东高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home_player4 bg_hover_nav_home">
                            <b></b>
                            浦东高尔夫
                        </div>
                    </ul>
                </ul>
            </div>
            <div class="nav_home">
                <ul class="">
                    <li class="nav_line_height row homeIndexPlayerClose">
                        <i class="fa_icon"></i>
                        <a href="" class="">我的门户</a>
                    </li>
                    <li class="bg_hover_nav1 bg_hover_nav">
                        <b></b>
                        我的门户
                    </li>
                    <ul class="home_index home_index_home" style="display: none;">
                        <li class="row active_nav_player_bar">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon0"></li>
                                    <li class="nav_banner_text">高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home0 bg_hover_nav_home">
                            <b></b>
                            高尔夫
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon1"></li>
                                    <li class="nav_banner_text">和平鸽</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home1 bg_hover_nav_home">
                            <b></b>
                            和平鸽
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon2"></li>
                                    <li class="nav_banner_text">长青高球队V</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home2 bg_hover_nav_home">
                            <b></b>
                            长青高球队V
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon3"></li>
                                    <li class="nav_banner_text">上海高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home3 bg_hover_nav_home">
                            <b></b>
                            上海高尔夫
                        </div>
                        <li class="row">
                            <a href="javascript:(0)" class="col">
                                <ul class="nav_banner">
                                    <li class="bg_banner_icon bg_banner_icon4"></li>
                                    <li class="nav_banner_text">浦东高尔夫</li>
                                </ul>
                            </a>
                        </li>
                        <div class="bg_hover_nav_home4 bg_hover_nav_home">
                            <b></b>
                            浦东高尔夫
                        </div>
                    </ul>
                </ul>
            </div>
        </div>
        <!--banner nav-->
        <section class="banner_nav_block viewFramework-sidebar-full">
            <div class="banner_nav">
                <ul class="hover_li_fff">
                    <li class="banner_active_ff tema" @click="">
                        <a href="javascript:(0)">球队基本信息</a>
                    </li>
                     <li class="banner_active_ed notice row" id="clickPlayerOpen">
                        <i class="fa_icon_right"></i>
                        <a href="javascript:(0)" class="col" style="padding-left:0px;">队员管理</a>
                    </li>
                    <ul class="tema_nav display_none">
                        <li>领导</li>
                        <li>队员</li>
                        <li>嘉宾</li>
                        <li>黑名单</li>
                    </ul>
                    <li class="banner_active_ed notice" >
                        <a href="javascript:(0)">公告</a>
                    </li>
                   
                    <li class="banner_active_ed agenda" >
                        <a href="javascript:(0)">赛程</a>
                    </li>
                   
                    <li class="banner_active_ed statute">
                        <a href="javascript:(0)">章程</a>
                    </li>
                   
                    <li class="banner_active_ed player">
                        <a href="javascript:(0)">球员</a>
                    </li>
                   
                    <li class="banner_active_ed seniority">
                        <a href="javascript:(0)">排行</a>
                    </li>
                    <li class="banner_active_ed history" @click="historyFrom">
                        <a href="javascript:(0)">历史</a>
                    </li>
                  
                    <li class="banner_active_ed honor">
                        <a href="javascript:(0)">荣誉</a>
                    </li>
                    
                    <li class="banner_active_ed photo">
                        <a href="javascript:(0)">相册</a>
                    </li>
                    
                </ul>
            </div>
            <div class="locker position_right"></div>
            <div class="width100 left180">
                <div style="" class="width_nav_width">
                    <iframe src="" id="uploading" width="100%" height="99%" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"></iframe>
                </div>
                <div style="" class="width_nav_width nav_div" id="nav_div">
                    <iframe src="http://devwx.golfgreenshow.com/#/team/2B32D3B3-ED48-4006-B2D1-8022D20A3929" id="show" width="100%" height="99%" marginheight="0" marginwidth="0" frameborder="0" scrolling="auto"></iframe>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
import '../script/jquery.min.js'
import '../script/index.js'
export default {
  name: 'Index',
  data () {
    return {
      name: 'Index',
      team: null,
      events: {
        page: 0,
        size: 5,
        list: []
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    /* eslint-disable  */
    historyFrom () {
        $('.nav_player>li').removeClass('active_nav_player');
        $('.nav_player>li').eq(6).addClass('active_nav_player');
        $('#uploading').attr('src','HistoryForm.vue');
        $('#show').attr("src", "http://devwx.golfgreenshow.com/#/History/")
    }
    /* eslint-disable  */
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/reset.css';
@import '../css/index.css';
.hover_li_fff>li:hover{
    background: #f5f5f5;
}
.tema_nav{
    display: none;
}
.tema_nav>li{
    height: 40px;
    line-height: 40px;
    padding-left: 70px;
}
.tema_nav>li:hover{
    background: #f5f5f5;
}
/*.home_index_player , .home_index_home{
    display:none;
}*/
.nav_player{
    background: #FFFFFF;
    line-height: 40px;
    height: 40px;
    box-shadow: 0px 0px 3px #ccc;
}
.nav_player>li>b{
    padding-left: 60px;
    font-size: 14px;
}
.nav_player>li>div>div{
    padding-left: 50px;
    font-size: 12px;
}
.nav_player>li:nth-of-type(1):hover{
    background: #FFFFFF;
}
.nav_player>li:hover{
    background: #f5f5f5;
}
.fa_icon_bottom{
    background: url('/static/fa_icon_bottom.png')no-repeat center;
    background-size:40%;
    display: block;
    height: 40px;
    width: 40px;
}
.fa_icon_right{
    background: url('/static/fa_icon_right.png')no-repeat center;
    background-size:20%;
    display: block;
    height: 40px;
    width: 40px;
}
.active_nav_player{
    background: #FFFFFF;
}
.position_nav_player{
    display: none;
    width: 100%;
}
.position_nav_player>div{
    text-align: center;
    background: #eeeeee;
    color: #000000;
}
.position_nav_player>div:hover{
    background: #f5f5f5;
}
#uploading{
    width: 100%;
    height: 95%;
}
#show{
    width:100%; height:99%;
}
.product-navbar{
    width: 190px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    z-index: 2;
    overflow: hidden;
    background: #eeeeee;
}
.active_nav_player_bar{
    background: #00C1DE;
    color: #fff;
}
</style>
