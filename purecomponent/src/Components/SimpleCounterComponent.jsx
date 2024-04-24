/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        };
    }

    incrementValue = () => {
        if (this.state.toggle) {
            this.setState({ count: this.state.count + 1 }, () => {
                console.log('Simple Component');
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
                    <h2>Simple Components</h2>
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
