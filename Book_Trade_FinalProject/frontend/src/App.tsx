import React from 'react';
import MainPage from './components/MainPage';
import Sort from './components/Sort';

const App: React.FC = () => {
  return (
    <div>
    <MainPage title="My Main Page" children={undefined}>
    <Sort></Sort>

    </MainPage>
    </div>
  );
};

export default App;