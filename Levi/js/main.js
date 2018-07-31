"use strict";function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,TrueH,TrueW,UGC,VENDORS,_CDN,_cache,_public,apiLink,apiUrl,autoDetectRenderer,createObjectURLfun,css3Prefix,getId,getOrientation,getTe,i,init,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,random,resource,resources,sended,sys,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&(i=VENDORS[j],!((css3Prefix=i)+"Transition"in mTestElement.style));j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i)},IsPC=function e(){var t,i,n,r;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,r=0;r<t.length;){if(n.indexOf(t[r])>0){i=!1;break}r++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function e(t){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},null==Number.isInteger&&(Number.isInteger=function(e){return e>=0}),random=1+parseInt(5*Math.random()),UGC=function(){var e=function(){function e(t){_classCallCheck(this,e),this.opts={el:"main",w:750,h:1314,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,t),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),PIXI.loader.add([_CDN+"img/ugc-bg-1.jpg",_CDN+"img/ugc-bg-2.jpg",_CDN+"img/ugc-bg-3.jpg",_CDN+"img/ugc-bg-4.jpg",_CDN+"img/ugc-bg-5.jpg",_CDN+"img/ugc-name-1.png",_CDN+"img/ugc-name-2.png",_CDN+"img/ugc-name-3.png",_CDN+"img/ugc-name-4.png",_CDN+"img/ugc-name-5.png",_CDN+"img/ugc-note-1.png",_CDN+"img/ugc-note-2.png",_CDN+"img/ugc-note-3.png",_CDN+"img/ugc-note-4.png",_CDN+"img/ugc-note-5.png",_CDN+"img/ugc-singer-1.png",_CDN+"img/ugc-singer-2.png",_CDN+"img/ugc-singer-3.png",_CDN+"img/ugc-singer-4.png",_CDN+"img/ugc-singer-5.png",_CDN+"img/ugc-text-2.png",_CDN+"img/ugc-border.png",_CDN+"img/ugc-logo.png",_CDN+"img/album-bg.png",_CDN+"img/album-cover-"+random+".png",_CDN+"img/album-poster.png",_CDN+"img/album-upload-text.png",_CDN+"img/album-upload-over-text.png",_CDN+"img/mask.png",_CDN+"img/qrcode.png",_CDN+"img/avatar.jpg"]).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(e,[{key:"build",value:function e(){var t,i,n,r,a,o,s,u;return this.trueH=750/TrueW*TrueH,this.content=a=new Container,r=new Sprite(getTe(_CDN+"img/ugc-border.png")),a.addChild(r),a.y=-(this.opts.h-this.trueH)-TrueH*(750/TrueW)*.4-20,this.album=t=new Container,this.albumBG=i=new Sprite(getTe(_CDN+"img/album-bg.png")),n=new Sprite(getTe(_CDN+"img/album-poster.png")),n.y=(i.height-n.height)/2,this.uploadText=s=new Sprite(getTe(_CDN+"img/album-upload-text.png")),s.y=n.y,this.uploadOverText=o=new Sprite(getTe(_CDN+"img/album-upload-over-text.png")),o.y=n.y,o.visible=!1,this.userName=u=new Text("",{fontFamily:"Arial",fontSize:38,fill:16777215,align:"left"}),t.addChild(i,n,s,o,u),t.scale.set(.8,.8),t.x=(this.opts.w-t.width)/2,this.stage.addChild(a,t)}},{key:"passImage",value:function e(t,i){var n=this,r;return null!=this.avatar&&this.album.removeChild(this.avatar),this.avatar=new Container,r=Sprite.fromImage(t),r.texture.baseTexture.on("loaded",function(){var e;return console.log("avatar:",r.width,r.height),r.anchor.set(.5,.5),r.scale.set(410/r.width,410/r.width),r.x=r.width/2,r.y=205,n.avatar.addChild(r),n.avatar.x=130,n.avatar.y=172,n.album.addChildAt(n.avatar,3),e=new Graphics,e.beginFill(16777215),e.drawRect(0,0,410,410),e.x=130,e.y=172,n.album.addChild(e),r.mask=e,6===i&&(r.rotation=.5*Math.PI),3===i&&(r.rotation=Math.PI),n.uploadOverText.visible=!0,n.uploadText.visible=!1})}},{key:"updateName",value:function e(t){return this.userName.text=t,this.userName.x=124,this.userName.y=602}},{key:"addCover",value:function e(){var t;return this.uploadOverText.visible=!1,this.uploadText.visible=!1,this.albumCover=t=new Sprite(getTe(_CDN+"img/album-cover-"+random+".png")),t.y=(this.albumBG.height-t.height)/2,t.alpha=0,this.album.addChild(t),TweenLite.to(t,1,{alpha:1})}},{key:"albumInfo",value:function e(t){var i,n,r,a;return null!=this.albumInfoCont&&this.album.removeChild(this.albumInfoCont),null!=this.bg&&this.content.removeChild(this.bg),this.index=t,this.albumInfoCont=new Container,a=new Sprite(getTe(_CDN+"img/ugc-singer-"+t+".png")),a.y=782-a.height-50,r=new Sprite(getTe(_CDN+"img/ugc-name-"+t+".png")),i=new Sprite(getTe(_CDN+"img/ugc-text-2.png")),i.y=782-i.height-64,r.y=i.y-r.height-10,this.albumInfoCont.addChild(a,r,i),this.album.addChild(this.albumInfoCont),this.bg=n=new Sprite(getTe(_CDN+"img/ugc-bg-"+t+".jpg")),this.content.addChildAt(this.bg,0)}},{key:"lyricUpdate",value:function e(t){var n,r,a,o,s,u,l,c,d,g;if(t.gblen()>64)return!1;for(null!=this.lyric&&this.album.removeChild(this.lyric),this.lyric=new Container,g=t.split(""),s=[""],u=0,o=32,console.log(g),n=r=0,l=g.length;0<=l?r<l:r>l;n=0<=l?++r:--r)console.log(s[u].gblen(),n),s[u].gblen()>=16&&(u++,s[u]="",console.log(u,n)),s[u]+=g[n]+"";for(console.log(s),i=a=0,c=s.length;0<=c?a<c:a>c;i=0<=c?++a:--a)i>=4||(d=i%4*.2,t=new Text(s[i],{fontFamily:"Arial",fontSize:24,fill:16777215,align:"left"}),t.alpha=1-d,t.y=4*o-(4-(i%4+1))*o+(4-s.length)*o,t.x=(this.opts.w-t.width)/2,this.lyric.addChild(t));return this.album.addChild(this.lyric)}},{key:"review",value:function e(){var t,i;return this.content.y+=200,this.logo=t=new Sprite(getTe(_CDN+"img/ugc-logo.png")),t.y=this.content.height-t.height-40,this.note=i=new Sprite(getTe(_CDN+"img/ugc-note-"+this.index+".png")),i.y=t.y-i.height-20,console.log(i.y,t.y),this.content.addChild(t,i)}},{key:"buildQR",value:function e(t,i){var n=this,r;return r=new QRCode("qrcode",_defineProperty({text:t,width:130,height:130,colorDark:"#000000"},"colorDark","#000000")),console.log(r._el.lastChild),r._el.lastChild.onload=function(){var e,t,a,o,s;return e=5,n.qrcode=t=new Container,s=new Sprite(getTe(_CDN+"img/qrcode.png")),s.x=20,a=new Graphics,a.beginFill(16777215),a.drawRect(0,0,130+2*e,130+2*e),o=Sprite.fromImage(r._el.lastChild.src),o.texture.baseTexture.on("loaded",function(){return o.x=e,o.y=e,t.x=40,t.y=n.content.height-130+2*e-40,i()}),t.addChild(a,o,s),t.visible=!1,n.content.addChild(t)}}},{key:"overUGC",value:function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n;return n=null!=i?"http://m.giccoo.com/Levi/music.html?id="+i:"http://levi.arkrdigital.com/music/",this.buildQR(n,function(){return t.app.renderer.render(t.app.stage),main.ugcold=t.app.view.toDataURL(),t.album.scale.set(1,1),t.album.x=0,t.album.y=110,t.content.y=0,t.qrcode.visible=!0,t.logo.y-=t.qrcode.height+40,t.note.y-=t.qrcode.height+40,t.app.renderer.render(t.app.stage),main.wy?main.share(t.app.view.toDataURL()):main.setugc(t.app.view.toDataURL())})}}]),e}();return e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype._progress=0,e.prototype.startTime=null,e}.call(void 0),String.prototype.gblen=function(){var e,t,n;for(t=0,i=e=0,n=this.length;0<=n?e<n:e>n;i=0<=n?++e:--e)this.charCodeAt(i)>127||94===this.charCodeAt(i)?t+=2:t++;return t},TrueW=640,TrueH=1138,apiUrl="//api.giccoo.com/Levi",apiLink="//g.giccoo.com/",main={},ugc=null,_public={},loading={},musicLineCache=null,musicIconCache=null,sys="",ugcCache=null,sended=[!1,!1],_cache=null,_CDN="./",neteaseShareImage=function e(){var t,i,n;return n="快来玩游戏，赢Bobbi Brown正装粉底液！",t="https://image.giccoo.com/upload/"+main.folder+"/"+main.shareImageLink+"@!large",i="https://m.giccoo.com/Levi/",window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(t)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(n)+"&qqDesc="+encodeURIComponent(n),console.log("share href")},createObjectURLfun=function e(t){return null!=window.webkitURL||window.navigator.userAgent.indexOf("Chrome")>=1||window.navigator.userAgent.indexOf("Safari")>=1?window.webkitURL.createObjectURL(t):window.URL.createObjectURL(t)},getOrientation=function e(t,n){var r;r=new FileReader,r.onload=function(e){var t,r,a,o,s,u;if(u=new DataView(e.target.result),65496!==u.getUint16(0,!1))return n(-2);for(t=u.byteLength,o=2;o<t;){if(u.getUint16(o+2,!1)<=8)return n(-1);if(a=u.getUint16(o,!1),o+=2,65505===a){if(1165519206!==u.getUint32(o+=2,!1))return n(-1);for(r=18761===u.getUint16(o+=6,!1),o+=u.getUint32(o+4,r),s=u.getUint16(o,r),o+=2,i=0;i<s;){if(274===u.getUint16(o+12*i,r))return n(u.getUint16(o+12*i+8,r));i++}}else{if(65280!=(65280&a))break;o+=u.getUint16(o,!1)}}return n(-1)},r.readAsArrayBuffer(t)},window.onload=function(){return IsPC()?(document.getElementById("qrcode").className+=" show",!1):(window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var e;return e={title:"快来玩游戏，赢Bobbi Brown正装粉底液！",desc:"测测你的颜值能量，哪首歌代表你的颜值？~",link:"http://m.giccoo.com/Levi/",imgUrl:"http://m.giccoo.com/Levi/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),_public=new Vue({el:"#public",data:{note:!0}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:100},methods:{openMusic:function e(){var t;return t=document.getElementById("bgm"),t.play(),clearTimeout(_cache),this.next()},next:function e(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,setTimeout(function(){return document.getElementById("load").style.display="none"},520)}},mounted:function e(){var t=this,i;return this.mounted=!0,i=setInterval(function(){if(t.progress+=2,t.progress>=t.progressOn&&(t.progress=t.progressOn),t.progress>=100)return t.progress=100,clearInterval(i),main.mounted=!0,_cache=setTimeout(function(){return t.next()},2e3)},50),setTimeout(function(){return init()},500)}}))},init=function e(){var t,i;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,TrueW>=640&&(TrueW=640),TrueH>=1138&&(TrueH=1138),i=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),console.log(TrueW,TrueH),main=new Vue({el:"#main",data:{w:TrueW,h:TrueH,biger:TrueW/TrueH<.52,smaller:i,afterH:i?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!1,loading:!1,pagebuildShow:!1,pageInfoShow:!1,pageIndex:3,step:1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcold:null,pushed:!1,shareImageLink:null,singerIndex:3,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,uploaded:!1,imageUpdate:!1,allowPopShow:!1,form:{link:null},mask:1,text:"",nickname:"",musicLink:"",logId:""},methods:{startbuild:function e(){return this.pageIndex=3},recordStart:function e(){var t=this;return CloudMusic.orpheus("orpheus://recordvoice/record/start?limit=10"),this.audioId=null,this.recordStarting=!0,_cache=setTimeout(function(){return t.recordStop()},9900)},recordStop:function e(){var t=this;return CloudMusic.orpheus("orpheus://recordvoice/record/end"),this.recordStarting=!1,this.authorization=!0,clearTimeout(_cache),_cache=setTimeout(function(){return t.authorization=!1,t.uploadAudio()},800)},playAudio:function e(){return CloudMusic.orpheus("orpheus://recordvoice/play/start?id="+this.audioId)},uploadAudio:function e(){return this.step=3,ugc.addCover(),!1},gotoAudio:function e(){return""===this.nickname?alert("请输入你的名字"):this.nickname.gblen()>20?alert("名字限制10个中文字符20个英文字符"):this.imageUpdate?(this.step=2,ugc.uploadOverText.visible=!1):alert("请上传一张专辑封面")},review:function e(){return this.step=5,ugc.review()},selectSingerStart:function e(){return""===this.text?alert("请输入你发声了什么?"):this.text.gblen()>64?alert("字数限制32个中文字符64个英文字符"):(this.step=4,ugc.albumInfo(this.singerIndex))},singerPrev:function e(){return this.singerIndex--,this.singerIndex<1?this.singerIndex=1:ugc.albumInfo(this.singerIndex)},singerNext:function e(){return this.singerIndex++,this.singerIndex>5?this.singerIndex=5:ugc.albumInfo(this.singerIndex)},over:function e(){return this.wy?this.step=5:this.pageInfoShow=!0,!this.loading&&(this.uploaded?(neteaseShareImage(),!1):this.allowShow())},allowShow:function e(){return this.allowPopShow=!0},allowFALSE:function e(){return!this.loading&&(this.loading=!0,this.authorization=!1,this.createLog())},allowTRUE:function e(){return!this.loading&&(this.loading=!0,CloudMusic.orpheus("orpheus://recordvoice/upload/start?id="+this.audioId))},createLog:function e(){var t=this,i;return this.authorization?(i={nickname:this.nickname,music:this.musicLink,singer:this.singerIndex,message:this.text,allow:this.authorization,mask:this.mask},axios.post(apiLink+"active/Levi/insert",i).then(function(e){return null!=e.data.info.insertId?(t.logId=e.data.info.insertId,ugc.overUGC(e.data.info.insertId)):ugc.overUGC()}).catch(function(e){return t.loading=!1})):(ugc.overUGC(),!1)},share:function e(t){var i,n;return n="Levi",this.authorization&&(n="Levis"),i={image:t,folder:n},this.folder=n,null==t?this.faild():!this.pushed&&(axios.post(imageurl,i).then(function(e){return 200===e.data.recode?main.success(e.data):main.faild(e)}).catch(function(e){return main.faild(e)}),"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","Levi","share","ugc","-"]))},success:function e(t){var i=this;return this.shareImageLink=t.info,t={id:this.logId,avatar:this.folder+"/"+this.shareImageLink},this.uploaded=!0,null!=this.logId?axios.post(apiLink+"active/Levi/update",t).then(function(e){return i.pushed=!1,i.loading=!1,neteaseShareImage()}).catch(function(e){return i.pushed=!1,i.loading=!1,neteaseShareImage()}):neteaseShareImage()},showInfoPage:function e(){return this.pageInfoShow=!0},faild:function e(t){return this.pushed=!1,this.loading=!1,console.log("err:",t)},setugc:function e(t){return this.ugc=t},changeImage:function e(t){var i;return this.imageUpdate=!0,i=document.getElementById("imageInput"),getOrientation(i.files[0],function(e){var t;return t=createObjectURLfun(i.files[0]),ugc.passImage(t,e)})}},watch:{mounted:function e(t,i){var n=this;return setTimeout(function(){if(n.pageIndex<2)return n.pageIndex=2},22500)},text:function e(t,i){return ugc.lyricUpdate(this.text)},nickname:function e(t,i){return ugc.updateName(this.nickname)}},mounted:function e(){var t=this,i;return"NeteaseMusic"===sys&&(this.wy=!0),i=2*TrueH*(2-2*TrueW/750+.01),ugc=new UGC({el:"ugc",trueH:TrueH}),this.v=parseInt(CloudMusic.getClientVersion().replace(/\./g,"")),window.api.recordEndCb=function(e){return console.log(e),t.audioId=e.localId,t.recordStarting=!1,clearTimeout(_cache)},window.api.uploadEndCb=function(e){return console.log(e),200===e.code?(t.musicLink=e.playUrl,t.createLog()):(t.authorization=!1,t.createLog())},window.api.recordvoicePlayCb=function(e){return console.log(e.action)}}})};