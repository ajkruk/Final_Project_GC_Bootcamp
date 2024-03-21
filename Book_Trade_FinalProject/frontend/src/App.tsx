import React from 'react';
import MainPage from './components/MainPage';
import Sort from './components/Sort';

const App: React.FC = () => {
  return (
    <div>
      <MainPage>
        <Sort />
      </MainPage>
    </div>
  );
};

export default App;
