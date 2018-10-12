"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,init,j,len,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len=VENDORS.length;j<len&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),console.log("load:",this.loadNumber,loading.progressOn,this.loadNumber===imageList.length),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}// @.init()
},{key:"init",value:function e(){var t,i,n,a,r,o,s,u,l,c,d,p,h,g,m,f,y,I,v,w,x,T,b,S,C,P,N;return T=["","狼","猫","考拉","孔雀","鹿","狗","老虎"],u=[16777215,5012333,9586256,4749205,5982098,9529414,4806521,8551005],N=new Container,a=new Graphics,(// bgColor.beginFill(colorList[main.ugcType])
// bgColor.drawRect(0,0,640,@.opts.h)
n=Spr(_CDN+"img/bg".concat(main.ugcType,".png"))).scale.y=1.07,n.pivot.y=650,n.y=this.opts.h/2+77,C=Spr(_CDN+"img/ugc-t-".concat(main.ugcType,".png")),(b=Spr(_CDN+"img/ugc-p-".concat(main.ugcType,".png"))).pivot.y=b.height,b.pivot.x=320,(f=Spr(_CDN+"img/ugc-light.png")).pivot.y=650,f.y=this.opts.h/2+77,f.scale.y=1.07,P=Spr(_CDN+"img/ugc-title.png"),h=Spr(_CDN+"img/icon-ugc-1.png"),g=Spr(_CDN+"img/icon-ugc-2.png"),S=Spr(_CDN+"img/qrcode.png"),P.y=80,b.y=this.opts.h/2+97,b.x=320,C.y=b.y+60,h.y=C.y+C.height+10,h.x=60,g.y=C.y+2*C.height+20,g.x=60,I=new Container,v=new Text("《".concat(main.userInfo.songName,"》"),{fontFamily:"Arial",fontSize:26,fontWeight:"bold",fill:16777215,letterSpacing:4,lineHeight:34}),w=new Text("是你2018年最偏爱的一首歌",{fontFamily:"Arial",fontSize:22,fill:16777215,letterSpacing:4,lineHeight:34}),x=new Text("一共聆听了".concat(main.userInfo.playCnt,"次，在你心中留下了不一样的印记。"),{fontFamily:"Arial",fontSize:22,fill:16777215,letterSpacing:4,lineHeight:34}),w.y=4,w.x=v.width+5,x.y=34,I.addChild(v,w,x),I.x=60+h.width+20,I.y=h.y+10,I.scale.x=.8,l=new Container,c=new Text("".concat(main.dateText(main.userInfo.mostActiveDay.split(" ")[0])),{fontFamily:"Arial",fontSize:26,fontWeight:"bold",fill:16777215,letterSpacing:4,lineHeight:34}),d=new Text("对你来说是特别的一天。",{fontFamily:"Arial",fontSize:22,fill:16777215,letterSpacing:4,lineHeight:34}),p=new Text("这一天你或许思绪万千吧。",{fontFamily:"Arial",fontSize:22,fill:16777215,letterSpacing:4,lineHeight:34}),d.y=4,d.x=c.width+5,p.y=34,l.addChild(c,d,p),l.x=60+g.width+20,l.y=g.y,l.scale.x=.8,(t=new Text(T[main.ugcType],{fontFamily:"Arial",fontSize:56,fill:16777215,letterSpacing:6,lineHeight:34})).y=P.y+P.height+20,t.x=320-t.width/2,t.scale.x=.8,S.y=this.opts.h-S.height-20,S.visible=!1,t.y+t.height>b.y-b.height-20&&b.scale.set(.82),i=new Container,m=Spr(_CDN+"img/ugc-last-text.png"),(s=Spr(_CDN+"img/btn-share.png")).pivot.x=s.width/2,(o=Spr(_CDN+"img/btn-reg.png")).pivot.x=s.width/2,(r=Spr(_CDN+"img/btn-more.png")).pivot.x=s.width/2,s.x=580/3-60,o.x=580/3*2-60,r.x=520,m.y=s.height+10,i.addChild(s,o,r,m),i.y=l.y+l.height+20,console.log(this.opts.h,i.y),y=l.y+l.height,S.y<y&&(N.y=-20),S.y=l.y+l.height+20,// 	console.log "smaller"
// 	text.scale.set(0.8)
// 	text.x = 320 - text.width/2
// 	icon1.scale.set(0.8)
// 	icon1.x += 10
// 	icon2.scale.set(0.8)
// 	icon2.x += 10
// 	moveUp = 90
// 	icon2.y -= 30 
// 	icon1.y -= 30 
// 	musicName.y -= 30 
// 	dateName.y -= 30 
// bg.y -= moveUp
// text.y -= moveUp
// light.y -= moveUp
// people.y -= moveUp
// title.y -= moveUp
// anName.y -= moveUp
N.addChild(a,n,C,b,f,P,h,g,I,l,t,S,i),this.stage.addChildAt(N,0),s.interactive=!0,s.tap=function(){if(i.visible)return console.log("tap"),S.visible=!0,i.visible=!1,main.share()},o.interactive=!0,o.tap=function(){if(i.visible)return main.reg()},r.interactive=!0,r.tap=function(){if(i.visible)return main.more()},this.dom.qrcode=S,this.dom.banner=i}// TweenMax.from(title,.5,{alpha:0,y:"-=50",delay: .5})
// TweenMax.from(anName,.5,{alpha:0,y:"-=50",delay: .7})
// TweenMax.from(text,.5,{alpha:0,y:"+=50",delay: .5})
// TweenMax.from(icon1,.6,{alpha:0,y:"+=50",delay: .7})
// TweenMax.from(musicName,.6,{alpha:0,y:"+=50",delay: .7})
// TweenMax.from(icon2,.7,{alpha:0,y:"+=50",delay: .9})
// TweenMax.from(dateName,.7,{alpha:0,y:"+=50",delay: .9})
// TweenMax.from(banner,.7,{alpha:0,y:"+=50",delay: 1.1})
},{key:"back",value:function e(){return this.dom.qrcode.visible=!1,this.dom.banner.visible=!0}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(0<n.indexOf(t[a])){i=!1;break}a++}return i},// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/mazda",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="一首歌HOLD住人生大场面",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://m.giccoo.com/mazda/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(n)+"&qqDesc="+encodeURIComponent(n),console.log("share href:",t)},window.onload=function(){var e;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",CloudMusic.setShareData({name:"mazda",title:"一首歌HOLD住人生大场面",subTitle:"测测你的音乐情商属性",text:"一首歌HOLD住人生大场面",picUrl:"http://m.giccoo.com/mazda/img/ico.jpg",link:"http://m.giccoo.com/mazda/"})):(loadWechatConfig(),wx.ready(function(){var e;// console.log "ready:",_public?, _public.$children[0]
// _public.$children[0].change()
return e={title:"一首歌HOLD住人生大场面",desc:"测测你的音乐情商属性",link:"http://m.giccoo.com/mazda/",imgUrl:"http://m.giccoo.com/mazda/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},// alert "cancel"
wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),_public=new Vue({el:"#public",data:{note:!0,playing:!1},mounted:function e(){return document.addEventListener("WeixinJSBridgeReady",function(){return _public.$children[0].change()})}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:0},methods:{next:function e(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,main.mounted=!0,setTimeout(function(){return document.getElementById("load").style.display="none"},520)}},mounted:function e(){var t=this,i;// for test
return this.mounted=!0,TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,this.next(),i=setInterval(function(){if(t.progress+=3,t.progress>=t.progressOn&&(t.progress=t.progressOn),100<=t.progress)return t.progress=100,clearInterval(i),_cache=setTimeout(function(){return t.next()},1e3)},50)}}),init()},init=function e(){var t,i;// console.log TrueW,TrueH
return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),i=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),main=new Vue({el:"#main",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:i,afterH:i?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,
// form:
// 	username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
// 	mobile: {id:"mobile", type: "number", label: "电话", placeholder: "请填写电话",value: ""}
// 	province: {id:"province", type: "select", label: "省份", link: "city", value: Object.keys(_citys)[0], options: _citys }
// 	city: {id:"city", type: "select", label: "城市", link: "dealer",value: Object.keys(_citys["请选择省份"])[0], options: _citys["请选择省份"] }
mask:1,text:"",nickname:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,userInfo:{userId:238547308,songId:29593763,songName:"キミはどう?",playCnt:111,styleTop:"126377",mostActiveDay:"2018-08-29 00:00:45.0",periodIndex:1,playDuration:144}},watch:{videoIndex:function e(t,i){return this.videoIndexOld=i,// stopAllVideo()
document.getElementById("video-".concat(t)).load(),document.getElementById("video-".concat(t)).play()}},methods:{dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},muiscType:function e(t){var i;return null!=(i={rapMusic:1,rnbMusic:1,lightMusic:2,childMusic:2,jazzMusic:3,postRockMusic:3,classicalMusic:3,gufengMusic:4,danceMusic:4,latinkMusic:4,metalMusic:7,punkMusic:7,yueyuMusic:6,acgMusic:6,folkMusic:5,electronicMusic:5})[t]?i[t]:parseInt(1+7*Math.random())},getUserInfo:function e(t){var i=this;return axios.get("//music.163.com/api/activity/mazda/userinfo").then(function(e){return console.log(e.data),200===e.data.code&&(i.userInfo=e.data.data),t(i.showBuild)}).catch(function(e){return console.log("err",e),t(i.showBuild)})},showBuild:function e(){return console.log("userInfo:",main.userInfo)},
// if info
// 	getStart(true,info)
// else
// 	getStart(false,{})
reg:function e(){return console.log("reg"),window.location.href="http://fans.faw-mazda.com/events/testdrive/index/id/4.html?utm_source=4300921&utm_content=qidongye&utm_medium=qidonghuamian3sjingtaikedianji4lunbo&utm_campaign=21814748"},more:function e(){return console.log("more"),window.location.href="http://fans.faw-mazda.com/quan/activity/index/id/27.html"},closeReg:function e(){return this.registerShow=!1},openReg:function e(t){return this.regH=100-t,this.registerShow=!0},gameStart:function e(){return this.pageIndex=2,_public.note=!1,setup(),playAudio("answer-1")},goUGC:function e(){return this.lotteryShow=!0},getLotteryList:function e(){var o=this;return axios.post("".concat(apiLink,"active/soupdaren/list/"),{lottery:!0}).then(function(e){var t,i,n,a,r;if(200===e.data.code){for(a=e.data.list,i=0,n=(r=o.form.type.options).length;i<n;i++)a[(t=r[i]).val]&&(t.disabled=!0);return main.$children[0].form.type.options[0].name=main.$children[0].form.type.options[0].name+" "}})},
// console.log _citys
// @.form.type.options = _citys
getLottery:function e(){var t=this;return axios.post("".concat(apiLink,"active/soupdaren/lottery/"),{lottery:!0}).then(function(e){return 200===e.data.code&&null!=e.data.info?(t.lotteryInfo.id=e.data.info.id,t.lotteryInfo.random=e.data.info.random,t.registerShow=!0):t.lotteryShow=!0}).catch(function(e){return t.lotteryShow=!0})},submit:function e(t){var i=this;return console.log("data:",t),""===t.username||8<t.username.length||t.username.length<2?alert("请输入2-8个字的姓名"):""===t.mobile?alert("请输入联系电话"):""===t.province||"请选择省份"===t.province?alert("请选择省份"):""===t.city||"请选择城市"===t.city?alert("请选择城市"):axios.post("".concat(apiLink,"active/autoSave/insert/dataBase/jeep/"),t).then(function(e){return 200===e.data.code?(i.registerShow=!1,i.regSubmited=!0,i.lotteryShow=!0):alert(e.data.reason)}).catch(function(e){return alert("服务器连接失败,请重试")})},openForm:function e(){
// return false if @.noreg
return this.regSubmited?this.share():this.registerShow=!0},giveupAward:function e(){return this.registerShow=!1,this.giveUp=!0,this.share()},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){return goShare()},share:function e(){var t,i,n;return this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),n=this.ugc,this.wy?(t={image:n,folder:i="jeep"},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):(this.ugcShow=!0,ugc.back())},success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,ugc.back(),neteaseShareImage()},
// shareDone()
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
faild:function e(t){return this.pushed=!1,this.loading=!1},openMusic:function e(t){
// goList()
return _public.$children[0].pause(),CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/mazda/")}},
// watch:
mounted:function e(){var i=this,t,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),this.getUserInfo(function(t){var e;// console.log imageList,@.muiscType @.userInfo.styleTop
return i.ugcType=i.muiscType(i.userInfo.styleTop),e=[_CDN+"img/ugc-p-".concat(i.ugcType,".png"),_CDN+"img/bg".concat(i.ugcType,".png"),_CDN+"img/ugc-t-".concat(i.ugcType,".png"),_CDN+"img/ugc-light.png",_CDN+"img/ugc-title.png",_CDN+"img/icon-ugc-1.png",_CDN+"img/icon-ugc-2.png",_CDN+"img/qrcode.png",_CDN+"img/btn-share.png",_CDN+"img/btn-reg.png",_CDN+"img/btn-more.png",_CDN+"img/ugc-last-text.png"],window.imageList=window.imageList.concat(e),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){return t()}})})}})};
//# sourceMappingURL=main.js.map