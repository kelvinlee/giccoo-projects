// Generated by CoffeeScript 1.8.0
var Bullet, Game, Note, Player, Socket, app, bindOri, game, playerlist, sock, stage, sync, userid;

Note = (function() {
  function Note(type, name, stage, game, x, y, size) {
    var tis;
    this.type = type;
    this.name = name;
    this.stage = stage;
    this.game = game;
    this.x = x != null ? x : 150;
    this.y = y != null ? y : 150;
    this.size = size != null ? size : 20;
    this.body = new createjs.Container();
    this.body.name = this.name;
    this.shape = new createjs.Shape();
    this.fontSize = this.size / 4 * 3;
    this.text = new createjs.Text(this.type, "bold " + this.fontSize + "px Arial", "#fbd81b");
    this.text.textAlign = "center";
    this.text.regY = this.fontSize / 7 * 4;
    this.brithday = new Date().getTime();
    this.lift = 200;
    this.w = this.size / 4;
    this.RoundAnimation = true;
    this.fadeOut = false;
    this.body.x = this.x;
    this.body.y = this.y;
    this.text.rotation = Math.random() * 30. - 15;
    this.RoundAnimate();
    this.body.addChild(this.shape, this.text);
    this.stage.addChild(this.body);
    tis = this;
    createjs.Tween.get(this.text).wait(50).to({
      scaleX: 1.2,
      scaleY: 1.2
    }, 200, createjs.Ease.backInOut).call(function() {
      return createjs.Tween.get(tis.text).to({
        alpha: 0
      }, 100).call(function() {
        return tis.killself();
      });
    });
  }

  Note.prototype.killself = function() {
    this.stage.removeChild(this.body);
    return delete this.game.notes[this.name];
  };

  Note.prototype.RoundAnimate = function() {
    var g, n;
    if (new Date().getTime() - this.brithday > 0) {
      n = (new Date().getTime() - this.brithday) / this.lift * this.w;
    } else {
      n = 0;
    }
    if (n >= this.w) {
      n = this.w;
    }
    g = this.shape.graphics;
    g.clear();
    g.setStrokeStyle(this.w - n, 'round', 'round');
    g.beginStroke("#fff");
    g.beginFill();
    g.drawCircle(0, 0, 20);
    if (n >= this.w) {
      this.RoundAnimation = false;
      return g.clear();
    }
  };

  Note.prototype.move = function() {
    if (this.RoundAnimation) {
      return this.RoundAnimate();
    }
  };

  return Note;

})();

Bullet = (function() {
  function Bullet(Direction, nums, x, y, speed, w, h) {
    var rotation;
    this.Direction = Direction;
    this.nums = nums != null ? nums : 0;
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
    this.speed = speed != null ? speed : 450;
    this.w = w != null ? w : 30;
    this.h = h != null ? h : 2;
    rotation = [2, 0, -2, 0];
    this.body = new createjs.Shape();
    this.body.name = "bullet";
    this.body.speed = this.speed;
    this.body.Defaultx = this.x;
    this.body.Defaulty = this.y;
    this.body.x = this.x;
    this.body.y = this.y;
    this.body.Birthday = new Date().getTime();
    this.body.Direction = this.Direction;
    this.body.rotation = rotation[this.nums % 4];
    this.body.width = this.w;
    this.body.height = this.h;
    if (!this.Direction) {
      this.body.skewY = 180;
      this.body.regX = this.w;
    }
    this.init();
  }

  Bullet.prototype.init = function() {
    var g, h, w;
    g = this.body.graphics;
    w = this.w;
    h = this.h;
    g.ss(0).moveTo(-5, -h).beginFill("rgba(0,0,0,0.8)").drawRoundRect(-w / 8, h, w, h, h / 2);
    g.beginFill("#fff");
    g.drawRoundRect(0, -h / 2, w - 2, h, 1, h, h, 1);
    g.setStrokeStyle(1, "round", "round").beginStroke("#fbd81b").moveTo(0, -h / 2).arcTo(w, -h, w, h, h);
    g.setStrokeStyle(1, "round", "round").beginStroke("#fbd81b").moveTo(0, h / 2).arcTo(w, h, w, -h, h);
    return g.moveTo(0, h / 2).lineTo(0, -h / 2);
  };

  Bullet.prototype.Collision = function() {};

  return Bullet;

})();

Player = (function() {
  function Player(name, game, stage, x, y, width, height, team) {
    this.name = name;
    this.game = game;
    this.stage = stage;
    this.x = x != null ? x : 150;
    this.y = y != null ? y : 150;
    this.width = width != null ? width : 36;
    this.height = height != null ? height : 29;
    this.team = team;
    this.playerGroup = new createjs.Container();
    this.starMoveTime = new Date().getTime();
    this.mybullets = 0;
    this.speed = 100;
    this.starX = 0;
    this.movend = true;
    this.Direction = true;
    this.deaded = false;
    this.runing = false;
    this.attacking = false;
    this.jumping = false;
    this.floating = false;
    this.syncing = true;
    this.body = {
      w: 36,
      h: 29
    };
    if (this.team == null) {
      this.team = this.name;
    }
    this.init();
  }

  Player.prototype.init = function() {
    var playerSheet;
    console.log("Create Player " + this.name);
    this.doing = "normal";
    playerSheet = new createjs.SpriteSheet({
      "images": ["img/people1.png", "img/people2.png", "img/people3.png", "img/people4.png"],
      frames: {
        height: 29,
        width: 36,
        regX: 1,
        regY: 1,
        count: 24
      },
      animations: {
        normal: [0, 0, "normal"],
        run: [0, 4, "run"],
        attack: [6, 12, "normal", 0.7],
        dead: [18, 23, "stop"],
        stop: [23, 23]
      }
    });
    this.playerSprite = new createjs.Sprite(playerSheet, "normal");
    this.playerGroup.canjumping = true;
    this.playerGroup.y = this.y;
    this.starX = this.x;
    this.playerGroup.x = this.starX;
    this.playerGroup.width = this.width;
    this.playerGroup.height = this.height;
    console.log(this.width, this.height);
    this.my();
    this.playerGroup.addChild(this.playerSprite);
    return this.stage.addChild(this.playerGroup);
  };

  Player.prototype.my = function() {
    if (userid !== this.name) {
      return false;
    }
    this.usernameLabel = new createjs.Text(this.name, "12px Arial", "#ffffff");
    this.usernameLabel.y = -15;
    this.usernameLabel.width = 200;
    this.usernameLabel.x = this.width / 2;
    this.usernameLabel.textAlign = "center";
    return this.playerGroup.addChild(this.usernameLabel);
  };

  Player.prototype.sync = function(data) {
    if (!this.syncing) {
      return false;
    }
    this.playerGroup.x = data.x;
    this.mybullets = data.mybullets;
    this.Direction = data.Direction;
    return this.refresh();
  };

  Player.prototype.getSync = function() {
    var data;
    if (!this.syncing) {
      return false;
    }
    data = {
      x: this.playerGroup.x,
      mybullets: this.mybullets,
      Direction: this.Direction
    };
    return data;
  };

  Player.prototype.refresh = function() {
    this.starX = this.playerGroup.x;
    return this.starMoveTime = new Date().getTime();
  };

  Player.prototype.action = function(action) {
    return this.playerSprite.gotoAndPlay(action);
  };

  Player.prototype.jump = function() {
    var handleChange, jumpend, jumpup, taget, tis;
    if (!this.jumping) {
      return false;
    }
    if (!this.playerGroup.canjumping) {
      return false;
    }
    this.playerGroup.canjumping = false;
    taget = createjs.Tween.get(this.playerGroup);
    tis = this;
    jumpend = function() {
      return this.canjumping = true;
    };
    jumpup = function() {
      return createjs.Tween.get(this).to({
        y: 150
      }, 300, createjs.Ease.quadIn).call(jumpend);
    };
    handleChange = function() {
      return console.log(tis.playerGroup.x);
    };
    return taget.to({
      y: 100
    }, 300, createjs.Ease.quadOut).call(jumpup);
  };

  Player.prototype.attack = function() {
    var B, x, y;
    if ((new Date().getTime() - this.attackPreTime) < 400) {
      return false;
    }
    this.attackPreTime = new Date().getTime();
    this.playerSprite.gotoAndPlay("attack");
    x = this.playerGroup.x + 36;
    y = this.playerGroup.y + 29 / 2;
    if (!this.Direction) {
      x = this.playerGroup.x - 20;
    }
    B = new Bullet(this.Direction, this.mybullets, x, y);
    this.game.bullteGround.addChild(B.body);
    return this.mybullets++;
  };

  Player.prototype.keepRun = function() {
    if (this.playerSprite.currentAnimation === "run") {
      return false;
    }
    if (!this.runing) {
      return false;
    }
    return this.playerSprite.gotoAndPlay("run");
  };

  Player.prototype.dead = function() {
    this.playerSprite.gotoAndPlay("dead");
    this.playerSprite.alpha = 1.5;
    this.deaded = true;
    return delete playerlist[this.name];
  };

  Player.prototype.killself = function() {
    return this.stage.removeChild(this.playerGroup);
  };

  Player.prototype.bullet = function() {
    var Curve, blt, bulletlife, card, removeBullet, _i, _j, _len, _len1, _ref, _results;
    removeBullet = [];
    bulletlife = 800;
    Curve = 1.5;
    _ref = this.game.bullteGround.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      blt = _ref[_i];
      if (blt.name === "bullet") {
        if (blt.stop != null) {
          continue;
        }
        card = (new Date().getTime() - blt.Birthday) / 1000;
        if (blt.Direction) {
          blt.x = blt.Defaultx + card * blt.speed;
        } else {
          blt.x = blt.Defaultx - card * blt.speed;
        }
        if (blt.rotation >= 2) {
          blt.y = blt.y + card * Curve;
        }
        if (blt.rotation <= -2) {
          blt.y = blt.y - card * Curve;
        }
        if ((blt.x > bulletlife) || (blt.x < -bulletlife) || (blt.stop != null)) {
          removeBullet.push(blt);
        } else {
          this.Collision({
            x: blt.x,
            y: blt.y,
            width: blt.width,
            height: blt.height,
            self: blt
          });
        }
      }
    }
    _results = [];
    for (_j = 0, _len1 = removeBullet.length; _j < _len1; _j++) {
      blt = removeBullet[_j];
      _results.push(this.game.bullteGround.removeChild(blt));
    }
    return _results;
  };

  Player.prototype.Collision = function(blt) {
    var e, enemy, enemys, name, _results;
    enemys = this.getEnemy();
    if (enemys == null) {
      return false;
    }
    _results = [];
    for (name in enemys) {
      if (name === userid) {
        continue;
      }
      e = enemys[name];
      if ((this.team == null) && e.team === this.team) {
        continue;
      }
      enemy = e.playerGroup;
      if (enemy.deaded) {
        continue;
      }
      if ((blt.x >= (enemy.x + enemy.width)) || ((blt.x + blt.width) <= enemy.x) || (blt.y >= (enemy.y + enemy.height)) || ((blt.y + blt.height) <= enemy.y)) {
        continue;
      } else {
        blt.self.alpha = 0;
        blt.self.stop = true;
        _results.push(this.Hit(e, blt.self.Direction));
      }
    }
    return _results;
  };

  Player.prototype.getEnemy = function() {
    return playerlist;
  };

  Player.prototype.Hit = function(e, Direction) {
    return sock.send("hit", {
      name: e.name,
      by: this.name,
      Direction: Direction
    });
  };

  Player.prototype.gotHit = function(nums, Direction) {
    var hx, hy, taget, tis, wl, x;
    this.syncing = false;
    this.floating = true;
    tis = this;
    taget = createjs.Tween.get(this.playerGroup);
    wl = 100;
    x = this.playerGroup.x + (Direction ? wl : -wl);
    hx = this.playerGroup.x + this.playerGroup.width / 2;
    hy = this.playerGroup.y + this.playerGroup.height / 2;
    console.log("Hit", this.playerGroup.x, this.playerGroup);
    this.game.note("疼", hx, hy);
    return taget.to({
      x: x
    }, 300, createjs.Ease.cubicOut).call(function() {
      if (tis.playerGroup.x > 600) {
        tis.playerGroup.x = 600;
      }
      if (tis.playerGroup.x < 0) {
        tis.playerGroup.x = 0;
      }
      tis.refresh();
      tis.syncing = true;
      return tis.floating = false;
    });
  };

  Player.prototype.move = function() {
    if (this.deaded) {
      this.playerSprite.alpha -= 0.05;
    }
    if (this.playerSprite.alpha <= 0) {
      this.killself();
    }
    this.bullet();
    if (this.deaded) {
      return false;
    }
    if (this.attacking) {
      this.attack();
    }
    if (this.runing) {
      this.keepRun();
    }
    if (this.jumping) {
      this.jump();
    }
    if (this.floating) {
      return false;
    }
    if (this.Direction) {
      this.playerSprite.skewY = 0;
      this.playerSprite.regX = 0;
      if (this.playerGroup.x >= 600) {
        return false;
      }
      if (!this.runing) {
        return false;
      }
      return this.playerGroup.x = this.starX + (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    } else {
      this.playerSprite.skewY = 180;
      this.playerSprite.regX = 36;
      if (this.playerGroup.x <= 0) {
        return false;
      }
      if (!this.runing) {
        return false;
      }
      return this.playerGroup.x = this.starX - (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    }
  };

  return Player;

})();

Game = (function() {
  function Game(stage) {
    this.stage = stage;
    this.players = {};
    this.notes = {};
    this.init();
  }

  Game.prototype.init = function() {
    this.backgroundCont = new createjs.Container();
    this.background = new createjs.Bitmap("img/background.png");
    this.background.setTransform(0, 0, 0.4, 0.4);
    this.backgroundCont.addChild(this.background);
    this.playGround = new createjs.Container();
    this.bullteGround = new createjs.Container();
    this.noteBackground = new createjs.Container();
    this.userInterGround = new createjs.Container();
    return this.stage.addChild(this.backgroundCont, this.playGround, this.bullteGround, this.noteBackground, this.userInterGround);
  };

  Game.prototype.tick = function(evt) {
    var _note, _player, _results;
    for (_player in this.players) {
      this.players[_player].move();
    }
    _results = [];
    for (_note in this.notes) {
      _results.push(this.notes[_note].move());
    }
    return _results;
  };

  Game.prototype.createPlayer = function(name) {
    return this.players[name] = new Player(name, this, this.playGround);
  };

  Game.prototype.getPlayer = function(name) {
    return this.players[name];
  };

  Game.prototype.note = function(type, x, y, size) {
    var name;
    if (type == null) {
      type = "HIT";
    }
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
    this.size = size != null ? size : 20;
    name = parseInt(Math.random() * 100000);
    return this.notes[name] = new Note(type, name, this.noteBackground, this, this.x, this.y, this.size);
  };

  Game.prototype.test = function() {
    var g;
    this.testDom = new createjs.Shape();
    g = this.test.graphics;
    g.clear();
    g.setStrokeStyle(5, 'round', 'round');
    g.beginStroke("#fff");
    g.beginFill();
    g.drawCircle(150, 150, 14);
    return this.stage.addChild(this.testDom);
  };

  return Game;

})();

Socket = (function() {
  function Socket(url, myname, callback) {
    this.url = url;
    this.myname = myname;
    this.callback = callback;
    this.option = {};
    this.beforeSendTime = new Date().getTime();
    this.sock = io.connect(this.url);
    this.init();
  }

  Socket.prototype.init = function() {
    var tis;
    tis = this;
    this.sock.emit('login', {
      name: this.myname
    });
    this.sock.on('editor', function(data) {});
    this.sock.on('join', function(data) {
      console.log("user join", data);
      if (typeof tis.option.join === "function") {
        return tis.option.join.call(data);
      }
    });
    this.sock.on("removeuser", function(data) {
      if (typeof tis.option.removeuser === "function") {
        return tis.option.removeuser.call(data);
      }
    });
    this.sock.on("ctrl pass", function(data) {
      if (typeof tis.option.ctrl === "function") {
        return tis.option.ctrl.call(data);
      }
    });
    this.sock.on("attack", function(data) {
      if (typeof tis.option.attack === "function") {
        return tis.option.attack.call(data);
      }
    });
    this.sock.on("jumping", function(data) {
      if (typeof tis.option.jumping === "function") {
        return tis.option.jumping.call(data);
      }
    });
    this.sock.on("moveing", function(data) {
      if (typeof tis.option.moveing === "function") {
        return tis.option.moveing.call(data);
      }
    });
    this.sock.on("Direction", function(data) {
      if (typeof tis.option.Direction === "function") {
        return tis.option.Direction.call(data);
      }
    });
    this.sock.on("gotHit", function(data) {
      if (typeof tis.option.gotHit === "function") {
        return tis.option.gotHit.call(data);
      }
    });
    this.sock.on("sync", function(data) {
      if (data.name === tis.myname) {
        data.delay = new Date().getTime() - this.beforeSendTime;
      }
      if (typeof tis.option.sync === "function") {
        return tis.option.sync.call(data);
      }
    });
    return this.callback.call(this);
  };

  Socket.prototype.send = function(type, data) {
    if (type === "sync") {
      this.beforeSendTime = new Date().getTime();
    }
    return this.sock.emit(type, data);
  };

  Socket.prototype.test = function() {
    var i, _i, _results;
    _results = [];
    for (i = _i = 0; _i <= 99; i = ++_i) {
      this.send("moveing", {
        name: "test",
        moveing: i
      });
      _results.push(console.log(i));
    }
    return _results;
  };

  return Socket;

})();

bindOri = function(portrait, landscape) {
  return window.addEventListener(("onorientationchange" in window ? "orientationchange" : "resize"), function() {
    if (window.orientation === 180 || window.orientation === 0) {
      portrait.call();
    }
    if (window.orientation === 90 || window.orientation === -90) {
      return landscape.call();
    }
  });
};

bindOri(function() {
  return alert("normal");
}, function() {
  return alert("heng");
});

app = angular.module('kelvin', ["ngRoute", "ngTouch", "ngAnimate"]).config([
  "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    return $routeProvider.when('/', {
      templateUrl: "home.html",
      controller: "HomeController",
      controllerAs: "home"
    });
  }
]);

game = {};

stage = {};

sock = {};

userid = "user" + parseInt(Math.random() * 1000);

playerlist = {};

app.controller('MainController', function($rootScope, $scope) {
  return $rootScope.$on("$routeChangeSuccess", function() {
    return $(".loaded").removeClass("loaded");
  });
});

app.controller('HomeController', function($rootScope, $scope) {
  sock = new Socket("http://kelvin-air.local:8888", userid, function() {
    return setInterval(function() {
      return sync();
    }, 100);
  });
  sock.option.join = function() {
    if (this.name == null) {
      return false;
    }
    playerlist[this.name] = game.createPlayer(this.name);
    if (this.name === userid) {
      return playerlist[this.name].my();
    }
  };
  sock.option.removeuser = function() {
    if ((playerlist[this.name] != null) && (playerlist[this.name].dead != null)) {
      playerlist[this.name].dead();
    }
    return delete playerlist[this.name];
  };
  sock.option.attack = function() {
    if ((playerlist[this.name] == null) || (playerlist[this.name].attacking == null)) {
      return false;
    }
    return playerlist[this.name].attacking = this.attacking;
  };
  sock.option.jumping = function() {
    if ((playerlist[this.name] == null) || (playerlist[this.name].jumping == null)) {
      return false;
    }
    return playerlist[this.name].jumping = this.jumping;
  };
  sock.option.moveing = function() {
    if ((playerlist[this.name] == null) || (playerlist[this.name].runing == null)) {
      return false;
    }
    playerlist[this.name].runing = this.moveing;
    return playerlist[this.name].refresh();
  };
  sock.option.Direction = function() {
    if ((playerlist[this.name] == null) || (playerlist[this.name].Direction == null)) {
      return false;
    }
    if (playerlist[this.name].Direction !== this.Direction) {
      playerlist[this.name].refresh();
    }
    return playerlist[this.name].Direction = this.Direction;
  };
  sock.option.gotHit = function() {
    if (playerlist[this.name] == null) {
      return false;
    }
    return playerlist[this.name].gotHit(this.hit, this.Direction);
  };
  sock.option.sync = function() {
    if (playerlist[this.name] == null) {
      return false;
    }
    playerlist[this.name].sync(this);
    if (this.delay != null) {
      return console.log("延迟", this.delay);
    }
  };
  $scope.$watch("loaded", function() {
    if ($scope.loaded) {
      return $(".loaded").removeClass("loaded");
    }
  });
  return $scope.$on("to-create", function(evt, data) {
    var tick;
    stage = new createjs.Stage("GameCanvas");
    game = new Game(stage);
    tick = function(evt) {
      game.tick(evt);
      return stage.update(evt);
    };
    createjs.Ticker.addEventListener("tick", tick);
    sock.send("getPlayers", {
      all: "all"
    });
    return console.log("请求获取所有人物数据:", userid);
  });
});

app.controller("AttackController", function($scope, $rootScope) {
  return $scope.$watch("attack", function() {
    sock.send("attack", {
      name: userid,
      attacking: $scope.attack
    });
    return sync();
  });
});

app.controller("MoveController", function($scope, $rootScope) {
  $scope.$watch("moveing", function() {
    return sock.send("moveing", {
      name: userid,
      moveing: $scope.moveing
    });
  });
  $scope.$watch("jumping", function() {
    return sock.send("jumping", {
      name: userid,
      jumping: $scope.jumping
    });
  });
  $scope.$watch("Direction", function() {
    return sock.send("Direction", {
      name: userid,
      Direction: $scope.Direction
    });
  });
  return $scope.$watch("sync", function() {
    if ((playerlist[userid] == null) || typeof playerlist[userid].getSync !== "function") {
      return false;
    }
    return sync();
  });
});

sync = function() {
  var data;
  if (playerlist[userid] == null) {
    return false;
  }
  data = playerlist[userid].getSync();
  if (!data) {
    return false;
  }
  data.name = userid;
  return sock.send("sync", data);
};

app.directive('moveBox', function($swipe) {
  return {
    restrict: 'E',
    controller: 'MoveController',
    controllerAs: "MoveCont",
    link: function(scope, elem, attrs) {
      var end, move, star, _default;
      scope.moveing = false;
      scope.point = false;
      scope.Direction = true;
      scope.jumping = false;
      scope.sync = false;
      _default = {
        x: 0,
        y: 0
      };
      star = function(evt) {
        evt.preventDefault();
        _default.x = evt.touches[0].pageX;
        _default.y = evt.touches[0].pageY;
        return scope.$apply(function() {
          scope.point = true;
          scope.moveing = true;
          scope.sync = true;
          return setTimeout(function() {
            return $(elem.children()[0]).css({
              left: evt.touches[0].pageX,
              top: evt.touches[0].pageY
            });
          }, 0);
        });
      };
      move = function(evt) {
        var mote, moteY, x, y;
        x = evt.touches[0].pageX;
        y = evt.touches[0].pageY;
        mote = _default.x - x;
        evt.preventDefault();
        if (mote > 10 && scope.Direction !== false) {
          scope.$apply(function() {
            return scope.Direction = false;
          });
        } else if (mote < -10 && scope.Direction !== true) {
          scope.$apply(function() {
            return scope.Direction = true;
          });
        }
        moteY = _default.y - y;
        if (moteY > 40 && scope.jumping !== true) {
          return scope.$apply(function() {
            return scope.jumping = true;
          });
        } else if (scope.jumping) {
          return scope.$apply(function() {
            return scope.jumping = false;
          });
        }
      };
      end = function(evt) {
        return scope.$apply(function() {
          scope.moveing = false;
          scope.point = false;
          scope.jumping = false;
          return scope.sync = false;
        });
      };
      elem.bind("touchstart", star);
      elem.bind("touchmove", move);
      return elem.bind("touchend", end);
    }
  };
});

app.directive('attackBox', function($swipe) {
  return {
    restrict: 'E',
    controller: 'AttackController',
    controllerAs: "attackCont",
    link: function(scope, elem, attrs) {
      var end, move, star;
      scope.attack = false;
      star = function(evt) {
        evt.preventDefault();
        return scope.$apply(function() {
          return scope.attack = true;
        });
      };
      move = function(evt) {
        return evt.preventDefault();
      };
      end = function(evt) {
        return scope.$apply(function() {
          return scope.attack = false;
        });
      };
      elem.bind("touchstart", star);
      elem.bind("touchsmove", move);
      return elem.bind("touchend", end);
    }
  };
});

app.directive("myCanvas", function($swipe) {
  return {
    restrict: 'E',
    template: '<canvas></canvas>',
    replace: true,
    link: function(scope, elem, attrs) {
      return scope.$emit("to-create", 'parent');
    }
  };
});
