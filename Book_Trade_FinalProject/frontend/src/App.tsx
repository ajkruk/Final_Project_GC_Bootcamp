import React from 'react';
import MainPage from './components/MainPage';
import Sort from './components/Sort';
import { NewUserForm } from './components/NewUserForm';



const App: React.FC = () => {
  return (
    <div>
    <MainPage title="My Main Page">
     <Sort/>
     <NewUserForm/>

    </MainPage>
    </div>
  );
};

export default App;