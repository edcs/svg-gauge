import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './state/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div />
    </Provider>,
    document.getElementById('root')
);
