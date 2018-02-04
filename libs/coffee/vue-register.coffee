Vue.component "form-grounp",
  template:'
    <div class="form-grounp">
      <lable for="name">{{title}}</lable>
      <input type="text" name="name" value="value">
    </div>
    '
  data: ->
    return
      submiting: false
  watch:
    forms: ->
      console.log "form"


  props:
    title:
      default: ""
    name:
      default: ""
    

  methods:
    submit: (evt)->
