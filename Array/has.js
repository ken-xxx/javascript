Array.prototype.has = function(val){
  var len = this.length;
  if(!len || (!val&& val!=0)){
    return false;
  }
  var result = false;
  for(var i =0;i<len;i++){
    if(this[i] == val){
      result =  true
      break;
    }
  }
  return result;
}
var arr = Array.from({length:10}).fill(1)
console.log(arr.has(0))