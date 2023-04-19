import React from 'react';
import { useSelector } from 'react-redux';
import UserForm from './form';


const User = () => {
    const user = useSelector((state) => state.userInfo);

    return (
        <div>
            <h2>User Information:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <UserForm />
        </div>
    );
};

export default User;

