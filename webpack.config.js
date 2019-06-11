const path = require('path');
const ExtarctTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production'; //true
    const CSSExtract = new ExtarctTextPlugin('styles.css');

    console.log('env', env);
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.s?css$/, //s->optional
                    use: CSSExtract.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                            loader: 'css-loader',
                            options: {
                                    sourceMap: true
                                }
                            },
                            {
                            loader: 'sass-loader',
                            options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};