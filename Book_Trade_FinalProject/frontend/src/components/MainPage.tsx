import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import SearchForm from './SearchForm';
import './MainPage.css';

const MainPage: React.FC = () => {
  const [isLoggedIn] = useState(false);
  const auth = useAuth();
 
  const handleSignOut = (): void => {
    auth.signOutUser();
  }
  return (
    <div>
      <SearchForm/>
      <div id="main-page">
        {isLoggedIn}
          <div className="signOutDiv">
            <h1>Trade2Save</h1>
            <button onClick={handleSignOut}>Sign out</button> 
        </div>
      </div>
    </div>
  );
};

export default MainPage;
