
$(document).ready(function load (){
	loadWechatConfig();
  	wx.ready(function() {
    var shareContent;
    shareContent = {
      title: "比起双手，TA 比你更灵活",
      desc: "",
      link: "http://m.giccoo.com/dayan/",
      imgUrl: "http://m.giccoo.com/dayan/img/ico.jpg",
      success: function() {},
      cancel: function() {}
    };
    wx.onMenuShareTimeline(shareContent);
    wx.onMenuShareAppMessage(shareContent);
    wx.onMenuShareQQ(shareContent);
    return wx.onMenuShareWeibo(shareContent);
  });

  	var mydate = new Date();
	checkNum()

	var nowNum=0

 	var ri=mydate.getDate()
	var yue=mydate.getMonth()
    var num80=((yue-7)*31+(ri-30))*82

	function checkNum(){
		

		
		
		



		$.get("http://api.giccoo.com/count/get/jiaomu1",function(msg){
				if (msg.recode == 200) {
					//console.log("update success", msg.info)
					//alert(msg.info[0].count)
					nowNum=msg.info[0].count+num80+1700
					setText()
				}else{
					//alert("get faild")
				}
		})
	}

	function setText(){
		$("#likeNum").text(parseInt(nowNum)+"人喜欢");
	}

	$("#btn").click(function(){
		window.location.href="http://www.lancome.com.cn/landing/genifique-yeux-lp.html?dc_user_id=%m&utm_source=Zhihu&utm_medium=NVD_DISP&utm_content=153555280_03-5Zhihu_Nativearticle_icon&utm_campaign=CN_20170601_GLP_LPD_LAN_FS_Regular_NVD_DISP_DIG";
	})

	var iflike=0

	$("#like").click(function(){
		$("#like2").css({"display":"block"});
		if (iflike==0) {
			//这里反馈

			//=======
			$.post("http://api.giccoo.com/count/update", {id: "jiaomu1"},function(msg){
				if (msg.recode == 200) {
					//alert("update success")
					nowNum++
					setText()
				}else{
					//alert("update faild")
				}
			})
			//=======
		};

		iflike=1

	})

});






var loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "http://api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};