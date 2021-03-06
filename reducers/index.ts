import {INCREMENT, DECREMENT, SET_VALUE, LOADED} from "../action";
import {combineReducers} from "redux";
import {IStateState} from "../store";

const objectAssign = require("object-assign");

module Reducers {
    function counter(counter: number = 0, action: {type: string, value?: number}):number {
        switch (action.type) {
            case INCREMENT:
                return counter + 1;
            case DECREMENT:
                return counter - 1;
            case SET_VALUE:
                return action.value;
            default:
                return counter;
        }
    }

    function state(state: IStateState = {isLoaded: false}, action: {type: string}):IStateState {
        switch (action.type) {
            case LOADED:
                const ret = objectAssign({}, state, {isLoaded: true});
                console.log(ret);
                return ret;
            default:
                return state;
        }
    }

    export const mainReducer = combineReducers({
        counter,
        state
    });
}

export = Reducers