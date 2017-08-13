
$(function () {
    teamChange();
    /*videoClick();*/
    navChange();
    video();
});

/*点击团队成员图片实现视频的暂停，播放，出现，消失*/
function video() {
    var mask=$(".mask");
    var total_video=$(".total_video");
    var maskVideo=$(".maskVideo");
    //alert(maskVideo.length)
    var member_total=$(".member_total");
    var member_content=$(".member_content");
    //alert(member_content.length)
    var flag=1;
    member_content.on("click",function () {
        var _this=$(this).index();
        mask.css("display","block");
        total_video.css("display","block").children().eq(_this).css("display","block").siblings().css("display","none");
        /*每次点击图片video，视频自动播放*/
        flag=1;
        if(flag==1){
            maskVideo.eq(_this).children().eq(1).get(0).play();
            flag=0;
        }
        /*点击蒙版出现视频暂停和消失*/
        mask.on("click",function () {
            maskVideo.eq(_this).children().eq(1).get(0).pause();
            mask.css("display","none");
           maskVideo.eq(_this).css("display","none");
        })
        /*点击视频实现暂停和播放*/
        maskVideo.eq(_this).children().eq(1).on("click",function () {
            if(flag==0){
                maskVideo.eq(_this).children().eq(1).get(0).pause();
                flag=1;
                //alert(flag)
            }else{
                maskVideo.eq(_this).children().eq(1).get(0).play();
                flag=0;
            }
        })
        /*点击视频上方的div，视频和蒙版消失*/
        maskVideo.eq(_this).children().eq(0).on("click",function () {
            mask.css("display","none");
            maskVideo.eq(_this).css("display","none");
            /*消失的同时，视频暂停*/
            maskVideo.eq(_this).children().eq(1).get(0).pause();
        })
    })
}


/*点击video图片，视频出现与消失*/
/*function videoClick() {
    var member_contentNumber;
    var mask=$(".member_information").find(".mask");/!*蒙版*!/
    var windowHeight=$(window).height();/!*获取浏览器窗口的高度*!/
    var headerHeight=$("header").height();/!*获取头部高度*!/
    var right_line=$(".right_list").find(".line").outerHeight();
    var right_nav=$(".right_list").find(".nav").height();
    var videoHeight=$(".total_video").height();
    //alert(videoHeight)
    var centerHeight=windowHeight-headerHeight-right_line-right_nav;
    var video_top=$(".total_video").find(".top");
    var myVideo=$(".total_video").find(".myVideo");
    var member_totalZero=$(".member_total").eq(0);
    var total_videoZero=$(".sum_video .total_video").eq(0);
    var maskVideoZero=total_videoZero.find(".maskVideo");
    var member_contentZero=member_totalZero.find(".member_content");
    var member_totalFirst=$(".member_total").eq(1);
    var total_videoFirst=$(".sum_video .total_video").eq(1);
    var maskVideoFirst=total_videoFirst.find(".maskVideo");
    var member_contentFirst=member_totalFirst.find(".member_content");
    var member_totalTwo=$(".member_total").eq(2);
    var total_videoTwo=$(".sum_video .total_video").eq(2);
    var maskVideoTwo=total_videoTwo.find(".maskVideo");
    var member_contentTwo=member_totalTwo.find(".member_content");
    var flag=1;
    changeVideo(member_contentZero,total_videoZero,maskVideoZero);/!*狼牙战队*!/
    changeVideo(member_contentFirst,total_videoFirst,maskVideoFirst);/!*无敌战队*!/
    changeVideo(member_contentTwo,total_videoTwo,maskVideoTwo);/!*雄鹰战队*!/
    /!*点击不同的团队实现视频，蒙版的出现与消失*!/
    function changeVideo(memberNumber,totalNumber,maskNumber) {
        memberNumber.on("click",function () {
            var _this=$(this).index();
            /!*蒙版和视频出现*!/
            mask.css("display","block");
            totalNumber.css("display","block").children().eq(_this).css("display","block").siblings().css("display","none");
            /!*每次点击图片video，视频自动播放*!/
            flag=1;
            if(flag==1){
                maskNumber.eq(_this).children().eq(1).get(0).play();
                flag=0;
            }
            /!*点击蒙版出现视频暂停和消失*!/
            mask.on("click",function () {
                maskNumber.eq(_this).children().eq(1).get(0).pause();
                mask.css("display","none");
                maskNumber.eq(_this).css("display","none");
            })
            /!*点击视频上方的div，视频和蒙版消失*!/
            maskNumber.eq(_this).children().eq(0).on("click",function () {
                mask.css("display","none");
                maskNumber.eq(_this).css("display","none");
                /!*消失的同时，视频暂停*!/
                maskNumber.eq(_this).children().eq(1).get(0).pause();
            })
            /!*点击视频实现暂停和播放*!/
            maskNumber.eq(_this).children().eq(1).on("click",function () {
                if(flag==0){
                    maskNumber.eq(_this).children().eq(1).get(0).pause();
                    flag=1;
                    //alert(flag)
                }else{
                    maskNumber.eq(_this).children().eq(1).get(0).play();
                    flag=0;
                }
            })
        })
    }
}*/

/*左边侧边栏tab切换*/
function teamChange() {
    var teamLi=$(".team_name").find("li");
    var member_total=$(".sum_member").find(".member_total")
    teamLi.hover(function () {
        var _this=$(this).index();
        $(this).addClass("team_active").siblings().removeClass("team_active");
        member_total.eq(_this).css("display","block").siblings().css("display","none");
    })
}
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var design=$("#design");
        design.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
