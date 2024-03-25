import {useState} from 'react'
import { addBook } from '../services/BookServices';



function NewBook() {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');
    const [imageUrl, setImageUrl] = useState('');

return (
    <form onSubmit={() => {
        addBook({
            title, genre, author, imageUrl
        });
    }}
    ><label>Book Title<input type="text" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} value={title}
    ></input></label>

    <label>Genra<input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} value={genre}
    ></input></label>

    <label>Author<input type="text" placeholder="Last Name, First Name" onChange={(e) => setAuthor(e.target.value)} value={author}
    ></input></label>

    <label htmlFor='file'>Book Photo<input type="file" id="file" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}
    /></label>
    <button type="submit"> Add Book </button>
    </form>

   
)
}

export default NewBook