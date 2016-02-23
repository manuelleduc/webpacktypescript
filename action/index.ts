module Actions {
    export const INCREMENT  = "INCREMENT";
    export const DECREMENT = "DECREMENT";
    export const SET_VALUE = "SET_VALUE";
    export const LOADED = "LOADED";

    export function increment () {
        return {
            type: INCREMENT
        };
    }

    export function decrement () {
        return {
            type: DECREMENT
        };
    }

    export function incrementIfOdd () {
        return (dispatch, getState) => {
            const cptr = getState();
            if (cptr % 2 !== 0) {
                dispatch(increment());
            }
        };
    }

    export function incrementAsync () {
        return (dispatch) => {
            setTimeout(() => { dispatch(increment()); }, 1000);
        };
    }

    export function setValue(value) {
        return (dispatch) => {
            dispatch({
                type: SET_VALUE,
                    value
            });
            dispatch({
                type: LOADED
            });
        };
    }
}

export = Actions;