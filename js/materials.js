$(function(){
    videoSwitch();
   /* var list =$(".con").find("dl");
    var video_member =list.find(".video_member");
    var video_img =list.find(".video_img");
    var flag=1;
    list.on("click",function () {
        //       alert($(this).index());
        var _this=$(this);
        video_member.eq(_this.index()).get(0).play();
        $(this).children().eq(0).children().eq(1).css("display","none");
        console.log(video_member.eq(_this.index()).get(0).paused);
        jianting(_this)
    });
    function jianting(th){
        var video_member =list.find(".video_member");
        setInterval(function () {
            if (video_member.eq(th.index()).get(0).paused) {
                //alert(1);
                th.children().children().eq(1).css("display","block");
            }
        },10)
    }*/
});
/*视频、蒙版的消失与出现*/
function videoSwitch(){
    var mask=$(".con").find(".mask");
    //alert(mask.length)
    var member_content=$(".member_total").find(".member_content");
    var total_video=$(".total_video");
    var maskVideo=$(".total_video").find(".maskVideo");
    var flag=1;
    member_content.on("click",function(){
        var _this=$(this).index();
        //alert(_this);
        mask.css("display","block");
        total_video.css("display","block");
        maskVideo.eq(_this).css("display","block").siblings().css("display","none");
        flag=1;
        if(flag==1){
            maskVideo.eq(_this).children().eq(1).get(0).play();
            flag=0;
        }
        /*点击蒙层让视频暂停和消失*/
        mask.on("click",function () {
            mask.css("display","none");
            maskVideo.eq(_this).children().eq(1).get(0).pause();
            maskVideo.eq(_this).css("display","none");
            total_video.css("display","none");
        })
        /*点击视频上的叉，让视频和蒙版消失，同时暂停。*/
        maskVideo.eq(_this).children().eq(0).on("click",function(){
            mask.css("display","none");
            maskVideo.eq(_this).children().eq(1).get(0).pause();
            maskVideo.eq(_this).css("display","none");
            total_video.css("display","none");/*total_video也要隐藏*/
        })
        /*点击视频实现暂停和播放*/
        maskVideo.eq(_this).children().eq(1).on("click",function () {
            if(flag==0){
                maskVideo.eq(_this).children().eq(1).get(0).pause();
                flag=1;
            }else{
                maskVideo.eq(_this).children().eq(1).get(0).play();
                flag=0;
            }
        })
    })
}
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var materials=$("#materials");
        materials.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
