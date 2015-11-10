adaptUILayout = (()->
	# 根据校正appVersion或userAgent校正屏幕分辨率宽度值
	# 未知的屏幕添加 adaptUILayout.regulateScreen.add('三星 I9100G', 'GT-I9100G', { width : 480, height : 800 });
	regulateScreen = (()->
		cache = {}
		defSize =
			width:window.screen.width
			height:window.screen.height
		ver = window.navigator.appVersion
		_ = null
		check = (key)->
			if key.constructor == String then ver.indexOf(key) > -1 else ver.test(key)
		add = (name, key, size)->
			if name and key
				cache[name] = 
					key : key
					size : size
		del = (name)->
			delete cache[name] if cache[name]
		cal = ()->
			return _ if _ != null
			for name in cache
				if check cache[name].key
					_ = cache[name].size
					break
			_ = defSize if _ == null
			return _
		return {
			add : add
			del : del
			cal : cal
		}
	)() 

	adapt = (uiWidth)->
		ua = navigator.userAgent.toLowerCase()
		android = ua.split 'android'
		isAndroidUp = false
		if android.length>1
			android = android[1].split ';' 
			version = android[0].split '.'
			version = parseInt version.join('')
			version = parseInt version+'0' if (version<100)
			isAndroidUp = true if version >= 420
		isiOS = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || ua.indexOf('chrome') > -1
		devicePixelRatio = window.devicePixelRatio
		deviceWidth      = regulateScreen.cal().width
		targetDensitydpi = uiWidth / deviceWidth * devicePixelRatio * 160
		userscalable = "user-scalable=no"
		initialContent   = if isiOS or isAndroidUp then 'width=' + uiWidth + ', ' + userscalable else 'target-densitydpi=' + targetDensitydpi + ', width=device-width, ' + userscalable
		head = document.getElementsByTagName 'head'
		viewport = document.createElement 'meta'
		viewport.name = 'viewport'
		viewport.content = initialContent
		head.length > 0 && head[head.length - 1].appendChild viewport

	{
		regulateScreen : regulateScreen
		adapt : adapt
	}

)()
adaptUILayout.adapt 640