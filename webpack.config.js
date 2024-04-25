// Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isProduction = process.env.NODE_ENV == 'production';


// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



// const config = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//     },
//     devServer: {
//         open: true,
//         host: 'localhost',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'index.html',
//         }),

//         // Add your plugins here
//         // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/i,
//                 loader: 'babel-loader',
//             },
//             {
//                 test: /\.css$/i,
//                 use: [stylesHandler,'css-loader'],
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [stylesHandler, 'css-loader', 'sass-loader'],
//             },
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//                 type: 'asset',
//             },

//             // Add your rules for custom modules here
//             // Learn more about loaders from https://webpack.js.org/loaders/
//         ],
//     },
// };

// module.exports = () => {
//     if (isProduction) {
//         config.mode = 'production';
        
//         config.plugins.push(new MiniCssExtractPlugin());
        
        
//     } else {
//         config.mode = 'development';
//     }
//     return config;
// };



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react', { targets: 'defaults' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    devServer: {
        static: './dist',
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/': {
                target: 'http://localhost:3000',
            }
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            clean: true,

        }),
    ],
};