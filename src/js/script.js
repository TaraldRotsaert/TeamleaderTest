import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App.jsx';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/index.js';

{
    const init = () => {
        ReactDOM.render(
            <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </Provider>
            , document.body.querySelector(`.react`)
        );
    }

    init();
}