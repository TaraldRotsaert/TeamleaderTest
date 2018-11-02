import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App.jsx';

{
    const init = () => {
        console.log('test');
        ReactDOM.render(<App />, document.body.querySelector(`.react`));
    }

    init();
}