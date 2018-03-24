var riotVUE;

riotVUE = {
  arrayMethods: Object.create(Array.prototype),
  newArrProto: [],
  init: function(opts) {
    var self;
    self = this;
    
    // 设置数组变更通知
    ["pop", "push", "reverse", "shift", "unshift", "slice", "splice", "sort", "filter", "forEach"].forEach((method) => {
      var original;
      original = self.arrayMethods[method];
      return self.newArrProto[method] = function() {
        var run;
        run = function(who, args) {
          original.apply(who, args);
          self.eachAll(self, who);
          self.update();
        };
        return run(this, arguments);
      };
    });
    // 给 data 内的所有属性绑定监控
    return this.eachAll(this, this.data);
  },
  // 设置 $set 和 $delete .
  eachAll: function(self, data) {
    var key, results;
    results = [];
    for (key in data) {
      this.createProperty(self, data, key, data[key]);
      if (Array.isArray(data[key])) {
        data[key].__proto__ = self.newArrProto;
        this.eachAll(self, data[key]);
      }
      if (typeof data[key] === "object") {
        results.push(this.eachAll(self, data[key]));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  createProperty: function(parent, data, pro, val) {
    var temp;
    temp = val;
    return Object.defineProperty(data, pro, {
      configurable: true,
      get: function() {
        return temp;
      },
      set: function(value) {
        if (value === temp || (temp !== temp && value !== value)) {
          return false;
        }
        temp = value;
        return parent.update();
      }
    });
  }
};
