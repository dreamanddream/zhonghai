$(function () {
    navChange();
    newsChange();
})
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var news=$("#news");
        news.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
/*鼠标滑过新闻，文字变色*/
function newsChange() {
    var font_title=$(".font_content").find(".font_title");
    var xiangqing=$(".font_content").find(".xiangqing");
    var xiangA=$(".xiangqing").find("a");
    font_title.hover(function () {
        $(this).css("color","#e22b2b");
    },function () {
        $(this).css("color","#383434");
    })
    xiangqing.hover(function () {
        //alert(1);
        $(this).children().eq(1).css("color","#e22b2b");
    },function () {
        $(this).children().eq(1).css("color","#666");
    })
   /* xiangqing.hover(function () {
        //alert(1);
        $(this).children().eq(0).css("color","#e22b2b");
    },function () {
        $(this).children().eq(0).css("color","#666");
    })*/
}