import PropTypes from 'prop-types';
import './star.less';

const Star = ({selected, onClick}) =>
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}></div>;
Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
};
Star.defaultProps = {
    selected: false,
    onClick: () => {
        console.log('Star default property onClick')
    }
};

export default Star;
