const cityUrl = 'http://h5-lbs.api.moji.com/location/location'
const getWeatherInfoUrl = 'http://g.giccoo.com/sensitivity/api/city/p/2'

var app = new Vue({
	el: '#app',
	data: {
		quesionList: []
	},
	methods: {},
	beforecreate: function () {
		//loading
		//地理位置授权
		console.log('beforecreate')
	},
	beforeMount:function(){

	},
	created: function () {
		//init
		console.log('init')
		//加载本地数据
		axios.get('./config/question.json').then(res => {
			// console.log(res.data)
			let data = res.data;
			console.log(data)
			this.quesionList = data;
		})

		/*this.$http.jsonp(getWeatherInfoUrl,{params:{"callback":"jsonPCallback"}})
			.then(function(data){
				console.log(data)
			})
*/

		// var cityId = '2';
		axios.post(getWeatherInfoUrl).then(res => {
			console.log("getWeatherInfoUrl")
			// console.log(res.data)
			// let data = res.data;
			console.log(res)
		})


		if (navigator.geolocation) {
			console.log("h5 定位中");
			navigator.geolocation.getCurrentPosition(function(position) {
				console.log('h5定位成功；');
				var latitude = position.coords.latitude
				var longitude = position.coords.longitude
				console.log(latitude,longitude),
					alert(latitude,longitude)
				axios.post(cityUrl,{
					latitude:latitude,
					longitude:longitude
				}).then(res => {
					// console.log(res.data)
					let data = res.data;
					console.log(data)
					alert(data)
				})
			}, function(error) {
				console.log('h5定失败；');
				alert(error)
				switch (error.code) {
					case error.PERMISSION_DENIED:
						console.log('User denied the request for Geolocation.');
						break;
					case error.POSITION_UNAVAILABLE:
						console.log('Location information is unavailable');
						break;
					case error.TIMEOUT:
						console.log('The request to get user location timed out');
						break;
					case error.UNKNOWN_ERROR:
						console.log('An unknown error occurred');
						break;
				}
			})
		}

	}
})
