import {combineReducers} from 'redux';
import C from './constants';
import id4 from 'uuid';

const book = (state={}, action) => {
    switch (action.type) {
        case C.ADD_BOOK:
            return {
                id: id4(),
                title: action.title,
                price: action.price,
                timestamp: new Date().toString()
            };
        default:
            return state;
    }
};

const books = (state=[], action) => {
    switch (action.type) {
        case C.ADD_BOOK:
            return [
                ...state,
                book(state, action)
            ];
        case C.REMOVE_BOOK:
            return state.filter(book =>
                book.id !== action.id
            );
        default:
            return state;
    }
};

const reducers = combineReducers({books});
export {reducers, C};
