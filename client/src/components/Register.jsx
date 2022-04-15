import React from 'react';

const Register = () => {
    return (
        <div>
        <div className="card">
        <form className="card-body m-3">
            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">username</label>
                <input type="text" className="form-control" id="usernameInput"  />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">Password</label>
                <input type="password" className="form-control" id="passwordInput" />
            </div>
            <button type="submit" className="btn btn-outline-primary">Sign up</button>
        </form>
        </div>
        </div>
    )
}
export default Register;