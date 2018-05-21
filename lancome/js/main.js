"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),Tn,_CDN,_imgurl,_animate,ansStar,appStar,buildUGC,canvasImgs,createAnswer,createStar,getRandom,global,imageurl,init,load,loadWechatConfig,main,mark,musicName,myTime,myTimeDetail,myTimeLine,myTimeName,neteaseShareImage,pre,randomSort,scoreBox,scoreInfinity,scoreMusicTime,scoreShareTimes,scoreZore,shareMusicName,stars,sys,textsBox,upten;randomSort=function e(t){var i,a,s;return i=[],a=t,s=function e(t,i){var a;return 1===t.length?(i.push(t[0]),i):(a=Math.ceil(Math.random()*t.length)-1,i.push(t[a]),t.splice(a,1),s(t,i))},s(a,i),i},getRandom=function e(t){return parseInt(Math.random()*(t+1)-1)},function(){var e,t,i;for(e=0,t=["webkit","moz"],i=0;i>t.length&&!window.requestAnimationFrame;)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"],++i;window.requestAnimationFrame||(window.requestAnimationFrame=function(t,i){var a,s,n;return a=(new Date).getTime(),n=Math.max(0,16.7-(a-e)),s=window.setTimeout(function(){t(a+n)},n),e=a+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),loadWechatConfig=function e(){var t,i,a;a=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+a,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i)},_CDN="",_imgurl="",global={},main={},pre={},load={},sys=null,imageurl="//api.giccoo.com/api/upload/image64/",textsBox=[[["你是不识孤独滋味的少年","永远意气风发","永远活力四射","抹上眼霜 你就是最亮的星"]],[["你的感知神经似乎不太敏感","偶尔空虚，经常充实才是生活常态","寂寞的时候默念咒语","把大家都变成“发光”眼霜你就不孤独啦"],["你有时候也想45度静静仰望天空","但眼泪似乎不太掉得下来","孤独的感觉总是像龙卷风一样袭来","不过还好 “发光”眼霜是你的防护盾"]],[["好险","你距离显性孤独人口只差最后一步","你希望微信能被秒回","也希望朋友圈都有人点赞","但大家似乎都不太给面子"],["或许你有酒","或许你有远方","可是有时候","你还是愿意待在家里","做一只听着歌默默生长的蘑菇"]],[["你像一只小刺猬","想露出软软的肚皮","被温柔抚摸","可是很多人惧怕你坚硬的刺","而选择远离"],["「你怎么会喜欢这个」","「我觉得那个地方不好玩」","「一把年纪该结婚了」","永远有人在喋喋不休","而你只想让他们闭嘴"]],[["在努力，在奔跑","一个人的路总是艰苦","可是一个人","也更加恣肆，更加自由","不如把孤独当成甜品 一口吃掉"],["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感","都觉得差了一点点"]],[["你幻想自己是一只鱼","以为7秒就能忘记那种寂寞的感觉 ","其实你只是个忘用眼霜的人类","黯淡到连自己都快被遗忘"]]],scoreBox=[[11,17,1],[2,5,12],[7,9,23]],scoreInfinity=!1,scoreZore=!1,scoreMusicTime=[8,14,28],scoreShareTimes=[20,15,6],myTimeLine=[20,21,22,23,24,0,1,2,3,4],myTime=20,myTimeName="晚上",myTime<=5&&(myTimeName="凌晨"),myTimeDetail="20:25",musicName="夜空中最亮的星",shareMusicName="",canvasImgs=["img/star.png","img/answer-1-bg.jpg","img/answer-1-mark-bg.jpg","img/answer-2-bg.jpg","img/mark-1.png","img/mark-2.png","img/item-elephant.png","img/item-owl.png","img/item-panda.png","img/symbol.png"],getRandom=function e(t){return parseInt(Math.random()*(t+1)-1)},window.onload=function(){return window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return console.log("wx ready"),e={title:"点击测试你的孤独指数",desc:"与兰蔻一起，度过漫漫长夜",link:"http://m.giccoo.com/lancome/",imgUrl:"http://m.giccoo.com/lancome/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init()},_animate=function e(t){return requestAnimationFrame(_animate),TWEEN.update(t)},requestAnimationFrame(_animate),init=function e(){var t,i,a;return t=document.documentElement.clientHeight,i=document.documentElement.clientWidth,console.log(i,t),i>=640&&(i=640),t>=1138&&(t=1138),a=i/t-640/1138,load=new Vue({el:"#loadtext",data:{progress:0,mount:!1,progressOn:0},mounted:function e(){var t=this,i;return this.mount=!0,createStar(),i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),t.progress>=100)return t.progress=100,clearInterval(i),main.mount=!0,setTimeout(function(){return main.homepageShow=!0,document.getElementById("load").className+=" fadeOut animated",setTimeout(function(){return document.getElementById("load").style.display="none"},520)},100)},50)}}),main=new Vue({el:"#main",data:{pc:!1,homepageShow:!1,answerPageShow:!1,ugcPageShow:!1,waitPageShow:!1,lastPageShow:!1,waitPageBox:!1,mount:!1,audio:null,w:i,h:t,smaller:a,now:0,answerCanvas:null,score:0,scorebg:1,musiclink:"",bgmlink:"//image.giccoo.com/projects/lancome/mp3/bgm.mp3",playing:!1,bgmplaying:!1,ugc:null,ugcbg:null,wy:!1,wx:!1,shareImageLink:"",questionMark:0,answers:[-1,-1,-1],musicName:"平凡之路",myTimeName:"",myTimeDetail:"",myTime:15,myTimestp:0,shareMusicName:""},computed:{answerList:function e(){return[{question:["最近一次"+this.myTimeName+this.myTimeDetail+"还在听歌的你，觉得那时谁会陪着你？"],answers:["飞累了，借你家阳台<br/>歇歇的猫头鹰","冰箱里那只<br/>舔着冰淇淋的蠢大象","墙角边偷偷涂<br/>兰蔻“发光”眼霜的大熊猫"]},{question:["那一天，云村和你一起在听《"+this.musicName+"》的人，比英国的晴天还少；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，多到服务器瘫痪；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，和大迁徙时的角马一样多；你觉得他们那时在干什么？","那一天，云村和你一起在听《"+this.musicName+"》的人，比理工大的女生还少。你觉得他们那时在干什么？"],answers:["敲击键盘","窃窃私语聊天","刷手机"]},{question:[""===this.shareMusicName?"最近都没分享过歌曲的你，如果分享，觉得谁会点开听？":"之前从云音乐分享过一首《"+this.shareMusicName+"》你觉得谁点开听过？"],answers:["最想让TA听到的那个人","和我一样喜欢这类曲风的闺蜜","我才不care有没有人点开听"]}]}},watch:{myTimestp:function e(t,i){var a;return a=new Date(t),this.myTimeDetail=upten(a.getHours())+":"+upten(a.getMinutes()),this.myTime=a.getHours(),this.myTime>4&&this.myTime<=19?this.myTimeName="":this.myTime>19&&this.myTime<=24?this.myTimeName="晚上":this.myTimeName="凌晨"}},methods:{ask:function e(){return axios.get("//music.163.com/api/activity/lancome/userInfo?type=1").then(function(e){var t;if(t=e.data,200===t.code&&(null!=t.data.latestSongName&&(this.musicName=t.data.latestSongName),null!=t.data.latestShareSongName&&(this.shareMusicName=t.data.latestShareSongName),null!=t.data.latestTime))return this.myTimestp=t.data.latestTime}).catch(function(e){return console.log(e)})},asknote:function e(){},playbgm:function e(){return this.playing=!this.playing,this.bgmplaying=!this.bgmplaying,this.playing?document.getElementById("bgm").play():document.getElementById("bgm").pause()},audioplay:function e(){return this.playing=!0},audiopause:function e(){return this.playing=!1},audiomusicplay:function e(){return this.audio.pause()},audiomusicpause:function e(){if(console.log("music ended:",this.bgmplaying),this.bgmplaying)return this.audio.play()},runScore:function e(){var t,i,a,s;for(t=i=0,a=this.answers.length;0<=a?i<a:i>a;t=0<=a?++i:--i)this.score+=scoreBox[t][this.answers[t]];switch(s=myTimeLine.indexOf(this.myTime),console.log(s),s){case 0:this.score+=scoreMusicTime[0];break;case 1:this.score+=scoreMusicTime[0];break;case 4:this.score+=scoreMusicTime[1];break;case 7:this.score+=scoreMusicTime[2];break;case 9:this.score="∞"}return scoreInfinity&&(this.score="∞"),this.score<=80&&(0===this.questionMark&&(this.score+=16),1===this.questionMark&&(this.score=0),2===this.questionMark&&(this.score+=6),3===this.questionMark&&(this.score+=20)),console.log(this.score)},createUGC:function e(){var t=this,i,a;return a=new buildUGC,console.log("∞"===this.score||this.score>=0),a.score="∞"===this.score||this.score>=0?this.score:Math.floor(99*Math.random()+1),"∞"===this.score?(a.texts=textsBox[textsBox.length-1][0],this.scorebg=5):this.score<=0?(a.texts=textsBox[0][0],this.scorebg=1):this.score<40?(i=textsBox[1],a.texts=i[Math.floor(Math.random()*i.length)],this.scorebg=2):this.score<60?(i=textsBox[2],a.texts=i[Math.floor(Math.random()*i.length)],this.scorebg=3):this.score<80?(i=textsBox[3],a.texts=i[Math.floor(Math.random()*i.length)],this.scorebg=4):this.score<=100?(i=textsBox[4],a.texts=i[Math.floor(Math.random()*i.length)],this.scorebg=5):(a.texts=textsBox[0][0],this.scorebg=1),a.init(function(){return t.ugcbg=a.app.renderer.extract.canvas().toDataURL(),a.qr(function(){return setTimeout(function(){return t.ugc=a.app.renderer.extract.base64()},100)})},this.scorebg),a.app.view.style.display="none"},upload:function e(){var t,i;return i=this.ugc,t={image:i,folder:"lancome"},null==i?main.faild():axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild()}).catch(function(e){return main.faild()})},success:function e(t){var i=this;return this.shareImageLink=t.info,neteaseShareImage(),setTimeout(function(){return i.lastPageShow=!0},3e3)},faild:function e(){return this.lastPageShow=!0},buildUGC:function e(){return this.runScore(),this.waitPageShow=!0,this.createUGC()},gotoUGC:function e(){var t=this;return this.waitPageBox=!0,setTimeout(function(){return t.waitPageShow=!1,t.ugcPageShow=!0},7e3)},next:function e(){return this.bgmplaying&&this.audio.play(),!(this.answers[this.now]<=-1)&&(this.now>=2?(console.log("Done goto ugc"),this.buildUGC()):(main.answerCanvas.nextAnswer(),this.now++,this.homepageShow=!1))},playSong:function e(t){var i=this;return this.musiclink="./mp3/mp3-"+t+".mp3",setTimeout(function(){return i.audiomusic.play()},1e3/30)},select:function e(t){return console.log(t),this.answers[this.now]=t,Vue.set(this.answers,this.now,t),this.answerCanvas.select(t)},gotoAnswer:function e(){var t;return this.wy||(window.location.href="https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fopenurl%3Furl%3Dhttps%3A%2F%2Factivity.music.163.com%2Flancome%2F%26thirdfrom%3Dwx"),!!this.wy&&(this.answerCanvas.init(),this.answerPageShow=!0,t=[])}},mounted:function e(t,i){var a=this;return"NeteaseMusic"===sys&&(this.wy=!0),this.mount=!0,this.questionMark=Math.floor(Math.random()*this.answerList[1].question.length),this.audio=document.getElementById("bgm"),this.audiomusic=document.getElementById("music"),this.answerCanvas=new createAnswer,this.audio&&this.audio.addEventListener("play",this.audioplay.bind(this)),this.audio&&this.audio.addEventListener("pause",this.audiopause.bind(this)),this.audio&&this.audio.addEventListener("ended",this.audiopause.bind(this)),this.audiomusic&&this.audiomusic.addEventListener("play",this.audiomusicplay.bind(this)),this.audiomusic&&this.audiomusic.addEventListener("ended",this.audiomusicpause.bind(this)),this.ask(),document.addEventListener("WeixinJSBridgeReady",function(){return a.wx=!0},!1)}})},buildUGC=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"build",value:function e(){var t,i,a,s,n,o,r,m,h,l,c;for(t=new PIXI.Sprite(PIXI.loader.resources["img/ugc-bg-"+this.id+".jpg"].texture),c=new PIXI.Text("你的孤独指数是：",{fontSize:30,fill:2980251,align:"left"}),c.x=105,c.y=200,m=new PIXI.Text(this.score,{fontSize:115,fill:2980251,align:"left"}),m.x=350,m.y=150,this.app.stage.addChild(t,c,m),n=0,i=a=0,r=this.texts.length;0<=r?a<r:a>r;i=0<=r?++a:--a)"都觉得差了一点点"===(l=this.texts[i])&&100===this.score||(h=new PIXI.Text(l,{fontWeight:"lighter",fontSize:24,fill:2980251,align:"left"}),h.x=105,n=h.y=m.y+115+10+48*i,this.app.stage.addChild(h));return s=new PIXI.Text("兰蔻，陪你度过漫漫长夜",{fontSize:30,fill:2980251,align:"left"}),s.x=105,s.y=n+24+30,this.app.stage.addChild(s),o=new PIXI.Sprite(PIXI.loader.resources["img/ugc-qr.png"].texture),o.x=430,o.y=706,this.app.stage.addChild(o),this.app.renderer.render(this.app.stage),this.callback()}},{key:"qr",value:function e(t){return t()}},{key:"init",value:function e(t,i){return this.callback=t,this.id=i,this.app=new PIXI.Application({width:640,height:1138,transparent:!0,preserveDrawingBuffer:!0}),this.app.view.className="ugcCanvas",document.getElementById("ugcbg").appendChild(this.app.view),PIXI.loader.add(["img/ugc-bg-"+i+".jpg","img/ugc-qr.png"]).load(this.build.bind(this))}}]),e}();return e.prototype.app=null,e.prototype.callback=null,e.prototype.score=0,e.prototype.id=1,e.prototype.texts=["你是个总觉得差一点点的人","差一点点就饱了","差一点点就满足了","连百分百的孤独感都觉得差了一点点"],e}.call(void 0),stars=[],appStar=[],createStar=function e(){var t,i,a;return appStar=new PIXI.Application({width:640,height:1138,transparent:!0}),console.log(appStar.view.className="fadeIn animated"),t=function e(){var t,a,s,n,o;for(a=s=0;s<20;a=++s)o=new PIXI.Sprite(PIXI.loader.resources["img/star.png"].texture),o.x=640*Math.random(),o.y=1138*Math.random(),o.anchor.set(.5,.5),n=(80*Math.random()+20)/100,o.scale.set(n,n),o.rotation=0,o.v=n,o.life=60*(9*Math.random()+1),o.lifeDefault=60*(12*Math.random()+3),stars.push(o),appStar.stage.addChild(o),t=new PIXI.Graphics,t.beginFill([13526245,4445098,8948342][a%3]),t.drawCircle(0,0,3),t.endFill(),t.scale.set(n,n),t.rotation=0,t.v=n,t.x=640*Math.random(),t.y=1138*Math.random(),t.life=60*(9*Math.random()+1),t.lifeDefault=60*(12*Math.random()+3),stars.push(t),appStar.stage.addChild(t);return appStar.ticker.add(i),document.getElementById("stars").appendChild(appStar.view)},i=function e(t){var i,a,s,n;if(!(stars.length>0))return!1;for(s=[],i=0,a=stars.length;i<a;i++)n=stars[i],n.rotation>=1&&(n.rotation=0),n.rotation+=.1*t*n.v,n.life-=1,n.life<=0?n.alpha-=.02*t:n.alpha>0&&n.alpha<=1&&(n.alpha+=.05*t),n.alpha<=0?(n.alpha=.05*t,s.push(n.life=n.lifeDefault)):s.push(void 0);return s},a=0,PIXI.loader.add(canvasImgs).load(t).onProgress.add(function(){return a++,load.progressOn=Math.floor(a/canvasImgs.length*100)})},ansStar=[],mark=null,createAnswer=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"reset",value:function e(){var t;return!this.noreset&&(t=Math.floor(.8*Math.random()+1.2),this.scaleP.x=t,this.scaleP.y=t,this.XY.x=Math.floor(600*Math.random()),this.XY.y=Math.floor(600*Math.random()))}},{key:"gameLoop2",value:function e(t){var i;return!!this.moving2&&(i=this.dom.bg2,i.valpha<=0&&(i.alpha-=.01*t,i.x+=-1*t,i.alpha<=0&&(this.moving=!1,this.answer2Over())),null!=this.dom.bg3&&this.dom.bg3.x>=0&&(this.dom.bg3.x+=-1*t,this.dom.bg3.alpha+=.02*t,this.dom.bg3.x<=0)?this.dom.bg3.x=0:void 0)}},{key:"gameLoop",value:function e(t){var i,a,s,n,o;if(!this.moving)return!1;for(mark=this.dom.mark,mark.x+=.05*(this.XY.x-mark.x)*t,mark.y+=.05*(this.XY.y-mark.y)*t,mark.scale.x+=.05*(this.scaleP.x-mark.scale.x)*t,mark.scale.y+=.05*(this.scaleP.y-mark.scale.y)*t,this.dom.page1.valpha<=0&&(this.dom.page1.alpha-=.02*t,this.dom.page1.alpha<=0&&(this.moving=!1,this.answer1Over())),this.dom.page1.vscale>=2&&(a=this.dom.page1,a.scale.x+=.05*(a.vscale-a.scale.x)*t,a.scale.y+=.05*(a.vscale-a.scale.y)*t,a.x+=.05*(a.vx-a.x)*t,a.y+=.05*(a.vy-a.y)*t),o=[this.dom.answer11,this.dom.answer12,this.dom.answer13],s=0,n=o.length;s<n;s++)i=o[s],i.valpha?(i.alpha>=1&&(i.alpha=1),i.alpha+=.05*t):(i.alpha<=0&&(i.alpha=0),i.alpha-=.05*t);return Math.abs(mark.x-this.XY.x)<1?this.reset():void 0}},{key:"answer2Over",value:function e(){var t=this;return this.moving2=!1,this.ansStar.stage.removeChild(this.dom.bg2,this.dom.music),this.ansStar.ticker.remove(this.gameLoop2),Tn({x:0},{x:100},600,function(e){return t.dom.timeline.alpha=e.x/100})}},{key:"answer1Over",value:function e(){return console.log("answer1Over"),this.ansStar.stage.removeChild(this.dom.bg,this.dom.mark,this.dom.mark2,this.dom.answer1bg),this.ansStar.ticker.remove(this.gameLoop),this.ansStar.ticker.add(this.gameLoop2.bind(this))}},{key:"build3",value:function e(){var t,i,a,s,n,o;return this.t=2,null!=this.dom.bg2&&(this.dom.bg2.valpha=0),t=this.dom.bg3=new PIXI.Sprite(PIXI.loader.resources["img/answer-3-bg.jpg"].texture),t.alpha=.6,t.x=100,this.ansStar.stage.addChildAt(this.dom.bg3,0),i=this.dom.screen=new PIXI.Container,a=this.dom.timeline=new PIXI.Sprite(PIXI.loader.resources["img/mobile-timeline.png"].texture),a.x=220,a.y=565,a.alpha=0,s=this.dom.timeline1=new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer.json"].textures["mobile-answer-1.png"]),s.x=272,s.y=685,s.alpha=0,n=this.dom.timeline2=new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer.json"].textures["mobile-answer-2.png"]),n.x=272,n.y=685,n.alpha=0,o=this.dom.timeline3=new PIXI.Sprite(PIXI.loader.resources["img/mobile-answer.json"].textures["mobile-answer-3.png"]),o.x=272,o.y=685,o.alpha=0,i.addChild(a,s,n,o),this.ansStar.stage.addChild(i)}},{key:"build2",value:function e(){var t,i,a,s;return this.dom.page1.vscale=2.5,this.dom.page1.vx=-100,this.dom.page1.vy=-1251.8,this.dom.page1.valpha=0,this.dom.bg2=new PIXI.Sprite(PIXI.loader.resources["img/answer-2-bg.jpg"].texture),this.ansStar.stage.addChildAt(this.dom.bg2,0),t=this.dom.music=new PIXI.Container,i=this.dom.symbol1=new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture),a=this.dom.symbol2=new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture),s=this.dom.symbol3=new PIXI.Sprite(PIXI.loader.resources["img/symbol.png"].texture),i.x=99,i.y=690,a.x=110,a.y=717,a.scale.x=.72,a.scale.y=.72,a.rotation=.3,s.x=128,s.y=720,s.scale.x=.5,s.scale.y=.5,s.rotation=-.4,i.alpha=0,a.alpha=0,s.alpha=0,t.addChild(i,a,s),this.ansStar.stage.addChild(this.dom.music)}},{key:"build",value:function e(){var t,i,a,s;return this.dom.bg=new PIXI.Sprite(PIXI.loader.resources["img/answer-1-mark-bg.jpg"].texture),i=this.dom.bg,this.dom.page1=new PIXI.Container,this.dom.page1.alpha=1,this.dom.answer1bg=new PIXI.Container,t=this.dom.answer1bg,t.alpha=1,s=new PIXI.Sprite(PIXI.loader.resources["img/answer-1-bg.jpg"].texture),this.dom.page1.addChild(i),s.x=0,s.y=0,this.XY=new PIXI.Point,this.XY.x=446,this.XY.y=270,this.scaleP=new PIXI.Point,this.scaleP.x=1.2,this.scaleP.y=1.2,this.dom.mark=new PIXI.Sprite(PIXI.loader.resources["img/mark-1.png"].texture),this.dom.mark2=new PIXI.Sprite(PIXI.loader.resources["img/mark-2.png"].texture),a=this.dom.mark2,a.anchor.set(.5),a.scale.set(1.4,1),a.x=512,a.y=530,a.visible=!1,mark=this.dom.mark,mark.x=this.XY.x,mark.y=this.XY.y,mark.anchor.set(.5),mark.scale=this.scaleP,t.addChild(s),t.mask=mark,this.dom.answer11=new PIXI.Sprite(PIXI.loader.resources["img/item-owl.png"].texture),this.dom.answer11.anchor.set(.5),this.dom.answer11.x=450,this.dom.answer11.y=310,this.dom.answer12=new PIXI.Sprite(PIXI.loader.resources["img/item-elephant.png"].texture),this.dom.answer12.anchor.set(.5),this.dom.answer12.x=320,this.dom.answer12.y=530,this.dom.answer13=new PIXI.Sprite(PIXI.loader.resources["img/item-panda.png"].texture),this.dom.answer13.anchor.set(.5),this.dom.answer13.x=530,this.dom.answer13.y=588,t.addChild(this.dom.answer11,this.dom.answer12,this.dom.answer13),this.dom.page1.addChild(mark,a,t),this.ansStar.stage.addChild(this.dom.page1),this.ansStar.ticker.add(this.gameLoop.bind(this))}},{key:"select",value:function e(t){var i=this,a,s,n,o;if(this.answers[this.t]=t,0===this.t)switch(this.dom.answer11.valpha=!1,this.dom.answer12.valpha=!1,this.dom.answer13.valpha=!1,clearTimeout(this.cache),t){case 0:return this.dom.answer11.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=446,this.XY.y=270,this.scaleP.x=1.2,this.scaleP.y=1.2,this.dom.mark.visible=!0,this.dom.mark2.visible=!1,this.dom.answer1bg.mask=this.dom.mark;case 1:return this.dom.answer12.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=230,this.XY.y=420,this.scaleP.x=1,this.scaleP.y=1,this.cache=setTimeout(function(){return i.dom.mark.visible=!1,i.dom.mark2.visible=!0,i.dom.answer1bg.mask=i.dom.mark2},400);case 2:return this.dom.answer13.valpha=!0,this.moving=!0,this.noreset=!0,this.XY.x=540,this.XY.y=540,this.scaleP.x=3,this.scaleP.y=3,this.dom.mark.visible=!0,this.dom.mark2.visible=!1,this.dom.answer1bg.mask=this.dom.mark}else{if(1===this.t)return main.playSong(t),null!=this.tween&&null!=this.tween.stop&&this.tween.stop(),s={x:0},o=this.tween=new TWEEN.Tween(s).to({x:100},2e3).easing(TWEEN.Easing.Cubic.Out).onUpdate(function(){if(i.dom.symbol1.x=99-.3*s.x,s.x>=90?i.dom.symbol1.alpha=(100-s.x)/10:s.x<=30?i.dom.symbol1.alpha=(s.x-20)/10:i.dom.symbol1.alpha=1,i.dom.symbol2.x=110-.2*s.x,s.x>=80&&(i.dom.symbol2.alpha=(90-s.x)/10),s.x<=20&&(i.dom.symbol2.alpha=(s.x-10)/10),i.dom.symbol3.x=128-.1*s.x,s.x>=70&&(i.dom.symbol3.alpha=(80-s.x)/10),s.x<=10)return i.dom.symbol3.alpha=s.x/10}).start(),n={y:0},o=new TWEEN.Tween(n).to({y:-100},2e3).easing(TWEEN.Easing.Cubic.In).onUpdate(function(){return i.dom.symbol1.y=690+.5*n.y,i.dom.symbol2.y=717+.4*n.y,i.dom.symbol3.y=720+.3*n.y}).start();if(2===this.t){switch(this.dom.timeline1.alpha=0,this.dom.timeline2.alpha=0,this.dom.timeline3.alpha=0,a=null,t){case 0:a=this.dom.timeline1;break;case 1:a=this.dom.timeline2;break;case 2:a=this.dom.timeline3}if(null!=a)return null!=this.tween&&null!=this.tween.stop&&this.tween.stop(),this.tween=Tn({x:0},{x:100},800,function(e){return a.alpha=e.x/100})}}}},{key:"nextAnswer",value:function e(){return!(this.answers[this.t]<=-1)&&(this.t++,1===this.t&&this.build2(),2===this.t?this.build3():void 0)}},{key:"init",value:function e(){return this.ansStar=new PIXI.Application({width:640,height:1138,transparent:!0}),document.getElementById("answer-bg").appendChild(this.ansStar.view),PIXI.loader.add(["img/mobile-answer.json","img/answer-3-bg.jpg","img/mobile-timeline.png"]).load(this.build.bind(this))}}]),e}();return e.prototype.ansStar=null,e.prototype.moving=!0,e.prototype.moving2=!0,e.prototype.scaleP=null,e.prototype.XY=null,e.prototype.dom={},e.prototype.noreset=!1,e.prototype.cache=null,e.prototype.tween=null,e.prototype.answers=[-1,-1,-1],e.prototype.t=0,e}.call(void 0),Tn=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:100},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,s=arguments[3],n,o;return n=t,o=new TWEEN.Tween(n).to(i,a).easing(TWEEN.Easing.Cubic.Out).onUpdate(function(){return s(n)}).start()},neteaseShareImage=function e(){var t,i,a;return a="点击测试你的孤独指数",t="https://image.giccoo.com/upload/lancome/"+main.shareImageLink+"@!large",i="https://m.giccoo.com/lancome/",console.log("orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(a)+"&qqDesc="+encodeURIComponent(a)),window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(a)+"&qqDesc="+encodeURIComponent(a)},upten=function e(t){return t<10?"0"+t:t};