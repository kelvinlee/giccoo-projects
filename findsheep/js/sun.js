var aDay=8
function setSun () {
	// body...
	//====半球光
	var hemlight = new THREE.HemisphereLight( 0xffffff, 0x0088ff,0.3 );//0x38a4e8
	hemlight.position.set( 0, 10, 0 );
	scene.add( hemlight );

	

	var _color1=new THREE.Color(0x000000)
	// var _endColor0=new THREE.Color(0xFF8D00)//早上6点
	// var _endColor1=new THREE.Color(0xFFE4C2)//中午12点
	// var _endColor2=new THREE.Color(0xFFB200)//晚上6点
	// var _endColor3=new THREE.Color(0x000000)//夜里12点

	var _endColor0=new THREE.Color(0xFF4e00)//早上6点
	var _endColor1=new THREE.Color(0xFFE4C2)//中午12点
	var _endColor2=new THREE.Color(0x0096ff)//晚上6点
	var _endColor3=new THREE.Color(0x000000)//夜里12点

	var _color2=new THREE.Color(0x000000)
	// var _endDlightColor0=new THREE.Color(0xFF8D00)//早上6点
	// var _endDlightColor1=new THREE.Color(0xFFE4C2)//中午12点
	// var _endDlightColor2=new THREE.Color(0xFFB200)//晚上6点
	// var _endDlightColor3=new THREE.Color(0x000000)//夜里12点
	var _endDlightColor0=new THREE.Color(0x0088ff)//早上6点
	var _endDlightColor1=new THREE.Color(0xFFE4C2)//中午12点
	var _endDlightColor2=new THREE.Color(0xFF2200)//晚上6点
	var _endDlightColor3=new THREE.Color(0x000000)//夜里12点

	var t1=new TimelineMax({repeat:10000})

	t1.add(TweenMax.to(_color1,aDay/4,{r:_endColor0.r,g:_endColor0.g,b:_endColor0.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("黑-》蓝")
		hemlight.skyColor=_color2
		hemlight.groundColor=_color1
	}}))
	t1.add(TweenMax.to(_color1,aDay/4,{r:_endColor1.r,g:_endColor1.g,b:_endColor1.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("蓝-》黄")
		hemlight.skyColor=_color2
		hemlight.groundColor=_color1
	}}))
	t1.add(TweenMax.to(_color1,aDay/4,{r:_endColor2.r,g:_endColor2.g,b:_endColor2.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("黄-》红")
		hemlight.skyColor=_color2
		hemlight.groundColor=_color1
	}}))
	t1.add(TweenMax.to(_color1,aDay/4,{r:_endColor3.r,g:_endColor3.g,b:_endColor3.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("红-》黑")
		hemlight.skyColor=_color2
		hemlight.groundColor=_color1
	}}))




	//====平行光
	var dLight=new THREE.DirectionalLight(0xff0000,1.2)//0xffa70d
	dLight.position.set(500,-500,-200)
	//dLight.target=scene
	dLight.castShadow=true
	dLight.shadow.mapSize.width = 2048;  // default
	dLight.shadow.mapSize.height = 2048; // default
	dLight.shadow.camera.near = 0.5;    // default
	dLight.shadow.camera.far = 1000;     // default
	dLight.shadow.camera.left = -300;    // default
	dLight.shadow.camera.right = 300; 
	dLight.shadow.camera.bottom = -300;    // default
	dLight.shadow.camera.top = 300; 

	// var dlhelper=new THREE.CameraHelper(dLight.shadow.camera)
	// scene.add(dlhelper)

	

	var t2=new TimelineMax({repeat:10000})

	t2.add(TweenMax.to(_color2,aDay/4,{r:_endDlightColor0.r,g:_endDlightColor0.g,b:_endDlightColor0.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("黑-》蓝")
		dLight.color=_color2
	}}))
	t2.add(TweenMax.to(_color2,aDay/4,{r:_endDlightColor1.r,g:_endDlightColor1.g,b:_endDlightColor1.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("蓝-》黄")
		dLight.color=_color2
	}}))
	t2.add(TweenMax.to(_color2,aDay/4,{r:_endDlightColor2.r,g:_endDlightColor2.g,b:_endDlightColor2.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("黄-》红")
		dLight.color=_color2
	}}))
	t2.add(TweenMax.to(_color2,aDay/4,{r:_endDlightColor3.r,g:_endDlightColor3.g,b:_endDlightColor3.b,ease:Linear.easeNone,onUpdate:function(){
		//console.log("红-》黑")
		dLight.color=_color2
	}}))

	TweenMax.to(dLight.position,aDay/2,{x:-500,repeat:100000,yoyo:true,ease:Power1.easeInOut,delay:aDay/4})//光源旋转
	TweenMax.to(dLight.position,aDay*2,{z:200,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(dLight.position,aDay/2,{y:500,repeat:100000,yoyo:true,ease:Power1.easeInOut})

	//TweenMax.to(dLight,aDay/2,{intensity:1.5,repeat:100000,yoyo:true,ease:Sine.easeInOut})
	TweenMax.to(hemlight,aDay/2,{intensity:.5,repeat:100000,yoyo:true,ease:Sine.easeInOut})

	

	
	scene.add(dLight)
}