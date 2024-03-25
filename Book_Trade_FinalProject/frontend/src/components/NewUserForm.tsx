import { useState, useEffect } from 'react'
import { addUser } from '../services/UserServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';
import {v4} from 'uuid';

export function NewUserForm () {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [imageUpload, setImageUpload] = useState<Blob>();

    useEffect(() => {
        if (imageUpload) {
          const objectUrl = URL.createObjectURL(imageUpload);
          setImage(objectUrl);
  
          return () => URL.revokeObjectURL(objectUrl); // free memory when component unmounts
        }
      }, [imageUpload])
      
      const uploadImage = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, `profileImages/${imageUpload + v4()}`);
          uploadBytes(imageRef, imageUpload).then((snapshot) => {
              getDownloadURL(snapshot.ref).then((url) => {
                alert("Image Uploaded");
                  setImage(url.replace("blob:", "")) 
              })
          })}
    
    return (
        <form onSubmit={() => {
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

        
            <label> Profile Photo </label>
                <input type="file" onChange={(e) => {
                  if (e.target.files != null){
                    setImageUpload(e.target.files[0]);
                  }
                }}/>
                <img id="profilePhoto"src={image}/>

                    
            <button type="submit" onClick={uploadImage}>Add User</button>
        </form>
   
    )}


