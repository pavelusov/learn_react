import {Component} from 'react';
import {AddColorFormStateless} from '../AddColorForm';
import {v4} from 'uuid';
import ColorList from '../ColorList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);

    }
    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id === id)?
                { ...color, rating }:
                color
        );
        this.setState({colors});
    }
    removeColor(id) {
        const colors = this.state.colors
            .filter(color => color.id !== id);

        this.setState({colors});
    }
    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({colors});
    }

    render() {
        const {addColor, rateColor, removeColor} = this;
        const {colors} = this.state;

        return (
            <div className="app">
                <AddColorFormStateless onNewColor={addColor}/>
                <ColorList
                    colors={colors}
                    onRate={rateColor}
                    onRemove={removeColor}
                />
            </div>
        );
    }
}

export default App;
