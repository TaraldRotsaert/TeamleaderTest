import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App.jsx';
import { BrowserRouter } from "react-router-dom";

{
    const init = () => {
        ReactDOM.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
            , document.body.querySelector(`.react`)
        );
    }

    init();
}