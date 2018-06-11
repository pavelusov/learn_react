import React from 'react';
import C from './constants';
import redusers from './store/reducers';
import c4 from 'uuid';
import {createStore} from 'redux';
import initialState from '../data/initialState';

const store = createStore(redusers, initialState);

store.subscribe((e) => {
    console.log('store' , store.getState())
});

// console.log(store.getState());
store.dispatch({
    type: C.ADD_COLOR,
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});

store.dispatch({
    type: C.REMOVE_COLOR,
    id: "58d9caee-6ea6-4d7b-9984-65b145031979"
});

// console.log(store.getState());
