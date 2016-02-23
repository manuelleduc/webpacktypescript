import * as mongoose from "mongoose";

module CounterService {

    interface ICounter extends mongoose.Document {
        value: number;
    }

    export const CounterModel: mongoose.Model<ICounter> = mongoose.model<ICounter>("Counter", new mongoose.Schema({
        value: Number
    }));

    export function incrementCounter(callback) {
        CounterModel.findOneAndUpdate({}, {"$inc": {value: 1}}, {"new": true}, callback);
    }

    export function decrementCounter(callback) {
        CounterModel.findOneAndUpdate({}, {"$inc": {value: -1}}, {"new": true}, callback);
    }

    function findOne(callback) {
        CounterModel.findOne({}, callback);
    }

    export function findOneOrCreate(callback) {
        findOne((err, res) => {
            if (err) {
                callback(err, res);
            } else {
                if (res == null) {
                    new CounterService.CounterModel({
                        value: 1
                    }).save((err, res) => {
                        callback(err, res);
                    });
                } else {
                    callback(err, res);
                }
            }

        });
    }
}

export = CounterService;