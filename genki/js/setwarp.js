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

function message(_text,_song,_like){
	var a_message=new PIXI.Container()
	var messageBG=new PIXI.Graphics()
	var messageIco=new pSprite("img/message1.png")
	var messageLike=new pSprite("img/message2.png")


	var userT=new PIXI.Text(_text,userTstyle)
	var userSong=new PIXI.Text(_song,userSongstyle)

	a_message.addChild(messageBG,userT,userSong,messageIco,messageLike)
	part4.addChild(a_message)


	a_message.y=1000//============改位置


	userT.text=addReturn(_text)
	userT.position.set(175,20)

	messageBG.position.set(129,6)
	messageBG.lineStyle(4, 0x006838,1,0);
	messageBG.beginFill(0xffffff)
	messageBG.drawRoundedRect(0,0,mWidth+46*2,userT.height+16+50,20)

	messageLike.y=messageIco.y=userT.y+userT.height
	userSong.y=userT.y+userT.height+15
	userSong.x=225
}

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