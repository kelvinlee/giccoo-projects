"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var $_GET,ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_citys,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,createObjectURLfun,css3Prefix,getId,getOrientation,getTe,i,imageurl,init,l,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),l=0,len1=VENDORS.length;l<len1&&!((css3Prefix=i=VENDORS[l])+"Transition"in mTestElement.style);l++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,n,i;i=encodeURIComponent(window.location.href.split("#")[0]),(t=document.createElement("script")).src="//api.giccoo.com/api/config?url="+i,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,n)},IsPC=function e(){var t,n,i,o;for(i=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!0,o=0;o<t.length;){if(0<i.indexOf(t[o])){n=!1;break}o++}return n},$_GET=function(){var e,t,n,o,a,r;if("string"!=typeof(a=(r=window.document.location.href.toString()).split("?"))[1])return{};for(a=a[1].split("&"),e={},console.log(a),o=0,n=a.length;o<n;o++)e[(t=(i=a[o]).split("="))[0]]=t[1];return e}(),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},
// computed:
mounted:function e(t){return console.log(this.name),this.audio=this.$el.children[1],// console.log @audio
// @audioOther = @$el.children[2]
this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),// @audio.play()
// console.log @audio,@audioOther,@playing
Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},watch:{form:{handler:function e(t){return console.log("form:",t)},deep:!0}},methods:{getOptionsName:function e(t){var n,i,o,a;if(t.array){for(o=0,i=(a=t.options).length;o<i;o++)if((n=a[o]).val===t.value)return n.name;return t.options[0].name}return""===t.value?Object.keys(t.options)[0]:t.value},submit:function e(t){var n,i,o,a;for(i in n={},console.log("first Time.."),o=this.form)a=o[i],n[i]=a.value;// console.log "submit:",data
return this.$emit("submit",n)}},mounted:function e(t){var n,o,a,r,s;// console.log "el:",this,this.form
for(n in a=[],o=(r=this).form)"select"===(s=o[n]).type&&(console.log("form.".concat(n,".options")),this.$watch("form.".concat(n,".options"),function(e){return console.log("changed:",e)},{deep:!0})),null!=s.link&&"select"===s.type?a.push(this.$watch("form.".concat(n),function(e,t){var n,o,a;if(null==r.form[e.link])return!1;if(r.form[e.link].options=e.options[e.value],r.form[e.link].array)return console.log(e.link,r.form[e.link].value,e.options[e.value][0].val),r.form[e.link].value=e.options[e.value][0].val;for(a=[],i=n=0,o=Object.keys(e.options[e.value]).length;0<=o?n<o:o<n;i=0<=o?++n:--n){if(e.options[e.value][Object.keys(e.options[e.value])[i]]){r.form[e.link].value=Object.keys(e.options[e.value])[i];break}a.push(void 0)}return a},{deep:!0})):a.push(void 0);return a}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function e(t){return resource[t].texture},getId=function e(t,n){return loader.resources[n].textures[t]},// for fix ios 8 less
null==Number.isInteger&&(Number.isInteger=function(e){return 0<=e}),random=1+parseInt(5*Math.random()),UGC=function(){
// imageList = []
var e=
/* */
function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),// .use(@.loaditem.bind(@))
PIXI.loader.add(imageList).load(buildUGC.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"loaditem",value:function e(){// console.log @.loadNumber,loading.progressOn,@.loadNumber is imageList.length
if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),this.loadNumber===imageList.length)return buildUGC.bind(this).call()}}]),t}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "../../libs/coffee/loadWechatConfig"
// @codekit-prepend "../../libs/coffee/IsPC"
// @codekit-prepend "../../libs/coffee/get"
// @codekit-prepend "../../libs/vue/vue-player"
// @codekit-prepend "../../libs/vue/vue-register"
// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./UGC"
String.prototype.gblen=function(){var e,t,n;for(i=t=e=0,n=this.length;0<=n?t<n:n<t;i=0<=n?++t:--t)127<this.charCodeAt(i)||94===this.charCodeAt(i)?e+=2:e++;return e},TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/jeep",// apiLink = "//localhost:3000/"
apiLink="//g.giccoo.com/",// apiLink = "http://192.168.3.53:3000/"
// apiUrl = "http://localhost:8881/Levi"
main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,_citys=[{name:"2018.10.01 武汉",val:"武汉"},{name:"2018.10.11 西安",val:"西安"},{name:"2018.10.20 杭州",val:"杭州"},{name:"2018.10.20 沈阳",val:"沈阳"},{name:"2018.10.27 北京",val:"北京"},{name:"2018.10.27 成都",val:"成都"},{name:"2018.11.03 广州",val:"广州"}],neteaseShareImage=function e(){var t,n,i;return i="元气初心音乐馆",t="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",n="https://m.giccoo.com/Landrover24/",// console.log picUrl,"orpheus://sharepic?picUrl="+encodeURIComponent(picUrl)+"&shareUrl="+encodeURIComponent(redirectUrl)+"&wbDesc="+encodeURIComponent(title1)+"&qqDesc="+encodeURIComponent(title1)
window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(n)+"&wbDesc="+encodeURIComponent(i)+"&qqDesc="+encodeURIComponent(i),console.log("share href:",t)},createObjectURLfun=function e(t){return null!=window.webkitURL||1<=window.navigator.userAgent.indexOf("Chrome")||1<=window.navigator.userAgent.indexOf("Safari")?window.webkitURL.createObjectURL(t):window.URL.createObjectURL(t)},getOrientation=function e(t,l){var n;(n=new FileReader).onload=function(e){var t,n,o,a,r,s;if(65496!==(s=new DataView(e.target.result)).getUint16(0,!1))return l(-2);for(t=s.byteLength,a=2;a<t;){if(s.getUint16(a+2,!1)<=8)return l(-1);if(o=s.getUint16(a,!1),a+=2,65505===o){if(1165519206!==s.getUint32(a+=2,!1))return l(-1);for(n=18761===s.getUint16(a+=6,!1),a+=s.getUint32(a+4,n),r=s.getUint16(a,n),a+=2,i=0;i<r;){if(274===s.getUint16(a+12*i,n))return l(s.getUint16(a+12*i+8,n));i++}}else{if(65280!=(65280&o))break;a+=s.getUint16(a,!1)}}return l(-1)},n.readAsArrayBuffer(t)},window.onload=function(){var e;// _public = new Vue
// 	el: "#public"
// 	data:
// 		note: true
// 		playing: false
// loading = new Vue
// 	el: "#loading"
// 	data:
// 		progress: 0
// 		mounted: false
// 		progressOn: 0
// 	methods:
// 		next: ->
// 			document.getElementById('load').className += " fadeOut animated"
// 			# _public.note = false
// 			main.mounted = true
// 			setTimeout ->
// 				document.getElementById('load').style.display = "none"
// 			,520
// 	mounted: ->
// 		@.mounted = true
// 		TrueH = document.documentElement.clientHeight
// 		TrueW = document.documentElement.clientWidth
// 		timein = setInterval =>
// 			@.progress += 2
// 			@.progress = @.progressOn if @.progress >= @.progressOn
// 			if @.progress >= 100
// 				@.progress = 100
// 				clearInterval timein
// 				_cache = setTimeout =>
// 					@.next()
// 				,1000
// 		,1000/20
return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,// console.log "body:",document.body.clientWidth,document.body.clientHeight
// if IsPC()
// 	document.getElementById("qrcode").className += " show"
// 	return false
e=0,// 停止上下滚动 / 注意有竖向滚动条会被禁止 (理论可以加到只不能上下滚动上.)
// document.body.addEventListener "touchstart", (evt)->
// 	lastY = evt.touches[0].clientY
// document.body.addEventListener "touchmove", (evt)->
// 	y = evt.touches[0].clientY
// 	st = this.scrollTop
// 	if y isnt lastY
// 		evt.preventDefault()
// 	lastY = y
// ,{passive: false}
-1<window.navigator.userAgent.indexOf("NeteaseMusic")?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return e={title:"元气初心音乐馆",desc:"测测隐藏在音乐世界中的‘你’",link:"http://m.giccoo.com/jeep/",imgUrl:"http://m.giccoo.com/jeep/img/ico.jpg",success:function e(){},
// alert "success"
cancel:function e(){}},// alert "cancel"
wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init()},init=function e(){var t,n;return 640<=TrueW&&(
// console.log new Date().getTime() - startTime
// document.body.style.height = TrueH+"px"
// document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
TrueW=640),1138<=TrueH&&(TrueH=1138),n=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),console.log(TrueW,TrueH),main=new Vue({el:"#main",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,pageInfoShow:!1,pageIndex:2,step:1,singerIndex:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,form:{username:{id:"username",type:"input",label:"姓名",placeholder:"请填写姓名",value:""},mobile:{id:"mobile",type:"input",label:"电话",placeholder:"请填写电话",value:""},address:{id:"address",type:"input",label:"收货地址",placeholder:"请填写收货地址",value:""},type:{id:"type",type:"select",label:"举办地",array:!0,placeholder:"请填写举办地",value:_citys[0].val,options:_citys}},mask:1,text:"",nickname:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1},watch:{videoIndex:function e(t,n){return this.videoIndexOld=n,// stopAllVideo()
document.getElementById("video-".concat(t)).load(),document.getElementById("video-".concat(t)).play()}},methods:{closeReg:function e(){return this.registerShow=!1},playVideo:function e(){return this.videoIndex=1,document.getElementById("video-1").load(),document.getElementById("video-1").play(),console.log(document.getElementById("video-1"))},endPage:function e(){// showResult()
return main.registerShow=!0,stopAllAudio()},gameStart:function e(){return this.pageIndex=2,_public.note=!1,setup(),playAudio("answer-1")},goUGC:function e(){return this.lotteryShow=!0},getLotteryList:function e(){var r=this;return axios.post("".concat(apiLink,"active/soupdaren/list/"),{lottery:!0}).then(function(e){var t,n,i,o,a;if(200===e.data.code){for(i=e.data.list,o=0,n=(a=r.form.type.options).length;o<n;o++)i[(t=a[o]).val]&&(t.disabled=!0);return main.$children[0].form.type.options[0].name=main.$children[0].form.type.options[0].name+" "}})},
// console.log _citys
// @.form.type.options = _citys
getLottery:function e(){var t=this;return axios.post("".concat(apiLink,"active/soupdaren/lottery/"),{lottery:!0}).then(function(e){return 200===e.data.code&&null!=e.data.info?(t.lotteryInfo.id=e.data.info.id,t.lotteryInfo.random=e.data.info.random,t.registerShow=!0):t.lotteryShow=!0}).catch(function(e){return t.lotteryShow=!0})},submit:function e(t){var n=this;return console.log("data:",t),""===t.username||8<t.username.length||t.username.length<2?alert("请输入2-8个字的姓名"):""===t.mobile?alert("请输入联系电话"):""===t.address?alert("请输入收货地址"):null==this.lotteryInfo.id?alert("很抱歉没有中奖,可再次参与提高中奖几率"):(t.id=this.lotteryInfo.id,null==this.lotteryInfo.random?alert("很抱歉没有中奖,可再次参与提高中奖几率"):(t.random=this.lotteryInfo.random,axios.post("".concat(apiLink,"active/soupdaren/update/"),t).then(function(e){return 200===e.data.code?(alert("填写成功"),n.registerShow=!1,n.regSubmited=!0):alert(e.data.reason)}).catch(function(e){return alert("服务器连接失败,请重试")})))},openForm:function e(){
// return false if @.noreg
return this.regSubmited?this.share():this.registerShow=!0},giveupAward:function e(){return this.registerShow=!1,this.giveUp=!0,this.share()},sharePost:function e(t){// @.ugc = ugc.app.view.toDataURL()
return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},restart:function e(){return window.location.reload()},share:function e(){var t,n,i;return console.log("run share"),ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),i=this.ugc,this.wy?(t={image:i,folder:n="soupdaren"},this.folder=n,null==i?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){
// alert e
return main.faild(e)})):(this.ugcShow=!0,shareDone())},success:function e(t){return this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,neteaseShareImage(),shareDone()},
// 抽奖
// unless @.giveUp
// 	setTimeout =>
// 		@.getLottery()
// 	,5000
faild:function e(t){return this.pushed=!1,this.loading=!1},openMusic:function e(){
// goList()
return CloudMusic.isInApp()?CloudMusic.playlist(2419204335):window.location.href="https://music.163.com/#/playlist?id=2419204335"},nextPage:function e(){return console.log("next page run"),this.pageIndex=2},openInApp:function e(t,n,i){var o=0<arguments.length&&void 0!==t?t:0,a=1<arguments.length&&void 0!==n?n:0,r=2<arguments.length&&void 0!==i?i:0;return 0===o?CloudMusic.open("https://m.giccoo.com/Landrover24/"):CloudMusic.open("https://m.giccoo.com/Landrover24/?type=".concat(o,"&video=").concat(a,"&music=").concat(r))}},
// watch:
mounted:function e(){var t,n;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),// game = new Game({el: "game",h: h})
this.wy=CloudMusic.isInApp(),n=CloudMusic.getClientVersion().split("."),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH}),this.getLotteryList()}})};// listenAudio()
// if parseInt($_GET["type"]) is 2
// 	@.regSubmited = true
// stopAllVideo = ->
// 	for i in [1..6]
// 		document.getElementById("video-#{i}").pause()
// musicList = ['music-1','music-2','music-3','music-4','music-5','music-6']
// playAudio = (id)->
// 	console.log("not err 6")
// 	stopAllAudio()
// 	console.log("not err 7")
// 	audio = document.getElementById(id)
// 	console.log("not err 8")
// 	audio.play()
// 	console.log("play music")
// 	# audio.load()
// 	# setTimeout =>
// 	# 	audio.play()
// 	# ,250
// 	# setTimeout =>
// 	# 	discPlay()
// 	# ,300
// listenAudio = ->
// 	for item in musicList
// 		audio = document.getElementById item
// 		audio.addEventListener "play", ->
// 			console.log "play"
// 			discPlay()
// 		,false
// 		audio.addEventListener "pause", ->
// 			console.log "pause"
// 			discStop()
// 		,false
// 		audio.addEventListener "ended", ->
// 			console.log "ended"
// 			discStop()
// 		,false
// stopAllAudio = (name)->
// 	console.log("not err 9")
// 	for item in musicList
// 		audio = document.getElementById item
// 		console.log("not err 10")
// 		audio.pause()
// 		console.log("not err 11")
// 		PIXI.sound.pause(item) if item isnt name and isAndroid
// 		console.log("not err 12")
//# sourceMappingURL=main.js.map