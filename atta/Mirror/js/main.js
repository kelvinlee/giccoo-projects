
var loaderTween;
var clickNum=0;
var answer0=["低到令人发指","不尽人意","勉强能够应敌","寐力四射","简直无人能敌"];
var answer1=["行走的黑眼圈，人人都知道","经常发现，早已不足为奇","隔三差五被人提","偶有发现","前所未有，完全看不出"];
var answer2=["数羊数到天荒地老","辗转反侧到深更","昏昏沉沉难入眠","入睡的时间刚好够暖床","简直秒睡"];
var answer3=["简直会被飘雪的声音吵醒","惊弓之鸟，常被惊醒","时好时坏","偶尔会惊醒","雷打不动"];
var answer4=["几乎每天都是","几乎每天都是","几乎每天都是","睡到鸡鸣起","神清气爽的自然醒"];
var answer5=["焦虑到不行","焦虑到不行","有些担心","那都不是事儿","我是寐力小公举，完全不担心"];
var answer6=["日子简直没法过","日子简直没法过","受到些影响","偶尔才会意识到没睡好","我是江湖人称小睡神，完全不影响"];
var qaNum = 0;
var score = 0;
var resultTitle;

jQuery(document).ready(function($) {
	
	
});
window.onload = function(){
	var widths=$(window).width();
	if(widths<=320){
		$('.answer').css('font-size','10px');
		$('#copy').css('font-size','12px');
	}
	setTimeout(function(){
		var loader = $(".loader")[0];
		var moon = $(".loader-content");
		var gamePage = $('.game');
		var mirror = $(".mirror-board");
		var startBar = $(".startBtton");
		var testBar = $(".testBtton");
		var bubble = $(".bubbles");
		var intro = $("#intro");
		var intro1 = $("#intro1");
		var intro2 = $("#intro2");
		var testtxt = $("#testtxt");
		var chat = $("#chat");

		// loader.className = "loader fadeout";//使用渐隐的方法淡出loading page
		TweenLite.to(moon, 1, {opacity:0});
		// derTween.kill();
		setTimeout(function(){
			loader.style.display="none";
			$(".game").css('display','block');
			TweenLite.from(gamePage, 1, {opacity:0});
			TweenLite.from(mirror, 1, {opacity:0,delay:0.6});
			TweenLite.from(intro1, 2, {opacity:0,delay:2});
			TweenLite.from(intro2, 2, {opacity:0,delay:4});
			TweenLite.from(intro3, 2, {opacity:0,delay:6});
			TweenLite.from(startBar, 1, {opacity:0,top:"100%",delay:7});


			startBar.click(function(){
				// TweenLite.to(intro, 0.6, {opacity:0});
				
				TweenLite.to(startBar, 1, {opacity:0,top:"100%",onComplete:hideIntroHandle});
				function hideIntroHandle(){
					testBar.css('display','block');
					TweenLite.from(testBar, 0.6, {opacity:0,top:"100%"});
					startBar.hide();
					
				}
			});
			
			// 点击事件
			testBar.bind("click", tagClick);

			function tagClick(){
				chat.css('display','block');
				clickNum += 1;
				switch(clickNum){
					case 1:
						TweenLite.to(testBar, 0.4, {top:"100%"});
						testBar.unbind("click", tagClick);

						$("#chat1").css('display','block');
						TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
						TweenLite.from($("#chat1"), 1, {opacity:0});
						
						setTimeout(function(){
							// 
							testBar.bind("click", tagClick);
							$("#chat2-1").css('display','block');
							TweenLite.from($("#chat2-1"), 1, {opacity:0});
							TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});


							setTimeout(function(){
								$("#chat2").css('display','block');
								TweenLite.from($("#chat2"), 1, {opacity:0});
								TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});

								TweenLite.to(testBar, 0.4, {top:"88%",delay:1});
								$("#testtxt").html("真是傲娇的魔镜，你问吧。");
							},2000);
						},2000);
					break;
					case 2:
						TweenLite.to(testBar, 0.4, {top:"100%"});
						testBar.unbind("click", tagClick);
						$("#chat3").css('display','block');
						TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
						TweenLite.from($("#chat3"), 1, {opacity:0});

						setTimeout(function(){
							TweenLite.to(testBar, 0.4, {top:"88%",delay:1});
							testBar.bind("click", tagClick);
							TweenLite.to(chat, 0.4, {top:-60});
							$("#chat4").css('display','block');
							TweenLite.from($("#chat4"), 1, {opacity:0});
							TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
							$("#testtxt").html("好的，开始吧！");
						},2000);
					break;
					case 3:
						TweenLite.to(testBar, 0.4, {opacity:0,top:"100%"});
						testBar.unbind("click", tagClick);
						$("#chat5").css('display','block');

						TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
						TweenLite.from($("#chat5"), 1, {opacity:0});
						setTimeout(function(){
							TweenLite.to(testBar, 0.6, {opacity:0,top:"100%",onComplete:hideChatHandle});
							// TweenLite.to(intro, 1, {top:"-140%"});
							// TweenLite.to(chat, 0.6, {opacity:0,onComplete:hideChatHandle});
							function hideChatHandle(){
								// TweenLite.to(testBar, 0.6, {opacity:0,top:"100%"});
								testBar.css('display','none');
								gameStart();
							}
						},2000);
					break;
				}
			}
			
		},1000);

		},1000);//强制显示loading page 1s

		// 开始游戏！
		var qaBar = $(".qaBtton");
		var qa = $("#qa");
		var btn = $('.btn');
		var logo = $("#logo");
		var result = $(".result");
		var bubble = $(".bubbles");

		function gameStart(){
			$(".result1").css('display','none');
			$(".result2").css('display','none');
			$(".result3").css('display','none');
			$(".result4").css('display','none');
			// console.log('foo');
			qaBar.css('display','block');
			qa.css('display','block');
			$(".q0").css('display','block');
			TweenLite.from(qaBar, 0.6, {opacity:0,top:"100%"});
			TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
			TweenLite.from($(".q0"), 1, {opacity:0});
			btn.bind("click", btnsClick);
		}
		function btnsClick (){
			
			console.log(qaNum);

			// $(".a").css('display','block');
			btn.unbind("click", btnsClick);
			var index = $(this).index();
			TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});

			
			TweenLite.to($(".btn"), 0.4,{css:{scaleX:1,scaleY:1}});
			TweenLite.to($(this), 0.4,{ease: Elastic.easeOut,css:{scaleX:1.2,scaleY:1.2}});
			
			TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
			switch(qaNum){
				case 0:
					$("#q0a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q0a"+index), 1, {opacity:0});
					// $(".answer").html(answer0[index]);
				break;
				case 1:
					$("#q1a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q1a"+index), 1, {opacity:0});
				break;
				case 2:
					$("#q2a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q2a"+index), 1, {opacity:0});
				break;
				case 3:
					$("#q3a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q3a"+index), 1, {opacity:0});
				break;
				case 4:
					$("#q4a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q4a"+index), 1, {opacity:0});
				break;
				case 5:
					$("#q5a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q5a"+index), 1, {opacity:0});
				break;
				case 6:
					$("#q6a"+index).css('display','block');
					TweenLite.to(bubble, 1,{scrollTo:{y:"max"}, ease:Back.easeOut});
					TweenLite.from($("#q6a"+index), 1, {opacity:0});
				break;
			}
			addScore(index);
			console.log("你的得分=="+score);
			setTimeout(function(){
				
				$(".q"+(qaNum+1)).css('display','block');
				TweenLite.from($(".q"+(qaNum+1)), 1, {opacity:0});
				TweenLite.to(bubble, 1,{scrollTo:{y:"max"}});
				
				// $(".a").css('display','none');

				if(qaNum<7){
					qaNum+=1;
					btn.bind("click", btnsClick);
				}
				if(qaNum==7){
					setTimeout(function(){
						$(".lastq").css('display','block');
						TweenLite.from($(".lastq"), 1, {opacity:0});
						TweenLite.to(bubble, 1,{scrollTo:{y:"max"}});
						endGame();
					},2000);
				}
				
			},2000);
		}
		function endGame(){
			if(score<=7){
				showResult(1);
				resultTitle = "睡神考拉";
			}else if (score>=8 && score<=14){
				showResult(2);
				resultTitle = "小牧羊童";
			}else if (15<=score<=21){
				showResult(3);
				resultTitle = "资深熊猫";
			}else if (22<=score<=28){
				showResult(4);
				resultTitle = "德古拉伯爵";
			}
			console.log(resultTitle);
		}
		function showResult(_num){
			setTimeout(function(){
				TweenLite.to(qaBar, 1, {opacity:0,top:"100%"});
				TweenLite.to(intro, 1, {opacity:0});
				TweenLite.to(logo, 1, {opacity:0,onComplete:showReult});
				function showReult(){
					result.css('display','block');
					qaBar.css('display','none');
					$(".shareBtton").css('display','block');
					$(".result"+_num).css('display','block');
					TweenLite.from($(".shareBtton"), 1, {opacity:0,top:"100%"});
					TweenLite.from(result, 1, {opacity:0});
				}
			},2000);
			
		}
		function addScore(index){
			switch(index){
				case 0:
					score += 4;
				break;
				case 1:
					score += 3;
				break;
				case 2:
					score += 2;
				break;
				case 3:
					score += 1;
				break;
				case 4:
					score += 0;
				break;
			}
			
		}
		$(".shareBtton").click(function(){
			$(".sharePage").show();
		});
		$(".sharePage").click(function(){
			$(".sharePage").hide();
		});
		$(".lessonBtn").click(function(){
			$(".lesson").show();
		});
		$("#close").click(function(){
			$(".lesson").hide();
		});

		// 音乐开关控制
		$("#audio_btn").click(function(){
    var music = document.getElementById("music");
    if(music.paused){
        music.play();
        $(".music").css('-webkit-animation-play-state','running');
        $("#music_btn").attr("src","img/play.png");
    }else{
        music.pause();
        $("#music_btn").attr("src","img/pause.png");
        $(".music").css('-webkit-animation-play-state','paused');
	}
		});
};
