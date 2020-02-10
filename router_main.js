var express = require('express');
var router = require('./router');
var app = express();
app.use(router); // 把路由器挂载到app服务器对象中
app.listen(8888, function() {
  console.log('Server starting running at port 8888');
});
