
Array.prototype.map2 = function(fn){
  var _self = this,len = this.length,result = [];
  if(len <= 0) return;
  for(var i = 0; i < len; i++){
    result.push(fn(_self[i],i,_self)) 
  }
  return result
}

var arr = Array.from({length:10}).fill({test:'msg'})

arr.map2(item=>{
  console.log(item)
  return item;
})