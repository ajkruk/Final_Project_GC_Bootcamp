
interface BookListing {
 _id?: string,
 title: string,
 authors: string[],
 categories: string[],
 imageLinks: { 
        thumbnail: string
    }
owner: string | undefined;
}

export default BookListing