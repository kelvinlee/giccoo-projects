
<begin>
  <div show="{firstpageShow}" class="firstpage {firstpageClass}">
    <div class="content">
      <div class="cp">
        <div class="cp-1 animated fadeInLeft delay-1"><img data-layzr="/Yili-Eat-World/img/cp-1-1.png"/>
          <div class="cp-2 animated fadeInLeft delay-3"><img data-layzr="/Yili-Eat-World/img/cp-1-2.png"/></div>
        </div>
        <div class="cp-4 animated fadeInRight delay-20"><img data-layzr="/Yili-Eat-World/img/cp-1-4.png"/></div>
        <div class="cp-w animated fadeInRight delay-15"><img data-layzr="/Yili-Eat-World/img/stomach.png"/></div>
      </div>
      <div class="items animated fadeIn delay-18">
        <div class="item animated fadeIn item-1 delay-21"><img data-layzr="/Yili-Eat-World/img/icon-p1-1.png"/></div>
        <div class="item animated fadeIn item-2 delay-22"><img data-layzr="/Yili-Eat-World/img/icon-p1-2.png"/></div>
        <div class="item animated fadeIn item-3 delay-23"><img data-layzr="/Yili-Eat-World/img/icon-p1-3.png"/></div>
        <div class="item animated fadeIn item-4 delay-24"><img data-layzr="/Yili-Eat-World/img/icon-p1-4.png"/></div>
        <div class="item animated fadeIn item-5 delay-25"><img data-layzr="/Yili-Eat-World/img/icon-p1-5.png"/></div>
        <div class="item animated fadeIn item-6 delay-26"><img data-layzr="/Yili-Eat-World/img/icon-p1-6.png"/></div>
      </div>
      <div onclick="{nextPage}" class="button animated fadeInUp delay-25"><img data-layzr="/Yili-Eat-World/img/cp-1-5.png"/>
        <div class="note animated fadeInRight delay-30"><img data-layzr="/Yili-Eat-World/img/cp-1-6.png"/></div>
      </div>
    </div>
  </div>
  <div show="{notepageShow}" class="notepage {notepageClass}">
    <div class="content">
      <div class="cp">
        <div class="cp-1 animated fadeInDown delay-5"><img data-layzr="/Yili-Eat-World/img/cp-2-1.png"/>
          <div class="cp-2 animated fadeInLeft delay-6"><img data-layzr="/Yili-Eat-World/img/cp-2-7.png"/></div>
        </div>
        <div class="cp-3 animated fadeInLeft delay-8"><img data-layzr="/Yili-Eat-World/img/cp-2-2.png"/>
          <div class="cp-4 animated fadeInLeft delay-10"><img data-layzr="/Yili-Eat-World/img/cp-2-3.png"/></div>
          <div class="cp-5 animated fadeInLeft delay-12"><img data-layzr="/Yili-Eat-World/img/cp-2-4.png"/></div>
        </div>
        <div class="cp-w animated fadeInRight delay-15"><img data-layzr="/Yili-Eat-World/img/stomach.png"/></div>
      </div>
      <div class="items animated fadeIn delay-18">
        <div class="item animated fadeIn item-1 delay-21"><img data-layzr="/Yili-Eat-World/img/icon-p1-1.png"/></div>
        <div class="item animated fadeIn item-2 delay-22"><img data-layzr="/Yili-Eat-World/img/icon-p1-2.png"/></div>
        <div class="item animated fadeIn item-3 delay-23"><img data-layzr="/Yili-Eat-World/img/icon-p1-3.png"/></div>
        <div class="item animated fadeIn item-4 delay-24"><img data-layzr="/Yili-Eat-World/img/icon-p1-4.png"/></div>
        <div class="item animated fadeIn item-5 delay-25"><img data-layzr="/Yili-Eat-World/img/icon-p1-5.png"/></div>
        <div class="item animated fadeIn item-6 delay-26"><img data-layzr="/Yili-Eat-World/img/icon-p1-6.png"/></div>
      </div>
      <div onclick="{readyGame}" class="button animated fadeInUp delay-17"><img data-layzr="/Yili-Eat-World/img/cp-2-5.png"/>
        <div class="note animated fadeInRight delay-20"><img data-layzr="/Yili-Eat-World/img/cp-2-6.png"/></div>
      </div>
    </div>
  </div>
  <script>
    var self = this
    this.firstpageClass = ""
    this.firstpageShow = true
    this.notepageClass = ""
    this.notepageShow = false
    this.ready = false
    nextPage() {
    	this.notepageShow = true
    	this.firstpageClass = "animated fadeOut"
    	this.notepageClass = "animated fadeIn"
    	setTimeout(function(){
    		this.notepageClass = ""
    		self.firstpageShow = false
    		self.update()
    	},600)
    }
    readyGame() {
    	if (this.ready) {return false}
    	this.notepageClass = "animated fadeOut"
    	this.ready = true
    	setTimeout(function(){
    		self.root.className += "hide"
    		self.notepageShow = false
    		$(".page.game").removeClass("hide")
    		setTimeout(function(){
    			Store.game.build()
    		},500)
    		self.update()
    	},600)
    }
  </script>
</begin>