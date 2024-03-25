import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import Sort from './components/Sort';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here
    // For demonstration purposes, let's consider login successful if user clicks on login button
    setIsLoggedIn(true);
  };

  return (
    <div>
    <MainPage>
    <Sort></Sort>
    <SearchResults books={[]} isLoading={false} error={null}></SearchResults>
    <SearchForm onSearchSubmit={function (): void {
          throw new Error('Function not implemented.');
        } }></SearchForm>

    </MainPage>
    </div>
  );
};

export default App;
