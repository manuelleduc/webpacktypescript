import * as express from "express";
import * as CounterService from "../service/CounterService";

module ApiRouter {
    import incrementCounter = CounterService.incrementCounter;
    import decrementCounter = CounterService.decrementCounter;
    import findOneOrCreate = CounterService.findOneOrCreate;
    export const apiRouter = express.Router();

    apiRouter.get("/counter", (req, response) => {

        const callback = (err, res) => {
            if (err) {
                response.status(500).json(err);
            } else {
                response.json(res);
            }
        };

        findOneOrCreate(callback);
    });

    apiRouter.post("/counter/inc", (req, response) => {
        incrementCounter((err, res) => {
            if (err) {
                response.status(500).json(err);
            } else {
                response.json(res);
            }
        });
    });

    apiRouter.post("/counter/dec", (req, response) => {
        decrementCounter((err, res) => {
            if (err) {
                response.status(500).json(err);
            } else {
                response.json(res);
            }
        });
    });
}

export = ApiRouter;