"use strict";

Vue.component("page", {
  template: '<div :class="class"> <slot></slot> </div>',
  data: function data() {
    return {
      count: 0
    };
  },
  props: {
    class: {
      default: pages
    }
  },
  mounted: function mounted(el) {}
});
