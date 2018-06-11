import {createStore} from 'redux';
import {reducers} from '../Reducers/';

const Store = createStore(reducers,
    (localStorage["redux-store"]) ?
        JSON.parse(localStorage["redux-store"]) :
        {books: []}
);

export default Store;
