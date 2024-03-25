import React, { useState } from 'react';
import Navigation from './Navigation';
import Book from './Book';

type MainProps = {
  children: React.ReactNode;
};

const MainPage: React.FC<MainProps> = ({ children }) => {

  //I will change this to the actual links later, but I do like these ones lol.
  const navigationLinks = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ];

  const [isLoggedIn] = useState(false);

  return (
    <div id="main-page">
      <header id="main-header">
        <Navigation links={navigationLinks} />
      </header>
      <main id="main-content">
        {isLoggedIn && children}
      </main>
      {isLoggedIn && <Book title="Book Title" author="Book Author" genre="Book Genre" imageUrl="Book Image URL" />}
    </div>
  );
  
  
};

export default MainPage;
