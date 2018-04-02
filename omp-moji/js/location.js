exports.install = function (Vue, options) {
	Vue.prototype.getLocaltion = function (){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		}
		else {
			// x.innerHTML = "Geolocation is not supported by this browser.";
		}
		//获取地理位置成功
		function showPosition(position) {
			var latitude = position.coords.latitude
			var longitude = position.coords.longitude
			console.log(latitude,longitude)
		}

		//获取地理位置失败
		function showError(error) {
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
		}
	};
};