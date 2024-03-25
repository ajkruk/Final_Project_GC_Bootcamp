import React from 'react';
import Book from './Book';
import BookListingIf from '../models/BookListingInterface';

interface SearchResultsProps {
    books: Array<BookListingIf>;
    isLoading: boolean;
    error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ books, isLoading, error }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {books.map(book => (
                <Book
                    title={book.title}
                    author={book.author}
                    imageUrl={book.imageUrl}
                />
            ))}
        </div>
    );
};

export default SearchResults;
