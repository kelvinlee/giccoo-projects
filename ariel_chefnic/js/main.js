/**
 * Created by miller on 16/9/7.
 */
$(document).ready(function () {
    var _ipApiUrl = 'http://api.giccoo.com/api/ip/';
    var _linkUrl = "";

    //禁止滚动
    var enabledTouch = true;
    // $(document).on("touchstart touchmove mousedown mousemove", function (event) {
    $(document).on("touchmove mousemove", function (event) {
        var tag = $(event.target).parents()[0].tagName;
        var tagclass = $(event.target).parents(".share").size();
        var thistag = event.target.tagName;
        if (tag != "A" && tag != "INPUT" && tag != "TEXTAREA" && tag != "SELECT" && thistag != "A" && thistag != "INPUT" && thistag != "TEXTAREA" && thistag != "SELECT" && thistag != "VIDEO" && tagclass == 0) {
            if (!enabledTouch)
                event.preventDefault();
        }
    });

    //判断设备
    if (/iPhone|iPod|Android/.test(navigator.userAgent)) {
        //if mobile
        window.onResize = _onResize();
        _onResize();
        function _onResize(){
            var docEl = document.documentElement;
            var default_value = 640;
            var clientWidth = docEl.clientWidth;
            var scale = 1;
            docEl.style.fontSize = 100 * scale * (clientWidth / default_value) + 'px';
        }

    } else {
        //if pc
        var _pcVideo = '<embed src="http://player.video.qiyi.com/a4d5301564a7d7f98ecce09ce8284523/0/0/w_19rsw0ni5x.swf-albumId=6263790809-tvId=6263790809-isPurchase=0-cnId=20" allowFullScreen="true" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
        $('#mobile_video').remove();
        $('.main_video').append(_pcVideo);
    }
    //视频
    $('#video2').css('display','none');
    $('#video3').css('display','none');
    $('.video_back').css('display','none');

    $('#video_click').on('click',function () {
        $('#video2').css('display','block');
        $('#video3').css('display','block');
        $('.video_back').css('display','block');
        $('#video_click').css('display','none');
    });
    $('.video_back').on('click',function () {
        $('#video2').css('display','none');
        $('#video3').css('display','none');
        $('.video_back').css('display','none');
        $('#video_click').css('display','block');
    });
    
    $('.lottery_btn').on('click',function () {
        enabledTouch = false;
        $('.lottery_overlay').css('display','block');
    });

    $('.tips_btn').on('click',function () {
        enabledTouch = false;
        $('.tips_overlay').css('display','block');
    });
    $('.colseBtn').on('click',function () {
        enabledTouch = true;
        $('.tips_overlay').fadeOut(400);
    });

    //检查电话号码是否合法
    function checkMobile(value) {
        var reg = /^(0|86|17951)?(13|15|17|18|14)[\d]{9}$/;
        return reg.test(value);
    }
    $('.post_number').on("click", function () {
        var number = $(".number").find('input').val(); //手机
        if(!checkMobile(number)){
            alert("请输入正确手机号!");
        }else {
            $('.start').css('display','none');
            $('.loading').css('display','block');

            $.getJSON(_ipApiUrl,function(data){
                // alert("数据: " + data + "\n状态: " + status);
                if(data.reason == 'success'){
                    console.log("success");
                    var address = data.info.content.address;
                    console.log(address);
                    if(address == "北京市"){
                        $('.result_copy').text("不用气馁,前往官网了解更多有奖活动！");
                        $('.link_btn').text("前往官网");
                        _linkUrl = "";

                    }else{
                        $('.result_copy').text("现在购买碧浪商品，有更多大奖等你来拿！");
                        $('.link_btn').text("前往商城");
                        _linkUrl = "";
                    }
                    $('.link_btn').on('click',function () {
                        window.location.href = _linkUrl;
                    });
                    $('.loading').fadeOut(800,function () {
                        $('.result').fadeIn();
                    });

                }else {
                    alert("请求失败")
                }

            });
        }
    });
});