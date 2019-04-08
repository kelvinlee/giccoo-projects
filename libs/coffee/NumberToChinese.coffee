chnNumChar = ["零","一","二","三","四","五","六","七","八","九"]
chnUnitSection = ["","万","亿","万亿","亿亿"]
chnUnitChar = ["","十","百","千"]
SectionToChinese = (section) ->
	strIns = ''
	chnStr = ''
	unitPos = 0
	oldSection = section
	zero = true
	while section > 0
		v = section % 10
		if v == 0
			if !zero
				zero = true
				chnStr = chnNumChar[v] + chnStr
		else
			zero = false
			strIns = chnNumChar[v]
			strIns += chnUnitChar[unitPos]
			chnStr = strIns + chnStr
		unitPos++
		section = Math.floor(section / 10)
	return chnStr.substr(1) if oldSection >= 10 and oldSection < 20
	return chnStr
NumberToChinese = (num) ->
	unitPos = 0
	strIns = ''
	chnStr = ''
	needZero = false
	if num == 0
		return chnNumChar[0]
	while num > 0
		section = num % 10000
		if needZero
			chnStr = chnNumChar[0] + chnStr
		strIns = SectionToChinese(section)
		strIns += if section != 0 then chnUnitSection[unitPos] else chnUnitSection[0]
		chnStr = strIns + chnStr
		needZero = section < 1000 and section > 0
		num = Math.floor(num / 10000)
		unitPos++
	chnStr
