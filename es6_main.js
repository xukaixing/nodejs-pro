/*
 * @Description:
 * @Author: andy.ten@tom.com
 * @Date: 2020-02-12 17:12:28
 * @LastEditors  : andy.ten@tom.com
 * @LastEditTime : 2020-02-15 21:46:02
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
const age = 27;
const info = `My Name is ${name},I am ${age + 1} years old next year.`;
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
