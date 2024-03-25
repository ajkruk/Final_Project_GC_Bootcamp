import React from 'react';
import './Book.css';

export interface BookProps {
    title: string;
    author: string;
    imageUrl: string; // will typically call from api or user-uploaded image
}

const Book: React.FC<BookProps> = ({ title, author, imageUrl }) => {
    return (
        <div className="book">
            <img src={imageUrl} alt={'Cover of ${title}'} className="book-image" />
            <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
            </div>
        </div>
    );
};

export default Book;

