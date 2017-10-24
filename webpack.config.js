module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './src/js/saida.js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            { 
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}