passiveSupported = false
try
  options = Object.defineProperty {}, "passive", {
    get: ->
      passiveSupported = true
  }
  window.addEventListener("test", options, options)
  window.removeEventListener("test", options, options)
catch e
  passiveSupported = false