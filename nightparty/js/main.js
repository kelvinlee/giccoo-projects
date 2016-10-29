
$(document).ready(function load (){
	//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝第1页元素
	var page1=$('#page1')
	var p1tittle=$('#p1tittle')
	var p1cloud1=$('#p1cloud1')
	var p1cloud2=$('#p1cloud2')
	var p1moon=$('#p1moon')
	var p1btn=$('#p1btn')
	var car1=$('#car1')
	var p1mark1=$('#p1mark1')
	var p1mark2=$('#p1mark2')
	var p1city=$('#p1city')
	var p1mask=$('#p1mask')
	var p1ground=$('#p1ground')
	
	//=＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝第2页元素
	var page2=$('#page2')
	var btn1=$('#btn1')
	var btn2=$('#btn2')
	var btn3=$('#btn3')
	var btn4=$('#btn4')
	var btn5=$('#btn5')
	var nowCity=0
	var cityIf=[0,0,0,0,0]
	//==＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝第3页元素
	var city1=$('#city1') 
	var city2=$('#city2') 
	var city3=$('#city3') 
	var city4=$('#city4') 
	var city5=$('#city5') 
	var cityA=[city1,city2,city3,city4,city5]
	var p3btn=$('.p3btn')
	var btnBack=$('#btnBack')
	var btnEnd=$('#btnEnd')

	var pic1a=$('#pic1a')
	var pic1b=$('#pic1b')
	var pic1c=$('#pic1c')
	var pic1d=$('#pic1d')

	var pic2a=$('#pic2a')
	var pic2b=$('#pic2b')
	var pic2c=$('#pic2c')
	var pic2d=$('#pic2d')

	var pic3a=$('#pic3a')
	var pic3b=$('#pic3b')
	var pic3c=$('#pic3c')
	var pic3d=$('#pic3d')

	var pic4a=$('#pic4a')
	var pic4b=$('#pic4b')
	var pic4c=$('#pic4c')
	var pic4d=$('#pic4d')

	var pic5a=$('#pic5a')
	var pic5b=$('#pic5b')
	var pic5c=$('#pic5c')
	var pic5d=$('#pic5d')

	p1A=[pic1a,pic1b,pic1c,pic1d]
	p2A=[pic2a,pic2b,pic2c,pic2d]
	p3A=[pic3a,pic3b,pic3c,pic3d]
	p4A=[pic4a,pic4b,pic4c,pic4d]
	p5A=[pic5a,pic5b,pic5c,pic5d]

	pAA=[p1A,p2A,p3A,p4A,p5A]
	nowPic=0
	//===============================第4页
	var pageEnd=$('#pageEnd')
	
	var pageShare=$('#pageShare')

	setTimeout(function(){
		p1start();
	},1)

	function p1start(){
		page1.css({display:'block'})
		TweenLite.to(p1mask,1,{opacity:0,display:'none'})
		p1ground.css({display:'block'})
		
		p1city.css({display:'block'})
		TweenLite.from(p1city,3,{rotationX:-90,ease:Elastic.easeOut,delay:.5})
		
		car1.css({display:'block'})
		TweenLite.from(car1,1,{scale:.7,x:-200})
		
		p1tittle.css({display:'block'})
		TweenLite.from(p1tittle,.75,{x:'30%',delay:.5,ease:Back.easeOut})

		p1cloud1.css({display:'block'})
		p1moon.css({display:'block'})
		p1cloud2.css({display:'block'})
		p1mark1.css({display:'block'})
		p1mark2.css({display:'block'})
		p1btn.css({display:'block'})

		TweenLite.from(p1cloud1,1.5,{y:'-20%',opacity:0,ease:Elastic.easeOut,delay:1})
		TweenLite.from(p1moon,1.5,{y:'-20%',opacity:0,ease:Elastic.easeOut,delay:1.1})
		TweenLite.from(p1cloud2,1.5,{y:'-20%',opacity:0,ease:Elastic.easeOut,delay:1.2})
		TweenLite.from(p1mark1,1.5,{y:'-40%',opacity:0,ease:Bounce.easeOut,delay:1.3})
		TweenLite.from(p1mark2,1.5,{y:'-40%',opacity:0,ease:Bounce.easeOut,delay:1.4})
		TweenLite.from(p1btn,1.5,{y:'-40%',opacity:0,ease:Bounce.easeOut,delay:1.5})
	}

	p1btn.click(function(){
		goPage2();
	})

	function goPage2(){
		p1mask.css({display:'block'})
		TweenLite.to(p1mask,1,{opacity:1})
		TweenLite.to(car1,1,{scale:1.3,x:200,onComplete:showPage2})
		TweenLite.to(p1tittle,1,{x:'-65%'})
		TweenLite.to(p1moon,1,{x:'-20%'})
		TweenLite.to(p1cloud1,1,{x:'-20%'})
		TweenLite.to(p1cloud2,1,{x:'20%'})
		picLoop()
	}
	function showPage2(){
		page1.css({display:'none'})
		page2.css({display:'block'})
	}
	btn1.click(function(){
		nowCity=1
		goPage3();
	})
	btn2.click(function(){
		nowCity=2
		goPage3();
	})
	btn3.click(function(){
		nowCity=3
		goPage3();
	})
	btn4.click(function(){
		nowCity=4
		goPage3();
	})
	btn5.click(function(){
		nowCity=5
		goPage3();
	})
	function goPage3(){
		cityIf[nowCity-1]=1
		var thisCity=cityA[nowCity-1]
		thisCity.css({display:'block'})
		p3btn.css({display:'block'})
		TweenLite.from(thisCity,.5,{opacity:0})
		TweenLite.from(p3btn,1,{bottom:"-10%",ease:Elastic.easeOut,onComplete:setBtn})
		function setBtn(){
			btnBack.css({display:'block'})
			btnEnd.css({display:'block'})
		}
		
	}

	function picLoop(){
		nowPic++
		if(nowPic==4){
			nowPic=0
		}
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < 4; j++) {
				//pAA[i][j].css({opacity:0})
				TweenLite.to(pAA[i][j],1,{opacity:0})
			};
			//pAA[i][nowPic].css({opacity:1})
			TweenLite.to(pAA[i][nowPic],1,{opacity:1})
		};
		TweenLite.set(pAA[0][nowPic],{delay:5,onComplete:picLoop})
	}

	btnBack.click(function(){
		if (cityIf[0]==0||cityIf[1]==0||cityIf[2]==0||cityIf[3]==0||cityIf[4]==0) {
			cityA[nowCity-1].css({display:'none'})
			p3btn.css({display:'none'})
			btnBack.css({display:'none'})
			btnEnd.css({display:'none'})
			//alert(cityIf)
		}else{
			goEndpage()
		};
		
	})
	btnEnd.click(function(){
		goEndpage()
	})

	function goEndpage(){
		cityA[nowCity-1].css({display:'none'})
		p3btn.css({display:'none'})
		btnBack.css({display:'none'})
		btnEnd.css({display:'none'})
		page2.css({display:'none'})
		pageEnd.css({display:'block'})
		TweenLite.from(pageEnd,.5,{opacity:0})
	}
	pageEnd.click(function(){
		goShare()
	})
	function goShare(){
		pageShare.css({display:'block'})
		TweenLite.from(pageShare,.5,{opacity:0})
	}
});