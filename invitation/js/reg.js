"use strict";var _citys,apiLink,init,persons,reg;Vue.component("form-grounp",{template:'<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="!item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',data:function e(){return{submiting:!1,type:{input:"input",select:"select",checkbox:"checkbox"}}},props:{form:{default:{}}},methods:{getOptionsName:function e(t){var i,n,o,l;if(t.array){for(l=t.options,n=0,o=l.length;n<o;n++)if(i=l[n],i.val===t.value)return i.name;return t.options[0].name}return""===t.value?Object.keys(t.options)[0]:t.value},submit:function e(t){var i,n,o,l;i={},console.log("first Time.."),o=this.form;for(n in o)l=o[n],i[n]=l.value;return this.$emit("submit",i)}},mounted:function e(t){var i,n,o,l,s;console.log("el:",this,this.form),l=this,n=this.form,o=[];for(i in n)s=n[i],null!=s.link&&"select"===s.type?o.push(this.$watch("form."+i,function(e,t){var i,n,o,s;if(null==l.form[e.link])return!1;if(l.form[e.link].options=e.options[e.value],l.form[e.link].array)return console.log(e.link,l.form[e.link].value,e.options[e.value][0].val),l.form[e.link].value=e.options[e.value][0].val;for(s=[],i=n=0,o=Object.keys(e.options[e.value]).length;0<=o?n<o:n>o;i=0<=o?++n:--n){if(e.options[e.value][Object.keys(e.options[e.value])[i]]){l.form[e.link].value=Object.keys(e.options[e.value])[i];break}s.push(void 0)}return s},{deep:!0})):o.push(void 0);return o}}),_citys={},_citys["9月22日"]={},_citys["9月22日"]["11-12点 裳花教室（已报满）"]=!1,_citys["9月22日"]["12-13点"]=!0,_citys["9月22日"]["13-14点"]=!0,_citys["9月22日"]["14-15点"]=!0,_citys["9月22日"]["15-16点"]=!0,_citys["9月22日"]["16-17点 天真绘本之旅"]=!0,_citys["9月22日"]["17-18点"]=!0,_citys["9月22日"]["18-19点"]=!0,_citys["9月22日"]["19-20点"]=!0,_citys["9月22日"]["20-21点 DIY鸡尾酒（已报满）"]=!1,_citys["9月23日"]={},_citys["9月23日"]["11-12点 森林瑜伽会"]=!0,_citys["9月23日"]["12-13点"]=!0,_citys["9月23日"]["13-14点"]=!0,_citys["9月23日"]["14-15点"]=!0,_citys["9月23日"]["15-16点"]=!0,_citys["9月23日"]["16-17点 自制香氛课堂（已报满）"]=!1,_citys["9月23日"]["17-18点"]=!0,_citys["9月23日"]["18-19点"]=!0,_citys["9月23日"]["19-20点"]=!0,_citys["9月23日"]["20-21点 红酒品鉴沙龙"]=!0,persons=[{name:"1人",val:1},{name:"2人",val:2},{name:"3人",val:3},{name:"4人",val:4}],reg={},apiLink="//api.giccoo.com/",window.onload=function(){return axios.get(apiLink+"invitation/counts/",{}).then(function(e){var t,i,n,o;if(console.log(e.data.info),null!=e.data.info)for(o=e.data.info,i=0,n=o.length;i<n;i++)t=o[i],t.num>=30&&(_citys[t.province][t.city]=!1);return init()})},init=function e(){return reg=new Vue({el:"#reg",data:{show:!1,form:{username:{id:"username",type:"input",label:"请输入姓名",placeholder:"请填写姓名",value:""},mobile:{id:"mobile",type:"input",label:"请输入手机",placeholder:"请填写手机",value:""},province:{id:"province",type:"select",label:"请选择日期",link:"city",value:"请选择日期",options:_citys},city:{id:"city",type:"select",label:"请选择时段",value:"请选择时间",options:_citys["9月22日"]},numbs:{id:"numbs",type:"select",label:"请选择人数",array:!0,value:"请选择人数",options:persons}}},methods:{submit:function e(t){return console.log("data:",t),""===t.username||t.username.length>8||t.username.length<2?alert("请输入2-8个字的姓名"):""===t.mobile?alert("请输入联系电话"):""===t.province||"请选择日期"===t.province?alert("请选择日期"):""===t.city||"请选择时间"===t.city?alert("请选择时间"):""===t.numbs||"请选择人数"===t.numbs?alert("请选择人数"):axios.post(apiLink+"invitation/reg/",t).then(function(e){return 200===e.data.recode?(alert("填写成功"),goPage5()):alert(e.data.reason)}).catch(function(e){return console.log("err:",e),alert("服务器连接失败,请重试.")})}}})};