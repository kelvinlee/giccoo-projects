"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),$_GET,AnimatedSprite,Container,Graphics,IsPC,ParticleContainer,Sprite,Text,Texture,TextureCache,UGC,_CDN,_imgurl,answers,autoDetectRenderer,cacheAnswer,getId,getRandom,getTe,global,init,load,loadWechatConfig,loader,main,pre,questions,resource,resources,sys,ugc;Container=PIXI.Container,ParticleContainer=PIXI.ParticleContainer,autoDetectRenderer=PIXI.autoDetectRenderer,loader=PIXI.loader,resources=PIXI.loader.resources,TextureCache=PIXI.utils.TextureCache,Texture=PIXI.Texture,Sprite=PIXI.Sprite,Graphics=PIXI.Graphics,resource=PIXI.loader.resources,Text=PIXI.Text,AnimatedSprite=PIXI.extras.AnimatedSprite,getTe=function e(t){return resource[t].texture},getId=function e(t,i){return loader.resources[i].textures[t]},null==Number.isInteger&&(Number.isInteger=function(e){return e>=0}),Vue.component("player",{template:'<div class="player" :class="{play: playing, pause: !playing}" @click="change"> <div class="icon-play" :class="{play: playing, pause: !playing}"> <svg v-if="!icon" v-show="!playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-39"></use><path class="ytp-svg-fill" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path></svg> <svg v-if="!icon" v-show="playing" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ytp-id-40"></use><path class="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg> </div> <audio :src="src" :autoplay="autoplay" :preload="preload" :loop="loop"></audio> <img v-if="thumb" :src="thumb" /> </div>',data:function e(){return{playing:!1,stoped:!1}},props:{name:{default:!1},src:{default:"./mp3/bgm.mp3"},thumb:{default:!1},autoplay:{default:!1},preload:{default:!1},loop:{default:!1},callback:{default:!1},icon:{default:!1}},methods:{play:function e(){var t;return t=this.$emit("play",this),this.playing=!0},pause:function e(){var t;return t=this.$emit("pause",this),this.audio.pause(),this.playing=!1},ended:function e(){return this.playing=!1},change:function e(){return this.playing?(this.audio.pause(),this.stoped=!0):(this.audio.play(),this.stoped=!1,"undefined"!=typeof _hmt&&null!==_hmt&&_hmt.push(["_trackEvent","adidas-originals-eqt",this.name,"play","-"]))}},mounted:function e(t){return console.log(this.name),this.audio=this.$el.children[1],this.audio.addEventListener("pause",this.pause.bind(this)),this.audio.addEventListener("play",this.play.bind(this)),this.audio.addEventListener("ended",this.ended.bind(this))}}),_CDN="//image.giccoo.com/projects/zhihu-wow8/",UGC=function(){var e=function(){function e(t){_classCallCheck(this,e);var i,n;this.opts={el:"main",w:1080,h:1920,trueH:1314,count:6,speed:1,alpha:.8,defaultShow:!0,class:"",name:"death",fillColor:6737151},this.opts=Object.assign(this.opts,t),this.default.h=document.documentElement.clientHeight,this.default.w=document.documentElement.clientWidth,this.default.ratio=this.opts.w/this.default.w,this.app=new PIXI.Application({width:this.opts.w,height:this.opts.h,transparent:!0,preserveDrawingBuffer:!0}),null!=this.opts.class&&""!==this.opts.class&&(this.app.view.className=this.opts.class),this.stage=this.app.stage,document.getElementById(this.opts.el).appendChild(this.app.view),i={death:4,demon:1,dryad:2,huntsman:2,mage:2,monk:3,paladin:3,pastor:3,shaman:2,stalker:3,warlock:2,warrior:2},n=Math.floor(Math.random()*i[this.opts.name]+1),PIXI.loader.add([_CDN+"img/r-"+this.opts.name+".jpg",_CDN+"img/r-"+this.opts.name+"-copy-1.png",_CDN+"img/small-logo.png",_CDN+"img/qrcode.png"]).load(this.build.bind(this)),this.default.MH=.65*this.opts.h}return _createClass(e,[{key:"build",value:function e(){var t,i,n,a,s,o;return i=new Sprite(getTe(_CDN+"img/r-"+this.opts.name+".jpg")),o=new Sprite(getTe(_CDN+"img/r-"+this.opts.name+"-copy-1.png")),this.logo=n=new Sprite(getTe(_CDN+"img/small-logo.png")),n.y=50,this.qrcode=s=new Sprite(getTe(_CDN+"img/qrcode.png")),t="monk"===this.opts.name?.6:.3,this.nickname=a=new Text(main.nickname,{fontFamily:"Arial",fontSize:49,fill:15377414,align:"left",dropShadow:!0,dropShadowAlpha:t,dropShadowBlur:5,dropShadowColor:"black",dropShadowDistance:5}),a.x=(this.opts.w-a.width)/2,a.y=361,this.stage.addChild(i,o,n,s,a),this.app.renderer.render(this.app.stage),main.ugc=this.app.view.toDataURL(),s.alpha=0,n.alpha=0}},{key:"save",value:function e(){var t=this;return this.qrcode.alpha=0,this.logo.alpha=1,TweenMax.to(this.qrcode,.2,{alpha:1,delay:1,onComplete:function e(){return t.app.renderer.render(t.app.stage),main.ugcsave=t.app.view.toDataURL(),t.hide()}})}},{key:"hide",value:function e(){return this.qrcode.alpha=0,this.logo.alpha=0}}]),e}();return e.prototype.default={w:320,h:160,running:!0},e.prototype.started=!1,e.prototype.over=!1,e.prototype.online=!1,e.prototype.blocks=[],e.prototype.bottles=[],e.prototype.enemys=[],e.prototype.lights=[],e.prototype._progress=0,e.prototype.startTime=null,e}.call(void 0),_CDN="",_imgurl="",global={},main={},pre={},load={},ugc={},sys="",answers={list:[{id:2,list:[{id:3,list:[{id:4,list:[{id:5,list:[{id:6,list:[{id:7,list:[{id:11,list:[{name:"death"},{name:"warlock"}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]},{id:8,list:[{id:10,list:[{name:"paladin"},{name:"demon"}]},{id:9,list:[{name:"dryad"},{name:"paladin"}]}]}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:5,list:[{id:6,list:[{id:11,list:[{name:"death"},{name:"warlock"}]},{id:10,list:[{name:"paladin"},{name:"demon"}]}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]}]}]},{id:5,list:[{id:6,list:[{id:7,list:[{id:11,list:[{name:"death"},{name:"warlock"}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]},{id:8,list:[{id:10,list:[{name:"paladin"},{name:"demon"}]},{id:9,list:[{name:"dryad"},{name:"paladin"}]}]}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]}]},{id:19,list:[{id:20,list:[{id:21,list:[{id:14,list:[{id:26,list:[{name:"stalker"},{name:"pastor"}]},{id:16,list:[{name:"monk"},{name:"dryad"}]}]},{id:11,list:[{name:"death"},{name:"warlock"}]}]},{id:22,list:[{id:23,list:[{id:16,list:[{name:"monk"},{name:"dryad"}]},{id:10,list:[{name:"paladin"},{name:"demon"}]}]},{id:12,list:[{id:13,list:[{name:"demon"},{name:"warrior"}]},{id:9,list:[{name:"dryad"},{name:"paladin"}]}]}]}]},{id:21,list:[{id:4,list:[{id:5,list:[{id:6,list:[{id:7,list:[{name:"death"},{name:"warlock"}]},{id:8,list:[{name:"paladin"},{name:"shaman"}]}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:5,list:[{id:26,list:[{name:"stalker"},{name:"pastor"}]},{id:16,list:[{name:"monk"},{name:"dryad"}]}]}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:5,list:[{id:26,list:[{name:"stalker"},{name:"pastor"}]},{id:16,list:[{name:"monk"},{name:"dryad"}]}]}]}]}]}]},{id:24,list:[{id:25,list:[{id:6,list:[{id:7,list:[{id:11,list:[{name:"death"},{name:"warlock"}]},{id:13,list:[{name:"demon"},{name:"warrior"}]}]},{id:8,list:[{id:10,list:[{name:"paladin"},{name:"demon"}]},{id:13,list:[{name:"demon"},{id:10,list:[{name:"paladin"},{name:"demon"}]}]}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:5,list:[{id:26,list:[{name:"stalker"},{name:"pastor"}]},{id:16,list:[{name:"monk"},{name:"dryad"}]}]}]}]},{id:2,list:[{id:3,list:[{id:4,list:[{id:6,list:[{id:7,list:[{id:11,list:[{name:"death"},{name:"warlock"}]},{id:13,list:[{name:"demon"},{name:"warrior"}]}]},{id:8,list:[{id:10,list:[{name:"death"},{name:"warlock"}]},{id:13,list:[{name:"warrior"},{name:"monk"}]}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:5,list:[{id:15,list:[{name:"pastor"},{name:"mage"}]},{id:10,list:[{name:"paladin"},{name:"demon"}]}]}]}]},{id:5,list:[{id:6,list:[{id:7,list:[{id:10,list:[{name:"paladin"},{name:"demon"}]},{id:11,list:[{name:"death"},{name:"warlock"}]}]},{id:8,list:[{name:"paladin"},{name:"shaman"}]}]},{id:15,list:[{name:"pastor"},{name:"mage"}]}]}]},{id:19,list:[{id:20,list:[{id:21,list:[{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:10,list:[{name:"paladin"},{name:"demon"}]}]},{id:8,list:[{name:"paladin"},{name:"shaman"}]}]},{id:22,list:[{id:23,list:[{name:"monk"},{name:"warrior"}]},{id:12,list:[{id:15,list:[{name:"pastor"},{name:"mage"}]},{id:16,list:[{name:"monk"},{name:"dryad"}]}]}]}]},{id:21,list:[{id:4,list:[{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:10,list:[{name:"paladin"},{name:"demon"}]}]},{id:11,list:[{name:"death"},{name:"warlock"}]}]},{id:17,list:[{id:18,list:[{name:"shaman"},{name:"huntsman"}]},{id:23,list:[{name:"monk"},{name:"warrior"}]}]}]}]}]}]}]},questions=[{question:"在艾泽拉斯大陆，充满了各种各样的人，他们有的热情如火，有的冷若冰霜，有人身着异服人，有人威武堂堂。你能和他们成为朋友吗？",answers:["我觉得他们都能成为我的朋友","能成为真正朋友的人估计只有几个吧"]},{question:"打25人团本时，有2个小伙伴总是不得要领，团灭了好几次，这时你会怎么想？",answers:["不着急，很快就能过了","怎么教都不会，换人吧"]},{question:"你觉得伊利丹·怒风说过最Man的话是?",answers:["“你们这是自寻死路！”","“无论我做了什么,无论我变成什么样子,我会永远关心你的,泰兰德。”"]},{question:"深沉有力的雷霆崖背景音乐和轻快昂扬的闪金镇旅馆音乐，哪个更能勾起你的回忆？",answers:["雷霆崖音乐","闪金镇旅馆音乐"]},{question:"副本爆出心仪的装备后，dkp较低的好友希望你能让给他，你会怎么做？",answers:["不行，我也刷了很久了","嗯，如果你喜欢的话，先给你吧"]},{question:"张扬霸气的迅猛龙和稳重可靠的雷象，你更喜欢哪个坐骑？",answers:["迅猛龙","雷象"]},{question:"wow中既有酷炫强力的技能比如辛达苟萨之怒，也有蠢萌有趣的技能比如德鲁伊的振翅。你怎么看待它们？",answers:["我不看外观，实用至上","特效酷炫帅气才是王道"]},{question:"承载着庞大又悲壮故事的灰烬使者和有着美丽传说的雷霆之怒·逐风者的祝福之剑，哪个武器更能触动你",answers:["灰烬使者","雷霆之怒·逐风者的祝福之剑"]},{question:"修长高挑的暗夜精灵与妖娆性感的血精灵相比，你更喜欢哪一款？",answers:["暗夜精灵","血精灵"]},{question:"遇到强力怪时，你是怎么反应的？",answers:["放着我来！","坦克在哪？"]},{question:"在PVP战斗中，当双方水平相当，陷入僵局时，你会怎么做？",answers:["抓住机会，发起一波猛攻","沉下心来，这时候最需要的就是耐心"]},{question:"整天刷副本PVP和在潘达利亚海边钓鱼相比，你更喜欢过怎么样的生活？",answers:["远离副本和PK，我爱平淡的日常","再您的见，我去刷装备了"]},{question:"葬影村海边的夕阳和莫罗山脉的雪景，你更喜欢哪个？",answers:["葬影村海边的夕阳","莫罗山脉的雪景"]},{question:"如果能在现实中吃到，你更希望吃到甜薯面包还是铁炉堡军粮？",answers:["甜薯面包","铁炉堡军粮"]},{question:"在野外闲逛时，受到敌对阵营的挑衅，你会怎么做？",answers:["言语还击，敌不动我不动","立刻反击，叫你再嚣张"]},{question:"德莱尼男性的土味舞蹈（印度神曲《东北玩泥巴》）和暗夜精灵男性的天王舞蹈（杰克逊《Billie Jean》）相比，你更欣赏哪个？",answers:["《东北玩泥巴》","《Billie Jean》"]},{question:"友情、爱情能够永恒吗？",answers:["人终究是孤独的","真正的友情与爱情是跨越时间的"]},{question:"在专业技能的选择上，你更喜欢炼金、采药这类自给自足的，还是附魔这种先投入再产出的？",answers:["还是自给自足的好","我要做一名附魔师"]},{question:"无论是坐骑、装备还是角色，好看、帅气是你的第一标准吗？",answers:["是的，颜值必须长期在线","无所谓，丑到极致也是种美"]},{question:"如果现实中存在，充满异域风情的银月城和宁静宜人的湖畔镇，你更希望居住在哪里？",answers:["银月城","湖畔镇"]},{question:"想要开一个团本但是还缺5个人，你会怎么做？",answers:["别说5个，10个都能马上给你喊来","我好像没那么多朋友"]},{question:"朋友之间应该互相包容吗？",answers:["是的，友谊地久天长","抢我装备就包容不了了"]},{question:"当遇到什么都不懂的萌萌哒新玩家向你求助时，你是怎么做的？",answers:["公会繁忙，告辞","热心帮助，还会给点钱"]},{question:"吉安娜在经历了众多令人叹息的遭遇后，由原本追求和平的鸽派转变主张瓦解部落的鹰派，你是怎么看的？",answers:["原本的她太天真了","她已经被仇恨蒙蔽了双眼"]},{question:"队友引怪出错，局面急转直下时，你通常是怎么做的？",answers:["冷静指挥，逐渐稳住局面","手忙脚乱，团灭"]},{question:"在第一次玩副本黑石深渊，面对如此复杂的迷宫时，你是怎么做的？",answers:["靠毅力和耐性攻克难关","看攻略、求助他人"]}],cacheAnswer=answers,getRandom=function e(t){return parseInt(Math.random()*(t+1)-1)},String.prototype.gblen=function(){var e,t,i,n;for(i=0,e=t=0,n=this.length;0<=n?t<n:t>n;e=0<=n?++t:--t)this.charCodeAt(e)>127||94===this.charCodeAt(e)?i+=2:i++;return i},window.onload=function(){return window.navigator.userAgent.indexOf("Zhihu")>-1||window.navigator.userAgent.indexOf("osee2unifiedRelease")>-1||window.navigator.userAgent.indexOf("Futureve")>-1?sys="zhihu":(loadWechatConfig(),wx.ready(function(){var e;return e={title:"来自艾泽拉斯的召唤",desc:"灵魂深处，你的专属职业究竟是谁？艾泽拉斯正在召唤你。",link:"http://m.giccoo.com/zhihu-wow8/",imgUrl:"http://m.giccoo.com/zhihu-wow8/img/ico.jpg",success:function e(){},cancel:function e(){}},wx.onMenuShareTimeline(e),wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareWeibo(e)})),init()},init=function e(){var t,i,n,a;return t=document.documentElement.clientHeight,i=document.documentElement.clientWidth,i>=640&&(i=640),t>=1138&&(t=1138),a=i/t>.65,n=Math.ceil(i/640*94/t*100),console.log(i,t),main=new Vue({el:"#main",data:{w:i,h:t,biger:i/t<.53,smaller:a,afterH:a?1.15*t-i/750*1029:t-i/750*1029,homepageShow:!0,mounted:!1,loading:!1,lastpage:!1,roomIndex:0,rotate:90,pageIndex:1,poping:!1,popImage:"",learnmorelink:"",popmore:!1,timeAnimate:!1,ugcPage:!1,questionID:0,selectIndex:-1,questionNow:!0,questionLastID:5,selecting:!1,ugc:null,ugcsave:null,lmbl:Math.random()>.5,pop:!1,default:{x:0,animated:!1},question:questions[0],btnShow:!0,nickname:"",cdname:!0},computed:{room:function e(){return"room"}},watch:{questionID:function e(t,i){}},methods:{checkname:function e(){return""===this.nickname?alert("请输入你的名字"):this.nickname.gblen()>16||this.nickname.gblen()<2?alert("请输入16个英文字符,8个中文字符以内的名字"):this.cdname=!1},start:function e(){if(this.pageIndex=2,!this.$children[0].playing)return this.$children[0].change()},go:function e(){return this.pop=!1,this.lmbl?window.location.href="https://activity.zhihu.com/campaign/wow/badges/1":window.location.href="https://activity.zhihu.com/campaign/wow/badges/2"},getBadge:function e(){return this.pop=!0},getUGC:function e(){return this.ugcPage=!0,ugc.save()},closeUGC:function e(){return this.ugcPage=!1,ugc.hide()},over:function e(t){return ugc=new UGC({el:"ugc",name:t}),this.pageIndex=3,console.log(t)},selectItem:function e(t){var i=this;return!this.selecting&&(this.selecting=!0,this.selectIndex=t,setTimeout(function(){var e,n;return null!=cacheAnswer.list[t].id?(e=cacheAnswer.list[t].id,i.question=questions[e-1],cacheAnswer=cacheAnswer.list[t],i.questionID++):(n=cacheAnswer.list[t].name,console.log(cacheAnswer.list[t]),i.over(n)),i.selectIndex=-1,i.selecting=!1},500))},end:function e(t){return this.default.animated=!1}},mounted:function e(t,i){return this.mounted=!0}})},loadWechatConfig=function e(){var t,i,n;n=encodeURIComponent(window.location.href.split("#")[0]),t=document.createElement("script"),t.src="//api.giccoo.com/api/config?url="+n,i=document.getElementsByTagName("script")[0],i.parentNode.insertBefore(t,i)},$_GET=function(){var e,t,i,n,a,s,o;if(o=window.document.location.href.toString(),s=o.split("?"),"string"==typeof s[1]){for(s=s[1].split("&"),e={},console.log(s),n=0,a=s.length;n<a;n++)t=s[n],i=t.split("="),e[i[0]]=i[1];return e}return{}}(),IsPC=function e(){var t,i,n,a;for(n=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=!0,a=0;a<t.length;){if(n.indexOf(t[a])>0){i=!1;break}a++}return i};