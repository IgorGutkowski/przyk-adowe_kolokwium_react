import React, { useRef, useContext } from 'react';
import { UserContext } from '../UserContext';

export default function SearchBar() {
    const { allUsers, setUsers } = useContext(UserContext);
    const searchInputRef = useRef();
    const roleFilterRef = useRef();

    const filterUsers = () => {
        const searchTerm = searchInputRef.current.value.toLowerCase();
        const roleFilter = roleFilterRef.current.value;

        let updatedUsers = allUsers;

        if (searchTerm) {
            updatedUsers = updatedUsers.filter(user =>
                user.name.toLowerCase().includes(searchTerm)
            );
        }

        if (roleFilter) {
            updatedUsers = updatedUsers.filter(user =>
                user.role === roleFilter
            );
        }

        setUsers([...updatedUsers]);
    };

    return (
        <>
            <h1>Search Bar</h1>
            <input
                type="text"
                placeholder="Search by name..."
                ref={searchInputRef}
                onChange={filterUsers}
            />
            <label>
                Filter by role:
                <select ref={roleFilterRef} onChange={filterUsers}>
                    <option value="">All Roles</option>
                    <option value="admin">Administrator</option>
                    <option value="user">User</option>
                </select>
            </label>
        </>
    );
}
