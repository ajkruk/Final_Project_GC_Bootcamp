<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { NewUserForm } from './components/NewUserForm';
import ChooseCollection from './components/ChooseCollection';
import UserCard from './components/UserCard';
import MainPage from './components/MainPage';
import Sort from './components/Sort';
// import SearchResults from './components/SearchResults';
// import SearchForm from './components/SearchForm';
// import NewBook from './components/BookForm';
// import Book from './components/Book';
>>>>>>> e2016509ca1908ae5ea5d0dd88e9cc437d8664b2

function App() {
  return (
<<<<<<< HEAD
    <div>
      <MainPage children={undefined}/> 
      {<LoginPage onLogin={function (): void {
        throw new Error('Function not implemented.');
      } }/>}
      <NewUserForm/>
      <UserCard firstName={''} lastName={''} userName={''} email={''} password={''} image={''}/>
      <MyCollection/>
      <ChooseCollection/>
      <ViewUserCollection/>
      <SearchForm/> 


    </div>
=======
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to='/'>Log In</NavLink>
          <NavLink to='MainPage'>Main</NavLink>
          <NavLink to='SignUp'>Sign Up</NavLink>  
          <NavLink to='ChooseCollection'>Choose Collection</NavLink>
          <NavLink to='UserCard'>User Card</NavLink>
          <NavLink to='Sort'>Sort</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='Welcome' element={<MainPage />} />
          <Route path='SignUp' element={<NewUserForm/>}/>
          <Route path='ChooseCollection' element={<ChooseCollection/>}/>
          <Route path='UserCard' element={<UserCard firstName={''} lastName={''} userName={''} email={''} password={''} image={''}/>}/>
          <Route path='Sort' element={<Sort/>}/>
        </Routes>
      </main>
    </BrowserRouter>
>>>>>>> e2016509ca1908ae5ea5d0dd88e9cc437d8664b2
  );
}

export default App;
