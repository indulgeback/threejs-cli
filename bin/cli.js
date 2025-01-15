#!/usr/bin/env node
import fs from "fs-extra"
import path from "path"
import https from "https"
import inquirer from "inquirer"
import chalk from "chalk"
import AdmZip from "adm-zip"

// 支持的框架
const FRAMEWORKS = {
  VANILLA: "Vanilla (原生 Three.js)",
  TRESJS: "TresJS (Vue + Three.js)",
  REACT_THREE_FIBER: "React Three Fiber (React + Three.js)",
}

// 获取用户输入
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "请输入项目名称：",
      validate: (input) => {
        if (!input) return "项目名称不能为空！"
        if (fs.existsSync(input)) return "目录已存在，请换一个名称！"
        return true
      },
    },
    {
      type: "list",
      name: "framework",
      message: "请选择框架：",
      choices: Object.values(FRAMEWORKS),
    },
  ])
  return answers
}

// 下载模板函数
async function downloadTemplate(projectName, framework) {
  const targetDir = path.resolve(process.cwd(), projectName)
  fs.ensureDirSync(targetDir)

  // 定义模板仓库的下载 URL
  const templateUrls = {
    [FRAMEWORKS.VANILLA]:
      "https://github.com/indulgeback/threejs-vanilla-template/archive/refs/heads/main.zip",
    [FRAMEWORKS.TRESJS]:
      "https://github.com/indulgeback/threejs-tresjs-template/archive/refs/heads/main.zip",
    [FRAMEWORKS.REACT_THREE_FIBER]:
      "https://github.com/indulgeback/threejs-react-three-fiber-template/archive/refs/heads/main.zip",
  }

  const zipUrl = templateUrls[framework]
  if (!zipUrl) {
    throw new Error(`Unsupported framework: ${framework}`)
  }

  // 下载仓库的 ZIP 文件
  const zipPath = path.join(targetDir, "template.zip")
  console.log(chalk.blue(`Downloading template from ${zipUrl}...`))
  await downloadFile(zipUrl, zipPath)

  // 解压 ZIP 文件
  console.log(chalk.blue("Extracting template..."))
  const zip = new AdmZip(zipPath)
  zip.extractAllTo(targetDir, true)

  // 删除 ZIP 文件
  fs.unlinkSync(zipPath)

  // 将解压后的文件夹内容移动到目标目录
  const extractedDir = fs
    .readdirSync(targetDir)
    .find((dir) => dir.endsWith("-main"))
  if (extractedDir) {
    fs.copySync(path.join(targetDir, extractedDir), targetDir)
    fs.removeSync(path.join(targetDir, extractedDir))
  }

  return targetDir
}

// 下载文件函数
async function downloadFile(url, outputPath) {
  const file = fs.createWriteStream(outputPath)
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        response.pipe(file)
        file.on("finish", () => {
          file.close(resolve)
        })
      })
      .on("error", (err) => {
        fs.unlinkSync(outputPath)
        reject(err)
      })
  })
}

// 主函数
async function main() {
  try {
    const { projectName, framework } = await promptUser()
    const targetDir = await downloadTemplate(projectName, framework)

    console.log(chalk.green(`🚀 项目 "${projectName}" 创建成功！`))
    console.log(chalk.blue(`👉 运行以下命令开始开发：`))
    console.log(`cd ${projectName}`)
    console.log("npm install")
    console.log("npm run dev")
  } catch (error) {
    console.error(chalk.red("❌ 出错了：", error.message))
  }
}

main()
