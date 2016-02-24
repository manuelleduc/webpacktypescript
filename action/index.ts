module Actions {
    export const INCREMENT  = "INCREMENT";
    export const DECREMENT = "DECREMENT";
    export const SET_VALUE = "SET_VALUE";
    export const LOADED = "LOADED";
    export const LOCKED = "LOCKED";

    export function increment () {
        return (dispatch) => {
            dispatch(lockActions());
            fetch("/api/counter/inc", {method: "post"}).then((res) => {
                return res.json();
            }).then((res) => {
               dispatch(setValue(res.value));
            });
        };
    }

    function lockActions () {
        return {
            type: LOCKED
        };
    }

    export function decrement () {
        return (dispatch) => {
            dispatch(lockActions());
            fetch("/api/counter/dec", {method: "post"}).then((res) => {
                return res.json();
            }).then((res) => {
                dispatch(setValue(res.value));
            });
        };
    }

    export function incrementIfOdd () {
        return (dispatch, getState) => {
            const cptr = getState().counter;
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