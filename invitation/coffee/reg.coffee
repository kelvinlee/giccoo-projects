# @codekit-prepend "../../libs/vue/vue-register"

_citys = {}
_citys["请选择日期"] = {}
_citys["9月22日"] = {}
_citys["9月22日"]["请选择时间"] = false
_citys["9月22日"]["11-12点 裳花教室（已报满）"] = false
_citys["9月22日"]["12-13点"] = true
_citys["9月22日"]["13-14点"] = true
_citys["9月22日"]["14-15点"] = true
_citys["9月22日"]["15-16点"] = true
_citys["9月22日"]["16-17点 天真绘本之旅"] = true
_citys["9月22日"]["17-18点"] = true
_citys["9月22日"]["18-19点"] = true
_citys["9月22日"]["19-20点"] = true
_citys["9月22日"]["20-21点 DIY鸡尾酒（已报满）"] = false
_citys["9月23日"] = {}
_citys["9月23日"]["请选择时间"] = false
_citys["9月23日"]["11-12点 森林瑜伽会"] = true
_citys["9月23日"]["12-13点"] = true
_citys["9月23日"]["13-14点"] = true
_citys["9月23日"]["14-15点"] = true
_citys["9月23日"]["15-16点"] = true
_citys["9月23日"]["16-17点 自制香氛课堂（已报满）"] = false
_citys["9月23日"]["17-18点"] = true
_citys["9月23日"]["18-19点"] = true
_citys["9月23日"]["19-20点"] = true
_citys["9月23日"]["20-21点 红酒品鉴沙龙"] = true

persons = [{name: "请选择人数",val: "请选择人数"},{name:"1人",val:1},{name:"2人",val:2},{name:"3人",val:3},{name:"4人",val:4}]

reg = {}
apiLink = "//api.giccoo.com/"
# apiLink = "http://localhost:8881/"

window.onload = ->
  axios.get "#{apiLink}invitation/counts/",{}
  .then (msg)=>
    console.log msg.data.info
    if msg.data.info?
      for item in msg.data.info
        if item.num >= 30
          _citys[item.province][item.city] = false
    init()

init = ->
  reg = new Vue
    el: "#reg"
    data:
      show: false
      form:
        username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
        mobile: {id:"mobile", type: "input", label: "手机", placeholder: "请填写手机",value: ""}
        province: {id:"province", type: "select", label: "日期", link: "city", value: "请选择日期", options: _citys }
        city: {id:"city", type: "select", label: "时间", value: "请选择时间", options: _citys["9月22日"] }
        numbs: {id:"numbs", type: "select", label: "人数", array: true , value: "请选择人数", options: persons }
    methods:
      submit: (data)->
        console.log "data:",data
        if data.username is "" or data.username.length > 8 or data.username.length < 2
          return alert "请输入2-8个字的姓名"
        if data.mobile is ""
          return alert "请输入联系电话"
        if data.province is "" or data.province is "请选择日期"
          return alert "请选择日期"
        if data.city is "" or data.city is "请选择时间"
          return alert "请选择时间"
        if data.numbs is "" or data.numbs is "请选择人数"
          return alert "请选择人数"

        axios.post "#{apiLink}invitation/reg/",data
        .then (msg)=>
          if msg.data.recode is 200
            alert "填写成功"
            goPage5()
          else
            alert msg.data.reason
        .catch (err)=>
          console.log "err:",err
          alert "服务器连接失败,请重试."
