import React from 'react';
import MainPage from './components/MainPage';
import Sort from './components/Sort';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';

const App: React.FC = () => {
  return (
    <div>
    <MainPage title="The Next Chapter">
    <Sort></Sort>
    <SearchResults books={[]} isLoading={false} error={null}></SearchResults>
    <SearchForm onSearchSubmit={function (): void {
          throw new Error('Function not implemented.');
        } }></SearchForm>

    </MainPage>
    </div>
  );
};

export default App;