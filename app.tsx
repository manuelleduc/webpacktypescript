import {createStore} from "redux";
import * as ReactDOM from "react-dom";
import * as React from "react";
import * as Counter from "./components/Counter";
import {counter} from "./reducers";

const store = createStore(counter);
const rootEl = document.getElementById("root");

function render() {
    ReactDOM.render(
        <Counter value = {store.getState()}
                 onIncrement = {
                    () => { store.dispatch({ type: "INCREMENT" }); }
                 }
                 onDecrement = {
                    () => { store.dispatch({ type: "DECREMENT" }); }
                } />,
        rootEl
    );
}

render();
store.subscribe(render);
