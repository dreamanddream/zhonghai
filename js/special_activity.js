$(function () {
    navChange();
    /*活动倒计时*/
    var timeStart=$(".activity_time").find(".start");
    var activity_stop=$(".activity_time").find(".activity_stop");
    var activity_start=$(".activity_time").find(".activity_start");
   var deadline=new Date("2017/8/9");
   // console.log(chaoshi)//1502208000000
   var t= setInterval(function () {
       var now=new Date();
        var time=deadline-now;
        //alert(time);
        var days=parseInt(time/1000/60/60/24);
        var hour=parseInt(time/1000/60/60%24);
        var minutes=parseInt(time/1000/60%60);
        var seconds=parseInt(time/1000%60);
        if(time<=0){
            activity_start.css("display","none");
            activity_stop.css("display","block");
            clearInterval(t);
        }
       timeStart.html(days + "天" + hour + "小时" + minutes + "分钟" + seconds + "秒");
    },1000);

   /* var orign_time = new Date("2017/8/9")
    function CountDownTime() {
        var leftTime = new Date();
        var maxTime = orign_time-leftTime;
        if (maxTime >=0) {
            var days = parseInt(maxTime/60/60/ 24, 10); //计算剩余的天数

            var hours = parseInt(maxTime/60/60%24, 10); //计算剩余的小时

            var minutes = parseInt(maxTime/60%60, 10); //计算剩余的分钟

            var seconds = parseInt(maxTime%60, 10); //计算剩余的秒数
            timeStart.html(days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒");
        } else {
            clearInterval(timer);
            activity_start.css("display","none");
            activity_stop.css("display","block");
        }
    }
    timer = setInterval(CountDownTime(),1000);

*/

})

/*鼠标滑过导航,且当前页面始终显示特殊类*/
function navChange() {
    var navLi=$(".nav").find("li");
    //alert(navLi.length)
    navLi.hover(function () {
        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    },function () {
        var special=$("#special");
        special.addClass("nav_active").siblings().removeClass("nav_active");
    })
}







