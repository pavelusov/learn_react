import {Component} from 'react';
import Outer from "../OuterComponent";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <h1>Outer component</h1>
                <Outer/>

            </div>
        );
    }
}

export default App;
