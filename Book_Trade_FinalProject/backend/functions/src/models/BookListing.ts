import { ObjectId } from 'mongodb';

interface BookListing {
 _id?: ObjectId,
 title: string,
 authors: string[],
 categories: string[],
 imageLinks: { 
    thumbnail: string 
}
owner: string
}

export default BookListing