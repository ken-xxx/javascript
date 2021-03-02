
Array.prototype.forEach2 = function(fun){
  var _self = this , len = this.length;
  if(len<= 0)return;
  for(var i = 0; i<len; i++){
    fun(_self[i],i,_self)
  }
}

var arr = Array.from({length:10}).fill({test:'msg'})
arr.forEach2(function(item,index){
  console.log(index+':'+item.test)
})