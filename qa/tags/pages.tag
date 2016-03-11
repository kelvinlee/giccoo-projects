
<pages>
  <!-- - var images = "img"-->
  <div class="page info-page on">
    <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"/></div>
    <div class="text">
      <h3>主办单位：</h3>
      <p>中国保监会保险消费者权益保护局</p>
      <h3>承办单位：</h3>
      <p>中国保险报业股份有限公司</p>
      <h3 if="{!ad}">协办单位：</h3>
      <p if="{!ad}"><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-2.png"/></span><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-1.png"/></span></p>
    </div>
    <div class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-start.png"/></div>
  </div>
  <div class="page select-page">
    <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"/></div>
    <div class="text">
      <h3>活动规则</h3>
      <p>第一步：选择分组。</p>
      <p>如果您是保险消费者，请选“保险消费者组”；如果您是保险从业者，请选“保险从业者组”</p>
      <p>第二步：参与答题。</p>
      <p>您将看到10道单项选择题，答完上一题才能进入下一题。</p>
      <h3>奖项设置</h3>
      <p>1.最佳团队奖：平均成绩前5名的公司团队。</p>
      <p>2.最佳组织奖：参与人数前5名的公司团队。</p>
      <p>3.最佳个人奖（针对消费者）：一等奖5名；二等奖10名；三等奖50名。优秀奖200名。</p>
    </div>
    <div class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-go.png"/></div>
  </div>
  <div class="page note-page">
    <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"/></div>
    <div class="text">
      <h3>请选择您的身份：</h3>
    </div>
    <div class="btns">
      <div onclick="{selectPage1}" class="btn btn-company {on: selectCOMPANY}"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-company.png"/>
        <div class="p">
          <div class="off"><img data-src="http://disk.giccoo.com/projects/qa/img/p-1-off.png"/></div><img data-src="http://disk.giccoo.com/projects/qa/img/p-1.png"/>
        </div>
      </div>
      <div onclick="{selectPage2}" class="btn btn-personal {on: selectPERSONAL}"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-personal.png"/>
        <div class="p p-2">
          <div class="off"><img data-src="http://disk.giccoo.com/projects/qa/img/p-2-off.png"/></div><img data-src="http://disk.giccoo.com/projects/qa/img/p-2.png"/>
        </div>
      </div>
    </div>
    <div onclick="{GoNext}" class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-begin.png"/></div>
  </div>
  <div class="page finished-page">
    <div class="content">
      <div class="bg fadeIn animated"><img src="http://disk.giccoo.com/projects/qa/img/over-bg.png"/></div>
      <div class="over"><img src="http://disk.giccoo.com/projects/qa/img/over-1.png"/></div>
      <h2>恭喜你!</h2>
      <p>保险知识竞赛正确率</p>
      <p>超过了 <span id="nums">0</span>% 的网友</p>
      <p>获奖结果于3月22日公布，敬请关注！</p>
      <div onclick="showShare()" class="btn-share"><img src="http://disk.giccoo.com/projects/qa/img/btn-share.png"/></div><a if="{!ad}" href="{jplink}" class="btn-jiang"><img src="http://disk.giccoo.com/projects/qa/img/btn-jp.png"/></a>
    </div>
    <div onclick="hideShare()" class="share-box fadeIn animated"><img src="http://disk.giccoo.com/projects/qa/img/share-note.png"/></div>
  </div>
  <div class="pop focus-page fadeIn animated">
    <div class="box">
      <div class="qcode"><img data-src="{qrcode}"/></div>
      <div class="note-text">
        <p>请使用微信打开此页面.</p>
        <p>长按二维码图片进行关注.</p>
        <p>请先关注我们的微信公众账号,然后参与答题.</p>
      </div>
      <div onclick="hideFocus()" class="close"><img data-src="http://disk.giccoo.com/projects/qa/img/icon-close.png"/></div>
    </div>
  </div>
  <script>
    var self = this
    $(this.root).addClass("pages")
    this.qrcode = QRCODE
    this.ad = NOAD
    this.jplink = _jplink
    this.selectCOMPANY = false
    this.selectPERSONAL = false
    GoNext() {
    	if (subscribe == 0) {return showFocus()}
    	//- 
    	if (this.selectCOMPANY) {
    		$(".pop.select-company").addClass("on")
    	}else if (this.selectPERSONAL) {
    		$(".page.note-page").removeClass("on")
    		$(".page.question-page").addClass("on")
    	}else{
    		SendNote("请选择从业组,或消费组")
    	}
    }
    selectPage1() {
    	this.selectCOMPANY = true
    	this.selectPERSONAL = false
    }
    selectPage2() {
    	this.selectCOMPANY = false
    	this.selectPERSONAL = true
    }
    this.on("mount",function(){
    	loadStart()
    })
  </script>
</pages>