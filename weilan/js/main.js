
$(document).ready(function load (){
	var numA=[0,0,0,0,0,0,0,0]//原始数据
	var numB=[0,0,0,0,0,0,0,0]//排序数据
	var cn1=$('#cn1')
	var cn2=$('#cn2')
	var cn3=$('#cn3')
	var cn4=$('#cn4')
	var cn5=$('#cn5')
	var cn6=$('#cn6')
	var cn7=$('#cn7')
	var cn8=$('#cn8')
	var carA=[cn1,cn2,cn3,cn4,cn5,cn6,cn7,cn8]
	var carB=[cn1,cn2,cn3,cn4,cn5,cn6,cn7,cn8]
	var maxNum=32
	var p1car=$('#p1car')
	var p1title1=$('#p1title1')
	var p1title2=$('#p1title2')
	var p1ass=$('#p1ass')
	var p1t=$('#p1t')
	var page1=$('#page1')
	var page2=$('#page2')
	var pageA=[page1,page2]
	var page3=$('#page3')
	// var p1car=$('#p1car')
	// var p1car=$('#p1car')
	var nowPage = 0;
	var startY = 0;
	var sending = false;
	var startScrollTop;
	var pageUpDown =0

	var btn1=$('#btn1')
	var btn2=$('#btn2')
	var btn3=$('#btn3')
	var btn4=$('#btn4')
	var btn5=$('#btn5')
	var btn6=$('#btn6')
	var btn7=$('#btn7')
	var btn8=$('#btn8')
	var vote=0
	var bA=[$('#b1'),$('#b2'),$('#b3'),$('#b4'),$('#b5'),$('#b6'),$('#b7'),$('#b8')]
	var btnShare=$('#btnShare')

	start()
	function start(){
		// $.post('http://api.giccoo.com/ad/weilan/update/?',{id: 1},function(msg){
		// })
		$('.content')[0].addEventListener('touchstart',startTouch,false)
		$('.content')[0].addEventListener('touchmove',moveTouch,false)
		$('.content')[0].addEventListener('touchend',endTouch,false)

		$.getJSON('http://api.giccoo.com/ad/weilan/',function(jsonData){
			for (var i = 0; i < 8; i++) {
				numA[i]=jsonData.count[i].counts
			};
		})
		TweenLite.from(p1title1,2.5,{x:-100,rotationX:-0,rotationY:-60,opacity:0,delay:.1+1,ease:Back.easeOut})
		TweenLite.from(p1title2,2.5,{x:-100,rotationX:-0,rotationY:-60,opacity:0,delay:.2+1,ease:Back.easeOut})
		TweenLite.from(p1ass,2.5,{scale:3,opacity:0,delay:0})
		TweenLite.from(p1car,2.5,{x:-100,opacity:0,delay:.3+1})
		TweenLite.from(p1t,2.5,{opacity:0,delay:3})
		
	}


	btn1.click(function(){
		vote=1
		goNext()
	})
	btn2.click(function(){
		vote=2
		goNext()
	})
	btn3.click(function(){
		vote=3
		goNext()
	})
	btn4.click(function(){
		vote=4
		goNext()
	})
	btn5.click(function(){
		vote=5
		goNext()
	})
	btn6.click(function(){
		vote=6
		goNext()
	})
	btn7.click(function(){
		vote=7
		goNext()
	})
	btn8.click(function(){
		vote=8
		goNext()
	})

	btnShare.click(function(){
		$('.shareLayer').css({display:'block',opacity:0})
		TweenLite.to($('.shareLayer'),1,{opacity:1})
	})
	$('.shareLayer').click(function(){
		$('.shareLayer').css({display:'none'})
	})


	function goNext(){
		$('.carList').css({display:'none'})
		 $.post('http://api.giccoo.com/ad/weilan/update/?',{id: vote},function(msg){
		 	$.getJSON('http://api.giccoo.com/ad/weilan/',function(jsonData){
				for (var i = 0; i < 8; i++) {
					numA[i]=jsonData.count[i].counts-Math.random()*0.1
					numB[i]=numA[i]
				};

				$('.top8').css({display:'block',opacity:0})
				TweenLite.to($('.top8'),.5,{opacity:1})
				
				numB.sort(function sortNumber(a,b){
					return b - a
				})
				console.log(numB)
				maxNum=numB[0]
					
				for (var i = 0; i < numA.length; i++) {//＝＝＝＝＝求最大值 排序
					
					for (var j = 0; j < numB.length; j++) {
						if (numA[j]==numB[i]) {
							carB[i]=carA[j]
						}; 
					};




				};



				for (var i = 0; i < numA.length; i++) {
						
					var str=numB[i]/maxNum*100+"%"
					TweenLite.to(bA[i],1,{width:str})//====bar长度
					var str2=i*12.5+"%"
					carB[i].css({top:str2})//=====车位置
				};

			})
		 })

	}


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
		}else if (nowY-startY< -80&&nowPage!=1) {
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
		if (nowPage==1) {
			// $('.content')[0].removeEventListener('touchstart',startTouch,false)
			// $('.content')[0].removeEventListener('touchmove',moveTouch,false)
			// $('.content')[0].removeEventListener('touchend',endTouch,false)
			TweenLite.set($('.content'),{display:'none',delay:1})
			$('.carList').css({display:'block',opacity:0})
			TweenLite.to($('.carList'),1,{opacity:1})
		};
	}
//==============================================================翻页结束
});