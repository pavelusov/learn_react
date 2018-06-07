import {Component} from 'react';
import PropTypes from 'prop-types';
import Star from "./Star";

export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.displayName = "StarRating";
        this.state = {
            starsSelected: 0
            // starsSelected: props.starsSelected || 0 // BAD!!!
        };
        this.change = this.change.bind(this);
    }
    static get propTypes() {
        return {
            totalStars: PropTypes.number
        };
    }
    static get defaultProps() {
        return {
            totalStars: 5
        };
    }
    change(starsSelected) {
        this.setState({starsSelected})
    }
    render() {
        const  {totalStars} = this.props;
        const  {starsSelected} = this.state;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star
                        key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i+1)}
                    />
                )}
                <br/>
                <p>{starsSelected} of {totalStars}</p>
            </div>
        );
    }
}
