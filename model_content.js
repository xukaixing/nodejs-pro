//返回对象
//function Hello() {
//    var name;
//    this.setName = function(thyName) {
//        name = thyName;
//    };
//    this.sayHello = function() {
//        console.log('Hello ' + name);
//    };
//};
//module.exports = Hello;
//返回属性或方法
exports.world = function() {
    console.log('Hello World exports');
};

