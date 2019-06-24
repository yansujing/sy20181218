

// __dirname:是nodejs中的一个全局变量，表示当前脚本所在的目录

module.exports = {
    // 开发模式：development/production
    mode: 'development',

    entry: __dirname + '/app/main.js', //打包的入口文件

    output: {
        path: __dirname + '/public',//打包后文件的存放位置
        filename: 'bundle.js'//打包后文件的名称
    },

    // webpack-dev-server
    devServer: {
        contentBase: __dirname + '/public',
        host: '192.168.1.173',
        port: '8080'
    }
};