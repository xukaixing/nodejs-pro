// __filename:输出当前文件所在位置的绝对路径；
console.log(__filename);
// __dirname 表示当前执行脚本所在位置的绝对目录
console.log(__dirname);
function printHello() {
  console.log('循环...');
}
// 两秒后执行以上函数,只执行一次
var t = setTimeout(printHello, 2000);
// 清除定时器
clearTimeout(t);
// 两秒后执行以上函数，循环执行
setInterval(printHello, 2000);
