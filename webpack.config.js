const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports ={
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',     
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 3030,
        static:{
            directory: path.join(__dirname, 'src'),
        },
        
    },
    module:{
        rules:[{
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ] 
    
}