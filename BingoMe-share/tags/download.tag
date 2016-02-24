
<download>
  <div class="download">
    <div if="{system == 'ios'}" onclick="{showQR}" class="ios"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/ios-download.png"/></div>
    <div if="{system == 'android'}" class="andriod">
      <p>安卓正在紧张开发中...</p>
    </div>
    <div if="{system == 'other'}" class="other">
      <p>暂时只支持 iOS 和 Andriod</p>
    </div>
  </div>
  <div if="{qrcode}" class="qrcode fadeIn animated">
    <div onclick="{closeQR}" class="close"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/icon-close.png"/></div>
    <div class="image"><img src="http://disk.giccoo.com/projects/BingoMe-share/img/qrcode.png"/></div>
    <div class="text">
      <p>想知道答案在哪吗?<br/>快来扫描二维码进行下载吧!</p>
    </div>
  </div>
  <script>
    var self = this
    download = this
    self.system = "ios"
    self.qrcode = false
    //- $(self.root).addClass("download")
    var ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) {
    	self.system = "ios"
    } else if (/android/.test(ua)) {
    	self.system = "android"
    } else {
    	self.system = "other"
    }
    showQR() {
    	self.qrcode = true
    	self.update()
    }
    closeQR() {
    	self.qrcode = false
    	self.update()
    }
  </script>
</download>