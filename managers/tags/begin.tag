
<begin>
  <div show="{firstpageShow}" class="firstpage {firstpageClass}">
    <div class="content">
      <div class="background animated fadeInLeft duration-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/huabiao.png"/></div>
      <div class="dove animated fadeInRight duration-30 delay-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/dove.png"/></div>
      <div class="cp">
        <div class="cp-1 animated zoomIn duration-10 delay-10"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-1.png"/></div>
        <div class="cp-2 animated zoomIn duration-10 delay-15"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-2.png"/></div>
        <div class="cp-3 animated zoomIn duration-10 delay-20"><img data-layzr="http://disk.giccoo.com/projects/showman/img/cp-1-3.png"/></div>
        <div class="stars animated fadeIn delay-25">
          <div class="normal"><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-0 animated flash"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-1 animated hinge"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-2 animated rotateIn"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-3 animated rotateOut"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-4 animated flash"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-5 animated flash"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-6 animated hinge"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-7 animated rotateIn"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-8 animated rotateOut"/><img data-layzr="http://disk.giccoo.com/projects/showman/img/star.png" class="star star-9 animated flash"/>
          </div>
        </div>
      </div>
      <div onclick="{showNextPage}" class="btn animated bounceIn duration-10 delay-25"><img data-layzr="http://disk.giccoo.com/projects/showman/img/btn-1.png"/></div>
    </div>
  </div>
  <div show="{notepageShow}" class="notepage {notepageClass}">
    <div class="content">
      <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner.jpg"/></div>
      <div style="top:{toppx}px" class="text-content">
        <div class="text">
          <p>由《中国保险报》、中保网主办的“2014中国保险年度人物”评选活动正式启动。该项活动是保险文化建设的重要载体。评选的目的是大力宣传保险业先进人物践行社会主义核心价值观，以及保险监管核心价值理念、保险行业核心价值理念的先进精神和优秀事迹。该项评选活动已历八届，在保险业内外弘扬了正能量，产生了广泛的社会影响。此次活动主题词为“创新、服务、规范”，旨在更好地体现保险业锐意创新、服务大众的突出形象。</p>
          <p>评选标准</p>
          <p>    入围“2014中国保险年度人物”评选的候选人，须是认可保险行业核心价值理念，并在2014年度中对中国保险业发展起到促进、推动作用或在社会上产生广泛反响的重大事件中的代表人物。具体评选标准如下： </p>
          <p>1. 创新力 候选人在2014年的表现对保险业改革创新产生重要促进作用。</p>
          <p>2. 产业影响力 候选人在保险业具有重要影响力。</p>
          <p>3. 公众影响力 候选人对社会公众层面产生了重要影响。</p>
          <p>4. 前瞻性 候选人对保险业发展大势具有良好的把握能力，具有引领保险业发展潮流的战略思维。</p>
          <p>5. 社会责任感 候选人具有良好的社会形象，具有保险业的大爱精神。</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div class="hide-D"><img src="http://disk.giccoo.com/projects/showman/img/hide.png"/></div>
      </div>
      <div onclick="{GameStart}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/btn-2.png"/></div>
    </div>
  </div>
  <div show="{listpageShow}" class="listpage">
    <div class="content">
      <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner-last.png"/></div>
      <div style="top:{toppx2}px" class="list-content">
        <div class="note-note">
          <p>＊ 以下候选人按姓氏字母排序,点击字母快速定位。</p>
        </div>
        <div class="items">
          <div each="{userlist}" class="item {abc}">
            <div onclick="{parent.showInfo}" class="avatar"><img src="http://disk.giccoo.com/projects/showman/img/{avatar}.jpg"/></div>
            <div onclick="{parent.showInfo}" class="name">
              <p class="username">{name}</p>
              <p class="subtitle">{subtitle}</p>
            </div>
            <div onclick="{parent.vote(uid)}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/vote-btn.png"/></div>
          </div>
        </div>
      </div>
      <div style="top:{toppx2}px" class="abc-list"><span each="{abc in abclist}" onclick="{parent.scrollToAbc}">{abc}</span></div>
    </div>
  </div>
  <div show="{detailpageShow}" class="detailpage">
    <div class="content">
      <div class="banner"><img src="http://disk.giccoo.com/projects/showman/img/banner-last.png"/></div>
      <div onclick="{backlist}" class="back"><img src="http://disk.giccoo.com/projects/showman/img/back.png"/></div>
      <div if="{userinfo}" style="top:{toppx2+33}px" class="userinfo">
        <div class="info">
          <div class="avatar"><img src="http://disk.giccoo.com/projects/showman/img/avatar.jpg"/></div>
          <div class="user-name">
            <p class="usertitle">{userinfo.name}</p>
            <p class="subtitle">{userinfo.subtitle}</p>
            <p class="votes">得票: {userinfo.numbers}</p>
            <div onclick="{vote(userinfo.uid)}" class="btn"><img src="http://disk.giccoo.com/projects/showman/img/vote-btn.png"/></div>
          </div>
        </div>
        <div class="description">
          <p>{userinfo.description}</p>
        </div>
      </div>
    </div>
  </div>
  <div show="{focusUs}" class="focusUs">
    <div class="box">
      <div class="qcode"><img src="http://disk.giccoo.com/projects/showman/img/qrcode.jpg"/></div>
      <div class="note-text">
        <p>请使用微信打开此页面.</p>
        <p>长按二维码图片进行关注.</p>
        <p>请先关注我们的微信公众账号,然后参与投票.</p>
        <p>每人每天总计100票.</p>
        <p>对单个参评人最多每天投10票.</p>
      </div>
      <div onclick="{hideFocus}" class="close"><img src="http://disk.giccoo.com/projects/showman/img/icon-close.png"/></div>
    </div>
  </div>
  <script>
    var self = this
    self.firstpageShow = true
    self.notepageShow = false
    self.listpageShow = false
    self.detailpageShow = false
    self.focusUs = false
    self.userlist = userinfo
    self.userinfo = false
    self.abclist = []
    for (var i=0;i < self.userlist.length; i++) {
    	if (self.abclist.indexOf(self.userlist[i].abc) < 0) {
    		self.abclist.push(self.userlist[i].abc)
    	}
    }
    self.toppx = $("body").width()/640*370
    self.toppx2 = $("body").width()/640*398
    showNextPage() {
    	self.firstpageShow = false
    	self.notepageShow = true
    	self.update()
    }
    GameStart() {
    	self.listpageShow = true
    	self.notepageShow = false
    	self.update()
    }
    showInfo(evt) {
    	self.listpageShow = false
    	self.detailpageShow = true
    	self.userinfo = evt.item
    	self.update()
    }
    backlist() {
    	self.listpageShow = !false
    	self.detailpageShow = !true
    	self.update()
    }
    vote(uid) {
    	return function() {
    		console.log(uid)
    		if (openid != "") {
    			$.get("http://i.giccoo.com/showman/vote/to/"+uid,{openid: openid},function(msg){
    				if (msg.recode == 200) {
    					//- 发送 note
    					SendNote("投票成功啦!")
    					for (var i = self.userlist.length-1; i >= 0 ; i--) {
    						if (self.userlist[i].uid == uid) {
    							self.userlist[i].numbers++
    							self.update()
    							break
    						}
    					}
    				}else if (msg.recode == 222) {
    					self.focusUs = true
    					self.update()
    				}else{
    					//- 发送 Note
    					SendNote(msg.reason)
    				}
    			})
    		}else{
    			self.focusUs = true
    			self.update()
    		}
    	}
    }
    hideFocus() {
    	self.focusUs = false
    	self.update()
    }
    scrollToAbc(evt) {
    	var e = $("."+evt.item.abc,self.root).eq(0).offset()
    	var scrollTop = $(".list-content",self.root).scrollTop()
    	//- console.log(e.top + scrollTop - self.toppx2 - 22)
    	var temp = e.top + scrollTop - self.toppx2
    	$(".list-content",self.root).scrollTo(parseInt(temp))
    }
  </script>
</begin>