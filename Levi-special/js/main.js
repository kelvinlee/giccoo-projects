"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,CD,Container,Graphics,IsPC,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,VENDORS,_CDN,_cache,_cd,_public,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,init,isNumber,j,len1,loadWechatConfig,loader,loading,mTestElement,main,message,music,musicIconCache,musicLineCache,resource,resources,sended,sys,ten,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&(i=VENDORS[j],!((css3Prefix=i)+"Transition"in mTestElement.style));j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,s;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<t.length;){if(n.indexOf(t[s])>0){i=!1;break}s++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function e(t){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},null==Number.isInteger&&(Number.isInteger=function(e){return e>=0}),CD=function(){var e=function(){function e(t){_classCallCheck(this,e),this.opts={el:"main",w:750,h:750,trueH:750,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,t),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),PIXI.loader.add([_CDN+"img/music-cd.png",_CDN+"img/music-pointer.png"]).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(e,[{key:"build",value:function e(){var t,i;if(this.pointer=i=new Sprite(getTe(_CDN+"img/music-pointer.png")),i.anchor.set(.75,.25),i.x=this.opts.w/2,i.y=.25*i.height,this.cd=t=new Sprite(getTe(_CDN+"img/music-cd.png")),t.anchor.set(.5,.5),t.x=this.opts.w/2,t.y=t.height/2+i.height/2+20,this.stage.addChild(t,i),null!=this.opts.callback)return this.opts.callback()}},{key:"avatar",value:function e(t){var e,i;return null!=this.cdCenter&&this.stage.removeChild(this.cdCenter),this.cdCenter=new Container,e=Sprite.fromImage(t),e.width=416,e.height=416,i=new Graphics,i.beginFill(16777215),i.drawCircle(205,205,205),this.cdCenter.addChild(i),e.mask=i,this.cdCenter.addChild(e),this.stage.addChild(this.cdCenter),this.cdCenter.x=this.opts.w/2,this.cdCenter.y=this.cd.y,this.cdCenter.pivot.x=205,this.cdCenter.pivot.y=205,this.cdCenter.scale.set(.6,.6),this.cdCenter.alpha=0,TweenMax.to(this.cdCenter,1,{alpha:1})}},{key:"stopAll",value:function e(){return TweenMax.killTweensOf(this.pointer),TweenMax.killTweensOf(this.cdCenter),TweenMax.killTweensOf(this.cd)}},{key:"play",value:function e(){return this.stopAll(),TweenMax.to(this.pointer,1,{rotation:-.4}),TweenMax.to(this.cdCenter,4,{rotation:2*Math.PI,repeat:10}),TweenMax.to(this.cd,4,{rotation:2*Math.PI,repeat:10})}},{key:"stop",value:function e(){return this.stopAll(),TweenMax.to(this.pointer,1,{rotation:0}),this.cdCenter.rotation=0,this.cd.rotation=0}}]),e}();return e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype._progress=0,e.prototype.startTime=null,e}.call(void 0),message=[{id:1,nickname:"",message:"结婚后就失去了独处空间,我已经穿着裤子在马桶上坐了1小时了"},{id:2,nickname:"",message:"他们说以后还会常常喝醉。但像毕业这么开心的醉,大概不会有了"},{id:3,nickname:"",message:"因为怕吵到妈妈,我爸总是静音看球,却管不住自己发出的音量"},{id:4,nickname:"",message:"为什么有这么多解压的玩具？生活不易啊！"},{id:5,nickname:"",message:"坚持早起运动的第三天,发现原来总有人比你起得更早"},{id:6,nickname:"",message:"当年车后座的女孩,今天给我发来了请帖"}],isNumber=function e(t){return"number"==typeof t&&isFinite(t)},String.prototype.gblen=function(){var e,t,n;for(t=0,i=e=0,n=this.length;0<=n?e<n:e>n;i=0<=n?++e:--e)this.charCodeAt(i)>127||94===this.charCodeAt(i)?t+=2:t++;return t},TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/Levi",apiLink="//g.giccoo.com/",main={},music={},ugc=null,_public={},loading={},musicLineCache=null,musicIconCache=null,sys="",ugcCache=null,sended=[!1,!1],_cache=null,_CDN="./",_cd=null,window.onload=function(){return IsPC()?(document.getElementById("qrcode").className+=" show",!1):(window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return e={title:"有故事的声活单曲",desc:"有故事的声活单曲~",link:"http://m.giccoo.com/Levi-special/",imgUrl:"http://m.giccoo.com/Levi-special/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),_public=new Vue({el:"#public",data:{note:!0}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:100,out:!1,openShow:!0},methods:{openMusic:function e(){var t=this,i;return i=document.getElementById("fl"),i.play(),clearTimeout(_cache),this.openShow=!1,setTimeout(function(){return t.out=!0,setTimeout(function(){return document.getElementById("loading").style.display="none"},2020)},700)}},mounted:function e(){var t=this,i;return this.mounted=!0,i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),t.progress>=100)return t.progress=100,clearInterval(i),main.mounted=!0,_cache=setTimeout(function(){return t.out=!0,setTimeout(function(){return document.getElementById("loading").style.display="none"},2020)},2e3)},50),setTimeout(function(){return init()},500)}}))},init=function e(){var t,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,TrueW>=640&&(TrueW=640),TrueH>=1138&&(TrueH=1138),n=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),console.log(TrueW,TrueH),main=new Vue({el:"#main",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.52,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!1,loading:!1,pagebuildShow:!1,pageInfoShow:!1,pageIndex:2,step:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcold:null,pushed:!1,shareImageLink:null,singerIndex:3,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,uploaded:!1,imageUpdate:!1,btnMore:!1,form:{link:null},mask:1,text:"",nickname:"",musicLink:"",default:{x:0,moving:!1},note:!0,noteArrow:!0,videoPop:!1},methods:{openTV:function e(){var t=this,i;return i=document.getElementById("audiotv"),i.play(),setTimeout(function(){return t.videoPop=!0},1200)},openMZ:function e(){var t;return t=document.getElementById("audiomz"),t.play(),setTimeout(function(){return window.location.href="https://music.163.com/#/user/home?id=1529461944"},1e3)},openCDM:function e(){var t;return t=document.getElementById("audiocd"),t.play(),setTimeout(function(){return window.location.href="https://music.163.com/#/playlist?id=2328252403&userid=38753829"},1e3)},startbuild:function e(){},start:function e(t){var i;return i=t.touches[0],this.default.x=i.clientX,this.default.moving=!0},move:function e(t){var i,n,s;return!!this.default.moving&&(s=t.touches[0],n=s.clientX,i=this.default.x-n,i>50&&(this.default.moving=!1,ugc.nextPage()),i<-50?(this.default.moving=!1,ugc.prevPage()):void 0)},end:function e(t){return this.default.moving=!1},openCD:function e(t){return music.ask(t),music.show=!0,music.now=t,this.noteArrow=!1}},mounted:function e(){var t;return t=2*TrueH*(2-2*TrueW/750+.01),this.v=parseInt(CloudMusic.getClientVersion().replace(/\./g,""))}}),music=new Vue({el:"#music",data:{now:1,w:TrueW,h:TrueH,biger:TrueW/TrueH<.54,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!1,msgList:[],bgm:null,playing:!1,timeing:"0:00",timeend:"0:00",playProgress:0,line:1,show:!1,info:{nickname:"",avatar:"",music:"",message:"",singer:1}},watch:{now:function e(t,i){return this.bgm.pause(),this.line=1,this.now>6?this.now=6:this.now<1?this.now=1:this.ask(this.now)}},methods:{prev:function e(){return this.now--},next:function e(){return this.now++},canplay:function e(){var t,i;if(Infinity!==this.bgm.duration)return t=Math.floor(this.bgm.duration/60),i=ten(Math.floor(this.bgm.duration%60)),t=0,isNumber(this.bgm.duration)||(i="00"),this.timeend=t+":"+i},playRun:function e(){var t,i,n;if(Infinity!==this.bgm.duration)return this.playProgress=this.bgm.currentTime/this.bgm.duration*100,t=ten(Math.floor(this.bgm.duration/60)),n=ten(Math.floor(this.bgm.duration%60)),t>99&&(t=99),t=0,isNumber(this.bgm.duration)||(n="00"),this.timeend=t+":"+n,t=ten(Math.floor(this.bgm.currentTime/60)),n=ten(Math.floor(this.bgm.currentTime%60)),t>99&&(t=99),this.timeing=t+":"+n,i=100/this.msgList.length,this.line=Math.ceil(this.playProgress/i)},play:function e(){return this.playing?(this.bgm.pause(),_cd.stop()):(this.bgm.play(),_cd.play())},playtype:function e(){return console.log("play"),this.playing=!0},cdUpdate:function e(){var t,n,s,o,r,a;for(_cd.avatar("/Levi-special/img/cd-"+this.info.avatar+".jpg"),a=this.info.message.split(""),s=[],o=-1,n=32,i=t=0,r=a.length;0<=r?t<r:t>r;i=0<=r?++t:--t)i%8==0&&(o++,s[o]=""),s[o]+=a[i]+" ";return this.msgList=s},ask:function e(t){return this.info={nickname:"",avatar:t,music:"//image.giccoo.com/projects/Levi-special/mp3/cd-new-"+t+".mp3",message:message[t-1].message,singer:3},this.mounted=!0,this.cdUpdate(),this.bgm.currentTime=0,this.playProgress=0,this.playing=!1}},mounted:function e(){return _cd=new CD({el:"cd"}),this.bgm=document.getElementById("bgm")}})},ten=function e(t){return NaN===t?"0":t<10?"0"+t:t};