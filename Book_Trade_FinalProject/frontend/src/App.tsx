import { 
  createBrowserRouter, 
  Route, 
  Routes,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';


// Pages to import.

import LoginPage from './components/LoginPage';
// import { NewUserForm } from './components/NewUserForm';
// import ChooseCollection from './components/ChooseCollection';
// import UserCard from './components/UserCard';
import MainPage from './components/MainPage';
// import Sort from './components/Sort';
// import SearchResults from './components/SearchResults';
// import SearchForm from './components/SearchForm';
// import NewBook from './components/BookForm';
// import Book from './components/Book';

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={RootLayout}>
          <Route index element={<LoginPage />} />
        </Route>
  )
);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
