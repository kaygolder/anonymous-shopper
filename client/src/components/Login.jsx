import React from 'react';
import {Link} from 'react-router-dom';
import Register from './Register';

const Login = () => {
    return (
        <div>
        <div className="card">
        <form className="card-body m-3">
            <div className="mb-3">
                <label htmlFor="codeInput" className="form-label">Code</label>
                <input type="text" className="form-control" id="codeInput"  />
            </div>
            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">username</label>
                <input type="text" className="form-control" id="usernameInput"  />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" />
            </div>
            <button type="submit" className="btn btn-outline-primary">Login</button>
        </form>
        </div>
        <form className="card-body m-3">
            <span>Don't have an account?</span>
            <a className="text-primary fs-5 ms-3">Sign up</a>
        </form>
        </div>
    )
}
export default Login;