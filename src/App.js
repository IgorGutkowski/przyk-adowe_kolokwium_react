import React from 'react';
import { UserProvider } from './UserContext';
import Content from './components/Content';

function App() {
  return (
      <UserProvider>
        <Content />
      </UserProvider>
  );
}

export default App;
