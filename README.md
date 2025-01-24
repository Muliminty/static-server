# Static Server

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

一个基于Node.js和Express的静态文件服务器，支持多端口配置和集中管理静态文件。

## 功能特性

- 🚀 支持多端口同时运行
- 📂 集中管理静态文件目录
- ⚙️ 通过配置文件灵活配置
- 🔌 基于Express，轻量高效

## 安装

```bash
npm install
```

## 使用

1. 将静态文件放入`dist`目录下的子目录中
2. 编辑`config.json`配置文件：

```json
{
  "servers": [
    {
      "port": 3000,
      "directory": "dist/my-project"
    },
    {
      "port": 3001,
      "directory": "dist/another-project"
    }
  ]
}
```

3. 启动服务器：

```bash
npm start
```

## 配置说明

- `port`: 服务器监听端口
- `directory`: 静态文件目录路径（相对于项目根目录）

## 贡献

欢迎提交Issue和PR！

## 许可证

MIT License