import * as express from "express"
import * as morgan from "morgan"
import * as path from "path"
import * as webpack from "webpack"
import * as config from "./webpack.config"
import * as webpackMiddleware from "webpack-dev-middleware"
import * as webpackHotMiddleware from "webpack-hot-middleware";

const staticDirectory = "public";

const app = express();
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;


app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "..", staticDirectory)));


app.listen(port, (error) => {
    if(error) {
        console.error(error);
    } else {
        console.info("Listening on port %s", port);
    }
});