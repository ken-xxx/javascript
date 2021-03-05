Array.prototype.join1 = function(str){
  var _self = this,len = this.length,result = '',str = str || ''
  if(len<1) return ''
  for(var i = 0;i<len;i++){
    var item = i==len -1?i:i + str;
    
    result += item
  }
  return result;
}

var arr = Array.from({length:4}).fill('1')
console.log(arr.join1(','))