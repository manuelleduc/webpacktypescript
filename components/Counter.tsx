import {Component} from "react";
import * as React from "react";

interface ISomeComponentProps {
    value: number;
    onIncrement(): any;
    onDecrement(): any;
    incrementIfOdd(): any;
    incrementAsync(): any;
}

class Counter extends Component<ISomeComponentProps, {}> {
    render() {
        return (
            <p>
                Clicked: {this.props.value} times
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.props.incrementAsync}>Increment async</button>
            </p>
        );
    }
}

module Counter {}

export = Counter