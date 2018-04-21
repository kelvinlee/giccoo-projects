IsPC = ->
  userAgentInfo = navigator.userAgent
  Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
  flag = true
  v = 0
  while v < Agents.length
    if userAgentInfo.indexOf(Agents[v]) > 0
      flag = false
      break
    v++
  flag  