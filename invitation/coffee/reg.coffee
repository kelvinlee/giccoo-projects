# @codekit-prepend "../../libs/vue/vue-register"

_citys = {}
_citys["9月22日"] = {}
_citys["9月22日"]["11-12点 裳花教室（已报满）"] = true
_citys["9月22日"]["12-13点"] = false
_citys["9月22日"]["13-14点"] = false
_citys["9月22日"]["14-15点"] = false
_citys["9月22日"]["15-16点"] = false
_citys["9月22日"]["16-17点 天真绘本之旅"] = false
_citys["9月22日"]["17-18点"] = false
_citys["9月22日"]["18-19点"] = false
_citys["9月22日"]["19-20点"] = false
_citys["9月22日"]["20-21点 DIY鸡尾酒（已报满）"] = true
_citys["9月23日"] = {}
_citys["9月23日"]["11-12点 森林瑜伽会"] = false
_citys["9月23日"]["12-13点"] = false
_citys["9月23日"]["13-14点"] = false
_citys["9月23日"]["14-15点"] = false
_citys["9月23日"]["15-16点"] = false
_citys["9月23日"]["16-17点 自制香氛课堂（已报满）"] = true
_citys["9月23日"]["17-18点"] = false
_citys["9月23日"]["18-19点"] = false
_citys["9月23日"]["19-20点"] = false
_citys["9月23日"]["20-21点 红酒品鉴沙龙"] = false

reg = {}

window.onload = ->
  reg = new Vue
    el: "#reg"
    data:
      form:
        username: {id:"username", type: "input", label: "姓名", placeholder: "请填写姓名",value: ""}
        mobile: {id:"mobile", type: "input", label: "手机", placeholder: "请填写手机",value: ""}
        province: {id:"province", type: "select", label: "省份", link: "city", value: "请选择日期", options: _citys }
        city: {id:"city", type: "select", value: "请选择时间", options: _citys["9月22日"] }
    methods:
      submit: (data)->
        console.log "data:",data
        if data.username is "" or data.username.length > 8 or data.username.length < 2
          return alert "请输入2-8个字的姓名"
        if data.mobile is ""
          return alert "请输入联系电话"
        if data.province is "" or data.province is "请选择省份"
          return alert "请选择省份"
        if data.city is "" or data.city is "请选择城市"
          return alert "请选择城市"
        if data.dealer is "" or data.dealer is "请选择经销商"
          return alert "请选择经销商"

        axios.post "#{apiLink}active/df308/register/",data
        .then (msg)=>
          if msg.data.code is 200
            alert "填写成功"
            @.getLottery()
          else
            alert msg.data.reason
        .catch (err)=>
          alert "服务器连接失败,请重试."
