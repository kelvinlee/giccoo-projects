function ani1(){TweenMax.from(p1car,1,{x:960,y:295}),TweenMax.from(p1car.scale,1,{y:.5,x:.5});for(var e=1;e<p1picA.length;e++)TweenLite.set(p1picA[e],{y:"-=80",x:"+=140",alpha:0}),TweenLite.to(p1picA[e],1,{alpha:1,x:"-=140",delay:1*e/8}),TweenLite.to(p1picA[e],1,{y:"+=80",delay:1*e/8,ease:Bounce.easeOut});for(var c=1,l=0;l<titleA.length;l++)TweenLite.from(titleA[l],2.5,{y:-238,rotation:-.8*Math.pow(-1,l),ease:Elastic.easeOut,delay:.03*l+1});TweenLite.from(titleMask,2.5,{y:-238,rotation:-.8,ease:Elastic.easeOut,delay:1}),TweenMax.to(titleLight,1,{alpha:1,x:960,width:640,repeat:20,delay:2,repeatDelay:3});var a=1;TweenLite.from(p1btn.scale,1.5,{x:0,y:0,ease:Elastic.easeOut,delay:2}),TweenLite.from(p1btnT.scale,.5,{x:5,y:5,delay:2}),TweenLite.from(p1btnBG1.scale,.5,{x:5,y:5,delay:2}),TweenLite.from(p1btnBG2.scale,.5,{x:5,y:5,delay:2}),TweenMax.to(c1,1.5,{_r:180,_line:0,repeat:100,repeatDelay:1.5,delay:2,onUpdate:function(){circle1.clear(),circle1.beginFill(16777215,0),circle1.lineStyle(c1._line,c1._color,1,1),circle1.drawCircle(320,stageH-109,c1._r)}}),TweenMax.to(c2,1.5,{_r:200,_line:0,repeat:100,repeatDelay:1.5,delay:2.3,onStart:picJump,onUpdate:function(){circle2.clear(),circle2.beginFill(16777215,0),circle2.lineStyle(c2._line,c2._color,1,1),circle2.drawCircle(320,stageH-109,c2._r)},onRepeat:function(){16503122!=c2._color?(c1._color=16503122,c2._color=16503122):(c1._color=9494501,c2._color=9494501),picJump()}}),TweenMax.to(p1btnBG2,.1,{alpha:0,repeat:100,repeatDelay:2.9,delay:2,yoyo:!0})}function picJump(){for(var e=1;e<p1picA.length;e++)TweenMax.to(p1picA[e],.15,{y:.538*stageH-40,delay:3-1*e/8+.8,overwrite:0,ease:Sine.easeOut}),TweenMax.to(p1picA[e],.8,{y:.538*stageH,delay:3-1*e/8+.15+.8,overwrite:0,ease:Bounce.easeOut})}function p1aniDown(){TweenMax.killTweensOf(c1),TweenMax.killTweensOf(c2),TweenMax.to(c1,1,{_r:0,_line:64,ease:Elastic.easeOut,onUpdate:function(){circle1.clear(),circle1.beginFill(16777215,0),circle1.lineStyle(c1._line,c1._color,1,1),circle1.drawCircle(320,stageH-109,c1._r)}}),TweenMax.to(c2,1,{_r:85.5,_line:64,ease:Elastic.easeOut,onUpdate:function(){circle2.clear(),circle2.beginFill(16777215,0),circle2.lineStyle(c2._line,c2._color,1,1),circle2.drawCircle(320,stageH-109,c2._r)}})}function p1aniUp(){TweenMax.killTweensOf(c1),TweenMax.killTweensOf(c2),stage1.addChild(circle1),stage1.addChild(circle2),TweenMax.to(c1,.5,{_r:640,_line:0,onComplete:page2Start,onUpdate:function(){circle1.clear(),circle1.beginFill(16777215,0),circle1.lineStyle(c1._line,c1._color,1,1),circle1.drawCircle(320,stageH-109,c1._r)}}),TweenMax.to(c2,1.6,{_r:640,_line:1e4,delay:.1,onUpdate:function(){circle2.clear(),circle2.beginFill(16777215,0),circle2.lineStyle(c2._line,c2._color,1,1),circle2.drawCircle(320,stageH-109,c2._r)}})}var titleA=[title,title1,title2,title3,title4],c1={_r:0,_line:64,_color:16503122},c2={_r:0,_line:64,_color:16503122};