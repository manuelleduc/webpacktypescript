import * as webpack from "webpack";
import * as path from "path"

const config: webpack.Configuration = {
    devtool: "source-map", // eval-source-map ?
    entry: [
        path.join(__dirname, "..", "app.ts")
    ],
    output: {
        filename: "public/bundle.js",
        publicPath: "/",
    },
    resolve: {
        alias: {},
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {test: /\.ts$/, loader: "ts"},
            {test: /\.json?$/,loader: 'json'},
            {test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'}
        ]
    }
};
module config { }


export = config