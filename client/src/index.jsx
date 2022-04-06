import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import store from './store/store';

import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
