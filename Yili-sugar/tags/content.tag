
<content>
  <div show="{!other &amp;&amp; !pop}" class="page-content">
    <div class="logo"><img src="/Yili-sugar/img/logo.png"/></div>
    <div class="content-page"></div>
    <div class="bg zoomIn animated delay-9"><img data-layzr="/Yili-sugar/img/sugar.png"/></div>
    <div class="cp">
      <div class="content">
        <div class="bottle fadeInDown animated delay-5"><img data-layzr="/Yili-sugar/img/bottle.png"/></div>
        <div class="cp-note fadeInDown animated delay-7"><img data-layzr="/Yili-sugar/img/cp-1-1.png"/></div>
        <div onclick="{selectPage(1)}" class="btn btn-1"></div>
        <div onclick="{selectPage(2)}" class="btn btn-2"></div>
        <div onclick="{selectPage(3)}" class="btn btn-3"></div>
        <div onclick="{selectPage(4)}" class="btn btn-4"></div>
      </div>
      <div class="animated zoomIn animated cp-1 delay-12"><img data-layzr="/Yili-sugar/img/cp-2-1.png"/></div>
      <div class="animated zoomIn animated cp-2 delay-14"><img data-layzr="/Yili-sugar/img/cp-2-2.png"/></div>
      <div class="animated zoomIn animated cp-3 delay-16"><img data-layzr="/Yili-sugar/img/cp-2-3.png"/></div>
      <div class="animated zoomIn animated cp-4 delay-18"><img data-layzr="/Yili-sugar/img/cp-2-4.png"/></div>
    </div>
  </div>
  <div if="{other}" class="page-other fadeIn animated">
    <div class="logo"><img src="/Yili-sugar/img/logo.png"/></div>
    <div class="ad fadeInDown animated delay-5"><img src="/Yili-sugar/img/ad.png"/></div>
    <div onclick="{back}" class="back fadeInDown animated delay-7"><img src="/Yili-sugar/img/back.png"/></div>
    <div class="banner fadeInDown animated delay-9"><img src="/Yili-sugar/img/banner.png"/></div>
    <div if="{otherPage == 1}" class="other-content fadeIn animated delay-14 o-1"><img data-src="/Yili-sugar/img/cp-3-1.jpg"/><img data-src="/Yili-sugar/img/cp-3-2.jpg"/><img data-src="/Yili-sugar/img/cp-3-3.jpg"/><img data-src="/Yili-sugar/img/cp-3-4.jpg"/><img data-src="/Yili-sugar/img/cp-3-5.jpg"/><img data-src="/Yili-sugar/img/cp-3-6.jpg"/><img data-src="/Yili-sugar/img/cp-3-7.jpg"/>
    </div>
    <div if="{otherPage == 3}" class="other-content fadeIn animated delay-14 o-3"><img data-src="/Yili-sugar/img/cp-4-2.png"/>
      <div class="manhua"><img data-src="/Yili-sugar/img/cp-4-1.jpg"/></div>
    </div>
    <div if="{otherPage == 4}" class="other-content fadeIn animated delay-14 o-4"><img data-src="/Yili-sugar/img/cp-5-1.jpg"/><img data-src="/Yili-sugar/img/cp-5-2.jpg"/><img data-src="/Yili-sugar/img/cp-5-3.jpg"/><img data-src="/Yili-sugar/img/cp-5-4.jpg"/><img data-src="/Yili-sugar/img/cp-5-5.jpg"/><img data-src="/Yili-sugar/img/cp-5-6.jpg"/><img data-src="/Yili-sugar/img/cp-5-7.jpg"/>
    </div>
    <div class="over fadeIn animated delay-11"><img data-src="/Yili-sugar/img/over.png"/></div>
    <div class="share-list fadeIn animated delay-11">
      <shareicon icons="wechat,weibo,douban,qzone" site="Yili-sugar" title="糖CUT派对邀你一起HIGH,现场各种高逼格小礼物满足你N型人格！" url="local" pic="http://disk.giccoo.com/projects/Yili-sugar/img/share-pc.jpg"></shareicon>
    </div>
    <div onclick="{backTop}" class="backTop fadeIn animated delay-11"><img data-src="/Yili-sugar/img/back-end.png"/></div>
  </div>
  <div if="{pop}" class="pop fadeIn animated">
    <div class="logo"><img src="/Yili-sugar/img/logo.png"/></div>
    <div onclick="{back}" class="pop-content slideInDown animated delay-7 duration-10"><img data-src="/Yili-sugar/img/pop.jpg"/></div>
  </div>
  <div show="{false}" class="loadlist"><img data-layzr="/Yili-sugar/img/ad.png"/><img data-layzr="/Yili-sugar/img/back.png"/><img data-layzr="/Yili-sugar/img/banner.png"/></div>
  <script>
    var self = this
    this.other = false
    this.pop = false
    this.otherPage = 0
    selectPage(p) {
    	return function() {
    		if (p == 2) {
    			console.log(p)
    			self.pop = true
    			self.update()
    			setTimeout(function(){var layzr = new Layzr({selector: '[data-src]',attr:'data-src'})},10)
    			return false
    		}
    		self.other = true
    		self.otherPage = p
    		self.update()
    		setTimeout(function(){var layzr = new Layzr({selector: '[data-src]',attr:'data-src'})},10)
    	}
    }
    backTop() {
    	//- $(".page-other",self.root)[0].scrollTop = 0
    	self.back()
    }
    back() {
    	self.pop = false
    	self.other = false
    	self.otherPage = 0
    	self.update()
    }
  </script>
</content>