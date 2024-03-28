import React, { useState } from 'react';
import Book from './Book';

const MainPage: React.FC = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div id="main-page">
      {isLoggedIn && <Book title="Book Title" author="Book Author" genre="Book Genre" imageUrl="Book Image URL" />}
    </div>
  );
};

export default MainPage;
