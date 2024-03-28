import { useEffect, useState } from "react"
import Book from "./Book";
import { getAllBooks } from "../services/BookServices";
import BookListing from "../models/BookListing";


function ChooseCollection() {
    const [bookCards, setBookCards] = useState<BookListing[]>([]); //naming array of objects and creating empty array
    // const [userName, setUserName] = useState('');
    // const [image, setImange] = useState('');

    useEffect(() => { 
        getAllBooks().then((response: BookListing[]) => {
            console.log(`response: ${response}`)
            setBookCards(response) 
        }).catch((error) => {
            console.log(error.message)
        }) 
    }, []) //runs the once on pageload unless there is a dependancy in the array

return (
    <div>
        <h1>My Collection</h1> 

        {bookCards ? bookCards.map((bookCard: BookListing) => {
            
            return <Book key={bookCard._id} volumeInfo={{
                title: bookCard.title,
                authors: bookCard.authors,
                categories: bookCard.categories,
                imageLinks: {
                    smallThumbnail: undefined,
                    thumbnail: bookCard.imageLinks?.thumbnail || "",
                    small: undefined,
                    medium: undefined,
                    large: undefined,
                    extraLarge: undefined
                },
            }}/>
        }) : <></>}
        </div>
)}


//userCards above is checking if the array empty or not, if it is not empty it will do what is after the ? in this instance we are looping through the array to create a card for each item (map)
//if not, it will do what is after the colon, here it will display a fragment to display nothing
export default ChooseCollection