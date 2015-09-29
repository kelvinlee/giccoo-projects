# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "js/vendor/exif.js"
# @codekit-prepend "../../libs/coffee/requestanimation"
# @codekit-prepend "../../libs/coffee/qrcode"

Store = {}
layzr = null
tm = null

debug = false
cdn = ""
isMM = false
# cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug

window.onload = ->
	# $("#loading").hide()

	if document.getElementById("qrcode").getStyle("display") is "block"
		qrcode()
		return false
	riot.mount("*")
	ep = $(".load-progress .n")
	tm = setInterval ->
			if parseInt(ep.html()) >= 96
				clearInterval tm
				return false
			v = parseInt(ep.html())+parseInt(Math.random()*5)
			ep.html v+"%"
			$(".load-item-note1").css({height:(40*v*0.01)+"%"})
		,100
	if $("body").height() <= 460
		$("body").addClass "iphone4"

	setTimeout ->
		loadStart()
	,2500
	$(document).on "click", ".icon-wechat", ->
		# console.log "abcd"
		$(".share-wechat").show()

	# alert window.location.href
	$.get 'http://api.giccoo.com/momo/config', {url: window.location.href}, (resp)->
		config = resp
		console.log "back config:",config
		mm.invoke 'initConfig', config, (resq)->
			# alert window.location.href
			# alert resq
			console.log resq
			isMM = true
			UpdateShare()
			Store.build && Store.build.updateFrom()

hideShareWechat = ->
	# console.log "close"
	$(".share-wechat").hide()

loadStart = ->
	count = $("[data-layzr]").length
	now = 0
	ep = $(".load-progress .n")
	# return false
	console.log(count)
	layzr = new Layzr
		callback: (e)->
			console.log e
			now++
			# console.log parseInt (now/count)*100
			if now >= count
				clearInterval tm
				ep.html parseInt((now/count)*100)+"%"
				$(".load-item-note1").css({height:parseInt(40*now/count)+"%"})
				setTimeout ->
					$("#loading").addClass("animated fadeOut")
					$(".begin").removeClass("hide")
					$(".build").removeClass("hide")
					# Store.game.build()
				,1500
				setTimeout ->
					$("#loading").hide()
				,1000

# loadOther = ->
# 	layzr = new Layzr
# 		selector: '[data-src]'
# 		attr:'data-src'
SendNote = (msg,time = 3000)->
	$("body").append("<note title='"+msg+"' time='#{time}'></note>")
	riot.mount("note")


share = {
	call: ->
		shareCall()
}

UpdateShare = ->
	shareOneConfig.title = shareDefault.title
	shareOneConfig.text = shareDefault.text
	shareOneConfig.url = shareDefault.url
	shareOneConfig.pic = shareDefault.pic
	shareOneConfig.resource.icon = shareDefault.pic
	shareOneConfig.resource.link = shareDefault.url
	shareOneConfig.resource.title = shareDefault.title
	shareOneConfig.resource.desc = shareDefault.text

	try
		Config = {
			enable: {
				ui_btn: 1
			},
			share: {
				title: shareDefault.title,
				text: shareDefault.text,
				url: shareDefault.url,
				pic: shareDefault.pic,
				token:	'87d9yxBlJPJ0Enw2urLSr%2F09le0CT0Jw6Pjl1yZI7dTq',
				callback: '',
				apps: ['momo_feed', 'momo_contacts'],
				configs: {
					momo_feed: {
						title: shareDefault.title,
						text: shareDefault.text,
						url: shareDefault.url,
						pic: shareDefault.pic,
						resource:{
							icon: shareDefault.pic,
							link: shareDefault.url,
							title: shareDefault.title,
							desc: shareDefault.text,
							ignore_pic:1
						}
					},
					momo_friend: shareDefault,
					momo_discuss: shareDefault,
					momo_group: shareDefault
				}
			},
			ui_btn: {
				title: '',
				dropdown: 0,
				buttons:[
					{
						text: "分享",
						icon: '',
						action: 0,
						param: {callback: "share.call"}
					}
				]
			}
		}
		# alert JSON.stringify Config
		mm.invoke('init' , Config)
	catch e
		console.log e

shared = false
shareOneToAll = ->
	console.log(shareOneConfig)
	# alert shareOneConfig
	if (shared)
		SendNote("已经分享过,请等待5秒.")
		return false
	shared = true
	setTimeout ->
		shared = false
	,5000
	mm.invoke 'shareOne',shareOneConfig, (resp)->
		SendNote("分享成功!")

shareCall = ->
	mm.invoke('callShare' , {
		title: shareDefault.title,
		text: shareDefault.text,
		url: shareDefault.url,
		pic: shareDefault.pic,
		token:	'87d9yxBlJPJ0Enw2urLSr%2F09le0CT0Jw6Pjl1yZI7dTq',
		callback: '',
		apps: ['momo_feed', 'momo_contacts', 'weixin', 'weixin_friend'],
		configs: {
			momo_feed: {
				title: shareDefault.title,
				text: shareDefault.text,
				url: shareDefault.url,
				pic: shareDefault.pic,
				resource:{
					icon: shareDefault.pic,
					link: shareDefault.url,
					title: shareDefault.title,
					desc: shareDefault.text,
					ignore_pic:1
				}
			},
			momo_friend: shareDefault,
			momo_discuss: shareDefault,
			momo_group: shareDefault
		}
	})




# $_GET = do ->
# 	url = window.document.location.href.toString()
# 	u = url.split('?')
# 	if typeof u[1] == 'string'
# 		u = u[1].split('&')
# 		get = {}
# 		console.log u
# 		for i in u
# 			j = i.split('=')
# 			get[j[0]] = j[1]
# 		get
# 	else
# 		{}