import React from 'react';
import './Book.css';

export interface BookProps {
    title: string;
    author: string;
    genre: string;
    imageUrl: string; // will typically call from api or user-uploaded image
    // add a section for the quality of the book? that might be too much
}

const Book: React.FC<BookProps> = ({ title, author, genre, imageUrl }) => {
    return (
        <div className="book">
            <img src={imageUrl} alt={'Cover of ${title}'} className="book-image" />
            <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
                <p className="book-genre">{genre}</p>
            </div>
        </div>
    );
};

export default Book;

