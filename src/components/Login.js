import React, { useRef, useContext } from 'react';
import { UserContext } from '../UserContext';

export default function Login() {
    const { login, users } = useContext(UserContext);
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const user = users.find(u => u.name === username && u.password === password);
        if (user) {
            login(user);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                ref={usernameRef}
            />
            <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
