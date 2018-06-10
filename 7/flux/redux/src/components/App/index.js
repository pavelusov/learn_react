import {Component} from 'react';

import Store from '../State';

Store.subscribe(() => console.log('store', Store.getState()));

Store.dispatch({type: "INCREASE_COUNTER"});
Store.dispatch({type: "LOAD_ISSUES", payload: [{name: "pavel"},{name: "pavel"}]});
Store.dispatch({type: "INCREASE_COUNTER"});
Store.dispatch({type: "LOAD_ISSUES", payload: [{name: "pavel"},{name: "pavel"}]});
Store.dispatch({type: "SET_REPOSITORY", payload: 'github.com/myrepo'});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                New Application
            </div>
        );
    }
}

export default App;
