import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import './index.css';
import 'leaflet/dist/leaflet.css'
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();