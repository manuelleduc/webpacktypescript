import {Component} from "react";
import * as React from "react";
import {IState} from "../store";

interface ISomeComponentProps {
    state: IState;
    onIncrement(): any;
    onDecrement(): any;
    incrementIfOdd(): any;
    incrementAsync(): any;
}

class Counter extends Component<ISomeComponentProps, {}> {
    render() {
        return (
            <p>
                Clicked: {this.props.state.counter} times
                <button disabled={!this.props.state.state.isLoaded} onClick={this.props.onIncrement}>+</button>
                <button disabled={!this.props.state.state.isLoaded} onClick={this.props.onDecrement}>-</button>
                <button disabled={!this.props.state.state.isLoaded} onClick={this.props.incrementIfOdd}>Increment if odd</button>
                <button disabled={!this.props.state.state.isLoaded} onClick={this.props.incrementAsync}>Increment async</button>
            </p>
        );
    }
}

module Counter {}

export = Counter