$(function () {
   navChange();
});
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var recruit=$("#recruit");
        recruit.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
