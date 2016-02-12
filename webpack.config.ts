import * as webpack from "webpack";
import * as path from "path"
import { optimize}  from "webpack"

const config: webpack.Configuration = {
    devtool: "cheap-module-eval-source-map",
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, "..", "app.ts")
    ],
    output: {
        filename: "bundle.js",
        publicPath: "/",
        path: path.join(__dirname, 'public'),
    },
    resolve: {
        alias: {},
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', ".json", ".css"]
    },
    plugins: [
        new optimize.OccurenceOrderPlugin(true),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.json?$/,loader: 'json'},
            {test: /\.ts$/, loader: "ts", exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'}
        ]
    }
};
module config { }

export = config