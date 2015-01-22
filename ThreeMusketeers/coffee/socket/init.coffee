class Socket
	constructor: (@url,@myname,@callback) ->
		@option = {}
		@beforeSendTime = new Date().getTime()
		@sock = io.connect @url
		@init()
	init: ->
		tis = @
		@sock.emit 'login', name:@myname
		@sock.on 'editor', (data)-> 
			# console.log data
		@sock.on 'join', (data)->
			console.log "user join",data
			tis.option.join.call data if typeof tis.option.join is "function"
		@sock.on "removeuser", (data)->
			tis.option.removeuser.call data if typeof tis.option.removeuser is "function"
		@sock.on "ctrl pass", (data)->
			tis.option.ctrl.call data if typeof tis.option.ctrl is "function"
		@sock.on "attack", (data)->
			tis.option.attack.call data if typeof tis.option.attack is "function"
		@sock.on "jumping", (data)->
			tis.option.jumping.call data if typeof tis.option.jumping is "function"
		@sock.on "moveing", (data)->
			tis.option.moveing.call data if typeof tis.option.moveing is "function"
		@sock.on "Direction", (data)->
			tis.option.Direction.call data if typeof tis.option.Direction is "function"
		@sock.on "gotHit", (data)->
			tis.option.gotHit.call data if typeof tis.option.gotHit is "function"
		@sock.on "sync", (data)->
			if data.name is tis.myname
				data.delay = new Date().getTime() - @beforeSendTime
			tis.option.sync.call data if typeof tis.option.sync is "function"
		@callback.call @
	send: (type,data)->
		if type is "sync"
			@beforeSendTime = new Date().getTime()
		@sock.emit type, data
	test: ->
		for i in [0..99]
			@send "moveing", {name:"test",moveing:i}
			console.log i
