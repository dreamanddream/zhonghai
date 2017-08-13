$(function () {
  navChange();
})
/**/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var fitment_order=$("#fitment_order");
        fitment_order.addClass("nav_active").siblings().removeClass("nav_active");
    })
}