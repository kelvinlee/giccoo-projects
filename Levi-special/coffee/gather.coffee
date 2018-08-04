

window.onload = ->
	init()

init = ->
	main = new Vue
		el: "#main"
		data:
			now: 1
			playing: false
			list: [
				{id: 1,nickname:"",message:"结婚后就失去了独处空间,我已经穿着裤子在马桶上坐了1小时了",playing: false}
				{id: 2,nickname:"",message:"他们说以后还会常常喝醉。但像毕业这么开心的醉,大概不会有了",playing: false}
				{id: 3,nickname:"",message:"因为怕吵到妈妈,我爸总是静音看球,却管不住自己发出的音量",playing: false}
				{id: 4,nickname:"",message:"为什么有这么多解压的玩具？生活不易啊！",playing: false}
				{id: 5,nickname:"",message:"坚持早起运动的第三天,发现原来总有人比你起得更早",playing: false}
				{id: 6,nickname:"",message:"当年车后座的女孩,今天给我发来了请帖",playing: false}
				{id: 7,nickname:"",message:"每天早上起床胸口发闷,却还是露出老母亲的微笑,真是甜蜜的负担呀",playing: false}
				{id: 8,nickname:"",message:"旁边的GTR挺拉风,但在高峰期的四环飙一下？没在怕的",playing: false}
				{id: 9,nickname:"",message:"第一次带男朋友回家,我准备好了。哦对了,我也是男生",playing: false}
				{id: 10,nickname:"",message:"又见到凌晨的上海,便利店小姐姐的那句欢迎光临,就是我的晚安",playing: false}
				{id: 11,nickname:"",message:"有时候觉得爸爸是不是老了,总是在客厅睡着",playing: false}
				{id: 12,nickname:"",message:"德国队输球了换老公做饭.我说愿赌服输,他说谁跟你赌,我只是愿意输",playing: false}
				{id: 13,nickname:"",message:"生日刚好出差,回酒店奖励自己一个蛋糕。什么事都比工作重要",playing: false}
				{id: 14,nickname:"",message:"老妈从来不会给我开门说回来啦！但每次回家,我好像都听得到",playing: false}
				{id: 15,nickname:"",message:"晚饭后跟老公来荡秋千.好像从上学起,推我荡秋千的人一直都是他",playing: false}
				{id: 16,nickname:"",message:"这钻头发出的虽然是噪音,却是我幸福的开始",playing: false}
				{id: 17,nickname:"",message:"从小到大都被安排的明明白白,成年迟到的叛逆,从头发的长度开始",playing: false}
				{id: 18,nickname:"",message:"我的鼓声穿不透这练习室隔音的墙壁,但终有一天,会穿透人心",playing: false}
				{id: 19,nickname:"",message:"出门前把电视吊灯都打开。晚上回家,就会感觉像是有人在等我",playing: false}
				{id: 20,nickname:"",message:"每次都被外婆家座机铃声吓到,听力差的她,很怕错过我们的电话吧",playing: false}
			]
		watch:
			now: (n,o)->
				console.log "2"
				if n isnt o
					audio = document.getElementById "bgm"
					setTimeout ->
						audio.currentTime = 0
						audio.play()
					,50
		methods:
			load: ->
				console.log "load"
			play: (index)->
				audio = document.getElementById "bgm"
				console.log @.now , (index+1) , audio.paused
				if @.now is (index+1)
					if audio.paused
						audio.play()
					else
						audio.pause()
					console.log "true"
				else
					@.now = index+1
					console.log "false"
					# audio.currentTime = 0
				
				
			playing: (index,evt)->
				audio = evt.target
				@.list[index].playing = !audio.paused

		mounted: ->
