
$(document).ready(function load (){
	loadStart()

	loadWechatConfig();
 	 wx.ready(function() {
   	 var AppMShareContent, TimelineShareContent;
   	 isWechat = true;
  	  AppMShareContent = {
    	title: "舒适空间自由启程，快来体验二代瑞风M5的7重舒适！",
		desc: "致敬时代驱动力",
		link: "http://m.giccoo.com/jac/",
		imgUrl: "http://m.giccoo.com/jac/img/ico.jpg",
		success: function() {},
		cancel: function() {}
  	  };
  	  TimelineShareContent = {
   	   title: "舒适空间自由启程，快来体验二代瑞风M5的7重舒适！",
    	  desc: "致敬时代驱动力",
    	  link: "http://m.giccoo.com/jac/",
   		  imgUrl: "http://m.giccoo.com/jac/img/ico.jpg",
  	    success: function() {},
  	    cancel: function() {}
   	 };
   	 wx.onMenuShareTimeline(TimelineShareContent);
  	  wx.onMenuShareAppMessage(AppMShareContent);
 	   wx.onMenuShareQQ(AppMShareContent);
	    return wx.onMenuShareWeibo(TimelineShareContent);
	  });
 	function loadWechatConfig() {
	  var hm, s, url;
	  url = encodeURIComponent(window.location.href.split("#")[0]);
	  hm = document.createElement('script');
	  hm.src = "http://api.giccoo.com/config?url=" + url;
	  s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(hm, s);
	};

	var nowPage = 0;
	function setSlide(){
		$(".goend").click(function(){
			nowPage=10
			goPage()
		})
		$("#btnShare").click(function(){
			$("#shareLayer").css({"display":"block"})
			TweenLite.to($("#shareLayer"),1,{opacity:1})
			$("#logo").css({"opacity":.5})
		})
		$("#shareLayer").click(function(){
			TweenLite.to($("#shareLayer"),1,{opacity:0,display:"none"})
		})

		$("#doneLayer").click(function(){
			TweenLite.to($("#doneLayer"),1,{opacity:0,display:"none"})
			setTimeout("$('#doneLayer').css({'opacity':0,'display':'none'})",500)

		})
		var startY = 0;
		var startScrollTop;
		var pageUpDown =0
		var sliderA=[$('#starter'),$('#starter1'),$('#starter2'),$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5'),$('#page6'),$('#page7'),$('#page8')]

		for (var i = 1; i < sliderA.length; i++) {
			//TweenLite.set(sliderA[i],{yPercent:100})
			//sliderA[i].css({"top":"100%"})
			sliderA[i].css({"transform":"translate3d(0%,100%,0)","-webkit-transform":"translate3d(0%,100%,0);"})
		};


		$('body')[0].addEventListener('touchstart',startTouch,false)
		$('body')[0].addEventListener('touchmove',moveTouch,false)
		$('body')[0].addEventListener('touchend',endTouch,false)

		function startTouch(event){
			startY=event.touches[0].clientY
			pageUpDown=0
		}
		function moveTouch(event){
			var nowY=event.touches[0].clientY
			event.preventDefault();
			if (nowY-startY>80&&nowPage!=0) {
				pageUpDown=1
			}else if (nowY-startY< -80&&nowPage!=10) {
				pageUpDown=-1
			}else{
				pageUpDown=0
			};	
		}
		function endTouch(event){

			if (pageUpDown == 1) {
				//alert("上一页")
				nowPage--
				goPage()
			}else if (pageUpDown == -1) {
				//alert("下一页")
				nowPage++
				goPage()
			}else if (pageUpDown==0) {
				//alert("不翻页")
			};	
		} 
		function goPage(){
			// setTimeout(function(){
			// 		if(0!=nowPage&&0!=nowPage+1&&0!=nowPage-1){sliderA[0].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(1!=nowPage&&1!=nowPage+1&&1!=nowPage-1){sliderA[1].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(2!=nowPage&&2!=nowPage+1&&2!=nowPage-1){sliderA[2].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(3!=nowPage&&3!=nowPage+1&&3!=nowPage-1){sliderA[3].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(4!=nowPage&&4!=nowPage+1&&4!=nowPage-1){sliderA[4].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(5!=nowPage&&5!=nowPage+1&&5!=nowPage-1){sliderA[5].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(6!=nowPage&&6!=nowPage+1&&6!=nowPage-1){sliderA[6].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(7!=nowPage&&7!=nowPage+1&&7!=nowPage-1){sliderA[7].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(8!=nowPage&&8!=nowPage+1&&8!=nowPage-1){sliderA[8].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(9!=nowPage&&9!=nowPage+1&&9!=nowPage-1){sliderA[9].css({"display":"none"});}
			// 	},500)
			// setTimeout(function(){
			// 		if(10!=nowPage&&10!=nowPage+1&&10!=nowPage-1){sliderA[10].css({"display":"none"});}
			// 	},500)
			
			if(0!=nowPage&&0!=nowPage+1&&0!=nowPage-1){
				setTimeout(function(){sliderA[0].css({"display":"none"});},500)
			}else{
				sliderA[0].css({"display":"block"});
			}
			if(1!=nowPage&&1!=nowPage+1&&1!=nowPage-1){
				setTimeout(function(){sliderA[1].css({"display":"none"});},500)
			}else{
				sliderA[1].css({"display":"block"});
			}
			if(2!=nowPage&&2!=nowPage+1&&2!=nowPage-1){
				setTimeout(function(){sliderA[2].css({"display":"none"});},500)
			}else{
				sliderA[2].css({"display":"block"});
			}
			if(3!=nowPage&&3!=nowPage+1&&3!=nowPage-1){
				setTimeout(function(){sliderA[3].css({"display":"none"});},500)
			}else{
				sliderA[3].css({"display":"block"});
			}
			if(4!=nowPage&&4!=nowPage+1&&4!=nowPage-1){
				setTimeout(function(){sliderA[4].css({"display":"none"});},500)
			}else{
				sliderA[4].css({"display":"block"});
			}
			if(5!=nowPage&&5!=nowPage+1&&5!=nowPage-1){
				setTimeout(function(){sliderA[5].css({"display":"none"});},500)
			}else{
				sliderA[5].css({"display":"block"});
			}
			if(6!=nowPage&&6!=nowPage+1&&6!=nowPage-1){
				setTimeout(function(){sliderA[6].css({"display":"none"});},500)
			}else{
				sliderA[6].css({"display":"block"});
			}
			if(7!=nowPage&&7!=nowPage+1&&7!=nowPage-1){
				setTimeout(function(){sliderA[7].css({"display":"none"});},500)
			}else{
				sliderA[7].css({"display":"block"});
			}
			if(8!=nowPage&&8!=nowPage+1&&8!=nowPage-1){
				setTimeout(function(){sliderA[8].css({"display":"none"});},500)
			}else{
				sliderA[8].css({"display":"block"});
			}
			if(9!=nowPage&&9!=nowPage+1&&9!=nowPage-1){
				setTimeout(function(){sliderA[9].css({"display":"none"});},500)
			}else{
				sliderA[9].css({"display":"block"});
			}
			if(10!=nowPage&&10!=nowPage+1&&10!=nowPage-1){
				setTimeout(function(){sliderA[10].css({"display":"none"});},500)
			}else{
				sliderA[10].css({"display":"block"});
			}




			 for (var i = 0; i < sliderA.length; i++) {
			 	if (i==nowPage-1) {
			 		
			 		sliderA[i].css({"transform":"translate3d(0%,-100%,0)","-webkit-transform":"translate3d(0%,-100%,0);"});
			 		//TweenLite.to(sliderA[i],.5,{yPercent:-100})
			 		//if (i>2&&i<10) {pageAni2(i-3);};
			 		//if (i==0) {ani11()};

			 	};
			 	if (i==nowPage) {
			 		$(".goend").css({"display":"none"});
			 		sliderA[i].css({"display":"block"})
			 		//sliderA[i].css({"top":"0%"})
			 		sliderA[i].css({"transform":"translate3d(0%,0%,0)","-webkit-transform":"translate3d(0%,0%,0);","transition":"all .5s ease","-webkit-transition":"all .5s ease;"});
			 		//TweenLite.to(sliderA[i],.5,{yPercent:0})
			 		if (i==0) {ani1()};
			 		if (i==1) {ani2()};
			 		if (i==2) {ani3()};
			 		if (i>2&&i<10) {pageAni1(i-3);$(".goend").css({"display":"block"});};

			 	};
			 	if (i==nowPage+1) {
			 		//sliderA[i].css({"top":"100%"})
			 		sliderA[i].css({"transform":"translate3d(0%,100%,0)","-webkit-transform":"translate3d(0%,100%,0);"});
			 		//TweenLite.to(sliderA[i],.5,{yPercent:100})
			 		//if (i>2&&i<10) {pageAni2(i-3);};
			 		//if (i==0) {ani11()};
			 	};
			 }
		}
	
	}

	function ani1(){
		var t1=$("#p1t1")
		var t2=$("#p1t2")
		var t3=$("#p1t3")
		var t4=$("#p1t4")
		var t5=$("#p1t5")

		// t1.css({"opacity":"1","transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0);","transition":"all 1s ease 1s","-webkit-transition":"all 1s ease 1s"});
		// t2.css({"opacity":"1","transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0);","transition":"all 1s ease 1.1s","-webkit-transition":"all 1s ease 1.1s"});
		// t3.css({"opacity":"1","transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0);","transition":"all 1s ease 1.2s","-webkit-transition":"all 1s ease 1.2s"});
		// t4.css({"opacity":"1","transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0);","transition":"all 1s ease 1.3s","-webkit-transition":"all 1s ease 1.3s"});
		// t5.css({"opacity":"1","transform":"translate3d(-50%,-50%,0)","-webkit-transform":"translate3d(-50%,-50%,0);","transition":"all 1s ease 1.4s","-webkit-transition":"all 1s ease 1.4s"});
		// TweenLite.set(t1,{opacity:0,xPercent:-50,yPercent:-50,y:100});
		// TweenLite.set(t2,{opacity:0,xPercent:-50,yPercent:-50,y:100});
		// TweenLite.set(t3,{opacity:0,xPercent:-50,yPercent:-50,y:50});
		// TweenLite.set(t4,{opacity:0,xPercent:-50,yPercent:-50,y:50});
		// TweenLite.set(t5,{opacity:0,xPercent:-50,yPercent:-50,y:50});

		// TweenLite.to(t1,1,{opacity:1,y:0,ease:Back.easeOut,delay:1});
		// TweenLite.to(t2,1,{opacity:1,y:0,ease:Back.easeOut,delay:2});
		// TweenLite.to(t3,1,{opacity:1,y:0,ease:Back.easeOut,delay:3});
		// TweenLite.to(t4,1,{opacity:1,y:0,ease:Back.easeOut,delay:3.5});
		// TweenLite.to(t5,1,{opacity:1,y:0,ease:Back.easeOut,delay:4});
	}
	function ani11(){
		var t1=$("#p1t1")
		var t2=$("#p1t2")
		var t3=$("#p1t3")
		var t4=$("#p1t4")
		var t5=$("#p1t5")

		t1.css({"opacity":"0","transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0);","transition":"all 0s ease","-webkit-transition":"all 0s ease"});
		t2.css({"opacity":"0","transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0);","transition":"all 0s ease","-webkit-transition":"all 0s ease"});
		t3.css({"opacity":"0","transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0);","transition":"all 0s ease","-webkit-transition":"all 0s ease"});
		t4.css({"opacity":"0","transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0);","transition":"all 0s ease","-webkit-transition":"all 0s ease"});
		t5.css({"opacity":"0","transform":"translate3d(-50%,-30%,0)","-webkit-transform":"translate3d(-50%,-30%,0);","transition":"all 0s ease","-webkit-transition":"all 0s ease"});

	}

	function ani2(){	
       	var t1=$("#p2t1")
		var t2=$("#p2t2")
		var t3=$("#p2t3")
		var t4=$("#p2t4")

		t1.css({'opacity':1})
		t2.css({'opacity':1})
		t3.css({'opacity':1})
		t4.css({'opacity':1})
		// TweenLite.from(t1,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05})
		// TweenLite.from(t2,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*2})
		// TweenLite.from(t3,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*3})
		// TweenLite.from(t4,1,{opacity:1,rotationY:-90,ease:Back.easeOut,delay:.5+.05*4})
	}

	
	function ani3(){	
       	var t1=$("#p3t1")
		var t2=$("#p3t2")
		t1.css({'opacity':1})
		t2.css({'opacity':1})
		// TweenLite.from(t1,1,{opacity:0,rotationY:-90,ease:Back.easeOut,delay:.5+.05})
		// TweenLite.from(t2,1,{opacity:0,rotationY:-90,ease:Back.easeOut,delay:.5+.05*2})
	}

	function pageAni1(i){
		var bigN=[$("#num1"),$("#num2"),$("#num3"),$("#num4"),$("#num5"),$("#num6"),$("#num7")];
		var sq=[$("#m1t0"),$("#m2t0"),$("#m3t0"),$("#m4t0"),$("#m5t0"),$("#m6t0"),$("#m7t0")];
		var tA=[
		[$("#m1t1")],
		[$("#m2t1")],
		[$("#m3t1")],
		[$("#m4t1")],
		[$("#m5t1")],
		[$("#m6t1")],
		[$("#m7t1")],

		];

		var car=[$("#mcar1"),$("#mcar2"),$("#mcar3"),$("#mcar4"),$("#mcar5"),$("#mcar6"),$("#mcar7")];
		var end=[$("#m1_end"),$("#m2_end"),$("#m3_end"),$("#m4_end"),$("#m5_end"),$("#m6_end"),$("#m7_end")];
		// for (var j = 0; j < tA[i].length; j++) {
		// 	TweenLite.from(tA[i][j],1,{opacity:0,ease:Back.easeOut,delay:.5+0.07*j})
		// };
		//bigN[i].css({"transform":"translate3d(-100%,0%,0)","-webkit-transform":"translate3d(-100%,0%,0)"})
		
		bigN[i].css({"transform":"translate3d(0%,0%,0)","-webkit-transform":"translate3d(0%,0%,0);","transition":"all 3s ease","-webkit-transition":"all 3s ease"});
		//TweenLite.to(bigN[i],3,{opacity:1,"transform":"translate3d(0%,0%,0)","-webkit-transform":"translate3d(0%,0%,0)",ease:Quint.easeOut,delay:.5})
		// TweenLite.from(sq[i],2,{opacity:0,y:"+=60",ease:Elastic.easeOut,delay:.5})
	}
	function pageAni2(i){
		var bigN=[$("#num1"),$("#num2"),$("#num3"),$("#num4"),$("#num5"),$("#num6"),$("#num7")];
		bigN[i].css({"transform":"translate3d(-100%,0%,0)","-webkit-transform":"translate3d(-100%,0%,0);","transition":"all 3s ease","-webkit-transition":"all 3s ease"});
	}


function loadStart() {

	var loadStepOne = [".page1t",".bg","#car1",".page2t",".page3t",".p12pic",".numberPic",".mcar"]//

var _loadNum = 0
var _loadMax = 0
	for (var i = 0; i< loadStepOne.length;i++) {
		_loadMax += $(loadStepOne[i]+" [data-src]").length;
	}
	console.log(_loadMax);
	for (var i = 0; i< loadStepOne.length;i++) {
		$(loadStepOne[i]+" [data-src]").each(function(){
			var img = new Image();
			img.onload = function(){
				_loadNum++;
				// console.log(parseInt(_loadNum/_loadMax*100));
				$("#loading-text").text(parseInt(_loadNum/_loadMax*82+18));
				if (_loadNum>=_loadMax) {
					setTimeout(function(){
						loadEnd();
					},500)
					//loadEnd()
				}
			}
			img.src = $(this).attr("data-src");
			//if (loadStepOne[i]==".bg") {;}else{img.style="width:100%;";};
			img.style="width:100%;";
			$(this).after(img);
			$(this).remove();
		})
	}
}
function loadEnd() {
	setSlide();
	ani1();
	 
	console.log("load end")
	$(".loading").addClass("fadeOut animated");
	setTimeout(function(){
		$(".loading").remove()
	},500)

}

});


