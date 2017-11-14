class Timer extends React.Component
	constructor: (props) ->
		super props
		@state = {time: new Date()}
		# @handleClick = @handleClick.bind @
	# componentWillMount: ->
	componentDidMount: ->
		@timeUpdate()
	# componentWillReceiveProps: (nextProps)->
	# shouldComponentUpdate: (nextProps, nextState)->
	# componentWillUpdate: (nextProps, nextState)->
	# componentDidUpdate: (prevProps, prevState)->
	# componentWillUnmount: ->
	# componentDidCatch: (error, info)->
	# handleClick: (e)->
	timeUpdate: ->
		@setState (prevState, props) =>
			return
				time: new Date()
		, -> # after set success run 
			setTimeout () =>
				@timeUpdate()
			,500
	# date
	dateFormat: (time)->
		timerText = ""
		if @props.isdate
			timerText += time.getFullYear()+@props.datemark+(time.getMonth()+1)+@props.datemark+time.getDate()
		if @props.isdate and @props.istime 
			timerText += " "
		if @props.istime 
			timerText += time.getHours()+@props.timemark+time.getMinutes()+@props.timemark+time.getSeconds()
		return timerText
	render: ->
		time = @state.time
		return <div>{@dateFormat(time)}</div>

# set default props
Timer.defaultProps = {
	isdate: true
	istime: true
	datemark: "-"
	timemark: ":"
}