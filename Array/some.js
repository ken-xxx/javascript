Array.prototype.some1 = function(fun){
  var _self = this,len = this.length,result = false;
  for(var i = 0; i<len;i++){
    if(fun(_self[i],i,_self)){
      result = true;
      break
    }
  }
  return result;
}

var arr = [1,2,3,4,5];
console.log(arr.some1(o=>o == 1))