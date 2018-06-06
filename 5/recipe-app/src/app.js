import React from 'react';
import {render} from 'react-dom';
import data from '../data/index';
import Menu from './components/Menu/index';

window.React = React;

render(
    <Menu recipes={data} title="My Recipes"/>,
    document.getElementById('react-container')
);

