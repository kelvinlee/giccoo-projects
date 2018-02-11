riotVUE =
	arrayMethods: Object.create(Array.prototype)
	newArrProto: []
	
	init: (opts)->
		self = this
		
		# 设置数组变更通知
		["pop","push","reverse","shift","unshift","slice","splice","sort","filter","forEach"].forEach (method)=>
			original = self.arrayMethods[method]
			self.newArrProto[method] = ->
				run = (who,args)->
					original.apply who, args
					self.eachAll self,who
					self.update()
					return 
				return run this, arguments
		# 给 data 内的所有属性绑定监控
		@eachAll this,this.data
		# @eachAll this,this.opts
		# 设置 $set 和 $delete .
		
	eachAll: (self,data)->
		for key of data
			@createProperty self,data,key,data[key]
			if Array.isArray data[key]
				data[key].__proto__ = self.newArrProto
				@eachAll self,data[key]
			if typeof(data[key]) is "object"
				@eachAll self,data[key]

	createProperty: (parent,data,pro,val)->
		temp = val
		Object.defineProperty data, pro,
			configurable: true
			get: ->
				return temp
			set: (value)->
				return false if value is temp or (temp isnt temp && value isnt value)
				temp = value
				parent.update()

