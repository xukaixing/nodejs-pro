
function Hello() {
  var name;
  this.setName = function(thyName) {
    name = thyName;
  };

  this.sayHello = function() {
    console.log('Hello: ', name);
  };
}

module.exports = Hello;
// 返回属性或方法
exports.world = function() {
  console.log('Hello World exports');
};
var w = function() {
  console.log('Hello World2 exports');
};
// exports相当于module.exports,exports = module.exports = {},exports 是 module.exports 的一个引用;
exports.world2 = w;
