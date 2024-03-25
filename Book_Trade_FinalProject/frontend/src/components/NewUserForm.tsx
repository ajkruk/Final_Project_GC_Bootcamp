import { useState } from 'react'
import { addUser } from '../services/UserServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';
import {v4} from 'uuid';
import "./NewUserForm.css"

export function NewUserForm () {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [imageUpload, setImageUpload] = useState<Blob>();
    // const [imageUrl, setImageUrl] = useState<string>('');

      
      const uploadImage = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, `profileImages/${imageUpload + v4()}`);
          uploadBytes(imageRef, imageUpload).then((snapshot): void => {
            console.log(`snapshot: ${snapshot}`)
              getDownloadURL(snapshot.ref).then((url) => {
                alert("Image Uploaded");
                  setImage(url)
                  console.log(`upload image url ${url}`)
              })
          })}
    
    return (
        <form onSubmit={(e) => {
          e.preventDefault()
            addUser({
                firstName, 
                lastName, 
                userName, 
                email,
                image
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

        <div>
            <label> Profile Photo </label>
                <input type="file" onChange={(e) => {
                  if (e.target.files != null){
                    setImageUpload(e.target.files[0]);
                  }
                 {image && <img id="profilePhoto"src={image}/>} 
    
                }}/>
                

                    
          <button type="button" onClick={uploadImage}>Add Image</button>
        </div>
        <label>Profile Photo<img src={image}></img></label>
                    
            <button type="submit">Add User</button>
            
        </form>
    )      

  }


