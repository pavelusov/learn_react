import React from 'react';
import {render , unmountComponentAtNode} from 'react-dom';
import {getClockTime} from './libs/lib';
import {Component} from 'react';

const target = document.getElementById('react-container');

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = getClockTime();
    }
    componentDidMount() {
        console.log(" Starting Clock");
        this.ticking = setInterval(() =>
            this.setState(getClockTime())
            , 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.ticking);
        console.log("Stopping clock");
    }
    render() {
        const {hours, minutes, seconds} = this.state;
        return (
            <div className="clock">
                <span>{hours} : </span>
                <span>{minutes} : </span>
                <span>{seconds}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        );
    }

}

window.React = React;

render(
    <Clock onClose={() => unmountComponentAtNode(target)}/>,
    target
);
