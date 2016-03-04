
<pages>
  <!-- - var images = "img"-->
  <div class="page info-page on">
    <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"/></div>
    <div class="text">
      <h3>活动规则</h3>
      <p>本次知识竞赛设最佳团队奖、最佳组织奖、最佳个人奖三类。</p>
      <p>最佳团队奖：得分前五的公司团队获此殊荣，由主办、承办、赞助单位一起颁发奖杯。</p>
      <p>最佳组织奖：参与人数前五的公司团队获此殊荣，由主办、承办、赞助单位一起颁发奖杯。</p>
      <p>最佳个人奖：一等奖5名；二等奖10名；三等奖50名。优秀奖200名。获奖者由《中国保险报》微信公众账号后台在优秀答卷中抽取产生。纪念奖若干名，奖品待定。</p>
    </div>
    <div class="btn-join"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-start.png"/></div>
  </div>
  <div class="page note-page">
    <div class="slogan"><img data-src="http://disk.giccoo.com/projects/qa/img/slogan.png"/></div>
    <div class="text">
      <h3>主办单位：</h3>
      <p>中国保险监督管理委员会保险消费者权益保护局</p>
      <p>《中国保险报》</p>
      <h3>协办单位：</h3>
      <p><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-1.png"/></span><span class="companylogo"><img data-src="http://disk.giccoo.com/projects/qa/img/company-2.png"/></span></p>
    </div>
    <div class="btns">
      <div class="btn btn-company"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-company.png"/>
        <div class="p"><img data-src="http://disk.giccoo.com/projects/qa/img/p-1.png"/></div>
      </div>
      <div class="btn btn-personal"><img data-src="http://disk.giccoo.com/projects/qa/img/btn-personal.png"/>
        <div class="p p-2"><img data-src="http://disk.giccoo.com/projects/qa/img/p-2.png"/></div>
      </div>
    </div>
  </div>
  <div class="page finished-page">
    <div class="content">
      <div class="bg fadeIn animated"><img src="http://disk.giccoo.com/projects/qa/img/over-bg.png"/></div>
      <h2>恭喜你!</h2>
      <p>保险知识竞赛正确率</p>
      <p>超过了 <span id="nums">0</span>% 的网友</p>
      <div onclick="showShare()" class="btn-share"><img src="http://disk.giccoo.com/projects/qa/img/btn-share.png"/></div>
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
    this.qrcode = QRCODE
    this.on("mount",function(){
    	loadStart()
    })
  </script>
</pages>