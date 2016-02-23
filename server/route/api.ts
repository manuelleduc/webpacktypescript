import * as express from "express";
import * as mongoose from "mongoose";

module ApiRouter {
    export const apiRouter = express.Router();

    interface ICounter extends mongoose.Document {
        value: number;
    }

    const CounterModel: mongoose.Model<ICounter> = mongoose.model<ICounter>("Counter", new mongoose.Schema({
        value: Number
    }));

    apiRouter.get("/counter", (req, response) => {
        CounterModel.findOne({}, (err, res) => {
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

    apiRouter.post("/counter/inc", (req, response) => {
        CounterModel.findOneAndUpdate({}, {"$inc": {value: 1}}, {"new": true}, (err, res) => {
            if (err) {
                response.status(500).json(err);
            } else {
                response.json(res);
            }
        });
    });

    apiRouter.post("/counter/desc", (req, response) => {
        CounterModel.findOneAndUpdate({}, {"$inc": {value: -1}}, {"new": true}, (err, res) => {
            if (err) {
                response.status(500).json(err);
            } else {
                response.json(res);
            }
        });
    });
}

export = ApiRouter;