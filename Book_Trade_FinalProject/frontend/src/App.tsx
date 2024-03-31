import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { NewUserForm } from './components/NewUserForm';
import ChooseCollection from './components/ChooseCollection';
import MainPage from './components/MainPage';
import MyCollection from './components/MyCollection';
import ViewUserCollection from './components/ViewUserCollection';
import AuthProvider from './context/AuthContextProvider';
import UpdateUser from './components/UpdateUserInfo';
import SearchForm from './components/SearchForm';




function App() {  
  
  return (
    <AuthProvider>
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to='/'>Log In</NavLink>
          <NavLink to='MainPage'>Main</NavLink>
          <NavLink to='SignUp'>Sign Up</NavLink>  
          <NavLink to='ChooseCollection'>Choose Collection</NavLink>
          <NavLink to='UserCard'>User Card</NavLink>
          <NavLink to='MyCollection'>My Collection</NavLink>
          <NavLink to='ViewCollection'>View Collection</NavLink>
          <NavLink to='UpdateUser'>Update User Data</NavLink>
          <NavLink to='SearchForm'>Update User Data</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='MainPage' element={<MainPage />} />
          <Route path='SignUp' element={<NewUserForm/>}/>
          <Route path='ChooseCollection' element={<ChooseCollection/>}/>
          <Route path='MyCollection' element={<MyCollection/>}/>
          <Route path='ViewCollection' element={<ViewUserCollection/>}/>
          <Route path="UpdateUser" element={<UpdateUser/>}/>
          <Route path="UpdateUser" element={<UpdateUser/>}/>
          <Route path='SearchForm' element={<SearchForm/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


