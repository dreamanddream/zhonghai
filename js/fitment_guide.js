$(function () {
    navChange();
    ellipsis();
})
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var fitment_guide=$("#fitment_guide");
        fitment_guide.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
/*兼容ie和火狐出现多行省略号*/
function ellipsis() {
    var front_neirong=$(".front_introduction").find(".front_neirong");
    front_neirong.xdlines({
        max:4  //设置文本的最大行数
    })
}