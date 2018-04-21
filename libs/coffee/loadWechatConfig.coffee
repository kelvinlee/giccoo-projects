loadWechatConfig = ->
  url = encodeURIComponent window.location.href.split("#")[0]
  hm = document.createElement('script')
  hm.src = "//api.giccoo.com/api/config?url="+url
  s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore hm, s
  return