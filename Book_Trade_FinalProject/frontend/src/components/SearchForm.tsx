// pull in individual book cards to display upon search

import { useState, useEffect } from 'react';
import './SearchForm.css';
import { searchBooks } from '../services/GoogleBooks';
import BookListingIf from '../models/APIBookListingInterface';
import Book from './Book';


const SearchForm: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState<BookListingIf[]>([]);

    useEffect(() => {
        if (books) {
        console.log(books)}
    }, [books])

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchBooks(searchTerm).then((books: BookListingIf[]) => {
            console.log(books)
            setBooks(books)

        });
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Search for a book"
            />
            <button type="submit">Search</button>
        </form>
       {books ? books.map((book) => {
        return(
            <Book key={book.id} volumeInfo={{
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                categories: book.volumeInfo.categories,
                imageLinks: {
                    smallThumbnail: undefined,
                    thumbnail: book.volumeInfo.imageLinks.thumbnail,
                    small: undefined,
                    medium: undefined,
                    large: undefined,
                    extraLarge: undefined
                },
            }}/>
        )
       }) : <></>}
        </div>
    );
};

export default SearchForm;
