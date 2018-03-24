Vue.component "form-grounp",
  template:'
    <div class="form-grounp">
      
    </div>
    '
  data: ->
    return
      submiting: false
  watch:
    forms: ->
      console.log "form"


  props:
    list:
      default: []
    

  methods:
    submit: (evt)->
  mounted: (el)->
    console.log el,this
