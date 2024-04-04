import { FormEvent, useState } from 'react'
import "./NewUserForm.css"
import { useAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';




export function NewUserForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [imageUpload, setImageUpload] = useState<Blob>();

  const auth = useAuth()
  const storage = getStorage()
  const navigate = useNavigate();

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `profileImages/${uuidv4()}`);
    uploadBytes(imageRef,  imageUpload).then((snapshot): void => {
        console.log(`snapshot: ${snapshot.metadata.fullPath}`)
        getDownloadURL(snapshot.ref).then((url) => {
            alert("Image Uploaded");
            setProfilePicture(url)
            console.log(`upload image url ${url}`)
        })
    })
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/MainPage')

    auth.createUserWithEmail(email, password).then(async (userCredential) => {
      console.log(`create user displayname: ${displayName} photo: ${profilePicture}`)
      console.log(`userCred uid: ${userCredential.user.uid}`)
      
      const docData = {
        id: userCredential.user.uid,
        email,
        displayName,
        profilePicture,
      }
      const docRef = doc(db, 'users', userCredential.user.uid);
      await setDoc(docRef, docData).then(() => {
        navigate("/MainPage")
      })
      // await firestore.collection('users').doc(user.uid).set({
      //   displayName: displayName,
      //   profilePicture: profilePicture
      // })
    }).catch((e: Error) => {
      console.log(e);
    })
  }
   
  return (
    <div id="containerForm">
    <form className="newUserForm"onSubmit={handleSubmit}>
      <div>
        <label>email</label>
        <input type="text" name="email" id="email" onChange={(e) => {setEmail(e.currentTarget.value)}} required />
        <label>password</label>
        <input type="text" id="password" name="Password" onChange={(e) => {setPassword(e.currentTarget.value)}} required/>
        <label>user name</label>
        <input type="text" id="displayName" name="displayName" onChange={(e) => {setDisplayName(e.currentTarget.value)}} required/>
      </div>
      {profilePicture && <img id="profilePhoto"src={profilePicture}/>} 
      <div>
        <label> Profile Photo </label>
        <input type="file" onChange={(e) => {
            if (e.target.files != null) {
                setImageUpload(e.target.files[0]);
            }
          }} required/>
        <button type="button" onClick={uploadImage}>Add Photo</button>
      </div>
      <button type="submit">Add User</button>
    </form>
    </div>
  )      

}
export default NewUserForm
