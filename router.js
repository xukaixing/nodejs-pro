const express = require('express');
// 创建一个路由
const router = express.Router();
// 把路由都挂在到router路由容器中
// '/test'为router路径；可以设置为/，也可以设置为/路径
router.get('/router1', function(req, res) {
  res.send('router 1');
});
// 定义多个router
router.get('/router2', function(req, res) {
  res.send('router 2');
});

// 将router单独导出
module.exports = router;
