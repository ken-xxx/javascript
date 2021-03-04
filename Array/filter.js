
Array.prototype.filter2= function(fun){
  var _self = this , len = this.length;
  var result = [];
  for(var i = 0; i < len ; i ++){
    fun(_self[i],i,_self) && result.push(_self[i])
  }
  return result
}

var arr = Array.from({length:10}).fill('test')

console.log(arr.filter2(item=>item == 'test')) 
