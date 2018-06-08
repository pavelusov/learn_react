import {Component} from 'react';
import PropTypes from 'prop-types';

// ES6 Class component
export class AddColorFormState extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    static get propTypes() {
        return {
            onNewColor: PropTypes.func
        }
    }

    static get defaultProps() {
        return {
            onNewColor: () => console.log(new Error("Not property onNewColor"))
        };
    }

    submit(e) {
        e.preventDefault();
        const {_title, _color} = this.refs;
        if (this.props.onNewColor) {
            this.props.onNewColor(_title.value, _color.value);
        }
    }

    render() {
        return (
            <div>
                <h2>Component "Colors" with State</h2>
                <form onSubmit={this.submit}>
                    <input
                        ref="_title"
                        type="text"
                        placeholder="color title... "
                        required/>
                    <input
                        ref="_color"
                        type="color" required/>
                    <button>add</button>
                </form>
                <hr/>
            </div>
        );
    }
}

// Functional component
export const AddColorFormStateless = ({onNewColor}) => {
    let _title, _color;
    const submit = (e) => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
    };
    return (
        <div>
            <h2>Component "Colors" without State</h2>
            <form onSubmit={submit}>
                <input
                    ref={input => _title=input}
                    type="text"
                    placeholder="color title... "
                    required/>
                <input
                    ref={input => _color=input}
                    type="color" required/>
                <button>add</button>
            </form>
            <hr/>
        </div>
    );
};
AddColorFormStateless.defaultProps = {
    onNewColor() {console.log('defaultProps onNewColor')}
};
AddColorFormStateless.propTypes = {
    onNewColor: PropTypes.func
};
