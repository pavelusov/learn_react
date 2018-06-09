import DataComponent from '../DataComponent';
import PeopleList from '../PeopleList';

const URL = 'https://randomuser.me/api/?results=';
const RandomMeUsers = DataComponent(PeopleList, URL);

export default RandomMeUsers;
