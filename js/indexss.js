
$(function () {
    nav();
    videoScroll();

})
/*导航浮动*/
function nav() {
    var nav_li= $(".nav_ul").find("li");
    // alert(nav_li.length)
    nav_li.hover(function () {
        $(this).addClass("mengceng").siblings().removeClass("mengceng");
    })
}
/*视频小窗口显示*/
/*function videoScroll() {
    var ha = ( $('#videoBox').offset().top + $('#videoBox').height());
    $(window).scroll(function(){
        if ( $(window).scrollTop() > ha + 500 ) {
            $('#videoBox').css('bottom','0');
        } else if ( $(window).scrollTop() < ha + 200) {
            $('#videoBox').removeClass('out').addClass('in');
        } else {
            $('#videoBox').removeClass('in').addClass('out');
            $('#videoBox').css('bottom','-500px');
        };

    });


    var video_h=($("#videoPlay").offset().top+$("#videoPlay").height())
    alert(video_h)
}*/


