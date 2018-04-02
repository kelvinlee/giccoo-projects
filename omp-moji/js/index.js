// const getLocaltionUrl = 'http://h5-lbs.api.moji.com/location/location'
const getLocaltionCityUrl = 'https://g.giccoo.com/sensitivity/api/local/' //lat/39.98246/log/117.079222
const getWeatherInfoUrl = 'https://g.giccoo.com/sensitivity/api/city/p/'
// const firstRender = true
// const getcoordPath = 'http://g.giccoo.com/api/ip/'

var app = new Vue({
	el: '#app',
	data: {
		area:'朝阳',
		weather:'',
		wind:'',
		windLevel:'',
		allergyStatus:'',
		tips:'',
		temperature:'',
		cloud:'',
		pmNums:'',
		airQuality:'',
		ifStore:true, //是否有本地药店
		storeName:'',//药店名称

		quesionList: [],
		storeList: [],
		storePopup: 'none',
		loading: false
	},
	watch: {

	},
	methods: {
		closeStore: function () {
			this.storePopup = 'none'
		},
		showStore: function () {
			this.storePopup = 'block'
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
		let point = {
			'latitude':39.906523, //石景山
			'longitude':116.256228
		}
		testLocation(this,point);//测试位置
		// getUserPosition(this);//获取位置

		//加载本地数据
		this.$http.get('./config/question.json').then((res) => {
			let data = res.data
			console.log(data)
			this.quesionList = data
		}, (res) => {
			console.log("加载问题json失败")
		})


		//测试坐标信息
		function testLocation(app,point){
			app.loading = true
			// let that = app
			app.$http.get(getLocaltionCityUrl + 'lat/' + point.latitude + '/log/' + point.longitude).then((res) => {
				console.log(res);
				if (res.status == 200) {
					//获取城市成功
					console.log(res);
					var data = res.body.result;

					//根据城市ID获取相关信息
					app.$http.get(getWeatherInfoUrl + data.cityId).then((res) => {
						app.loading = false
						let data = res.data.data
						console.log(data)
						app.area = data.cityName
						app.weather = data.condition.condition
						app.wind = data.condition.windDir
						app.windLevel = data.condition.windLevel

						app.temperature = data.condition.temp
						app.cloud = data.condition.condition
						app.pmNums = data.aqi.pm25

						app.airQuality = getAirCondition(data.aqi.pm25)

						let todayInfo = getObjFirst(data.liveIndex)
						console.log(todayInfo)
						for(let i in todayInfo){
							if(todayInfo[i].code == 32){
								app.allergyStatus = todayInfo[i].status  //""极易发"" 过敏指数
								app.tips = todayInfo[i].desc   //描述
							}
						}
						function getObjFirst(obj) {
							for (let i in obj) return obj[i];
						}
					})


					//拿到城市区域 就去请求商店列表
					app.$http.get('./config/store.json').then((res) => {
						let storeJson = res.data
						let localStore = getStoreList(storeJson, data)
						app.storeList = localStore
						// console.log(app.storeList)
						//初始化滚动条
						// app.storePopup = true
						// console.log("初始化scroll")
						initBscroll();
						// app.storePopup = false
					}, (res) => {
						//error
						console.log("获取Store json失败", res)
					})

				} else {
					console.log(res.statusText)
				}
			}, (err) => {
				console.log("坐标转城市失败")
				console.log(err);
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
					let point = {
						longitude: position.coords.longitude,//经度
						latitude: position.coords.latitude//纬度
					}
					console.log('当前地址的经纬度：经度' + point.longitude + '，纬度' + point.latitude);

					//坐标换城市
					getLocaltion(point, function (res) {
						console.log(res);
						var data = res.result;

						//根据城市ID获取相关信息
						app.$http.get(getWeatherInfoUrl + data.cityId).then((res) => {
							let data = res.data.data
							console.log(data)
							app.area = data.cityName
							app.weather = data.condition.condition
							app.wind = data.condition.windDir
							app.windLevel = data.condition.windLevel

							app.temperature = data.condition.temp
							app.cloud = data.condition.condition
							app.pmNums = data.aqi.pm25

							app.airQuality = getAirCondition(data.aqi.pm25)

							let todayInfo = getObjFirst(data.liveIndex)
							console.log(todayInfo)
							for(let i in todayInfo){
								if(todayInfo[i].code == 32){
									app.allergyStatus = todayInfo[i].status  //""极易发"" 过敏指数
									app.tips = todayInfo[i].desc   //描述
								}
							}
							function getObjFirst(obj) {
								for (let i in obj) return obj[i];
							}
						})


						//拿到城市区域 就去请求商店列表
						app.$http.get('./config/store.json').then((res) => {
							let storeJson = res.data
							let localStore = getStoreList(storeJson, data)
							app.storeList = localStore
							// console.log(app.storeList)
							//初始化滚动条
							// app.storePopup = true
							// console.log("初始化scroll")
							initBscroll();
							// app.storePopup = false
						}, (res) => {
							//error
							console.log("获取Store json失败", res)
						})

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

		//获取城市列表
		function getLocaltion(point, complete) {
			app.$http.get(getLocaltionCityUrl + 'lat/' + point.latitude + '/log/' + point.longitude).then((res) => {
				console.log(res);
				if (res.status == 200) {
					//获取城市成功
					complete(res.data)
				} else {
					console.log(res.statusText)
				}
			}, (err) => {
				console.log("坐标转城市失败")
				console.log(err);
			})
			/*let JSONparams = {
				params: {
					latitude: point.latitude,
					longitude: point.longitude
				},
				jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
			}
			app.$http.jsonp(getLocaltionUrl + '/lat/'+params.latitude+ '/lat/'+params.latitude).then((res) => {
				console.log(res);
				if (res.status == 200) {
					//获取城市成功
					complete(res.data)
				} else {
					console.log(res.statusText)
				}
			}, (err) => {
				console.log("坐标转城市失败")
				console.log(err);
			})*/
		}

	},

	mounted: function () {
		console.log("mounted")
		// console.log(document.getElementById('wrapper'))
	},

})

//空气质量判断
function getAirCondition(pm25){
	var nums = pm25;
	if(nums<=50){
		return '空气质量优'
	}else if(nums>50 && nums<=100){
		return '空气质量良'
	}else if(nums>100 && nums<=200){
		return '轻度污染'
	}else if(nums>200 && nums<=300){
		return '中度污染'
	}else if(nums>300){
		return '严重污染'
	}
}
//初始化滚动条插件
function initBscroll() {
	// console.log(document)
	console.log(document.getElementById('wrapper'))
	let scroll = new BScroll(document.getElementById('wrapper'), {
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
		let data = cityInfo
		console.log(data)
		let cityId = data.cityId
		let areaName = data.cityName
		let city = String(data.detail.split(',')[0])
		console.log(areaName)
		console.log(city)

		let locationCityStoreList = []
		let locationAreaStoreList = []
		for (var i in storeJson) {
			if (storeJson[i].city) {
				console.log(storeJson[i].city)
				if (city.indexOf(storeJson[i].city) >= 0) {
					//如果 有城市
					locationCityStoreList.push(storeJson[i])
				} else {
					//没有在所在城市找到药店
				}
			}
		}

		//匹配区域
		if (locationCityStoreList.length > 0) {
			for (var i in locationCityStoreList) {
				if (areaName.length >= locationCityStoreList[i].area.length) { //判断哪个字符多
					if (areaName.indexOf(locationCityStoreList[i].area) >= 0) {
						//如果 区域
						locationAreaStoreList.push(locationCityStoreList[i])
					} else {
						//没有在所在区域找到药店
					}
				} else {
					if (locationCityStoreList[i].area.indexOf(areaName) >= 0) {
						//如果 区域
						locationAreaStoreList.push(locationCityStoreList[i])
					} else {
						//没有在所在区域找到药店
					}
				}

				function searchArea(a, b) {

				}

			}
		}
		console.log(locationCityStoreList)
		console.log(locationAreaStoreList)

		if (locationAreaStoreList.length > 0) {
			return locationAreaStoreList
		} else {
			return locationCityStoreList
		}
	}