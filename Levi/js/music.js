"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),$_GET,ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,CD,Container,Graphics,IsPC,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,VENDORS,_CDN,_cd,apiLink,autoDetectRenderer,css3Prefix,getId,getTe,i,init,k,len1,loadWechatConfig,loader,mTestElement,main,resource,resources,ten;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),k=0,len1=VENDORS.length;k<len1&&(i=VENDORS[k],!((css3Prefix=i)+"Transition"in mTestElement.style));k++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function t(){var e,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),e=document.createElement("script"),e.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(e,i)},IsPC=function t(){var e,i,n,s;for(n=navigator.userAgent,e=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<e.length;){if(n.indexOf(e[s])>0){i=!1;break}s++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function t(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function t(){var e;return e=this.$emit("play",this),this.playing=!0},pause:function t(){var e;return e=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function t(){return this.playing=!1},change:function t(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function t(e){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function t(e){return resource[e].texture},getId=function t(e,i){return loader.resources[i].textures[e]},null==Number.isInteger&&(Number.isInteger=function(t){return t>=0}),$_GET=function(){var t,e,n,s,a,o;if(o=window.document.location.href.toString(),a=o.split("?"),"string"==typeof a[1]){for(a=a[1].split("&"),t={},console.log(a),n=0,s=a.length;n<s;n++)i=a[n],e=i.split("="),t[e[0]]=e[1];return t}return{}}(),CD=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:750,trueH:750,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),PIXI.loader.add([_CDN+"img/music-cd.png",_CDN+"img/music-pointer.png"]).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"build",value:function t(){var e,i;if(this.pointer=i=new Sprite(getTe(_CDN+"img/music-pointer.png")),i.anchor.set(.75,.25),i.x=this.opts.w/2,i.y=.25*i.height,this.cd=e=new Sprite(getTe(_CDN+"img/music-cd.png")),e.anchor.set(.5,.5),e.x=this.opts.w/2,e.y=e.height/2+i.height/2+20,this.stage.addChild(e,i),null!=this.opts.callback)return this.opts.callback()}},{key:"avatar",value:function t(e){var t,i;return null!=this.cdCenter&&this.stage.removeChild(this.cdCenter),this.cdCenter=new Container,t=Sprite.fromImage(e),t.width=750,t.height=1314,i=new Graphics,i.beginFill(16777215),i.drawCircle(205,205,205),t.x=-130,t.y=-282,this.cdCenter.addChild(i),t.mask=i,this.cdCenter.addChild(t),this.stage.addChild(this.cdCenter),this.cdCenter.x=this.opts.w/2,this.cdCenter.y=this.cd.y,this.cdCenter.pivot.x=205,this.cdCenter.pivot.y=205,this.cdCenter.scale.set(.6,.6),this.cdCenter.alpha=0,TweenMax.to(this.cdCenter,1,{alpha:1})}},{key:"stopAll",value:function t(){return TweenMax.killTweensOf(this.pointer),TweenMax.killTweensOf(this.cdCenter),TweenMax.killTweensOf(this.cd)}},{key:"play",value:function t(){return this.stopAll(),TweenMax.to(this.pointer,1,{rotation:-.4}),TweenMax.to(this.cdCenter,4,{rotation:2*Math.PI,repeat:10}),TweenMax.to(this.cd,4,{rotation:2*Math.PI,repeat:10})}},{key:"stop",value:function t(){return this.stopAll(),TweenMax.to(this.pointer,1,{rotation:0}),this.cdCenter.rotation=0,this.cd.rotation=0}}]),t}();return t.prototype.default={w:320,h:160,running:!0},t.prototype.started=!1,t.prototype.over=!1,t.prototype.online=!1,t.prototype.blocks=[],t.prototype.bottles=[],t.prototype.enemys=[],t.prototype.lights=[],t.prototype._progress=0,t.prototype.startTime=null,t}.call(void 0),String.prototype.gblen=function(){var t,e,n;for(e=0,i=t=0,n=this.length;0<=n?t<n:t>n;i=0<=n?++t:--t)this.charCodeAt(i)>127||94===this.charCodeAt(i)?e+=2:e++;return e},main=null,_cd=null,apiLink="http://192.168.3.45:3000/",_CDN="./",window.onload=function(){return IsPC()?(document.getElementById("qrcode").className+=" show",!1):init()},init=function t(){var e,n,s,a;return e=document.documentElement.clientHeight,n=document.documentElement.clientWidth,n>=640&&(n=640),e>=1138&&(e=1138),a=2*e<1200,s=Math.ceil(n/640*94/e*100),console.log(n/e),a=n/e>.65,main=new Vue({el:"#music",data:{w:n,h:e,biger:n/e<.54,smaller:a,afterH:a?1.15*e-n/750*1029:e-n/750*1029,wy:!1,mounted:!1,msgList:[],bgm:null,playing:!1,timeing:"0:00",timeend:"0:00",playProgress:0,line:0,info:{nickname:"",avatar:"",music:"",message:"",singer:1}},methods:{canplay:function t(){return console.log(this.bgm.duration)},playRun:function t(){var e,i,n;return this.playProgress=this.bgm.currentTime/this.bgm.duration*100,e=Math.floor(this.bgm.duration/60),n=ten(Math.floor(this.bgm.duration%60)),this.timeend=e+":"+n,e=Math.floor(this.bgm.currentTime/60),n=ten(Math.floor(this.bgm.currentTime%60)),this.timeing=e+":"+n,i=100/this.msgList.length,this.line=Math.ceil(this.playProgress/i)},play:function t(){return this.playing?(this.bgm.pause(),_cd.stop()):(this.bgm.play(),_cd.play())},playtype:function t(){return console.log("play"),this.playing=!0},cdUpdate:function t(){var e,n,s,a,o,r;for(_cd.avatar("http://image.giccoo.com/upload/"+this.info.avatar+"@!large"),r=this.info.message.split(""),s=[],a=-1,n=32,i=e=0,o=r.length;0<=o?e<o:e>o;i=0<=o?++e:--e)i%8==0&&(a++,s[a]=""),s[a]+=r[i]+" ";return this.msgList=s},ask:function t(e){var i=this;return axios.get(apiLink+"active/levi/info/id/"+e).then(function(t){return console.log(t.data),i.info=t.data.info,i.mounted=!0,i.cdUpdate()})}},mounted:function t(){var e=this,i;return i=$_GET.id,_cd=new CD({el:"cd",callback:function t(){return e.ask(i)}}),this.bgm=document.getElementById("bgm")}})},ten=function t(e){return e<10?"0"+e:e};