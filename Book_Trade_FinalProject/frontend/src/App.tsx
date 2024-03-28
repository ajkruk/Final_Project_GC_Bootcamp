import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MyCollection from './components/MyCollection';
import { NewUserForm } from './components/NewUserForm';
import UserCard from './components/UserCard';
import ChooseCollection from './components/ChooseCollection';
import SearchForm from './components/SearchForm';
import ViewUserCollection from './components/ViewUserCollection';
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
      <MainPage children={undefined}/>
      <LoginPage onLogin={function (): void {
        throw new Error('Function not implemented.');
        }}/>
      <NewUserForm/>
      <UserCard firstName={''} lastName={''} userName={''} email={''} password={''} image={''}/>
      <MyCollection/>
      <ChooseCollection/>
      <ViewUserCollection/>
      <SearchForm/> 


    </div>
  );
};

export default App;
