module Actions {
    export const INCREMENT  = "INCREMENT";
    export const DECREMENT = "DECREMENT";
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
}

export = Actions;