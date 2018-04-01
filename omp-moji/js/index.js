var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!',
		quesionList:[]
	},
	methods: {},
	beforecreate:function () {
		//loading
		//地理位置授权
		console.log('beforecreate')
	},
	created:function () {
		//init
		console.log('init')
		//加载本地数据
		axios.get('./config/question.json').then(res=>{
			// console.log(res.data)
			let data = res.data;
			console.log(this)
			this.quesionList = data;
		})

	}
})