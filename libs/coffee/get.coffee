$_GET = do ->
  url = window.document.location.href.toString()
  u = url.split('?')
  if typeof u[1] == 'string'
    u = u[1].split('&')
    get = {}
    console.log u
    for i in u
      j = i.split('=')
      get[j[0]] = j[1]
    get
  else
    {}