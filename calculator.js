const calculator = {
  add: function (x, y) {
    return x + y;
  },
  minus: function(x,y) {
    return x-y;
  },
  multiply: function(x,y){
    return x*y;
  },
  divide: function (x,y){
    return x/y;
  },
  powerOf:function(x,y) {
    /* exponential
    var num = 1;
    for (var i = 1; i<= y; i++){
      num=num*x;
    }
    return num;
    */
    // x**y is so much convenient!
    return x**y;
  }
}

console.log(calculator.add(2,3))  //5
console.log(calculator.minus(7,3))  //4
console.log(calculator.multiply(2,3)) //6
console.log(calculator.divide(12,3)) //4
console.log(calculator.powerOf(2,3))  //8
