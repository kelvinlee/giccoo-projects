/**
 * Created by miller on 16/9/7.
 */
$(document).ready(function () {
    var _ipApiUrl = 'http://api.giccoo.com/api/ip/';
    var _lotteryApiUrl = 'Http://api.giccoo.com/admin/ariel/lottery';
    var _currentDevice;

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
        _currentDevice = 'MOBILE';
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
        _currentDevice = 'PC';
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


    //跳转链接
    $('.join_btn').on('click',function () {
        window.open('http://www.xiachufang.com/event/100158777/','_blank')

    });
    $('.save_btn').on('click',function () {
        window.open('http://www.xiachufang.com/recipe_list/103474481/','_blank')
    });
    $('.small_video').on('click',function () {
        window.open('http://www.iqiyi.com/v_19rrm41010.html','_blank')
    });
    $('.dish_btn').on('click',function () {
        window.open('http://www.xiachufang.com/recipe/1079397/','_blank')
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


            //POST 抽奖
            var _data = {'mobile': number};
            $.post(_lotteryApiUrl,_data,function (data, status) {
                if(data.reason == 'success'){
                    console.log(data);
                    if(data.recode == 201){
                        nextResult();
                    }else if(data.recode == 444){
                        alert("您已经参与过抽奖!")
                    }

                }else {
                    alert(data.reason);
                }
            });
            function nextResult() {
                $.getJSON(_ipApiUrl,function(data){
                    // alert("数据: " + data + "\n状态: " + status);
                    if(data.reason == 'success'){
                        var _linkUrl = "";
                        var address = data.info.content.address;
                        console.log(address);
                        if(address == "北京市"){
                            $('.result_copy').text("不用气馁,前往官网了解更多有奖活动！");
                            $('.link_btn').text("前往官网");
                            _linkUrl = "http://www.pg.com.cn/products/detail.aspx?id=30";

                        }else{
                            $('.result_copy').text("现在购买碧浪商品，有更多大奖等你来拿！");
                            $('.link_btn').text("前往商城");

                            if(_currentDevice === "PC"){
                                _linkUrl = "http://sale.jd.com/act/2TwGVQPD3c.html";
                            }else{
                                _linkUrl = "http://sale.jd.com/m/act/2TwGVQPD3c.html";
                            }

                        }

                        $('.link_btn').on('click',function () {
                            window.open(_linkUrl,'_blank')
                        });
                        $('.loading').fadeOut(800,function () {
                            $('.result').fadeIn();
                        });

                    }else {
                        alert("请求失败")
                    }

                });
            }

        }
    });
});