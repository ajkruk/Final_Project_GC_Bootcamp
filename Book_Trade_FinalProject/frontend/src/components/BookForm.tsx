import {useState} from 'react'
import { addBook } from '../services/BookServices';

interface Props {
    onUpdate: () => void
}

function NewBook ({ onUpdate }: Props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [photo, setPhoto] = useState('');

   



return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addBook({
            title, author, photo
        }).then(() => {
            onUpdate();
        });
    }}
    ><label>Book Title<input type="text" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} value={title}
    ></input></label>

    <label>Author<input type="text" placeholder="Last Name, First Name" onChange={(e) => setAuthor(e.target.value)} value={author}
    ></input></label>

    <label htmlFor='file'>Book Photo<input type="file" id="file" onChange={(e) => setPhoto(e.target.value)} value={author}
    /></label>
    <button type="submit"> Add Book </button>
    </form>

   
)
}

export default NewBook