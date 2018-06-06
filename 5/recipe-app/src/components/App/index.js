import {Component} from 'react';
import data from '../../../data';
import Menu from '../Menu';
import {AddColorFormState, AddColorFormStateless} from '../AddColorForm';
import StarRating from '../StarRaiting';

class App extends Component {
    render() {
        const logColor = (title, color) =>
            console.log(`${title} : ${color}`);
        return (
            <div className="app-root">
                <StarRating/>
                <AddColorFormStateless onNewColor={logColor}/>
                <AddColorFormState onNewColor={logColor}/>
                <Menu recipes={data} title="My Recipes"/>
            </div>
        );
    }
}

export default App;
