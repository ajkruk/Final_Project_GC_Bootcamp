import axios from 'axios';
import BookListingIf from '../models/BookListingInterface';

const apiUrl = "http://localhost:5173/Trade2Save/Books2Trade";

const getAllBooks = async (): Promise<BookListingIf[]> => {
    const response = await axios.get<BookListingIf[]>(apiUrl);

    return response.data;
};

const updateBook = (id: string, user: BookListingIf) => {
    return axios.put(apiUrl + id, user);
};

function addBook(book: BookListingIf) {
    return axios.post(apiUrl, book);
}

function deleteBook(id: string) {
    return axios.delete(apiUrl +id)
}

export {getAllBooks, updateBook, addBook, deleteBook}