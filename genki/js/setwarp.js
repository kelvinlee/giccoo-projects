var mWidth=420//=====字符串宽
var userTstyle={
		fill:'#006837',
		fontSize: 22,
		align: 'left',
	}
var userSongstyle={
		fill:'#000000',
		fontSize: 18,
		align: 'left',
	}
var userLikeStyle={
		fill:'#ffffff',
		fontSize: 19,
		align: 'right',
	}
var messageA=[]
var nowHeight=1100+155
function message(_text,_song,_like,_liked,_id){
	_song=""
	var a_message=new PIXI.Container()
	var messageBG=new PIXI.Graphics()
	var messageIco=new pSprite("img/message1.png")
	var messageArrow=new pSprite("img/message-arrow.png")

	var btnLike=new pSprite("img/btn-like.png")


	var userT=new PIXI.Text(_text,userTstyle)
	var userSong=new PIXI.Text(_song,userSongstyle)

	var userIco=new pSprite("//image.giccoo.com/projects/genki/img/ico"+_id%38+".png")
	userIco.position.set(30,0)

	var userLikeT=new PIXI.Text(_like,userLikeStyle)

	a_message.addChild(messageBG,messageArrow,userT,userSong,messageIco,btnLike,userIco,userLikeT)
	messageArrow.x=3
	part4.addChild(a_message)


	


	userT.text=addReturn(_text)
	userT.position.set(175-20,20)

	messageBG.position.set(129,6)
	messageBG.lineStyle(3, 0x006838,1,0);
	messageBG.beginFill(0xffffff)
	messageBG.drawRoundedRect(0,0,mWidth+26*2,userT.height+16+50+7,20)

	messageIco.y=userT.y+userT.height
	userSong.y=userT.y+userT.height+15
	userSong.x=225
	btnLike.x=504-20
	btnLike.y=userT.y+userT.height+63-50

	userLikeT.y=userT.y+userT.height+69-50
	userLikeT.x=570-userLikeT.width/2-20
	
	a_message.y=nowHeight//============改位置
	nowHeight+=userT.height+130-40

	if(_liked==true){
		btnLike.visible=false//如果liked了 visible=false 
	}
	  
	btnLike.interactive=true
	btnLike.tap=goLike

	var aMessage=[a_message,btnLike,userLikeT,_id]
	messageA.push(aMessage)

}
////////////////////////////////////////////////////////////////////////////////==like

function goLike(_e){
	console.log(_e.target)
	for (var i = 0; i < messageA.length; i++) {
		if(_e.target==messageA[i][1]){
			console.log(messageA[i][3])
			messageA[i][2].text=parseInt(messageA[i][2].text)+1
			console.log("该提交点赞了！")
			likeMessage(messageA[i][3])
		}
	};
	_e.target.visible=false
	_e.target.interactive=false
	
}



////////////////////////////////////////////////////////////////////////////////==换行

var testLengthT=new PIXI.Text()
function addReturn(_text){
	var _tA=[]
	testLengthT.text=_text
	testLengthT.style=userTstyle
	//console.log(testLengthT.width)
	var tempT=""
	while(testLengthT.width>mWidth){
		tempT=_text
		while(testLengthT.width>mWidth){
			tempT=tempT.slice(0,tempT.length-1)
			testLengthT.text=tempT
		}
		_tA.push(tempT)
		_text=_text.slice(tempT.length)
		testLengthT.text=_text
	}
	_tA.push(_text)
	
	var returnT=_tA.join("\n")
	//console.log(returnT)
	return(returnT)
}

////////////////////////////////////////////////////////////////////////////////==用户表单
var userMessage=new PIXI.Container()
var userHint=new PIXI.Text("留下手机号和场次，就有机会获得惊喜\n(手机号不会被显示与泄露)",{
		fill:'#006837',
		fontSize: 22,
		align: 'center',
	})
function setUserForm(){
	//var userMessage=new PIXI.Container()
	var messageBG=new PIXI.Graphics()
	var messageBG2=new PIXI.Graphics()
	var messageIco=new pSprite("img/message1_.png")
	var messageArrow=new pSprite("img/message-arrow.png")

	var btnLike=new pSprite("img/btn-like.png")


	var userT=new PIXI.Text("说出你的元气宣言",userTstyle)
	var userSong=new PIXI.Text("",userSongstyle)//在这里写下你最爱的歌曲

	var userIco=new pSprite("img/ico"+parseInt(Math.random()*10)+".png")
	userIco.position.set(30,0)

	var userLikeT=new PIXI.Text("提交",userLikeStyle)

	userMessage.addChild(messageBG,messageArrow,userT,userSong,messageIco,btnLike,userIco,userLikeT,userHint)//messageBG2,
	messageArrow.x=3
	userHint.y=190
	userHint.x=320-userHint.width/2+50
	//part4.addChild(a_message)

	pStage.addChild(userMessage)
	


	userT.text=addReturn("\n\n\n")
	userT.position.set(175,20)

	messageBG.position.set(129,6)
	messageBG.lineStyle(3, 0x006838,1,0);
	messageBG.beginFill(0xffffff)
	messageBG.drawRoundedRect(0,0,mWidth+26*2,userT.height+16+50+7,20)

	messageBG2.position.set(129,109+userT.height-24)
	//messageBG2.lineStyle(4, 0x006838,1,0);
	messageBG2.beginFill(0xffffff)
	messageBG2.drawRoundedRect(0,0,mWidth+46*2-115,35,20)

	messageIco.y=userT.y+userT.height
	userSong.y=userT.y+userT.height+15+57
	userSong.x=225
	btnLike.x=504-20
	btnLike.y=userT.y+userT.height+63-50

	userLikeT.y=userT.y+userT.height+69-50
	userLikeT.x=570-userLikeT.width/2-15-20
	console.log("stageH",stageH)

	TweenMax.set($("#userText"),{y:(stageH-237+20)/640*screenW})
	TweenMax.set($("#songText"),{y:(stageH-56)/640*screenW})
	userMessage.y=stageH-237-40//nowHeight//============改位置
	//nowHeight+=userT.height+130

	//btnLike.visible=_liked  如果liked了 visible=false 
	btnLike.alpha=0
	btnLike.interactive=true
	btnLike.tap=goSubmit//=====================这里改成提交

}
function setUserForm2(){




	TweenMax.set($("#userText"),{y:(stageH-237+20)/640*screenW})
	TweenMax.set($("#songText"),{y:(stageH-56)/640*screenW})
	userMessage.y=stageH-237-40//nowHeight//============改位置


}
var ifInputing=0
$("#UserTextarea1").click(function(){
	if($("#UserTextarea1")[0].innerHTML=="说出你的元气宣言"){
		$("#UserTextarea1")[0].innerHTML=""
	}
	//ifInputing=1
})
$("#UserTextarea1").blur(function(){
	if($("#UserTextarea1")[0].innerHTML==""||$("#UserTextarea1")[0].innerHTML==null){
		$("#UserTextarea1")[0].innerHTML="说出你的元气宣言"
	}
})
$("#UserTextarea2").click(function(){
	if($("#UserTextarea2")[0].value=="在这里留下手机号"){
		$("#UserTextarea2")[0].value=""
	}
	//ifInputing=1
})
$("#UserTextarea2").blur(function(){
	if($("#UserTextarea2")[0].value==""){
		$("#UserTextarea2")[0].value="在这里留下手机号"
	}
})
function resetUserForm(){//====pStage.touchstart
	//console.log("-----------------------------")
	if($("#UserTextarea1")[0].innerHTML==""||$("#UserTextarea1")[0].innerHTML==null){
		$("#UserTextarea1")[0].innerHTML="说出你的元气宣言"
	}
	if($("#UserTextarea2")[0].value==""){
		$("#UserTextarea2")[0].value="在这里留下手机号"
	}
	ifInputing=0
}
$("#btnSubmit").click(function(){
	goSubmit()
})
function goSubmit(){
	//$("#UserTextarea1")[0].innerHTML=""
	console.log("提交表单",$("#UserTextarea1").val())
	if($("#UserTextarea1").val()==""||$("#UserTextarea1").val()==null||$("#UserTextarea1").val()=="说出你的元气宣言"){
		alert("请先填写你的元气宣言")
	}else{
		sendMessage($("#UserTextarea1").val(),$("#UserTextarea2")[0].value,$("#userSelector")[0].value)//$("#UserTextarea2")[0].value
		//$("#userSelector")[0].value
		ifSubmit=1
	}

	

}