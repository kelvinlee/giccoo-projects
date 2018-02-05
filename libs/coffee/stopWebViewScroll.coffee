stopWebViewScroll = ->
  overscroll = (el)->
    el.addEventListener 'touchstart', ->
      top = el.scrollTop
      totalScroll = el.scrollHeight
      currentScroll = top + el.offsetHeight
      if top is 0
        el.scrollTop = 1
      else if currentScroll is totalScroll
        el.scrollTop = top-1
    el.addEventListener "touchmove", (evt)->
      if el.offsetHeight < el.scrollHeight
        evt._isScroller = true
  document.body.addEventListener "touchmove", (evt)->
    unless evt._isScroller
      evt.preventDefault()
  for el in document.querySelectorAll(".touch")
    overscroll el

window.onload = ->
  stopWebViewScroll()