import React from "react";
import APIBookListingIf from "../models/APIBookListingInterface";
// import { addBook } from '../services/BookServices';

const MyBooks: React.FC<APIBookListingIf> = (props: APIBookListingIf) => {
  if (!props.volumeInfo) return null;

  return (
    <div>
      <img
        src={
          props.volumeInfo.imageLinks === undefined
            ? ""
            : props.volumeInfo.imageLinks.thumbnail
        }
        alt={`${props.volumeInfo.title}`}
        className="book-image"
      />
      <h2 className="book-title">{props.volumeInfo.title}</h2>
      <h3 className="book-author">{props.volumeInfo.authors}</h3>
      <p className="category">{props.volumeInfo.categories}</p>
    </div>
  );
};

export default MyBooks;
