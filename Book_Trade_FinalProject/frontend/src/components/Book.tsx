import React from "react";
import "./Book.css";
import APIBookListingIf from "../models/APIBookListingInterface";
import { addBook } from "../services/BookServices";
import { useUser } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // First Add useNavigate
// import { addBook } from '../services/BookServices';

const Book: React.FC<APIBookListingIf> = (props: APIBookListingIf) => {
  const user = useUser();
  const navigate = useNavigate() // Second create function

  if(!props.volumeInfo) {
    return null
  }

const linkToMyCollection = () => { // Third create function navigate
  navigate('/MyCollection')
}
  return (
    <div>
      <div className="image-container">
        <img
          src={
            props.volumeInfo.imageLinks === undefined
              ? ""
              : props.volumeInfo.imageLinks.thumbnail
          }
          alt={`${props.volumeInfo.title}`}
          className="book-image"
        />
      </div>
      <h2 className="book-title">{props.volumeInfo.title}</h2>
      <h3 className="book-author">{props.volumeInfo.authors}</h3>
      <p className="category">{props.volumeInfo.categories}</p>
      <button
        type="button"
        onClick={() => {
          addBook({
            title: props.volumeInfo.title,
            authors: props.volumeInfo.authors,
            categories: props.volumeInfo.categories,
            imageLinks: {
              thumbnail: props.volumeInfo.imageLinks?.thumbnail,
            },
            owner: user?.uid
          });
          linkToMyCollection (); // 
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Book;
