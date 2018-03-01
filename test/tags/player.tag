player
  transition(name="page-animation",ishow="{data.show}",onclick="{check}")
    .text {parent.data.text}
  script(type="text/coffeescript").
    self = this
    @data =
      text: "Player"
      show: true
    @BD()
    @check = ->
      @data.show = not @data.show

    @on "mount", ->
      console.log "mounted",this
