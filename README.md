# Three.js CLI Scaffold Tool

[中文](./README_zh.md)

`threejs-cli` is a command-line tool designed to help developers quickly scaffold Three.js projects with support for multiple frameworks, including **Vanilla Three.js**, **TresJS** (Vue + Three.js), and **React Three Fiber** (React + Three.js). Whether you're a beginner or an experienced developer, this tool allows you to focus on creativity and development without spending time on tedious project setup.

## Features

- **Supports multiple frameworks**:
  - **Vanilla Three.js**
  - **TresJS** (Vue + Three.js)
  - **React Three Fiber** (React + Three.js)
- **One-command project generation**.
- **Automatically installs dependencies**.
- **Modern development experience based on Vite**.
- **Cross-platform support** (Windows, macOS, Linux).

## Installation

Install `threejs-cli` globally:

```bash
npm install -g threejs-cli
```

## Usage

Run the CLI tool:

```bash
threejs-cli my-project
Select a framework:
```

```bash
? Select a framework: (Use arrow keys)
❯ Vanilla (原生 Three.js)
TresJS (Vue + Three.js)
React Three Fiber (React + Three.js)
```

Navigate to the project directory and start the development server:

```bash
cd my-project
npm install
npm run dev
```

## Example

### Create a TresJS-based project

```bash
threejs-cli my-tresjs-project
```

### Navigate to the project directory and start the development server

```bash
cd my-tresjs-project
npm install
npm run dev
```

## Contributing

We welcome contributions! Please submit issues or pull requests to improve threejs-cli.

## License

threejs-cli is open-source under the MIT License.
