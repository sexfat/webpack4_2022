const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');  //清除舊檔案

const HtmlWebpackPlugin = require('html-webpack-plugin');  // html 
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');



module.exports = {
    entry: {
        index: './src/index.js', // js 開發檔案
        about: './src/about.js',
        contact: './src/content.js'
    },               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'  // js輸出
    },              // 出口文件
    module: {
        rules: [{
            // 可以編譯檔案格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './dist'
                }
            },
                // 'style-loader',//跟MiniCssExtractPlugin 會衝突所以要關掉
                'css-loader',
                'sass-loader'
            ],
        },
        //babel loader es6 -> es5工具 
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,

            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
            include: path.resolve(__dirname, 'src'),
        },

        ]

    },// 處裡對應模組
    plugins: [
        //清理舊的檔案
        new CleanWebpackPlugin(),

        // css 輸出
        new MiniCssExtractPlugin({
            filename: "./css/[name].css"  // css檔案輸出
        }),

        //html 編譯
        new HtmlWebpackPlugin({
            chunks: ['index'],  //選擇注入資源 chunk，會對應到 entry 裡的 chunkname
            inject: 'body', //預設 script 位置 在</body>， 如果選擇 head <script>標籤會在head 
            template: './src/index.html', //來源
            filename: 'index.html', //產出位置
            minify: false, // 是否壓縮html
            title: '首頁新'  // 放入 title位址 
        }),
        new HtmlWebpackPlugin({
            chunks: ['about'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './src/about.html', //來源
            filename: 'about.html', //目的地
            minify: false, // 壓縮html
            title: '關於我們頁面'  // 放入 title 
        }),
        new HtmlWebpackPlugin({
            chunks: ['about'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './src/contact.html', //來源
            filename: 'contact.html', //目的地
            minify: false, // 壓縮html
            title: '聯絡我們'  // 放入 title 
        }),

        //全域加載jq，如果有需要全域使用jquery 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],// 
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }, // 解決vue編譯環境問題
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },// 服務器配置
    mode: 'development'      // 開發模式配置 development   // 上線 production
}