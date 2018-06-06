import {Component} from 'react';
import PropTypes from 'prop-types';

class Summary extends Component {
    constructor(props) {
        super(props);

    }
    static get propTypes() {
        return {
            ingredients: PropTypes.number,
            steps: PropTypes.number.isRequired,
            title: (props, propsName) =>
                (typeof props[propsName] !== 'string') ?
                    new Error("Title must be a string") :
                    (props[propsName].length > 20) ?
                        new Error("Title is over 20 characters"):
                        null
        };
    }
    static get defaultProps() {
        return {
            title: "My summary",
            ingredients: 0,
            steps: 0
        }
    }
    render() {
        const {title, ingredients, steps} = this.props;
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients </span> |
                    <span> {steps} Steps</span>
                </p>
            </div>
        )
    }
}

export default Summary;
