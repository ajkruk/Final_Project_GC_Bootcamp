import { useState, useEffect } from 'react'
import { addUser } from '../services/UserServices';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';
import {v4} from 'uuid';

export function PhotoTest () {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageUpload, setImageUpload] = useState<Blob>();

    // useEffect(() => {
    //     if (imageUpload) {
    //       const objectUrl = URL.createObjectURL(imageUpload);
    //       setImageUrl(objectUrl.replace(`blog:`, ""));
  
    //       return () => URL.revokeObjectURL(objectUrl); // free memory when component unmounts
    //     }
    //   }, [imageUpload])
  
      
      const uploadImage = () => {
          if (imageUpload == null) return;
          const imageRef = ref(storage, `profileImages/${imageUpload + v4()}`);
          uploadBytes(imageRef, imageUpload).then((snapshot) => {
            console.log(`snapshot: ${snapshot}`)
              getDownloadURL(snapshot.ref).then((url) => {
                alert("Image Uploaded");
                  setImageUrl(url) 
                  console.log(`upload image url ${url}`)
              })
          })}
    //     const storageRef = firebase.storage().ref('images');
    //       useEffect(() => {
    //         const fetchImages = async () => {
    //         let result = await storageRef.child('profileImages').listAll();
    //             let urlPromises = result.items.map(imageRef => getDownloadURL());
    //             return Promise.all(urlPromises);
    
    //     }
        
    //     const loadImages = async () => {
    //         const urls = await fetchImages();
    //     }
    
    //     loadImages();
    // }, [])
    
    return (
        <>

        <div></div>
            <label> Profile Photo </label>
                <input type="file" onChange={(e) => {
                  if (e.target.files != null){
                    setImageUpload(e.target.files[0]);
                  }
                }}/>
                <img id="profilePhoto"src={imageUrl}/>

                    
            <button type="submit" onClick={uploadImage}>Add User</button>
            <img src={imageUrl}></img>
        </> 
   
    )}

    export default PhotoTest