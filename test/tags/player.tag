player
  //- ,name="page-animation"
  .transition(data-is="transition",leave="{leave}",enter="{enter}",ishow="{data.show}",onclick="{check}")
    .text {parent.data.text}
  button(onclick="{check}") click me
  script(type="text/coffeescript").
    self = this
    @data =
      text: "Player"
      show: true
    @BD()
    @check = ->
      @data.show = not @data.show
      SendNote "haha"
    @enter = (el,done)->
      console.log "enter",el,done
      done()
    @leave = (el,done)->
      console.log "leave",el,done
      done()


    @on "mount", ->
      console.log "mounted",this
