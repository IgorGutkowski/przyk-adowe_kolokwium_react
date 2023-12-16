import React, { useContext } from 'react';
import UserList from './UserList';
import SearchBar from './SearchBar';
import { UserContext } from '../UserContext';
import Login from './Login';

const Content = () => {
    const { users, currentUser, login, logout, handleDelete } = useContext(UserContext);

    if (!currentUser) {
        return <Login />;
    }

    return (
        <>
            <div>
                <span>Logged in as: {currentUser.name}</span>
                <button onClick={logout}>Logout</button>
            </div>
            <SearchBar />
            <UserList users={users} onDelete={handleDelete} />
        </>
    );
};

export default Content;
