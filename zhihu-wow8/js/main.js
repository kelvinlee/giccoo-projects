var $_GET, AnimatedSprite, Container, Graphics, IsPC, ParticleContainer, Sprite, Text, Texture, TextureCache, UGC, _CDN, _imgurl, answers, autoDetectRenderer, cacheAnswer, getId, getRandom, getTe, global, init, load, loadWechatConfig, loader, main, pre, questions, resource, resources, sys, ugc;

Container = PIXI.Container;

ParticleContainer = PIXI.ParticleContainer;

autoDetectRenderer = PIXI.autoDetectRenderer;

loader = PIXI.loader;

resources = PIXI.loader.resources;

TextureCache = PIXI.utils.TextureCache;

Texture = PIXI.Texture;

Sprite = PIXI.Sprite;

Graphics = PIXI.Graphics;

resource = PIXI.loader.resources;

Text = PIXI.Text;

AnimatedSprite = PIXI.extras.AnimatedSprite;

getTe = function(id) {
  return resource[id].texture;
};

getId = function(id, link) {
  return loader.resources[link].textures[id];
};

// for fix ios 8 less
if (Number.isInteger == null) {
  Number.isInteger = function(int) {
    return int >= 0;
  };
}

_CDN = "./";

UGC = (function() {
  class UGC {
    constructor(arg) {
      var copyNumber, random;
      this.opts = {
        el: "main",
        w: 1080,
        h: 1920,
        trueH: 1314,
        count: 6,
        speed: 1,
        alpha: 0.8,
        defaultShow: true,
        class: "",
        name: "death",
        fillColor: 0x66CCFF
      };
      this.opts = Object.assign(this.opts, arg);
      this.default.h = document.documentElement.clientHeight;
      this.default.w = document.documentElement.clientWidth;
      this.default.ratio = this.opts.w / this.default.w;
      this.app = new PIXI.Application({
        width: this.opts.w,
        height: this.opts.h,
        transparent: true,
        preserveDrawingBuffer: true
      });
      if ((this.opts.class != null) && this.opts.class !== "") {
        this.app.view.className = this.opts.class;
      }
      this.stage = this.app.stage;
      document.getElementById(this.opts.el).appendChild(this.app.view);
      copyNumber = {
        "death": 4,
        "demon": 1,
        "dryad": 2,
        "huntsman": 2,
        "mage": 2,
        "monk": 3,
        "paladin": 3,
        "pastor": 3,
        "shaman": 2,
        "stalker": 3,
        "warlock": 2,
        "warrior": 2
      };
      random = Math.floor(Math.random() * copyNumber[this.opts.name] + 1);
      PIXI.loader.add([`${_CDN}img/r-${this.opts.name}.jpg`, `${_CDN}img/r-${this.opts.name}-copy-1.png`, `${_CDN}img/small-logo.png`, `${_CDN}img/qrcode.png`]).load(this.build.bind(this));
      this.default.MH = this.opts.h * 0.65;
    }

    build() {
      var bg, logo, qrcode, text;
      bg = new Sprite(getTe(`${_CDN}img/r-${this.opts.name}.jpg`));
      text = new Sprite(getTe(`${_CDN}img/r-${this.opts.name}-copy-1.png`));
      this.logo = logo = new Sprite(getTe(`${_CDN}img/small-logo.png`));
      this.qrcode = qrcode = new Sprite(getTe(`${_CDN}img/qrcode.png`));
      // qrcode.y = bg.height - qrcode.height - 200
      this.stage.addChild(bg, text, logo, qrcode);
      this.app.renderer.render(this.app.stage);
      main.ugc = this.app.view.toDataURL();
      qrcode.alpha = 0;
      return logo.alpha = 0;
    }

    save() {
      this.qrcode.alpha = 0;
      this.logo.alpha = 1;
      return TweenMax.to(this.qrcode, 0.2, {
        alpha: 1,
        delay: 1,
        onComplete: () => {
          this.app.renderer.render(this.app.stage);
          main.ugcsave = this.app.view.toDataURL();
          return this.hide();
        }
      });
    }

    // @.qrcode.visible = false
    // @.logo.visible = false
    hide() {
      this.qrcode.alpha = 0;
      return this.logo.alpha = 0;
    }

  };

  UGC.prototype.default = {
    w: 320,
    h: 160,
    running: true
  };

  UGC.prototype.started = false;

  UGC.prototype.over = false;

  UGC.prototype.online = false;

  UGC.prototype.blocks = [];

  UGC.prototype.bottles = [];

  UGC.prototype.enemys = [];

  UGC.prototype.lights = [];

  UGC.prototype._progress = 0;

  UGC.prototype.startTime = null;

  return UGC;

}).call(this);

// @codekit-prepend "../../libs/coffee/pixi-base"
// @codekit-prepend "./UGC"
_CDN = "";

_imgurl = "";

global = {};

main = {};

pre = {};

load = {};

ugc = {};

sys = "";

answers = {
  list: [
    {
      id: 2,
      list: [
        {
          id: 3,
          list: [
            {
              id: 4,
              list: [
                {
                  id: 5,
                  list: [
                    {
                      id: 6,
                      list: [
                        {
                          id: 7,
                          list: [
                            {
                              id: 11,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            },
                            {
                              id: 15,
                              list: [
                                {
                                  name: "pastor"
                                },
                                {
                                  name: "mage"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 8,
                          list: [
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            },
                            {
                              id: 9,
                              list: [
                                {
                                  name: "dryad"
                                },
                                {
                                  name: "paladin"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 15,
                      list: [
                        {
                          name: "pastor"
                        },
                        {
                          name: "mage"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 17,
                  list: [
                    {
                      id: 18,
                      list: [
                        {
                          name: "shaman"
                        },
                        {
                          name: "huntsman"
                        }
                      ]
                    },
                    {
                      id: 5,
                      list: [
                        {
                          id: 6,
                          list: [
                            {
                              id: 11,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            },
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 15,
                          list: [
                            {
                              name: "pastor"
                            },
                            {
                              name: "mage"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 5,
              list: [
                {
                  id: 6,
                  list: [
                    {
                      id: 7,
                      list: [
                        {
                          id: 11,
                          list: [
                            {
                              name: "death"
                            },
                            {
                              name: "warlock"
                            }
                          ]
                        },
                        {
                          id: 15,
                          list: [
                            {
                              name: "pastor"
                            },
                            {
                              name: "mage"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 8,
                      list: [
                        {
                          id: 10,
                          list: [
                            {
                              name: "paladin"
                            },
                            {
                              name: "demon"
                            }
                          ]
                        },
                        {
                          id: 9,
                          list: [
                            {
                              name: "dryad"
                            },
                            {
                              name: "paladin"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 15,
                  list: [
                    {
                      name: "pastor"
                    },
                    {
                      name: "mage"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 19,
          list: [
            {
              id: 20,
              list: [
                {
                  id: 21,
                  list: [
                    {
                      id: 14,
                      list: [
                        {
                          id: 26,
                          list: [
                            {
                              name: "stalker"
                            },
                            {
                              name: "pastor"
                            }
                          ]
                        },
                        {
                          id: 16,
                          list: [
                            {
                              name: "monk"
                            },
                            {
                              name: "dryad"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 11,
                      list: [
                        {
                          name: "death"
                        },
                        {
                          name: "warlock"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 22,
                  list: [
                    {
                      id: 23,
                      list: [
                        {
                          id: 16,
                          list: [
                            {
                              name: "monk"
                            },
                            {
                              name: "dryad"
                            }
                          ]
                        },
                        {
                          id: 10,
                          list: [
                            {
                              name: "paladin"
                            },
                            {
                              name: "demon"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 12,
                      list: [
                        {
                          id: 13,
                          list: [
                            {
                              name: "demon"
                            },
                            {
                              name: "warrior"
                            }
                          ]
                        },
                        {
                          id: 9,
                          list: [
                            {
                              name: "dryad"
                            },
                            {
                              name: "paladin"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 21,
              list: [
                {
                  id: 4,
                  list: [
                    {
                      id: 5,
                      list: [
                        {
                          id: 6,
                          list: [
                            {
                              id: 7,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            },
                            {
                              id: 8,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "shaman"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 15,
                          list: [
                            {
                              name: "pastor"
                            },
                            {
                              name: "mage"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 17,
                      list: [
                        {
                          id: 18,
                          list: [
                            {
                              name: "shaman"
                            },
                            {
                              name: "huntsman"
                            }
                          ]
                        },
                        {
                          id: 5,
                          list: [
                            {
                              id: 26,
                              list: [
                                {
                                  name: "stalker"
                                },
                                {
                                  name: "pastor"
                                }
                              ]
                            },
                            {
                              id: 16,
                              list: [
                                {
                                  name: "monk"
                                },
                                {
                                  name: "dryad"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 17,
                  list: [
                    {
                      id: 18,
                      list: [
                        {
                          name: "shaman"
                        },
                        {
                          name: "huntsman"
                        }
                      ]
                    },
                    {
                      id: 5,
                      list: [
                        {
                          id: 26,
                          list: [
                            {
                              name: "stalker"
                            },
                            {
                              name: "pastor"
                            }
                          ]
                        },
                        {
                          id: 16,
                          list: [
                            {
                              name: "monk"
                            },
                            {
                              name: "dryad"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 24,
      list: [
        {
          id: 25,
          list: [
            {
              id: 6,
              list: [
                {
                  id: 7,
                  list: [
                    {
                      id: 11,
                      list: [
                        {
                          name: "death"
                        },
                        {
                          name: "warlock"
                        }
                      ]
                    },
                    {
                      id: 13,
                      list: [
                        {
                          name: "demon"
                        },
                        {
                          name: "warrior"
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 8,
                  list: [
                    {
                      id: 10,
                      list: [
                        {
                          name: "paladin"
                        },
                        {
                          name: "demon"
                        }
                      ]
                    },
                    {
                      id: 13,
                      list: [
                        {
                          name: "demon"
                        },
                        {
                          id: 10,
                          list: [
                            {
                              name: "paladin"
                            },
                            {
                              name: "demon"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 17,
              list: [
                {
                  id: 18,
                  list: [
                    {
                      name: "shaman"
                    },
                    {
                      name: "huntsman"
                    }
                  ]
                },
                {
                  id: 5,
                  list: [
                    {
                      id: 26,
                      list: [
                        {
                          name: "stalker"
                        },
                        {
                          name: "pastor"
                        }
                      ]
                    },
                    {
                      id: 16,
                      list: [
                        {
                          name: "monk"
                        },
                        {
                          name: "dryad"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          list: [
            {
              id: 3,
              list: [
                {
                  id: 4,
                  list: [
                    {
                      id: 6,
                      list: [
                        {
                          id: 7,
                          list: [
                            {
                              id: 11,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            },
                            {
                              id: 13,
                              list: [
                                {
                                  name: "demon"
                                },
                                {
                                  name: "warrior"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 8,
                          list: [
                            {
                              id: 10,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            },
                            {
                              id: 13,
                              list: [
                                {
                                  name: "warrior"
                                },
                                {
                                  name: "monk"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 17,
                      list: [
                        {
                          id: 18,
                          list: [
                            {
                              name: "shaman"
                            },
                            {
                              name: "huntsman"
                            }
                          ]
                        },
                        {
                          id: 5,
                          list: [
                            {
                              id: 15,
                              list: [
                                {
                                  name: "pastor"
                                },
                                {
                                  name: "mage"
                                }
                              ]
                            },
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 5,
                  list: [
                    {
                      id: 6,
                      list: [
                        {
                          id: 7,
                          list: [
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            },
                            {
                              id: 11,
                              list: [
                                {
                                  name: "death"
                                },
                                {
                                  name: "warlock"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 8,
                          list: [
                            {
                              name: "paladin"
                            },
                            {
                              name: "shaman"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 15,
                      list: [
                        {
                          name: "pastor"
                        },
                        {
                          name: "mage"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 19,
              list: [
                {
                  id: 20,
                  list: [
                    {
                      id: 21,
                      list: [
                        {
                          id: 17,
                          list: [
                            {
                              id: 18,
                              list: [
                                {
                                  name: "shaman"
                                },
                                {
                                  name: "huntsman"
                                }
                              ]
                            },
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 8,
                          list: [
                            {
                              name: "paladin"
                            },
                            {
                              name: "shaman"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 22,
                      list: [
                        {
                          id: 23,
                          list: [
                            {
                              name: "monk"
                            },
                            {
                              name: "warrior"
                            }
                          ]
                        },
                        {
                          id: 12,
                          list: [
                            {
                              id: 15,
                              list: [
                                {
                                  name: "pastor"
                                },
                                {
                                  name: "mage"
                                }
                              ]
                            },
                            {
                              id: 16,
                              list: [
                                {
                                  name: "monk"
                                },
                                {
                                  name: "dryad"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 21,
                  list: [
                    {
                      id: 4,
                      list: [
                        {
                          id: 17,
                          list: [
                            {
                              id: 18,
                              list: [
                                {
                                  name: "shaman"
                                },
                                {
                                  name: "huntsman"
                                }
                              ]
                            },
                            {
                              id: 10,
                              list: [
                                {
                                  name: "paladin"
                                },
                                {
                                  name: "demon"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: 11,
                          list: [
                            {
                              name: "death"
                            },
                            {
                              name: "warlock"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: 17,
                      list: [
                        {
                          id: 18,
                          list: [
                            {
                              name: "shaman"
                            },
                            {
                              name: "huntsman"
                            }
                          ]
                        },
                        {
                          id: 23,
                          list: [
                            {
                              name: "monk"
                            },
                            {
                              name: "warrior"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

questions = [
  {
    question: "在艾泽拉斯大陆，充满了各种各样的人，他们有的热情如火，有的冷若冰霜，有人身着异服人，有人威武堂堂。你能和他们成为朋友吗？",
    answers: ["我觉得他们都能成为我的朋友",
  "能成为真正朋友的人估计只有几个吧"]
  },
  {
    question: "打25人团本时，有2个小伙伴总是不得要领，团灭了好几次，这时你会怎么想？",
    answers: ["不着急，很快就能过了",
  "怎么教都不会，换人吧"]
  },
  {
    question: "你觉得伊利丹·怒风说过最Man的话是?",
    answers: ["“你们这是自寻死路！”",
  "“无论我做了什么,无论我变成什么样子,我会永远关心你的,泰兰德。”"]
  },
  {
    question: "深沉有力的雷霆崖背景音乐和轻快昂扬的闪金镇旅馆音乐，哪个更能勾起你的回忆？",
    answers: ["雷霆崖音乐",
  "闪金镇旅馆音乐"]
  },
  {
    question: "副本爆出心仪的装备后，dkp较低的好友希望你能让给他，你会怎么做？",
    answers: ["不行，我也刷了很久了",
  "嗯，如果你喜欢的话，先给你吧"]
  },
  {
    question: "张扬霸气的迅猛龙和稳重可靠的雷象，你更喜欢哪个坐骑？",
    answers: ["迅猛龙",
  "雷象"]
  },
  {
    question: "wow中既有酷炫强力的技能比如辛达苟萨之怒，也有蠢萌有趣的技能比如德鲁伊的振翅。你怎么看待它们？",
    answers: ["我不看外观，实用至上",
  "特效酷炫帅气才是王道"]
  },
  {
    question: "承载着庞大又悲壮故事的灰烬使者和有着美丽传说的雷霆之怒·逐风者的祝福之剑，哪个武器更能触动你",
    answers: ["灰烬使者",
  "雷霆之怒·逐风者的祝福之剑"]
  },
  {
    question: "修长高挑的暗夜精灵与妖娆性感的血精灵相比，你更喜欢哪一款？",
    answers: ["暗夜精灵",
  "血精灵"]
  },
  {
    question: "遇到强力怪时，你是怎么反应的？",
    answers: ["放着我来！",
  "坦克在哪？"]
  },
  {
    question: "在PVP战斗中，当双方水平相当，陷入僵局时，你会怎么做？",
    answers: ["抓住机会，发起一波猛攻",
  "沉下心来，这时候最需要的就是耐心"]
  },
  {
    question: "整天刷副本PVP和在潘达利亚海边钓鱼相比，你更喜欢过怎么样的生活？",
    answers: ["远离副本和PK，我爱平淡的日常",
  "再您的见，我去刷装备了"]
  },
  {
    question: "葬影村海边的夕阳和莫罗山脉的雪景，你更喜欢哪个？",
    answers: ["葬影村海边的夕阳",
  "莫罗山脉的雪景"]
  },
  {
    question: "如果能在现实中吃到，你更希望吃到甜薯面包还是铁炉堡军粮？",
    answers: ["甜薯面包",
  "铁炉堡军粮"]
  },
  {
    question: "在野外闲逛时，受到敌对阵营的挑衅，你会怎么做？",
    answers: ["言语还击，敌不动我不动",
  "立刻反击，叫你再嚣张"]
  },
  {
    question: "德莱尼男性的土味舞蹈（印度神曲《东北玩泥巴》）和暗夜精灵男性的天王舞蹈（杰克逊《Billie Jean》）相比，你更欣赏哪个？",
    answers: ["《东北玩泥巴》",
  "《Billie Jean》"]
  },
  {
    question: "友情、爱情能够永恒吗？",
    answers: ["人终究是孤独的",
  "真正的友情与爱情是跨越时间的"]
  },
  {
    question: "在专业技能的选择上，你更喜欢炼金、采药这类自给自足的，还是附魔这种先投入再产出的？",
    answers: ["还是自给自足的好",
  "我要做一名附魔师"]
  },
  {
    question: "无论是坐骑、装备还是角色，好看、帅气是你的第一标准吗？",
    answers: ["是的，颜值必须长期在线",
  "无所谓，丑到极致也是种美"]
  },
  {
    question: "如果现实中存在，充满异域风情的银月城和宁静宜人的湖畔镇，你更希望居住在哪里？",
    answers: ["银月城",
  "湖畔镇"]
  },
  {
    question: "想要开一个团本但是还缺5个人，你会怎么做？",
    answers: ["别说5个，10个都能马上给你喊来",
  "我好像没那么多朋友"]
  },
  {
    question: "朋友之间应该互相包容吗？",
    answers: ["是的，友谊地久天长",
  "抢我装备就包容不了了"]
  },
  {
    question: "当遇到什么都不懂的萌萌哒新玩家向你求助时，你是怎么做的？",
    answers: ["公会繁忙，告辞",
  "热心帮助，还会给点钱"]
  },
  {
    question: "吉安娜在经历了众多令人叹息的遭遇后，由原本追求和平的鸽派转变主张瓦解部落的鹰派，你是怎么看的？",
    answers: ["原本的她太天真了",
  "她已经被仇恨蒙蔽了双眼"]
  },
  {
    question: "队友引怪出错，局面急转直下时，你通常是怎么做的？",
    answers: ["冷静指挥，逐渐稳住局面",
  "手忙脚乱，团灭"]
  },
  {
    question: "在第一次玩副本黑石深远，面对如此复杂的迷宫时，你是怎么做的？",
    answers: ["靠毅力和耐性攻克难关",
  "看攻略、求助他人"]
  }
];

cacheAnswer = answers;

getRandom = function(length) {
  return parseInt(Math.random() * (length + 1) - 1);
};

window.onload = function() {
  // runAnimate()
  // /Zhihu|osee2unifiedRelease|Futureve/
  if (window.navigator.userAgent.indexOf("Zhihu") > -1 || window.navigator.userAgent.indexOf("osee2unifiedRelease") > -1 || window.navigator.userAgent.indexOf("Futureve") > -1) {
    sys = "zhihu";
  } else {
    loadWechatConfig();
    wx.ready(function() {
      var shareContent;
      shareContent = {
        title: "来自艾泽拉斯的召唤",
        desc: "灵魂深处，你的专属职业究竟是谁？艾泽拉斯正在召唤你。",
        link: "http://m.giccoo.com/zhihu-wow8/",
        imgUrl: "http://m.giccoo.com/zhihu-wow8/img/ico.jpg",
        success: function() {},
        // alert "success"
        cancel: function() {}
      };
      // alert "cancel"
      wx.onMenuShareTimeline(shareContent);
      wx.onMenuShareAppMessage(shareContent);
      wx.onMenuShareQQ(shareContent);
      return wx.onMenuShareWeibo(shareContent);
    });
  }
  return init();
};

init = function() {
  var TrueH, TrueW, navH, smaller;
  TrueH = document.documentElement.clientHeight;
  TrueW = document.documentElement.clientWidth;
  if (TrueW >= 640) {
    // console.log new Date().getTime() - startTime
    // document.body.style.height = TrueH+"px"
    // document.documentElement.className += " iphone4" if TrueW/TrueH >= 0.64
    TrueW = 640;
  }
  if (TrueH >= 1138) {
    TrueH = 1138;
  }
  smaller = TrueH * 2 < 1200;
  navH = Math.ceil(TrueW / 640 * 94 / TrueH * 100);
  console.log(TrueW, TrueH);
  return main = new Vue({
    el: "#main",
    data: {
      w: TrueW,
      h: TrueH,
      biger: TrueW / TrueH < 0.52,
      smaller: smaller,
      afterH: smaller ? TrueH * 1.15 - 1029 * (TrueW / 750) : TrueH - 1029 * (TrueW / 750),
      homepageShow: true,
      mounted: false,
      loading: false,
      lastpage: false,
      roomIndex: 0,
      rotate: 90,
      pageIndex: 1,
      poping: false,
      popImage: "",
      learnmorelink: "",
      popmore: false,
      timeAnimate: false,
      ugcPage: false,
      questionID: 0,
      selectIndex: -1,
      questionNow: true,
      questionLastID: 5,
      selecting: false,
      ugc: null,
      ugcsave: null,
      lmbl: Math.random() > 0.5,
      pop: false,
      default: {
        x: 0,
        animated: false
      },
      question: questions[0],
      btnShow: true
    },
    computed: {
      room: function() {
        return 'room';
      }
    },
    watch: {
      questionID: function(n, o) {}
    },
    methods: {
      go: function() {
        this.pop = false;
        // if sys isnt "zhihu"
        // 	return alert "请在知乎 App 内打开."
        if (this.lmbl) {
          return window.location.href = "https://activity.zhihu.com/campaign/wow/badges/1&zh_app_id=300100";
        } else {
          return window.location.href = " https://activity.zhihu.com/campaign/wow/badges/2&zh_app_id=300100";
        }
      },
      getBadge: function() {
        return this.pop = true;
      },
      getUGC: function() {
        this.ugcPage = true;
        // @.btnShow = false
        return ugc.save();
      },
      closeUGC: function() {
        this.ugcPage = false;
        // @.btnShow = true
        return ugc.hide();
      },
      over: function(name) {
        ugc = new UGC({
          el: "ugc",
          name: name
        });
        this.pageIndex = 3;
        return console.log(name);
      },
      selectItem: function(index) {
        if (this.selecting) {
          // @.questionID
          return false;
        }
        this.selecting = true;
        this.selectIndex = index;
        return setTimeout(() => {
          var id, name;
          if (cacheAnswer.list[index].id != null) {
            id = cacheAnswer.list[index].id;
            this.question = questions[id - 1];
            cacheAnswer = cacheAnswer.list[index];
            this.questionID++;
          } else {
            name = cacheAnswer.list[index].name;
            console.log(cacheAnswer.list[index]);
            this.over(name);
          }
          this.selectIndex = -1;
          return this.selecting = false;
        }, 500);
      },
      end: function(evt) {
        return this.default.animated = false;
      }
    },
    mounted: function($el, e) {
      return this.mounted = true;
    }
  });
};

loadWechatConfig = function() {
  var hm, s, url;
  url = encodeURIComponent(window.location.href.split("#")[0]);
  hm = document.createElement('script');
  hm.src = "//api.giccoo.com/api/config?url=" + url;
  s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
};

$_GET = (function() {
  var get, i, j, k, len, u, url;
  url = window.document.location.href.toString();
  u = url.split('?');
  if (typeof u[1] === 'string') {
    u = u[1].split('&');
    get = {};
    console.log(u);
    for (k = 0, len = u.length; k < len; k++) {
      i = u[k];
      j = i.split('=');
      get[j[0]] = j[1];
    }
    return get;
  } else {
    return {};
  }
})();

IsPC = function() {
  var Agents, flag, userAgentInfo, v;
  userAgentInfo = navigator.userAgent;
  Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
  flag = true;
  v = 0;
  while (v < Agents.length) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
    v++;
  }
  return flag;
};
