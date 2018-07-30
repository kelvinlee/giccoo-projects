# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "../../libs/coffee/loadWechatConfig"
# @codekit-prepend "../../libs/coffee/IsPC"
# @codekit-prepend "../../libs/vue/vue-player"
# @codekit-prepend "../../libs/coffee/pixi-base"
# @codekit-prepend "../../libs/coffee/get"
# @codekit-prepend "./CD"


String.prototype.gblen = -> 
	len = 0;	
	for i in [0...this.length]
		if this.charCodeAt(i)>127 or this.charCodeAt(i)==94
			len += 2
		else
			len++
	return len

main = null
_cd = null
# apiLink = "//g.giccoo.com/"
apiLink = "http://192.168.3.45:3000/"
_CDN = "./"

window.onload = ->
	if IsPC()
		document.getElementById("qrcode").className += " show"
		return false
	init()

init = ->
	TrueH = document.documentElement.clientHeight
	TrueW = document.documentElement.clientWidth
	# console.log new Date().getTime() - startTime
	# document.body.style.height = TrueH+"px"
	# document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
	TrueW = 640 if TrueW >= 640
	TrueH = 1138 if TrueH >= 1138
	smaller = TrueH*2 < 1200
	navH = Math.ceil TrueW / 640 * 94 / TrueH * 100
	smaller = TrueW/TrueH > 0.65
	console.log TrueW/TrueH

	main = new Vue
		el: "#music"
		data:
			w: TrueW
			h: TrueH
			biger: TrueW/TrueH < 0.54
			smaller: smaller
			afterH: if smaller then TrueH*1.15-1029*(TrueW/750) else TrueH-1029*(TrueW/750)
			wy: false
			mounted: false
			msgList: []
			bgm: null
			playing: false
			timeing: "0:00"
			timeend: "0:00"
			playProgress: 0
			line: 0
			info:
				nickname: ""
				avatar: ""
				music: ""
				message: ""
				singer: 1
		watch:
			playing: (n,o)->
				unless n
					_cd.stop()
				else
					_cd.play()
		methods:
			loadedmetadata: ->
				if @.bgm.duration != Infinity
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					@.timeend = m+":"+s
			canplay: ->
				if @.bgm.duration != Infinity
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					@.timeend = m+":"+s
				
			playRun: ->
				if @.bgm.duration != Infinity
					@.playProgress = @.bgm.currentTime/@.bgm.duration*100
					m = Math.floor @.bgm.duration/60
					s = ten Math.floor @.bgm.duration%60
					m = 99 if m > 99
					@.timeend = m+":"+s
					m = Math.floor @.bgm.currentTime/60
					s = ten Math.floor @.bgm.currentTime%60
					m = 99 if m > 99
					@.timeing = m+":"+s
					n = 100/@.msgList.length
					@.line = Math.ceil @.playProgress/n
			play: ->
				if @.playing
					@.bgm.pause()
				else
					@.bgm.play()
			playtype: ->
				console.log "play"
				@.playing = true

			cdUpdate: ->
				_cd.avatar "http://image.giccoo.com/upload/"+@.info.avatar+"@!large"
				texts = @.info.message.split("")
				list = []
				n = -1
				lineH = 32
				for i in [0...texts.length]
					if i%8 is 0
						n++ 
						list[n] = ""
					list[n] += texts[i]+" "
				@.msgList = list
			ask: (id)->
				axios.get "#{apiLink}active/levi/info/id/#{id}"
				.then (msg)=>
					console.log msg.data
					@.info = msg.data.info
					@.mounted = true
					@.cdUpdate()
		mounted: ->
			id = $_GET["id"]
			_cd = new CD 
				el: "cd"
				callback: =>
					@.ask id
			@.bgm = document.getElementById "bgm"
			

ten = (i)->
	if i < 10
		return "0"+i
	return i
