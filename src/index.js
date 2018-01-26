import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import {Provider} from 'react-redux';
import store from './store.js';

const jsx = <Provider store={store}>
                <AppContainer />
            </Provider>

ReactDOM.render(  jsx , document.getElementById('root'));
