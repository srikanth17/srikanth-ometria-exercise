import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import 'materialize-css/dist/css/materialize.min.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));