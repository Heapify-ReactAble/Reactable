import React, { useContext } from 'react';
import { FormContext } from './Context';

const Profile = () => {
    const { username, pwd } = useContext(FormContext);
    
    return (
        <div>
            <h1>Username: {username}</h1>
            <h1>Password: {pwd}</h1>
        </div>
    )
}

export default Profile
