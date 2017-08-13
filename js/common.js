$(function () {
    navChange();
/*    teamChange();*/
  /*  videoClick();*/
    /* videoChange();*/
/*    leftNav();*/
  /* var unique;*!/*/
})
/*鼠标滑过导航效果与鼠标划出当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
   /*  var index=$("#index");
    var company=$("#company");*/
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    })
}
/*导航栏固定在左侧*/
/*function leftNav() {
    var headerHeight=$("header").height();
    var right_line=$(".right_list").find(".line");
    var right_nav=$(".right_list").find(".nav");
    var lineHeight=right_line.height();
    var navHeight=right_nav.height();
    var totalHeight=lineHeight+navHeight+headerHeight;
    $(window).scroll(function () {
        var left_list=$(".left_list");
        var right_list=$(".right_list");
        if($(document).scrollTop()>totalHeight){

            left_list.css({"position":"fixed","bottom":"0","height":"100%"});

            right_list.css("margin-left","15%");
        }else{
            left_list.css({"position":"static"});
            right_list.css("margin-left","0");
        }
    })

    /!*$(window).scroll(function () {

    })*!/

}*/
/*当前页面始终添加特殊类*/
/*function navActive(){

}*/

