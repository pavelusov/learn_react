import {Component} from 'react';
import RandomMeUsers from '../RandomMeUsers';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                <RandomMeUsers count={10}/>
            </div>
        );
    }
}

export default App;
