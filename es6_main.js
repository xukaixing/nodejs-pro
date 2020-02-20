/*
 * @Description:es6 sample
 * @Author: andy.ten@tom.com
 * @Date: 2020-02-12 17:12:28
 * @LastEditors: andy.ten@tom.com
 * @LastEditTime : 2020-02-15 22:04:50
 * @Version: 1.0.0
 * @FilePath: /nodejs-pro/es6_main.js
 */

console.log('------------------------Symbol-------------------');
// ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
const sy = Symbol('kk');
console.log(sy);
console.log(typeof (sy));
// 相同参数 Symbol() 返回的值不相等
const sy1 = Symbol('kk');
console.log(sy === sy1); // false
console.log('--------------------------...---------------------');
// 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
const bar = { a: 1, b: 2 };
const baz = { ...bar, ...{ a: 2, b: 4 }};
console.log(baz);
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
const first = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
console.log('first:', first);
const second = new Map([[1, 'uno'], [2, 'dos']]);
// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
const merged = new Map([...first, ...second]);
console.log('merged:', merged);
console.log('--------------------Reflect 与 Proxy----------------');
// Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理
const target = {
  name: 'Tom',
  age: 24
};
const handler = {
  get: function(target, key) {
    console.log('getting ' + key);
    return target[key]; // 不是target.key
  },
  set: function(target, key, value) {
    console.log('setting ' + key);
    target[key] = value;
  }
};
const proxy = new Proxy(target, handler);
proxy.name; // 实际执行 handler.get
proxy.age = 25; // 实际执行 handler.set
console.log('------------------------字符串----------------------');
const name = 'Mike';
const age1 = 27;
const info = `My Name is ${name},I am ${age1 + 1} years old next year.`;
console.log(info);
// 浮点数计算是不精确的
// 0.1 + 0.2 = 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);
console.log('----------------------Generator--------------------');
function * tell() {
  console.log('执行a处理');
  yield 'a';
  console.log('执行b处理');
  yield 'b';
  console.log('执行c处理');
  return 'c';
}
const k = tell();
// 执行next()的时候，会运行到第一个yield为止
console.log(k.next()); // 执行a处理
// {value: "a", done: false}
// 执行next()的时候，会运行到第二个yield为止
console.log(k.next()); // 执行b处理
// {value: "b", done: false}
// 执行next()的时候，会运行到第三个yield为止
console.log(k.next()); // 执行c处理
// {value: "c", done: true}
console.log(k.next()); // {value: undefined, done: true}
console.log('----------------------Assign--------------------');
const sourceObj = { a: { b: 1 }};
const targetObj = { c: 3 };
Object.assign(targetObj, sourceObj);
console.log(targetObj);
// 数组的处理，会将数组处理成对象，所以先将 [2,3] 转为 {0:2,1:3} ，然后再进行属性复制，所以源对象的 0 号属性覆盖了目标对象的 0
Object.assign([2, 3], [5]); // [5,3]
console.log('----------------------Array---------------------');
// 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
const arr = Array.of(1, 2, 3, 4);
console.log(arr.find((item) => item > 2)); // 3
// 查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。
const arr2 = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr2.findIndex((item) => item = 1)); // 0
// 将一定范围索引的数组元素内容填充为单个指定的值。
const arr3 = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr3.fill(0, 1, 2)); // [1, 0, 3, 4]
// 将一定范围索引的数组元素修改为此数组另一指定范围索引的元素。
// 参数1：被修改的起始索引
// 参数2：被用来覆盖的数据的起始索引
// 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
console.log([1, 2, 3, 4].copyWithin(0, 2, 4)); // [3, 4, 3, 4]
// 数组是否包含指定值。
// 参数1：包含的指定值
[1, 2, 3].includes(1); // true
// 参数2：可选，搜索的起始索引，默认为0
[1, 2, 3].includes(1, 2); // false
// NaN 的包含判断
[1, NaN, 3].includes(NaN); // true
// 嵌套数组转一维数组
console.log('[1, [2, 3]].flat())', [1, [2, 3]].flat()); // [1, 2, 3]
console.log('----------------------function---------------------');
function fn(name, age = 17) {
  console.log(name + ',' + age);
}
fn('Amy', 18); // Amy,18
fn('Amy', ''); // Amy,
fn('Amy'); // Amy,17
var f = (a, b) => a + b;
console.log('箭头函数:', f(6, 2)); // 8
var Person = {
  'age': 18,
  'sayHello': function() {
    setTimeout(function() {
      console.log('Person.age:', this.age);
    });
  }
};
// 箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。
var age = 20;
Person.sayHello(); // 20
var Person1 = {
  'age': 18,
  'sayHello': function() {
    setTimeout(() => {
      console.log(age);
      console.log(this.age);
    });
  }
};
Person1.sayHello(); // 18
for (const item of ['zero', 'one', 'two']) {
  console.log('Array for...of:', item);
}
console.log('----------------------async&await---------------------');
function testAwait() {
  return new Promise((resolve) => {
    setTimeout(function() {
      console.log('testAwait');
      resolve();
    }, 1000);
  });
}

async function helloAsync() {
  await testAwait();
  console.log('helloAsync');
}
helloAsync();
