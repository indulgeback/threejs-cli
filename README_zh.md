# Three.js 脚手架工具

[English](./README.md)

`threejs-cli` 是一个命令行工具，旨在帮助开发者快速创建基于 **Three.js** 的项目，支持多种框架，包括 **原生 Three.js**、**TresJS**（Vue + Three.js）和 **React Three Fiber**（React + Three.js）。无论你是初学者还是经验丰富的开发者，都可以通过这个工具快速启动 3D 项目，专注于创意和开发，而不必花费时间在繁琐的项目配置上。

## 特点

- **支持多种框架**：
  - **原生 Three.js**
  - **TresJS**（Vue + Three.js）
  - **React Three Fiber**（React + Three.js）
- **一键生成项目**。
- **自动安装依赖**。
- **基于 Vite 的现代化开发体验**。
- **跨平台支持**（Windows、macOS、Linux）。

## 安装方式

全局安装 `threejs-cli`：

```bash
npm install -g threejs-cli
```

## 使用方式

运行脚手架工具：

```bash
create-threejs
```

选择一个项目名称：

```bash
? 请输入项目名称: my-project
```

选择框架：

```bash
? 请选择框架： (使用方向键)
❯ Vanilla (原生 Three.js)
TresJS (Vue + Three.js)
React Three Fiber (React + Three.js)
```

进入项目目录并启动开发服务器：

```bash
cd my-project
npm install
npm run dev
```

## 示例

### 创建一个基于 TresJS 的项目

```bash
create-threejs
```

### 选择一个项目名称

```bash
? 请输入项目名称: my-tresjs-project
```

### 选择一个框架

```bash
? 请选择框架： (使用方向键)
❯ TresJS (Vue + Three.js)
Vanilla (原生 Three.js)
React Three Fiber (React + Three.js)
```

### 进入项目目录并启动开发服务器

```bash
cd my-tresjs-project
npm install
npm run dev
```

## 贡献

欢迎提交 Issue 或 Pull Request 来改进 threejs-cli！

## 许可证

threejs-cli 基于 MIT 许可证开源。
