qrcode = ->
	do ->
		hm = document.createElement('script')
		hm.onload = ->
			new QRCode document.getElementById("qrcode"), {width : 400,height : 400, text: window.location.href }
		hm.src = '/libs/js/min/qrcode.min.js'
		s = document.getElementsByTagName('script')[0]
		s.parentNode.insertBefore hm, s
		return