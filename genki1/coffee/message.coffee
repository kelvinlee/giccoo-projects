apiLink = "//g.giccoo.com/active/message"

$(document).ready ->
	console.log "loaded"
	$(".pop .close").click ->
		closelive()
	$("#popvideo .close").click ->
		closeVideo()

closelive = ->
	$("#livesteam").hide()
	$("#livesteam iframe").attr "src", ""
	$("#livesteam1").hide()
	$("#livesteam1 iframe").attr "src", ""
openLive = ->
	$("#livesteam iframe").attr "src", "http://shangzhibo.tv/watch/568113?player"
	$("#livesteam").show()
openLive1 = ->
	$("#livesteam1 iframe").attr "src", "http://shangzhibo.tv/watch/4342920?player"
	$("#livesteam1").show()
closeVideo = ->
	$("#popvideo").hide()
	$("#popvideo video")[0].pause()
openVideo = (url,poster)->
	$("#popvideo video").attr("src",url)
	$("#popvideo video").attr("poster",poster)
	# $("#popvideo video")[0].play()
	$("#popvideo").show()

# 获取留言列表
# getDefaultMessages(1,function(list,counts){ console.log(list) })
# page 是第几页(每页20条) callback 为回调函数
getDefaultMessages = (page = 1,callback = ->)->
	axios.get "#{apiLink}/list/type/genkidefault/page/#{page}/size/10/sort/like/", {}
	.then (vals)=>
		# callback
		for item in vals.data.list
			if localStorage.getItem("id-#{item.id}")
				item.liked = true
			else
				item.liked = false
		messageList = vals.data.list
		callback messageList,vals.data.counts
	.catch (err)=>
		alert "列表获取失败"

messageList = []
# 获取留言列表
# getMessages(1,function(list,counts){ console.log(list) })
# page 是第几页(每页20条) callback 为回调函数
getMessages = (page = 1,callback = ->)->
	axios.get "#{apiLink}/list/type/genki/page/#{page}/size/50", {}
	.then (vals)=>
		# callback
		for item in vals.data.list
			if localStorage.getItem("id-#{item.id}")
				item.liked = true
			else
				item.liked = false
		messageList = vals.data.list
		callback messageList,vals.data.counts
	.catch (err)=>
		alert "列表获取失败"

# 发布留言
# sendMessage("content","musicname",function(){ console.log("success") })
# message 留言内容, nickname 音乐名称, 成功回调函数
sendMessage = (message,nickname,note1 = "",callback = ->)->
	data = {
		message: message
		nickname: nickname
		note1: note1
		type: "genki"
	}
	axios.post "#{apiLink}/insert", data
	.then (vals)=>
		if vals.data.code is 200
			alert "留言成功"
			callback()
		else
			alert vals.data.reason
	.catch (err)=>
		alert "留言失败，请重试"

# 留言点赞
# likeMessage(1)
# id 留言的id。
likeMessage = (id)->
	saveID = localStorage.getItem("id-#{id}")
	if saveID?
		return alert "已经赞过这个留言"
	localStorage.setItem("id-#{id}",1)
	data = {
		id: id
	}
	axios.post "#{apiLink}/like", data
	.then (vals)=>
		console.log vals.data
	.catch (err)=>
		console.log "err:",err

openInAPP = (url)->
	CloudMusic.open(url)

openMusic = (id)->
	if CloudMusic.isInApp()
		CloudMusic.playlist(id)
	else
		window.location.href = "https://music.163.com/#/playlist?id=#{id}"



