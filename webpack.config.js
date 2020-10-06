const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env = {}) => {
    const { mode = 'development' } = env;
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    const getStyleLoaders = () => [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
    ];

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'Secondnumber\'s portfolio',
                buildTime: new Date().toISOString(),
                template: 'public/index.html',
                favicon: 'public/favicon.ico',
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled',
                generateStatsFile: true,
                statsOptions: { source: false },
            }),
        ];
        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css',
                }),
            );
        }
        return plugins;
    };

    return {
        mode: isProd ? 'production' : isDev && 'development',
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        output: {
            filename: isProd ? 'main-[hash:8].js' : undefined,
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    use: getStyleLoaders(),
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images',
                                name: '[name]-[sha1:hash:8].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },

        plugins: getPlugins(),
    };
};