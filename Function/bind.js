
var bind1 = function(){
  var fn  = this ,_self = [].slice.call(arguments,0)[0] || global;
  var _args = [].slice.call(arguments,1);
  var temp = function (){}
  function runFun (){
    var args = [].slice.call(arguments).concat(_args)
    // 构造函数使用时会this指向错误
    fn.apply(this instanceof temp?this:fn,args)
  }
  // 不直接绑定prototype 是因为 修改runFun 的prototype 会导致 this.prototype修改
  runFun.prototype = this.prototype;
  temp.prototype = new runFun()
  return temp
}
Function.prototype.bind1 = bind1;

let value = 2;
let foo = {
    value: 1
};

