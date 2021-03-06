
<select-list>
  <div class="logo"><img src="http://disk.giccoo.com/projects/huaweiG7/img/logo.png"/></div>
  <div class="phone"><img src="http://disk.giccoo.com/projects/huaweiG7/img/phone.png"/></div>
  <div show="{pageCup}" class="cup-select fadeIn animated">
    <div class="notetitle">左右滑动，来杯酒，<br/>测试下您的性格类型？</div>
    <div class="sliders">
      <slider callback="{sliderFun}">
        <div each="{cocktail in parent.cocktails}" class="slide">
          <div class="cup"><img src="{cocktail.thumb}"/><span class="winename">{cocktail.name}</span></div>
        </div>
      </slider>
      <div onclick="{setSilderNumLeft}" class="left"><img src="http://disk.giccoo.com/projects/huaweiG7/img/left.png"/></div>
      <div onclick="{setSilderNumRight}" class="right"><img src="http://disk.giccoo.com/projects/huaweiG7/img/right.png"/></div>
    </div>
    <div onclick="{selectCup}" class="select"><img src="http://disk.giccoo.com/projects/huaweiG7/img/select-btn.png"/></div>
  </div>
  <div show="{pagePop}" class="pop bounceInDown animated">
    <div class="bg"><img src="http://disk.giccoo.com/projects/huaweiG7/img/pop-bg.png"/>
      <div class="answer"><img src="{cocktails[n].answer}"/></div>
      <div onclick="{showVideos}" class="btn-video"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-video.png"/></div>
    </div>
    <div onclick="{showShare}" class="share-btn delay-10 fadeIn animated"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-share.png"/></div>
  </div>
  <div show="{pageVideos}" class="videos fadeIn animated">
    <div class="video-screen">
      <video if="{pageVideos &amp;&amp; v}" controls="true" src="{v.mp4}" width="620" height="340" poster="{v.thum}" webkit-playsinline="webkit-playsinline"></video>
      <div if="{!v}" class="video-no"> 
        <video width="620" height="340" controls="true" poster="http://disk.giccoo.com/projects/huaweiG7/img/video-thum.jpg" webkit-playsinline="webkit-playsinline"></video><span>即将上映</span>
      </div>
    </div>
    <div class="video-list">
      <div each="{ video in videos }" onclick="{parent.changeVideo(video)}" class="video-btn"></div>
    </div>
    <div class="btns">
      <div onclick="{showShare}" class="share-btn"><img src="http://disk.giccoo.com/projects/huaweiG7/img/btn-share.png"/></div>
      <div onclick="{backHome}" class="back-home"><img src="http://disk.giccoo.com/projects/huaweiG7/img/back-home.png"/></div>
    </div>
  </div>
  <div show="{pageShare}" onclick="{hideShare}" class="share-note fadeIn animated"><img src="/libs/img/wechat.png"/></div>
  <script>
    var self = this
    this.pageCup = true
    this.pagePop = false
    this.pageVideos = false
    this.pageShare = false
    //- http://disk.giccoo.com/projects/huaweiG7/img/1.mp4
    this.videos = [{mp4:"http://t.douban.com/img/files/file-144698473774769.mp4",thum:"http://disk.giccoo.com/projects/huaweiG7/img/video-thum.jpg"},{mp4:"http://t.douban.com/img/files/file-1447135205917324.mp4",thum:"http://disk.giccoo.com/projects/huaweiG7/img/video-thum-2.jpg"},{mp4:"http://t.douban.com/img/files/file-14473882592476.mp4",thum:"http://disk.giccoo.com/projects/huaweiG7/img/video-thum-3.jpg"}]
    this.v = this.videos[0]
    this.n = 0
    this.cocktails = [
    	{name:"血腥玛丽",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-1.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-1.png",shareText:"一杯血腥玛丽竟然暴露了我的性格，你也来一杯？"},
    	{name:"玛格丽特",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-2.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-2.png",shareText:"此时你也在喝一杯马特利特，在想Ta吗？"},
    	{name:"红葡萄酒",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-3.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-3.png",shareText:"红葡萄变身性格分析师，敢来续杯么？"},
    	{name:"干马提尼",thumb:"http://disk.giccoo.com/projects/huaweiG7/img/cup-4.png",answer:"http://disk.giccoo.com/projects/huaweiG7/img/answer-4.png",shareText:"一杯酒，一种性格，你相信吗？"},
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
    	this.n = Math.abs(n)
    	this.update()
    }
    changeVideo(video) {
    	return function() {
    		self.v = video
    		self.update()
    	}
    }
    setSilderNumLeft() {
    	if (self.n < self.cocktails.length-1) {
    		self.tags.slider.setNumber(self.n+1)
    		self.tags.slider.setSlideNumber(0)
    	}
    }
    setSilderNumRight() {
    	if (self.n > 0) {
    		self.tags.slider.setNumber(self.n-1)
    		self.tags.slider.setSlideNumber(0)
    	}
    }
  </script>
</select-list>