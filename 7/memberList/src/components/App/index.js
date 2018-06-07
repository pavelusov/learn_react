import {Component} from 'react';
import MemberList from "../MemberList";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <MemberList count={10}/>
            </div>
        );
    }
}

export default App;
