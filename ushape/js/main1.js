	var ifFirstTime=1//是否第一次打开页面 1第一次打开  0不是第一次打开
	var sex=0//0女的，1男的
	var medalState=[0,0,0]//奖章状态：[一等奖，二等奖，三等奖]   0未达标 1可以领奖 2已领取

	var ifGet=[0,0,0]
	var step=15000

	var data={}
	var if1=0//2等奖是0 1等奖是1	

	var medalA=[]


$(document).ready(function load (){





	var page1=$('#page1')
	var page2=$('#page2')
	var page3=$('#page3')
	var page4=$('#page4')
	var page5=$('#page5')
	var page6=$('#page6')
	var btn1=$('#btn1')
	var btn2=$('#btn2')
	var btn3=$('#btn3')
	var btn4=$('#btn4')
	var btn5=$('#btn5')


	// var data={ifFirstTime:0,sex:0,medalState:[0,0,0]}

	medalA=[
	[$('#medal1a'),$('#medal1b'),$('#medal1c')],
	[$('#medal2a'),$('#medal2b'),$('#medal2c')],
	[$('#medal3a'),$('#medal3b'),$('#medal3c')]
	]



	checkState()
	function checkState(){
		// localStorage.clear()
		if(localStorage.getItem("data")){//不是第一次
			data = JSON.parse(localStorage.getItem("data"))

			ifFirstTime=data.ifFirstTime
			sex=data.sex
			ifGet=data.ifGet
		}else{//是第一次
			data = {ifFirstTime:0,sex:0,ifGet:[0,0,0]} 
			//localStorage.setItem("data", JSON.stringify(data))
		};



		if(ifFirstTime==1){
			ani1()
		}else{
			page1.css({display:'none'})
			page2.css({display:'none'})
			page3.css({display:'none'})
			ani4()
		}
	}
	function ani1(){
		page1.css({display:'block'})
		page2.css({display:'block'})
		TweenLite.to($('#ttt1'),8,{x:'-150%',delay:.5})
		TweenLite.to($('#ttt2'),8,{x:'-150%',delay:1})
		TweenLite.to(page1,1,{opacity:0,delay:3.5,display:'none',onComplete:ani2})

		TweenLite.from($('#p2btn'),1.5,{opacity:0,scale:2,delay:4.55,ease:Elastic.easeOut})
		TweenLite.from($('#p2t1'),1.5,{opacity:0,scale:2,delay:4.5,ease:Elastic.easeOut})
		TweenLite.from($('#p2t2'),1.5,{opacity:0,scale:2,delay:4.6,ease:Elastic.easeOut})


	}
	function ani2(){

		$('#p2btn').click(function(){
			page3.css({display:'block'})
			TweenLite.to(page2,.5,{opacity:0,display:'none',onComplete:ani3})

			TweenLite.from($('#bg3a'),.5,{opacity:0,x:'+100%',delay:0})
			TweenLite.from($('#bg3b'),.5,{opacity:0,x:'-100%',delay:0.1})
		})
	}
	function ani3(){
		$('#p3t1b').click(function(){//====选男的 之后跳第四页  这里要发服务器记录男女
			sex=1
			data = {ifFirstTime:0,sex:sex,ifGet:[0,0,0]} 
			localStorage.setItem("data", JSON.stringify(data))
			//page4.css({display:'block'})
			ani4()
		})
		$('#p3t2b').click(function(){//====选女的 之后跳第四页  这里要发服务器记录男女
			sex=0
			data = {ifFirstTime:0,sex:sex,ifGet:[0,0,0]} 
			localStorage.setItem("data", JSON.stringify(data))
			//page4.css({display:'block'})
			ani4()
		})
		

	}
	function ani4(){
		page4.css({display:'block'})
		TweenLite.to(page3,1,{opacity:0,display:'none'})

		if (sex==0) {//=============================判断男女改变背景
			$('#p4bg_boy').css({display:'none'})
		}else{
			$('#p4bg_girl').css({display:'none'})
		};

		if (step<3000) {
			medalState=[0,0,0]
		}else if (step<10000) {
			medalState=[0,0,1]
		}else if (step<15000) {
			medalState=[0,1,1]
		}else{
			medalState=[1,1,1]
		};
		for (var i = 0; i < 3; i++) {
				medalState[i]+=ifGet[i]
			};	
		
		medalA[0][medalState[0]].css({display:'block'})//========设置奖章状态
		medalA[1][medalState[1]].css({display:'block'})
		medalA[2][medalState[2]].css({display:'block'})
	}
	$('#medal1b').click(function(){//=========领一等奖
		if1=1
		page6.css({display:'block'})
	})
	$('#medal2b').click(function(){//=========领二等奖
		if1=0
		page5.css({display:'block'})	
	})
	$('#medal3b').click(function(){//=========领三等奖
		$('#go3').css({display:'block'})
		TweenLite.to($('#go3'),1,{opacity:1})
	})


	$('#link_Btn').click(function(){//=========btn:了解优形
		window.location.href="http://u419794.viewer.maka.im/pcviewer/NHTP4Z7U"
	})
	$('#hint').click(function(){//======点击隐藏活动说明
		TweenLite.to($('#hint'),1,{opacity:0,display:'none'})
	})
	$('#closeGO3').click(function(){//======点击关闭三等奖
		TweenLite.to($('#go3'),1,{opacity:0,display:'none'})
	})


	btn1.click(function(){//======领三等奖 华北
		ifGet[2]=1
		data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
		localStorage.setItem("data", JSON.stringify(data))
		window.location.href="https://pages.tmall.com/wow/chaoshi/act/shengxian-yxpphb"
		
	})
	btn2.click(function(){//======领三等奖 华东
		ifGet[2]=1
		data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
		localStorage.setItem("data", JSON.stringify(data))
		window.location.href="https://pages.tmall.com/wow/chaoshi/act/shengxian-yxhdhd"
		
	})
	btn3.click(function(){//======领三等奖 华中
		ifGet[2]=1
		data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
		localStorage.setItem("data", JSON.stringify(data))
		window.location.href="https://pages.tmall.com/wow/chaoshi/act/shengxian-yxhz"
		
	})
	btn4.click(function(){//======领三等奖 华南
		ifGet[2]=1
		data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
		localStorage.setItem("data", JSON.stringify(data))
		window.location.href="https://pages.tmall.com/wow/chaoshi/act/shengxian-yxhn"
		
	})
	btn5.click(function(){//======领三等奖 西南
		ifGet[2]=1
		data = {ifFirstTime:0,sex:sex,ifGet:ifGet} 
		localStorage.setItem("data", JSON.stringify(data))
		window.location.href="https://pages.tmall.com/wow/chaoshi/act/shengxian-yxx"

	})


});