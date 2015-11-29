# @codekit-prepend "coffee/css3Prefix"
# @codekit-prepend "coffee/plus"
# @codekit-prepend "../../libs/coffee/requestanimation"

_citys = {}

_citys["北京"] = {}
_citys["甘肃"] = {}
_citys["河北"] = {}
_citys["黑龙江"] = {}
_citys["吉林"] = {}
_citys["辽宁"] = {}
_citys["内蒙古"] = {}
_citys["山东"] = {}
_citys["山西"] = {}
_citys["陕西"] = {}
_citys["天津"] = {}
_citys["新疆"] = {}
_citys["安徽"] = {}
_citys["河南"] = {}
_citys["湖北"] = {}
_citys["江苏"] = {}
_citys["江西"] = {}
_citys["上海"] = {}
_citys["浙江"] = {}
_citys["福建"] = {}
_citys["广东"] = {}
_citys["广西"] = {}
_citys["贵州"] = {}
_citys["海南"] = {}
_citys["湖南"] = {}
_citys["四川"] = {}
_citys["云南"] = {}
_citys["重庆"] = {}
_citys["宁夏"] = {}
_citys["青海"] = {}

_citys["北京"]["北京"] = []
_citys["甘肃"]["兰州"] = []
_citys["河北"]["石家庄"] = []
_citys["河北"]["唐山"] = []
_citys["黑龙江"]["哈尔滨"] = []
_citys["吉林"]["长春"] = []
_citys["辽宁"]["大连"] = []
_citys["辽宁"]["沈阳"] = []
_citys["内蒙古"]["呼和浩特"] = []
_citys["山东"]["济南"] = []
_citys["山东"]["青岛"] = []
_citys["山东"]["烟台"] = []
_citys["山西"]["太原"] = []
_citys["陕西"]["西安"] = []
_citys["天津"]["天津"] = []
_citys["新疆"]["乌鲁木齐"] = []
_citys["安徽"]["合肥"] = []
_citys["河南"]["郑州"] = []
_citys["湖北"]["武汉"] = []
_citys["江苏"]["常州"] = []
_citys["江苏"]["南通"] = []
_citys["江苏"]["苏州"] = []
_citys["江苏"]["无锡"] = []
_citys["江苏"]["扬州"] = []
_citys["江西"]["南昌"] = []
_citys["上海"]["上海"] = []
_citys["浙江"]["杭州"] = []
_citys["浙江"]["嘉兴"] = []
_citys["浙江"]["宁波"] = []
_citys["浙江"]["绍兴"] = []
_citys["浙江"]["台州"] = []
_citys["浙江"]["温州"] = []
_citys["福建"]["泉州"] = []
_citys["广东"]["东莞"] = []
_citys["广东"]["佛山"] = []
_citys["广东"]["广州"] = []
_citys["广东"]["揭阳"] = []
_citys["广东"]["汕头"] = []
_citys["广东"]["深圳"] = []
_citys["广东"]["中山"] = []
_citys["广东"]["珠海"] = []
_citys["广西"]["南宁"] = []
_citys["贵州"]["贵阳"] = []
_citys["海南"]["海口"] = []
_citys["湖南"]["长沙"] = []
_citys["四川"]["成都"] = []
_citys["云南"]["昆明"] = []
_citys["重庆"]["重庆"] = []
_citys["山东"]["潍坊"] = []
_citys["河北"]["保定"] = []
_citys["江苏"]["南京"] = []
_citys["辽宁"]["鞍山"] = []
_citys["陕西"]["榆林"] = []
_citys["山东"]["济宁"] = []
_citys["山东"]["临沂"] = []
_citys["山东"]["淄博"] = []
_citys["山东"]["泰安"] = []
_citys["山东"]["东营"] = []
_citys["河北"]["邯郸"] = []
_citys["黑龙江"]["大庆"] = []
_citys["宁夏"]["银川"] = []
_citys["内蒙古"]["赤峰"] = []
_citys["青海"]["西宁"] = []
_citys["河南"]["洛阳"] = []
_citys["浙江"]["湖州"] = []
_citys["江苏"]["徐州"] = []
_citys["福建"]["厦门"] = []
_citys["江苏"]["泰州"] = []
_citys["广西"]["柳州"] = []
_citys["江西"]["赣州"] = []
_citys["江苏"]["镇江"] = []
_citys["河南"]["平顶山"] = []
_citys["福建"]["福州"] = []
_citys["辽宁"]["锦州"] = []
_citys["福建"]["龙岩"] = []
_citys["河南"]["安阳"] = []
_citys["山东"]["威海"] = []
_citys["江苏"]["盐城"] = []
_citys["安徽"]["阜阳"] = []
_citys["四川"]["绵阳"] = []
_citys["福建"]["三明"] = []
_citys["河南"]["商丘"] = []
_citys["江西"]["九江"] = []
_citys["安徽"]["芜湖"] = []
_citys["山东"]["滨州"] = []
_citys["江苏"]["常熟"] = []
_citys["江西"]["上饶"] = []
_citys["山东"]["德州"] = []
_citys["河北"]["邢台"] = []
_citys["云南"]["红河"] = []
_citys["福建"]["漳州"] = []
_citys["湖南"]["株洲"] = []
_citys["四川"]["南充"] = []
_citys["湖北"]["襄阳"] = []
_citys["广西"]["桂林"] = []
_citys["河南"]["南阳"] = []
_citys["陕西"]["咸阳"] = []
_citys["福建"]["莆田"] = []
_citys["吉林"]["吉林"] = []
_citys["陕西"]["宝鸡"] = []
_citys["陕西"]["延安"] = []
_citys["河南"]["新乡"] = []
_citys["内蒙古"]["包头"] = []
_citys["河北"]["沧州"] = []

_citys["北京"]["北京"].push({name:"北京百旺沃瑞汽车销售服务有限公司",code:"BJG"})
_citys["北京"]["北京"].push({name:"北京中汽南方华北汽车服务有限公司",code:"BJC"})
_citys["北京"]["北京"].push({name:"北京中诚海华汽车销售有限责任公司",code:"BJE"})
_citys["北京"]["北京"].push({name:"北京宝辰欧雅汽车销售服务有限公司",code:"BJF"})
_citys["甘肃"]["兰州"].push({name:"甘肃福康汽车贸易有限公司",code:"LZA"})
_citys["河北"]["石家庄"].push({name:"石家庄冀东东沃汽车销售服务有限公司",code:"HBC"})
_citys["河北"]["唐山"].push({name:"唐山庞大兴沃汽车销售服务有限公司",code:"HBD"})
_citys["黑龙江"]["哈尔滨"].push({name:"黑龙江尊荣富沃汽车贸易有限公司",code:"HRA"})
_citys["吉林"]["长春"].push({name:"吉林盛荣汽车贸易有限公司",code:"CCA"})
_citys["辽宁"]["大连"].push({name:"尊荣亿方集团有限公司",code:"DLA"})
_citys["辽宁"]["沈阳"].push({name:"辽宁尊荣汽车贸易有限公司",code:"SYA"})
_citys["内蒙古"]["呼和浩特"].push({name:"呼和浩特市庞大兴沃汽车销售服务有限责任公司",code:"MGB"})
_citys["山东"]["济南"].push({name:"山东富豪汽车销售服务有限公司",code:"JND"})
_citys["山东"]["青岛"].push({name:"青岛富豪汽车销售服务有限公司",code:"QDA"})
_citys["山东"]["烟台"].push({name:"烟台富豪汽车销售服务有限公司",code:"YTA"})
_citys["山西"]["太原"].push({name:"太原市富豪新华夏汽车连锁销售有限公司",code:"TYA"})
_citys["陕西"]["西安"].push({name:"陕西佳豪汽车服务有限公司",code:"XAA"})
_citys["天津"]["天津"].push({name:"天津中汽南方汽车销售服务有限公司",code:"TJA"})
_citys["新疆"]["乌鲁木齐"].push({name:"新疆金涛汽车贸易有限公司",code:"XJB"})
_citys["安徽"]["合肥"].push({name:"合肥捷沃汽车贸易有限责任公司",code:"HFA"})
_citys["河南"]["郑州"].push({name:"河南省锦堂盛汽车有限公司",code:"HNB"})
_citys["湖北"]["武汉"].push({name:"武汉富豪汽车销售有限公司",code:"WHA"})
_citys["江苏"]["常州"].push({name:"常州富豪汽车销售服务有限公司",code:"CZA"})
_citys["江苏"]["南通"].push({name:"南通东沃汽车销售服务有限公司",code:"NTA"})
_citys["江苏"]["苏州"].push({name:"苏州世之贸汽车贸易有限公司",code:"SUA"})
_citys["江苏"]["苏州"].push({name:"通孚祥（苏州）汽车销售服务有限公司",code:"SUB"})
_citys["江苏"]["无锡"].push({name:"无锡东方吉羊汽车销售服务有限公司",code:"WXB"})
_citys["江苏"]["扬州"].push({name:"扬州富豪汽车销售有限公司",code:"YZA"})
_citys["江西"]["南昌"].push({name:"江西绿地名沃汽车销售服务有限公司",code:"NCA"})
_citys["上海"]["上海"].push({name:"上海世之沃汽车销售服务有限公司",code:"SHA"})
_citys["上海"]["上海"].push({name:"上海通孚祥汽车贸易有限公司",code:"SHC"})
_citys["上海"]["上海"].push({name:"上海永达东沃汽车销售服务有限公司",code:"SHD"})
_citys["浙江"]["杭州"].push({name:"杭州世之贸汽车服务有限公司",code:"	HZA"})
_citys["浙江"]["杭州"].push({name:"浙江元通元瑞汽车有限公司",code:"HZC"})
_citys["浙江"]["嘉兴"].push({name:"嘉兴元通元瑞汽车有限公司",code:"JXA"})
_citys["浙江"]["宁波"].push({name:"宁波元通元瑞汽车有限公司",code:"NBB"})
_citys["浙江"]["绍兴"].push({name:"绍兴和诚海昌汽车服务有限公司",code:"SXA"})
_citys["浙江"]["台州"].push({name:"台州凯和汽车贸易有限公司",code:"TZA"})
_citys["浙江"]["温州"].push({name:"温州东昌实业有限公司",code:"WZA"})
_citys["福建"]["泉州"].push({name:"泉州市鸿海汽车贸易有限公司",code:"QZA"})
_citys["广东"]["东莞"].push({name:"东莞中汽南方汽车销售服务有限公司",code:"DGA"})
_citys["广东"]["佛山"].push({name:"佛山市富豪汽车销售服务有限公司",code:"NHA"})
_citys["广东"]["广州"].push({name:"广州市永安富豪汽车贸易有限公司",code:"GZB"})
_citys["广东"]["揭阳"].push({name:"揭阳市恒丰汽车贸易有限公司",code:"JYA"})
_citys["广东"]["汕头"].push({name:"汕头市恒康汽车贸易有限公司",code:"STA"})
_citys["广东"]["深圳"].push({name:"深圳市中汽南方汽车维修有限公司",code:"SZA"})
_citys["广东"]["深圳"].push({name:"天津汽车工业销售深圳南方有限公司",code:"SZB"})
_citys["广东"]["中山"].push({name:"中山中汽南方汽车销售服务有限公司",code:"ZSA"})
_citys["广东"]["珠海"].push({name:"珠海中汽南方汽车销售服务有限公司",code:"ZHA"})
_citys["广西"]["南宁"].push({name:"广西弘瑞汽车销售服务有限公司",code:"NNA"})
_citys["贵州"]["贵阳"].push({name:"贵州天鼎汽车服务有限责任公司",code:"GYA"})
_citys["海南"]["海口"].push({name:"海南天昌达汽车销售服务有限公司",code:"HKA"})
_citys["湖南"]["长沙"].push({name:"湖南中汽南方汽车销售服务有限公司",code:"CSA"})
_citys["四川"]["成都"].push({name:"四川三和汽车服务有限公司",code:"CDA"})
_citys["四川"]["成都"].push({name:"四川通孚祥汽车贸易有限公司",code:"CDC"})
_citys["云南"]["昆明"].push({name:"云南富豪汽车销售服务有限公司",code:"KMA"})
_citys["重庆"]["重庆"].push({name:"重庆西南富豪汽车有限公司",code:"CQA"})
_citys["山东"]["潍坊"].push({name:"潍坊诺德汽车服务有限公司",code:"JNC"})
_citys["重庆"]["重庆"].push({name:"重庆龙华实业集团沃华汽车销售服务有限公司",code:"CQC"})
_citys["北京"]["北京"].push({name:"北京海之沃汽车服务有限公司",code:"BJK"})
_citys["上海"]["上海"].push({name:"上海通孚祥汽车销售服务有限公司",code:"SHF"})
_citys["河北"]["保定"].push({name:"保定庞大兴沃汽车销售服务有限公司",code:"HBE"})
_citys["江苏"]["南京"].push({name:"江苏世贸泰信东盛汽车贸易有限公司",code:"NJB"})
_citys["辽宁"]["鞍山"].push({name:"鞍山尊荣富沃汽车贸易有限公司",code:"ASA"})
_citys["山东"]["济南"].push({name:"山东新富豪汽车销售服务有限公司",code:"JNF"})
_citys["北京"]["北京"].push({name:"北京中汽南方中关汽车销售有限公司",code:"BJL"})
_citys["陕西"]["榆林"].push({name:"陕西佳豪金鼎汽车服务有限公司",code:"YLA"})
_citys["云南"]["昆明"].push({name:"云南华沃汽车销售服务有限公司",code:"KMB"})
_citys["北京"]["北京"].push({name:"北京燕豪汽车销售服务有限公司",code:"BJH"})
_citys["广东"]["东莞"].push({name:"东莞市世沃汽车销售服务有限公司",code:"DGB"})
_citys["山东"]["济宁"].push({name:"济宁恒昌汽车销售有限公司",code:"	JNE"})
_citys["山东"]["临沂"].push({name:"临沂富豪汽车销售服务有限公司",code:"LYA"})
_citys["广东"]["佛山"].push({name:"佛山市顺德区世维汽车销售服务有限公司",code:"SDB"})
_citys["广东"]["广州"].push({name:"广州世祥汽车销售有限公司",code:"GZC"})
_citys["江苏"]["无锡"].push({name:"无锡富绅汽车销售服务有限公司",code:"WXC"})
_citys["陕西"]["西安"].push({name:"陕西佳骏汽车服务有限公司",code:"XAC"})
_citys["山东"]["淄博"].push({name:"淄博奥德达汽车服务有限公司",code:"JNB"})
_citys["山东"]["青岛"].push({name:"青岛富融汽车销售服务有限公司",code:"QDB"})
_citys["山东"]["泰安"].push({name:"泰安富豪汽车销售服务有限公司",code:"TAA"})
_citys["山东"]["东营"].push({name:"东营市富豪汽车销售服务有限责任公司",code:"DYA"})
_citys["河北"]["邯郸"].push({name:"邯郸市庞大兴沃汽车销售服务有限公司",code:"HBF"})
_citys["黑龙江"]["大庆"].push({name:"大庆尊荣汽车贸易有限公司",code:"DQA"})
_citys["宁夏"]["银川"].push({name:"宁夏佳丰汽车服务有限公司",code:"YCB"})
_citys["上海"]["上海"].push({name:"上海永达嘉沃汽车销售服务有限公司",code:"SHG"})
_citys["浙江"]["杭州"].push({name:"浙江万友汽车有限公司",code:"HZD"})
_citys["内蒙古"]["赤峰"].push({name:"赤峰市兴沃汽车销售服务有限责任公司",code:"MGE"})
_citys["浙江"]["杭州"].push({name:"杭州中沃汽车销售服务有限公司",code:"HZF"})
_citys["辽宁"]["沈阳"].push({name:"沈阳尊荣富沃汽车销售服务有限公司",code:"SYC"})
_citys["北京"]["北京"].push({name:"北京元之沃汽车服务有限公司",code:"BJM"})
_citys["天津"]["天津"].push({name:"天津通孚祥汽车销售服务有限公司",code:"TJC"})
_citys["青海"]["西宁"].push({name:"青海赛亚金孚汽车销售服务有限公司",code:"QHA"})
_citys["河南"]["洛阳"].push({name:"洛阳恒信瑞沃汽车销售服务有限公司",code:"HND"})
_citys["甘肃"]["兰州"].push({name:"兰州庞大兴沃汽车销售服务有限公司",code:"LZC"})
_citys["湖北"]["武汉"].push({name:"武汉富融汽车销售服务有限公司",code:"WHC"})
_citys["四川"]["成都"].push({name:"四川长征超越汽车销售服务有限公司",code:"CDD"})
_citys["河南"]["郑州"].push({name:"郑州鼎沃汽车销售服务有限公司",code:"HNC"})
_citys["浙江"]["湖州"].push({name:"湖州瑞杰汽车销售服务有限责任公司",code:"HZE"})
_citys["江苏"]["无锡"].push({name:"江阴东方沃邦汽车销售服务有限公司",code:"JYB"})
_citys["江苏"]["徐州"].push({name:"徐州世贸泰信汽车销售服务有限公司",code:"XZA"})
_citys["上海"]["上海"].push({name:"上海永达申杰汽车销售服务有限公司",code:"SHH"})
_citys["广东"]["广州"].push({name:"广东中汽南方汽车销售服务有限公司",code:"GZA"})
_citys["福建"]["厦门"].push({name:"厦门新成功瑞沃汽车有限公司",code:"	XMA"})
_citys["吉林"]["长春"].push({name:"长春市维信汽车销售有限公司",code:"CCB"})
_citys["安徽"]["合肥"].push({name:"合肥瑞杰汽车贸易有限责任公司",code:"HFC"})
_citys["江苏"]["泰州"].push({name:"泰州富豪汽车销售服务有限公司",code:"TZD"})
_citys["福建"]["厦门"].push({name:"厦门中升沃茂汽车销售服务有限公司",code:"XMB"})
_citys["江苏"]["无锡"].push({name:"宜兴东方沃邦汽车销售服务有限公司",code:"YXA"})
_citys["广西"]["柳州"].push({name:"柳州弘耀汽车销售服务有限公司",code:"NNC"})
_citys["云南"]["昆明"].push({name:"昆明庞润荣沃汽车销售服务有限公司",code:"KMC"})
_citys["福建"]["泉州"].push({name:"泉州中升沃茂汽车销售服务有限公司",code:"QZB"})
_citys["黑龙江"]["哈尔滨"].push({name:"哈尔滨尊荣亿方汽车贸易有限公司",code:"HRB"})
_citys["江西"]["赣州"].push({name:"赣州市绿地祥沃汽车销售服务有限公司",code:"GAA"})
_citys["湖北"]["武汉"].push({name:"武汉恒信瑞沃汽车销售服务有限公司",code:"WHE"})
_citys["江苏"]["镇江"].push({name:"镇江世贸泰信汽车销售服务有限公司",code:"ZJA"})
_citys["陕西"]["西安"].push({name:"西安天润汽车销售服务有限公司",code:"XAD"})
_citys["河南"]["平顶山"].push({name:"平顶山市丰海实业有限公司",code:"HNE"})
_citys["辽宁"]["大连"].push({name:"大连尊荣汽车销售有限公司",code:"DLB"})
_citys["福建"]["福州"].push({name:"福建吉诺富豪汽车贸易有限公司",code:"FZB"})
_citys["辽宁"]["锦州"].push({name:"锦州尊荣汽车贸易有限公司",code:"JZA"})
_citys["北京"]["北京"].push({name:"北京宝辰沃雅汽车销售服务有限公司",code:"BJN"})
_citys["福建"]["龙岩"].push({name:"龙岩市英瑞福汽车销售服务有限公司",code:"LYB"})
_citys["湖南"]["长沙"].push({name:"长沙建沃汽车销售有限公司",code:"CSC"})
_citys["贵州"]["贵阳"].push({name:"贵阳中沃汽车销售服务有限公司",code:"	GYB"})
_citys["河南"]["安阳"].push({name:"安阳市东安汽车销售服务有限责任公司",code:"AYA"})
_citys["山东"]["威海"].push({name:"威海富豪汽车销售服务有限公司",code:"WHD"})
_citys["江苏"]["盐城"].push({name:"盐城东昌汽车销售服务有限公司",code:"YCC"})
_citys["安徽"]["阜阳"].push({name:"阜阳瑞杰豪骏汽车销售服务有限公司",code:"FYA"})
_citys["四川"]["绵阳"].push({name:"绵阳通孚祥汽车销售服务有限公司",code:"MYA"})
_citys["福建"]["三明"].push({name:"三明吉诺富豪汽车贸易有限公司",code:"SMA"})
_citys["河南"]["商丘"].push({name:"商丘商沃汽车销售服务有限公司",code:"SQA"})
_citys["河北"]["保定"].push({name:"保定轩宇骐骥汽车销售服务有限公司",code:"BDB"})
_citys["江西"]["九江"].push({name:"九江福沃汽车有限公司",code:"JJA"})
_citys["上海"]["上海"].push({name:"上海伟途汽车销售服务有限公司",code:"SHI"})
_citys["江苏"]["苏州"].push({name:"苏州东昌新豪汽车销售服务有限公司",code:"SUD"})
_citys["浙江"]["宁波"].push({name:"宁波丰颐汽车销售服务有限公司",code:"NBA"})
_citys["安徽"]["芜湖"].push({name:"芜湖瑞杰豪骏汽车贸易有限责任公司",code:"HFB"})
_citys["河北"]["唐山"].push({name:"唐山凯沃商贸有限公司",code:"TSC"})
_citys["山东"]["滨州"].push({name:"滨州东泰汽车有限公司",code:"BZA"})
_citys["江苏"]["常熟"].push({name:"通孚祥（常熟）汽车销售服务有限公司",code:"SUC"})
_citys["江西"]["南昌"].push({name:"江西东沃汽车销售服务有限公司",code:"NCB"})
_citys["江西"]["上饶"].push({name:"上饶市名一汽车销售服务有限公司",code:"SRA"})
_citys["内蒙古"]["呼和浩特"].push({name:"呼和浩特市宝辰欧雅汽车销售服务有限公司",code:"MGG"})
_citys["山东"]["德州"].push({name:"德州瑞沃商贸有限公司",code:"DZA"})
_citys["河北"]["邢台"].push({name:"邢台银龙汽车销售服务有限公司",code:"XTA"})
_citys["云南"]["红河"].push({name:"红河沃捷汽车销售服务有限公司",code:"HHA"})
_citys["福建"]["漳州"].push({name:"漳州新成功汽车贸易有限公司",code:"ZZC"})
_citys["湖南"]["株洲"].push({name:"株洲德熙行汽车贸易有限公司",code:"ZZA"})
_citys["四川"]["南充"].push({name:"南充瑞和品信汽车销售服务有限公司",code:"NAA"})
_citys["湖北"]["襄阳"].push({name:"襄阳建银瑞沃汽车销售服务有限公司",code:"XYC"})
_citys["广东"]["深圳"].push({name:"深圳鼎沃汽车销售服务有限公司",code:"SZD"})
_citys["湖北"]["武汉"].push({name:"武汉建银富瑞汽车销售服务有限公司",code:"WHF"})
_citys["重庆"]["重庆"].push({name:"重庆万友都成汽车销售服务有限公司",code:"CQD"})
_citys["安徽"]["合肥"].push({name:"合肥恒信德龙瑞沃汽车销售服务有限公司",code:"HFD"})
_citys["广西"]["桂林"].push({name:"桂林弘沃汽车销售服务有限公司",code:"GLA"})
_citys["浙江"]["宁波"].push({name:"宁波沃龙汽车服务有限公司",code:"NBD"})
_citys["河南"]["南阳"].push({name:"南阳宛沃汽车销售服务有限公司",code:"NYA"})
_citys["陕西"]["咸阳"].push({name:"咸阳新丰泰瑞嘉汽车销售服务有限公司",code:"XYA"})
_citys["福建"]["莆田"].push({name:"莆田吉诺富豪汽车销售服务有限公司",code:"PTA"})
_citys["福建"]["福州"].push({name:"福州鼎沃汽车销售服务有限公司",code:"FZA"})
_citys["广东"]["广州"].push({name:"广东广物君沃汽车销售服务有限公司",code:"GZD"})
_citys["吉林"]["吉林"].push({name:"吉林维信汽车销售有限公司",code:"JLA"})
_citys["陕西"]["宝鸡"].push({name:"宝鸡宝沃汽车销售服务有限公司",code:"BJZ"})
_citys["陕西"]["延安"].push({name:"延安广汇鑫汽车销售服务有限公司",code:"YAA"})
_citys["山东"]["济南"].push({name:"山东京泰汽车贸易有限公司",code:"JNG"})
_citys["四川"]["成都"].push({name:"四川申蓉汇亚汽车贸易有限公司",code:"CDE"})
_citys["广东"]["深圳"].push({name:"深圳市德顺行汽车销售服务有限公司",code:"SZC"})
_citys["河南"]["新乡"].push({name:"新乡市东安沃达汽车销售服务有限公司",code:"XXA"})
_citys["重庆"]["重庆"].push({name:"万友汽车投资有限公司重庆南坪分公司",code:"CQE"})
_citys["北京"]["北京"].push({name:"北京正通鼎沃汽车销售服务有限公司",code:"BJO"})
_citys["浙江"]["温州"].push({name:"温州荣沃汽车销售服务有限公司",code:"WZD"})
_citys["河南"]["郑州"].push({name:"郑州中沃汽车销售服务有限公司",code:"HNF"})
_citys["内蒙古"]["包头"].push({name:"包头市庞大兴沃汽车销售服务有限责任公司",code:"MGC"})
_citys["河北"]["沧州"].push({name:"沧州市德联汇源汽车贸易有限公司",code:"HBH"})
_citys["河北"]["石家庄"].push({name:"河北瑞沃商贸有限公司",code:"HBG"})
_citys["四川"]["成都"].push({name:"成都祥沃汽车销售服务有限公司",code:"CDF"})

window.onload = ->
	riot.mount("*")

	$(".show-pop").on "click", ->
		i = $(this).index()+1
		$(".pop .content").html '<img src="img/pop-'+i+'.png" />'
		$(".pop").show()
	$(".pop").on "click", ->
		$(".pop").hide()

	$(".backTop").on "click", ->
		window.scrollTo(0,$(".form").offset().top)
	$(".left").on "click", moveLeft
	$(".right").on "click", moveRight

mainSlider = {}
tabId = 0

changePoint = (i)->
	console.log(Math.abs(i))
	# e = $(".contents .item").eq(tabId-1)
	$(".points span").removeClass "on"
	$(".points span").eq(Math.abs(i)).addClass "on"


changeMain = (i)->
	tabId = Math.abs(i)
moveLeft = ->
	tabId++
	if tabId > 4
		tabId = 4
	mainSlider.setNumber(tabId)
moveRight = ->
	tabId--
	if tabId < 0
		tabId = 0
	mainSlider.setNumber(tabId)


showTab = (i)->
	$(".tabs .item").removeClass "on"
	$(".tabs .item").eq(i-1).addClass "on"
	$(".contents .item").hide()
	$(".contents .item").eq(i-1).show()
	tabId = i

showTab(1)

