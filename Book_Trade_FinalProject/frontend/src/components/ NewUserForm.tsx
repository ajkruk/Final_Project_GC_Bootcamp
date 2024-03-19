import {useState} from 'react'
import { addUser } from '../services/UserServices';

interface Props {
    onUpdate: () => void
}

function NewUser ({ onUpdate }: Props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('')

return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addUser({
            firstName, lastName, userName, email, photo
        }).then(() => {
            onUpdate();
        });
    }}
    ><label>First Name<input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName}
    ></input></label>

    <label>Last Name<input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName}
    ></input></label>

    <label>Create User Name<input type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} value={userName}
    ></input></label>

    <label>Email Address<input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email}
    ></input></label>

    <label>Profile Photo<input type="" placeholder="Profile Photo" onChange={(e) => setPhoto(e.target.value)} value={photo}
    ></input></label>
    <button type="submit"> Create Profile </button>
    </form>

   
)
}

export default NewUser