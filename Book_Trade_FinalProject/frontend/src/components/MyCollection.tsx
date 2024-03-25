import { useEffect, useState } from "react"
import BookListingIf from "../models/BookListingInterface";
import Book from "./Book";
import { getAllBooks } from "../services/BookServices";


function ChooseCollection() {
    const [bookCards, setBookCards] = useState<BookListingIf[]>([]); //naming array of objects and creating empty array
    // const [userName, setUserName] = useState('');
    // const [image, setImange] = useState('');

    useEffect(() => { 
        getAllBooks().then((response: BookListingIf[]) => {
            console.log(`response: ${response}`)
            setBookCards(response) 
        }).catch((error) => {
            console.log(error.message)
        }) 
    }, []) //runs the once on pageload unless there is a dependancy in the array

return (
    <div>
        <h1>Choose a Collection</h1> 

        {bookCards ? bookCards.map((bookCard: BookListingIf) => {
            
            return <Book title={bookCard.title}author={bookCard.author} imageUrl={bookCard.imageUrl}></Book>
        }) : <></>}

    </div>
)
}
//userCards above is checking if the array empty or not, if it is not empty it will do what is after the ? in this instance we are looping through the array to create a card for each item (map)
//if not, it will do what is after the colon, here it will display a fragment to display nothing
export default ChooseCollection