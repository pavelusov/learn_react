import {combineReducers} from 'redux';
import issues from './issues';
import counter from './counter';
import repository from './repository';

export default combineReducers({
    issues, counter, repository
});
