import {Component} from 'react';
import HiddenMessages from '../HiddenMessages';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <HiddenMessages/>
            </div>
        );
    }
}

export default App;
