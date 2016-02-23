import {mainReducer} from "../reducers";
import {createStore, applyMiddleware} from "redux";
import * as createLogger from "redux-logger";
import * as thunk from "redux-thunk";

module Store {
    const loggerMiddleware = (createLogger as any)();

    export function configureStore (initialState?) {
        interface Mcb {
            (): any;
        }
        const middle = <Mcb>applyMiddleware(loggerMiddleware, thunk);
        return createStore(mainReducer, initialState, middle);
    }
}

export = Store;