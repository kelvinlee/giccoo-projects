<!-- Build for transition like VUE -->
<transition class={data.class}>
	<yield/>
	
	<script type="text/coffeescript">
	beforeName = if @opts.name? then @opts.name else false
	ishow = null
	self = @
	@data = {
		class: 
			"#{beforeName}-enter-active": false
			"#{beforeName}-enter": false
			"#{beforeName}-leave-active": false
			"#{beforeName}-leave-to": false
	}
	@mixin riotVUE
	
	# Css 动画处理
	if beforeName
		@cssAnimate = ->
			if @root.getAttribute("ishow") == ishow
				return false
			ishow = @root.getAttribute("ishow")
			if @root.getAttribute("ishow") is "true"
				@root.style.display = null
				@data.class["#{beforeName}-enter-active"] = true
				@data.class["#{beforeName}-enter"] = true
				@data.class["#{beforeName}-leave-active"] = false
				@data.class["#{beforeName}-leave-to"] = false
				setTimeout ->
					self.data.class["#{beforeName}-enter"] = false
				,1
			else
				@data.class["#{beforeName}-enter-active"] = false
				@data.class["#{beforeName}-enter"] = false
				@data.class["#{beforeName}-leave-active"] = true
				@data.class["#{beforeName}-leave-to"] = true
		@end = ->
			unless ishow?
				@root.style.display = "none"
			@data.class["#{beforeName}-enter-active"] = false
			@data.class["#{beforeName}-enter"] = false
			@data.class["#{beforeName}-leave-active"] = false
			@data.class["#{beforeName}-leave-to"] = false
		@on "updated", @cssAnimate

		@on "mount", -> 
			ishow = not @opts.ishow
			@root.addEventListener TRANSITION_END_NAME, @end.bind @
			@root.addEventListener ANIMATION_END_NAME, @end.bind @
			if ishow
				@root.style.display = "none"
	# Js  动画处理
	else
		# @opts.enter.call()
		@enterDone = ->
		@leaveDone = ->
			@root.style.display = "none"
		@funAnimate = ->
			if @root.getAttribute("ishow") == ishow
				return false
			ishow = @root.getAttribute("ishow")
			if @root.getAttribute("ishow") is "true"
				@root.style.display = null
				@opts.enter @root,@enterDone.bind @
			else
				@opts.leave @root,@leaveDone.bind @
		@on "updated", @funAnimate
		@on "mount", -> 
			ishow = not @opts.ishow
			if ishow
				@root.style.display = "none"
	</script>
</transition>