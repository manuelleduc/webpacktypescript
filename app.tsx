import * as ReactDOM from "react-dom";
import * as React from "react";
import * as Counter from "./components/Counter";
import {increment, decrement, incrementIfOdd, incrementAsync, setValue} from "./action";
import {configureStore} from "./store";
import fetch from "isomorphic-fetch";
import * as e6p from "es6-promise";

(e6p as any).polyfill();

const store = configureStore({
    state: {
        isLoaded: false
    },
    counter: 0
});
const rootEl = document.getElementById("root");

function render() {
    ReactDOM.render(
        <Counter state = {store.getState()}
                 onIncrement = {
                    () => { store.dispatch(increment()); }
                 }
                 onDecrement = {
                    () => { store.dispatch(decrement()); }
                 }
                 incrementIfOdd = {
                    () => { store.dispatch(incrementIfOdd()); }
                 }
                 incrementAsync = {
                    () => { store.dispatch(incrementAsync()); }
                 }
        />,
        rootEl
    );
}

render();
store.subscribe(render);
fetch("/api/counter").then((res) => {
    return res.json();
}).then((res) => {
    store.dispatch(setValue(res.value));
});