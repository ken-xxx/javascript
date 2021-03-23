function curry (fn){
  var _len = fn.length;
  var _args = [].slice.call(arguments,1)
  return function (){
    let arg = Array.from(arguments);
    var allArgs = _args.concat(arg);
    if(allArgs.length >= _len){
      return fn.call(this,...allArgs)
    }else{
      return curry.apply(this,[fn,...allArgs])
    }
  }
}
var test = curry(function(a,b,c){
  console.log(a,b,c)
},1)
test(2)(2)