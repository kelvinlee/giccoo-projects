const getLocaltionUrl = 'http://h5-lbs.api.moji.com/location/location'
const getWeatherInfoUrl = 'http://g.giccoo.com/sensitivity/api/city/p/'
const getcoordPath = 'http://g.giccoo.com/api/ip/'

var app = new Vue({
	el: '#app',
	data: {
		quesionList: [],
		storeList: [],
		storePopup: false
	},
	methods: {
		closeStore:function () {
			this.storePopup = false
		},
		showStore:function () {
			this.storePopup = true
		}
	},
	beforecreate: function () {
		//loading
		//地理位置授权
		console.log('beforecreate')
	},
	beforeMount: function () {

	},
	created: function () {
		//init
		console.log('init')

		getUserPosition();//获取位置
		//加载本地数据
		this.$http.get('./config/question.json').then((res) => {
			let data = res.data
			console.log(data)
			this.quesionList = data
		})
		this.$http.get('./config/store.json').then((res) => {
			let storeJson = res.data
			// console.log(data)
			/*let data = {
				cityId: 622,
				cityName: "北辰区",
				detail: "天津市,北辰区"
			}*/
			// 获取坐标哦
			app.$http.get(getcoordPath).then((res) => {
				console.log(res)
				if (res.body.code == 200) {
					let point = res.body.info.content.point
					console.log(point)
					getLocaltion(point,function(data){
						console.log(data);
						let localStore = getStoreList(storeJson, data.result)
						app.storeList = localStore
						console.log(app.storeList)
						let scroll = new BScroll(document.getElementById('wrapper'), {
							startX: 0,
							startY: 0,
							scrollbar: {
								fade: false,
								interactive: false // 1.8.0 新增
							}
						})
						console.log(this)
					})
				} else {
					console.log(res.reason)
				}
			})
		})

		//使用浏览器获取用户位置
		function getUserPosition() {
			var options = {
				enableHighAccuracy : true,
				maximumAge : 1000
			}
			if (navigator.geolocation) {
				//浏览器支持geolocation
				navigator.geolocation.getCurrentPosition(function (position) {
					//成功
					var longitude = position.coords.longitude;
					//纬度
					var latitude = position.coords.latitude;
					alert('当前地址的经纬度：经度' + longitude + '，纬度' + latitude);

				}, function (error) {
					//失败
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
					if (locationCityStoreList[i].area.indexOf(areaName) >= 0) {
						//如果 区域
						locationAreaStoreList.push(locationCityStoreList[i])
					} else {
						//没有在所在区域找到药店
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


		let cityId = '2';
		this.$http.get(getWeatherInfoUrl + cityId).then((res) => {
			let data = res.data
			console.log(data)


		})

	},

})

function getLocaltion(point,complete) {
	let JSONparams = {
		params: {
			latitude: point.y,
			longitude: point.x
		},
		jsonp: 'callback' // 设置回调函数的参数的一个名字，默认是话是callback,
	}
	app.$http.jsonp(getLocaltionUrl, JSONparams).then((res) => {
		console.log(res);
		if (res.status == 200) {
			//获取城市成功
			complete(res.data)
		} else {
			console.log(res.statusText)
		}
	}, (err) => {
		console.log(err);
	})
}