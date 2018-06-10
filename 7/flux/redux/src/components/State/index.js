import {createStore } from 'redux';
import reducers from '../Reducers/';

const Store = createStore(reducers, {
    counter: 0,
    issues: [],
    repository: ''
});
export default Store;
