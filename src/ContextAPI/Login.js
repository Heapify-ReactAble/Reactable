import React, { useContext } from 'react';
import { FormContext } from './Context';

const Login = () => {
    const { setIsLoggedIn, username, setUsername, pwd, setPwd } = useContext(FormContext);

    return (
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <input value={pwd} onChange={e => setPwd(e.target.value)} /><br />
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
    )
}

export default Login
