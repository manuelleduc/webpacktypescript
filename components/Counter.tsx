import {Component} from "react";
import * as React from "react";

interface ISomeComponentProps {
    value: number;
    onIncrement(): any;
    onDecrement(): any;

}

class Counter extends Component<ISomeComponentProps, {}> {
    constructor(props) {
        super(props);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render() {
        return (
            <p>
                Clicked: {this.props.value} times

                <button onClick={this.props.onIncrement}>+</button>

                <button onClick={this.props.onDecrement}>-</button>

                <button onClick={e => this.incrementIfOdd() }>Increment if odd</button>

                <button onClick={e => this.incrementAsync() }>Increment async</button>
            </p>
        );
    }
}

module Counter {}

export = Counter