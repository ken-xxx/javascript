Array.prototype.concat1 = function(){
  var _self = this,len = this.length,result = _self || [];

  var args = [].slice.call(arguments);
  
  for(var i =0;i<args.length;i++){
    if(Object.prototype.toString.call(args[i]) == '[object Array]' && args[i].length >0){
      for(var j = 0;j<args[i].length;j++){
        result.push(args[i][j])
      }
    }
  }
  return result;
}
var arr = Array.from({length:10}).fill(1)
console.log(arr.concat1([2],[3,4,5]))