import React from "react";
import "./Book.css";
import APIBookListingIf from "../models/APIBookListingInterface";
import { sendMessage, useUser } from "../context/AuthContext";

const BookReq: React.FC<APIBookListingIf> = (props: APIBookListingIf) => {
  const user = useUser();

  if(!props.volumeInfo) {
    return null
  }


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
      <button
        type="button"
        onClick={() => {
          if (user) {
            sendMessage(user.uid, props.owner, `I'm interested in a trade for ${props.volumeInfo.title}. Check out my collection!`);
          } 
          alert(`Request sent for ${props.volumeInfo.title} sent successfully!`)
      
        }}
      >Request Trade</button>
    </div>
  );
};

export default BookReq;