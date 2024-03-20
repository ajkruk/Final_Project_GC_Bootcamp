import React, { useState } from 'react';
import Navigation from './Navigation';
import LoginPage from './LoginPage';

type MainProps = {
  title: string;
  children: React.ReactNode;
};

const MainPage: React.FC<MainProps> = ({ title, children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //I will change this to the actual links later, but I do like these ones lol.
  const navigationLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="main-page">
      <header id="main-header">
        <h1>{title}</h1>
        {isLoggedIn ? (
          <Navigation links={navigationLinks} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </header>
      <main id="main-content">
        {children}
      </main>
      <footer id="main-footer">
        <p>This is the footer.</p>
      </footer>
    </div>
  );
};

export default MainPage;