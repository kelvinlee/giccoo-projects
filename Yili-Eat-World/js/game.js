// Generated by CoffeeScript 1.9.1
var Food, Game, Player, _food_history;

Game = (function() {
  function Game(name1, curtain, scoreFun, noteFun, puttyFun, over) {
    var bg, rendererOptions;
    this.name = name1;
    this.scoreFun = scoreFun;
    this.noteFun = noteFun;
    this.puttyFun = puttyFun;
    this.over = over;
    this.stage = new PIXI.Stage();
    this.stage.interactive = true;
    this.score = 0;
    this.milk = 0;
    this.stop = false;
    this.eat = {};
    rendererOptions = {
      antialias: true,
      transparent: true
    };
    this.renderer = PIXI.autoDetectRenderer(610, 610, rendererOptions);
    document.getElementById(curtain).appendChild(this.renderer.view);
    bg = new PIXI.Sprite.fromImage(cdn + 'img/game-bg.png');
    this.stage.addChild(bg);
    this.MyPlayer = new Player();
    this.foodList = [parseInt(Math.random() * (18 - 16)) + 16];
    this.food = new Food(this.foodList);
    this.stage.addChild(this.food);
    this.handicap = new PIXI.Sprite.fromImage(cdn + 'img/handicap.png');
    this.handicap.w = this.handicap.width;
    this.handicap.h = this.handicap.height;
    if (this.MyPlayer.moveTo === 1) {
      this.handicap.x = 140;
      this.handicap.y = 440;
    }
    if (this.MyPlayer.moveTo === 2) {
      this.handicap.x = 140;
      this.handicap.y = 180;
    }
    if (this.MyPlayer.moveTo === 3) {
      this.handicap.x = 390;
      this.handicap.y = 180;
    }
    if (this.MyPlayer.moveTo === 4) {
      this.handicap.x = 440;
      this.handicap.y = 280;
    }
    console.log("handicap:", this.handicap.x, this.handicap.y, this.handicap.width, this.handicap.height);
    this.stage.addChild(this.handicap);
    this.stage.addChild(this.MyPlayer);
    this.update();
  }

  Game.prototype.createBoom = function(x, y) {
    var boom, self, tween;
    boom = new PIXI.Sprite.fromImage(cdn + 'img/game-boom.png');
    boom.x = x;
    boom.y = y;
    boom.anchor.x = 0.5;
    boom.anchor.y = 0.5;
    boom.scale = new PIXI.Point(0, 0);
    this.stage.addChild(boom);
    self = this.stage;
    return tween = new TWEEN.Tween({
      x: 0
    }).to({
      x: 1
    }, 500).easing(TWEEN.Easing.Elastic.InOut).onUpdate(function() {
      return boom.scale = new PIXI.Point(this.x, this.x);
    }).start().onComplete(function() {
      return self.removeChild(boom);
    });
  };

  Game.prototype.changeD = function(d) {
    if (d > 4 || d < 1) {
      return false;
    }
    return this.MyPlayer.changeD(d);
  };

  Game.prototype.buildFood = function() {
    var egg, eggs, i, len, ref;
    if (this.food != null) {
      return false;
    }
    if (this.eat[this.oldfood.id] != null) {
      this.eat[this.oldfood.id]++;
    } else {
      this.eat[this.oldfood.id] = 1;
    }
    if (this.oldfood.id === 1) {
      this.milk++;
      this.MyPlayer.changeF();
    }
    this.noteFun(this.oldfood.id);
    eggs = 0;
    ref = this.foodList;
    for (i = 0, len = ref.length; i < len; i++) {
      egg = ref[i];
      if (this.eat[egg] > 0) {
        eggs++;
      }
    }
    console.log(eggs, this.eat);
    if (eggs >= this.foodList.length - 1 && (this.puttyFun != null)) {
      this.puttyFun(this.eat);
      this.puttyFun = null;
    }
    this.score += this.oldfood.score;
    this.scoreFun();
    this.addFood();
    return this.MyPlayer.changeS();
  };

  Game.prototype.addFood = function() {
    var blt, enemy;
    this.stage.removeChild(this.oldfood);
    this.food = new Food(this.foodList);
    blt = this.food;
    enemy = this.MyPlayer;
    if (!((blt.x >= (enemy.x + enemy.w)) || ((blt.x + blt.w) <= enemy.x) || (blt.y >= (enemy.y + enemy.h)) || ((blt.y + blt.h) <= enemy.y))) {
      this.food.x = 610 - this.food.w - enemy.w;
      if (this.food.x < 0) {
        this.food.x = 0;
      }
      if (this.food.x > 610 - this.food.w) {
        this.food.x = 610 - enemy.w;
      }
      this.food.y = 610 - this.food.h - enemy.h;
      if (this.food.y < 0) {
        this.food.y = 0;
      }
      if (this.food.y > 610 - this.food.h) {
        this.food.y = 610 - this.food.h;
      }
    }
    enemy = this.handicap;
    if (!((blt.x >= (enemy.x + enemy.w)) || ((blt.x + blt.w) <= enemy.x) || (blt.y >= (enemy.y + enemy.h)) || ((blt.y + blt.h) <= enemy.y))) {
      if (this.food.x >= 305 && this.food.x <= 610 - this.food.w) {
        this.food.x += this.handicap.x - this.handicap.w;
      }
      if (this.food.x > 0 && this.food.x < 305) {
        this.food.x -= this.handicap.x + this.handicap.w;
      }
      if (this.food.x < 0) {
        this.food.x = 0;
      }
      if (this.food.x > 610 - this.food.w) {
        this.food.x = 610 - enemy.w;
      }
      if (this.food.y >= 305 && this.food.y <= 610 - this.food.h) {
        this.food.y = this.handicap.y + this.handicap.h;
      }
      if (this.food.y > 0 && this.food.y < 305) {
        this.food.y = this.handicap.y - this.food.h;
      }
      if (this.food.y < 0) {
        this.food.y = 0;
      }
      if (this.food.y > 610 - this.food.h) {
        this.food.y = 610 - this.food.h;
      }
    }
    return this.stage.addChild(this.food);
  };

  Game.prototype.collision = function() {
    var blt, enemy;
    blt = this.MyPlayer;
    if (this.food != null) {
      enemy = this.food;
      if (!((blt.x >= (enemy.x + enemy.w)) || ((blt.x + blt.w) <= enemy.x) || (blt.y >= (enemy.y + enemy.h)) || ((blt.y + blt.h) <= enemy.y))) {
        this.oldfood = this.food;
        if (this.oldfood.id === 1) {
          this.createBoom(this.MyPlayer.x + this.MyPlayer.w / 2, this.MyPlayer.y + this.MyPlayer.h / 2);
        }
        this.food = null;
        this.oldfood.dead(this.buildFood.bind(this));
      }
    }
    if ((this.food != null) && this.food.id !== 1 && (new Date().getTime() - this.food.brithy) >= 10000) {
      this.oldfood = this.food;
      this.food = null;
      this.addFood();
    }
    if (blt.x > (610 - blt.size) || blt.x < 0 || blt.y > (610 - blt.size) || blt.y < 0) {
      this.GameOver("墙");
    }
    if (this.handicap) {
      enemy = this.handicap;
      if (!((blt.x >= (enemy.x + enemy.w)) || ((blt.x + blt.w) <= enemy.x) || (blt.y >= (enemy.y + enemy.h)) || ((blt.y + blt.h) <= enemy.y))) {
        return this.GameOver("遮挡");
      }
    }
  };

  Game.prototype.pause = function() {
    this.stop = true;
    return this.pauseTime = new Date().getTime();
  };

  Game.prototype.play = function() {
    this.pauseTime = new Date().getTime() - this.pauseTime;
    this.food.updateBrithy(this.pauseTime);
    this.MyPlayer.updateDefault();
    this.stop = false;
    return this.update();
  };

  Game.prototype.GameOver = function(reason) {
    this.MyPlayer.dead = true;
    this.pause();
    this.over(this.eat);
    return console.log("死亡原因: ", reason);
  };

  Game.prototype.update = function() {
    if (this.stop) {
      return false;
    }
    this.renderer.render(this.stage);
    TWEEN.update();
    if (this.MyPlayer != null) {
      this.MyPlayer.update();
    }
    if (this.food != null) {
      this.food.update();
    }
    this.collision();
    return requestAnimFrame(this.update.bind(this));
  };

  return Game;

})();

Player = (function() {
  function Player(name1) {
    var self;
    this.name = name1;
    PIXI.Sprite.call(this);
    self = this;
    this.size = 150 * 0.65;
    this.maxSpeed = 400;
    this.speed = 100;
    this.speedGrow = 0.1;
    this.moveTo = parseInt(Math.random() * 4) + 1;
    this.dead = false;
    this.brithy = true;
    this.superTime = null;
    this.player = new PIXI.Sprite.fromImage(cdn + 'img/game-p-stomach.png');
    this.player.scale = new PIXI.Point(0.65, 0.65);
    this.addChild(this.player);
    this.player.x = -10;
    this.player.y = -10;
    this.x = 610 / 2 - this.size / 2;
    this.y = 610 / 2 - this.size / 2;
    this.starX = this.x;
    this.starY = this.y;
    this.starMoveTime = new Date().getTime();
    this.w = this.player.width - 10;
    this.h = this.player.height - 15;
    console.log("add body", this.w, this.h);
  }

  Player.prototype = Object.create(PIXI.Sprite.prototype);

  Player.prototype.changeF = function(normal) {
    var name, nameList, self;
    if (normal == null) {
      normal = false;
    }
    nameList = ["lufei", "gangtiexia", "huluwa", "mingren"];
    name = "stomach";
    if (!normal) {
      name = nameList[parseInt(Math.random() * (nameList.length - 1))];
    }
    this.removeChild(this.player);
    this.player = new PIXI.Sprite.fromImage(cdn + 'img/game-p-' + name + '.png');
    this.player.scale = new PIXI.Point(0.65, 0.65);
    this.addChild(this.player);
    self = this;
    clearTimeout(this.superTime);
    if (normal) {
      return true;
    }
    return this.superTime = setTimeout(function() {
      return self.changeF(true);
    }, 5000);
  };

  Player.prototype.changeD = function(d) {
    if (d > 4 || d < 1) {
      return false;
    }
    if (this.moveTo === parseInt(d)) {
      return false;
    }
    this.updateDefault();
    return this.moveTo = parseInt(d);
  };

  Player.prototype.changeS = function() {
    if (this.speed >= this.maxSpeed) {
      return false;
    }
    this.updateDefault();
    this.speed = this.speed + this.speed * this.speedGrow;
    if (this.speed >= this.maxSpeed) {
      return this.speed = this.maxSpeed;
    }
  };

  Player.prototype.updateDefault = function() {
    this.starMoveTime = new Date();
    this.starX = this.x;
    return this.starY = this.y;
  };

  Player.prototype.update = function() {
    if (this.dead) {
      return false;
    }
    if (this.moveTo === 1) {
      return this.y = this.starY - (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    }
    if (this.moveTo === 3) {
      return this.y = this.starY + (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    }
    if (this.moveTo === 2) {
      return this.x = this.starX + (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    }
    if (this.moveTo === 4) {
      return this.x = this.starX - (new Date().getTime() - this.starMoveTime) / 1000 * this.speed;
    }
  };

  return Player;

})();

_food_history = [];

Food = (function() {
  function Food(random) {
    var self, tween;
    PIXI.Sprite.call(this);
    this.id = random[parseInt(Math.random() * random.length)];
    console.log("id:", this.id);
    if (_food_history.length > 2 && _food_history[_food_history.length - 1] !== 1 && _food_history[_food_history.lenght - 2] !== 1) {
      this.id = 1;
    }
    if (_food_history.length > 20) {
      _food_history = [];
    }
    _food_history.push(this.id);
    this.food = new PIXI.Sprite.fromImage(cdn + 'img/game-item-' + this.id + '.png');
    this.brithy = new Date();
    this.Fainting = false;
    this.FaintingTime = 1000 + Math.random() * 4000;
    this.addChild(this.food);
    this.anchor = new PIXI.Point(40, 50);
    this.scale = new PIXI.Point(0, 0);
    self = this;
    self.w = self.food.width;
    self.h = self.food.height;
    this.x = Math.random() * (610 - this.food.width);
    this.y = Math.random() * (610 - this.food.height);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    tween = new TWEEN.Tween({
      x: 0
    }).to({
      x: 1
    }, 1000).easing(TWEEN.Easing.Elastic.InOut).onUpdate(function() {
      return self.scale = new PIXI.Point(this.x, this.x);
    }).start();
    this.score = 13;
    if (this.id === 2 || this.id === 3 || this.id === 4 || this.id === 5) {
      this.score = 8;
    }
    if (this.id === 6 || this.id === 7 || this.id === 8 || this.id === 9) {
      this.score = 9;
    }
    if (this.id === 10 || this.id === 11 || this.id === 12 || this.id === 13) {
      this.score = 15;
    }
    if (this.id === 16 || this.id === 17 || this.id === 18) {
      this.score = 11;
    }
    if (this.id === 14) {
      this.score = 10;
    }
    if (this.id === 15) {
      this.score = 12;
    }
  }

  Food.prototype = Object.create(PIXI.Sprite.prototype);

  Food.prototype.updateBrithy = function(time) {
    return this.brithy += time;
  };

  Food.prototype.burn = function() {
    var self;
    self = this;
    if (!this.Fainting) {
      if ((new Date().getTime() - this.brithy) >= this.FaintingTime) {
        this.Fainting = true;
        self.removeChild(self.food);
        self.food = new PIXI.Sprite.fromImage(cdn + 'img/game-item-' + self.id + '-old.png');
        self.addChild(self.food);
        return self.score = parseInt(self.score / 2);
      }
    }
  };

  Food.prototype.dead = function(callback) {
    var tween;
    return tween = new TWEEN.Tween({
      x: 1
    }).to({
      x: 0
    }, 100).easing(TWEEN.Easing.Elastic.InOut).onUpdate(function() {
      return self.alpha = this.x;
    }).start().onComplete(callback);
  };

  Food.prototype.getWH = function() {};

  Food.prototype.update = function() {
    if (this.id !== 1) {
      return this.burn();
    }
  };

  return Food;

})();
