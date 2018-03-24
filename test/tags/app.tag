
<app>
	<yield/>
	<button onclick="{showFun}">{data.showme}</button>
	<div data-is="transition" name="page-animation" ishow="{data.showme}">
		<div class="page">Show my??</div>
	</div>

	<script type="text/coffeescript">
		# @codekit-prepend "../../libs/coffee/riot-vue"
		@data = {
			showme: false
		}
		@mixin riotVUE
		global.test = @
		@showFun = ->
			@data.showme = not @data.showme
		@enter = (el,done)->
			console.log el,"enter function"
			done()
		@leave = (el,done)->
			done()
		@on "mount", ->
			console.log @tags
			console.log @data.showme
			# console.log @tags.transition.opts?,@tags.transition.opts.animated
			# @tags.transition.opts.animated = true
			# console.log @tags.transition.opts.animated
	</script>
	<style>
		button{ color: #000; }
	</style>
</app>