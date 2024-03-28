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

function App() {
  return (
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
          <Route path='UserCard' element={<UserCard/>}/>
          <Route path='Sort' element={<Sort/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
