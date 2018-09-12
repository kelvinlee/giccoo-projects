var mWidth=380//=====字符串宽
var userTstyle={
		fill:'#006837',
		fontSize: 22,
		align: 'left',
		// wordWrap:true,
		// wordWrapWidth:100
	}

function message(_text,_song,_like){
	var a_message=new PIXI.Container()
	var messageBG=new PIXI.Graphics()


	var userT=new PIXI.Text(_text,userTstyle)

	a_message.addChild(messageBG,userT)
	part4.addChild(a_message)
	a_message.y=300
	//console.log(_text[24])

	//====找\n
	var returnNum=0
	for (var i = 0; i < _text.length; i++) {
		if(_text[i]=="\n"){
			returnNum=i
			break;
		}
	};
	var tempString=""
	if(returnNum!=0){
		tempString=_text.slice(0,returnNum+1)
		//console.log(tempString)
	}

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
}