// import thunk from "redux-thunk";
import * as ReactDOM from "react-dom";
import * as React from "react";
import * as Counter from "./components/Counter";
import {increment, decrement, incrementIfOdd} from "./action";
import {configureStore} from "./store";

const store = configureStore(42);
const rootEl = document.getElementById("root");

function render() {
    ReactDOM.render(
        <Counter value = {store.getState()}
                 onIncrement = {
                    () => { store.dispatch(increment()); }
                 }
                 onDecrement = {
                    () => { store.dispatch(decrement()); }
                 }
                 incrementIfOdd = {
                    () => {
                        console.log("HERE IT IS!");
                        store.dispatch(incrementIfOdd());
                    }
                 }
        />,
        rootEl
    );
}

render();
store.subscribe(render);
