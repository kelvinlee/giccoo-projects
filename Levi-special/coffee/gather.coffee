apiLink = "//g.giccoo.com/"
# apiLink = "//localhost:3000/"
main = {}

window.onload = ->
	init()

init = ->
	main = new Vue
		el: "#main"
		data:
			now: 1
			playing: false
			list: [
				{id: 1,nickname:"",message:"结婚后就失去了独处空间,我已经穿着裤子在马桶上坐了1小时了"}
				{id: 2,nickname:"",message:"他们说以后还会常常喝醉。但像毕业这么开心的醉,大概不会有了"}
				{id: 3,nickname:"",message:"因为怕吵到妈妈,我爸总是静音看球,却管不住自己发出的音量"}
				{id: 4,nickname:"",message:"为什么有这么多解压的玩具？生活不易啊！"}
				{id: 5,nickname:"",message:"坚持早起运动的第三天,发现原来总有人比你起得更早"}
				{id: 6,nickname:"",message:"当年车后座的女孩,今天给我发来了请帖"}
				{id: 7,nickname:"",message:"每天早上起床胸口发闷,却还是露出老母亲的微笑,真是甜蜜的负担呀"}
				{id: 8,nickname:"",message:"旁边的GTR挺拉风,但在高峰期的四环飙一下？没在怕的"}
				{id: 9,nickname:"",message:"第一次带男朋友回家,我准备好了。哦对了,我也是男生"}
				{id: 10,nickname:"",message:"又见到凌晨的上海,便利店小姐姐的那句欢迎光临,就是我的晚安"}
				{id: 11,nickname:"",message:"有时候觉得爸爸是不是老了,总是在客厅睡着"}
				{id: 12,nickname:"",message:"德国队输球了换老公做饭.我说愿赌服输,他说谁跟你赌,我只是愿意输"}
				{id: 13,nickname:"",message:"生日刚好出差,回酒店奖励自己一个蛋糕。什么事都比工作重要"}
				{id: 14,nickname:"",message:"老妈从来不会给我开门说回来啦！但每次回家,我好像都听得到"}
				{id: 15,nickname:"",message:"晚饭后跟老公来荡秋千.好像从上学起,推我荡秋千的人一直都是他"}
				{id: 16,nickname:"",message:"这钻头发出的虽然是噪音,却是我幸福的开始"}
				{id: 17,nickname:"",message:"从小到大都被安排的明明白白,成年迟到的叛逆,从头发的长度开始"}
				{id: 18,nickname:"",message:"我的鼓声穿不透这练习室隔音的墙壁,但终有一天,会穿透人心"}
				{id: 19,nickname:"",message:"出门前把电视吊灯都打开。晚上回家,就会感觉像是有人在等我"}
				{id: 20,nickname:"",message:"每次都被外婆家座机铃声吓到,听力差的她,很怕错过我们的电话吧"}
			]
			askList: []
			asking: false
			page: 0
			src: ""
		watch:
			now: (n,o)->
				if n isnt o
					setTimeout ->
						audio = document.getElementById "bgm"
						audio.currentTime = 0
						audio.play()
						@.playing = true
					,50
		methods:
			scroll: (evt)->
				# mainBody = document.getElementById "main"
				@.ask() if (evt.target.scrollTop + evt.target.clientHeight) >= (evt.target.scrollHeight - 100)
			load: ->
				console.log "load"
				if @.src isnt ""
					audio = document.getElementById "bgm"
					audio.play()
			play: (index)->
				audio = document.getElementById "bgm"
				@.src = index
				# console.log "index",index,audio.paused,@.playing,audio.src
				setTimeout =>
					if @.now is index
						if audio.paused
							audio.load()
							audio.play()
							@.playing = true
						else
							audio.pause()
					else
						@.now = index
				,100
				# console.log @.now , @.playing
				
				
			playing: (index,evt)->
				audio = evt.target
				@.list[index].playing = !audio.paused
			ask: ->
				return false if @.asking
				@.asking = true
				@.page += 1
				axios.get "#{apiLink}active/Levi/list/page/#{@.page}"
				.then (msg)=>
					console.log msg.data.info
					@.askList = @.askList.concat msg.data.info
					@.asking = false
					if msg.data.info.length <= 0
						@.asking = false


		mounted: ->
			@.ask()
