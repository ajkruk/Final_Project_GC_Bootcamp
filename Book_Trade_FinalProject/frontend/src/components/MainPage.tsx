import React, { useState } from 'react';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import Book from './Book';

type MainProps = {
  children: React.ReactNode;
};

const MainPage: React.FC<MainProps> = ({ children }) => {
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
        {isLoggedIn ? (
          <Navigation links={navigationLinks} />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </header>
      <main id="main-content">
        {isLoggedIn && children}
      </main>
      {isLoggedIn && <Book title="Book Title" author="Book Author" genre="Book Genre" imageUrl="Book Image URL" />}
    </div>
  );
};

export default MainPage;