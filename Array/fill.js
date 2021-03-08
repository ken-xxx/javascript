Array.prototype.fill1 = function(value,startIndex,endIndex){
  var _self = this,len = this.length,result = [];
  startIndex = startIndex || - 1;
  endIndex = endIndex || len - 1;
  if(len < 1){
    return []
  }
  for(var i = 0; i< len;i++){
    if(startIndex > -1 && startIndex >= i){
      if(endIndex >-1 && startIndex > i){
        result[i] = value
      }else{
        result[i] = _self[i]
      }
    }else{
      result[i] = _self[i]
    }
  }
  return result;
}

var arr = Array.from({length:10}).fill(1)

console.log(arr)