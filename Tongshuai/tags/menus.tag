
<menus>
  <div show="{!menu1 &amp;&amp; !menu2 &amp;&amp; !after}" class="menu-list">
    <ul>
      <li onclick="{showForm}" class="fadeInLeft animated delay-5"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/menu-1.png"/></li>
      <li onclick="{showInfo}" class="fadeInLeft animated delay-6"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/menu-2.png"/></li>
      <li class="fadeInLeft animated delay-7"><a href="http://www.tongshuai.com/" target="_blank"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/menu-3.png"/></a></li>
    </ul>
  </div>
  <div show="{menu1}" class="menu-item">
    <form action="http://api.giccoo.com/tongshuai/insert/" method="post" onsubmit="{submit}" class="form">
      <div class="form-grounp">
        <label for="username"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/form-username.png"/></label>
        <input id="username" type="text" name="username"/>
      </div>
      <div class="form-grounp">
        <label for="mobile"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/form-mobile.png"/></label>
        <input id="mobile" type="text" name="mobile"/>
      </div>
      <div class="form-btn">
        <button type="submit" class="submit"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/submit.png"/></button>
      </div>
      <div onclick="{hideForm}" class="back-icon"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/close.png"/></div>
    </form>
  </div>
  <div show="{menu2}" onclick="{hideInfo}" class="menu-item"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/info.png"/>
    <div class="back-icon"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/close.png"/></div>
  </div>
  <div show="{after}" onclick="{hideAfter}" class="menu-item"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/success.png"/>
    <div class="back-icon"><img data-layzr="http://disk.giccoo.com/projects/Tongshuai/img/close.png"/></div>
  </div>
  <script>
    var self = this
    this.root.className += " menu-items"
    this.menu1 = false
    this.menu2 = false
    //- this.after = true
    showForm() {
    	this.menu1 = true
    }
    showInfo() {
    	this.menu2 = true
    }
    hideForm() {
    	this.menu1 = false
    }
    hideInfo() {
    	this.menu2 = false
    }
    hideAfter() {
    	this.after = false
    }
    
    submit() {
    	var list = $("form",this.root).serializeArray()
    	if ( $("[name=username]",this.root).val().length < 1 || $("[name=username]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	var reg = /^1\d{10}$/
    	if (!reg.test($("[name=mobile]",this.root).val())) {
    		alert("手机号码格式不正确")
    		return false
    	}
    	$.post("http://api.giccoo.com/tongshuai/insert/",list,function(msg){
    		if (msg.recode == 200) {
    			alert("提交成功!")
    			self.menu1 = false
    			//- riot.route("/notes/"+wonShare)
    			self.after = true
    			self.update()
    			riot.route("/notes/"+wonShare)
    		}else if(msg.recode == 203){
    			alert(msg.reason)
    			self.menu1 = false
    			self.update()
    		}else{
    			alert(msg.reason)
    		}
    	})
    	return false
    }
  </script>
</menus>