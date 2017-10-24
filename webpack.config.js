module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './src/js/saida.js'
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
                loaders: ['file-loader?name=src/fonts//[name].[ext]']
            }
        ]
    }
}

