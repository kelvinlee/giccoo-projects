_CDN = "."
SOUND = {}
thudIndex = 0
SOUND.runRandomHit = ->
	return false if not main.canPlay
	SOUND["hit#{thudIndex+1}"].play()
	thudIndex = (thudIndex + 1) % 4

SOUND.hit1 = new Howl
	src: ["#{_CDN}/mp3/pig-1.mp3"]
SOUND.hit2 = new Howl
	src: ["#{_CDN}/mp3/pig-2.mp3"]
SOUND.hit3 = new Howl
	src: ["#{_CDN}/mp3/pig-3.mp3"]
SOUND.hit4 = new Howl
	src: ["#{_CDN}/mp3/pig-4.mp3"]

SOUND.g = new Howl
	src: ["#{_CDN}/mp3/gift.mp3"]

SOUND.giftEnd = new Howl
	src: ["#{_CDN}/mp3/han.mp3"]
	volume: 0.5

SOUND.gift = {
	play: ->
		return false if not main.canPlay
		SOUND.g.play()
}

SOUND.end = ->
	return false if not main.canPlay
	SOUND.giftEnd.play()
	# setTimeout ->
	# 	SOUND.bgm.play()
	# ,500

