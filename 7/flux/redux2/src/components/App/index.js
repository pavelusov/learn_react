import {Component} from 'react';
import Store from '../State';
import {addBook, removeBook} from '../Reducers/actions';

Store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(Store.getState());
});

Store.dispatch(addBook('php+msql', 300));
Store.dispatch(addBook('js+nodejs', 500));
Store.dispatch(addBook('express+nodejs', 500));

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                Books Application
                <div>
                    <input type="text" name='name'/>
                    <input type="text" name='price'/>
                    <button id='"addBook'>add</button>
                </div>
            </div>
        );
    }
}

export default App;
