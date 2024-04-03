import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { NewUserForm } from './components/NewUserForm';
import ChooseCollection from './components/ChooseCollection';
import MainPage from './components/MainPage';
import MyCollection from './components/MyCollection';
import ViewUserCollection from './components/ViewUserCollection';
import AuthProvider from './context/AuthContextProvider';
// import UpdateUser from './components/UpdateUserInfo';
import SearchForm from './components/SearchForm';
import './App.css';


function App() {  
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <header>
          <div className="name">The Next Chapter</div>
          <nav>
            {/* <NavLink className="title-nav" to='/'><h1>The Next Chapter</h1></NavLink> */}
            <NavLink className="MainPage" to='/'>Main</NavLink>
            <NavLink className="search-nav" to='SearchPage'>Search</NavLink>
            {/* <NavLink to='SignUp'>Sign Up</NavLink>   */}
            <NavLink className="signup-nav" to='ChooseCollection'>Choose Collection</NavLink>
            {/* <NavLink to='UserCard'>User Card</NavLink> */}
            <NavLink className="collection-nav" to='MyCollection'>My Collection</NavLink>
            <NavLink className="viewcollection-nav" to='ViewUserCollection'>View Collection</NavLink>
            {/* <NavLink to='UpdateUser'>Update User Data</NavLink> */}
            {/* <NavLink to='SearchForm'>Update User Data</NavLink> */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path='MainPage' element={<MainPage />} />
            <Route path='SignUp' element={<NewUserForm/>}/>
            <Route path='ChooseCollection' element={<ChooseCollection/>}/>
            <Route path='MyCollection' element={<MyCollection/>}/>
            <Route path='ViewUserCollection' element={<ViewUserCollection/>}/>
            {/* <Route path="UpdateUser" element={<UpdateUser/>}/> */}
            <Route path='SearchForm' element={<SearchForm/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;


