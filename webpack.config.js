const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {resolve}=require('path');
var webpack = require('webpack');
var path = require("path");
//var bootstrapEnryPoints = require('./webpack.bootstrap.config');

const srcDir = resolve(__dirname,'src');
const distDir = resolve(__dirname,'dist')


module.exports={
    entry:`${srcDir}/app.js`,
    output:{
        path: `${distDir}`,
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.scss$/, 
              use: ['style-loader', 'css-loader', 'sass-loader']  
             /*
              use: ExtractTextPlugin.extract({
                fallback: "style-loader", 
                use: ["css-loader", "sass-loader"]
              })*/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader' //translates JSX to javascript
            },
            {
                test: /\.(jpe?g|png|ico|gif|svg)$/i, //checks for all image types
                use: [
                    //creates a production version of the file path
                    'file-loader?name=[name].[ext]',
                    //'file-loader?name=[name].[ext]&outputPath=images/',
                    'image-webpack-loader'
                ] 
                
            }
            
      ]  
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        stats: "errors-only", //condenses cmd line output on npm run 
        open: true, //opens a new window on npm run
        openPage: '' //fixes a glitch with devServer open
    },
    plugins:[
       new HtmlWebpackPlugin({
           title: 'BMW M2',
           minify: {
               collapseWhitespace: true
           },
           hash: true, 
           template: './src/index.html',
       }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: true,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        //enable Hot Module Replacement globally        
        new webpack.NamedModulesPlugin()
        //prints more readable module names in the browser console
        
    ],
}