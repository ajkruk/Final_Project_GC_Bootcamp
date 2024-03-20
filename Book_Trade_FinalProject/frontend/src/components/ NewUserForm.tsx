import {useState} from 'react'
import { addUser } from '../services/UserServices';

function NewUser () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('')
    


return (
    <form onSubmit={() => {
        addUser({
            firstName, lastName, userName, email, photo
        });
    }}>
    <label>First Name<input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}
    ></input></label>

    <label>Last Name<input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}
    ></input></label>

    <label>Create User Name<input type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName}
    ></input></label>

    <label>Email Address<input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email}
    ></input></label>

    <label htmlFor='file'>Profile Photo<input type="file" id="file" onChange={(e) => setPhoto(e.target.value)} value={photo}
    /></label>
    <button type="submit">Add User</button>
    </form>

   
)
}

export default NewUser