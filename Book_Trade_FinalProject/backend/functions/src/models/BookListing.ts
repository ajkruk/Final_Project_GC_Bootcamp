import { ObjectId } from 'mongodb';

interface BookListing {
 _id?: ObjectId,
 title: string,
 author: string,
 photo: string 
}

export default BookListing