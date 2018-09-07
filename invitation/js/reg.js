'use strict';

var _citys, reg;

Vue.component("form-grounp", {
  template: '<div class="form"> <div v-for="item,index in form" class="form-group" :class="\'type-\'+type[item.type]+(item.class?\' \'+item.class:\'\')"> <label :for="item.id" v-if="item.label">{{item.label}}</label> <input :id="item.id" :placeholder="item.placeholder" v-if="type[item.type] == \'input\'" v-model="item.value" type="text"> <div v-if="type[item.type] == \'select\'" class="select"> <span>{{getOptionsName(item)}}</span> <select :id="item.id" v-model="item.value" v-if="!item.array"> <option v-for="(item, key) in item.options" :disabled="item" :value="key">{{key}}</option> </select> <select :id="item.id" v-model="item.value" v-if="item.array"> <option v-for="(item, index) in item.options" :value="item.val">{{item.name}}</option> </select> </div> </div> <div @click="submit" class="btn-submit"><img src="./img/btn-submit.png" /></div> </div>',
  data: function data() {
    return {
      submiting: false,
      type: {
        input: 'input',
        select: 'select',
        checkbox: 'checkbox'
      }
    };
  },
  props: {
    form: {
      default: {}
    }
  },
  methods: {
    getOptionsName: function getOptionsName(item) {
      var i, it, len, ref;
      if (!item.array) {
        if (item.value === "") {
          return Object.keys(item.options)[0];
        }
        return item.value;
      } else {
        ref = item.options;
        for (i = 0, len = ref.length; i < len; i++) {
          it = ref[i];
          if (it.val === item.value) {
            return it.name;
          }
        }
        return item.options[0].name;
      }
    },
    submit: function submit(evt) {
      var data, k, ref, v;
      data = {};
      console.log("first Time..");
      ref = this.form;
      for (k in ref) {
        v = ref[k];
        data[k] = v.value;
      }
      // console.log "submit:",data
      return this.$emit("submit", data);
    }
  },
  mounted: function mounted(el) {
    var k, ref, results, self, v;
    console.log("el:", this, this.form);
    self = this;
    ref = this.form;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (v.link != null && v.type === "select") {
        results.push(this.$watch('form.' + k, function (n, o) {
          if (self.form[n.link] == null) {
            return false;
          }
          self.form[n.link].options = n.options[n.value];
          if (self.form[n.link].array) {
            console.log(n.link, self.form[n.link].value, n.options[n.value][0].val);
            return self.form[n.link].value = n.options[n.value][0].val;
          } else {
            return self.form[n.link].value = Object.keys(n.options[n.value])[0];
          }
        }, {
          deep: true
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }
});

// @codekit-prepend "../../libs/vue/vue-register"
_citys = {};

_citys["9月22日"] = {};

_citys["9月22日"]["11-12点 裳花教室（已报满）"] = true;

_citys["9月22日"]["12-13点"] = false;

_citys["9月22日"]["13-14点"] = false;

_citys["9月22日"]["14-15点"] = false;

_citys["9月22日"]["15-16点"] = false;

_citys["9月22日"]["16-17点 天真绘本之旅"] = false;

_citys["9月22日"]["17-18点"] = false;

_citys["9月22日"]["18-19点"] = false;

_citys["9月22日"]["19-20点"] = false;

_citys["9月22日"]["20-21点 DIY鸡尾酒（已报满）"] = true;

_citys["9月23日"] = {};

_citys["9月23日"]["11-12点 森林瑜伽会"] = false;

_citys["9月23日"]["12-13点"] = false;

_citys["9月23日"]["13-14点"] = false;

_citys["9月23日"]["14-15点"] = false;

_citys["9月23日"]["15-16点"] = false;

_citys["9月23日"]["16-17点 自制香氛课堂（已报满）"] = true;

_citys["9月23日"]["17-18点"] = false;

_citys["9月23日"]["18-19点"] = false;

_citys["9月23日"]["19-20点"] = false;

_citys["9月23日"]["20-21点 红酒品鉴沙龙"] = false;

reg = {};

window.onload = function () {
  return reg = new Vue({
    el: "#reg",
    data: {
      form: {
        username: {
          id: "username",
          type: "input",
          label: "姓名",
          placeholder: "请填写姓名",
          value: ""
        },
        mobile: {
          id: "mobile",
          type: "input",
          label: "手机",
          placeholder: "请填写手机",
          value: ""
        },
        province: {
          id: "province",
          type: "select",
          label: "省份",
          link: "city",
          value: "请选择日期",
          options: _citys
        },
        city: {
          id: "city",
          type: "select",
          value: "请选择时间",
          options: _citys["9月22日"]
        }
      }
    },
    methods: {
      submit: function submit(data) {
        var _this = this;

        console.log("data:", data);
        if (data.username === "" || data.username.length > 8 || data.username.length < 2) {
          return alert("请输入2-8个字的姓名");
        }
        if (data.mobile === "") {
          return alert("请输入联系电话");
        }
        if (data.province === "" || data.province === "请选择省份") {
          return alert("请选择省份");
        }
        if (data.city === "" || data.city === "请选择城市") {
          return alert("请选择城市");
        }
        if (data.dealer === "" || data.dealer === "请选择经销商") {
          return alert("请选择经销商");
        }
        return axios.post(apiLink + 'active/df308/register/', data).then(function (msg) {
          if (msg.data.code === 200) {
            alert("填写成功");
            return _this.getLottery();
          } else {
            return alert(msg.data.reason);
          }
        }).catch(function (err) {
          return alert("服务器连接失败,请重试.");
        });
      }
    }
  });
};
