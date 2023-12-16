import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function UserList() {
    const { users, handleDelete, currentUser } = useContext(UserContext);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name} - {user.role}</p>
                    {currentUser.role === 'admin' && (
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    )}
                </div>
            ))}
        </div>
    );
}
