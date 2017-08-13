$(function () {
    navChange();
    season();
    teamChange();
})
/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        //alert(1)
        var fitment_notice=$("#fitment_notice");
        fitment_notice.addClass("nav_active").siblings().removeClass("nav_active");
    })
}
/*鼠标点击左侧栏目*/
function teamChange() {
    var teamLi=$(".team_name").find("li");
    var notice_content=$(".big_fitment").find(".notice_content");
    //alert(company_honor.length);
    //alert(member_information.length);
    teamLi.click(function () {
        //alert(1)
        $(this).addClass("team_active").siblings().removeClass("team_active");
        var _this=$(this).index();
        notice_content.eq(_this).show().siblings().hide();
    })
}
/*各个季度tab切换*/
function season() {
    var season=$(".season_content").find(".season");
    var red_content=$(".big_red").find(".red_content");
    var redOther=$(".big_red").find(".red_hide")
    redOther.hide();
    season.on("click",function () {
        var _this=$(this).index();
       /* alert(1)*/
        red_content.eq(_this).show().siblings().hide();
    })
}