import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as webpack from "webpack";
import * as config from "./webpack.config";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import * as mongoose from "mongoose";
import {apiRouter} from "./server/route/api";

/* CONFIGURATION */
const staticDirectory = "public";
const isDeveloping = process.env.NODE_ENV !== "production";
const port = isDeveloping ? 3000 : process.env.PORT;
const compiler = webpack(config);

const app = express();
/* MIDDLEWARES */
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, staticDirectory)));

/* MAIN ROUTE*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/index.html"));
});

/* ROUTERS */
app.use("/api", apiRouter);

/* STARTUP  */
mongoose.connect("localhost", "counter");
app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("Listening on port %s", port);
    }
});

