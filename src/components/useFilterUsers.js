import { useState, useEffect } from 'react';
export default function useFilterUsers(users, searchTerm, roleFilter) {
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        let updatedUsers = users;

        // Filter by role if roleFilter is set
        if (roleFilter) {
            updatedUsers = updatedUsers.filter(user => user.role.toLowerCase() === roleFilter.toLowerCase());
        }

        // Filter by search term if searchTerm is set
        if (searchTerm) {
            updatedUsers = updatedUsers.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredUsers(updatedUsers);
    }, [users, searchTerm, roleFilter]);

    return filteredUsers;
}

