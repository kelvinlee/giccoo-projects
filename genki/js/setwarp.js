var mWidth=380//=====字符串宽
var userTstyle={
		fill:'#006837',
		fontSize: 22,
		align: 'left',
		// wordWrap:true,
		// wordWrapWidth:100
	}
var userSongstyle={
		fill:'#000000',
		fontSize: 18,
		align: 'left',
		// wordWrap:true,
		// wordWrapWidth:100
	}
var userLikeStyle={
		fill:'#ffffff',
		fontSize: 19,
		align: 'right',
		// wordWrap:true,
		// wordWrapWidth:100
	}
var messageA=[]
var nowHeight=1100
function message(_text,_song,_like,_liked,_id){
	var a_message=new PIXI.Container()
	var messageBG=new PIXI.Graphics()
	var messageIco=new pSprite("img/message1.png")
	var messageArrow=new pSprite("img/message-arrow.png")

	var btnLike=new pSprite("img/btn-like.png")


	var userT=new PIXI.Text(_text,userTstyle)
	var userSong=new PIXI.Text(_song,userSongstyle)

	var userIco=new pSprite("img/ico"+_id%10+".png")
	userIco.position.set(30,0)

	var userLikeT=new PIXI.Text(_like,userLikeStyle)

	a_message.addChild(messageBG,messageArrow,userT,userSong,messageIco,btnLike,userIco,userLikeT)
	messageArrow.x=3
	part4.addChild(a_message)


	


	userT.text=addReturn(_text)
	userT.position.set(175,20)

	messageBG.position.set(129,6)
	messageBG.lineStyle(4, 0x006838,1,0);
	messageBG.beginFill(0xffffff)
	messageBG.drawRoundedRect(0,0,mWidth+46*2,userT.height+16+50,20)

	messageIco.y=userT.y+userT.height
	userSong.y=userT.y+userT.height+15
	userSong.x=225
	btnLike.x=504
	btnLike.y=userT.y+userT.height+63

	userLikeT.y=userT.y+userT.height+69
	userLikeT.x=570-userLikeT.width/2
	
	a_message.y=nowHeight//============改位置
	nowHeight+=userT.height+130

	//btnLike.visible=_liked  如果liked了 visible=false 
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
	console.log(testLengthT.width)
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
	console.log(returnT)
	return(returnT)
}

////////////////////////////////////////////////////////////////////////////////==用户表单
var userMessage=new PIXI.Container()
function setUserForm(){
	//var userMessage=new PIXI.Container()
	var messageBG=new PIXI.Graphics()
	var messageBG2=new PIXI.Graphics()
	var messageIco=new pSprite("img/message1_.png")
	var messageArrow=new pSprite("img/message-arrow.png")

	var btnLike=new pSprite("img/btn-like.png")


	var userT=new PIXI.Text("我来说几句",userTstyle)
	var userSong=new PIXI.Text("",userSongstyle)//在这里写下你最爱的歌曲

	var userIco=new pSprite("img/ico"+parseInt(Math.random()*10)+".png")
	userIco.position.set(30,0)

	var userLikeT=new PIXI.Text("提交",userLikeStyle)

	userMessage.addChild(messageBG,messageBG2,messageArrow,userT,userSong,messageIco,btnLike,userIco,userLikeT)
	messageArrow.x=3
	//part4.addChild(a_message)

	pStage.addChild(userMessage)
	


	userT.text=addReturn("\n\n\n")
	userT.position.set(175,20)

	messageBG.position.set(129,6)
	messageBG.lineStyle(4, 0x006838,1,0);
	messageBG.beginFill(0xffffff)
	messageBG.drawRoundedRect(0,0,mWidth+46*2,userT.height+16+50,20)

	messageBG2.position.set(129,109+userT.height-24)
	//messageBG2.lineStyle(4, 0x006838,1,0);
	messageBG2.beginFill(0xffffff)
	messageBG2.drawRoundedRect(0,0,mWidth+46*2-115,35,20)

	messageIco.y=userT.y+userT.height
	userSong.y=userT.y+userT.height+15+57
	userSong.x=225
	btnLike.x=504
	btnLike.y=userT.y+userT.height+63

	userLikeT.y=userT.y+userT.height+69
	userLikeT.x=570-userLikeT.width/2-15
	console.log("stageH",stageH)

	TweenMax.set($("#userText"),{y:(stageH-237+20)/640*screenW})
	TweenMax.set($("#songText"),{y:(stageH-56)/640*screenW})
	userMessage.y=stageH-237//nowHeight//============改位置
	//nowHeight+=userT.height+130

	//btnLike.visible=_liked  如果liked了 visible=false 
	btnLike.alpha=0
	btnLike.interactive=true
	btnLike.tap=goSubmit//=====================这里改成提交

}
var ifInputing=0
$("#UserTextarea1").click(function(){
	if($("#UserTextarea1")[0].innerHTML=="我来说几句"){
		$("#UserTextarea1")[0].innerHTML=""
	}
	ifInputing=1
})
$("#UserTextarea1").blur(function(){
	if($("#UserTextarea1")[0].innerHTML==""||$("#UserTextarea1")[0].innerHTML==null){
		$("#UserTextarea1")[0].innerHTML="我来说几句"
	}
})
$("#UserTextarea2").click(function(){
	if($("#UserTextarea2")[0].value=="在这里写下你最爱的歌曲"){
		$("#UserTextarea2")[0].value=""
	}
	ifInputing=1
})
$("#UserTextarea2").blur(function(){
	if($("#UserTextarea2")[0].value==""){
		$("#UserTextarea2")[0].value="在这里写下你最爱的歌曲"
	}
})
function resetUserForm(){//====pStage.touchstart
	//console.log("-----------------------------")
	if($("#UserTextarea1")[0].innerHTML==""||$("#UserTextarea1")[0].innerHTML==null){
		$("#UserTextarea1")[0].innerHTML="我来说几句"
	}
	if($("#UserTextarea2")[0].value==""){
		$("#UserTextarea2")[0].value="在这里写下你最爱的歌曲"
	}
	ifInputing=0
}
function goSubmit(){
	//$("#UserTextarea1")[0].innerHTML=""
	console.log("提交表单",$("#UserTextarea1").val())

}