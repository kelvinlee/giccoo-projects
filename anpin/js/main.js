
$(document).ready(function load (){

	checkNum()

	var nowNum=0


	function checkNum(){
		$.get("http://api.giccoo.com/count/get/jiaomu1",function(msg){
				if (msg.recode == 200) {
					//console.log("update success", msg.info)
					//alert(msg.info[0].count)
					nowNum=msg.info[0].count
					setText()
				}else{
					//alert("get faild")
				}
		})
	}

	function setText(){
		$("#likeNum").text(parseInt(nowNum)+"人喜欢");
	}

	$("#btn").click(function(){
		window.location.href="http://www.lancome.com.cn/product/LAN00436.html";
	})

	var iflike=0

	$("#like").click(function(){
		$("#like2").css({"display":"block"});
		if (iflike==0) {
			//这里反馈

			//=======
			$.post("http://api.giccoo.com/count/update", {id: "jiaomu1"},function(msg){
				if (msg.recode == 200) {
					//alert("update success")
					nowNum++
					setText()
				}else{
					//alert("update faild")
				}
			})
			//=======
		};

		iflike=1

	})

});