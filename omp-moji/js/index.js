// const getLocaltionUrl = 'http://h5-lbs.api.moji.com/location/location'
var getLocaltionCityUrl = 'https://g.giccoo.com/sensitivity/api/local/' //lat/39.98246/log/117.079222
var getWeatherInfoUrl = 'https://g.giccoo.com/sensitivity/api/city/p/'

var defultEshop = {
    "storeAllName": "中美史克旗舰店",
    "storeName": "中美史克旗舰店",
    "eshop": "true",
    "city": "其他",
    "logo": "",
    "url": "https://detail.yao.95095.com/item.htm?id=522982673635"
}
// const firstRender = true

var useIpApi = 'http://g.giccoo.com/api/ip/'

var app = new Vue({
    el: '#app',
    data: {
        area: '朝阳',
        weather: '晴',
        wind: '微风',
        windLevel: '3',
        allergyStatus: '较易发',
        tips: '空气中漂浮过敏原，易过敏人群请减少外出时间，远离花草树木，穿着长袖长裤、注意防护。',
        temperature: '25',
        cloud: '多云',
        pmNums: '181',
        airQuality: '轻度污染',
        ifLocalStore: true, //是否有本地药店
        ifStore: true, //是否有本地电商引流
        storeName: '',//药店名称
        storeLogo: '', //药店LOGO
        buyUrl: '',//立即购买
        ifEshop: false,//是否有电商链接
        ifEshopText: true, //是否有药店提示

        quesionList: [],
        storeList: [],
        storePopup: 'none',
        loading: false
    },
    watch: {},
    methods: {
        closeStore: function () {
            this.storePopup = 'none'
			stm_clicki('send', 'event', this.area, '点击', '关闭药房地址浮层');
        },
        showStore: function () {
            this.storePopup = 'block'
			stm_clicki('send', 'event', this.area, '点击', '药房地址按钮');
        },
		gotoBuy:function (buyUrl){
			stm_clicki('send', 'event', this.area, '点击', '立即购买按钮');
			setTimeout(function(){
				window.location.href = buyUrl
			},100)
		},
		//问题跳转链接加监测
		listenToUrl:function (question,url){
        	// alert(e)
			console.log(question,url)
			stm_clicki('send', 'event', question, '点击', '问题');
			setTimeout(function(){
				window.location.href = url
			},100)
		}
    },
    beforecreate: function () {
        //loading
        //地理位置授权
        console.log('beforecreate')
    },

    created: function () {
        //init
        console.log('init')
        var point = {
            'latitude': 45.777454, //石景山
            'longitude': 126.630727,
        }
        var cityid = getQueryString('cityid')
        console.log(cityid)
        if (cityid) {
            getWeather(this, getWeatherInfoUrl + cityid + '/id/translate') //如果有cityid 直接不定位 拿天气数据
        } else {
			if (window.location.href.indexOf('localhost') <= 0) {
				if (location.protocol != 'https:') {
					location.replace('https:' + window.location.href.substring(window.location.protocol.length));
				}
			}
            getUserPosition(this);//获取用户位置
        }

        // testLocation(this, point);//测试位置

        //加载本地数据
        this.$http.get('./config/question.json').then(function (res) {
            var data = res.data
            console.log(data)
            this.quesionList = data

			$('.question').on('click',function (e) {
				console.log(e)
			})
        }, function (res) {
            console.log("加载问题json失败")
        })

        function testLocation(app, point) {
            getLocaltion(app, point, function (res) {
                console.log(res);
                var data = res.result;
                // app.area = String(data.detail.split(',')[1])
                //坐标换城市

                getWeather(app, getWeatherInfoUrl + data.cityId)
            })
        }

        //使用浏览器获取用户位置
        function getUserPosition(app) {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 1000
            }
            if (navigator.geolocation) {
                //浏览器支持geolocation
                console.log(app)
                app.loading = true
                navigator.geolocation.getCurrentPosition(function (position) {
                    //成功
                    app.loading = false
                    var point = {
                        longitude: position.coords.longitude,//经度
                        latitude: position.coords.latitude//纬度
                    }
                    console.log('当前地址的经纬度：经度' + point.longitude + '，纬度' + point.latitude);

                    //坐标换城市
                    getLocaltion(app, point, function (res) {
                        console.log(res);
                        var data = res.result;
                        // app.area = String(data.detail.split(',')[1])
                        getWeather(app, getWeatherInfoUrl + data.cityId)
                    })
                }, function (error) {
                    //失败
                    app.loading = false
                    switch (error.code) {
                        case 1:
                            alert("位置服务被拒绝");
                            break;
                        case 2:
                            alert("暂时获取不到位置信息");
                            break;
                        case 3:
                            alert("获取信息超时");
                            break;
                        case 4:
                            alert("未知错误");
                            break;
                    }
                }, options);
            } else {
                //浏览器不支持geolocation
                alert('您的浏览器不支持地理位置定位');
            }
        }

        function getWeather(app, apiUrl) {
            //根据城市ID获取相关信息
            app.$http.get(apiUrl).then(function (res) {
                var data = res.data.data
                console.log(data)
                //根据城市地区判断有无商店
                var area = data.city.name
                var pname = data.city.pname

                app.area = area

                app.$http.get('./config/cityData.json').then(function (res) {
                    console.log(res)
                    var city = getCityInfo(res.data, area, pname);

                    setTimeout(function () {
                        console.log(city)

                        var cityInfo = {
                            area: area,
                            city: city
                        }
                        app.$http.get('./config/ka.json').then(function (res) {
                            console.log(res)
                            var kaJson = res.data
                            var ka = getKaInfo(kaJson, city);
                            // console.log(city,ka)
                            if (ka.length > 0) {
                                console.log(ka)
                                app.ifStore = true
                                app.storeName = ka[0].storeName
                                app.storeLogo = ka[0].logo
                                if (ka[0].url) {
                                    //电商
                                    app.ifEshop = true
                                    app.buyUrl = ka[0].url
                                } else {
                                    app.ifEshop = false
                                }
                            } else {
                                //没有匹配 // 默认中美联合电商
                                app.ifStore = false
                                app.ifEshop = true
                                app.buyUrl = defultEshop.url
                            }

                            //拿到城市区域 就去请求商店列表
                            app.$http.get('./config/store.json').then(function (res) {
                                var storeJson = res.data
                                var localStore = getStoreList(storeJson, cityInfo)
                                console.log(localStore)
                                if (localStore) {
                                    app.storeList = localStore
                                    app.ifEshopText = true
                                    //初始化滚动条
                                    initBscroll();
                                } else {
                                    app.ifLocalStore = false // 隐藏商店按钮
                                    if (app.ifEshop) {
                                        app.ifEshopText = true
                                    } else {
                                        app.ifEshopText = false
                                    }
                                }
                            }, function (res) {
                                //error
                                console.log("获取Store json失败", res)
                            })
                        }, 800)
                    }, function (res) {
                        //error
                        console.log("获取Store json失败", res)
                    })
                })

                app.weather = data.condition.condition
                app.wind = data.condition.windDir
                app.windLevel = data.condition.windLevel

                app.temperature = data.condition.temp
                app.cloud = data.condition.condition
                app.pmNums = data.aqi.pm25

                app.airQuality = getAirCondition(data.aqi.value)

                var todayInfo = getObjFirst(data.liveIndex)
                console.log(todayInfo)
                for (var i in todayInfo) {
                    if (todayInfo[i].code == 32) {
                        app.allergyStatus = todayInfo[i].status  //""极易发"" 过敏指数
                        app.tips = todayInfo[i].desc   //描述
                    }
                }

                function getObjFirst(obj) {
                    for (var i in obj) return obj[i];
                }
            })

        }


        //获取城市列表
        function getLocaltion(app, point, complete) {
            app.$http.get(getLocaltionCityUrl + 'lat/' + point.latitude + '/log/' + point.longitude).then(function (res) {
                console.log(res);
                if (res.status == 200) {
                    //获取城市成功
                    complete(res.data)
                } else {
                    console.log(res.statusText)
                }
            }, function (err) {
                console.log("坐标转城市失败")
                console.log(err);
            })

        }

    },

    mounted: function () {
        console.log("mounted")
        // console.log(document.getElementById('wrapper'))
    },

})

//获取KA信息
function getKaInfo(kaJson, city) {
    // console.log(kaJson, city)
    var _city = String(city)
    var kaList = [];
    for (var i in kaJson) {
        if (_city.indexOf(kaJson[i].city) >= 0) {
            //有匹配
            kaList.push(kaJson[i])
        } else {
            //无匹配

        }
    }
    return kaList;

}//获取城市信息
function getCityInfo(cityJson, area, pname) {
    // var kaList = [];
    console.log(cityJson, area)
    for (var i in cityJson) {
        var obj = cityJson[i]

        if (pname.indexOf(obj.name) >= 0) { //  省
            if (area.indexOf(obj.name) >= 0) {
                return obj.name
            } else {
                // console.log(obj)
                for (var j in obj.sub) {
                    // console.log(obj.sub[i])
                    if (obj.sub[j].sub) {
                        // console.log("sub")
                        for (var v in obj.sub[j].sub) {
                            // console.log(obj.sub[j].sub[v])
                            var _str = String(obj.sub[j].sub[v].name).replace(/县/, '')
                            var _str2 = _str.replace(/区/, '')

                            if (area.indexOf(_str2) >= 0) {
                                // console.log("有匹配")
                                return obj.sub[j].name
                            } else {
                                //无匹配  如果匹配不到区 就匹配城市
                                if (area.indexOf(obj.sub[j].name) >= 0) {
                                    // console.log("有匹配")
                                    return obj.sub[j].name
                                }
                            }
                        }
                    } else {
                        // console.log(obj.sub)
                        //一级城市 直辖市列表
                        for (var v in obj.sub) {
                            var _str = String(obj.sub[v].name).replace(/县/, '')
                            var _str2 = _str.replace(/区/, '')
                            console.log(_str2)
                            if (area.indexOf(_str2) >= 0) {
                                return obj.name
                            }
                        }

                    }

                }
            }
        }

    }
}

//空气质量判断
function getAirCondition(pm25) {
    var nums = pm25;
    if (nums <= 50) {
        return '空气质量优'
    } else if (nums > 50 && nums <= 100) {
        return '空气质量良'
    } else if (nums > 100 && nums <= 200) {
        return '轻度污染'
    } else if (nums > 200 && nums <= 300) {
        return '中度污染'
    } else if (nums > 300) {
        return '严重污染'
    }
}

//初始化滚动条插件
function initBscroll() {
    // console.log(document)
    console.log(document.getElementById('wrapper'))
    var scroll = new BScroll(document.getElementById('wrapper'), {
        startX: 0,
        startY: 0,
        scrollbar: {
            fade: false,
            interactive: false // 1.8.0 新增
        }
    })
}

//获取商店列表
function getStoreList(storeJson, cityInfo) {
    // var  cityId = data.cityId
    var areaName = String(cityInfo.area)
    var city = String(cityInfo.city)
    console.log(areaName)
    console.log(city)

    var locationCityStoreList = []
    var locationAreaStoreList = []
    for (var i in storeJson) {
        if (storeJson[i].city) {
            // console.log(storeJson[i].city)
            if (city.indexOf(storeJson[i].city) >= 0) {
                //如果 有城市
                locationCityStoreList.push(storeJson[i])
            }
        }
    }

    //匹配区域
    if (locationCityStoreList.length > 0) {
        console.log(locationCityStoreList)

        for (var i in locationCityStoreList) {
            var _area = String(locationCityStoreList[i].area)
            if (areaName.length >= _area.length) { //判断哪个字符多
                if (areaName.indexOf(_area) >= 0) {
                    //如果 区域
                    locationAreaStoreList.push(locationCityStoreList[i])
                }
            } else {
                if (_area.indexOf(areaName) >= 0) {
                    //如果 区域
                    locationAreaStoreList.push(locationCityStoreList[i])
                }
            }
        }
    }
    console.log(locationCityStoreList)
    console.log(locationAreaStoreList)

    if (locationAreaStoreList.length > 0) {
        return locationAreaStoreList //如果有区域，返回区域
    } else if (locationAreaStoreList.length <= 0 && locationCityStoreList.length > 0) {
        return locationCityStoreList //如果没有区域，有城市，返回城市
    } else if (locationAreaStoreList.length <= 0 && locationCityStoreList.length <= 0) {
        return false //如果都没有，返回所有
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}