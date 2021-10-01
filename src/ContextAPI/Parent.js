import React, { useState } from 'react';
import { FormContext } from './Context';
import Profile from './Profile';
import Login from './Login';

const Parent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState();
    const [pwd, setPwd] = useState();

    return (
        <FormContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, pwd, setUsername, setPwd }} >
            {
                isLoggedIn ? <Profile /> : <Login />
            }
        </FormContext.Provider>
    )
}

export default Parent
