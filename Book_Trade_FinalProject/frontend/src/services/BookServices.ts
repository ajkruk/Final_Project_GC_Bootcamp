import axios from 'axios';
import BookListing from "../models/BookListing"



const apiUrl = "http://127.0.0.1:5001/final-project-27649/us-central1/api/books";

const getAllBooks = async (): Promise<BookListing[]> => {
    const response = await axios.get<BookListing[]>(apiUrl);

    return response.data;
};

const updateBook = async (id: string, user: BookListing) => {
    return await axios.put(apiUrl + id, user);
};

async function addBook(book: BookListing) {
    return await axios.post(apiUrl, book);
}

async function deleteBook(id: string) {
    return await axios.delete(apiUrl +id)
}

export {getAllBooks, updateBook, addBook, deleteBook}