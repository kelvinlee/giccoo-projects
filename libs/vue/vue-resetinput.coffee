isAndroid = navigator.userAgent.indexOf('Android') > -1 or navigator.userAgent.indexOf('Adr') > -1
#android终端
Vue.directive 'resetInput', inserted: (el) ->
	if isAndroid
		return
	el.addEventListener 'blur', ->
		input = document.getElementById('reset-input')
		if !input
			input = document.createElement('INPUT')
			input.type = 'text'
			input.style.height = '0px'
			input.style.width = '0px'
			input.style.position = 'absolute'
			input.id = 'reset-input'
			document.body.prepend input
		input.focus()
		input.blur()
		return
	return