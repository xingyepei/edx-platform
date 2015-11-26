/**
 * Created by liuyuantao on 2015/8/25.
 */
var ScrollUtil = {
    startTimer: function (count) {
        timer = setInterval(function () {
            var imgPath = $("#index-img").attr("src");
            var tmpPath = imgPath.substring(imgPath.lastIndexOf("scroll"), imgPath.lastIndexOf("."));
            var basePath = imgPath.substring(0, imgPath.lastIndexOf("scroll"));
            count++;
            if (count >= 5) {
                count = 1
            }
            var imgName = tmpPath.substr(0, 6) + count;
            ScrollUtil.changeImg(imgName);
        }, 6000);
        return timer;
    },
    changeImg: function (imgName) {
        var basePath = "/static/images/nercel-images/";
        $(".img-btn li").css("background", "#cccccc");
        $("#" + imgName).css("background", "#ffffff");
        $("#index-img").attr("src", basePath + imgName + ".jpg");
    }
}