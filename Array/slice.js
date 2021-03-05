Array.prototype.slice2 = function(){
  var _self = this,len = this.length,result = [];
  var _args = [].slice.call(arguments);
  var index = _args[0],size = _args[1];
  for(var i = 0;i<len;i++){
    if(size){
      if(i>=index && i <index+size){
        result.push(_self[i])
      }
    }else{
      i>=index && result.push(_self[i])
    }
  }
  return result;
}

var arr = Array.from({length:10}).fill({test:'msg'})

console.log(arr.slice2(4))
