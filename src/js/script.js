import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

{
    const init = () => {
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Route component ={App} />
                </Router>
            </Provider>
            , document.body.querySelector(`.react`)
        );
    }

    init();
}