/**
 * Created by miller on 16/9/7.
 */
$(document).ready(function () {
    
    var videoNum = 12;
    var dishNum = 12;
    var _ipApiUrl = 'http://api.giccoo.com/api/ip/';
    var _lotteryApiUrl = 'Http://api.giccoo.com/admin/ariel/lottery';
    var _getVideoPicsUrl = "http://api.giccoo.com/admin/ariel/video/?size=" + videoNum;
    var _picBeforeUrl = 'http://image.giccoo.com/Active/';
    var _getDishUrl = 'http://api.giccoo.com/admin/ariel/dish/?size=' + dishNum;
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
        console.log("mobile");
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
        console.log("PC");
        _currentDevice = 'PC';
        /*var _pcVideo = '<embed src="http://player.video.qiyi.com/a4d5301564a7d7f98ecce09ce8284523/0/0/w_19rsw0ni5x.swf-albumId=6263790809-tvId=6263790809-isPurchase=0-cnId=20" allowFullScreen="true" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
        $('#mobile_video').remove();
        $('.main_video').append(_pcVideo);*/
        
        var docEl = document.documentElement;
        docEl.style.fontSize = 100 + 'px';
    };

    /*获取视频/!**/
    $('.video_back').css('display','none');
    // $('#video_click').css('display','none');
    var _hideVideos=[];
    $.getJSON(_getVideoPicsUrl,function (data) {
       if (data.reason === 'success') {
           var _data = data.info;
           console.log(_data);
           _data.reverse();
           console.log(_data);
           for (var i = 0; i < _data.length; i++) {
               var obj = _data[i];
               var _pic = _picBeforeUrl + obj.image;
               var _link = obj.link;
               var _name =obj.name;
               var _id = 'video' + i;
               var _dom = '<div class="small_video" id=' + _id + '><a target="_blank" href=' + _link + '><img class="video_pic" src=' + _pic + '></a><div class="videoName">' +_name +'</div></div>';
               $('.pic_container').append(_dom);

               if (i != 0) {
                   _hideVideos.push(_id)
               }
           }
           console.log(_hideVideos);
           function controlVideoDom(show) {
               if(show == true){
                   for (var i = 0; i < _hideVideos.length; i++) {
                       var obj = _hideVideos[i];
                       $('#'+obj).css('display','block');
                   }
                   $('.video_back').css('display','block');
                   $('#video_click').css('display','none');
               }else {
                   for (var k = 0; k < _hideVideos.length; k++) {
                       var objK = _hideVideos[k];
                       $('#'+objK).css('display','none');
                   }
                   $('.video_back').css('display','none');
                   $('#video_click').css('display','block');
               }
           }
           //视频控制
           $('.video_back').css('display','none');
           if(_hideVideos.length != 1 && _hideVideos.length != 0){
               controlVideoDom(false);
               $('.video_back').css('display','none');
               $('#video_click').on('click',function () {
                   event.preventDefault();
                   controlVideoDom(true);
               });
               $('.video_back').on('click',function () {
                   event.preventDefault();
                   controlVideoDom(false);
               });
           }else {
               //如果只有一个视频,点击按钮消失
               $('#video_click').css('display','none');
           }

       }else {
           console.log(data.reason);
       }
    });

    //获取菜谱
    var dishArray = [];
    $.getJSON(_getDishUrl,function (data) {
        if (data.reason === 'success') {
            var _data = data.info;
            _data.reverse();
            for (var i = 0; i < dishNum; i++) {
                var obj = _data[i];
                var _image = _picBeforeUrl + obj.image;
                var _link = obj.link;
                var _avatar = _picBeforeUrl + obj.avatar;
                var name = obj.name;
                var username =  obj.username;
                // var _tips = _picBeforeUrl + obj.tips;
                // var _id = obj.id;
                var dish = {
                    'tips': _picBeforeUrl + obj.tips,
                    'id': obj.id
                };
                dishArray.push(dish);
                 // ' <a  target="_blank" href=' + _link + '><div class="small_video" id=' + _id + '><img src=' + _pic + '></div></a>'
                var _dom = '<div class="dish"><div class="dishLeft"><a class="dishLink" target="_blank" href='+ _link + '><img class="dish_pic" src=' + _image + '></a></div><div class="dish_info"><img class="dish_makerPic" src='+ _avatar +' alt=""> <div class="user_name">'+ username + '</div> <div class="dish_name">' + name +'</div> <div class="tips_fakeBtn">碧浪TIPS</div> </div><div class="tips_btn"></div></div>';
                $('#dishContanier').append(_dom);
            }
            console.log(dishArray);
            $('.tips_btn').on('click',function (e) {
                enabledTouch = false;
                var _num = $(this).parent().index();
                console.log(_num);
                $('.tips_path').attr('src',dishArray[_num].tips);
                $('.tips_overlay').css('display','block');

            });
            // console.log(_dishPic);
        }else {
            console.log(data.reason);
        }
    });

    $('.lottery_btn').on('click',function () {
        enabledTouch = false;
        $('.lottery_overlay').css('display','block');
        $('.start').css('display','block');
    });


    $('.colseBtn').on('click',function () {
        enabledTouch = true;
        $('.tips_overlay').fadeOut(400);
    });


    //跳转链接
    /*$('.join_btn').on('click',function () {
        window.open('http://www.xiachufang.com/event/100158777/','_blank')

    });*/
    /*$('.save_btn').on('click',function () {
        window.open('http://www.xiachufang.com/recipe_list/103474481/','_blank')
    });*/

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
                console.log(data);
                nextResult();
                /*if(data.recode == 201){
                    nextResult();
                }else if(data.recode == 206){
                    alert(data.reason);
                    $('.loading').css('display','none');
                    $('.lottery_overlay').css('display','none');
                    $(".number").find('input').val("");
                }*/
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
                                _linkUrl = "http://sale.jd.com/act/gB3aNFEkQIr4qVx.html";
                            }else{
                                _linkUrl = "http://sale.jd.com/m/act/gB3aNFEkQIr4qVx.html";
                            }

                        }

                        $('.result_copy').text("现在购买碧浪商品，不仅有满199减100，还有价值2000元的海尔洗衣机等你来抢！");
                        // $('.link_btn').text("前往商城");

                        if(_currentDevice === "PC"){
                            _linkUrl = "http://sale.jd.com/act/gB3aNFEkQIr4qVx.html";
                        }else{
                            _linkUrl = "http://sale.jd.com/m/act/gB3aNFEkQIr4qVx.html";
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