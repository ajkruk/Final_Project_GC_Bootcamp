import { useEffect, useState } from "react"
import { getAllBooks } from "../services/BookServices";
import BookListing from "../models/BookListing";
import BookReq from './BookReq';
import { useLocation } from "react-router-dom";
// import { getAuth } from "firebase/auth";


function ViewUserCollection() {
    const [bookCards, setBookCards] = useState<BookListing[]>([]); //naming array of objects and creating empty array
    const {state} = useLocation()
    const {ownerId} = state
    
    // const [userName, setUserName] = useState('');
    // const [image, setImange] = useState('');

    // const auth = getAuth();
    // const user = auth.currentUser!;

    useEffect(() => { 
        console.log(`ViewUserCollection: ${ownerId}`)
        getAllBooks().then((response: BookListing[]) => {
            const tempArr: BookListing[] = []
            console.log(`response: ${response}`)
            response.map((book) => {
                if(book.owner === ownerId) {
                  tempArr.push(book)  
                }
            })
            setBookCards(tempArr) 
        }).catch((error) => {
            console.log(error.message)
        }) 
    }, []) //runs the once on pageload unless there is a dependancy in the array

return (
    <div>
        <h1>Collection</h1> 

        {bookCards ? bookCards.map((bookCard: BookListing) => {
                
            return <BookReq key={bookCard._id} volumeInfo={{
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
            }} owner={ownerId}/>
        }) : <></>}
        </div>
)}


//userCards above is checking if the array empty or not, if it is not empty it will do what is after the ? in this instance we are looping through the array to create a card for each item (map)
//if not, it will do what is after the colon, here it will display a fragment to display nothing
export default ViewUserCollection