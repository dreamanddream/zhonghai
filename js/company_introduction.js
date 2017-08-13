$(function () {
    navChange();
    teamChange();
    time();
    videoChange();
})
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var company=$("#company");
        company.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
/*鼠标滑过左侧栏目*/
function teamChange() {
    var teamLi=$(".team_name").find("li");
    var company_honor=$(".bigCompany").find(".company_honor");
    //alert(company_honor.length);
    //alert(member_information.length);
    var company=$("#company");
    teamLi.click(function () {
        //alert(1)
        $(this).addClass("team_active").siblings().removeClass("team_active");
        _this=$(this).index();
        company_honor.eq(_this).css("display","block").siblings().css("display","none");
    })
}
/*时间轴*/
function time() {
    var timeLi=$(".time_line").find("a");
    var honor_list=$(".honor_collect").find(".honor_list");
   // alert(honor_list.length);
    timeLi.click(function () {
        var _this=$(this).parents().index();
        console.log(_this);
        $(this).addClass("selected").parent().siblings().children().removeClass("selected");/*点击当前按钮图标变大*/
        honor_list.eq(_this).css("display","block").siblings().css("display","none");
    })
}
/*在不同的年份，显示对应的视频*/
function videoChange() {
    var honorVideo=$(".honorVideo");
    honorVideo.click(function () {
        honorVideo.get(0).play();
        honorVideo.get(0).controls=true;
    })
}
