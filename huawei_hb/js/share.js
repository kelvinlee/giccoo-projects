$(function(){
    window.token='';
    window.shareData = {title: 'HUAWEI P9首销体验店查询',
    desc: 'HUAWEI P9中国首发开启，全国超过万家门店有售。',
    link: 'http://2016.ithinky.com/huawei/mobile.html',
    imgUrl: 'http://2016.ithinky.com/huawei/share.jpg',
    success: function () {
       
    },
    cancel: function () { 
    } };
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        
            $.ajax({
                type: "post",
                url: "http://2016.ithinky.com/wxapi/jssdk.php",
                dataType: 'json',
                data: {
                    url: window.location.href
                },
                success: function (data) {
                    window.token=data.token;
                    wx.config({
                        debug: false,
                        appId: data.appid,
                        timestamp: data.timestamp,
                        nonceStr: data.noncestr,
                        signature: data.signature,
                        jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                        ]
                    })
                    wx.ready(function () {
                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);

                        
                    })
                    wx.error(function (res) {
                    // alert(res)
                })
                },
                error: function (xhr, ajaxOptions, thrownError) {
                // alert("Http status: " + xhr.status + " " + xhr.statusText + "\najaxOptions: " + ajaxOptions + "\nthrownError:" + thrownError + "\n" + xhr.responseText);
            }
        })

}
})

