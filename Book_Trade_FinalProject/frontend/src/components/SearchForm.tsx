// pull in individual book cards to display upon search

import React, { useState } from 'react';
import './SearchForm.css';
// import { searchBooks } from './GoogleBooks';

interface SearchFormProps {
    onSearchSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearchSubmit(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder="Search for a book"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;