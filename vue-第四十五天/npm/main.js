

// npm：包管理器，也叫 代码模块管理器，世界上最大的代码模块管理器，大约有 600000个包
// 作用：不用手动去查找项目需要的模块，可以直接使用 npm 安装 需要的模块

// npm是一个命令行工具，npm被集成在node中，所以安装了node也就安装了 npm
// 通过 运行 npm -v 来 验证 npm 是否已经安装

// 使用场景：
// 1.可以从 npm服务器下载 第三方包（代码模块）
// 2.可以从 npm服务器下载 第三方命令行工具
// 3.允许开发者将自己编写的包上传到npm服务器

// 安装模块
// npm install 包名
// 全局安装 npm install 包名 -g
// 本地安装 npm install 包名 
// 开发依赖 npm install 包名 --save-dev
// 依赖 npm install 包名 --save


// package.json
// {
//     "name": 项目名称
//     "version": 项目版本号
//     "author": 姓名
//     "desciiption": 项目的描述信息
//     "keywords": 关键字
//     "devDependencies": 开发依赖
//     "dependencies": 依赖
//     "scripts": 项目可以执行的 命令(npm 命令名称)和脚本(npm run 脚本名称)
// }

// npm install:一次性安装项目依赖的 所有模块，根据项目目录下的 package.json文件
// 通过 npm init 命令 初始化 package.json文件

// node_modules:存储项目安装的所有依赖模块

// 卸载模块
// npm uninstall 包名

// 使用 淘宝镜像
// npm install -g cnpm --registry=https://registry.npm.taobao.org



// npm安装报错时
// 1.执行 npm cache verify
// 2.执行 npm cache clean
// 3.可能需要执行 npm cache clean -—force
// 然后重新进行安装需要的包即可
