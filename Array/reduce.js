
Array.prototype.reduce2 = function(fn,intVal){
  var i,nextVal,len=this.length;
  if(!intVal){
    nextVal = this[0];
    i = 1
  }else{
    nextVal = intVal;
    i = 0
  }
  for(;i<len;i++){
    nextVal = fn(nextVal,this[i],i,this)
  }
  return nextVal
}

var arr = Array.from({length:10}).fill({test:'msg'})

var result = arr.reduce2(function(result,item,index){
  item.num = Math.random() *10
  result.push(item)
  return result;
},[])
console.log(result)

