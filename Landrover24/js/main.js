"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),$_GET,ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,autoDetectRenderer,createObjectURLfun,css3Prefix,getId,getOrientation,getTe,i,imageurl,init,l,len1,listenAudio,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,musicList,neteaseShareImage,playAudio,random,resource,resources,sended,stopAllAudio,stopAllVideo,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),l=0,len1=VENDORS.length;l<len1&&(i=VENDORS[l],!((css3Prefix=i)+"Transition"in mTestElement.style));l++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,o;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,o=0;o<t.length;){if(n.indexOf(t[o])>0){i=!1;break}o++}return i},$_GET=function(){var e,t,n,o,r,a;if(a=window.document.location.href.toString(),r=a.split("?"),"string"==typeof r[1]){for(r=r[1].split("&"),e={},console.log(r),o=0,n=r.length;o<n;o++)i=r[o],t=i.split("="),e[t[0]]=t[1];return e}return{}}(),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function e(t){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},methods:{getOptionsName:function e(t){var i,n,o,r;if(t.array){for(r=t.options,o=0,n=r.length;o<n;o++)if(i=r[o],i.val===t.value)return i.name;return t.options[0].name}return""===t.value?Object.keys(t.options)[0]:t.value},submit:function e(t){var i,n,o,r;i={},console.log("first Time.."),o=this.form;for(n in o)r=o[n],i[n]=r.value;return this.$emit("submit",i)}},mounted:function e(t){var i,n,o,r,a;console.log("el:",this,this.form),r=this,n=this.form,o=[];for(i in n)a=n[i],null!=a.link&&"select"===a.type?o.push(this.$watch("form."+i,function(e,t){return null!=r.form[e.link]&&(r.form[e.link].options=e.options[e.value],r.form[e.link].array?(console.log(e.link,r.form[e.link].value,e.options[e.value][0].val),r.form[e.link].value=e.options[e.value][0].val):r.form[e.link].value=Object.keys(e.options[e.value])[0])},{deep:!0})):o.push(void 0);return o}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},null==Number.isInteger&&(Number.isInteger=function(e){return e>=0}),random=1+parseInt(5*Math.random()),UGC=function(){var e=function(){function e(t){_classCallCheck(this,e),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,t),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0,forceCanvas:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),console.log("imageList:",imageList.length),PIXI.loader.add(imageList).add("music-1",_CDN+"mp3/m0.mp3").add("music-2",_CDN+"mp3/m1.mp3").add("music-3",_CDN+"mp3/m2.mp3").add("music-4",_CDN+"mp3/m3.mp3").add("music-5",_CDN+"mp3/m4.mp3").add("music-6",_CDN+"mp3/m5.mp3").load(buildUGC.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(e,[{key:"loaditem",value:function e(){if(this.loadNumber++,loading.progressOn=parseInt(this.loadNumber/imageList.length*100),this.loadNumber===imageList.length)return buildUGC.bind(this).call()}}]),e}();return e.prototype.builded=!1,e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype._progress=0,e.prototype.lineMoving=!1,e.prototype.startTime=null,e.prototype.loadNumber=0,e}.call(void 0),String.prototype.gblen=function(){var e,t,n;for(e=0,i=t=0,n=this.length;0<=n?t<n:t>n;i=0<=n?++t:--t)this.charCodeAt(i)>127||94===this.charCodeAt(i)?e+=2:e++;return e},TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/df-308",apiLink="//g.giccoo.com/",main={},ugc=null,_public={},loading={},musicLineCache=null,musicIconCache=null,sys="",ugcCache=null,sended=[!1,!1],_cache=null,_startCache=null,_runTime=null,_second=0,_testTime=0,neteaseShareImage=function e(){var t,i,n;return n="有故事的声活单曲",t="https://image.giccoo.com/upload/"+main.folder+"/"+main.shareImageLink+"@!large",i="https://m.giccoo.com/Landrover24/",window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(n)+"&qqDesc="+encodeURIComponent(n),console.log("share href:",t)},createObjectURLfun=function e(t){return null!=window.webkitURL||window.navigator.userAgent.indexOf("Chrome")>=1||window.navigator.userAgent.indexOf("Safari")>=1?window.webkitURL.createObjectURL(t):window.URL.createObjectURL(t)},getOrientation=function e(t,n){var o;o=new FileReader,o.onload=function(e){var t,o,r,a,s,l;if(l=new DataView(e.target.result),65496!==l.getUint16(0,!1))return n(-2);for(t=l.byteLength,a=2;a<t;){if(l.getUint16(a+2,!1)<=8)return n(-1);if(r=l.getUint16(a,!1),a+=2,65505===r){if(1165519206!==l.getUint32(a+=2,!1))return n(-1);for(o=18761===l.getUint16(a+=6,!1),a+=l.getUint32(a+4,o),s=l.getUint16(a,o),a+=2,i=0;i<s;){if(274===l.getUint16(a+12*i,o))return n(l.getUint16(a+12*i+8,o));i++}}else{if(65280!=(65280&r))break;a+=l.getUint16(a,!1)}}return n(-1)},o.readAsArrayBuffer(t)},window.onload=function(){var e;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,IsPC()?(document.getElementById("qrcode").className+=" show",!1):(e=0,window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return e={title:"旅途中的发现之声",desc:"2018路虎发现无止境 发现中国24节气 秋分之旅",link:"http://m.giccoo.com/Landrover24/",imgUrl:"http://m.giccoo.com/Landrover24/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init())},init=function e(){var t,i;return TrueW>=640&&(TrueW=640),TrueH>=1138&&(TrueH=1138),i=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),console.log(TrueW,TrueH),main=new Vue({el:"#main",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:i,afterH:i?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,form:{username:{id:"username",type:"input",label:"姓名",placeholder:"请填写姓名",value:""},mobile:{id:"mobile",type:"input",label:"电话",placeholder:"请填写电话",value:""},address:{id:" address",type:"input",label:"城市",placeholder:"请填写城市",value:""}},mask:1,text:"",nickname:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{info:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1},watch:{videoIndex:function e(t,i){return this.videoIndexOld=i,document.getElementById("video-"+t).load(),document.getElementById("video-"+t).play()}},methods:{closeReg:function e(){return this.registerShow=!1},playVideo:function e(){return this.videoIndex=1,document.getElementById("video-1").load(),document.getElementById("video-1").play(),console.log(document.getElementById("video-1"))},endPage:function e(){return main.registerShow=!0,stopAllAudio()},gameStart:function e(){return this.pageIndex=2,_public.note=!1,setup(),playAudio("answer-1")},goUGC:function e(){return this.lotteryShow=!0},getLottery:function e(){var t=this;return this.registerShow=!1,axios.post(apiLink+"active/landrover24/lottery/",{lottery:!0}).then(function(e){return 200===e.data.code&&null!=e.data.info&&(t.lotteryInfo.info=e.data.info),t.goUGC()}).catch(function(e){return t.goUGC()})},submit:function e(t){var i=this;return console.log("data:",t),""===t.username||t.username.length>8||t.username.length<2?alert("请输入2-8个字的姓名"):""===t.mobile?alert("请输入联系电话"):""===t.address?alert("请输入所在城市"):axios.post(apiLink+"active/landrover24/insert/",t).then(function(e){return 200!==e.data.code?alert(e.data.reason):(alert("填写成功"),i.registerShow=!1,i.regSubmited=!0,i.gameEnd?i.share():void 0)}).catch(function(e){return alert("服务器连接失败,请重试")})},openForm:function e(){return this.regSubmited?this.share():this.registerShow=!0},giveupAward:function e(){return this.registerShow=!1,this.giveUp=!0,this.share()},sharePost:function e(t){return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=t},share:function e(){var t,i,n;return console.log("run share"),n=this.ugc,i="Landrover24",t={image:n,folder:i},this.folder=i,null==n?this.faild():!this.pushed&&axios.post(imageurl,t).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){return main.faild(e)})},success:function e(t){var i=this;if(this.shareImageLink=t.info,this.pushed=!1,this.loading=!1,neteaseShareImage(),!this.giveUp)return setTimeout(function(){return i.getLottery()},5e3)},faild:function e(t){return this.pushed=!1,this.loading=!1},openMusic:function e(){return CloudMusic.isInApp()?CloudMusic.playlist(2369232527):window.location.href="https://music.163.com/#/playlist?id=2369232527"},nextPage:function e(){return console.log("next page run"),this.pageIndex=2},openInApp:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return 0===t?CloudMusic.open("https://m.giccoo.com/Landrover24/"):CloudMusic.open("https://m.giccoo.com/Landrover24/?type="+t+"&video="+i+"&music="+n)}},mounted:function e(){var t,i;if(TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),t=2*TrueH*(2-2*TrueW/750+.01),this.wy=CloudMusic.isInApp(),i=CloudMusic.getClientVersion().split("."),ugc=new UGC({el:"ugc",w:640,h:640/TrueW*TrueH}),listenAudio(),2===parseInt($_GET.type))return this.regSubmited=!0}})},stopAllVideo=function e(){var t,n;for(n=[],i=t=1;t<=6;i=++t)n.push(document.getElementById("video-"+i).pause());return n},musicList=["music-1","music-2","music-3","music-4","music-5","music-6"],playAudio=function e(t){var i;return stopAllAudio(),i=document.getElementById(t),i.play(),console.log("play music")},listenAudio=function e(){var t,i,n,o,r;for(r=[],o=0,n=musicList.length;o<n;o++)i=musicList[o],t=document.getElementById(i),t.addEventListener("play",function(){return console.log("play"),discPlay()},!1),t.addEventListener("pause",function(){return console.log("pause"),discStop()},!1),r.push(t.addEventListener("ended",function(){return console.log("ended"),discStop()},!1));return r},stopAllAudio=function e(t){var i,n,o,r,a;for(a=[],r=0,o=musicList.length;r<o;r++)n=musicList[r],i=document.getElementById(n),i.pause(),n!==t?a.push(PIXI.sound.pause(n)):a.push(void 0);return a};