import {Component, cre} from 'react';
import PropTypes from 'prop-types';
import StarRating from "../../StarRaiting";
import './color.less';

class Color extends Component {
    static get propTypes() {
        return {
            title: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            rating: PropTypes.number,
            onRemove: PropTypes.func,
            onRate: PropTypes.func
        };
    }
    static get defaultProps() {
        return {
            rating: 0,
            onRemove: f => f,
            onRate: f => f
        };
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.defaultStyle = {backgroundColor: "#CCC"}; // 1 step
    }
    shouldComponentUpdate(nextProps) { // Нужно обновить компонент?
        // this.props.rating old value
        // nextProps.rating new value
        // see the difference
        return this.props.rating !== nextProps.rating;
    }
    componentWillUpdate(nextProps) { // Если - да, то обновим компонент
        console.log('componentWillUpdate');
        const {title} = this.refs;
        title.style.color = "#0F0";
        this.defaultStyle = {backgroundColor: "#f00"};
        /**
            Заново отображаемые компоненты не подвергаются переустановке (componentWillMount); 
            Если они уже присутствуют, то вместо этого происходит обновление. (componentWillUpdate).
            При обновлении компонента обновляются и все его дочерние компоненты.
        */
    }
    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
        if (prevProps.rating > this.props.rating) {
            console.log('The rating set down')
        } else {
            console.log('The rating set up')
        }
    }
    render() { //2 step
        const {title, color, rating, onRemove, onRate} = this.props;
        // console.log(this.refs)
        return (
            <section className="color" style={this.defaultStyle}>
                <h1 ref="title" >{title}</h1>
                <button className="btn" onClick={onRemove}>X</button>
                <div className="color-block"
                     style={{backgroundColor: color}}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        );
    }
}

const ColorFoo = ({title, color, rating = 0,
                   onRemove = f => f, onRate = f => f}) =>
    <section className="color">
        <h1>{title}</h1>
        <button className="btn" onClick={onRemove}>X</button>
        <div className="color-block"
             style={{backgroundColor: color}}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>;

export default Color;
