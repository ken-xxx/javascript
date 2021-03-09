Function.prototype.call1 = function(_self = globalThis){
  _self.fn = this;
  var args = Array.from(arguments).slice(1);
  var result = _self.fn(...args);
  delete _self.fn;
  return result;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call1(this, name, price);
  this.category = 'food';
  return this
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"