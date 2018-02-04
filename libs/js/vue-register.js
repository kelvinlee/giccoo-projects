"use strict";

Vue.component("register", {
  template: '<form class="player" @submit="submit"> <div class="form-grounp" v-for="item in forms"> <lable for="item.name">{{item.title}}</lable> <input type="text" name="item.name" value="item.value"> </div> </form>',
  data: function data() {
    return {
      submiting: false
    };
  },
  props: {
    forms: {
      default: []
    }
  },
  methods: {
    submit: function submit(evt) {}
  }
});
