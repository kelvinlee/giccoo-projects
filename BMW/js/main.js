"use strict";function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var ANIMATION_END_NAME,ANIMATION_END_NAMES,IsPC,TRANSITION_END_NAME,TRANSITION_END_NAMES,TrueH,TrueW,VENDORS,_cache,_public,_runTime,_second,_startCache,_testTime,apiLink,apiUrl,css3Prefix,i,imageurl,init,isAndroid,j,len1,loadWechatConfig,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,sended,sys,tryThis,ugc,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&!((css3Prefix=i=VENDORS[j])+"Transition"in mTestElement.style);j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function e(){var i,t,n;n=encodeURIComponent(window.location.href.split("#")[0]),(i=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,t)},IsPC=function e(){var i,t,n,s;for(n=navigator.userAgent,i=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,s=0;s<i.length;){if(0<n.indexOf(i[s])){t=!1;break}s++}return t},isAndroid=-1<navigator.userAgent.indexOf("Android")||-1<navigator.userAgent.indexOf("Adr"),Vue.directive("resetInput",{inserted:function e(i){isAndroid||i.addEventListener("blur",function(){var e;(e=document.getElementById("reset-input"))||((e=document.createElement("INPUT")).type="text",e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.id="reset-input",document.body.prepend(e)),e.focus(),e.blur()})}}),Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input v-reset-input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <input v-reset-input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'number\'" v-model="item.value" type="number"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option> </select> </div> </div> <slot></slot> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",number:"number",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},watch:{form:{handler:function e(i){return console.log("form:",i)},deep:!0}},methods:{getOptionsName:function e(i){var t,n,s,a;if(i.array){for(n=0,s=(a=i.options).length;n<s;n++)if((t=a[n]).val===i.value)return t.name;return i.options[0].name}return""===i.value?Object.keys(i.options)[0]:i.value},submit:function e(i){var t,n,s,a;for(n in t={},console.log("first Time.."),s=this.form)a=s[n],t[n]=a.value;return this.$emit("submit",t)}},mounted:function e(t){var n,s,a,o,l;for(n in a=[],s=(o=this).form)"select"===(l=s[n]).type&&(console.log("form.".concat(n,".options")),this.$watch("form.".concat(n,".options"),function(e){return console.log("changed:",e)},{deep:!0})),null!=l.link&&"select"===l.type?a.push(this.$watch("form.".concat(n),function(e,t){var n,s,a;if(null==o.form[e.link])return!1;if(o.form[e.link].options=e.options[e.value],o.form[e.link].array)return console.log(e.link,o.form[e.link].value,e.options[e.value][0].val),o.form[e.link].value=e.options[e.value][0].val;for(a=[],i=n=0,s=Object.keys(e.options[e.value]).length;0<=s?n<s:s<n;i=0<=s?++n:--n){if(e.options[e.value][Object.keys(e.options[e.value])[i]]){o.form[e.link].value=Object.keys(e.options[e.value])[i];break}a.push(void 0)}return a},{deep:!0})):a.push(void 0);return a}}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var i;return i=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var i;return i=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},mounted:function e(i){return this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var i,t,n;if(i=document.getElementById(this.canvasid),t=i.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return t.drawImage(n,0,0,i.width,i.height)}},animate:function e(){var i,t;return!!(i=document.getElementById(this.canvasid))&&((t=i.getContext("2d")).drawImage(this.video,0,0,i.width,i.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(i){var t=this,n;if(n=navigator.userAgent,isAndroid=-1<n.indexOf("Android")||-1<n.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),isAndroid&&this.playsinline)return this.andriod=!0,setTimeout(function(){return t.initCanvas()},20)}}),String.prototype.gblen=function(){var e,t,n;for(i=e=t=0,n=this.length;0<=n?e<n:n<e;i=0<=n?++e:--e)127<this.charCodeAt(i)||94===this.charCodeAt(i)?t+=2:t++;return t},loadWechatConfig=function e(){var i,t,n;n=encodeURIComponent(window.location.href.split("#")[0]),(i=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,t)},IsPC=function e(){var i,t,n,s;for(n=navigator.userAgent,i=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,s=0;s<i.length;){if(0<n.indexOf(i[s])){t=!1;break}s++}return t},loadWechatConfig=function e(){var i,t,n;n=encodeURIComponent(window.location.href.split("#")[0]),(i=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,t)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var i;return i=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var i;return i=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},mounted:function e(i){return this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var i,t,n;if(i=document.getElementById(this.canvasid),t=i.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return t.drawImage(n,0,0,i.width,i.height)}},animate:function e(){var i,t;return!!(i=document.getElementById(this.canvasid))&&((t=i.getContext("2d")).drawImage(this.video,0,0,i.width,i.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(i){var t=this,n;if(n=navigator.userAgent,isAndroid=-1<n.indexOf("Android")||-1<n.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),isAndroid&&this.playsinline)return this.andriod=!0,setTimeout(function(){return t.initCanvas()},20)}}),IsPC=function e(){var i,t,n,s;for(n=navigator.userAgent,i=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,s=0;s<i.length;){if(0<n.indexOf(i[s])){t=!1;break}s++}return t},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var i;return i=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var i;return i=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},mounted:function e(i){return this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Vue.component("mp4",{template:'<div class="video"> <div v-if="andriod" class="icon-play" :class="{hide: playing, pause: !playing}" @click="change"> <div class="icon"> <svg v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> </div> \x3c!--  --\x3e <video v-if="!playsinline" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster"></video> <video v-if="playsinline" :class="{hide: andriod}" :width="width" :height="height" :controls="controls" :src="src" :id="videoid" :poster="poster" x5-video-player-type="h5" x5-video-player-fullscreen="true" x-webkit-airplay="allow" webkit-playsinline playsinline></video> <canvas v-if="andriod" :id="canvasid" :width="width" :height="height" @click="change"></canvas> </div>',data:function e(){return{playing:!1,stoped:!1,andriod:!1}},props:{playsinline:{default:!1},controls:{default:!1},videoid:{default:"video"},src:{default:"./mp3/bgm.mp3"},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},poster:{default:!1},width:{default:1920},height:{default:1080}},computed:{canvasid:function e(){return this.videoid+"-canvas"}},methods:{play:function e(){return this.video&&this.video.play(),this.playing=!0,this.$emit("play",{playing:!0})},pause:function e(){return this.playing=!1,this.$emit("pause",{playing:!1})},stop:function e(){return this.video&&this.video.pause(),this.$emit("stop",{playing:!1})},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.video.pause(),this.stoped=!0):(this.video.play(),this.stoped=!1,this.animate())},initCanvas:function e(){var i,t,n;if(i=document.getElementById(this.canvasid),t=i.getContext("2d"),this.poster)return(n=new Image).src=this.poster,n.onload=function(){return t.drawImage(n,0,0,i.width,i.height)}},animate:function e(){var i,t;return!!(i=document.getElementById(this.canvasid))&&((t=i.getContext("2d")).drawImage(this.video,0,0,i.width,i.height),this.stoped?void 0:requestAnimationFrame(this.animate.bind(this)))}},mounted:function e(i){var t=this,n;if(n=navigator.userAgent,isAndroid=-1<n.indexOf("Android")||-1<n.indexOf("Adr"),this.video=document.getElementById(this.videoid),this.video.addEventListener("pause",this.pause.bind(this)),this.video.addEventListener("playing",this.play.bind(this)),this.video.addEventListener("ended",this.ended.bind(this)),isAndroid&&this.playsinline)return this.andriod=!0,setTimeout(function(){return t.initCanvas()},20)}}),loadWechatConfig=function e(){var i,t,n;n=encodeURIComponent(window.location.href.split("#")[0]),(i=document.createElement("script")).src="//api.giccoo.com/api/config?url="+n,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(i,t)},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path :fill="fill" class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> <slot></slot> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{fill:{default:"black"},name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var i;return i=this.$emit("play",this),this.playing=!0,this.audio.play()},pause:function e(){var i;return i=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1)}},mounted:function e(i){return this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),IsPC=function e(){var i,t,n,s;for(n=navigator.userAgent,i=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),t=!0,s=0;s<i.length;){if(0<n.indexOf(i[s])){t=!1;break}s++}return t},axios.defaults.withCredentials=!0,TrueW=640,TrueH=1138,imageurl="//api.giccoo.com/api/upload/image64/",apiUrl="//api.giccoo.com/BMW",apiLink="//g.giccoo.com/",main={},sys="",sended=[!(loading={}),!(_public={})],_runTime=_startCache=_cache=ugcCache=musicIconCache=musicLineCache=ugc=null,_testTime=_second=0,neteaseShareImage=function e(){var i,t,n;return n="画山成岳",i="https://image.giccoo.com/upload/".concat(main.folder,"/")+main.shareImageLink+"@!large",t="https://activity.music.163.com/BMW/",console.log("share href:",i),CloudMusic.sharePic({picUrl:i,text:n,link:t})},window.onload=function(){var e,i;return TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,e=0,-1<window.navigator.userAgent.indexOf("NeteaseMusic")?(sys="NeteaseMusic",i={name:"BMW",title:"型者本色X音乐先声",subTitle:"BMW1系X王嘉尔《Bimmer Ride》",text:"",picUrl:"http://m.giccoo.com/BMW/img/ico.jpg",link:"http://m.giccoo.com/BMW/"},CloudMusic.setShareData(i)):(loadWechatConfig(),wx.ready(function(){var e;return e={title:"型者本色X音乐先声",desc:"BMW1系X王嘉尔《Bimmer Ride》",link:"http://m.giccoo.com/BMW/",imgUrl:"http://m.giccoo.com/BMW/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init()},init=function e(){var i,t,n;return 640<=TrueW&&(TrueW=640),1138<=TrueH&&(TrueH=1138),n=2*TrueH<1200,t=Math.ceil(TrueW/640*94/TrueH*100),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,console.log(TrueW,TrueH),main=new Vue({el:"#main",data:(i={w:TrueW,h:TrueH,biger:TrueW/TrueH<.55,smaller:n,afterH:n?1.15*TrueH-TrueW/750*1029:TrueH-TrueW/750*1029,wy:!1,mounted:!0,loading:!1,playing:!1,noteText:"",noteTime:null,noteShow:!1,noteType:!0,pageInfoShow:!1,pageIndex:1,step:1,singerIndex:1,bgmPlay:!1,startgame:!1,folder:"",BGColor:"#ffffff",XY:"pageY",ugc:null,ugcsave:null,ugcold:null,pushed:!1,shareImageLink:null,cache:null,audioId:null,v:null,recordStarting:!1,authorization:!1,norecord:!0,uploaded:!1,imageUpdate:!1,allowPopShow:!1,count:0,videoIndex:0,videoIndexOld:0,lr:!0,form:{sex:{id:"sex",type:"select",link:"city",array:!0,value:0,options:[{name:"请选择称谓(男士/女士)",val:0},{name:"男士",val:1},{name:"女士",val:2}]},firstname:{id:"firstname",type:"input",placeholder:"请填写姓",value:""},username:{id:"username",type:"input",placeholder:"请填写名",value:""},mobile:{id:"mobile",type:"number",placeholder:"请填写电话号码",value:""}},mask:1,text:"",nickname:"",mobile:"",musicLink:"",logId:"",openBtnShow:!0,default:{x:0},videoPop:!1,canUpload:!0,handCover:!1,last_update:0,lastX:0,lastY:0,lastZ:0,speed:4e3,maxSpeed:0,swing:!1,registerShow:!1,lotteryShow:!1,lotteryEndShow:!1,lotteryInfo:{id:null,random:null},regSubmited:!1,giveUp:!1,gameEnd:!1,noreg:!1,ugcShow:!1,regH:100,ugcType:1,questionShow:!1,questionIndex:0,answer1:1,answer2:0,answer3:{c1:!1,c2:!1,c3:!1,c4:!1}},_defineProperty(i,"nickname",""),_defineProperty(i,"message",""),_defineProperty(i,"messageIndex",1),_defineProperty(i,"messageInput",!1),_defineProperty(i,"musicName",""),_defineProperty(i,"white",!1),_defineProperty(i,"gameEnd",!1),_defineProperty(i,"formShow",!1),_defineProperty(i,"formBoxShow",!1),_defineProperty(i,"carIndex",1),_defineProperty(i,"allow",!1),_defineProperty(i,"videoTime",!1),i),methods:{playMusic:function e(){var i,t,n,s,a;for(console.log("playing music"),a=[],t=0,n=(s=this.$children).length;t<n;t++)i=s[t],a.push(null!=i.video&&i.video.pause());return a},playVideo:function e(){var i,t,n,s,a;for(console.log("playing video"),a=[],t=0,n=(s=this.$children).length;t<n;t++)i=s[t],a.push(null!=i.audio&&i.audio.pause());return a},submit:function e(i){return console.log("data:",i),0===i.sex||"0"===i.sex?alert("请选择称谓"):""===i.firstname||2<i.firstname.length||i.firstname.length<1?alert("请输入1-2个字的姓"):""===i.username||8<i.username.length||i.username.length<1?alert("请输入1-8个字的名"):""===i.mobile?alert("请输入联系电话"):this.allow?axios.post("".concat(apiLink,"active/autoSave/insert/database/bmw/"),i).then(function(e){return 200===e.data.code?alert("填写成功"):alert(e.data.reason)}).catch(function(e){return console.log(e),alert("服务器连接失败,请重试.")}):alert("请您阅读并接受个人信息保护")},send:function e(i,t){var n=this,s=!(1<arguments.length&&void 0!==t)||t;return this.noteShow=!0,this.noteText=i,this.noteType=s,clearTimeout(this.noteTime),this.noteTime=setTimeout(function(){return n.noteShow=!1},2e3)},answer3Change:function e(i,t){if(console.log("answer3 changed."),"undefined"!=typeof q3&&null!==q3)return q3([this.answer3.c1,this.answer3.c2,this.answer3.c3,this.answer3.c4])},messageShow:function e(){return this.messageInput=!0,document.getElementById("message").focus(),document.getElementById("message").select()},messageFoucs:function e(){return""===this.message&&(this.messageInput=!0),console.log("focus")},messageBlur:function e(){if(""===this.message)return this.messageInput=!1},messageSelectLeft:function e(){if(this.messageIndex--,this.messageIndex<=1)return this.messageIndex=1},messageSelectRight:function e(){if(this.messageIndex++,this.messageIndex>=this.messageList.length)return this.messageIndex=this.messageList.length},over:function e(){var i=this;return this.questionShow=!1,ugc.init(),setTimeout(function(){return i.gameEnd=!0},2e3)},regame:function e(){return window.location.reload()},dateText:function e(i){var t;return console.log(i.replace(/-/g,"/")),(t=new Date(i.replace(/-/g,"/"))).getFullYear()+"年"+(t.getMonth()+1)+"月"+t.getDate()+"日"},goUGC:function e(){return this.lotteryShow=!0},sharePost:function e(i){return this.gameEnd=!0,ugc.app.renderer.render(ugc.app.stage),this.ugc=i},restart:function e(){return window.location.reload()},goshare:function e(){return this.share()},share:function e(){return goFinal2(),this.formBoxShow=!1,this.registerShow=!1,this.lotteryShow=!1,console.log("run share"),ugc.app.renderer.render(ugc.app.stage),this.ugc=ugc.app.view.toDataURL(),ugc.buildUGC(ugc.app.view.toDataURL())},callShare:function e(i){var t,n,s;return null!=i&&(this.ugc=i),s=this.ugc,this.wy?(t={image:s,folder:n="drawboard"},this.folder=n,null==s?this.faild():!this.pushed&&(null!=this.shareImageLink?(this.pushed=!1,this.loading=!1,neteaseShareImage(),"undefined"!=typeof shareDone&&null!==shareDone&&shareDone(),!0):axios.post(imageurl,t).then(function(e){return 200===e.data.code?main.success(e.data):main.faild(e)}).catch(function(e){return main.faild(e)}))):this.ugcShow=!0},success:function e(i){return this.shareImageLink=i.info,this.pushed=!1,this.loading=!1,neteaseShareImage(),shareDone()},closeUGC:function e(){return this.ugcShow=!1,shareDone()},faild:function e(i){return this.pushed=!1,this.loading=!1},openSong:function e(){var i;return i=[169794,166317,112678,144143,64497,163639,28853351,153476,5271858,186980,170749,5276250,27591641,32922491,144380,5250828,28785688,186272,210866,555984413],window.location.href="https://music.163.com/#/song?id=".concat(i[resultNum])},openMusic:function e(i){return CloudMusic.isInApp()?CloudMusic.playlist(i):window.location.href="https://music.163.com/#/playlist?id=".concat(i)},openInApp:function e(){return CloudMusic.open("https://m.giccoo.com/draw-board/")},goNext:function e(){return this.videoStop(),this.pageIndex=2,clearInterval(_startCache)},goShow:function e(){return""===this.nickname?this.send("请输入您的昵称"):(this.pageIndex=2,this.formShow=!0,goFinal1())},goNickname:function e(){return clearInterval(_startCache),this.pageIndex=3},goSubmit:function e(){var i=this,t;return t={username:this.nickname,mobile:this.mobile},axios.post("".concat(apiLink,"active/autoSave/insert/database/draw/"),t).then(function(e){return 200===e.data.code?(i.send("恭喜您预约成功"),i.formBoxShow=!1,setTimeout(function(){return i.share()},2e3)):i.send(e.data.reason)}).catch(function(e){return console.log("err:",e),i.send("请求错误,请重试")})},goWeb:function e(){return window.location.href="https://tharu.svw-volkswagen.com/"},focusEvt:function e(i){return console.log("height:",document.body.scrollHeight,i)},blurEvt:function e(i){return clearInterval(_startCache)},videoplay:function e(i){if(console.log("videoPlay",i),this.bgmPlay=_public.$children[0].playing,i.playing)return _public.$children[0].pause()},videoStop:function e(){if(null!=this.$children[0].video&&this.$children[0].stop(),null!=this.$children[1].video&&this.$children[1].stop(),null!=this.$children[2].video)return this.$children[2].stop()},videoPause:function e(){if(this.bgmPlay)return _public.$children[0].play()},showNote:function e(){return alert("今晚7:30 火力全开")}},mounted:function e(){var i,t;return this.carIndex=Math.floor(2*Math.random()+1),console.log(this.carIndex),TrueH=document.documentElement.clientHeight,TrueW=document.documentElement.clientWidth,"NeteaseMusic"===sys&&(this.wy=!0),i=2*TrueH*(2-2*TrueW/750+.01),this.wy=CloudMusic.isInApp(),this.videoTime=new Date>=new Date("2019/2/14 19:30"),t=CloudMusic.getClientVersion().split(".")}})},tryThis=function e(i){return console.log("msg:",i)};
//# sourceMappingURL=main.js.map