import axios from 'axios';
import BookListingIf from '../models/BookListingInterface';

const apiUrl = "http://127.0.0.1:5001/final-project-27649/us-central1/api/books";

const getAllBooks = async (): Promise<BookListingIf[]> => {
    const response = await axios.get<BookListingIf[]>(apiUrl);

    return response.data;
};

const updateBook = async (id: string, user: BookListingIf) => {
    return await axios.put(apiUrl + id, user);
};

async function addBook(book: BookListingIf) {
    return await axios.post(apiUrl, book);
}

async function deleteBook(id: string) {
    return await axios.delete(apiUrl +id)
}

export {getAllBooks, updateBook, addBook, deleteBook}