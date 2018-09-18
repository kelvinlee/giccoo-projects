Vue.component "form-grounp",
  template:'
    <div class="form">
      <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')">
        <label :for="item.id" v-if="item.label">{{item.label}}</label>
        <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text">
        <div v-if="type[item.type] == \'select\'" class="select">
          <span>{{getOptionsName(item)}}</span>
          <select :id="item.id" v-model="item.value" v-if="!item.array">
            <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option>
          </select>
          <select :id="item.id" v-model="item.value" v-if="item.array">
            <option v-for="(item, index) in item.options" :disabled="item.disabled" :value="item.val">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div>
    </div>
    '
  data: ->
    return
      submiting: false
      type:
        input: 'input'
        select: 'select'
        checkbox: 'checkbox'

  props:
    form:
      default: {}
    
  watch:
    form: {
      handler: (v)->
        console.log "form:",v
      , 
      deep: true
    }
  methods:
    getOptionsName: (item)->
      if !item.array
        if item.value is ""
          return Object.keys(item.options)[0]
        return item.value
      else
        for it in item.options
          if it.val is item.value
            return it.name
        return item.options[0].name
    submit: (evt)->
      data = {}
      console.log "first Time.."
      for k,v of @.form
        data[k] = v.value
      # console.log "submit:",data
      @.$emit "submit", data


  mounted: (el)->
    # console.log "el:",this,this.form
    self = this
    for k,v of @.form
      if v.type is "select"
        console.log "form.#{k}.options"
        @.$watch "form.#{k}.options", (val)->
          console.log "changed:",val
        ,{deep: true}
      if v.link? and v.type is "select"
        @.$watch "form.#{k}", (n,o)->
          return false unless self.form[n.link]?
          self.form[n.link].options = n.options[n.value]
          if self.form[n.link].array
            console.log n.link,self.form[n.link].value,n.options[n.value][0].val
            self.form[n.link].value = n.options[n.value][0].val
          else
            for i in [0...Object.keys(n.options[n.value]).length]
              if n.options[n.value][Object.keys(n.options[n.value])[i]]
                self.form[n.link].value = Object.keys(n.options[n.value])[i]
                break
        ,{deep: true}

