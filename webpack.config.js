const path = require('path')
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const plugins = {
    extractCSS: require('mini-css-extract-plugin'),
    html: require('html-webpack-plugin'),
    clean: require('clean-webpack-plugin'),
  }
const outputDirPath = path.resolve(__dirname,'dist');
let config = {
    context: path.resolve(__dirname, 'src'),
    entry : {
        bundle : './js/app.js',
    },
    output : {
        path: outputDirPath,
        filename:'[name].[chunkhash].js',
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.((s[ac]|c)ss)$/,
                use: [
                    plugins.extractCSS.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: ()=>[
                              autoprefixer
                            ]
                        }
                    },
                    //{ loader: 'sass-loader', options: { sourceMap: true } },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test:/\.(pdf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'csv/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new plugins.extractCSS({
            filename: '[name].[chunkhash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new plugins.html({
            filename: 'index.html',
            template: 'index.html',
            title : 'Developer Nguyễn Thế Hùng',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        new plugins.clean(['dist']),
    ],
    watch : false

}

module.exports = config