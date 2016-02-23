import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import * as webpack from "webpack";
import * as config from "./webpack.config";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import * as mongoose from "mongoose";

const staticDirectory = "public";

const app = express();

const isDeveloping = process.env.NODE_ENV !== "production";
const port = isDeveloping ? 3000 : process.env.PORT;


const compiler = webpack(config);
mongoose.connect("localhost", "counter");

interface ICounter extends mongoose.Document {
    value: number;
}

const CounterModel: mongoose.Model<ICounter> = mongoose.model<ICounter>("Counter", new mongoose.Schema({
    value: Number
}));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, staticDirectory)));

app.get("/api/counter", (req, response) => {
    CounterModel.findOne({}, (err, res) => {
        // TODO : error handling
        if (res == null) {
            new CounterModel({
                value: 1
            }).save((err, res) => {
                response.json(res);
            });
        } else {
            response.json(res);
        }

    });
});

app.post("/api/counter/inc", (req, response) => {
    CounterModel.findOneAndUpdate({}, { "$inc": { value: 1 }}, {"new": true}, (err, res) => {
        if (err) {
            response.status(500).json(err);
        } else {
            response.json(res);
        }
    });
});

app.post("/api/counter/desc", (req, response) => {
    CounterModel.findOneAndUpdate({}, { "$inc": { value: -1 }}, {"new": true}, (err, res) => {
        if (err) {
            response.status(500).json(err);
        } else {
            response.json(res);
        }
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/index.html"));
});

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info("Listening on port %s", port);
    }
});