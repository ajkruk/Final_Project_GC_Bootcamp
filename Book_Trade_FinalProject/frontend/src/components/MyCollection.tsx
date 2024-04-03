import { useEffect, useState } from "react"
import { getAllBooks } from "../services/BookServices";
import BookListing from "../models/BookListing";
import { getAuth } from "firebase/auth";
import CollectionItem from "./CollectionItem";


function MyCollection() {
    const [bookCards, setBookCards] = useState<BookListing[]>([]); //naming array of objects and creating empty array
    const auth = getAuth();
    const user = auth.currentUser!;
    

    useEffect(() => {
        getAllBooks().then((response: BookListing[]) => {
            console.log(`response: ${response}`)
            setBookCards(response) 
        }).catch((error) => {
            console.log(error.message)
        }) 
    }, []) 

return (
    <div>
        <h1>My Collection</h1> 

        {bookCards ? bookCards.map((bookCard: BookListing) => {
            if(bookCard.owner === user.uid) {
            return <CollectionItem key={bookCard._id} volumeInfo={{
                title: bookCard.title,
                authors: bookCard.authors,
                categories: bookCard.categories,
                imageLinks: {
                    smallThumbnail: undefined,
                    thumbnail: bookCard.imageLinks?.thumbnail,
                    small: undefined,
                    medium: undefined,
                    large: undefined,
                    extraLarge: undefined
                },
            }} owner={bookCard.owner}/>
        }
        }) : <></>}
        </div>

)}


export default MyCollection