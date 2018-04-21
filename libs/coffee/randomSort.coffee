randomSort = (obj)->
  newArr = []
  oldarr = obj
  randomSortFun = (arr, newArr) ->
    if arr.length == 1
      newArr.push arr[0]
      return newArr
    random = Math.ceil(Math.random() * arr.length) - 1
    newArr.push arr[random]
    arr.splice random, 1
    randomSortFun arr, newArr
  randomSortFun oldarr,newArr
  return newArr

getRandom = (length)->
  return parseInt(Math.random()*(length+1)-1)