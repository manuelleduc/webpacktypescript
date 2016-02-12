import * as express from "express"
import * as morgan from "morgan"
import * as path from "path"
import * as webpack from "webpack"
import * as config from "./webpack.config"
import * as webpackDevMiddleware from "webpack-dev-middleware"
import * as webpackHotMiddleware from "webpack-hot-middleware";

const staticDirectory = "public";

const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;


const compiler = webpack(config);
console.log(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, staticDirectory)));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "/index.html"));
})

app.listen(port, (error) => {
    if(error) {
        console.error(error);
    } else {
        console.info("Listening on port %s", port);
    }
});