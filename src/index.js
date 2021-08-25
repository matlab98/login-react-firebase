import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './routers/app';
import { store } from './store/store';
import './styles/normal.scss';
import './styles/dark-mode.scss';


ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
    document.getElementById('root'));