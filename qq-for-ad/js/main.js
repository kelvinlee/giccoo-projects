"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var $_GET,ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Spr,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_shareLoaded,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,css3Prefix,getId,getTe,i,imageurl,init,isAndroid,l,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,setShareWeb,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),l=0,len1=VENDORS.length;l<len1&&!((css3Prefix=i=VENDORS[l])+"Transition"in mTestElement.style);l++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},$_GET=function(){var e,t,n,o,r,a;if("string"!=typeof(r=(a=window.document.location.href.toString()).split("?"))[1])return{};for(r=r[1].split("&"),e={},console.log(r),o=0,n=r.length;o<n;o++)e[(t=(i=r[o]).split("="))[0]]=t[1];return e}(),isAndroid=-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Adr"),//android终端
Vue.directive("resetInput",{inserted:function e(t){isAndroid||t.addEventListener("blur",function(){var e;(e=document.getElementById("reset-input"))||((e=document.createElement("INPUT")).type="text",e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.id="reset-input",document.body.prepend(e)),e.focus(),e.blur()})}}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'number\'" v-model="item.value" type="number"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",number:"number",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},watch:{form:{handler:function e(t){return console.log("form:",t)},deep:!0}},methods:{getOptionsName:function e(t){var i,n,o,r;if(t.array){for(o=0,n=(r=t.options).length;o<n;o++)if((i=r[o]).val===t.value)return i.name;return t.options[0].name}return""===t.value?Object.keys(t.options)[0]:t.value},submit:function e(t){var i,n,o,r;for(n in i={},console.log("first Time.."),o=this.form)r=o[n],i[n]=r.value;// console.log "submit:",data
return this.$emit("submit",i)}},mounted:function e(t){var n,o,r,a,s;// console.log "el:",this,this.form
for(n in r=[],o=(a=this).form)"select"===(s=o[n]).type&&(console.log("form.".concat(n,".options")),this.$watch("form.".concat(n,".options"),function(e){return console.log("changed:",e)},{deep:!0})),null!=s.link&&"select"===s.type?r.push(this.$watch("form.".concat(n),function(e,t){var n,o,r;if(null==a.form[e.link])return!1;if(a.form[e.link].options=e.options[e.value],a.form[e.link].array)return console.log(e.link,a.form[e.link].value,e.options[e.value][0].val),a.form[e.link].value=e.options[e.value][0].val;for(r=[],i=n=0,o=Object.keys(e.options[e.value]).length;0<=o?n<o:o<n;i=0<=o?++n:--n){if(e.options[e.value][Object.keys(e.options[e.value])[i]]){a.form[e.link].value=Object.keys(e.options[e.value])[i];break}r.push(void 0)}return r},{deep:!0})):r.push(void 0);return r}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),String.prototype.gblen=function(){var e,t,n;for(i=t=e=0,n=this.length;0<=n?t<n:n<t;i=0<=n?++t:--t)127<this.charCodeAt(i)||94===this.charCodeAt(i)?e+=2:e++;return e},random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:640,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151,callback:function e(){}},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).use(this.loaditem.bind(this)).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),console.log("load:",this.loadNumber,loading.progressOn,this.loadNumber===imageList.length),this.loadNumber===imageList.length)return buildUGC.bind(this).call(),this.opts.callback()}// @.init()
// console.log "aa"
// @.stage.addChild Spr(_CDN+"img/texture.jpg")
},{key:"build",value:function e(){return console.log("builded"),buildUGC.bind(this).call(),this.opts.callback()}// @.init()
},{key:"init",value:function e(){var t,i,n,o,r,a,s,l,u,c,h,d,p,g,m,f;return(t=new Spr(_CDN+"img/bg2.jpg")).width=this.opts.w,t.height=this.opts.h,(l=new Spr(_CDN+"img/huati.png")).y=this.opts.h-l.height,(u=new Spr(_CDN+"img/logo.png")).y=this.opts.h-u.height-.015*this.opts.h,a=new Container,s=new Spr(_CDN+"img/filecover.png"),(f=new Spr(_CDN+"img/ugc-title.png")).y=40,r=new Spr(_CDN+"img/ugc-content-".concat(main.carIndex+1,".png")),p=new Spr(_CDN+"img/ugc-content-over-".concat(main.carIndex+1,".png")),(d=new Text("".concat(main.nickname," "),{fontFamily:"Arial",fontSize:32,fontWeight:"normal",fill:7160354,letterSpacing:2,lineHeight:40})).x=122+(296-d.width)/2,d.y=f.y+(f.height-d.height)/2+6,r.y=f.y+f.height,p.y=r.y,p.visible=!1,m=(m=main.message).replace(/<br\/>/g,"\n"),// message.width = 500
(h=new Text("".concat(m," "),{fontFamily:"Arial",breakWords:!0,wordWrapWidth:505,wordWrap:!0,fontSize:20,fill:7160354,fontStyle:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:28})).x=125,h.y=r.y+r.height-40,o=new Spr(_CDN+"img/share-title.png"),n=new Spr(_CDN+"img/btn-reload.png"),i=new Spr(_CDN+"img/btn-more.png"),console.log(h.height),o.y=h.y+140+20,n.y=o.y+o.height+10,n.x=120,i.y=o.y+o.height+10,i.x=n.x+n.width+20,o.interactive=!0,n.interactive=!0,i.interactive=!0,o.tap=this.share.bind(this),n.tap=function(){return window.location.reload()},i.tap=function(){return window.location.href="https://mactivity.lenovo.com.cn/activity/marketing/xyxs/wyy/index.html?pmf_source=P0000000982M0066"},(g=new Spr(_CDN+"img/qr.png")).y=o.y-o.height+63,g.visible=!1,c=new Spr(_CDN+"img/mark-".concat(main.yearName,".png")),"80"===main.yearName?c.y=this.opts.h-c.height:c.y=(this.opts.h-c.height)/2,a.addChild(s,f,p,r,d,h,o,n,i,g),// file.scale.set(0.8,0.8)
a.y=(this.opts.h-a.height)/2,a.y+a.height>l.y-.5*l.height?a.y-=.23*l.height:a.y-=.05*this.opts.h,console.log("Y:",a.y,a.y+a.height,l.y+.5*l.height),a.y<=10&&(a.y=10),this.stage.addChild(t,l,u,a,c),this.btnShare=o,this.btnReload=n,this.btnMore=i,this.contentimg=r,this.overimg=p,this.huati=l,this.qr=g,this.file=a,this.oldFileY=a.y}},{key:"share",value:function e(){return this.btnShare.visible=!1,this.btnReload.visible=!1,this.btnMore.visible=!1,this.huati.visible=!1,this.contentimg.visible=!1,this.qr.visible=!0,this.overimg.visible=!0,this.file.y=(this.opts.h-this.file.height)/2,main.share()}},{key:"shareDone",value:function e(){return this.btnShare.visible=!0,this.btnReload.visible=!0,this.btnMore.visible=!0,this.huati.visible=!0,this.contentimg.visible=!0,this.qr.visible=!1,this.overimg.visible=!1,this.file.y=this.oldFileY}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype.dom={},e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;// @audio.load()
return t=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},
// computed:
mounted:function e(t){
// console.log @name
return this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,Spr=function e(t){return new Sprite(getTe(t))},getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(0<n.indexOf(t[o])){i=!1;break}o++}return i},// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/coffee/get"
// @codekit-prepend "../../libs/vue/vue-resetinput"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "../../libs/coffee/String"
// @codekit-prepend "./UGC"
axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/kiehls",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var t,i,n;return n="点播圣诞星声",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",i="https://activity.music.163.com/kiehls/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
// window.location.href = "orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
console.log("share href:",t),CloudMusic.sharePic({picUrl:t,text:n,link:i})},window.onload=function(){var e;// _public = new Vue
// 	el: "#public"
// 	data:
// 		wy: if sys is "NeteaseMusic" then true else false
// 		wx: false
// 		note: true
// 		playing: false
// 	methods:
// 		startGame: ->
// 			@.note = false
// 	mounted: ->
// 		document.addEventListener "WeixinJSBridgeReady", ->
// 			_public.wx = true
// 			_public.note = false
// 			_public.$children[0].change()
// loading = new Vue
// 	el: "#loading"
// 	data:
// 		progress: 0
// 		mounted: false
// 		progressOn: 0
// 	methods:
// 		next: ->
// 			document.getElementById('load').className += " fadeOut animated"
// 			main.mounted = true
// 			# main.init()
// 			setTimeout ->
// 				document.getElementById('load').style.display = "none"
// 				_public.note = false if _public.wx
// 				# setTimeout ->
// 				# 	_public.note = false if _public.wy
// 				# ,3000
// 			,520
// 	mounted: ->
// 		@.mounted = true
// 		TrueH = document.documentElement.clientHeight
// 		TrueW = document.documentElement.clientWidth
// 		# @.next() # for test
// 		timein = setInterval =>
// 			@.progress += 3
// 			@.progress = @.progressOn if @.progress >= @.progressOn
// 			if @.progress >= 100
// 				@.progress = 100
// 				clearInterval timein
// 				_cache = setTimeout =>
// 					@.next()
// 				,1000
// 		,1000/20
return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,setShareWeb("科颜氏","欢迎参加游戏","http://m.giccoo.com/kiehls/"),init()},_shareLoaded=!(init=function e(){var t,n,o;// console.log TrueW,TrueH
return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),o=2*TrueH<1200,n=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,main=new Vue({el:"#main",data:(t={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:o,afterH:o?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,noteText:"",noteTime:null,noteShow:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:2,logo:!0,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,pageNote:!1,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,form:{username:{id:"username",type:"input",label:"姓名",placeholder:"请填写姓名",value:""},mobile:{id:"mobile",type:"number",label:"电话",placeholder:"请填写电话",value:""},address:{id:"address",type:"input",label:"联系地址",placeholder:"请联系地址",value:""}},mask:1,text:"",nickname:"",mobile:"",sex:0,musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,rankingShow:!1,registerShow:!1,shareNotePage:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,answer1:1,answer2:0,answer3:{c1:!1,c2:!1,c3:!1,c4:!1}},_defineProperty(t,"nickname",""),_defineProperty(t,"message",""),_defineProperty(t,"messageIndex",1),_defineProperty(t,"messageInput",!1),_defineProperty(t,"musicName",""),_defineProperty(t,"white",!1),_defineProperty(t,"gameEnd",!1),_defineProperty(t,"formShow",!1),_defineProperty(t,"formBoxShow",!1),_defineProperty(t,"carIndex",1),_defineProperty(t,"yearName","none"),_defineProperty(t,"list",[]),_defineProperty(t,"insertId",0),_defineProperty(t,"score",0),_defineProperty(t,"hit",1),t),watch:{nickname:function e(t,n){var o,r,a,s,l;if(this.nickname=this.nickname.replace(/[\r\n]/g,""),// console.log "n,o:",n,o
r=new Text("".concat(t," "),{fontFamily:"Arial",fontSize:32,fontWeight:"normal",fill:7160354,letterSpacing:2,lineHeight:40}),console.log("width:",r.width),296<r.width){for(
// @.nickname = o
s=this.nickname.split(""),l="",i=o=0,a=s.length-1;0<=a?o<a:a<o;i=0<=a?++o:--o)l+=s[i];return this.nickname=l,console.log(l),!1}},message:function e(t,n){var o,r,a,s;if(this.message=this.message.replace(/[\r\n]/g,""),100<this.message.length){for(
//gblen() > 64
s="",r=0,o=(a=this.message.split("")).length;r<o&&!(100<=(s+=i=a[r]).length);r++);return this.message=s,!1}}},methods:{openYear:function e(t){return this.yearName=t,this.pageIndex=3,this.logo=!1,setTimeout(function(){return document.getElementById("manhua").scrollTop=0},20)},prev:function e(){return this.$children[0].prev()},next:function e(){return this.$children[0].next()},number:function e(t){},
// @.carIndex = n
select:function e(){return console.log(Math.abs(this.$children[0].slideNumber)),this.carIndex=Math.abs(this.$children[0].slideNumber),this.step=3},send:function e(t){var i=this;return this.noteShow=!0,this.noteText=t,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return i.noteShow=!1},2e3)},over:function e(){var t=this;return this.questionShow=!1,ugc.init(),setTimeout(function(){return t.gameEnd=!0},2e3)},regame:function e(){
// window.location.reload()
// @.gameEnd = false
return this.rankingShow=!1,this.lotteryShow=!1,this.shareNotePage=!1,gameRestart()},gobuy:function e(){return window.location.href="http://www.baidu.com"},dateText:function e(t){var i;return console.log(t.replace(/-/g,"/")),(i=new Date(t.replace(/-/g,"/"))).getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},goshare:function e(){
// goShare()
return this.share()},shareWeb:function e(){var t=this;return"NeteaseMusic"===sys?CloudMusic.shareInApp():this.shareNotePage=!0,clearTimeout(_cache),_cache=setTimeout(function(){return t.getLottery(),t.shareNotePage=!1},5e3)},share:function e(){var t,i,n;// goFinal2()
return this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),// ugc.qrcode.visible = true
ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL("image/jpeg",.6),n=this.ugc,this.wy?(t={image:n,folder:i="kiehls"},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):this.ugcShow=!0},
// ugc.back()
// ugc.qrcode.visible = false
success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,// ugc.back()
neteaseShareImage(),ugc.shareDone()},
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
closeUGC:function e(){return this.ugcShow=!1,ugc.shareDone()},faild:function e(t){return this.pushed=!1,this.loading=!1},openSong:function e(t){
// id = [38576323,167740,139381,474567580,355992,28815250,109968,110083,163639,28785688,5271858,28838557,169794,27591641,5271855]
// CloudMusic.song(id[resultNum])
return window.location.href="https://music.163.com/#/song?id=".concat(t)},openMusic:function e(t){
// goList()
// _public.$children[0].pause()
return CloudMusic.isInApp()?CloudMusic.playlist(t):window.location.href="https://music.163.com/#/playlist?id=".concat(t)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/kiehls/")},getInfo:function e(){return console.log("get info"),axios.get("".concat(apiLink,"active/qq/adGet/id/").concat($_GET.id)).then(function(e){}).catch(function(e){return console.log("err:",e)})},getList:function e(){var t=this;return axios.get("".concat(apiLink,"active/qq/adList/")).then(function(e){return console.log("msg:",e.data.list),t.list=e.data.list}).catch(function(e){return console.log("err:",e)})}},
// watch:
mounted:function e(){var t,i,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),// @.getUserInfo (callback)=>
// console.log imageList,@.muiscType @.userInfo.styleTop
// @.ugcType = @.muiscType @.userInfo.styleTop
i=[],window.imageList=window.imageList.concat(i),// console.log "h:",h
// window.onresize = ->
// 	console.log "resize:",document.documentElement.clientHeight
// main.$root.$el.addEventListener "touchstart", (evt)->
// 	_public.note = false
null!=$_GET.id?(this.getInfo(),this.pageIndex=2):ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH,callback:function e(){return console.log("callback")}}),this.getList()}})}),setShareWeb=function e(t,i,n){var o,r;// alert "cancel"
return r={name:"kiehls",title:t,subTitle:i,text:"",picUrl:"http://m.giccoo.com/kiehls/img/ico.jpg",link:n},o={title:t,desc:i,link:n,imgUrl:"http://m.giccoo.com/kiehls/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",CloudMusic.setShareData(r)):_shareLoaded?(wx.onMenuShareTimeline(o),wx.onMenuShareAppMessage(o),wx.onMenuShareQQ(o),wx.onMenuShareWeibo(o)):(loadWechatConfig(),wx.ready(function(){return _shareLoaded=!0,wx.onMenuShareTimeline(o),wx.onMenuShareAppMessage(o),wx.onMenuShareQQ(o),wx.onMenuShareWeibo(o)}))};
//# sourceMappingURL=main.js.map