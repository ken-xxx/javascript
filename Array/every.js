Array.prototype.every1 = function(fun){
  var _self = this,len = this.length,result;
  if(len <= 0) {
    return true
  }
  for(var i = 0; i <len ; i++){
    result = fun(_self[i],i,_self)
  }
  return result
}

var arr = Array.from({length:10}).fill(1)
arr.push(2)

console.log(arr.every1(o=> o == 1))