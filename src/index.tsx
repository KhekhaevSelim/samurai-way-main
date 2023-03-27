import React from 'react';
import store from "./State/Redux-Store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';



// export const renderApp = () => {
    ReactDOM.render(
        <Provider store={store} >
        <App
            />
        </Provider>,
        document.getElementById('root')
    );
// }
// renderApp();
// store.subscribe(renderApp)

