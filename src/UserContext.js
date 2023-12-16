import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('users.json');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await res.json();
                setAllUsers(jsonData);
                setUsers(jsonData); // Initially, both lists are the same
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const login = (user) => {
        setCurrentUser(user);
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const handleDelete = (userId) => {
        const updatedUsers = allUsers.filter(user => user.id !== userId);
        setAllUsers(updatedUsers);
        setUsers(updatedUsers);
    };

    return (
        <UserContext.Provider value={{ allUsers, users, setUsers, currentUser, setCurrentUser, login, logout, handleDelete }}>
            {children}
        </UserContext.Provider>
    );
};
