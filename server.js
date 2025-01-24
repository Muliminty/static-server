const express = require('express');
const path = require('path');
const fs = require('fs');

// 读取配置文件
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// 启动所有服务器
config.servers.forEach(serverConfig => {
  const app = express();
  const port = serverConfig.port;
  const directory = serverConfig.directory;

  // 设置静态文件目录
  app.use(express.static(path.join(__dirname, directory)));

  // 启动服务器
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Serving files from ${directory}`);
  });
});