import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // For demonstration purposes, let's consider login successful if user clicks on login button
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn && <LoginPage onLogin={handleLogin} />}
      {isLoggedIn && <MainPage children={undefined} />}
    </div>
  );
};

export default App;
