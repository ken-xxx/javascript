Function.prototype.apply1 = function(_self = globalThis,args){
  _self.fun = this;
  var result;
  if(args){
    result = _self.fun(...args);
  }else{
    result = _self.fun();
  }
  delete _self.fun
  return result;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.apply1(this,[name,price]);
  this.category = 'food';
  return this
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"