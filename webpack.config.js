const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports ={
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app: './index.js',      
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        port: 3030,
        static:{
            directory: path.join(__dirname, 'src'),
        },
    
    },
    // optimization:{
    //     splitChunks:{
    //         chunks: 'all',
    //         cacheGroups:{
    //             vendor:{
    //               name: 'vendors',
    //               test: /node_modules/,  
    //               enforce: true
    //             }
    //         }
    //     }
    // },
    resolve: {
        extensions:['.js', '.less'],
        alias:{
            '@': path.resolve(__dirname, 'src'),
            vendors: path.resolve(__dirname, 'src/vendors'),
        }
    },
    plugins:[new HtmlWebpackPlugin(), new MiniCssExtractPlugin({
        filename: 'style/app.css',
    }),
    new CleanWebpackPlugin(),
    ], 
    module:{
        rules:[{
            test: /\.less$/,
            use: [               
            MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'
            ]
        }]
    },

    
}