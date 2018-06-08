import Color from './Color';
import PropTypes from 'prop-types';

const ColorList = ({colors = [], onRemove = f => f, onRate = f => f}) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. Add a Color</p> :
            colors.map(color =>
                <Color
                    key={color.id}
                    {...color}
                    onRemove={() => onRemove(color.id)}
                    onRate={(rating) => onRate(color.id, rating)}
                />
            )
        }
    </div>;

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
};

export default ColorList;
