import React from 'react';
import './Book.css';

interface BookProps {
    title: string;
    author: string;
    genre: string;
    imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifts.worldwildlife.org%2Fgift-center%2Fgifts%2FSpecies-Adoptions%2FEmperor-Penguin.aspx&psig=AOvVaw3FZXdRW09-ybDGZvuOngbb&ust=1710896884955000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiiotqR_4QDFQAAAAAdAAAAABAE'; // will typically call from api or user-uploaded image
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