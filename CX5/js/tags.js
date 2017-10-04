


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
    SendNote('姓名不能为空');
    return false;
  }
  if ($('[name=mobile]', this.root).val().length < 1 || $('[name=mobile]', this.root).val() === '') {
    SendNote('手机号码不能为空');
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
    SendNote("请勾选我已阅读并接受隐私条款");
    return false;
  }
  $.post(opts.action, data, function(msg) {
    if (msg.recode === 200) {
      SendNote('感谢您的参与');
    } else {
      SendNote(msg.reason);
    }
  });
  return false;
};
});


riot.tag2('contentx', '<h2>{headline}<br>{subheadline}</h2> <div class="text-box" each="{item in contents}"> <div class="title {fontsmall: item.title.length &gt; 19,fontsmallsmall: item.title.length &gt; 24,fontbig: item.title.length &lt; 5}">{item.title}</div> <div class="lists" each="{list in item.lists}"><a class="list {fontsmall: list.text.length &gt; 19,fontsmallsmall: list.text.length &gt; 24,fontbig: list.text.length &lt; 5}" href="{list.link}">{list.text}</a></div><a class="more" href="{item.more}">+查看更多回答</a> </div>', '', '', function(opts) {
var self;

self = this;

Store.contentx = self;

self.headline = "Hello";

self.subheadline = "World";

self.contents = [
  {
    title: "h1",
    more: "more-a-link",
    lists: [
      {
        text: "a",
        link: "a-link"
      }
    ]
  }, {
    title: "h2",
    more: "more-a-link",
    lists: [
      {
        text: "b",
        link: "b-link"
      }
    ]
  }
];

this.updateContents = function(headline, subheadline, contents) {
  self.headline = headline;
  self.subheadline = subheadline;
  self.contents = contents;
  return self.update();
};
});


riot.tag2('note', '<div class="note-box"> <div class="note-content {animated:true,fadeInUp:!close,fadeOutUp:close}"> <div class="note-text"> <div class="icon-form"><img src="http://image.giccoo.com/projects/showman/img/icon-alert-note.png"></div> {title} </div> </div> </div>', '', '', function(opts) {
var self;

self = this;

this.title = opts.title;

this.close = false;

this.time = opts.time != null ? parseInt(opts.time) : 3000;

$(this.root).addClass("note");

this.on("mount", function() {
  setTimeout(function() {
    return self.unmount();
  }, self.time);
  return setTimeout(function() {
    self.close = true;
    return self.update();
  }, self.time - 500);
});
});