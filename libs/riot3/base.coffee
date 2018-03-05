# @codekit-prepend "../coffee/riot-vue"
# @codekit-prepend "./riot-note.js"

riot.mixin riotVUE
riots = {}

SendNote = (msg,time = 3000)->
  noteDom = document.createElement("note")
  noteDom.title = msg
  noteDom.setAttribute "time",time
  document.body.appendChild noteDom
  riot.mount("note")