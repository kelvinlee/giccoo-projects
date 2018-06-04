"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),ANIMATION_END_NAME,ANIMATION_END_NAMES,Container,Graphics,ParticleContainer,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Texture,TextureCache,VENDORS,animationVoice,autoDetectRenderer,css3Prefix,getId,getTe,i,init,j,len1,loadWechatConfig,loader,mTestElement,main,resource,resources,sended;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&(i=VENDORS[j],!((css3Prefix=i)+"Transition"in mTestElement.style));j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),animationVoice=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:640,h:1138,count:100,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),PIXI.loader.add([]).load(this.build.bind(this))}return _createClass(t,[{key:"build",value:function t(){var e,s;for(i=e=0,s=this.opts.count+3;0<=s?e<s:e>s;i=0<=s?++e:--e)this.add(i);return this.app.ticker.add(this.loop.bind(this))}},{key:"add",value:function t(e){var i,s,o,n;return i=new Graphics,i.beginFill(this.opts.fillColor),s=Math.random()*this.opts.h*.95+.05*this.opts.h,o=this.opts.w/(2*this.opts.count),n=(this.opts.h-s)/2,i.drawRect(0,n,o,s),i.x=2*-o*e,this.opts.defaultShow&&(i.x=2*o*e),this.voices.push(i),this.stage.addChild(i),i}},{key:"rebuild",value:function t(e){var i,s,o;return e.clear(),e.beginFill(this.opts.fillColor),e.alpha=1,i=Math.random()*this.opts.h*.95+.05*this.opts.h,s=this.opts.w/(2*this.opts.count),o=(this.opts.h-i)/2,e.drawRect(0,o,s,i)}},{key:"rebuildAll",value:function t(){var e,s,o,n,a;for(n=[],i=s=0,o=this.voices.length;0<=o?s<o:s>o;i=0<=o?++s:--s)e=this.voices[i],this.rebuild(e),a=this.opts.w/(2*this.opts.count),n.push(e.x=2*-a*i);return n}},{key:"clear",value:function t(){return this.grap.clear(),this.grap.x=0,this.default.x=0}},{key:"stop",value:function t(){return this.clear(),this.moved=!1}},{key:"pause",value:function t(){return this.moved=!1}},{key:"play",value:function t(){return this.moved=!0}},{key:"loop",value:function t(e){var i,s,o,n,a;if(!this.moved)return!1;for(n=this.voices,a=[],s=0,o=n.length;s<o;s++)i=n[s],i.x+=this.opts.w/(3*this.opts.count)*e,(this.opts.w-i.x)/this.opts.w*100<=30&&(i.alpha-=.01*e),i.x>this.opts.w?(i.x=0,a.push(this.rebuild(i))):a.push(void 0);return a}}]),t}();return t.prototype.default={x:0,y:0,w:640,h:1138,preX:0,ratio:1,date:(new Date).getTime()},t.prototype.voice={x:0,y:0,w:4,MaxH:100},t.prototype.voices=[],t.prototype.moved=!1,t}.call(void 0),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,getTe=function t(e){return resource[e].texture},getId=function t(e,i){return loader.resources[i].textures[e]},loadWechatConfig=function t(){var e,i,s;s=encodeURIComponent(window.location.href.split("#")[0]),e=document.createElement("script"),e.src="//api.giccoo.com/api/config?url="+s,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(e,i)},Vue.component("slider",{template:'<div @mousedown="start" @mousemove="move" @mouseup="end" @touchstart="start" @touchmove.passive="move" @touchend="end"> <div class="slider-content"> <slot name="outside" :slideNumber="slideNumber"></slot> <div :id="\'slider-\'+id" class="slider" :style="{transitionDuration: duration+\'s\',transform:\'translate3d(\'+x+\'px,0,0)\'}"> <slot v-if="repeat" :slideNumber="slideNumber"></slot> <slot v-if="repeat" :slideNumber="slideNumber"></slot> <slot :slideNumber="slideNumber"></slot> </div> </div> <slot name="points" :slideNumber="slideNumber"></slot> </div>',data:function t(){return{id:Math.ceil(1e5*Math.random()+99999),duration:0,x:0,y:0,moved:!1,startTime:0,offset:{resistance:1,lastSlide:1,scrollableArea:320,isScrolling:!1,lastw:0,w:320,x:0,y:0,deltaX:0,deltaY:0},slider:{},count:0,slideNumber:0,cache:null}},props:{repeat:{default:!1},auto:{default:!1},runtime:{default:3e3},arrow:{default:!1},arrowtop:{default:!1}},methods:{setSlideNumber:function t(e){var i,s,o;if(this.moved&&(i=this.count,this.repeat&&(i=3*this.count),s=e?this.offset.deltaX<0?"ceil":"floor":"round",o=Math[s](this.x/(this.offset.scrollableArea/i)),o+=e,o=Math.min(o,0),this.slideNumber=Math.max(-(i-1),o)%this.count,0!==e))return this.$emit("number",this.slideNumber)},start:function t(e){var i;return clearTimeout(this.cache),i="mousedown"===e.type?e:e.touches[0],this.startTime=+new Date,this.duration=0,this.moved=!0,this.offset.w=this.slider.clientWidth,this.offset.x=i.pageX,this.offset.y=i.pageY,this.repeat&&0===this.x&&(this.x=-this.count*this.offset.w),this.offset.lastw=this.x,this.offset.lastSlide=-(this.count-1),this.offset.scrollableArea=this.offset.w*this.count,this.repeat&&(this.offset.scrollableArea=this.offset.w*this.count*3),this.setSlideNumber(0)},move:function t(e){var i,s;return!!this.moved&&("mousemove"===e.type?(s=e,e.preventDefault()):s=e.touches[0],this.offset.deltaX=s.pageX-this.offset.x,i=s.pageX,this.repeat?this.x=this.offset.deltaX+this.offset.lastw:(this.x=this.offset.deltaX/this.offset.resistance+this.offset.lastw,this.offset.resistance=0===this.slideNumber&&this.offset.deltaX>0?i/this.offset.w+1.25:this.slideNumber===this.offset.lastSlide&&this.offset.deltaX<0?(this.offset.w-Math.abs(i))/this.offset.w+1.25:1),this.moved=!0)},end:function t(e){var i;if(this.moved&&Math.abs(this.offset.deltaX)>5&&(i=this.slideNumber,this.setSlideNumber(+new Date-this.startTime<1e3&&Math.abs(this.offset.deltaX)>15?this.offset.deltaX<0?-1:1:0),this.x=this.slideNumber*this.offset.w,this.duration=.2,this.moved=!1,this.offset.deltaX=0,0===this.slideNumber&&i===-(this.count-1)&&(this.x=(i-1)*this.offset.w),0===i&&this.slideNumber===-(this.count-1)&&(this.x=1*this.offset.w),this.repeat&&(this.x-=this.count*this.offset.w),this.auto))return this.autoRun()},autoRun:function t(){var e=this;return this.cache=setTimeout(function(){return e.offset.w=e.slider.clientWidth,0===e.x&&(e.x=-e.count*e.offset.w),e.offset.lastw=e.x,e.slideNumber--,Math.abs(e.slideNumber)>=e.count&&(e.slideNumber=0),e.x-=e.offset.w,e.duration=.2,e.$emit("number",e.slideNumber%e.count),e.autoRun()},this.runtime)},transition:function t(){if(this.x<-(2*this.count-1)*this.offset.w&&(this.x=-this.count*this.offset.w,this.duration=0,this.slideNumber=0),this.x>-this.count*this.offset.w)return this.x=-(2*this.count-1)*this.offset.w,this.duration=0,this.slideNumber=-(this.count-1)}},mounted:function t(){var e=this;if(this.slider=document.getElementById("slider-"+this.id),this.count=this.slider.childElementCount,this.repeat&&(this.count=this.count/3,this.slider.addEventListener(TRANSITION_END_NAME,this.transition.bind(this)),setTimeout(function(){return e.offset.w=e.slider.clientWidth,e.offset.scrollableArea=e.count*e.offset.w,e.duration=0,e.x=-e.count*e.offset.w,console.log},1e3)),this.auto)return this.autoRun()}}),main={},sended=[!1,!1],window.onload=function(){return loadWechatConfig(),wx.ready(function(){var t;return t={title:"#混在街头#",desc:"#混在街头#",link:"http://m.giccoo.com/adidas-originals-i5923/",imgUrl:"http://m.giccoo.com/adidas-originals-i5923/img/ico.jpg",success:function t(){},cancel:function t(){}},wx.onMenuShareTimeline(t),wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareWeibo(t)}),init()},init=function t(){return main=new Vue({el:"#main",data:{mounted:!1,playing:!1,videoplaying:!1,videolink:"//image.giccoo.com/projects/adidas-originals-i5923/video/2.mp4",index:0,musiclink:"",musiclist:[]},watch:{index:function t(e,i){if(e!==i&&null!=this.voice)return this.voice.rebuildAll()}},methods:{end:function t(e){return this.playing=!1,this.voice.pause()},play:function t(e){return this.playing=!0,this.voice.play()},playMusic:function t(e){var i,s,o,n,a;for(a=this.musiclist,s=0,o=a.length;s<o;s++)i=a[s],i.pause();return(this.index!==e||!this.playing)&&(this.index=e,this.musiclist[e].play(),n=["TIED TOGETHER","Angel","SOS","Bring it Back Round","Educated","FEMME Double Trouble","Fire With Fire"],"undefined"!=typeof _smq&&null!==_smq?_smq.push(["custom","Homepage","Music",n[e]]):void 0)},playvideo:function t(){return this.videoplaying?this.video.pause():this.video.play()},videoplay:function t(e){if(this.videoplaying=!0,"undefined"!=typeof _smq&&null!==_smq)return _smq.push(["custom","Homepage","VideoView","Jackson"])},videoend:function t(e){return this.videoplaying=!1},number:function t(e){},gotoAd:function t(e){var i;return setTimeout(function(){return window.location.href="https://www.adidas.com.cn/campaign/originals_i5923?utm_source=Neteaseh5&utm_medium=display&utm_campaign=2018-I5923-JUN&utm_content=H5-landing"},100),i=["Jackson1","Angelababy","YM","AdrianneHo","Jackson2","Jackson3"],"undefined"!=typeof _smq&&null!==_smq&&_smq.push(["custom","Homepage","go to EC",i[e]]),!1},scroll:function t(){if(window.scrollY>=document.documentElement.clientHeight/3&&!sended[0]&&(sended[0]=!0,"undefined"!=typeof _smq&&null!==_smq&&_smq.push(["pageview","/homepage","二屏"])),window.scrollY>=document.documentElement.clientHeight&&!sended[1]&&(sended[1]=!0,"undefined"!=typeof _smq&&null!==_smq))return _smq.push(["pageview","/homepage","三屏"])}},mounted:function t(){var e,s,o;for(this.mounted=!0,this.audio=document.getElementById("bgm"),this.video=document.getElementById("videoid"),this.voice=new animationVoice({el:"playervoice",h:180,fillColor:16777215}),window.onscroll=this.scroll,o=[],i=s=0;s<7;i=++s)e=new Audio,e.src="//image.giccoo.com/projects/adidas-originals-i5923/mp3/"+i+"-test.mp3",e.addEventListener("play",this.play.bind(this)),e.addEventListener("pause",this.end.bind(this)),e.addEventListener("ended",this.end.bind(this)),o.push(this.musiclist.push(e));return o}})};