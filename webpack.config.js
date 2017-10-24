var path = require('path')

module.exports = {
    entry: './src/js/main.js',


    output: {
        filename: '[name].js',
        path: path.resolve('./dist'),
        publicPath: 'dist/'
    },


    module: {
        rules: [
            { 
                test: /\.css$/i,
                loaders: ['style-loader', 'css-loader']
            },
            { 
                test: /\.less$/i,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(svg|woff|ttf|eot|woff2)$/i,
                loaders: ['file-loader?name=fonts/[name].[ext]']
            }
        ]
    }
}

