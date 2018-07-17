"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),ANIMATION_END_NAME,ANIMATION_END_NAMES,AnimatedSprite,Block,Bottle,Container,Enemy,Game,Graphics,HIT,IsPC,ParticleContainer,Person,Sprite,TRANSITION_END_NAME,TRANSITION_END_NAMES,Text,Texture,TextureCache,VENDORS,_CDN,_public,autoDetectRenderer,css3Prefix,game,getId,getTe,i,imageurl,init,j,len1,loadWechatConfig,loader,loading,mTestElement,main,musicIconCache,musicLineCache,neteaseShareImage,resource,resources,sended,sys,ugcCache;for(VENDORS=["Moz","webkit","ms","O"],TRANSITION_END_NAMES={Moz:"transitionend",webkit:"webkitTransitionEnd",ms:"MSTransitionEnd",O:"oTransitionEnd"},ANIMATION_END_NAMES={Moz:"animationend",webkit:"webkitAnimationEnd",ms:"MSAnimationEnd",O:"oAnimationEnd"},mTestElement=document.createElement("div"),j=0,len1=VENDORS.length;j<len1&&(i=VENDORS[j],!((css3Prefix=i)+"Transition"in mTestElement.style));j++)css3Prefix=!1;css3Prefix&&(TRANSITION_END_NAME=TRANSITION_END_NAMES[css3Prefix],ANIMATION_END_NAME=ANIMATION_END_NAMES[css3Prefix]),loadWechatConfig=function t(){var e,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),e=document.createElement("script"),e.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(e,i)},IsPC=function t(){var e,i,n,s;for(n=navigator.userAgent,e=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,s=0;s<e.length;){if(n.indexOf(e[s])>0){i=!1;break}s++}return i},Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function t(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function t(){var e;return e=this.$emit("play",this),this.playing=!0},pause:function t(){var e;return e=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function t(){return this.playing=!1},change:function t(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function t(e){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function t(e){return resource[e].texture},getId=function t(e,i){return loader.resources[i].textures[e]},null==Number.isInteger&&(Number.isInteger=function(t){return t>=0}),HIT=new Bump,Game=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={el:"main",w:750,h:1333,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",fillColor:6737151},this.opts=Object.assign(this.opts,e),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),PIXI.loader.add([_CDN+"img/person.json",_CDN+"img/person-jump.png",_CDN+"img/person-stop.png",_CDN+"img/person-small.png",_CDN+"img/progress-bg.png",_CDN+"img/hand.png",_CDN+"img/block.png",_CDN+"img/build-first.png",_CDN+"img/build-1.png",_CDN+"img/build-2.png",_CDN+"img/build-3.png",_CDN+"img/build-4.png",_CDN+"img/build-5.png",_CDN+"img/build-6.png",_CDN+"img/build-7.png",_CDN+"img/build-8.png",_CDN+"img/build-last-bg.png",_CDN+"img/build-last-front.png",_CDN+"img/light.png",_CDN+"img/moon.png",_CDN+"img/bottle.png",_CDN+"img/brush.png",_CDN+"img/enemy-1.png",_CDN+"img/enemy-2.png",_CDN+"img/enemy-3.png",_CDN+"img/enemy-4.png",_CDN+"img/enemy-5.png",_CDN+"img/game-info-title.png",_CDN+"img/note-text-1.png",_CDN+"img/note-text-2.png",_CDN+"img/note-text-3.png",_CDN+"img/btn-start.png",_CDN+"img/btn-share.png",_CDN+"img/btn-game-info.png",_CDN+"img/btn-long-save.png",_CDN+"img/logo.png",_CDN+"img/cd.png",_CDN+"img/cd-pointer.png",_CDN+"img/cd-text.png",_CDN+"img/finished.png",_CDN+"img/qrcode.png",_CDN+"img/game-bg-1.png",_CDN+"img/game-bg-2.png",_CDN+"img/game-bg-3.png",_CDN+"img/game-bg-4.png",_CDN+"img/game-bg-5.png",_CDN+"img/game-bg-6.png",_CDN+"img/game-bg-7.png",_CDN+"img/game-bg-8.png",_CDN+"img/game-bg-9.png",_CDN+"img/game-bg-10.png",_CDN+"img/game-bg-11.png",_CDN+"img/last-text-"+this.lastNumber+".png"]).add("jump",_CDN+"mp3/jump.mp3").add("enemy",_CDN+"mp3/enemy.mp3").add("win",_CDN+"mp3/win.mp3").load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(t,[{key:"build",value:function t(){var e=this,n,s,o,r,a,h,p,l,u,t,c,d,g,m,f,y,w,b,C,v,N,_,k,x,T,D,I,S,M,E,P,B,A,L,O,j,H,R,X,G,U,z,F;for(this.background=n=new Container,this.game=w=new Container,w.buttonMode=!0,w.interactive=!0,w.touchstart=w.click=function(){return e.jump()},i=v=0;v<11;i=++v)r=new Sprite(getTe(_CDN+"img/game-bg-"+(i+1)+".png")),r.anchor.set(0,1),r.x=0,r.y=this.opts.h-1e3*i,r.width=this.opts.w,n.addChild(r);for(d=new Sprite(getTe(_CDN+"img/build-first.png")),d.y=this.opts.h-d.height,n.addChild(d),w.addChild(n),this.notePlank=P=new Container,o=new Graphics,o.beginFill(0),o.drawRect(0,0,this.opts.w,this.opts.h),o.alpha=.7,P.addChild(o),U=new Sprite(getTe(_CDN+"img/game-info-title.png")),U.x=80,U.y=80,u=new Sprite(getTe(_CDN+"img/btn-start.png")),l=new Sprite(getTe(_CDN+"img/btn-game-info.png")),u.anchor.set(.5,.5),l.anchor.set(.5,.5),u.x=l.x=375,u.y=this.opts.h-100-20-l.height-u.height,l.y=this.opts.h-100-l.height,u.buttonMode=!0,u.interactive=!0,u.touchstart=u.click=function(){return e.start()},l.buttonMode=!0,l.interactive=!0,l.touchstart=l.click=function(){return!e.started&&main.showInfoPage()},P.addChild(U,u,l),w.addChild(P),p=new Sprite(getTe(_CDN+"img/brush.png")),p.anchor.set(.05,.95),p.alpha=0,_=4,c=8,g=8,C=N=0,H=this.default.blockCount;0<=H?N<H:N>H;C=0<=H?++N:--N)m=parseInt(2*Math.random()+2),(C+1)%5<=0&&(m=4),this.enemyIndex.indexOf(C)>-1&&(m=1),1===_&&1===m&&(m=2),C===this.default.blockCount-1&&(m=4),0===C&&(m=4),a=new Block({count:m,direction:C%2}),a.sprite.y=this.default.MH-C*this.default.margin,a.id=C,a.count=m,n.addChild(a.sprite),this.blocks.push(a),_=m,this.enemyIndex.indexOf(C)>-1?(f=new Enemy({block:a,brush:p,id:this.enemyIndex.indexOf(C)+1}),this.enemys.push(f),w.addChild(f.sprite)):C>0&&C<this.default.blockCount-1&&(c>0&&this.buildList.indexOf(C)>-1&&(c--,t=new Sprite(getTe(_CDN+"img/build-"+(g-c)+".png")),t.x=c%2==0?0:750-t.width,t.y=a.sprite.y-t.height,n.addChild(t)),(2===C||Math.random()>.1)&&(h=new Bottle({block:a}),this.bottles.push(h),2!==C&&(h.sprite.alpha=0),w.addChild(h.sprite)));for(k=new Container,x=new Sprite(getTe(_CDN+"img/build-last-bg.png")),x.anchor.set(0,1),T=new Sprite(getTe(_CDN+"img/build-last-front.png")),T.anchor.set(0,1),k.y=this.default.MH-(this.default.blockCount-1)*this.default.margin,D=new Sprite(getTe(_CDN+"img/light.png")),D.anchor.set(.5,1),D.x=140,D.rotation=.6*Math.random()-.3,D.direction=D.rotation>0,D.speed=100*Math.random()/1e4,this.lights.push(D),I=new Sprite(getTe(_CDN+"img/light.png")),I.anchor.set(.5,1),I.x=425,I.rotation=.6*Math.random()-.3,I.direction=I.rotation>0,I.speed=100*Math.random()/1e4,this.lights.push(I),S=new Sprite(getTe(_CDN+"img/light.png")),S.anchor.set(.5,1),S.x=525,S.rotation=.6*Math.random()-.3,S.direction=S.rotation>0,S.speed=100*Math.random()/1e4,this.lights.push(S),M=new Sprite(getTe(_CDN+"img/moon.png")),M.x=20,M.y=-240-M.height,this.finished=y=new Sprite(getTe(_CDN+"img/finished.png")),this.opts.h<=1100&&y.scale.set(.8,.8),y.x=this.opts.w/2-y.width/2-92,y.y=T.y-200-y.height,y.alpha=0,k.addChild(M,x,D,I,S,T,y),s=new Graphics,s.y=this.default.MH-(this.default.blockCount-1)*this.default.margin-this.opts.h,s.beginFill(2300758),s.drawRect(0,0,this.opts.w,this.opts.h),i=A=0;A<15;i=++A)s.beginFill(16777215,.5+.5*Math.random()),X=1+6*Math.random(),z=Math.random()*(this.opts.w-2*X),F=Math.random()*(1.2*this.opts.w-2*X),s.drawCircle(z,F,X);return n.addChild(s,k),this.player=O=new Person({MH:this.default.MH,jumpH:this.default.margin+30,stand:this.movingCamera.bind(this)}),O.sprite.x=375,O.sprite.y=this.default.MH,w.addChild(p),w.addChild(O.sprite),this.stage.addChild(w),B=new Sprite(getTe(_CDN+"img/note-text-1.png")),B.x=345-B.width,B.y=this.default.MH-B.height/2-O.sprite.height/2,P.addChild(B),this.bottles[0].sprite.x<375?(E=new Sprite(getTe(_CDN+"img/note-text-2.png")),E.x=this.bottles[0].sprite.x+40):(E=new Sprite(getTe(_CDN+"img/note-text-3.png")),E.x=this.bottles[0].sprite.x-40-E.width),E.y=this.bottles[0].sprite.y-E.height/2,P.addChild(E),this.scorePlank=R=new Container,R.alpha=0,h=new Sprite(getTe(_CDN+"img/bottle.png")),h.x=this.opts.w-210,h.y=40,h.scale.set(.6,.6),this.text=G=new Text("X 03",{fontFamily:"Arial",fontSize:50,fill:0,align:"right"}),G.x=this.opts.w-95-G.width/2,G.y=40+h.height/2-G.height/2,R.addChild(h,G),j=new Sprite(getTe(_CDN+"img/progress-bg.png")),j.y=this.opts.h-20-j.height,this.personSmall=L=new Sprite(getTe(_CDN+"img/person-small.png")),L.x=20,L.y=this.opts.h-20-j.height,R.addChild(j,L),this.stage.addChild(R),this.hand=b=new Sprite(getTe(_CDN+"img/hand.png")),b.anchor.set(.5,.5),b.x=this.opts.w/2,b.y=this.opts.h-200,b.alpha=0,this.stage.addChild(b)}},{key:"start",value:function t(){var e=this,i,n,s,o,r;if(this.started)return!1;for(this.started=!0,this.player.start(),this._playMove=this.player.move.bind(this.player),this.app.ticker.add(this._playMove),this.app.ticker.add(this.running.bind(this)),o=this.bottles,n=0,s=o.length;n<s;n++)i=o[n],i.sprite.alpha=1;return TweenLite.to(this.scorePlank,.5,{alpha:1}),TweenLite.to(this.notePlank,.5,{alpha:0,onComplete:function t(){return e.online=!0}}),r=function t(){var i;return!!e.hand.visible&&(i=e.hand,TweenLite.to(i,1,{alpha:1,y:e.opts.h-300,onComplete:function t(){return i.scale.set(.7,.7),setTimeout(function(){return i.scale.set(1,1)},200),setTimeout(function(){return i.scale.set(.7,.7)},400),setTimeout(function(){return i.scale.set(1,1),r(),TweenLite.to(i,1,{alpha:0,onComplete:function t(){return i.y=e.opts.h-200,r()}})},600)}}))},r(),this.startTime=(new Date).getTime()}},{key:"gameEnd",value:function t(){var e=this,i,n,s,o,r,a,h,p,l,u,c,d,g;return this.app.ticker.remove(this._playMove),this.player.over(),this.over=!0,d=this.game.y+(this.opts.h-this.default.MH)+this.default.margin-this.blocks[0].sprite.height,p=new Container,g=60,this.opts.h>=1300&&(g=120),h=30,a=new Sprite(getTe(_CDN+"img/logo.png")),a.y=g,n=new Sprite(getTe(_CDN+"img/cd.png")),n.anchor.set(.5,0),this.opts.h<=1100&&n.scale.set(.8,.8),n.x=this.opts.w/2,n.y=g+a.height+h,c=new Sprite(getTe(_CDN+"img/cd-text.png")),this.opts.h<=1100&&c.scale.set(.8,.8),c.x=this.opts.w/2-c.width/2,c.y=n.y+n.height/2-1.4*c.height,o=56,this.opts.h<=1100&&(o=56*.8),u=new Text("0",{fontFamily:"Arial",fontWeight:"normal",fontSize:o,fill:0,align:"center"}),u.x=this.opts.w/2-u.width/2,u.y=n.y+n.height/2-.2*c.height,s=new Sprite(getTe(_CDN+"img/cd-pointer.png")),this.opts.h<=1100&&s.scale.set(.8,.8),s.x=100,this.opts.h<=1100&&(s.x=140),s.y=g+a.height+h,r=new Sprite(getTe(_CDN+"img/last-text-"+this.lastNumber+".png")),r.anchor.set(.5,0),this.opts.h<=1100&&r.scale.set(.8,.8),r.x=375,r.y=n.y+n.height+h,main.wy?(this.btnShare=i=new Sprite(getTe(_CDN+"img/btn-share.png")),i.buttonMode=!0,i.interactive=!0,i.touchstart=i.click=function(){return l.visible=!0,i.visible=!1,e.app.renderer.render(e.app.stage),main.share(e.app.view.toDataURL()),l.visible=!1,i.visible=!0}):i=new Sprite(getTe(_CDN+"img/btn-long-save.png")),i.alpha=0,i.x=375-i.width/2,i.y=n.y+n.height+2*h+r.height,this.qrcode=l=new Sprite(getTe(_CDN+"img/qrcode.png")),l.y=n.y+n.height+1.4*h+r.height,l.visible=!1,p.addChild(a,n,c,u,s,r,i,l),p.alpha=0,this.stage.addChild(p),PIXI.sound.play("win"),TweenLite.to(this.game,1.5,{y:d,onComplete:function t(){var n;return n=e.finished.y,e.finished.y=e.finished.y-100,TweenLite.to(e.finished,1,{alpha:1,y:n}),TweenLite.to(e.scorePlank,.7,{alpha:0}),TweenLite.to(p,.7,{alpha:1,onComplete:function t(){var n,s;return u.tmp=0,n=(new Date).getTime()-e.startTime,n=n>12e4?10*Math.random():10+Math.random()*(e.scoreNumber+e.default.blockCount),s=100*e.scoreNumber+50*e.default.blockCount+n,TweenLite.to(u,2,{tmp:s,onUpdate:function t(){return u.text=parseInt(u.tmp),u.x=375-u.width/2},onComplete:function t(){return TweenLite.to(i,.7,{alpha:1,onComplete:function t(){if(!main.wy)return l.visible=!0,i.visible=!1,e.app.renderer.render(e.app.stage),main.setugc(e.app.view.toDataURL()),l.visible=!1,i.visible=!0}})}})}})}})}},{key:"myBottleNumber",value:function t(e){return this.scoreNumber=e,e<10?"0"+e:e}},{key:"pause",value:function t(){return this.player.pause=!0}},{key:"restart",value:function t(){return this.player.pause=!1}},{key:"weatherChange",value:function t(){if(this.game.y>2e3&&(main.BGColor="#f8e4b7"),this.game.y>3e3&&(main.BGColor="#f5ce98"),this.game.y>4e3&&(main.BGColor="#fb9257"),this.game.y>5e3&&(main.BGColor="#fc945a"),this.game.y>6e3&&(main.BGColor="#a26171"),this.game.y>7e3&&(main.BGColor="#3f2789"),this.game.y>8e3)return main.BGColor="#231b56"}},{key:"updateScore",value:function t(){var e,i,n,s,o,r,a,h,p,l;for(a=0,h=this.bottles,n=0,o=h.length;n<o;n++)e=h[n],e.alive||a++;for(l=0,p=this.enemys,s=0,r=p.length;s<r;s++)i=p[s],i.alive||l++;return this.text.text="X "+this.myBottleNumber(a+this.default.bottleCount-l)}},{key:"movingCamera",value:function t(){var e=this,i;return!!this.online&&(this.player.block.id===this.default.blockCount-1?(console.log("game over"),this.gameEnd(),!1):(i=this.default.MH-this.player.block.sprite.y,TweenLite.to(this.game,.7,{y:i,onComplete:function t(){return e.weatherChange()}})))}},{key:"updateProgress",value:function t(e){var i;return i=this.blocks.indexOf(e)/(this.blocks.length-1),TweenLite.to(this.personSmall,.3,{x:20+700*i})}},{key:"running",value:function t(e){var i,n,s,o,r,a,h,p,l,u,c,d,g,m,f,y,w;if(!this.online)return!1;for(g=this.lights,o=0,a=g.length;o<a;o++)u=g[o],u.direction?(u.rotation-=u.speed*e,u.rotation<=-.3&&(u.direction=!u.direction)):(u.rotation+=u.speed*e,u.rotation>=.3&&(u.direction=!u.direction));for(m=this.enemys,r=0,h=m.length;r<h;r++)s=m[r],s.alive&&s.checkHit(this.player.sprite)&&(this.updateScore(),this.hitEnemy());for(f=this.bottles,c=0,p=f.length;c<p;c++)n=f[c],n.alive&&n.checkHit(this.player.sprite)&&this.updateScore();if(null==this.player.block){for(y=this.blocks,w=[],d=0,l=y.length;d<l;d++){if(i=y[d],this.player.checkBlockOn(i)){this.updateProgress(i);break}w.push(void 0)}return w}}},{key:"hitEnemy",value:function t(){return this.player.blink()}},{key:"jump",value:function t(){return!!this.online&&(!this.over&&(this.hand.visible=!1,this.player.jump()))}}]),t}();return t.prototype.default={w:320,h:160,running:!0,margin:200,blockCount:25,bottleCount:3,bottleEat:0,MH:900},t.prototype.lastNumber=1+parseInt(7*Math.random()),t.prototype.started=!1,t.prototype.over=!1,t.prototype.online=!1,t.prototype.blocks=[],t.prototype.bottles=[],t.prototype.enemys=[],t.prototype.lights=[],t.prototype._progress=0,t.prototype.startTime=null,t.prototype.scoreNumber=3,t.prototype.enemyIndex=[1,5,11,16,22],t.prototype.buildList=[4,9,14,19,24,34,39,44],t}.call(void 0),Person=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={w:187.5,h:20,jumpH:100,HM:900,stand:function t(){}},this.opts=Object.assign(this.opts,e),this.init()}return _createClass(t,[{key:"init",value:function t(){var e,n,s,o,r,a;for(this.sprite=new Container,e=[],i=o=1;o<=4;i=++o)n=PIXI.Texture.fromFrame("person-"+i+".png"),e.push(n);return this.personSprite=r=new AnimatedSprite(e),r.anchor.set(.5,1),r.scale.set(.3,.3),r.animationSpeed=.1,r.gotoAndStop(0),this.jumpSprite=s=new Sprite(getTe(_CDN+"img/person-jump.png")),s.anchor.set(.5,1),s.scale.set(.3,.3),s.visible=!1,this.stopSprite=a=new Sprite(getTe(_CDN+"img/person-stop.png")),a.anchor.set(.5,1),a.scale.set(.3,.3),a.visible=!1,this.sprite.addChild(r,s,a)}},{key:"start",value:function t(){return this.personSprite.gotoAndPlay(0)}},{key:"jump",value:function t(){var e=this,i,n;return!this.jumping&&(this.jumping=!0,i=this.sprite.y,n=i-this.opts.jumpH,this.block=null,this.speed=1.5*this.default.speed,this.personSprite.visible=!1,this.jumpSprite.visible=!0,PIXI.sound.play("jump"),TweenLite.to(this.sprite,.7,{y:n,onComplete:function t(){return e.isJump=!0}}))}},{key:"blink",value:function t(){var e=this;return PIXI.sound.play("enemy"),TweenLite.to(this.sprite,.2,{alpha:.4,onComplete:function t(){return TweenLite.to(e.sprite,.3,{alpha:1,onComplete:function t(){return TweenLite.to(e.sprite,.2,{alpha:.4,onComplete:function t(){return TweenLite.to(e.sprite,.3,{alpha:1,onComplete:function t(){return TweenLite.to(e.sprite,.2,{alpha:.4,onComplete:function t(){return TweenLite.to(e.sprite,.3,{alpha:1,onComplete:function t(){return TweenLite.to(e.sprite,.2,{alpha:.4,onComplete:function t(){return TweenLite.to(e.sprite,.3,{alpha:1})}})}})}})}})}})}})}})}},{key:"standBlock",value:function t(e,i){return this.personSprite.visible=!0,this.jumpSprite.visible=!1,this.isJump=!1,this.jumping=!1,this.speed=this.default.speed,this.sprite.x=e,this.sprite.y=i,this.opts.stand()}},{key:"checkBlockOn",value:function t(e){return!!this.isJump&&(!!HIT.hit({x:this.sprite.x,y:this.sprite.y},e.sprite)&&(this.block=e,this.standBlock(this.sprite.x,e.sprite.y),!0))}},{key:"over",value:function t(){var e=this;return this.sprite.x>283?this.sprite.scale.set(1,1):this.sprite.scale.set(-1,1),TweenLite.to(this.sprite,1.7,{x:283,onComplete:function t(){return e.personSprite.gotoAndStop(1),e.personSprite.visible=!1,e.stopSprite.visible=!0}})}},{key:"move",value:function t(e){var i;return!this.pause&&("left"===this.direction&&(i=null!=this.block?this.block.sprite.x+this.sprite.width/2:this.sprite.width/2,this.isJump&&(i=this.sprite.width/2),this.sprite.x-=this.speed*e,this.sprite.x<=i&&(this.direction="right",this.sprite.scale.set(-1,1))),"right"===this.direction&&(i=null!=this.block?this.block.sprite.x+this.block.sprite.width>750+this.sprite.width/2?750+this.sprite.width/2:this.block.sprite.x+this.block.sprite.width:750+this.sprite.width/2,this.isJump&&(i=750+this.sprite.width/2),this.sprite.x+=this.speed*e,this.sprite.x>=i&&(this.direction="left",this.sprite.scale.set(1,1))),this.isJump?(this.speed+=.1,this.sprite.y+=2*this.speed*e):null!=this.block?this.sprite.y=this.block.sprite.y:void 0)}}]),t}();return t.prototype.sprite=null,t.prototype.isJump=!1,t.prototype.jumping=!1,t.prototype.pause=!1,t.prototype.block=null,t.prototype.direction="left",t.prototype.speed=4,t.prototype.default={speed:4},t}.call(void 0),Block=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={w:187.5,h:20,id:null,count:1,direction:!1},this.opts=Object.assign(this.opts,e),this.init()}return _createClass(t,[{key:"init",value:function t(){var e,n,s;for(this.sprite=new Container,i=n=0,s=this.opts.count;0<=s?n<s:n>s;i=0<=s?++n:--n)e=new Sprite(getTe(_CDN+"img/block.png")),e.x=i*e.width,this.sprite.addChild(e);if(this.opts.count<4&&this.opts.direction)return this.sprite.x=750-this.opts.count*e.width}},{key:"PersonOn",value:function t(e){}}]),t}();return t.prototype.sprite=null,t}.call(void 0),Bottle=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={w:187.5,h:20,block:null},this.opts=Object.assign(this.opts,e),this.init()}return _createClass(t,[{key:"init",value:function t(){var e;if(this.sprite=e=new Sprite(getTe(_CDN+"img/bottle.png")),e.anchor.set(.5,.5),e.scale.set(.8,.8),e.x=this.opts.block.sprite.x+e.width/2+Math.random()*(this.opts.block.sprite.width-2*e.width),e.y=this.opts.block.sprite.y-e.height/2,e.x>750-2*e.width&&(e.x=750-2*e.width),e.x<e.width/2)return e.x=e.width/2}},{key:"checkHit",value:function t(e){var i;return!!this.alive&&(i={x:e.x,y:e.y-e.height/2,width:e.width,height:e.height},!!HIT.hit(i,this.sprite)&&(this.out(),!0))}},{key:"out",value:function t(){var e=this;return this.alive=!1,TweenLite.to(this.sprite,.7,{alpha:0,y:this.sprite.y-this.sprite.height/2,onUpdate:function t(){return e.sprite.scale.set(e.sprite.alpha,e.sprite.alpha)},onComplete:function t(){}})}}]),t}();return t.prototype.alive=!0,t}.call(void 0),Enemy=function(){var t=function(){function t(e){_classCallCheck(this,t),this.opts={w:187.5,h:20,block:null,brush:null,id:null},this.opts=Object.assign(this.opts,e),this.init()}return _createClass(t,[{key:"init",value:function t(){var e;return this.sprite=e=new Sprite(getTe(_CDN+"img/enemy-"+this.opts.id+".png")),e.anchor.set(.5,.5),e.scale.set(.7,.7),e.x=this.opts.block.sprite.x+this.opts.block.sprite.width/2,e.y=this.opts.block.sprite.y-e.height/2}},{key:"checkHit",value:function t(e){var i;return!!this.alive&&(i={x:e.x,y:e.y-e.height/2,width:e.width,height:e.height},!!HIT.hit(i,this.sprite)&&(this.out(),!0))}},{key:"out",value:function t(){var e=this;return this.alive=!1,this.opts.brush.scale.set(1,1),this.opts.brush.x=this.sprite.x-this.opts.brush.width,this.opts.brush.y=this.sprite.y+this.opts.brush.height,this.opts.brush.x<0&&(this.opts.brush.scale.set(-1,1),this.opts.brush.x=this.sprite.x+this.opts.brush.width),TweenLite.to(this.opts.brush,.5,{rotation:.1*Math.PI,alpha:1,onComplete:function t(){return TweenLite.to(e.opts.brush,.3,{rotation:.1*-Math.PI,onComplete:function t(){return TweenLite.to(e.opts.brush,.3,{rotation:.1*Math.PI,onComplete:function t(){return TweenLite.to(e.sprite,.7,{alpha:0}),TweenLite.to(e.opts.brush,.3,{rotation:.1*-Math.PI,onComplete:function t(){return TweenLite.to(e.opts.brush,.3,{rotation:.1*Math.PI,alpha:0,onComplete:function t(){}})}})}})}})}})}}]),t}();return t.prototype.alive=!0,t}.call(void 0),String.prototype.gblen=function(){var t,e,n;for(e=0,i=t=0,n=this.length;0<=n?t<n:t>n;i=0<=n?++t:--t)this.charCodeAt(i)>127||94===this.charCodeAt(i)?e+=2:e++;return e},imageurl="//api.giccoo.com/api/upload/image64/",main={},game=null,_public={},loading={},musicLineCache=null,musicIconCache=null,sys="",ugcCache=null,sended=[!1,!1],_CDN="./",neteaseShareImage=function t(){var e,i,n;return n="快来玩游戏，赢Bobbi Brown正装粉底液！",e="https://image.giccoo.com/upload/BobbiBrown/"+main.shareImageLink+"@!large",i="https://m.giccoo.com/BobbiBrown/",window.location.href="orpheus://sharepic?picUrl="+encodeURIComponent(e)+"&shareUrl="+encodeURIComponent(i)+"&wbDesc="+encodeURIComponent(n)+"&qqDesc="+encodeURIComponent(n),console.log("share href")},window.onload=function(){return IsPC()?(document.getElementById("qrcode").className+=" show",!1):(window.navigator.userAgent.indexOf("NeteaseMusic")>-1?sys="NeteaseMusic":(loadWechatConfig(),wx.ready(function(){var t;return t={title:"快来玩游戏，赢Bobbi Brown正装粉底液！",desc:"测测你的颜值能量，哪首歌代表你的颜值？~",link:"http://m.giccoo.com/BobbiBrown/",imgUrl:"http://m.giccoo.com/BobbiBrown/img/ico.jpg",success:function t(){},cancel:function t(){}},wx.onMenuShareTimeline(t),wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareWeibo(t)})),_public=new Vue({el:"#public",data:{note:!0}}),loading=new Vue({el:"#loading",data:{progress:0,mounted:!1,progressOn:100},mounted:function t(){var e=this,i;return this.mounted=!0,i=setInterval(function(){if(e.progress+=3,e.progress>=e.progressOn&&(e.progress=e.progressOn),e.progress>=100)return e.progress=100,clearInterval(i),main.mounted=!0,setTimeout(function(){return document.getElementById("load").className+=" fadeOut animated",_public.note=!1,setTimeout(function(){return document.getElementById("load").style.display="none"},520)},100)},50),setTimeout(function(){return init()},500)}}))},init=function t(){var e,i,n,s;return e=document.documentElement.clientHeight,i=document.documentElement.clientWidth,i>=640&&(i=640),e>=1138&&(e=1138),s=i/640*1138>e,n=Math.ceil(i/640*94/e*100),console.log(i/e<.52),main=new Vue({el:"#main",data:{w:i,h:e,biger:i/e<.52,wy:!1,mounted:!1,loading:!1,pagebuildShow:!1,pageInfoShow:!1,startgame:!1,BGColor:"#ffffff",XY:"pageY",ugc:null,pushed:!1,shareImageLink:null,lottery:!1,lotteryShow:!1,lotteryFormShow:!0,form:{username:"",mobile:"",address:"",color:"0号 PORCELAIN瓷白",random:null}},methods:{submit:function t(){return null==this.form.random?alert("您没有中奖"):""===this.form.username?alert("请输入您的姓名"):""===this.form.mobile?alert("请输入您的联系方式"):""===this.form.address?alert("请输入您的收货地址"):""===this.form.color?alert("请点击选择色号"):axios.post("//api.giccoo.com/BobbiBrown/update/",this.form).then(function(t){return 200===t.data.recode?main.lotteryFormShow=!0:alert(t.data.reason)}).catch(function(t){return alert("提交失败请重试")})},share:function t(e){var i;return i={image:e,folder:"BobbiBrown"},null==e?this.faild():!this.pushed&&(this.loading=!0,axios.post(imageurl,i).then(function(t){return 200===t.data.recode?main.success(t.data):main.faild(t)}).catch(function(t){return main.faild(t)}))},success:function t(e){var i=this;return this.pushed=!1,this.loading=!1,this.shareImageLink=e.info,neteaseShareImage(),setTimeout(function(){return i.getLottery()},5e3)},showInfoPage:function t(){return this.pageInfoShow=!0},faild:function t(e){return this.pushed=!1,this.loading=!1,console.log("err:",e)},setugc:function t(e){var i=this;return this.ugc=e,setTimeout(function(){return i.getLottery()},5e3)},restart:function t(){return window.location.reload()},getLottery:function t(){var e=this;return axios.get("//api.giccoo.com/BobbiBrown/getaward").then(function(t){if(t.data.Time&&t.data.award)return e.form.random=t.data.random,e.lottery=!0}),this.lotteryShow=!0}},mounted:function t(){var n;return"NeteaseMusic"===sys&&(this.wy=!0),n=2*e*(2-2*i/750+.01),game=new Game({el:"game",h:n})}})};