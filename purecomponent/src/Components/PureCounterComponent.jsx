/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        };
    }

    componentDidMount() {
        // console.log('Pure Component');
    }

    incrementValue = () => {
        if (this.state.toggle) {
            this.setState({ count: this.state.count + 1 }, () => {
                console.log('Pure Component');
            });
        }
    };

    setToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        return (
            <div>
                <div>
                    <h2>Pure Components</h2>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.setToggle}>
                        Toggle
                    </button>
                    <button onClick={this.incrementValue}>
                        Counter
                    </button>
                </div>
            </div>
        );
    }
}
