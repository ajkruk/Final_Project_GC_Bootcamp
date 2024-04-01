import { FormEvent, useState } from 'react'
import "./NewUserForm.css"
import { useAuth } from '../context/AuthContext';


export function NewUserForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const auth = useAuth()
   

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      auth.createUserWithEmail(email, password)
    };

    
    return (
        <div id="containerForm">
        <form className="newUserForm"onSubmit={handleSubmit}>
          <input type="text" name="email" id="email" onChange={(e) => {setEmail(e.currentTarget.value)}} required />
          <input type="text" id="password" name="Password" onChange={(e) => {setPassword(e.currentTarget.value)}} required/>
          <button type="submit">Add User</button>
        </form>
        </div>
    )      

  }

export default NewUserForm
