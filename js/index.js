$(function () {
    nav();
    var video_h=$("#videoBox").offset().top+$("#videoBox").height();
    // console.log($(".vjs-play-control").length);
    /*关于视频的设置*/
    var myVideo=$("#video1");
    var dingwei_img=$(".dingwei_img");
    dingwei_img.click(function () {
        myVideo.get(0).play();/*点击图片让视频播放*/
        dingwei_img.css("display","none");/*图片消失*/
    });
    /*监控视频的状态*/
    setInterval(function () {
        if(myVideo.get(0).paused){
            dingwei_img.css("display","block");
        }
    },10);
    videoChange();
    title();
    clickVideo();

    

   /*这部分有用，设置视频小窗口播放
    $(window).scroll(function(){
        if ( $(window).scrollTop() > video_h) {
            $("#videoBox").addClass('out');
            $("#videoBox").css('bottom','0');
        }  else {
            $("#videoBox").removeClass('out');
            $("#videoBox").css('bottom','-320px');
        };

    });*/

    



})
/*导航：鼠标滑过导航添加特殊样式*/
function nav() {
    var nav_li= $(".nav_ul").find("li");
    // alert(nav_li.length)
    nav_li.hover(function () {
        $(this).addClass("mengceng").siblings().removeClass("mengceng");
    },function(){
        $("#index").addClass("mengceng").siblings().removeClass("mengceng");
    })
}

function videoChange() {
    var myVideo=$("#video1");
    var dingwei_img=$(".dingwei_img");
    if($(window).width()<=1920){
        dingwei_img.click(function () {
            myVideo.get(0).play();
            dingwei_img.css("display","none");
            myVideo.css("display","block");
        });
      /*  if(myVideo.get(0).paused){
            dingwei_img.css("display","block");
            myVideo.css("display","none");
        }else{
            dingwei_img.css("display","none");
            myVideo.css("display","block");
        }*/
     setInterval(function () {
          var status=myVideo.get(0).paused;
            if(status){
                dingwei_img.css("display","block");
                myVideo.css("display","none");
            }else{
                dingwei_img.css("display","none");
                myVideo.css("display","block");
            }
        },10)
    }
}
/*手机端将标题固定在尾部*/
function title() {
    var title=$(".top").find(".title");
    var address=$(".top").find(".address")
    if($(window).width()<=950&&$(window).width()>=365){
        address.css({position:"fixed",bottom:"0"})
    }
}
/*点击视频，视频暂停*/
function clickVideo() {
    var myVideo=$("#video1");
    myVideo.click(function () {
        myVideo.get(0).pause();
        dingwei_img.css("display","block");
    })
}
/*鼠标划出时当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function(){
        var index=$("#index");
        index.addClass("nav_active").siblings().removeClass("nav_active");
    })
}

