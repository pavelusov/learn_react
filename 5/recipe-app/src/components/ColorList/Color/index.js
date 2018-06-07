import StarRating from "../../StarRaiting";
import './color.less';

const Color = ({title, color, rating = 0,
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
