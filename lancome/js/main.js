"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),Tn,_CDN,_imgurl,_animate,ansStar,appStar,buildUGC,canvasImgs,createAnswer,createStar,getRandom,global,imageurl,init,load,loadWechatConfig,main,mark,musicName,myTime,myTimeDetail,myTimeLine,myTimeName,neteaseShareImage,pre,randomSort,scoreBox,scoreInfinity,scoreMusicTime,scoreShareTimes,scoreZore,shareMusicName,stars,sys,textsBox,upten;randomSort=function e(t){var a,i,s;return a=[],i=t,s=function e(t,a){var i;return 1===t.length?(a.push(t[0]),a):(i=Math.ceil(Math.random()*t.length)-1,a.push(t[i]),t.splice(i,1),s(t,a))},s(i,a),a},getRandom=function e(t){return parseInt(Math.random()*(t+1)-1)},function(){var e,t,a;for(e=0,t=["webkit","moz"],a=0;a>t.length&&!window.requestAnimationFrame;)window.requestAnimationFrame=window[t[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[a]+"CancelAnimationFrame"]||window[t[a]+"CancelRequestAnimationFrame"],++a;window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var i,s,n;return i=(new Date).getTime(),n=Math.max(0,16.7-(i-e)),s=window.setTimeout(function(){t(i+n)},n),e=i+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),loadWechatConfig=function e(){var t,a,i;i=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+i,a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(t,a)},axios.defaults.withCredentials=!0,_CDN="//image.giccoo.com/projects/lancome/",_imgurl="",global={},main={},pre={},load={},sys=null,imageurl="//api.giccoo.com/api/upload/image64/",textsBox=[[["你是不识孤独滋味的少年","永远意气风发","永远活力四射","抹上眼霜 你就是最亮的星"]],[["你的感知神经似乎不太敏感","偶尔空虚，经常充实才是生活常态","寂寞的时候默念咒语","把大家都变成“发光”眼霜你就不孤独啦"],["你有时候也想45度静静仰望天空","但眼泪似乎不太掉得下来","孤独的感觉总是像龙卷风一样袭来","不过还好 “发光”眼霜是你的防护盾"]],[["好险","你距离显性孤独人口只差最后一步","你希望微信能被秒回","也希望朋友圈都有人点赞","但大家似乎都不太给面子"],["或许你有酒","或许你有远方","可是有时候","你还是愿意待在家里","做一只听着歌默默生长的蘑菇"]],[["你像一只小刺猬","想露出软软的肚皮","被温柔抚摸","可是很多人惧怕你坚硬的刺","而选择远离"],["「你怎么会喜欢这个」","「我觉得那个地方不好玩」","「一把年纪该结婚了」","永远有人在喋喋不休","而你只想让他们闭嘴"]],[["在努力，在奔跑","一个人的路总是艰苦","可是一个人","也更加恣肆，更加自由","不如把孤独当成甜品 一口吃掉"],["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感","都觉得差了一点点"]],[["你幻想自己是一只鱼","以为7秒就能忘记那种寂寞的感觉 ","其实你只是个忘用眼霜的人类","黯淡到连自己都快被遗忘"]]],scoreBox=[[11,17,1],[2,5,12],[7,9,23]],scoreInfinity=!1,scoreZore=!1,scoreMusicTime=[8,14,28],scoreShareTimes=[20,15,6],myTimeLine=[20,21,22,23,24,0,1,2,3,4],myTime=20,myTimeName="晚上",myTime<=5&&(myTimeName="凌晨"),myTimeDetail="20:25",musicName="夜空中最亮的星",shareMusicName="",canvasImgs=[_CDN+"img/star.png",_CDN+"img/answer-1-bg.jpg",_CDN+"img/answer-1-mark-bg.jpg",_CDN+"img/answer-2-bg.jpg",_CDN+"img/mark-1.png",_CDN+"img/mark-2.png",_CDN+"img/item-elephant.png",_CDN+"img/item-owl.png",_CDN+"img/item-panda.png",_CDN+"img/symbol.png"],getRandom=function e(t){return parseInt(Math.random()*(t+1)-1)},window.onload=function(){return window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return console.log("wx ready"),e={title:"点击测试你的孤独指数",desc:"与兰蔻一起，度过漫漫长夜",link:"http://m.giccoo.com/lancome/",imgUrl:"http://m.giccoo.com/lancome/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init()},_animate=function e(t){return requestAnimationFrame(_animate),TWEEN.update(t)},requestAnimationFrame(_animate),init=function e(){var t,a,i;return t=document.body.clientHeight,a=document.body.clientWidth,console.log(a,t),a>=640&&(a=640),t>=1138&&(t=1138),i=a/t-640/1138,load=new Vue({el:"#loadtext",data:{progress:0,mount:!1,progressOn:0},mounted:function e(){var t=this,a;return this.mount=!0,createStar(),a=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),t.progress>=100)return t.progress=100,clearInterval(a),main.mount=!0,setTimeout(function(){return main.homepageShow=!0,main.ask(),document.getElementById("load").className+=" fadeOut animated",setTimeout(function(){return document.getElementById("load").style.display="none"},520)},100)},50)}}),main=new Vue({el:"#main",data:{pc:!1,homepageShow:!1,answerPageShow:!1,ugcPageShow:!1,waitPageShow:!1,lastPageShow:!1,waitPageBox:!1,mount:!1,audio:null,w:a,h:t,smaller:i,now:0,answerCanvas:null,score:0,scorebg:1,musiclink:"",bgmlink:"//image.giccoo.com/projects/lancome/mp3/bgm.mp3",playing:!1,bgmplaying:!1,ugc:null,ugcbg:null,wy:!1,wx:!1,shareImageLink:"",questionMark:0,answers:[-1,-1,-1],musicName:"平凡之路",myTimeName:"",myTimeDetail:"",myTime:15,myTimestp:0,shareMusicName:""},computed:{answerList:function e(){return[{question:["最近一次"+this.myTimeName+this.myTimeDetail+"还在听歌的你，觉得那时谁会陪着你？"],answers:["飞累了，借你家阳台<br/>歇歇的猫头鹰","冰箱里那只<br/>舔着冰淇淋的蠢大象","墙角边偷偷涂<br/>兰蔻“发光”眼霜的大熊猫"]},{question:["那一天，云村和你一起在听《"+this.musicName+"》的人，比英国的晴天还少；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，多到服务器瘫痪；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，和大迁徙时的角马一样多；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，比理工大的女生还少。你觉得他们那时在干什么？"],answers:["敲击键盘","窃窃私语聊天","刷手机"]},{question:[""===this.shareMusicName?"最近都没分享过歌曲的你，如果分享，觉得谁会点开听？":"之前从云音乐分享过一首《"+this.shareMusicName+"》你觉得谁点开听过？"],answers:["最想让TA听到的那个人","和我一样喜欢这类曲风的闺蜜","我才不care有没有人点开听"]}]}},watch:{myTimestp:function e(t,a){var i;return i=new Date(t),this.myTimeDetail=upten(i.getHours())+":"+upten(i.getMinutes()),this.myTime=i.getHours(),console.log(this.myTime,this.myTimeDetail),this.myTime>4&&this.myTime<=19?this.myTimeName="":this.myTime>19&&this.myTime<=24?this.myTimeName="晚上":this.myTimeName="凌晨"}},methods:{updateTime:function e(){return console.log("a")},ask:function e(){var t=this;return axios.get("//music.163.com/api/activity/lancome/userInfo?type=1").then(function(e){var a,i;if(a=e.data,200===a.code&&(null!=a.data.hottestSongName&&""!==a.data.hottestSongName&&(t.musicName=a.data.hottestSongName),null!=a.data.latestSongName&&""!==a.data.latestSongName&&(t.musicName=a.data.latestSongName),null!=a.data.latestShareSongName&&""!==a.data.latestShareSongName&&(t.shareMusicName=a.data.latestShareSongName),null!=a.data.latestTime&&""!==a.data.latestTime&&0!==a.data.latestTime&&(t.myTimestp=a.data.latestTime),t.questionMark=t.musicName.length%4,1===t.questionMark&&(i=Math.floor(9*Math.random()+1),t.questionMark=i%4),1===t.questionMark))return i=Math.floor(9*Math.random()+1),t.questionMark=i%4}).catch(function(e){})},asknote:function e(){return axios.get("//music.163.com/api/activity/lancome/userInfo?type=1").then(function(e){return alert("msg2:"+JSON.stringify(e.data))}).catch(function(e){return alert(JSON.stringify(e))})},playbgm:function e(){return this.playing=!this.playing,this.bgmplaying=!this.bgmplaying,this.playing?document.getElementById("bgm").play():document.getElementById("bgm").pause()},audioplay:function e(){return this.playing=!0},audiopause:function e(){return this.playing=!1},audiomusicplay:function e(){return this.audio.pause()},audiomusicpause:function e(){if(console.log("music ended:",this.bgmplaying),this.bgmplaying)return this.audio.play()},runScore:function e(){var t,a,i,s;for(t=a=0,i=this.answers.length;0<=i?a<i:a>i;t=0<=i?++a:--a)this.score+=scoreBox[t][this.answers[t]];switch(s=myTimeLine.indexOf(this.myTime),console.log(s),s){case 0:this.score+=scoreMusicTime[0];break;case 1:this.score+=scoreMusicTime[0];break;case 4:this.score+=scoreMusicTime[1];break;case 7:this.score+=scoreMusicTime[2];break;case 9:this.score="∞"}return scoreInfinity&&(this.score="∞"),this.score<=80&&(0===this.questionMark&&(this.score+=16),1===this.questionMark&&(this.score=0),2===this.questionMark&&(this.score+=6),3===this.questionMark&&(this.score+=20)),console.log(this.score)},createUGC:function e(){var t=this,a,i;return i=new buildUGC,console.log("∞"===this.score||this.score>=0),i.score="∞"===this.score||this.score>=0?this.score:Math.floor(99*Math.random()+1),"∞"===this.score?(i.texts=textsBox[textsBox.length-1][0],this.scorebg=5):this.score<=0?(i.texts=textsBox[0][0],this.scorebg=1):this.score<40?(a=textsBox[1],i.texts=a[Math.floor(Math.random()*a.length)],this.scorebg=2):this.score<60?(a=textsBox[2],i.texts=a[Math.floor(Math.random()*a.length)],this.scorebg=3):this.score<80?(a=textsBox[3],i.texts=a[Math.floor(Math.random()*a.length)],this.scorebg=4):this.score<=100?(a=textsBox[4],i.texts=a[Math.floor(Math.random()*a.length)],this.scorebg=5):(i.texts=textsBox[0][0],this.scorebg=1),i.init(function(){return t.ugcbg=i.app.renderer.extract.canvas().toDataURL(),i.qr(function(){return setTimeout(function(){return t.ugc=i.app.renderer.extract.base64()},100)})},this.scorebg),i.app.view.style.display="none"},upload:function e(){var t,a;return a=this.ugc,t={image:a,folder:"lancome"},null==a?main.faild():axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild()}).catch(function(e){return main.faild()})},success:function e(t){var a=this;return this.shareImageLink=t.info,neteaseShareImage(),setTimeout(function(){return a.lastPageShow=!0},3e3)},faild:function e(){return this.lastPageShow=!0},buildUGC:function e(){return this.runScore(),this.waitPageShow=!0,this.createUGC()},gotoUGC:function e(){var t=this;return this.waitPageBox=!0,setTimeout(function(){return t.waitPageShow=!1,t.ugcPageShow=!0},4e3)},next:function e(){return this.bgmplaying&&this.audio.play(),!(this.answers[this.now]<=-1)&&(this.now>=2?(console.log("Done goto ugc"),this.buildUGC()):(main.answerCanvas.nextAnswer(),this.now++,this.homepageShow=!1))},playSong:function e(t){var a=this;return this.musiclink="//image.giccoo.com/projects/lancome/mp3/mp3-"+t+".mp3",setTimeout(function(){return a.audiomusic.play()},1e3/30)},select:function e(t){return console.log(t),this.answers[this.now]=t,Vue.set(this.answers,this.now,t),this.answerCanvas.select(t)},gotoAnswer:function e(){var t;return this.wy||(window.location.href="https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fopenurl%3Furl%3Dhttps%3A%2F%2Factivity.music.163.com%2Flancome%2F%26thirdfrom%3Dwx"),!!this.wy&&(this.answerCanvas.init(),this.answerPageShow=!0,t=[])}},mounted:function e(t,a){var i=this;return"NeteaseMusic"===sys&&(this.wy=!0),this.mount=!0,this.questionMark=this.musicName.length%4,this.audio=document.getElementById("bgm"),this.audiomusic=document.getElementById("music"),this.answerCanvas=new createAnswer,this.audio&&this.audio.addEventListener("play",this.audioplay.bind(this)),this.audio&&this.audio.addEventListener("pause",this.audiopause.bind(this)),this.audio&&this.audio.addEventListener("ended",this.audiopause.bind(this)),this.audiomusic&&this.audiomusic.addEventListener("play",this.audiomusicplay.bind(this)),this.audiomusic&&this.audiomusic.addEventListener("ended",this.audiomusicpause.bind(this)),document.addEventListener("WeixinJSBridgeReady",function(){return i.wx=!0},!1)}})},buildUGC=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function e(){var t,a,i,s,n,o,r,m,h,l,c;for(t=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/ugc-bg-"+this.id+".jpg"].texture),c=new PIXI.Text("你的孤独指数是：",{fontSize:30,fill:2980251,align:"left"}),c.x=105,c.y=200,m=new PIXI.Text(this.score,{fontSize:115,fill:2980251,align:"left"}),m.x=350,m.y=150,this.app.stage.addChild(t,c,m),n=0,a=i=0,r=this.texts.length;0<=r?i<r:i>r;a=0<=r?++i:--i)"都觉得差了一点点"===(l=this.texts[a])&&100===this.score||(h=new PIXI.Text(l,{fontWeight:"lighter",fontSize:24,fill:2980251,align:"left"}),h.x=105,n=h.y=m.y+115+10+48*a,this.app.stage.addChild(h));return s=new PIXI.Text("兰蔻，陪你度过漫漫长夜",{fontSize:30,fill:2980251,align:"left"}),s.x=105,s.y=n+24+30,this.app.stage.addChild(s),o=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/ugc-qr.png"].texture),o.x=430,o.y=706,this.app.stage.addChild(o),this.app.renderer.render(this.app.stage),this.callback()}},{key:"qr",value:function e(t){return t()}},{key:"init",value:function e(t,a){return this.callback=t,this.id=a,this.app=new PIXI.Application({width:640,height:1138,transparent:!0,preserveDrawingBuffer:!0}),this.app.view.className="ugcCanvas",document.getElementById("ugcbg").appendChild(this.app.view),PIXI.loader.add([_CDN+"img/ugc-bg-"+a+".jpg",_CDN+"img/ugc-qr.png"]).load(this.build.bind(this))}}]),e}();return e.prototype.app=null,e.prototype.callback=null,e.prototype.score=0,e.prototype.id=1,e.prototype.texts=["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感都觉得差了一点点"],e}.call(void 0),stars=[],appStar=[],createStar=function e(){var t,a,i;return appStar=new PIXI.Application({width:640,height:1138,transparent:!0}),console.log(appStar.view.className="fadeIn animated"),t=function e(){var t,i,s,n,o;for(i=s=0;s<20;i=++s)o=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/star.png"].texture),o.x=640*Math.random(),o.y=1138*Math.random(),o.anchor.set(.5,.5),n=(80*Math.random()+20)/100,o.scale.set(n,n),o.rotation=0,o.v=n,o.life=60*(9*Math.random()+1),o.lifeDefault=60*(12*Math.random()+3),stars.push(o),appStar.stage.addChild(o),t=new PIXI.Graphics,t.beginFill([13526245,4445098,8948342][i%3]),t.drawCircle(0,0,3),t.endFill(),t.scale.set(n,n),t.rotation=0,t.v=n,t.x=640*Math.random(),t.y=1138*Math.random(),t.life=60*(9*Math.random()+1),t.lifeDefault=60*(12*Math.random()+3),stars.push(t),appStar.stage.addChild(t);return appStar.ticker.add(a),document.getElementById("stars").appendChild(appStar.view)},a=function e(t){var a,i,s,n;if(!(stars.length>0))return!1;for(s=[],a=0,i=stars.length;a<i;a++)n=stars[a],n.rotation>=1&&(n.rotation=0),n.rotation+=.1*t*n.v,n.life-=1,n.life<=0?n.alpha-=.02*t:n.alpha>0&&n.alpha<=1&&(n.alpha+=.05*t),n.alpha<=0?(n.alpha=.05*t,s.push(n.life=n.lifeDefault)):s.push(void 0);return s},i=0,PIXI.loader.add(canvasImgs).load(t).onProgress.add(function(){return i++,load.progressOn=Math.floor(i/canvasImgs.length*100)})},ansStar=[],mark=null,createAnswer=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"reset",value:function e(){var t;return!this.noreset&&(t=Math.floor(.8*Math.random()+1.2),this.scaleP.x=t,this.scaleP.y=t,this.XY.x=Math.floor(600*Math.random()),this.XY.y=Math.floor(600*Math.random()))}},{key:"gameLoop2",value:function e(t){var a;return!!this.moving2&&(a=this.dom.bg2,a.valpha<=0&&(a.alpha-=.01*t,a.x+=-1*t,a.alpha<=0&&(this.moving=!1,this.answer2Over())),null!=this.dom.bg3&&this.dom.bg3.x>=0&&(this.dom.bg3.x+=-1*t,this.dom.bg3.alpha+=.02*t,this.dom.bg3.x<=0)?this.dom.bg3.x=0:void 0)}},{key:"gameLoop",value:function e(t){var a,i,s,n,o;if(!this.moving)return!1;for(mark=this.dom.mark,mark.x+=.05*(this.XY.x-mark.x)*t,mark.y+=.05*(this.XY.y-mark.y)*t,mark.scale.x+=.05*(this.scaleP.x-mark.scale.x)*t,mark.scale.y+=.05*(this.scaleP.y-mark.scale.y)*t,this.dom.page1.valpha<=0&&(this.dom.page1.alpha-=.02*t,this.dom.page1.alpha<=0&&(this.moving=!1,this.answer1Over())),this.dom.page1.vscale>=2&&(i=this.dom.page1,i.scale.x+=.05*(i.vscale-i.scale.x)*t,i.scale.y+=.05*(i.vscale-i.scale.y)*t,i.x+=.05*(i.vx-i.x)*t,i.y+=.05*(i.vy-i.y)*t),o=[this.dom.answer11,this.dom.answer12,this.dom.answer13],s=0,n=o.length;s<n;s++)a=o[s],a.valpha?(a.alpha>=1&&(a.alpha=1),a.alpha+=.05*t):(a.alpha<=0&&(a.alpha=0),a.alpha-=.05*t);return Math.abs(mark.x-this.XY.x)<1?this.reset():void 0}},{key:"answer2Over",value:function e(){var t=this;return this.moving2=!1,this.ansStar.stage.removeChild(this.dom.bg2,this.dom.music),this.ansStar.ticker.remove(this.gameLoop2),Tn({x:0},{x:100},600,function(e){return t.dom.timeline.alpha=e.x/100})}},{key:"answer1Over",value:function e(){return console.log("answer1Over"),this.ansStar.stage.removeChild(this.dom.bg,this.dom.mark,this.dom.mark2,this.dom.answer1bg),this.ansStar.ticker.remove(this.gameLoop),this.ansStar.ticker.add(this.gameLoop2.bind(this))}},{key:"build3",value:function e(){var t,a,i,s,n,o;return this.t=2,null!=this.dom.bg2&&(this.dom.bg2.valpha=0),t=this.dom.bg3=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/answer-3-bg.jpg"].texture),t.alpha=.6,t.x=100,this.ansStar.stage.addChildAt(this.dom.bg3,0),a=this.dom.screen=new PIXI.Container,i=this.dom.timeline=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mobile-timeline.png"].texture),i.x=220,i.y=565,i.alpha=0,s=this.dom.timeline1=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mobile-answer.json"].textures["mobile-answer-1.png"]),s.x=272,s.y=685,s.alpha=0,n=this.dom.timeline2=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mobile-answer.json"].textures["mobile-answer-2.png"]),n.x=272,n.y=685,n.alpha=0,o=this.dom.timeline3=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mobile-answer.json"].textures["mobile-answer-3.png"]),o.x=272,o.y=685,o.alpha=0,a.addChild(i,s,n,o),this.ansStar.stage.addChild(a)}},{key:"build2",value:function e(){var t,a,i,s;return this.dom.page1.vscale=2.5,this.dom.page1.vx=-100,this.dom.page1.vy=-1251.8,this.dom.page1.valpha=0,this.dom.bg2=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/answer-2-bg.jpg"].texture),this.ansStar.stage.addChildAt(this.dom.bg2,0),t=this.dom.music=new PIXI.Container,a=this.dom.symbol1=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/symbol.png"].texture),i=this.dom.symbol2=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/symbol.png"].texture),s=this.dom.symbol3=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/symbol.png"].texture),a.x=99,a.y=690,i.x=110,i.y=717,i.scale.x=.72,i.scale.y=.72,i.rotation=.3,s.x=128,s.y=720,s.scale.x=.5,s.scale.y=.5,s.rotation=-.4,a.alpha=0,i.alpha=0,s.alpha=0,t.addChild(a,i,s),this.ansStar.stage.addChild(this.dom.music)}},{key:"build",value:function e(){var t,a,i,s;return this.dom.bg=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/answer-1-mark-bg.jpg"].texture),a=this.dom.bg,this.dom.page1=new PIXI.Container,this.dom.page1.alpha=1,this.dom.answer1bg=new PIXI.Container,t=this.dom.answer1bg,t.alpha=1,s=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/answer-1-bg.jpg"].texture),this.dom.page1.addChild(a),s.x=0,s.y=0,this.XY=new PIXI.Point,this.XY.x=446,this.XY.y=270,this.scaleP=new PIXI.Point,this.scaleP.x=1.2,this.scaleP.y=1.2,this.dom.mark=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mark-1.png"].texture),this.dom.mark2=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/mark-2.png"].texture),i=this.dom.mark2,i.anchor.set(.5),i.scale.set(1.4,1),i.x=512,i.y=530,i.visible=!1,mark=this.dom.mark,mark.x=this.XY.x,mark.y=this.XY.y,mark.anchor.set(.5),mark.scale=this.scaleP,t.addChild(s),t.mask=mark,this.dom.answer11=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/item-owl.png"].texture),this.dom.answer11.anchor.set(.5),this.dom.answer11.x=450,this.dom.answer11.y=310,this.dom.answer12=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/item-elephant.png"].texture),this.dom.answer12.anchor.set(.5),this.dom.answer12.x=320,this.dom.answer12.y=530,this.dom.answer13=new PIXI.Sprite(PIXI.loader.resources[_CDN+"img/item-panda.png"].texture),this.dom.answer13.anchor.set(.5),this.dom.answer13.x=530,this.dom.answer13.y=588,t.addChild(this.dom.answer11,this.dom.answer12,this.dom.answer13),this.dom.page1.addChild(mark,i,t),this.ansStar.stage.addChild(this.dom.page1),this.ansStar.ticker.add(this.gameLoop.bind(this))}},{key:"select",value:function e(t){var a=this,i,s,n,o;if(this.answers[this.t]=t,0===this.t)switch(this.dom.answer11.valpha=!1,this.dom.answer12.valpha=!1,this.dom.answer13.valpha=!1,clearTimeout(this.cache),t){case 0:return this.dom.answer11.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=446,this.XY.y=270,this.scaleP.x=1.2,this.scaleP.y=1.2,this.dom.mark.visible=!0,this.dom.mark2.visible=!1,this.dom.answer1bg.mask=this.dom.mark;case 1:return this.dom.answer12.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=230,this.XY.y=420,this.scaleP.x=1,this.scaleP.y=1,this.cache=setTimeout(function(){return a.dom.mark.visible=!1,a.dom.mark2.visible=!0,a.dom.answer1bg.mask=a.dom.mark2},400);case 2:return this.dom.answer13.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=540,this.XY.y=540,this.scaleP.x=3,this.scaleP.y=3,this.dom.mark.visible=!0,this.dom.mark2.visible=!1,this.dom.answer1bg.mask=this.dom.mark}else{if(1===this.t)return main.playSong(t),null!=this.tween&&null!=this.tween.stop&&this.tween.stop(),s={x:0},o=this.tween=new TWEEN.Tween(s).to({x:100},2e3).easing(TWEEN.Easing.Cubic.Out).onUpdate(function(){if(a.dom.symbol1.x=99-.3*s.x,s.x>=90?a.dom.symbol1.alpha=(100-s.x)/10:s.x<=30?a.dom.symbol1.alpha=(s.x-20)/10:a.dom.symbol1.alpha=1,a.dom.symbol2.x=110-.2*s.x,s.x>=80&&(a.dom.symbol2.alpha=(90-s.x)/10),s.x<=20&&(a.dom.symbol2.alpha=(s.x-10)/10),a.dom.symbol3.x=128-.1*s.x,s.x>=70&&(a.dom.symbol3.alpha=(80-s.x)/10),s.x<=10)return a.dom.symbol3.alpha=s.x/10}).start(),n={y:0},o=new TWEEN.Tween(n).to({y:-100},2e3).easing(TWEEN.Easing.Cubic.In).onUpdate(function(){return a.dom.symbol1.y=690+.5*n.y,a.dom.symbol2.y=717+.4*n.y,a.dom.symbol3.y=720+.3*n.y}).start();if(2===this.t){switch(this.dom.timeline1.alpha=0,this.dom.timeline2.alpha=0,this.dom.timeline3.alpha=0,i=null,t){case 0:i=this.dom.timeline1;break;case 1:i=this.dom.timeline2;break;case 2:i=this.dom.timeline3}if(null!=i)return null!=this.tween&&null!=this.tween.stop&&this.tween.stop(),this.tween=Tn({x:0},{x:100},800,function(e){return i.alpha=e.x/100})}}}},{key:"nextAnswer",value:function e(){return!(this.answers[this.t]<=-1)&&(this.t++,1===this.t&&this.build2(),2===this.t?this.build3():void 0)}},{key:"init",value:function e(){return this.ansStar=new PIXI.Application({width:640,height:1138,transparent:!0}),document.getElementById("answer-bg").appendChild(this.ansStar.view),PIXI.loader.add([_CDN+"img/mobile-answer.json",_CDN+"img/answer-3-bg.jpg",_CDN+"img/mobile-timeline.png"]).load(this.build.bind(this))}}]),e}();return e.prototype.ansStar=null,e.prototype.moving=!0,e.prototype.moving2=!0,e.prototype.scaleP=null,e.prototype.XY=null,e.prototype.dom={},e.prototype.noreset=!1,e.prototype.cache=null,e.prototype.tween=null,e.prototype.answers=[-1,-1,-1],e.prototype.t=0,e}.call(void 0),Tn=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:100},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,s=arguments[3],n,o;return n=t,o=new TWEEN.Tween(n).to(a,i).easing(TWEEN.Easing.Cubic.Out).onUpdate(function(){return s(n)}).start()},neteaseShareImage=function e(){var t,a,i;return i="点击测试你的孤独指数",t="https://image.giccoo.com/upload/lancome/"+main.shareImageLink+"@!large",a="https://activity.music.163.com/lancome/",console.log("orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(a)+"&wbDesc="+encodeURIComponent(i)+"&qqDesc="+encodeURIComponent(i)),window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(a)+"&wbDesc="+encodeURIComponent(i)+"&qqDesc="+encodeURIComponent(i)},upten=function e(t){return t<10?"0"+t:t};