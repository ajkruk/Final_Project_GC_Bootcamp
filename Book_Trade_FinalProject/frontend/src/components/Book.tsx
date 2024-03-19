import React from 'react';
import './Book.css';

interface BookProps {
    title: string;
    author: string;
    imageURL: string;
    additionalInfo?: any; // replace 'any' with a more specific type as it comes up
}

const Book: React.FC<BookProps> = ({ title, author, imageUrl, additionalInfo }) => {
    return (
        <div className="book">
            <img src={https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifts.worldwildlife.org%2Fgift-center%2Fgifts%2FSpecies-Adoptions%2FEmperor-Penguin.aspx&psig=AOvVaw3FZXdRW09-ybDGZvuOngbb&ust=1710896884955000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiiotqR_4QDFQAAAAAdAAAAABAE} alt={'Cover of ${title}'} className="book-image" />
            <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">{author}</p>
            </div>
        </div>
    );
};

