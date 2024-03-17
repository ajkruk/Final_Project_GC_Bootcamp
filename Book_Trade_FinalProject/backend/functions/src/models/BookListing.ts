import { ObjectId } from 'mongodb';

interface BookListing {
 findIndex: any;
 _id?: ObjectId,
 title: string,
 author: string,
 photo: string 
}

export default BookListing