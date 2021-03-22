function getType (val){

  return Object.prototype.toString.call(val)
}

function isType (type){
  return function(val){
    return Object.prototype.toString.call(val) == `[object ${type}]`
  }
}

var arr = [],isArray = isType('Array');
console.log(isArray(arr))
