Array.prototype.chunk = function(size){
  var arr = this;
  size = parseInt(size);
  const len = arr.length === 0?0:arr.length;
  if(!len || size<1){
    return []
  }
  var index = 0;
  var resultIndex = 0;
  var result = new Array(Math.ceil(len/size))

  while(index < len){
    result[resultIndex++] = arr.slice(index,(index+=size));
  }
  return result;
}
var arr = Array.from({length:7}).fill('test')
console.log(arr.chunk(3))