
module.exports = {
    mode: "development",
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public',
        host: '192.168.1.173',
        port: '8080'
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};