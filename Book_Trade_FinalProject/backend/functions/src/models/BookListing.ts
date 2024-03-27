import { ObjectId } from 'mongodb';

interface BookListing {
 _id?: ObjectId,
 title: string,
 authors: string[],
 categories: string[],
 imageLinnks: { 
    thumbnail: string 
}}

export default BookListing