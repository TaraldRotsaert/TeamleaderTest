import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return <div className="notFound">
        <h3 className="notFound-title">Deze order bestaat niet</h3>
        <Link to="../">Breng me terug naar de homepagina!</Link>
    </div>
}

export default NotFound;