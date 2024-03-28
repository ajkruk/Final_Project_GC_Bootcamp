import axios from 'axios';
import BookListing from "../models/BookListing"



const apiUrl: string = (import.meta.env.VITE_API_URL || "")+"/book"

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