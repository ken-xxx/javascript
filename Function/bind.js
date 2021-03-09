
var bind1 = function(_self = globalThis){
  var fn = this;
  var args = [...arguments].slice(1);
  var result = function (){
    var newArgs = [...arguments];
    if(this instanceof result){
      fn.apply(this,newArgs.concat(args))
    }else{
      fn.apply(_self,newArgs.concat(args))
    }
  }
  result.prototype = Object.create(fn.prototype)
  return result
}
Function.prototype.bind1 = bind1;

var obj =  {
  a:1
}

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

var fun = fn.bind1(obj);
fun();
