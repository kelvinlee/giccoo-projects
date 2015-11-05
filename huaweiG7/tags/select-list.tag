
<select-list>
  <div class="logo"><img src="img/logo.png"/></div>
  <div class="phone"><img src="img/phone.png"/></div>
  <div show="{pageCup}" class="cup-select fadeIn animated">
    <div class="notetitle">左右滑动，来杯酒，<br/>测试下您的性格类型？</div>
    <div class="sliders">
      <slider callback="{sliderFun}">
        <div each="{cocktail in parent.cocktails}" class="slide">
          <div class="cup"><img src="{cocktail.thumb}"/><span class="winename">{cocktail.name}</span></div>
        </div>
      </slider>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div onclick="{selectCup}" class="select"><img src="img/select-btn.png"/></div>
  </div>
  <div show="{pagePop}" class="pop bounceInDown animated">
    <div class="bg"><img src="img/pop-bg.png"/>
      <div class="answer"><img src="{cocktails[n].answer}"/></div>
      <div onclick="{showVideos}" class="btn-video"><img src="img/btn-video.png"/></div>
    </div>
    <div onclick="{showShare}" class="share-btn delay-10 fadeIn animated"><img src="img/btn-share.png"/></div>
  </div>
  <div show="{pageVideos}" class="videos fadeIn animated">
    <div class="video-screen">
      <video control="true"></video>
    </div>
    <div class="video-list"></div>
    <div onclick="{backHome}" class="back-home"><img src="img/back-home.png"/></div>
  </div>
  <div show="{pageShare}" onclick="{hideShare}" class="share-note fadeIn animated"><img src="/libs/img/wechat.png"/></div>
  <script>
    var self = this
    this.pageCup = true
    this.pagePop = false
    this.pageVideos = false
    this.pageShare = false
    this.n = 0
    this.cocktails = [
    	{name:"血腥玛丽",thumb:"img/cup-1.png",answer:"img/answer-1.png",shareText:"此时你也在喝一杯马特利特，在想Ta吗？"},
    	{name:"玛格丽特",thumb:"img/cup-2.png",answer:"img/answer-2.png",shareText:"一杯血腥玛丽竟然暴露了我的性格，你也来一杯？"},
    	{name:"曼哈顿",thumb:"img/cup-3.png",answer:"img/answer-3.png",shareText:"红葡萄变身性格分析师，敢来续杯么？"},
    	{name:"干马提尼",thumb:"img/cup-4.png",answer:"img/answer-4.png",shareText:"一杯酒，一种性格，你相信吗？"},
    ]
    selectCup() {
    	self.pageCup = false
    	self.pagePop = true
    	self.pageVideos = false
    	self.pageShare = false
    	UpdateShare(self.cocktails[self.n].shareText)
    }
    showVideos() {
    	self.pageCup = false
    	self.pagePop = false
    	self.pageVideos = true
    	self.pageShare = false
    }
    backHome() {
    	//- 
    	self.pageCup = true
    	self.pagePop = false
    	self.pageVideos = false
    	self.pageShare = false
    	UpdateShare("树洞酒吧，喝杯酒，听首歌，看微电影，再来测测你的个性...")
    }
    showShare() {
    	self.pageShare = true
    }
    hideShare() {
    	self.pageShare = false
    }
    sliderFun(n) {
    	//- console.log(Math.abs(n))
    	this.n = Math.abs(n)
    	this.update()
    }
  </script>
</select-list>