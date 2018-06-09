import PropTypes from 'prop-types';

const PeopleList = ({data=[]}) => {
    return (
        <ol>
            {data.map((people, i) => {
                const {first, last} = people.name;
                return (
                    <li key={i}>{first} {last}</li>
                );
            })}
        </ol>
    );
};

PeopleList.propTypes = {
  data: PropTypes.array
};

export default PeopleList;
