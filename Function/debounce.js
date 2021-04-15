function debounce (fun,wait){
  return function (){
    var _that = this;
    var args = Array.from(arguments);
    setTimeout(function(){
      fun.call(_that,...args)
    },wait * 1000)
  }
}

const debounce = (fn,wait)=>()=>{
  var context = this
  setTimeout(function(args){
    fn.call(context,args)
  },wait * 1000,Array.from(arguments))
}

var test = debounce(function(i){console.log(i)},2)

test(1)
test(2)
test(3)
