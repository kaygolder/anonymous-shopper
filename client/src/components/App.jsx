import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import { useSelector } from 'react-redux';


import Login from './Login';
import Register from './Register';

const App = () => {
    return (
        <div className="container">
            <h3 className="m-3">Welcome!</h3>
            <Login />
        </div>
   
    )
}
export default App;