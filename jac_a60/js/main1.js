// var INDEX = 0;
// var global = {};

$(document).ready(function load (){
	var nowPage = 0;
	var startY = 0;
	var sending = false;
	var startScrollTop;
	var pageUpDown =-1
	var loadingPage=$('.loading')
	var page1=$('#page1')
	var page2=$('#page2')
	var page3=$('#page3')
	var page4=$('#page4')
	var page5=$('#page5')
	var page6=$('#page6')
	var page7=$('#page7')
	var page8=$('#page8')
	var page8_2=$('#page8_2')
	var page8_1=$('#page8_1')
	var page9=$('#page9')
	var page10=$('#page10')
	var _p=0
	var page11=$('#page11')
	var page12=$('#page12')
	var page13=$('#page13')
	var pageA=[page1,page2,page3,page4,page5,page6,page7,page8,page8_2,page8_1,page9,page10]
	var pAA=[
		[$('#age1'),$('#p1t')],
		[$('#age2'),$('#p2t')],
		[$('#age3'),$('#p3t')],
		[$('#p4t1'),$('#p4t2'),$('#p4t3')],
		[$('#p5pic'),$('#p5t1'),$('#p5t2')],
		[$('#p6pic'),$('#p6t1'),$('#p6t2')],
		[$('#p7pic'),$('#p7t1'),$('#p7t2')],
		[$('#p8pic'),$('#p8t1'),$('#p8t2')],
		[$('#p8_2t1'),$('#p8_2t2'),$('#p8_2t3')],
		[$('#p8_1t1'),$('#p8_1t2'),$('#p8_1t3'),$('#p8_1t4')],
		[$('#p9pic'),$('#p9t1'),$('#p9t2')],
		[]
	]
	var citybtn=$('#citybtn')
	var goFormBtn=$('#p11btn1')
	var goUploadBtn=$('#p11btn2')
	var ifcan=0


	// setTimeout(function(){
	// 					loadStart();
	// 	},500)
  start();

// function loadStart() {

// var loadStepOne = [".fullBG",".aniBG",".midPart",".bottomT",".bottomT2",".topT",".midPic",".arrow",".topT2"]//

// var _loadNum = 0
// var _loadMax = 0
// 	for (var i = 0; i< loadStepOne.length;i++) {
// 		_loadMax += $(loadStepOne[i]+" [data-src]").length;
// 	}
// 	console.log(_loadMax);
// 	for (var i = 0; i< loadStepOne.length;i++) {
// 		$(loadStepOne[i]+" [data-src]").each(function(){
// 			var img = new Image();
// 			img.onload = function(){
// 				_loadNum++;
// 				// console.log(parseInt(_loadNum/_loadMax*100));
// 				$("#loadingT").text(parseInt(_loadNum/_loadMax));
// 				TweenLite.to($("#loadingMask"),.1,{opacity:1-_loadNum/_loadMax})
// 				if (_loadNum>=_loadMax) {
// 					setTimeout(function(){
// 						loadEnd();
// 					},500)
// 					//loadEnd()
// 				}
// 			}
// 			img.src = $(this).attr("data-src");
// 			//if (loadStepOne[i]==".bg") {;}else{img.style="width:100%;";};
// 			img.style="width:100%;";
// 			$(this).after(img);
// 			$(this).remove();
// 		})
// 	}
// }
// function loadEnd() {
	 
// 	console.log("load end")
// 	$(".loading").addClass("fadeOut animated");
// 	setTimeout(function(){
// 		$(".loading").remove()
// 	},500)

// 	start();

// }

	function start(){
		//loadingPage.css({'display':'none'})//loading消失
		TweenLite.to($("#loadingMask"),1.8,{opacity:0,delay:.2})
		TweenLite.to(loadingPage,1,{opacity:0,display:'none',delay:2})
		setInterval(function(){
			
			if (_p<99) {
				_p+=9
			}else{
				_p=100
			};
			$("#loading-text").text(_p);
			



		},130)
		checkShare()
		page1.css({'display':'block'})//page1显示
		$('.content')[0].addEventListener('touchstart',startTouch,false)
		$('.content')[0].addEventListener('touchmove',moveTouch,false)
		$('.content')[0].addEventListener('touchend',endTouch,false)
		pageAni()
	}
	function checkShare(){
		var picId = window.location.hash;
		if(picId!=''){
			page13.css({display:'block'});
			ifcan=1
			picId=picId.replace(/#/,'')
			document.getElementById("sharePic").src='http://image.giccoo.com/ad/a60/'+picId
		}else{
			page13.css({display:'none'});
		};
		
	}
	function pageAni(){
		for (var i = 0; i < pageA.length; i++) {
			if (i>nowPage+1||i<nowPage-1) {
				pageA[i].css({display:'none'});
			}else{
				pageA[i].css({display:'block'});
			};
		};

		if (pageUpDown !=0) {
			for (var i = 0; i < pAA[nowPage].length; i++) {
				
				TweenLite.from(pAA[nowPage][i],.7,{y:-100*pageUpDown,opacity:0,delay:.1*i})
			};
		};

	}

	citybtn.click(function(){
		$('.mainPart').css({display:'block'})
		page11.css({display:'block'})
		TweenLite.from(page11,.5,{opacity:0})
		TweenLite.from($('#p11t1'),.5,{y:+50,opacity:0,delay:0.5})
		TweenLite.from($('#p11t2'),.5,{y:+50,opacity:0,delay:0.6})
		TweenLite.from($('#p11pic'),.5,{y:+50,opacity:0,delay:0.7})
		TweenLite.from($('#p11btn1'),.5,{y:+50,opacity:0,delay:0.8})
		TweenLite.from($('#p11btn2'),.5,{y:+50,opacity:0,delay:0.9})
	});
	goFormBtn.click(function(){
		$("#doneLayer").css({display:'none'})
		$(".formPage").css({display:'block'})
		TweenLite.from($(".formPage"),1,{opacity:0})
	});
	$("#doneLayer").click(function(){
		$("#doneLayer").css({display:'none'})
		$(".formPage").css({display:'none'})
	});
	goUploadBtn.click(function(){
		page12.css({display:'block'})
		TweenLite.from(page12,1,{opacity:0})
	});

	$('#btn_submit').click(function(){
		// SendNote("发布作品按钮");
		data = {};
  	data.image = global.canvas.getContent();
  	if (!data.image) {
	    return SendNote("请先选择照片");
	  }
  	if (sending) {SendNote("上传中请稍后..."); return false;}
  	sending = true;
		$.post("http://api.giccoo.com/ad/ad_a60/create/", data, function(msg) {
      sending = false;
      if (msg.recode === 200) {
        // next(msg);
        global.canvas.stopCtrl();
        $('#btn_submit').css({opacity:0});
				$('.up_down').css({display:'block'});
				// if (ifcan==1) {
				// 	var _url=window.location.href
				// 	var m=_url.length
				// 	var n=indexOf('#')
				// 	var j=_url.substring(n,m)
				// 	_url=_url.replace(j,msg.image)
				// 	window.location.href =_url//"http://m.giccoo.com/a60/#"+msg.image
				// 	document.getElementById("fenxiang_link").innerHTML = "http://m.giccoo.com/a60/#"+msg.image;
				// }else{
				// 	var _url=window.location.href
				// 	var m=_url.length
				// 	var n=indexOf('#')
				// 	var j=_url.substring(n,m)
				// 	_url=_url.replace(j,msg.image)
				// 	window.location.href =_url//"http://m.giccoo.com/a60/#"+msg.image
				// 	document.getElementById("fenxiang_link").innerHTML = "http://m.giccoo.com/a60/#"+msg.image;
				// };
				var _url=window.location.href
					var m=_url.length
					var n=_url.indexOf('#')
					// alert(n)
					var j=_url.substring(n+1,m)

					if (n==-1) {
						_url=_url.replace(j,"#"+msg.image+'@!large')
					}else{
						_url=_url.replace(j,msg.image+'@!large')
					};
					
					
					
					document.getElementById("fenxiang_link").innerHTML = "http://m.giccoo.com/jac_a60/#"+msg.image;
					//window.location.href =_url//"http://m.giccoo.com/a60/#"+msg.image
				
				// msg.image
				// http://image.giccoo.com/ad/a60/1481693901227-2623.png
      } else {
        SendNote(msg.reason);
      }
    });
	});
	$('#btn_share').click(function(){
		$('.share_hint').css({display:'block'})
		TweenLite.from($('.share_hint'),1,{opacity:0})
	});
	$('.share_hint').click(function(){
		$('.share_hint').css({display:'none'})
	});
	$('#btn_upform').click(function(){
		$("#doneLayer").css({display:'none'})
		$(".formPage").css({display:'block'})
		TweenLite.from($(".formPage"),1,{opacity:0})
	});
	$('#btn_iwant2').click(function(){
		//$('#page13').css({display:'none'})
		TweenLite.to($("#page13"),1,{opacity:0,display:'none'})
	});

//===========================================================================================翻页
	
	function startTouch(event){
		startY=event.touches[0].clientY
		pageUpDown=0

	}
	function moveTouch(event){
		event.preventDefault()
		var nowY=event.touches[0].clientY
		if (nowY-startY>80&&nowPage!=0) {
			pageUpDown=1
		}else if (nowY-startY< -80&&nowPage!=11) {
			pageUpDown=-1
		}else{
			pageUpDown=0
		};		
	}
	function endTouch(event){
		if (pageUpDown == 1) {
			//alert("上一页")
			nowPage--
		}else if (pageUpDown == -1) {
			//alert("下一页")
			nowPage++
		}else if (pageUpDown==0) {
			//alert("不翻页")
		};
		goPage()
		pageAni()
	}
	function goPage(){
		for (var i = 0; i < pageA.length; i++) {
			pageA[i].removeClass('up');
			pageA[i].removeClass('down');
			pageA[i].removeClass('show');

			if (i<nowPage) {pageA[i].addClass('up');};
			if (i>nowPage) {pageA[i].addClass('down');};
			if (i==nowPage) {pageA[i].addClass('show');};
		}; 
	}
//==============================================================翻页结束
	

});