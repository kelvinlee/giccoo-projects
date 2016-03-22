
riot.tag2('register', '<form onsubmit="{submit}" class="form"><yield></yield> <div class="form-grounp"> <label for="name">姓名</label> <input id="name" type="text" name="name"> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="adr">联系地址</label> <input id="adr" type="text" name="adr"> </div> <div class="form-btn"> <button type="submit" class="submit"><img src="http://disk.giccoo.com/projects/volvo_xc90/img/submit.png"></button> </div> </form>', '', '', function(opts) {
    var self = this

    this.submit = function() {
    	var data = $("form",this.root).serializeArray()

    	if ( $("[name=name]",this.root).val().length < 1 || $("[name=name]",this.root).val() == "") {
    		alert("姓名不能为空")
    		return false
    	}
    	if ( $("[name=mobile]",this.root).val().length < 1 || $("[name=mobile]",this.root).val() == "") {
    		alert("手机号码不能为空")
    		return false
    	}
    	if ( $("[name=adr]",this.root).val().length < 1 || $("[name=adr]",this.root).val() == "") {
    		alert("联系地址不能为空")
    		return false
    	}
    	$.post(opts.action,data,function(msg){

    		if (msg.recode == 200) {

    			SendNote("注册成功")
    		}else{

    			SendNote(msg.reason)
    		}
    	})
    	return false
    }.bind(this)
}, '{ }');