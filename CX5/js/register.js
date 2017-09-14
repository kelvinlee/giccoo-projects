
riot.tag2('register', '<form class="form" onsubmit="{submit}"> <div class="form-grounp"> <label for="username">姓名</label> <input id="username" type="text" name="username"> </div> <div class="form-grounp"> <label for="">性别</label> <div class="comb"> <label for="man">先生</label> <input id="man" type="radio" name="sex" value="先生" checked> <label for="woman">女士</label> <input id="woman" type="radio" name="sex" value="女士"> </div> </div> <div class="form-grounp"> <label for="mobile">手机号码</label> <input id="mobile" type="text" name="mobile"> </div> <div class="form-grounp"> <label for="province">所在省/市:</label> <div class="comb"> <div class="select"><span>{provinceName}</span> <select id="province" name="province" onchange="{changeProvince}"> <option each="{name in province}" value="{name}">{name}</option> </select> </div> <div class="select"><span>{cityName}</span> <select id="city" name="city" onchange="{changeCity}"> <option each="{name in city}" value="{name}">{name}</option> </select> </div> </div> </div> <div class="form-grounp"> <label for="dealer">经销商</label> <div class="select"><span>{dealerName}</span> <select id="dealer" name="dealer" onchange="{changeDealer}"> <option each="{dealer}" value="{name}">{name}</option> </select> </div> </div> <div class="form-check"> <div class="checkbox"> <input type="checkbox" checked name="state" value="1"> </div> <label>我已阅读并接受隐私条款：</label> </div> <div class="form-grounp"> <p>您的个人资料有可能提交至马自达厂商及其授权经销商与您进一步沟通试驾，购车等事宜。</p> </div> <div class="form-btn"> <button class="submit" type="submit"><img src="img/submit.png"></button> </div> </form>', '', '', function(opts) {
var city, dealer, name, province, self;

self = this;

this.cityData = _citys;

province = [];

for (name in this.cityData) {
  province.push(name);
}

console.log(province);

city = [];

for (name in this.cityData[province[0]]) {
  city.push(name);
}

dealer = this.cityData[province[0]][city[0]];

console.log(city, dealer);

this.province = province;

this.city = city;

this.dealer = dealer;

this.provinceName = this.province[0];

this.cityName = this.city[0];

this.dealerName = this.dealer[0].name;

this.firstUpdate = true;

this.on('update', function() {
  if (this.firstUpdate) {
    return this.firstUpdate = false;
  }
  this.provinceName = $('[name=province]', this.root).val();
  this.cityName = $('[name=city]', this.root).val();
  this.dealerName = $('[name=dealer] [value=' + $('[name=dealer]', this.root).val() + ']', this.root).text();
});

this.changeCity = function(evt) {
  var newCity, newName;
  newName = $('[name=province]', self.root).val();
  newCity = $('[name=city]', this.root).val();
  dealer = self.cityData[newName][newCity];
  self.dealer = dealer;
  self.update();
};

this.changeProvince = function(evt) {
  var newName;
  newName = $('[name=province]', self.root).val();
  city = [];
  for (name in self.cityData[newName]) {
    city.push(name);
  }
  dealer = self.cityData[newName][city[0]];
  self.city = city;
  self.dealer = dealer;
  self.update();
};

this.changeDealer = function(evt) {
  self.update();
};

this.submit = function() {
  var checked, data, i, item, len;
  data = $('form', this.root).serializeArray();
  data.push({
    name: 'dealername',
    value: self.dealerName
  });
  if ($('[name=username]', this.root).val().length < 1 || $('[name=username]', this.root).val() === '') {
    alert('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    alert('手机号码不能为空');
    return false;
  }
  checked = false;
  for (i = 0, len = data.length; i < len; i++) {
    item = data[i];
    if (item.name === "state") {
      checked = true;
    }
  }
  if (!checked) {
    alert("我已阅读并接受隐私条款");
    return false;
  }
  $.post(opts.action, data, function(msg) {
    if (msg.recode === 200) {
      alert('注册成功');
    } else {
      alert(msg.reason);
    }
  });
  return false;
};
});