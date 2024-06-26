const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname,
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
                use: [
                    'style-loader', 
                    'css-loader',
                    {
                        loader: 'postcss-loader', // Add this loader
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
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
        static: './docs',
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/server/*': {
                target: 'http://localhost:3000',

            }


        }

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            clean: true,

        }),
    ],
};