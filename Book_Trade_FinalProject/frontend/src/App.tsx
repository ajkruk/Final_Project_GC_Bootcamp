// import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
// import Sort from './components/Sort';
// import SearchResults from './components/SearchResults';
// import SearchForm from './components/SearchForm';
// import { NewUserForm } from './components/NewUserForm';
// import UserCard from './components/UserCard';
// import ChooseCollection from './components/ChooseCollection';
// import LoginPage from './components/LoginPage';
// import SearchForm from './components/SearchForm';
// import SearchResults from './components/SearchResults';
// import NewBook from './components/BookForm';
// import Book from './components/Book';


const App: React.FC = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Perform your login logic here
  //   // For demonstration purposes, let's consider login successful if user clicks on login button
  //   setIsLoggedIn(true);
  // };

  return (
    <div>
   
    <MainPage children={undefined}></MainPage>
    
    <LoginPage onLogin={function (): void {
        throw new Error('Function not implemented.');
      } }/>
 
    </div>
  );
};

export default App;
