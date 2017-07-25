/*搜索*/
$(function () {
    $('.seek').hover(function () {
        $('.input').stop().slideDown()
    },function () {
        $('.input').stop().slideUp()
    })
});
/*退出登录*/
$(function () {
    $('.user_id').hover(function () {
        $('.position_abs').stop().slideDown()
    },function () {
        $('.position_abs').stop().slideUp()
    })
});
/*nav*/
function navOpen() {
    $('.nav').css({'width':'190px'});
    $('.bg_banner_icon').css({'width':'33%'});
    $('.nav_banner_text').css({'display':'block'});
    $('section').addClass('viewFramework-sidebar-mini');
    $('section').removeClass('viewFramework-sidebar-full');
    if($('.nav').width()==60){
        $('.nav_banner_text').css({'display':'none'});
    }else{
        $('.nav_banner_text').css({'display':'block'});
    }
}
function navClose() {
    $('section').removeClass('viewFramework-sidebar-mini');
    $('section').addClass('viewFramework-sidebar-full');
    $('.nav_on_off>p>b').removeClass('active_b');
    $('.nav').css({'width':'60px'});
    $('.bg_banner_icon').css({'width':'100%'});
    $('.nav_banner_text').css({'display':'none'});
}
/*   球队的nav*/
$(function () {
    var key = 0;
    $('.nav_on_off').on('click',function () {
        if(key==0){
            navOpen();
            key=1;
        }else {
            navClose();
            key=0;
        }
    })
});
/*某个球队的nav*/
$(function () {
    var key = 0;
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(0).addClass('active_nav_player');
    $('.active_nav_player').click(function () {
        if(key ==0 ){
            $('.position_nav_player').stop().slideDown();
            key  = 1;
        }else{
            $('.position_nav_player').stop().slideUp();
            key = 0;
        }
    })
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/team/2B32D3B3-ED48-4006-B2D1-8022D20A3929")
})
/*背景图片更换*/
function temaImage() {
    $('#uploading').attr('src','./script/temaImage/index.html')
}
/*最新资讯*/
function message() {
    $('#uploading').attr('src','./html/message.html')
}
/*公告*/
function noticeAddFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(1).addClass('active_nav_player');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Notice/")
    $('#uploading').attr('src','./html/noticeFrom.html')
}
/*赛程*/
function agendaAddFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(2).addClass('active_nav_player');
    $('#uploading').attr('src','./html/agendaFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Agenda/")
}
/*章程*/
function statuteFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(3).addClass('active_nav_player');
    $('#uploading').attr('src','./html/statuteFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Statute/")
}
/*球员*/
function playerFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(4).addClass('active_nav_player');
    $('#uploading').attr('src','./html/playerFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Player/")
}
/*排行*/
function seniorityFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(5).addClass('active_nav_player');
    $('#uploading').attr('src','./html/seniorityFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Seniority/")
}
/*历史*/
function historyFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(6).addClass('active_nav_player');
    $('#uploading').attr('src','./html/historyFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/History/")
}
/*荣誉*/
function honorFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(7).addClass('active_nav_player');
    $('#uploading').attr('src','./html/honorFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Honor/")
}
/*相册*/
function photoFrom() {
    $('.nav_player>li').removeClass('active_nav_player');
    $('.nav_player>li').eq(8).addClass('active_nav_player');
    $('#uploading').attr('src','./html/photoFrom.html');
    $('#show').attr("src", "http://devwx.golfgreenshow.com/#/Photo/")
}
/*缩进nav*/
$(function () {
    var key=0;
    $('.locker').on('click',function () {
        if(key==0){
            $('.banner_nav').animate({'left':'-190px'});
            $('.position_right').addClass('locker_active').animate({'left':'0px'})
            $('.banner_nav_block').addClass('viewFramework-sidebar-full-col');
            $('.banner_nav_block>.position_right').removeClass('locker');
            key=1;
        }else{
            $('.banner_nav').animate({'left':'0px'});
            $('.position_right').addClass('locker').animate({'left':'160px'})
            $('.banner_nav_block>.position_right').removeClass('locker_active')
            $('.banner_nav_block').removeClass('viewFramework-sidebar-full-col');
            key=0;
        }
    })
})


// /*我的球队和门户下的子nav的hover*/
$(function () {
    $('.home_index>li').hover(function () {
        $(this).next().css({'display':'block'});
    },function () {
        $(this).next().css({'display':'none'});
    })

})
$(function () {
    $('.nav_line_height').hover(function (){
        $(this).next().css({'display':'block'});
    },function () {
        $(this).next().css({'display':'none'});
    })
})


/*我的球队的开关*/
$(function () {
    var key=0;
    $(".homeIndexPlayerOpen").on("click",function (){
        if(key==0){
            $(".homeIndexPlayerOpen>i").addClass("active_player");
            $(".home_index_player").css({'display':'block'});
            key=1;
        }else {
            $(".homeIndexPlayerOpen>i").removeClass("active_player");
            $(".home_index_player").css({'display':'none'});
            key=0;
        }
    })
})
/*我的门户开关*/
$(function () {
    var key = 0;
    $(".homeIndexPlayerClose").on("click",function (){
        if(key==0){
            $(".homeIndexPlayerClose>i").addClass("active_player");
            $(".home_index_home").css({'display':'block'});
            key=1;
        }else {
            $(".homeIndexPlayerClose>i").removeClass("active_player");
            $(".home_index_home").css({'display':'none'});
            key=0;
        }
    })
})


/*队员管理的开关*/
$(function () {
    var  key = 0;
    $('#clickPlayerOpen').click(function () {
        if ( key == 0 ) {
            $(this).css({'background':'#fff'}).next().css({'display':'block'});
            $('#clickPlayerOpen>i').removeClass('fa_icon_right');
            $('#clickPlayerOpen>i').addClass('fa_icon_bottom');
            key = 1;
        }else{
            $(this).css({'background':'#EAEDF1'}).next().css({'display':'none'});
             $('#clickPlayerOpen>i').removeClass('fa_icon_bottom');
            $('#clickPlayerOpen>i').addClass('fa_icon_right');
            key = 0;
        }
    })
})