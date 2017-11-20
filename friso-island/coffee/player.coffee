Vue.component "player",
	template: 
		<div><audio src="./mp3/bg.mp3"></audio></div>
	data: ->
		return
			playing: false
	props: ['overpage']
	methods:
		play: ->
			
	mounted: (el)->
		@list = @$el.children[0].children
